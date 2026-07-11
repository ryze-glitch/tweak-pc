import Link from "next/link";
import Image from "next/image";

const discordPath = "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "56px 0 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 16 }}>
              <Image src="/logo.png" alt="NexTune" width={30} height={30} style={{ borderRadius: 7 }} />
              <span className="font-display" style={{ fontSize: 15, fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.02em" }}>
                Nex<span style={{ color: "var(--primary)" }}>Tune</span>
              </span>
            </Link>
            <p style={{ fontSize: 13, color: "rgba(245,241,236,0.5)", lineHeight: 1.7, maxWidth: 260 }}>
              Sistema di ottimizzazione per Windows. Veloce, leggero, senza bloat.
            </p>
          </div>
          {[
            { title: "Prodotto", items: [{ l: "Funzionalità", h: "#features" }, { l: "Come funziona", h: "#how" }, { l: "Scarica", h: "#download" }] },
            { title: "Progetto", items: [{ l: "Chi siamo", h: "/chi-siamo" }, { l: "Termini", h: "/tos" }, { l: "Dashboard", h: "/dashboard" }] },
            { title: "Contatti", items: [{ l: "Discord", h: "https://discord.gg/nextune" }] },
          ].map(col => (
            <div key={col.title}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(245,241,236,0.35)", marginBottom: 16 }}>{col.title}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {col.items.map(it => (
                  <li key={it.l}>
                    <Link href={it.h} style={{ fontSize: 13, color: "rgba(245,241,236,0.55)", textDecoration: "none", transition: "color .15s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--foreground)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,241,236,0.55)")}
                    >{it.l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: 12, color: "rgba(245,241,236,0.35)" }}>© 2026 NexTune</p>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <Link href="/tos" style={{ fontSize: 12, color: "rgba(245,241,236,0.35)", textDecoration: "none" }}>Termini di Servizio</Link>
            <a href="https://discord.gg/nextune" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "rgba(245,241,236,0.35)", textDecoration: "none" }}>
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 13, height: 13 }}><path d={discordPath}/></svg>
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
