"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sections = [
  { id: "accettazione", num: "01", toc: "Accettazione" },
  { id: "uso", num: "02", toc: "Uso del software" },
  { id: "dati", num: "03", toc: "Dati e privacy" },
  { id: "licenza", num: "04", toc: "Licenza" },
  { id: "divieti", num: "05", toc: "Condotte vietate" },
  { id: "aggiornamenti", num: "06", toc: "Aggiornamenti" },
  { id: "garanzie", num: "07", toc: "Garanzie" },
  { id: "minori", num: "08", toc: "Minori" },
  { id: "legge", num: "09", toc: "Legge e contatti" },
];

export default function Tos() {
  const [active, setActive] = useState("accettazione");

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach(s => { const el = document.getElementById(s.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ background: "var(--background)", color: "var(--foreground)", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ paddingTop: 140, paddingBottom: 80 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "rgba(245,241,236,0.5)", textDecoration: "none", marginBottom: 48 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 14, height: 14 }}><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Torna alla home
          </Link>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(245,241,236,0.4)", marginBottom: 16 }}>Documento legale</p>
          <h1 className="font-display" style={{ fontSize: "clamp(32px,5vw,60px)", fontWeight: 600, letterSpacing: "-0.03em", marginBottom: 8 }}>Termini di Servizio</h1>
          <p style={{ fontSize: 13, color: "rgba(245,241,236,0.4)", marginBottom: 8 }}>NexTune · v1.0 · 5 luglio 2026</p>
          <p style={{ fontSize: 15, color: "rgba(245,241,236,0.6)", lineHeight: 1.6, maxWidth: 600, marginBottom: 60 }}>Questo documento regola l&apos;uso di NexTune. Leggilo prima di installare il software.</p>

          <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 48 }}>
            {/* TOC */}
            <aside>
              <nav className="liquid-glass" style={{ borderRadius: 14, padding: 16, position: "sticky", top: 100 }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(245,241,236,0.35)", padding: "0 8px 12px" }}>Indice</p>
                {sections.map(s => (
                  <a key={s.id} href={`#${s.id}`}
                    style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 8, fontSize: 13, textDecoration: "none", transition: "all .12s", background: active === s.id ? "rgba(249,96,31,0.1)" : "transparent", color: active === s.id ? "var(--foreground)" : "rgba(245,241,236,0.5)" }}>
                    <span style={{ fontFamily: "monospace", fontSize: 10, color: active === s.id ? "var(--primary)" : "rgba(245,241,236,0.25)" }}>{s.num}</span>
                    {s.toc}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Content */}
            <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
              {[
                { id: "accettazione", num: "01", title: "Accettazione dei termini", content: "Scaricando, installando o utilizzando NexTune dichiari di aver letto e accettato integralmente i presenti Termini di Servizio. Se non accetti anche una sola clausola, non installare il software." },
                { id: "uso", num: "02", title: "Uso del software", content: "NexTune è un tool di ottimizzazione per Windows. Per applicare alcune modifiche al sistema potrebbe richiedere privilegi di amministratore. Avviando il software con tali permessi presti consenso esplicito a queste operazioni. Sei responsabile dell'uso di NexTune sul tuo sistema. NexTune è progettato per Windows 10 (1903+) e Windows 11." },
                { id: "dati", num: "03", title: "Dati e privacy", content: "NexTune non raccoglie né trasmette dati personali a server esterni. Tutte le operazioni avvengono localmente sul tuo dispositivo. NexTune può raccogliere statistiche anonime e aggregate sull'uso delle funzionalità per migliorare il software. I dati non vengono venduti né condivisi con terze parti." },
                { id: "licenza", num: "04", title: "Licenza d'uso", content: "Ti concediamo una licenza personale, gratuita, non esclusiva e non trasferibile per utilizzare NexTune sul tuo dispositivo. È vietato ridistribuire, rivendere o pubblicare NexTune su piattaforme di terzi senza autorizzazione scritta. È vietato decompilare, disassemblare o tentare di estrarre il codice sorgente del software." },
                { id: "divieti", num: "05", title: "Condotte vietate", content: "È vietato utilizzare NexTune per danneggiare, compromettere o rendere instabile il sistema operativo intenzionalmente. È vietato modificare NexTune per includervi codice malevolo e redistribuirlo. È vietato aggirare eventuali meccanismi di licenza o attivazione presenti nelle versioni Pro." },
                { id: "aggiornamenti", num: "06", title: "Aggiornamenti", content: "NexTune può aggiornarsi automaticamente per aggiungere nuove ottimizzazioni o correggere incompatibilità con aggiornamenti Windows. L'uso continuato dopo un aggiornamento vale come accettazione della versione in vigore." },
                { id: "garanzie", num: "07", title: "Esclusione di garanzie", content: "NexTune è fornito \"così com'è\". Non garantiamo che il software sia privo di errori o che le ottimizzazioni producano risultati specifici su ogni configurazione hardware. L'uso è a tuo rischio." },
                { id: "minori", num: "08", title: "Utenti minorenni", content: "Se hai meno di 18 anni puoi utilizzare NexTune solo con il consenso di chi esercita la responsabilità genitoriale." },
                { id: "legge", num: "09", title: "Legge applicabile e contatti", content: "I presenti Termini sono regolati dalla legge italiana. Ci riserviamo di aggiornarli in qualsiasi momento — la versione pubblicata su questa pagina fa fede. Per qualsiasi richiesta: discord.gg/nextune." },
              ].map(s => (
                <section key={s.id} id={s.id} style={{ scrollMarginTop: 100 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 16 }}>
                    <span style={{ fontFamily: "monospace", fontSize: 12, color: "var(--primary)" }}>{s.num}</span>
                    <h2 className="font-display" style={{ fontSize: "clamp(18px,2.5vw,24px)", fontWeight: 600, letterSpacing: "-0.02em" }}>{s.title}</h2>
                  </div>
                  <p style={{ fontSize: 14, color: "rgba(245,241,236,0.6)", lineHeight: 1.8 }}>{s.content}</p>
                </section>
              ))}
              <p style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, fontSize: 13, color: "rgba(245,241,236,0.4)", lineHeight: 1.6 }}>
                Utilizzando NexTune confermi di aver letto e accettato i presenti Termini di Servizio.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
