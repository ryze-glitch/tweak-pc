import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");
  const source = searchParams.get("state") || "";

  if (error || !code) {
    if (source === "electron") return NextResponse.redirect("nextune://auth?error=access_denied");
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/dashboard?error=access_denied`);
  }

  try {
    const redirectUri = `${process.env.NEXTAUTH_URL}/api/auth/discord/callback`;

    const tokenRes = await fetch("https://discord.com/api/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: process.env.DISCORD_CLIENT_ID!,
        client_secret: process.env.DISCORD_CLIENT_SECRET!,
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUri,
      }),
    });

    const tokenData = await tokenRes.json();
    if (!tokenData.access_token) throw new Error("No token");

    const userRes = await fetch("https://discord.com/api/users/@me", {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });
    const user = await userRes.json();

    const session = {
      id: user.id,
      username: user.username,
      avatar: user.avatar,
      email: user.email,
      accessToken: tokenData.access_token,
    };

    // Electron: redirect via deep link
    if (source === "electron") {
      // Store session temporarily with a short-lived token
      const token = Buffer.from(JSON.stringify(session)).toString("base64url");
      return NextResponse.redirect(`nextune://auth?token=${token}`);
    }

    // Web: set cookie
    const response = NextResponse.redirect(`${process.env.NEXTAUTH_URL}/dashboard/home`);
    response.cookies.set("session", JSON.stringify(session), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    return response;
  } catch (err) {
    console.error(err);
    if (source === "electron") return NextResponse.redirect("nextune://auth?error=oauth_error");
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/dashboard?error=oauth_error`);
  }
}
