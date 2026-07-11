"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Funzionalità", href: "#features" },
  { label: "Come funziona", href: "#how" },
  { label: "FAQ", href: "#faq" },
  { label: "Chi siamo", href: "/chi-siamo" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scroll = (href: string) => {
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(5,1,9,0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image src="/logo.png" alt="NexTune" width={32} height={32} style={{ borderRadius: 8 }} />
          <span className="font-display" style={{ fontSize: 16, fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.02em" }}>
            Nex<span style={{ color: "var(--primary)" }}>Tune</span>
          </span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {links.map(l => l.href.startsWith("#") ? (
            <button key={l.label} onClick={() => scroll(l.href)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(245,241,236,0.75)", fontSize: 14, fontWeight: 400, padding: "8px 16px", borderRadius: 99, fontFamily: "inherit", transition: "color .15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--foreground)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,241,236,0.75)")}
            >{l.label}</button>
          ) : (
            <Link key={l.label} href={l.href}
              style={{ color: "rgba(245,241,236,0.75)", fontSize: 14, fontWeight: 400, padding: "8px 16px", borderRadius: 99, textDecoration: "none", transition: "color .15s" }}
            >{l.label}</Link>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/dashboard"
            style={{ color: "rgba(245,241,236,0.7)", fontSize: 14, padding: "8px 16px", borderRadius: 99, textDecoration: "none", transition: "color .15s" }}
          >Dashboard</Link>
          <button className="liquid-glass"
            style={{ color: "var(--foreground)", fontSize: 14, fontWeight: 500, padding: "10px 22px", borderRadius: 99, cursor: "pointer", fontFamily: "inherit", border: "none" }}
          >Scarica</button>
        </div>
      </div>
      {scrolled && <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent)" }} />}
    </nav>
  );
}
