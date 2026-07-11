"use client";
import { useState } from "react";

export default function Admin() {
  const [secret, setSecret] = useState("");
  const [authed, setAuthed] = useState(false);
  const [discordId, setDiscordId] = useState("");
  const [username, setUsername] = useState("");
  const [active, setActive] = useState(true);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [licenses, setLicenses] = useState<any[]>([]);
  const [loadingList, setLoadingList] = useState(false);

  const login = () => {
    if (secret.trim()) setAuthed(true);
  };

  const activate = async () => {
    if (!discordId.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/license/activate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ discord_id: discordId.trim(), discord_username: username.trim(), secret, active }),
      });
      const data = await res.json();
      if (data.success) {
        setResult(`✅ Licenza ${active ? "attivata" : "disattivata"} per ${discordId}`);
        setDiscordId("");
        setUsername("");
        loadLicenses();
      } else {
        setResult(`❌ Errore: ${data.error}`);
      }
    } catch {
      setResult("❌ Errore di rete");
    }
    setLoading(false);
  };

  const loadLicenses = async () => {
    setLoadingList(true);
    try {
      const res = await fetch("/api/license/list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret }),
      });
      const data = await res.json();
      if (data.licenses) setLicenses(data.licenses);
    } catch {}
    setLoadingList(false);
  };

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4" style={{ background: "var(--background)" }}>
        <div className="w-full max-w-sm rounded-2xl p-8" style={{ border: "1px solid color-mix(in oklab, var(--border) 60%, transparent)", background: "color-mix(in oklab, var(--card) 40%, transparent)" }}>
          <h1 className="text-xl font-semibold" style={{ fontFamily: "var(--font-outfit)" }}>Admin NexTune</h1>
          <p className="mt-1 text-sm" style={{ color: "var(--muted-foreground)" }}>Inserisci la chiave admin per accedere.</p>
          <input
            type="password"
            placeholder="Admin secret"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && login()}
            className="mt-4 w-full rounded-md px-4 py-2.5 text-sm outline-none"
            style={{ background: "color-mix(in oklab, var(--muted) 50%, transparent)", border: "1px solid color-mix(in oklab, var(--border) 60%, transparent)", color: "var(--foreground)" }}
          />
          <button onClick={login} className="mt-3 w-full rounded-md py-2.5 text-sm font-medium text-white" style={{ background: "var(--primary)" }}>
            Accedi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-12" style={{ background: "var(--background)" }}>
      <div aria-hidden="true" className="pointer-events-none fixed -top-64 -right-64 z-[9990] h-[600px] w-[600px] rounded-full blur-[160px]" style={{ background: "color-mix(in oklab, var(--primary) 5%, transparent)", animation: "orb-a 18s ease-in-out infinite" }} />
      <div aria-hidden="true" className="grain-overlay" />

      <div className="mx-auto max-w-2xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-outfit)" }}>
            Admin <span style={{ color: "var(--primary)" }}>NexTune</span>
          </h1>
          <button onClick={() => { setAuthed(false); setSecret(""); }} className="text-sm" style={{ color: "var(--muted-foreground)" }}>Esci</button>
        </div>

        {/* Form attivazione */}
        <div className="rounded-2xl p-6" style={{ border: "1px solid color-mix(in oklab, var(--border) 60%, transparent)", background: "color-mix(in oklab, var(--card) 40%, transparent)" }}>
          <h2 className="text-base font-semibold mb-4" style={{ fontFamily: "var(--font-outfit)" }}>Gestisci licenza</h2>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Discord ID (es. 123456789012345678)"
              value={discordId}
              onChange={(e) => setDiscordId(e.target.value)}
              className="w-full rounded-md px-4 py-2.5 text-sm outline-none"
              style={{ background: "color-mix(in oklab, var(--muted) 50%, transparent)", border: "1px solid color-mix(in oklab, var(--border) 60%, transparent)", color: "var(--foreground)" }}
            />
            <input
              type="text"
              placeholder="Username Discord (opzionale)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-md px-4 py-2.5 text-sm outline-none"
              style={{ background: "color-mix(in oklab, var(--muted) 50%, transparent)", border: "1px solid color-mix(in oklab, var(--border) 60%, transparent)", color: "var(--foreground)" }}
            />
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={active} onChange={(e) => setActive(e.target.checked)} className="w-4 h-4 accent-orange-500" />
                <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>Licenza attiva</span>
              </label>
            </div>
            <button
              onClick={activate}
              disabled={loading || !discordId.trim()}
              className="w-full rounded-md py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-80 disabled:opacity-50"
              style={{ background: "var(--primary)" }}
            >
              {loading ? "Salvataggio..." : active ? "Attiva licenza" : "Disattiva licenza"}
            </button>
          </div>
          {result && (
            <p className="mt-3 text-sm" style={{ color: result.startsWith("✅") ? "var(--color-emerald-400)" : "var(--color-red-400)" }}>
              {result}
            </p>
          )}
        </div>

        {/* Lista licenze */}
        <div className="mt-6 rounded-2xl p-6" style={{ border: "1px solid color-mix(in oklab, var(--border) 60%, transparent)", background: "color-mix(in oklab, var(--card) 40%, transparent)" }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold" style={{ fontFamily: "var(--font-outfit)" }}>Licenze registrate</h2>
            <button onClick={loadLicenses} disabled={loadingList} className="text-sm transition-colors hover:text-white" style={{ color: "var(--muted-foreground)" }}>
              {loadingList ? "Caricamento..." : "Aggiorna"}
            </button>
          </div>
          {licenses.length === 0 ? (
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>Nessuna licenza. Clicca "Aggiorna" per caricare.</p>
          ) : (
            <div className="space-y-2">
              {licenses.map((l) => (
                <div key={l.discord_id} className="flex items-center justify-between rounded-lg px-4 py-3" style={{ background: "color-mix(in oklab, var(--muted) 30%, transparent)" }}>
                  <div>
                    <p className="text-sm font-medium">{l.discord_username || "—"}</p>
                    <p className="text-xs font-mono" style={{ color: "var(--muted-foreground)" }}>{l.discord_id}</p>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-md" style={{
                    background: l.active ? "color-mix(in oklab, #00d294 15%, transparent)" : "color-mix(in oklab, #ff6367 15%, transparent)",
                    color: l.active ? "#00d294" : "#ff6367"
                  }}>
                    {l.active ? "Attiva" : "Disattiva"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
