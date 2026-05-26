"use server"

import { auth } from "@/auth"

export async function updateProfile(data: { name: string; location: string; company: string; twitter: string; website: string; bio: string }) {
  const session = await auth()
  if (!session?.user?.email) {
    throw new Error("Unauthorized")
  }

  const clientPromise = (await import("@/lib/mongodb")).default
  if (!clientPromise) {
    throw new Error("MongoDB client is null")
  }
  const client = await clientPromise
  const db = client.db()
  
  await db.collection("users").updateOne(
    { email: session.user.email },
    { $set: {
      name: data.name,
      location: data.location,
      company: data.company,
      twitter: data.twitter,
      website: data.website,
      bio: data.bio
    } }
  )

  return { success: true }
}

export async function getProfile() {
  const session = await auth()
  if (!session?.user?.email) {
    return null
  }

  const clientPromise = (await import("@/lib/mongodb")).default
  if (!clientPromise) {
    throw new Error("MongoDB client is null")
  }
  const client = await clientPromise
  const db = client.db()
  
  const user = await db.collection("users").findOne({ email: session.user.email })
  if (!user) return null

  return {
    name: user.name || "",
    location: user.location || "",
    company: user.company || "",
    twitter: user.twitter || "",
    website: user.website || "",
    bio: user.bio || ""
  }
}

export async function updateEmailPreferences(data: { marketing: boolean; community: boolean }) {
  const session = await auth()
  if (!session?.user?.email) throw new Error("Unauthorized")

  const clientPromise = (await import("@/lib/mongodb")).default
  if (!clientPromise) throw new Error("MongoDB client is null")
  
  const client = await clientPromise
  const db = client.db()
  
  await db.collection("users").updateOne(
    { email: session.user.email },
    { $set: { emailPreferences: data } }
  )

  return { success: true }
}

export async function getEmailPreferences() {
  const session = await auth()
  if (!session?.user?.email) return null

  const clientPromise = (await import("@/lib/mongodb")).default
  if (!clientPromise) throw new Error("MongoDB client is null")
  
  const client = await clientPromise
  const db = client.db()
  
  const user = await db.collection("users").findOne({ email: session.user.email })
  return user?.emailPreferences || { marketing: true, community: true }
}

export async function changePassword(currentPass: string, newPass: string) {
  const session = await auth()
  if (!session?.user?.email) throw new Error("Unauthorized")

  const clientPromise = (await import("@/lib/mongodb")).default
  if (!clientPromise) throw new Error("MongoDB client is null")
  
  const client = await clientPromise
  const db = client.db()
  
  const user = await db.collection("users").findOne({ email: session.user.email })
  if (!user) throw new Error("User not found")
  if (!user.password) throw new Error("User uses OAuth and does not have a password")

  const bcrypt = (await import("bcryptjs")).default
  const isValid = await bcrypt.compare(currentPass, user.password)
  if (!isValid) throw new Error("Invalid current password")

  const hashed = await bcrypt.hash(newPass, 10)
  await db.collection("users").updateOne(
    { email: session.user.email },
    { $set: { password: hashed } }
  )

  return { success: true }
}

export async function deleteAccount() {
  const session = await auth()
  if (!session?.user?.email) throw new Error("Unauthorized")

  const clientPromise = (await import("@/lib/mongodb")).default
  if (!clientPromise) throw new Error("MongoDB client is null")
  
  const client = await clientPromise
  const db = client.db()
  
  // Delete user's designs
  await db.collection("designs").deleteMany({ userEmail: session.user.email })
  
  // Delete user accounts, sessions, user
  const user = await db.collection("users").findOne({ email: session.user.email })
  if(user) {
    await db.collection("accounts").deleteMany({ userId: user._id })
    await db.collection("sessions").deleteMany({ userId: user._id })
  }
  await db.collection("users").deleteOne({ email: session.user.email })

  return { success: true }
}

export async function getUserStats() {
  const session = await auth()
  if (!session?.user?.email) return { posts: 0, favorites: 0, score: 0 }

  const clientPromise = (await import("@/lib/mongodb")).default
  if (!clientPromise) throw new Error("MongoDB client is null")
  
  const client = await clientPromise
  const db = client.db()
  
  const posts = await db.collection("designs").countDocuments({ userEmail: session.user.email, status: "approved" })
  
  return {
    posts,
    favorites: posts * 12, // Mock logic
    score: posts * 50 // Mock logic
  }
}
