"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const ROLES = [
  "Frontend Engineer.",
  "Full-Stack Developer.",
  "AI App Builder.",
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
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="relative flex min-h-[calc(100vh-64px)] flex-col justify-center overflow-hidden py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(0,212,170,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-2xl">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-5 bg-[#00d4aa]" />
          <span className="font-mono text-xs tracking-[0.2em] text-[#00d4aa]">
            frontend · full-stack · ai-integrated
          </span>
        </div>

        <h1 className="mb-2 font-mono text-5xl font-bold leading-tight text-[#ededed] md:text-6xl">
          Arif Azfar
        </h1>

        <div className="mb-1 flex h-10 items-center font-mono text-lg text-[#555]">
          <span className="mr-1 text-[#333]">//</span>
          <span>{displayed}</span>
          <span className="ml-0.5 inline-block h-5 w-0.5 animate-[blink_1s_step-end_infinite] bg-[#00d4aa]" />
        </div>

        <div className="mb-8 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00d4aa] opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00d4aa]" />
          </span>
          <span className="font-mono text-xs tracking-widest text-[#555]">
            open to full-stack roles
          </span>
        </div>

        <p className="mb-10 font-mono text-sm leading-loose text-[#666]">
          I build <span className="text-[#00d4aa]">AI-integrated web apps</span>{" "}
          with React &amp; Next.js.
          <br />
          2+ years across healthcare, e-commerce, and AI domains.
          <br />
          Currently deepening expertise in{" "}
          <span className="text-[#00d4aa]">RAG systems</span>.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/#projects"
            className="rounded bg-[#00d4aa] px-5 py-3 font-mono text-xs font-bold tracking-wider text-black transition-opacity hover:opacity-90"
          >
            view projects →
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="rounded border border-[#333] px-5 py-3 font-mono text-xs tracking-wider text-[#888] transition-colors hover:border-[#555] hover:text-[#ededed]"
          >
            download resume ↓
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 flex items-center gap-3">
        <span className="h-px w-8 bg-[#333]" />
        <span className="font-mono text-xs tracking-widest text-[#333]">
          scroll
        </span>
      </div>
    </section>
  );
}
