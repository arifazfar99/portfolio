"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { label: "about", href: "/#about" },
  { label: "projects", href: "/#projects" },
  { label: "experience", href: "/#experience" },
  { label: "skills", href: "/#skills" },
  { label: "writing", href: "/blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-baseline gap-0.5">
          <span className="font-display text-lg italic text-accent">rfzfr</span>
          <span className="font-mono text-xs text-text-muted">.dev</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-mono text-xs tracking-widest text-text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden rounded border border-accent px-3 py-1.5 font-mono text-xs text-accent transition-colors hover:bg-accent-soft md:block"
          >
            contact →
          </Link>

          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            className="text-text-muted md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border bg-bg px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-mono text-sm text-text-muted hover:text-accent"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                className="font-mono text-sm text-accent"
                onClick={() => setMenuOpen(false)}
              >
                contact →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
