import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY!;
const ADMIN_SECRET = process.env.ADMIN_SECRET!;

export async function POST(request: NextRequest) {
  try {
    const { secret } = await request.json();
    if (secret !== ADMIN_SECRET) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/licenses?select=discord_id,discord_username,active,created_at&order=created_at.desc`,
      { headers: { apikey: SUPABASE_SERVICE_KEY, Authorization: `Bearer ${SUPABASE_SERVICE_KEY}` } }
    );
    const licenses = await res.json();
    return NextResponse.json({ licenses });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
