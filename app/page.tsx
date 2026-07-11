"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const marqueeItems = ["Performance", "Privacy", "Rete", "Pulizia", "Profili", "Gaming"];

const features = [
  { label: "Performance", title: "Ottimizzazione CPU & RAM", desc: "Configura automaticamente le priorità di processo e la gestione della memoria per estrarre il massimo dalle tue risorse hardware." },
  { label: "Rete", title: "Tweaks di rete", desc: "Riduce la latenza e ottimizza i parametri TCP/IP per connessioni più stabili e veloci in gaming e streaming." },
  { label: "Privacy", title: "Blocco telemetria", desc: "Disabilita la raccolta dati di Windows in modo sicuro, senza rompere aggiornamenti o funzionalità di sistema." },
  { label: "Avvio", title: "Startup Manager", desc: "Identifica e disabilita i programmi inutili all'avvio per ridurre i tempi di boot e liberare risorse." },
  { label: "GPU", title: "Ottimizzazione grafica", desc: "Applica i migliori parametri per GPU NVIDIA e AMD: scheduling, power plan e driver tweaks in un click." },
  { label: "Profili", title: "Profili automatici", desc: "Salva e applica profili di ottimizzazione diversi per gaming, lavoro o risparmio energetico con un solo click." },
];

const steps = [
  { n: "01", title: "Scarica NexTune", desc: "Scarica il launcher gratuito. Nessuna registrazione richiesta. Compatibile con Windows 10 e 11." },
  { n: "02", title: "Analizza il sistema", desc: "NexTune scansiona il tuo PC e identifica i colli di bottiglia e le ottimizzazioni disponibili." },
  { n: "03", title: "Applica i tweaks", desc: "Scegli i profili o applica tutto in automatico. Il sistema viene ottimizzato in pochi secondi." },
];

const faqs = [
  { q: "NexTune è sicuro?", a: "Sì. Tutti i tweaks sono reversibili e NexTune crea automaticamente un punto di ripristino prima di ogni modifica." },
  { q: "Funziona su Windows 10 e 11?", a: "NexTune è completamente compatibile con Windows 10 (versione 1903+) e Windows 11 in tutte le edizioni." },
  { q: "I tweaks si resettano dopo un aggiornamento?", a: "Alcuni sì. NexTune rileva automaticamente gli aggiornamenti e ti notifica se è necessario riapplicare le ottimizzazioni." },
  { q: "NexTune rallenta il PC?", a: "No. Una volta applicati i tweaks, NexTune non gira in background e non consuma risorse durante le sessioni." },
  { q: "È gratuito?", a: "La versione base è completamente gratuita. Una versione Pro con profili avanzati è in arrivo." },
];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let raf: number;

    const fadeTick = () => {
      if (!video) return;
      const d = video.duration;
      const t = video.currentTime;
      if (!d) { raf = requestAnimationFrame(fadeTick); return; }
      const fadeDur = 0.5;
      if (t < fadeDur) video.style.opacity = String(t / fadeDur);
      else if (t > d - fadeDur) video.style.opacity = String((d - t) / fadeDur);
      else video.style.opacity = "1";
      raf = requestAnimationFrame(fadeTick);
    };

    video.style.opacity = "0";
    video.addEventListener("play", () => { raf = requestAnimationFrame(fadeTick); });
    video.addEventListener("ended", () => {
      cancelAnimationFrame(raf);
      video.style.opacity = "0";
      setTimeout(() => { video.currentTime = 0; video.play(); }, 100);
    });
    video.play().catch(() => {});
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div style={{ background: "var(--background)", color: "var(--foreground)", minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Video */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <video ref={videoRef} muted playsInline loop={false} preload="auto"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0 }}
          />
        </div>

        {/* Blurred shape behind content */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 984, height: 527, background: "rgb(3,7,18)", filter: "blur(82px)", opacity: 0.9, pointerEvents: "none", borderRadius: "50%" }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 10, flex: 1, display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 120 }}>
          <div style={{ textAlign: "center", maxWidth: 900, padding: "0 32px" }}>
            <div className="fade-up" style={{ marginBottom: 20 }}>
              <span className="liquid-glass" style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(245,241,236,0.6)", padding: "6px 16px", borderRadius: 99 }}>
                Ottimizzazione Windows
              </span>
            </div>
            <h1 className="font-display fade-up delay-1"
              style={{ fontSize: "clamp(56px,9vw,120px)", fontWeight: 600, letterSpacing: "-0.024em", lineHeight: 1.02, margin: 0 }}>
              <span style={{ color: "var(--foreground)" }}>Il tuo Windows,</span>
              <br />
              <span style={{ backgroundImage: "linear-gradient(to left, #f9601f, #ff8c42, #fcd34d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                al massimo.
              </span>
            </h1>
            <p className="fade-up delay-2"
              style={{ fontSize: 18, lineHeight: 1.6, color: "var(--hero-sub)", maxWidth: 480, margin: "20px auto 0", opacity: 0.85 }}>
              NexTune ottimizza il tuo PC Windows in pochi secondi. Tweaks automatici, zero bloat, massima performance.
            </p>
            <div className="fade-up delay-3" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 36 }}>
              <button className="liquid-glass"
                style={{ fontSize: 15, fontWeight: 500, padding: "14px 32px", borderRadius: 99, cursor: "pointer", color: "var(--foreground)", fontFamily: "inherit", border: "none", display: "flex", alignItems: "center", gap: 8 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16, height: 16 }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Scarica gratis
              </button>
              <button onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })}
                style={{ fontSize: 15, color: "rgba(245,241,236,0.65)", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: 6 }}>
                Scopri di più
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 15, height: 15 }}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="fade-up delay-4" style={{ position: "relative", zIndex: 10, paddingBottom: 40 }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", gap: 48 }}>
            <p style={{ fontSize: 13, color: "rgba(245,241,236,0.45)", flexShrink: 0, lineHeight: 1.5 }}>
              Ottimizzazioni<br />disponibili
            </p>
            <div style={{ flex: 1, overflow: "hidden" }}>
              <div className="marquee-track">
                {[...marqueeItems, ...marqueeItems].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                    <div className="liquid-glass" style={{ width: 28, height: 28, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 600, color: "var(--foreground)" }}>
                      {item[0]}
                    </div>
                    <span style={{ fontSize: 15, fontWeight: 600, color: "var(--foreground)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: "100px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ maxWidth: 600, marginBottom: 64 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(245,241,236,0.4)", marginBottom: 16 }}>Funzionalità</p>
            <h2 className="font-display" style={{ fontSize: "clamp(32px,5vw,56px)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              Cosa fa NexTune.
            </h2>
            <p style={{ fontSize: 16, color: "var(--hero-sub)", marginTop: 16, lineHeight: 1.6, opacity: 0.8 }}>
              Una panoramica delle ottimizzazioni che NexTune applica al tuo sistema.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "rgba(255,255,255,0.06)", borderRadius: 16, overflow: "hidden" }}>
            {features.map((f, i) => (
              <div key={f.title} className="liquid-glass"
                style={{ padding: "28px 28px", display: "flex", flexDirection: "column", gap: 16, transition: "background .15s", cursor: "default" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.01)")}
              >
                <span style={{ display: "inline-flex", width: "fit-content", fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--primary)", background: "rgba(249,96,31,0.1)", border: "1px solid rgba(249,96,31,0.2)", padding: "3px 10px", borderRadius: 99, alignSelf: "flex-start" }}>
                  {f.label}
                </span>
                <div>
                  <h3 className="font-display" style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, letterSpacing: "-0.01em" }}>{f.title}</h3>
                  <p style={{ fontSize: 13, color: "rgba(245,241,236,0.55)", lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW ── */}
      <section id="how" style={{ padding: "100px 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80 }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(245,241,236,0.4)", marginBottom: 16 }}>Come funziona</p>
            <h2 className="font-display" style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              Come iniziare.
            </h2>
            <p style={{ fontSize: 14, color: "var(--hero-sub)", marginTop: 14, lineHeight: 1.6, opacity: 0.75 }}>
              Bastano pochi minuti per essere operativo.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {steps.map((s, i) => (
              <div key={s.n} className="liquid-glass"
                style={{ padding: "24px 28px", borderRadius: 14, transition: "all .2s", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(249,96,31,0.2)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "transparent"; e.currentTarget.style.background = "rgba(255,255,255,0.01)"; }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 10 }}>
                  <span className="font-display" style={{ fontSize: 36, fontWeight: 600, color: "var(--primary)", lineHeight: 1 }}>{s.n}</span>
                  <h3 className="font-display" style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em" }}>{s.title}</h3>
                </div>
                <p style={{ fontSize: 14, color: "rgba(245,241,236,0.6)", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: "100px 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(245,241,236,0.4)", marginBottom: 16 }}>FAQ</p>
          <h2 className="font-display" style={{ fontSize: "clamp(32px,5vw,56px)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 48 }}>
            Domande frequenti.
          </h2>
          <div className="liquid-glass" style={{ borderRadius: 16, overflow: "hidden", maxWidth: 800 }}>
            {faqs.map((f, i) => <FaqItem key={f.q} q={f.q} a={f.a} last={i === faqs.length - 1} />)}
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD CTA ── */}
      <section id="download" style={{ padding: "100px 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <div className="liquid-glass" style={{ borderRadius: 20, padding: "56px 56px", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40 }}>
            <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, background: "rgba(249,96,31,0.12)", filter: "blur(80px)", borderRadius: "50%", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 className="font-display" style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 600, letterSpacing: "-0.03em", marginBottom: 14 }}>
                Pronto a ottimizzare il tuo PC?
              </h2>
              <p style={{ fontSize: 15, color: "rgba(245,241,236,0.65)", lineHeight: 1.6 }}>
                Scarica NexTune gratuitamente, analizza il sistema e applica i tweaks in pochi secondi.
              </p>
            </div>
            <button className="liquid-glass"
              style={{ position: "relative", zIndex: 1, flexShrink: 0, fontSize: 15, fontWeight: 500, padding: "14px 32px", borderRadius: 99, cursor: "pointer", color: "var(--foreground)", fontFamily: "inherit", border: "none", display: "flex", alignItems: "center", gap: 8 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16, height: 16 }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Scarica ora
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FaqItem({ q, a, last }: { q: string; a: string; last: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: last ? "none" : "1px solid rgba(255,255,255,0.06)" }}>
      <button onClick={() => setOpen(o => !o)}
        style={{ width: "100%", textAlign: "left", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
        <span style={{ fontSize: 15, fontWeight: 500, color: "var(--foreground)" }}>{q}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16, height: 16, flexShrink: 0, color: "rgba(245,241,236,0.4)", transform: open ? "rotate(45deg)" : "none", transition: "transform .25s" }}>
          <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
      </button>
      <div style={{ overflow: "hidden", maxHeight: open ? 200 : 0, transition: "max-height .3s cubic-bezier(0.22,1,0.36,1)" }}>
        <p style={{ padding: "0 24px 20px", fontSize: 14, color: "rgba(245,241,236,0.6)", lineHeight: 1.7 }}>{a}</p>
      </div>
    </div>
  );
}

// Need useState for FaqItem
import { useState } from "react";
