import type { ReactNode } from "react";

// Shared typographic primitives for post bodies in content/blog/*.tsx —
// kept separate from ProjectCard's ledger styling since prose needs to read
// comfortably at paragraph length, not compress into a card.

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="mb-8 font-sans text-lg leading-relaxed text-text-muted">
      {children}
    </p>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-4 mt-12 font-display text-2xl italic text-text">
      {children}
    </h2>
  );
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 font-sans text-[15px] leading-relaxed text-text-muted">
      {children}
    </p>
  );
}

export function List({ children }: { children: ReactNode }) {
  return <ul className="mb-5 flex flex-col gap-2.5">{children}</ul>;
}

export function ListItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 font-sans text-[15px] leading-relaxed text-text-muted">
      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
      <span>{children}</span>
    </li>
  );
}

export function InlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="rounded border border-border bg-bg-dim px-1.5 py-0.5 font-mono text-[13px] text-accent">
      {children}
    </code>
  );
}

export function CodeBlock({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-5 overflow-hidden rounded border border-border bg-surface">
      <div className="flex items-center gap-2 border-b border-border bg-bg-dim px-4 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="font-mono text-[11px] tracking-wide text-text-muted">
          {label}
        </span>
      </div>
      <pre className="overflow-x-auto whitespace-pre-wrap break-words px-4 py-3 font-mono text-[13px] leading-relaxed text-text">
        {children}
      </pre>
    </div>
  );
}

export function Callout({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-5 rounded border border-border border-l-2 border-l-accent bg-accent-soft/40 px-5 py-4">
      <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.12em] text-accent-strong">
        {label}
      </span>
      <p className="font-sans text-[14px] leading-relaxed text-text">
        {children}
      </p>
    </div>
  );
}
