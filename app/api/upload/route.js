import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { json } from "@/app/_lib/api";

export async function POST(request) {
  try {
    const form = await request.formData();
    const file = form.get("file");

    if (!file || typeof file === "string") {
      return json({ message: "No file uploaded" }, 400);
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const extension = path.extname(file.name || "");
    const safeName = `${Date.now()}-${Math.random()
      .toString(36)
      .slice(2)}${extension}`.replace(/[^a-zA-Z0-9.-]/g, "");
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    const diskPath = path.join(uploadDir, safeName);

    await mkdir(uploadDir, { recursive: true });
    await writeFile(diskPath, buffer);

    return json({ url: `/uploads/${safeName}` }, 201);
  } catch (error) {
    return json({ message: error.message }, 400);
  }
}
