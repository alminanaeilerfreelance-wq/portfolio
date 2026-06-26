import { getCollection, idFilter, json, serialize } from "@/app/_lib/api";

export async function PUT(request, { params }) {
  try {
    const { collection, id } = await params;
    const filter = idFilter(id);
    if (!filter) return json({ message: "Invalid id" }, 400);

    const col = await getCollection(collection);
    const body = await request.json();
    await col.updateOne(filter, {
      $set: {
        ...body,
        updatedAt: new Date(),
      },
    });

    const doc = await col.findOne(filter);
    return json({ item: serialize(doc) });
  } catch (error) {
    return json({ message: error.message }, 400);
  }
}

export async function DELETE(_request, { params }) {
  try {
    const { collection, id } = await params;
    const filter = idFilter(id);
    if (!filter) return json({ message: "Invalid id" }, 400);

    const col = await getCollection(collection);
    await col.deleteOne(filter);
    return json({ ok: true });
  } catch (error) {
    return json({ message: error.message }, 400);
  }
}
