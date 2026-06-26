import { json } from "@/app/_lib/api";

export async function POST(request) {
  const body = await request.json();
  const username = String(body.username || "").trim();
  const password = String(body.password || "");

  const validUsername = process.env.ADMIN_USERNAME || "portfolio";
  const validPassword = process.env.ADMIN_PASSWORD;

  if (!validPassword) {
    return json({ ok: false, message: "Admin password is not configured" }, 500);
  }

  if (username === validUsername && password === validPassword) {
    return json({ ok: true });
  }

  return json({ ok: false, message: "Invalid username or password" }, 401);
}
