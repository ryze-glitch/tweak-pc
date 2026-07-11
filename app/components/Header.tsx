"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Funzionalità", href: "#features" },
  { label: "Come funziona", href: "#how" },
  { label: "FAQ", href: "#faq" },
  { label: "Chi siamo", href: "/chi-siamo" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        borderBottom: scrolled
          ? "1px solid color-mix(in srgb, var(--border) 80%, transparent)"
          : "1px solid transparent",
        background: scrolled
          ? "color-mix(in srgb, var(--background) 85%, transparent)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="h-px w-full" style={{ background: "linear-gradient(to right, transparent, color-mix(in oklab, var(--primary) 60%, transparent), transparent)" }} />
      <nav className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="NexTune" width={40} height={40} className="rounded-lg" />
          <span className="text-lg font-semibold tracking-tight" style={{ fontFamily: "var(--font-outfit)" }}>
            Nex<span style={{ color: "var(--primary)" }}>Tune</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) =>
            l.href.startsWith("#") ? (
              <button key={l.label} onClick={() => scrollTo(l.href)} className="cursor-pointer border-0 bg-transparent p-0 text-sm transition-colors" style={{ color: "var(--muted-foreground)" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--foreground)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted-foreground)")}
              >{l.label}</button>
            ) : (
              <Link key={l.label} href={l.href} className="text-sm transition-colors" style={{ color: "var(--muted-foreground)" }}>{l.label}</Link>
            )
          )}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Link href="/dashboard" className="inline-flex h-9 items-center rounded-md px-4 text-sm transition-colors" style={{ color: "var(--muted-foreground)" }}>Dashboard</Link>
          <button className="inline-flex h-9 items-center rounded-md px-4 text-sm font-medium text-white transition-opacity hover:opacity-80" style={{ background: "var(--primary)" }}>Scarica</button>
        </div>

        <button className="flex items-center justify-center rounded-md p-1.5 md:hidden" onClick={() => setMobileOpen((o) => !o)} aria-label="Apri menu">
          {mobileOpen ? <X size={20} style={{ color: "var(--foreground)" }} /> : <Menu size={20} style={{ color: "var(--foreground)" }} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t" style={{ background: "var(--background)", borderColor: "var(--border)" }}>
          <div className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((l) =>
              l.href.startsWith("#") ? (
                <button key={l.label} onClick={() => scrollTo(l.href)} className="w-full rounded-md px-3 py-2.5 text-left text-sm" style={{ color: "var(--muted-foreground)" }}>{l.label}</button>
              ) : (
                <Link key={l.label} href={l.href} className="rounded-md px-3 py-2.5 text-sm" style={{ color: "var(--muted-foreground)" }} onClick={() => setMobileOpen(false)}>{l.label}</Link>
              )
            )}
            <div className="mt-2 flex gap-2 pt-2" style={{ borderTop: `1px solid var(--border)` }}>
              <Link href="/dashboard" className="flex-1 rounded-md px-3 py-2.5 text-center text-sm" style={{ color: "var(--muted-foreground)" }}>Dashboard</Link>
              <button className="flex-1 rounded-md px-3 py-2.5 text-sm font-medium text-white" style={{ background: "var(--primary)" }}>Scarica</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
