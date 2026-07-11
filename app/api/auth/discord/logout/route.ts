import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.redirect(`${process.env.NEXTAUTH_URL}/dashboard`);
  response.cookies.delete("session");
  return response;
}
