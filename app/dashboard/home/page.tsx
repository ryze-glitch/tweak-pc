import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

async function checkLicense(discordId: string): Promise<boolean> {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/license/check`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ discord_id: discordId }),
      cache: "no-store",
    });
    const data = await res.json();
    return data.active === true;
  } catch {
    return false;
  }
}

export default async function DashboardHome() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session");

  if (!sessionCookie) redirect("/dashboard");

  let user;
  try {
    user = JSON.parse(sessionCookie.value);
  } catch {
    redirect("/dashboard");
  }

  const hasLicense = await checkLicense(user.id);
  const avatarUrl = user.avatar
    ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
    : `https://cdn.discordapp.com/embed/avatars/0.png`;

  return (
    <div className="relative flex min-h-screen flex-col" style={{ background: "var(--background)" }}>
      <div aria-hidden="true" className="pointer-events-none fixed -top-64 -right-64 z-[9990] h-[600px] w-[600px] rounded-full blur-[160px] mix-blend-screen" style={{ background: "color-mix(in oklab, var(--primary) 5%, transparent)", animation: "orb-a 18s ease-in-out infinite" }} />
      <div aria-hidden="true" className="pointer-events-none fixed -bottom-64 -left-32 z-[9990] h-[500px] w-[500px] rounded-full blur-[150px] mix-blend-screen" style={{ background: "color-mix(in oklab, var(--primary) 4%, transparent)", animation: "orb-b 22s ease-in-out infinite" }} />
      <div aria-hidden="true" className="grain-overlay" />

      {/* Header */}
      <header className="border-b px-6 py-4 backdrop-blur" style={{ borderColor: "color-mix(in oklab, var(--border) 60%, transparent)", background: "color-mix(in oklab, var(--background) 80%, transparent)" }}>
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="NexTune" width={32} height={32} className="rounded-md" />
            <span className="text-base font-semibold tracking-tight" style={{ fontFamily: "var(--font-outfit)" }}>
              Nex<span style={{ color: "var(--primary)" }}>Tune</span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Image src={avatarUrl} alt={user.username} width={32} height={32} className="rounded-full" />
            <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>{user.username}</span>
            <a href="/api/auth/discord/logout" className="text-sm transition-colors hover:text-white" style={{ color: "var(--muted-foreground)" }}>Esci</a>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-5xl flex-1 px-6 py-12">
        {hasLicense ? (
          <>
            <div className="mb-10">
              <h1 className="text-3xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-outfit)" }}>
                Benvenuto, <span style={{ color: "var(--primary)" }}>{user.username}</span>
              </h1>
              <p className="mt-2 text-sm" style={{ color: "var(--muted-foreground)" }}>Licenza attiva — gestisci i tuoi profili di ottimizzazione.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Profili attivi", value: "0", desc: "Nessun profilo applicato" },
                { title: "Tweaks applicati", value: "0", desc: "Nessun tweak attivo" },
                { title: "Ultima ottimizzazione", value: "—", desc: "Mai eseguita" },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl p-6" style={{ border: "1px solid color-mix(in oklab, var(--border) 60%, transparent)", background: "color-mix(in oklab, var(--card) 40%, transparent)" }}>
                  <p className="text-xs font-medium uppercase tracking-[0.12em]" style={{ color: "var(--muted-foreground)" }}>{c.title}</p>
                  <p className="mt-3 text-3xl font-semibold" style={{ fontFamily: "var(--font-outfit)", color: "var(--primary)" }}>{c.value}</p>
                  <p className="mt-1 text-sm" style={{ color: "var(--muted-foreground)" }}>{c.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl p-8 text-center" style={{ border: "1px solid color-mix(in oklab, var(--border) 60%, transparent)", background: "color-mix(in oklab, var(--card) 40%, transparent)" }}>
              <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>Dashboard in costruzione. Le funzionalità arriveranno con il launcher.</p>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="rounded-3xl p-12 max-w-md" style={{ border: "1px solid color-mix(in oklab, var(--border) 60%, transparent)", background: "color-mix(in oklab, var(--card) 40%, transparent)" }}>
              <div className="mb-6 text-5xl">🔒</div>
              <h1 className="text-2xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-outfit)" }}>Nessuna licenza attiva</h1>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                Il tuo account Discord non ha una licenza NexTune attiva. Contatta il supporto su Discord per ottenerla.
              </p>
              <a
                href="https://discord.gg/nextune"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-10 items-center gap-2 rounded-md px-5 text-sm font-medium text-white transition-opacity hover:opacity-80"
                style={{ background: "#5865F2" }}
              >
                Contatta il supporto
              </a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
