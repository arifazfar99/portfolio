import Link from "next/link";
import { GitBranchIcon, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import Seal from "@/components/ui/Seal";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  entryNo,
}: {
  project: Project;
  entryNo: number;
}) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-4 rounded border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent sm:flex-row sm:gap-6",
        project.featured && "border-accent/40",
      )}
    >
      {project.featured && (
        <span className="absolute -top-px right-4 rounded-b bg-accent px-2 py-0.5 font-mono text-[9px] font-bold tracking-widest text-accent-contrast">
          latest
        </span>
      )}

      {/* Entry number */}
      <div className="flex shrink-0 items-center gap-3 sm:w-16 sm:flex-col sm:items-start sm:gap-1">
        <span className="font-mono text-xs text-text-muted">
          {String(entryNo).padStart(3, "0")}
        </span>
        <span className="text-2xl">{project.icon}</span>
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <h3 className="font-display text-lg italic text-text">
              {project.title}
            </h3>
            {project.demo && <Seal size="sm" />}
          </div>

          <div className="flex items-center gap-3">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-mono text-xs text-text-muted transition-colors hover:text-accent"
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
                className="flex items-center gap-1 font-mono text-xs text-text-muted transition-colors hover:text-accent"
              >
                <ExternalLink size={13} />
                demo
              </Link>
            )}
          </div>
        </div>

        <p className="font-sans text-[13px] leading-relaxed text-text-muted">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-accent/30 bg-accent-soft px-2 py-0.5 font-mono text-[10px] tracking-wider text-accent"
              >
                {tag}
              </span>
            ))}
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded border border-border px-2 py-0.5 font-mono text-[10px] tracking-wider text-text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
          <span className="shrink-0 font-mono text-[10px] tracking-wider text-text-muted">
            filed {project.filed}
          </span>
        </div>
      </div>
    </div>
  );
}
