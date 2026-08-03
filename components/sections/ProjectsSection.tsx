"use client";

import { useState } from "react";
import { projects, filterTags } from "@/data/projects";
import ProjectCard from "@/components/sections/ProjectCard";
import { cn } from "@/lib/utils";

export default function ProjectsSection() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.tags.includes(active));

  return (
    <section id="projects" className="py-24">
      <div className="mb-2 flex items-center gap-3">
        <span className="h-px w-5 bg-accent" />
        <span className="font-mono text-xs tracking-[0.2em] text-accent">
          projects
        </span>
      </div>
      <h2 className="mb-1 font-display text-3xl italic text-text">
        Things I&apos;ve Shipped
      </h2>
      <p className="mb-8 font-mono text-xs text-text-muted">
        {"// a record of personal & professional work"}
      </p>

      <div className="mb-8 flex flex-wrap gap-2">
        {filterTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActive(tag)}
            className={cn(
              "rounded border px-4 py-1.5 font-mono text-xs tracking-wider transition-all",
              active === tag
                ? "border-accent bg-accent-soft text-accent"
                : "border-border text-text-muted hover:border-accent",
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {filtered.map((project, i) => (
          <ProjectCard key={project.title} project={project} entryNo={i + 1} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="font-mono text-sm text-text-muted">
          {"// no projects found for this filter"}
        </p>
      )}
    </section>
  );
}
