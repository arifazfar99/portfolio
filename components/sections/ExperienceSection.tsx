import { experiences, education } from "@/data/experience";
import { cn } from "@/lib/utils";
import { GraduationCap } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="mb-2 flex items-center gap-3">
        <span className="h-px w-5 bg-[#00d4aa]" />
        <span className="font-mono text-xs tracking-[0.2em] text-[#00d4aa]">
          experience
        </span>
      </div>
      <h2 className="mb-1 font-mono text-3xl font-bold text-[#ededed]">
        Where I've Worked
      </h2>
      <p className="mb-12 font-mono text-xs text-[#555]">
        // professional timeline
      </p>

      <div className="relative pl-8">
        <div
          className="absolute left-0 top-2 w-px"
          style={{
            bottom: 0,
            background:
              "linear-gradient(to bottom, #00d4aa, #00d4aa44, transparent)",
          }}
        />

        {experiences.map((exp, i) => (
          <div key={exp.company} className="relative mb-10 last:mb-10">
            <span
              className={cn(
                "absolute -left-[2.3rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#0a0a0a]",
                i === 0
                  ? "bg-[#00d4aa] shadow-[0_0_0_1px_#00d4aa]"
                  : "bg-[#1f1f1f] shadow-[0_0_0_1px_#333]"
              )}
            />

            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="font-mono text-sm font-bold text-[#ededed]">
                {exp.company}
              </span>
              <span className="text-[#333]">·</span>
              <span className="font-mono text-xs text-[#00d4aa]">
                {exp.role}
              </span>
              <span className="ml-auto font-mono text-xs text-[#444]">
                {exp.period}
              </span>
            </div>

            <div className="rounded border border-[#1f1f1f] bg-[#111] p-5">
              <ul className="flex flex-col gap-2.5">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="mt-0.5 shrink-0 font-mono text-xs text-[#00d4aa]">
                      ▸
                    </span>
                    <span className="font-mono text-xs leading-relaxed text-[#666]">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-[#1a1a1a] pt-4">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-[#1f1f1f] px-2 py-0.5 font-mono text-[10px] text-[#555]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="relative">
          <span className="absolute -left-[2.3rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#0a0a0a] bg-[#1f1f1f] shadow-[0_0_0_1px_#333]" />

          {/* Meta row */}
          <div className="mb-3 flex items-center gap-2">
            <GraduationCap size={14} className="text-[#555]" />
            <span className="font-mono text-sm font-bold text-[#ededed]">
              Education
            </span>
          </div>

          {/* Education card */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded border border-[#1f1f1f] bg-[#111] p-5">
            <div>
              <p className="font-mono text-sm font-bold text-[#ededed]">
                {education.school}
              </p>
              <p className="mt-1 font-mono text-xs text-[#555]">
                {education.degree}
              </p>
            </div>
            <span className="font-mono text-xs text-[#444]">
              {education.year}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}