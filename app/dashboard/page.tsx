import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import DiscordButton from "./DiscordButton";

export const metadata: Metadata = {
  title: "NexTune — Dashboard",
  description: "Accedi alla dashboard NexTune.",
};

export default function Dashboard() {
  return (
    <div style={{ background: "var(--background)", color: "var(--foreground)", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "fixed", top: -200, right: -200, width: 600, height: 600, background: "rgba(249,96,31,0.06)", filter: "blur(120px)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "fixed", bottom: -200, left: -150, width: 500, height: 500, background: "rgba(249,96,31,0.05)", filter: "blur(100px)", borderRadius: "50%", pointerEvents: "none" }} />

      <div style={{ width: "100%", maxWidth: 380, position: "relative", zIndex: 1 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, textDecoration: "none", marginBottom: 32 }}>
          <Image src="/logo.png" alt="NexTune" width={36} height={36} style={{ borderRadius: 9 }} />
          <span className="font-display" style={{ fontSize: 20, fontWeight: 700, color: "var(--foreground)", letterSpacing: "-0.02em" }}>
            Nex<span style={{ color: "var(--primary)" }}>Tune</span>
          </span>
        </Link>

        <div className="liquid-glass" style={{ borderRadius: 20, overflow: "hidden" }}>
          <div style={{ padding: "28px 28px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <h1 className="font-display" style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 6 }}>Accedi alla dashboard</h1>
            <p style={{ fontSize: 13, color: "rgba(245,241,236,0.55)", lineHeight: 1.5 }}>Gestisci i tuoi profili di ottimizzazione con il tuo account Discord.</p>
          </div>
          <div style={{ padding: "20px 28px 28px" }}>
            <DiscordButton />
          </div>
        </div>

        <div style={{ marginTop: 20, textAlign: "center" }}>
          <Link href="/" style={{ fontSize: 13, color: "rgba(245,241,236,0.4)", textDecoration: "none", transition: "color .15s" }}>← Torna alla home</Link>
        </div>
      </div>
    </div>
  );
}
