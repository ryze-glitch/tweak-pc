"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RevealOnScroll from "../components/RevealOnScroll";

export default function ChiSiamo() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <RevealOnScroll />
      <div aria-hidden="true" className="pointer-events-none fixed -top-64 -right-64 z-[9990] h-[600px] w-[600px] rounded-full blur-[160px] mix-blend-screen" style={{ background: "color-mix(in oklab, var(--primary) 5%, transparent)", animation: "orb-a 18s ease-in-out infinite" }} />
      <div aria-hidden="true" className="pointer-events-none fixed -bottom-64 -left-32 z-[9990] h-[500px] w-[500px] rounded-full blur-[150px] mix-blend-screen" style={{ background: "color-mix(in oklab, var(--primary) 4%, transparent)", animation: "orb-b 22s ease-in-out infinite" }} />
      <div aria-hidden="true" className="grain-overlay" />
      <Header />

      <main className="pt-32 pb-24">
        <div className="container-page">
          <div className="reveal is-in" style={{ transitionDelay: "0ms" }}>
            <Link href="/" className="inline-flex items-center gap-1 mb-14 -ml-2 h-6 px-2 text-xs rounded-md transition-colors" style={{ color: "var(--muted-foreground)" }}>
              <ArrowLeft size={16} />Torna alla home
            </Link>
          </div>

          <div className="relative max-w-3xl">
            <div aria-hidden="true" className="pointer-events-none absolute -top-6 left-0 h-px w-20" style={{ background: "linear-gradient(to right, color-mix(in oklab, var(--primary) 80%, transparent), transparent)" }} />
            <div className="reveal is-in" style={{ transitionDelay: "60ms" }}>
              <span className="eyebrow" style={{ color: "var(--primary)" }}>Chi siamo</span>
            </div>
            <div className="reveal is-in" style={{ transitionDelay: "120ms" }}>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl" style={{ fontFamily: "var(--font-outfit)" }}>
                NexTune nasce dalla <span style={{ color: "var(--primary)" }}>frustrazione.</span>
              </h1>
            </div>
            <div className="reveal is-in" style={{ transitionDelay: "180ms" }}>
              <p className="mt-6 text-[15px] leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                Windows è potente ma pieno di impostazioni nascoste che rallentano il sistema. NexTune le applica tutte in automatico.
              </p>
            </div>
          </div>

          <div className="reveal is-in" style={{ transitionDelay: "260ms" }}>
            <div className="mt-16 grid gap-3 sm:grid-cols-3">
              {[
                { n: "01", title: "Costruito da gamer", desc: "NexTune nasce dall'esperienza diretta: latenza alta, FPS instabili, Windows che gira in background. Sappiamo cosa ottimizzare." },
                { n: "02", title: "Sempre aggiornato", desc: "Ogni aggiornamento di Windows può rompere i tweaks. NexTune si aggiorna per rimanere efficace su ogni versione del sistema." },
                { n: "03", title: "Privacy first", desc: "Nessun dato di sistema viene inviato a server esterni. NexTune lavora localmente e non raccoglie telemetria." },
              ].map(c => (
                <div key={c.n} className="rounded-xl p-6 backdrop-blur-sm" style={{ border: "1px solid color-mix(in oklab, var(--border) 60%, transparent)", background: "color-mix(in oklab, var(--card) 30%, transparent)" }}>
                  <span className="text-[11px] font-semibold tracking-widest" style={{ color: "var(--primary)" }}>{c.n}</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-snug" style={{ fontFamily: "var(--font-outfit)" }}>{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal is-in mt-16 h-px w-full" style={{ transitionDelay: "320ms", background: "color-mix(in oklab, var(--border) 50%, transparent)" }} />

          <div className="reveal is-in" style={{ transitionDelay: "380ms" }}>
            <div className="mt-20 grid gap-10 md:grid-cols-[220px_1fr]">
              <div>
                <span className="eyebrow" style={{ color: "var(--primary)" }}>Il progetto</span>
                <h2 className="mt-4 text-xl font-semibold leading-snug" style={{ fontFamily: "var(--font-outfit)" }}>Come è nato.</h2>
              </div>
              <div className="space-y-4 text-[14px] leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                <p><span className="font-medium" style={{ color: "var(--foreground)" }}>NexTune</span> è nato come progetto personale per ottimizzare Windows senza dover cercare guide su YouTube o forum ogni volta che si reinstalla il sistema.</p>
                <p>Il risultato è uno strumento che raccoglie anni di tweaks testati, li verifica su diverse configurazioni hardware e li applica in modo sicuro con un solo click.</p>
                <p>NexTune è un progetto indipendente. Non è sponsorizzato da nessun produttore hardware o software.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
