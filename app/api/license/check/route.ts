import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY!;

export async function POST(request: NextRequest) {
  try {
    const { discord_id } = await request.json();
    if (!discord_id) return NextResponse.json({ error: "Missing discord_id" }, { status: 400 });

    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/licenses?discord_id=eq.${discord_id}&select=active`,
      {
        headers: {
          apikey: SUPABASE_SERVICE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
        },
      }
    );
    const data = await res.json();
    if (!data || data.length === 0) return NextResponse.json({ active: false, exists: false });
    return NextResponse.json({ active: data[0].active, exists: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
