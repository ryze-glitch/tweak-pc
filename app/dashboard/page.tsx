import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import DiscordButton from "./DiscordButton";

export const metadata: Metadata = {
  title: "NexTune - Dashboard",
  description: "Accedi alla dashboard NexTune per gestire le tue ottimizzazioni.",
};

export default function Dashboard() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4" style={{ background: "var(--background)" }}>
      <div aria-hidden="true" className="pointer-events-none fixed -top-64 -right-64 z-[9990] h-[600px] w-[600px] rounded-full blur-[160px] mix-blend-screen" style={{ background: "color-mix(in oklab, var(--primary) 5%, transparent)", animation: "orb-a 18s ease-in-out infinite" }} />
      <div aria-hidden="true" className="pointer-events-none fixed -bottom-64 -left-32 z-[9990] h-[500px] w-[500px] rounded-full blur-[150px] mix-blend-screen" style={{ background: "color-mix(in oklab, var(--primary) 4%, transparent)", animation: "orb-b 22s ease-in-out infinite" }} />
      <div aria-hidden="true" className="grain-overlay" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-bg" style={{ maskImage: "radial-gradient(ellipse at center, black 0%, transparent 60%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 60%)" }} />
      <div aria-hidden="true" className="pointer-events-none absolute -z-10 h-[520px] w-[520px] rounded-full blur-[100px]" style={{ left: "50%", top: "33%", transform: "translate(-50%, -50%)", background: "color-mix(in oklab, var(--primary) 15%, transparent)" }} />

      <div className="relative z-10 w-full max-w-sm">
        <Link href="/" className="mb-8 flex items-center justify-center gap-2.5">
          <Image src="/logo.png" alt="NexTune" width={40} height={40} className="rounded-lg" />
          <span className="text-xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-outfit)" }}>
            Nex<span style={{ color: "var(--primary)" }}>Tune</span>
          </span>
        </Link>
        <div className="overflow-hidden rounded-2xl backdrop-blur-sm" style={{ border: "1px solid color-mix(in oklab, var(--border) 60%, transparent)", background: "color-mix(in oklab, var(--card) 50%, transparent)" }}>
          <div className="px-7 pt-7 pb-2">
            <h1 className="text-[22px] font-semibold tracking-tight" style={{ fontFamily: "var(--font-outfit)" }}>Accedi alla dashboard</h1>
            <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>Gestisci i tuoi profili di ottimizzazione con il tuo account Discord.</p>
          </div>
          <div className="px-7 pt-5 pb-7">
            <DiscordButton />
          </div>
        </div>
        <div className="mt-5 text-center">
          <Link href="/" className="text-sm transition-colors hover:text-white" style={{ color: "var(--muted-foreground)" }}>Torna alla home</Link>
        </div>
      </div>
    </div>
  );
}
