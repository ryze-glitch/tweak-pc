import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY!;
const ADMIN_SECRET = process.env.ADMIN_SECRET!;

export async function POST(request: NextRequest) {
  try {
    const { discord_id, discord_username, secret, active } = await request.json();

    if (secret !== ADMIN_SECRET) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    if (!discord_id) return NextResponse.json({ error: "Missing discord_id" }, { status: 400 });

    const checkRes = await fetch(
      `${SUPABASE_URL}/rest/v1/licenses?discord_id=eq.${discord_id}&select=id`,
      { headers: { apikey: SUPABASE_SERVICE_KEY, Authorization: `Bearer ${SUPABASE_SERVICE_KEY}` } }
    );
    const existing = await checkRes.json();

    if (existing && existing.length > 0) {
      await fetch(`${SUPABASE_URL}/rest/v1/licenses?discord_id=eq.${discord_id}`, {
        method: "PATCH",
        headers: { apikey: SUPABASE_SERVICE_KEY, Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ active: active ?? true }),
      });
    } else {
      await fetch(`${SUPABASE_URL}/rest/v1/licenses`, {
        method: "POST",
        headers: { apikey: SUPABASE_SERVICE_KEY, Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ discord_id, discord_username: discord_username ?? "", active: active ?? true }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
