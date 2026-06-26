import { getCollection, json, serializeMany } from "@/app/_lib/api";
import {
  defaultBlogs,
  defaultClients,
  defaultExperience,
  defaultHeaders,
  defaultPersonalInfo,
  defaultPortfolio,
  defaultSkills,
  defaultTraining,
  defaultTestimonials,
} from "@/app/_lib/defaultData";

const defaults = {
  headers: defaultHeaders,
  portfolio: defaultPortfolio,
  blogs: defaultBlogs,
  skills: defaultSkills,
  training: defaultTraining,
  experience: defaultExperience,
  testimonials: defaultTestimonials,
  clients: defaultClients,
  personal: [defaultPersonalInfo],
};

export async function GET(_request, { params }) {
  const { collection } = await params;

  try {
    const col = await getCollection(collection);
    const count = await col.countDocuments();
    if (count === 0 && defaults[collection]?.length) {
      const now = new Date();
      await col.insertMany(
        defaults[collection].map((item) => ({
          ...item,
          createdAt: now,
          updatedAt: now,
        })),
      );
    }
    const docs = await col.find({}).sort({ order: 1, createdAt: -1 }).toArray();
    return json({ items: serializeMany(docs) });
  } catch (error) {
    if (defaults[collection]) {
      return json({
        items: defaults[collection],
        readOnly: true,
        message:
          "Database connection failed. Showing default content until MongoDB Atlas allows this deployment to connect.",
        details: error.message,
      });
    }

    return json({ message: error.message }, 400);
  }
}

export async function POST(request, { params }) {
  try {
    const { collection } = await params;
    const col = await getCollection(collection);
    const body = await request.json();
    const now = new Date();
    const result = await col.insertOne({
      ...body,
      createdAt: now,
      updatedAt: now,
    });

    const doc = await col.findOne({ _id: result.insertedId });
    return json({ item: { ...doc, _id: doc._id.toString() } }, 201);
  } catch (error) {
    return json({ message: error.message }, 400);
  }
}
