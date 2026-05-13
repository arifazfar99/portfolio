import Link from "next/link";
import { GitBranchIcon, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-4 rounded border border-[#1f1f1f] bg-[#111] p-6 transition-colors duration-200 hover:border-[#00d4aa33]",
        project.featured && "border-[#00d4aa22]",
      )}
    >
      {project.featured && (
        <span className="absolute -top-px right-4 rounded-b bg-[#00d4aa] px-2 py-0.5 font-mono text-[9px] font-bold tracking-widest text-black">
          latest
        </span>
      )}

      <div className="flex items-start justify-between">
        <span className="text-2xl">{project.icon}</span>
        <div className="flex items-center gap-3">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-mono text-xs text-[#444] transition-colors hover:text-[#00d4aa]"
            >
              <GitBranchIcon size={13} />
              github
            </Link>
          )}
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-mono text-xs text-[#444] transition-colors hover:text-[#00d4aa]"
            >
              <ExternalLink size={13} />
              demo
            </Link>
          )}
        </div>
      </div>

      <div>
        <h3 className="mb-2 font-mono text-sm font-bold text-[#ededed]">
          {project.title}
        </h3>
        <p className="font-mono text-xs leading-relaxed text-[#666]">
          {project.description}
        </p>
      </div>

      <div className="mt-auto flex flex-wrap gap-1.5 border-t border-[#1a1a1a] pt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-[#00d4aa22] bg-[#00d4aa0d] px-2 py-0.5 font-mono text-[10px] tracking-wider text-[#00d4aa]"
          >
            {tag}
          </span>
        ))}
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-[#1f1f1f] px-2 py-0.5 font-mono text-[10px] tracking-wider text-[#555]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
