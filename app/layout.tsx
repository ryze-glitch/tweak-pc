import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexTune — Ottimizza Windows",
  description: "Sistema di ottimizzazione per Windows. Tweaks automatici, massima performance, zero bloat.",
  icons: { icon: "/icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <meta name="theme-color" content="#050109"/>
        <link rel="preconnect" href="https://api.fontshare.com"/>
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap" rel="stylesheet"/>
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
