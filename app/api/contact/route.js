import { getCollection, json, serialize } from "@/app/_lib/api";

export async function POST(request) {
  try {
    const body = await request.json();
    const col = await getCollection("contacts");
    const now = new Date();
    const result = await col.insertOne({
      name: body.name || "",
      email: body.email || "",
      location: body.location || "",
      budget: body.budget || "",
      subject: body.subject || "",
      message: body.message || "",
      createdAt: now,
      updatedAt: now,
    });
    const doc = await col.findOne({ _id: result.insertedId });
    return json({ item: serialize(doc) }, 201);
  } catch (error) {
    return json({ message: error.message }, 400);
  }
}
