import { skillGroups, currentlyLearning } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="mb-2 flex items-center gap-3">
        <span className="h-px w-5 bg-accent" />
        <span className="font-mono text-xs tracking-[0.2em] text-accent">
          skills
        </span>
      </div>
      <h2 className="mb-1 font-display text-3xl italic text-text">
        What I Work With
      </h2>
      <p className="mb-12 font-mono text-xs text-text-muted">
        {"// specification sheet"}
      </p>

      {/* Skills grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded border border-border bg-surface p-5 transition-colors duration-200 hover:border-accent/40"
          >
            <div className="mb-4 flex items-center gap-2 border-b border-border pb-3">
              <span className="text-sm">{group.icon}</span>
              <span className="font-mono text-xs tracking-[0.15em] text-accent">
                {group.label}
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded border border-border bg-bg-dim px-2.5 py-1 font-mono text-[10px] tracking-wider text-text"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Currently learning strip */}
      <div className="mt-6 flex items-start gap-3 rounded border border-accent/30 bg-accent-soft p-4">
        {/* Pulsing dot */}
        <span className="relative mt-1 flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>

        <p className="font-sans text-xs leading-relaxed text-text-muted">
          Currently deepening:{" "}
          {currentlyLearning.map((item, i) => (
            <span key={item}>
              <span className="text-accent">{item}</span>
              {i < currentlyLearning.length - 1 && (
                <span className="text-accent-strong">, </span>
              )}
            </span>
          ))}{" "}
          — building toward senior-level engineer and systems design.
        </p>
      </div>
    </section>
  );
}
