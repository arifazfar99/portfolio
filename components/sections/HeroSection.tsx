"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Seal from "@/components/ui/Seal";

const ROLES = [
  "Frontend Developer.",
  "React & Next.js Engineer.",
  "Full-Stack, When It Counts.",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 40);
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="about"
      className="relative flex min-h-[calc(100vh-64px)] flex-col justify-center overflow-hidden py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 80% 40%, color-mix(in srgb, var(--accent) 8%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-2xl">
        {/* Letterhead meta row */}
        <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] tracking-[0.15em] text-text-muted">
          <span>
            REF <span className="text-accent">RFZFR—2026</span>
          </span>
          <span className="hidden h-3 w-px bg-border sm:block" />
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            STATUS <span className="text-accent">OPEN TO WORK</span>
          </span>
          <span className="hidden h-3 w-px bg-border sm:block" />
          <span>FROM KUALA LUMPUR, MY</span>
        </div>

        <div className="mb-2 flex items-start justify-between gap-6">
          <h1 className="font-display text-5xl italic leading-[1.05] text-text md:text-6xl">
            Arif Azfar
          </h1>
          <Seal className="mt-1 hidden sm:flex" />
        </div>
        <span className="mb-6 block h-px w-16 bg-accent" />

        <div className="mb-6 flex h-8 items-center font-mono text-lg text-text-muted">
          <span className="mr-1 text-border">{"//"}</span>
          <span>{displayed}</span>
          <span className="ml-0.5 inline-block h-5 w-0.5 animate-blink bg-accent" />
        </div>

        <p className="mb-10 max-w-lg font-sans text-[15px] leading-relaxed text-text-muted">
          Frontend Developer with 2+ years building production{" "}
          <span className="text-accent">React and Next.js</span> applications —
          real-time, computer-vision-integrated interfaces and healthcare
          platforms serving major hospital networks. I direct and validate
          AI-assisted development without losing ownership of the code —
          not just using the tools, but accountable for what they produce.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/#projects"
            className="rounded bg-accent px-5 py-3 font-mono text-xs font-bold tracking-wider text-accent-contrast transition-opacity hover:opacity-90"
          >
            the record →
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="rounded border border-border px-5 py-3 font-mono text-xs tracking-wider text-text-muted transition-colors hover:border-accent hover:text-text"
          >
            résumé ↓
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 flex items-center gap-3">
        <span className="h-px w-8 bg-border" />
        <span className="font-mono text-xs tracking-widest text-text-muted">
          scroll
        </span>
      </div>
    </section>
  );
}
