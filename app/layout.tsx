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
        <meta name="theme-color" content="#000000"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
