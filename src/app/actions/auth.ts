"use server"

import { signIn } from "@/auth"

export async function loginWithProvider(provider: string) {
  await signIn(provider, { redirectTo: "/dashboard" })
}

export async function loginWithCredentials(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  
  if (!email || !password) {
    throw new Error("Email and password are required")
  }

  await signIn("credentials", {
    email,
    password,
    redirectTo: "/dashboard",
  })
}

export async function registerWithCredentials(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const name = formData.get("name") as string || "User"
  
  if (!email || !password) {
    throw new Error("Email and password are required")
  }

  const bcrypt = await import("bcryptjs")
  const clientPromise = (await import("@/lib/mongodb")).default
  if (!clientPromise) {
    throw new Error("MongoDB client is null")
  }
  const client = await clientPromise
  const db = client.db()
  
  const existingUser = await db.collection("users").findOne({ email })
  if (existingUser) {
    if (existingUser.password) {
      throw new Error("Account already exists. Please login.")
    } else {
      // User created via OAuth but now wants to set a password
      const hashedPassword = await bcrypt.hash(password, 10)
      await db.collection("users").updateOne(
        { email },
        { $set: { password: hashedPassword, name } }
      )
    }
  } else {
    const hashedPassword = await bcrypt.hash(password, 10)
    await db.collection("users").insertOne({
      email,
      password: hashedPassword,
      name,
      createdAt: new Date()
    })
  }

  // Auto login after registration
  await signIn("credentials", {
    email,
    password,
    redirectTo: "/dashboard",
  })
}
