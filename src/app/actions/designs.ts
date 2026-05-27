"use server"

import { auth } from "@/auth"

export async function saveDesignDraft(data: { html: string; css: string; js: string }) {
  const session = await auth()
  if (!session?.user?.email) throw new Error("Unauthorized")

  const clientPromise = (await import("@/lib/mongodb")).default
  if (!clientPromise) throw new Error("MongoDB client is null")
  
  const client = await clientPromise
  const db = client.db()
  
  await db.collection("designs").insertOne({
    userEmail: session.user.email,
    ...data,
    status: "draft",
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  return { success: true }
}

export async function submitDesignForReview(data: { html: string; css: string; js: string }) {
  const session = await auth()
  if (!session?.user?.email) throw new Error("Unauthorized")

  const clientPromise = (await import("@/lib/mongodb")).default
  if (!clientPromise) throw new Error("MongoDB client is null")
  
  const client = await clientPromise
  const db = client.db()
  
  await db.collection("designs").insertOne({
    userEmail: session.user.email,
    ...data,
    status: "in_review",
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  return { success: true }
}

export async function getReviewPendingDesigns() {
  const session = await auth()
  if (!session?.user?.email) throw new Error("Unauthorized")
  // In a real app we would check if session.user.role === "ADMIN"

  const clientPromise = (await import("@/lib/mongodb")).default
  if (!clientPromise) throw new Error("MongoDB client is null")
  
  const client = await clientPromise
  const db = client.db()
  
  const designs = await db.collection("designs").find({ status: "in_review" }).toArray()
  
  return designs.map(d => ({
    id: d._id.toString(),
    userEmail: d.userEmail,
    html: d.html,
    css: d.css,
    js: d.js,
    createdAt: d.createdAt,
  }))
}

export async function updateDesignStatus(id: string, status: "approved" | "rejected") {
  const session = await auth()
  if (!session?.user?.email) throw new Error("Unauthorized")

  const clientPromise = (await import("@/lib/mongodb")).default
  if (!clientPromise) throw new Error("MongoDB client is null")
  
  const { ObjectId } = await import("mongodb")
  const client = await clientPromise
  const db = client.db()
  
  await db.collection("designs").updateOne(
    { _id: new ObjectId(id) },
    { $set: { status, updatedAt: new Date() } }
  )

  return { success: true }
}

export async function getUserDesigns(status: string) {
  const session = await auth()
  if (!session?.user?.email) return []

  const clientPromise = (await import("@/lib/mongodb")).default
  if (!clientPromise) return []
  
  const client = await clientPromise
  const db = client.db()
  
  let dbStatus = "approved"
  if (status === "In Review") dbStatus = "in_review"
  else if (status === "Rejected") dbStatus = "rejected"
  else if (status === "Drafts") dbStatus = "draft"
  else if (status === "Variations") dbStatus = "variations"

  const designs = await db.collection("designs").find({ 
    userEmail: session.user.email,
    status: dbStatus
  }).sort({ createdAt: -1 }).toArray()
  
  return designs.map(d => ({
    id: d._id.toString(),
    html: d.html,
    css: d.css,
    js: d.js,
    createdAt: d.createdAt,
    status: d.status
  }))
}
