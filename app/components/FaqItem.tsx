"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b last:border-b-0"
      style={{ borderColor: "color-mix(in oklab, var(--border) 60%, transparent)" }}
    >
      <button
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{ background: "transparent" }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "color-mix(in oklab, var(--muted) 40%, transparent)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
      >
        <span className="text-base font-medium" style={{ fontFamily: "var(--font-outfit)" }}>
          {question}
        </span>
        <Plus
          size={16}
          className="shrink-0 transition-transform duration-300 ease-out"
          style={{
            color: "var(--muted-foreground)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        />
      </button>

      {/* Grid rows animation — exact same as original */}
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className="border-t px-6 py-4 transition-opacity duration-300"
            style={{
              borderColor: "color-mix(in oklab, var(--border) 40%, transparent)",
              background: "color-mix(in oklab, var(--muted) 10%, transparent)",
              opacity: open ? 1 : 0,
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
