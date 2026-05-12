import { skillGroups, currentlyLearning } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      {/* Section header */}
      <div className="mb-2 flex items-center gap-3">
        <span className="h-px w-5 bg-[#00d4aa]" />
        <span className="font-mono text-xs tracking-[0.2em] text-[#00d4aa]">
          skills
        </span>
      </div>
      <h2 className="mb-1 font-mono text-3xl font-bold text-[#ededed]">
        What I Work With
      </h2>
      <p className="mb-12 font-mono text-xs text-[#555]">
        // tools &amp; technologies
      </p>

      {/* Skills grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded border border-[#1f1f1f] bg-[#111] p-5 transition-colors duration-200 hover:border-[#00d4aa22]"
          >
            {/* Card header */}
            <div className="mb-4 flex items-center gap-2 border-b border-[#1a1a1a] pb-3">
              <span className="text-sm">{group.icon}</span>
              <span className="font-mono text-xs tracking-[0.15em] text-[#00d4aa]">
                {group.label}
              </span>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded border border-[#2a2a2a] bg-[#161616] px-2.5 py-1 font-mono text-[10px] tracking-wider text-[#ededed]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Currently learning strip */}
      <div className="mt-6 flex items-start gap-3 rounded border border-[#00d4aa22] bg-[#00d4aa05] p-4">
        {/* Pulsing dot */}
        <span className="relative mt-1 flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00d4aa] opacity-50" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00d4aa]" />
        </span>

        <p className="font-mono text-xs leading-relaxed text-[#555]">
          Currently deepening:{" "}
          {currentlyLearning.map((item, i) => (
            <span key={item}>
              <span className="text-[#00d4aa]">{item}</span>
              {i < currentlyLearning.length - 1 && (
                <span className="text-[#333]">, </span>
              )}
            </span>
          ))}
          {" "}— building toward senior-level backend and systems design.
        </p>
      </div>
    </section>
  );
}