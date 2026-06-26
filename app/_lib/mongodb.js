import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "portfolio";

let clientPromise;

const clientOptions = {
  serverSelectionTimeoutMS: 10000,
  ...(uri?.startsWith("mongodb+srv://") ? { tls: true } : {}),
};

export async function getDb() {
  if (!uri) {
    throw new Error("MONGODB_URI is not configured");
  }

  if (!clientPromise) {
    const client = new MongoClient(uri, clientOptions);
    clientPromise = client.connect();
  }

  const client = await clientPromise;
  return client.db(dbName);
}
