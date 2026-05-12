"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "about", href: "/#about" },
  { label: "projects", href: "/#projects" },
  { label: "experience", href: "/#experience" },
  { label: "skills", href: "/#skills" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1f1f1f] bg-[#0a0a0a]/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="font-mono text-sm font-semibold text-[#00d4aa]">
          rfzfr<span className="text-foreground">.dev</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-mono text-xs tracking-widest text-[#888] transition-colors hover:text-[#00d4aa]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/#contact"
          className="hidden rounded border border-[#00d4aa] px-3 py-1.5 font-mono text-xs text-[#00d4aa] transition-colors hover:bg-[#00d4aa]/10 md:block"
        >
          contact →
        </Link>

        {/* Mobile hamburger */}
        <button
          className="text-[#888] md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-[#1f1f1f] bg-[#0a0a0a] px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-mono text-sm text-[#888] hover:text-[#00d4aa]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                className="font-mono text-sm text-[#00d4aa]"
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