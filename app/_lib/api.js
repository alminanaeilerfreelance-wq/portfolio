import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

import { getDb } from "@/app/_lib/mongodb";

export const collectionMap = {
  headers: "headers",
  portfolio: "portfolio",
  blogs: "blogs",
  skills: "skills",
  training: "training",
  experience: "experience",
  testimonials: "testimonials",
  clients: "clients",
  contacts: "contacts",
  personal: "personal",
};

export function json(data, status = 200) {
  return NextResponse.json(data, { status });
}

export function serialize(doc) {
  if (!doc) return doc;
  return {
    ...doc,
    _id: doc._id?.toString?.() || doc._id,
  };
}

export function serializeMany(docs) {
  return docs.map(serialize);
}

export async function getCollection(name) {
  const collection = collectionMap[name];
  if (!collection) {
    throw new Error("Unknown collection");
  }

  const db = await getDb();
  return db.collection(collection);
}

export function idFilter(id) {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  return { _id: new ObjectId(id) };
}
