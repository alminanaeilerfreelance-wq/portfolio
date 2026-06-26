import { json } from "@/app/_lib/api";

export async function GET() {
  if (process.env.ENABLE_MONGO_DEBUG !== "true") {
    return json({ message: "Debug endpoint disabled" }, 404);
  }

  const uri = process.env.MONGODB_URI || "";
  let parsed = null;

  try {
    if (uri) {
      const url = new URL(uri);
      parsed = {
        protocol: url.protocol,
        host: url.host,
        usernameLength: decodeURIComponent(url.username || "").length,
        passwordLength: decodeURIComponent(url.password || "").length,
        database: url.pathname.replace(/^\//, "") || null,
        searchParams: Array.from(url.searchParams.keys()).sort(),
      };
    }
  } catch (error) {
    parsed = { parseError: error.message };
  }

  return json({
    hasMongoUri: Boolean(uri),
    mongoUriLength: uri.length,
    mongoDb: process.env.MONGODB_DB || null,
    nodeEnv: process.env.NODE_ENV || null,
    vercelEnv: process.env.VERCEL_ENV || null,
    parsed,
  });
}
