import { json } from "@/app/_lib/api";

const MAX_UPLOAD_BYTES = 4 * 1024 * 1024;

export async function POST(request) {
  try {
    const form = await request.formData();
    const file = form.get("file");

    if (!file || typeof file === "string") {
      return json({ message: "No file uploaded" }, 400);
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    if (buffer.byteLength > MAX_UPLOAD_BYTES) {
      return json({ message: "Upload must be 4MB or smaller" }, 400);
    }

    const mimeType = file.type || "application/octet-stream";
    const dataUrl = `data:${mimeType};base64,${buffer.toString("base64")}`;

    return json({ url: dataUrl }, 201);
  } catch (error) {
    return json({ message: error.message }, 400);
  }
}
