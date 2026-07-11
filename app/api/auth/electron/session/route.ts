import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");
  if (!token) return NextResponse.json({ error: "Missing token" }, { status: 400 });

  try {
    const session = JSON.parse(Buffer.from(token, "base64url").toString());
    return NextResponse.json({ user: session });
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 400 });
  }
}
