"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ChiSiamo() {
  return (
    <div style={{ background: "var(--background)", color: "var(--foreground)", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ paddingTop: 140, paddingBottom: 80 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "rgba(245,241,236,0.5)", textDecoration: "none", marginBottom: 48 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 14, height: 14 }}><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Torna alla home
          </Link>

          <div style={{ maxWidth: 680 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(245,241,236,0.4)", marginBottom: 16 }}>Chi siamo</p>
            <h1 className="font-display" style={{ fontSize: "clamp(36px,6vw,72px)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              NexTune nasce dalla{" "}
              <span style={{ backgroundImage: "linear-gradient(to left, #f9601f, #ff8c42, #fcd34d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                frustrazione.
              </span>
            </h1>
            <p style={{ fontSize: 16, color: "rgba(245,241,236,0.65)", marginTop: 20, lineHeight: 1.7 }}>
              Windows è potente ma pieno di impostazioni nascoste che rallentano il sistema. NexTune le applica tutte in automatico.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginTop: 60 }}>
            {[
              { n: "01", title: "Costruito da gamer", desc: "NexTune nasce dall'esperienza diretta: latenza alta, FPS instabili, Windows che gira in background. Sappiamo cosa ottimizzare." },
              { n: "02", title: "Sempre aggiornato", desc: "Ogni aggiornamento di Windows può rompere i tweaks. NexTune si aggiorna per rimanere efficace su ogni versione." },
              { n: "03", title: "Privacy first", desc: "Nessun dato di sistema viene inviato a server esterni. NexTune lavora localmente e non raccoglie telemetria." },
            ].map(c => (
              <div key={c.n} className="liquid-glass" style={{ padding: "24px", borderRadius: 14 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "var(--primary)" }}>{c.n}</span>
                <h3 className="font-display" style={{ fontSize: 16, fontWeight: 600, marginTop: 14, marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: 13, color: "rgba(245,241,236,0.55)", lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: 60, paddingTop: 60, display: "grid", gridTemplateColumns: "200px 1fr", gap: 60 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(245,241,236,0.4)", marginBottom: 12 }}>Il progetto</p>
              <h2 className="font-display" style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em" }}>Come è nato.</h2>
            </div>
            <div style={{ fontSize: 14, color: "rgba(245,241,236,0.6)", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 16 }}>
              <p><strong style={{ color: "var(--foreground)" }}>NexTune</strong> è nato come progetto personale per ottimizzare Windows senza dover cercare guide su YouTube o forum ogni volta che si reinstalla il sistema.</p>
              <p>Il risultato è uno strumento che raccoglie anni di tweaks testati, li verifica su diverse configurazioni hardware e li applica in modo sicuro con un solo click.</p>
              <p>NexTune è un progetto indipendente. Non è sponsorizzato da nessun produttore hardware o software.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
