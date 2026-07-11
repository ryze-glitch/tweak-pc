"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RevealOnScroll from "../components/RevealOnScroll";

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

function TocNav({ active }: { active: string }) {
  return (
    <nav className="sticky top-28 rounded-2xl p-4 backdrop-blur" style={{ border: "1px solid color-mix(in oklab, var(--border) 60%, transparent)", background: "color-mix(in oklab, var(--card) 40%, transparent)" }}>
      <p className="mb-3 px-2 text-xs font-medium uppercase tracking-[0.16em]" style={{ color: "var(--muted-foreground)" }}>Indice</p>
      <ul className="space-y-0.5">
        {sections.map(s => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <a href={`#${s.id}`} className="flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors"
                style={{ background: isActive ? "color-mix(in oklab, var(--primary) 10%, transparent)" : "transparent", color: isActive ? "var(--foreground)" : "var(--muted-foreground)" }}>
                <span className="font-mono text-[11px]" style={{ color: isActive ? "var(--primary)" : "color-mix(in oklab, var(--muted-foreground) 70%, transparent)" }}>{s.num}</span>
                <span>{s.toc}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function Section({ id, num, title, children }: { id: string; num: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-32">
      <div className="mb-6 flex items-baseline gap-3">
        <span className="font-mono text-xs" style={{ color: "var(--primary)" }}>{num}</span>
        <h2 className="text-xl font-semibold sm:text-2xl" style={{ fontFamily: "var(--font-outfit)" }}>{title}</h2>
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[0.9375rem] leading-[1.8]" style={{ color: "var(--muted-foreground)" }}>{children}</p>;
}

function UL({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-3 rounded-xl px-5 py-4 backdrop-blur" style={{ border: "1px solid color-mix(in oklab, var(--border) 60%, transparent)", background: "color-mix(in oklab, var(--card) 40%, transparent)" }}>{children}</ul>;
}

function LI({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <li className="text-[0.9375rem] leading-[1.75]" style={{ color: "var(--muted-foreground)" }}>
      {label && <span className="font-medium" style={{ color: "var(--foreground)" }}>{label}. </span>}
      {children}
    </li>
  );
}

export default function Tos() {
  const [active, setActive] = useState("accettazione");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }); },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach(s => { const el = document.getElementById(s.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

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
            <Link href="/" className="inline-flex items-center gap-1 mb-10 -ml-2 h-6 px-2 text-xs rounded-md transition-colors" style={{ color: "var(--muted-foreground)" }}>
              <ArrowLeft size={16} />Torna alla home
            </Link>
          </div>
          <div className="reveal is-in" style={{ transitionDelay: "60ms" }}>
            <header className="max-w-3xl">
              <span className="eyebrow">Documento legale</span>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl" style={{ fontFamily: "var(--font-outfit)" }}>Termini di Servizio</h1>
              <p className="mt-4 text-sm" style={{ color: "var(--muted-foreground)" }}>NexTune · v1.0 · aggiornato il 5 luglio 2026</p>
              <p className="mt-6 max-w-2xl text-[0.9375rem] leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                Questo documento regola l&apos;uso di NexTune. Leggilo prima di installare il software.
              </p>
            </header>
          </div>

          <div className="mt-16 grid gap-x-14 gap-y-12 lg:grid-cols-12">
            <aside className="hidden lg:col-span-4 lg:block">
              <div className="reveal is-in" style={{ transitionDelay: "120ms" }}>
                <TocNav active={active} />
              </div>
            </aside>
            <main className="lg:col-span-8">
              <div className="space-y-16">
                <div className="reveal is-in" style={{ transitionDelay: "160ms" }}>
                  <Section id="accettazione" num="01" title="Accettazione dei termini">
                    <P>Scaricando, installando o utilizzando NexTune dichiari di aver letto e accettato integralmente i presenti Termini di Servizio. Se non accetti anche una sola clausola, non installare il software.</P>
                  </Section>
                </div>
                <div className="reveal is-in" style={{ transitionDelay: "200ms" }}>
                  <Section id="uso" num="02" title="Uso del software">
                    <P>NexTune è un tool di ottimizzazione per Windows. Per applicare alcune modifiche al sistema potrebbe richiedere privilegi di amministratore. Avviando il software con tali permessi presti consenso esplicito a queste operazioni.</P>
                    <UL>
                      <LI label="Responsabilità">Sei responsabile dell&apos;uso di NexTune sul tuo sistema. Ti consigliamo di creare un punto di ripristino prima di applicare modifiche importanti.</LI>
                      <LI label="Compatibilità">NexTune è progettato per Windows 10 (1903+) e Windows 11. L&apos;uso su versioni precedenti non è supportato.</LI>
                    </UL>
                  </Section>
                </div>
                <div className="reveal is-in" style={{ transitionDelay: "240ms" }}>
                  <Section id="dati" num="03" title="Dati e privacy">
                    <P>NexTune non raccoglie né trasmette dati personali a server esterni. Tutte le operazioni avvengono localmente sul tuo dispositivo.</P>
                    <UL>
                      <LI label="Dati di utilizzo">NexTune può raccogliere statistiche anonime e aggregate sull&apos;uso delle funzionalità per migliorare il software. Nessun dato è associabile alla tua identità.</LI>
                      <LI label="Nessuna vendita">I dati non vengono venduti né condivisi con terze parti per finalità di marketing.</LI>
                    </UL>
                  </Section>
                </div>
                <div className="reveal" style={{ transitionDelay: "280ms" }}>
                  <Section id="licenza" num="04" title="Licenza d'uso">
                    <P>Ti concediamo una licenza personale, gratuita, non esclusiva e non trasferibile per utilizzare NexTune sul tuo dispositivo.</P>
                    <UL>
                      <LI label="Divieto di ridistribuzione">È vietato ridistribuire, rivendere o pubblicare NexTune su piattaforme di terzi senza autorizzazione scritta.</LI>
                      <LI label="Reverse engineering">È vietato decompilare, disassemblare o tentare di estrarre il codice sorgente del software.</LI>
                    </UL>
                  </Section>
                </div>
                <div className="reveal" style={{ transitionDelay: "0ms" }}>
                  <Section id="divieti" num="05" title="Condotte vietate">
                    <UL>
                      <LI label="Uso improprio">Utilizzare NexTune per danneggiare, compromettere o rendere instabile il sistema operativo intenzionalmente.</LI>
                      <LI label="Distribuzione malware">È vietato modificare NexTune per includervi codice malevolo e redistribuirlo.</LI>
                      <LI label="Violazione licenze">Aggirare eventuali meccanismi di licenza o attivazione presenti nelle versioni Pro.</LI>
                    </UL>
                  </Section>
                </div>
                <div className="reveal" style={{ transitionDelay: "0ms" }}>
                  <Section id="aggiornamenti" num="06" title="Aggiornamenti">
                    <P>NexTune può aggiornarsi automaticamente per aggiungere nuove ottimizzazioni o correggere incompatibilità con aggiornamenti Windows. L&apos;uso continuato dopo un aggiornamento vale come accettazione della versione in vigore.</P>
                  </Section>
                </div>
                <div className="reveal" style={{ transitionDelay: "0ms" }}>
                  <Section id="garanzie" num="07" title="Esclusione di garanzie">
                    <P>NexTune è fornito &quot;così com&apos;è&quot;. Non garantiamo che il software sia privo di errori o che le ottimizzazioni producano risultati specifici su ogni configurazione hardware. L&apos;uso è a tuo rischio.</P>
                  </Section>
                </div>
                <div className="reveal" style={{ transitionDelay: "0ms" }}>
                  <Section id="minori" num="08" title="Utenti minorenni">
                    <P>Se hai meno di 18 anni puoi utilizzare NexTune solo con il consenso di chi esercita la responsabilità genitoriale.</P>
                  </Section>
                </div>
                <div className="reveal" style={{ transitionDelay: "0ms" }}>
                  <Section id="legge" num="09" title="Legge applicabile e contatti">
                    <P>I presenti Termini sono regolati dalla legge italiana. Ci riserviamo di aggiornarli in qualsiasi momento — la versione pubblicata su questa pagina fa fede.</P>
                    <P>Per qualsiasi richiesta: discord.gg/nextune.</P>
                  </Section>
                </div>
                <div className="reveal" style={{ transitionDelay: "0ms" }}>
                  <p className="border-t pt-8 text-sm leading-relaxed" style={{ borderColor: "color-mix(in oklab, var(--border) 60%, transparent)", color: "var(--muted-foreground)" }}>
                    Utilizzando NexTune confermi di aver letto e accettato i presenti Termini di Servizio.
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
