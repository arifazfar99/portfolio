import { experiences, education } from "@/data/experience";
import { cn } from "@/lib/utils";
import { GraduationCap } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="mb-2 flex items-center gap-3">
        <span className="h-px w-5 bg-accent" />
        <span className="font-mono text-xs tracking-[0.2em] text-accent">
          experience
        </span>
      </div>
      <h2 className="mb-1 font-display text-3xl italic text-text">
        Where I&apos;ve Worked
      </h2>
      <p className="mb-12 font-mono text-xs text-text-muted">
        {"// employment record, most recent first"}
      </p>

      <div className="relative pl-8">
        <div
          className="absolute left-0 top-2 w-px"
          style={{
            bottom: 0,
            background:
              "linear-gradient(to bottom, var(--accent), color-mix(in srgb, var(--accent) 30%, transparent), transparent)",
          }}
        />

        {experiences.map((exp, i) => (
          <div key={exp.company} className="relative mb-10 last:mb-10">
            <span
              className={cn(
                "absolute -left-[2.3rem] top-1.5 h-2.5 w-2.5 rotate-45 border-2 border-bg",
                i === 0
                  ? "bg-accent shadow-[0_0_0_1px_var(--accent)]"
                  : "bg-border shadow-[0_0_0_1px_var(--border)]",
              )}
            />

            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="font-display text-base italic text-text">
                {exp.company}
              </span>
              <span className="text-border">·</span>
              <span className="font-mono text-xs text-accent">{exp.role}</span>
              <span className="ml-auto font-mono text-xs text-text-muted">
                {exp.period}
              </span>
            </div>

            <div className="rounded border border-border bg-surface p-5">
              <ul className="flex flex-col gap-2.5">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="mt-0.5 shrink-0 font-mono text-xs text-accent">
                      ▸
                    </span>
                    <span className="font-sans text-[13px] leading-relaxed text-text-muted">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border pt-4">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="relative">
          <span className="absolute -left-[2.3rem] top-1.5 h-2.5 w-2.5 rotate-45 border-2 border-bg bg-border shadow-[0_0_0_1px_var(--border)]" />

          {/* Meta row */}
          <div className="mb-3 flex items-center gap-2">
            <GraduationCap size={14} className="text-text-muted" />
            <span className="font-display text-base italic text-text">
              Education
            </span>
          </div>

          {/* Education card */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded border border-border bg-surface p-5">
            <div>
              <p className="font-display text-base italic text-text">
                {education.school}
              </p>
              <p className="mt-1 font-mono text-xs text-text-muted">
                {education.degree}
                {education.major ? ` · ${education.major}` : ""}
              </p>
              {education.cgpa && (
                <p className="mt-1 font-mono text-[10px] tracking-wide text-text-muted">
                  CGPA {education.cgpa}
                </p>
              )}
            </div>
            <span className="font-mono text-xs text-text-muted">
              {education.period ?? education.year}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
