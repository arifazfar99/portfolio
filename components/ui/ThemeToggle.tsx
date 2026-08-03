"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

export default function ThemeToggle({ className }: { className?: string }) {
  // Starts null so the server-rendered markup and the first client render
  // match exactly (see the blocking script in app/layout.tsx) — avoids a
  // hydration mismatch. Synced to the real value right after mount.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const id = setTimeout(() => {
      const current = document.documentElement.dataset.theme;
      setTheme(current === "dark" ? "dark" : "light");
    }, 0);
    return () => clearTimeout(id);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded border border-border text-text-muted transition-colors hover:border-accent hover:text-accent ${className ?? ""}`}
    >
      {theme === null ? null : theme === "dark" ? (
        <Sun size={14} />
      ) : (
        <Moon size={14} />
      )}
    </button>
  );
}
