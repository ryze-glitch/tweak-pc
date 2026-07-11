"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{ fontFamily: "'Readex Pro', system-ui, sans-serif", background: "#000", color: "#fff", height: "100vh", overflow: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <section style={{ position: "relative", height: "100vh", width: "100%", overflow: "hidden", background: "#000" }}>

        {/* Background video */}
        <video
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          autoPlay loop muted playsInline
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_063509_7d167302-4fd4-480b-8260-18ab572333d4.mp4"
        />

        {/* Overlay */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)" }} />

        {/* Navbar */}
        <nav style={{ position: "absolute", zIndex: 20, top: 0, left: 0, right: 0, padding: "24px 40px 0", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          {/* Left pill */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(23,23,23,0.9)", backdropFilter: "blur(12px)", borderRadius: 99, paddingLeft: 16, paddingRight: 24, paddingTop: 12, paddingBottom: 12 }}>
            <svg viewBox="0 0 256 256" style={{ width: 20, height: 20, flexShrink: 0 }} fill="#fff">
              <path d="M 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 128 L 64 128 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z M 128 64 L 128 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 Z M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 128 0 L 192 0 Z"/>
            </svg>
            <span style={{ color: "#fff", fontSize: 14, fontWeight: 400, letterSpacing: "-0.01em" }}>nextune</span>
          </div>

          {/* Center pill */}
          <div style={{ display: "flex", alignItems: "center", gap: 4, background: "rgba(23,23,23,0.9)", backdropFilter: "blur(12px)", borderRadius: 99, padding: "8px 12px" }}>
            {["funzionalità", "come funziona", "chi siamo", "supporto"].map(l => (
              <a key={l} href="#" style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, fontWeight: 400, padding: "8px 20px", borderRadius: 99, textDecoration: "none", transition: "color .15s" }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = "#fff"}
                onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.7)"}
              >{l}</a>
            ))}
          </div>

          {/* Right button */}
          <button style={{ background: "#fff", color: "#000", fontSize: 14, fontWeight: 400, borderRadius: 99, padding: "12px 24px", border: "none", cursor: "pointer", transition: "background .15s", fontFamily: "inherit" }}
            onMouseEnter={e => (e.target as HTMLElement).style.background = "#e5e5e5"}
            onMouseLeave={e => (e.target as HTMLElement).style.background = "#fff"}
          >scarica</button>
        </nav>

        {/* Content */}
        <div style={{ position: "relative", height: "100%", width: "100%" }}>

          {/* Headline words */}
          <h1 style={{ position: "absolute", left: 40, top: "18%", fontSize: "13vw", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 0.95, margin: 0, color: "#fff" }}>ottimizza</h1>
          <h1 style={{ position: "absolute", right: 40, top: "38%", fontSize: "13vw", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 0.95, margin: 0, color: "#fff" }}>il tuo</h1>
          <h1 style={{ position: "absolute", left: "22%", top: "58%", fontSize: "13vw", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 0.95, margin: 0, color: "#fff" }}>windows</h1>

          {/* Description */}
          <p style={{ position: "absolute", left: 40, top: "46%", maxWidth: 220, fontSize: 15, lineHeight: 1.4, color: "rgba(255,255,255,0.9)", margin: 0 }}>
            ottimizziamo il tuo pc windows con tweaks automatici, zero bloat, massima performance
          </p>

          {/* Stat top-right */}
          <div style={{ position: "absolute", right: 96, top: "14%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "flex-end" }}>
              <div style={{ height: 1, width: 96, background: "rgba(255,255,255,0.4)", transform: "rotate(20deg)" }} />
              <span style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 500, letterSpacing: "-0.03em" }}>+10k</span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 4, textAlign: "right" }}>utenti attivi</p>
          </div>

          {/* Bottom gradient */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 192, background: "linear-gradient(to bottom, transparent, #000)", pointerEvents: "none" }} />

          {/* Stat bottom-left */}
          <div style={{ position: "absolute", left: 80, bottom: 96 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 500, letterSpacing: "-0.03em" }}>+50</span>
              <div style={{ height: 1, width: 96, background: "rgba(255,255,255,0.4)", transform: "rotate(-20deg)" }} />
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>tweaks disponibili</p>
          </div>

          {/* Stat bottom-right */}
          <div style={{ position: "absolute", right: 80, bottom: 80 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ height: 1, width: 96, background: "rgba(255,255,255,0.4)", transform: "rotate(-20deg)" }} />
              <span style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 500, letterSpacing: "-0.03em" }}>free</span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 4, textAlign: "right" }}>download gratuito</p>
          </div>

        </div>
      </section>
    </div>
  );
}
