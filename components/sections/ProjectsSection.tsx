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
      {/* Section header */}
      <div className="mb-2 flex items-center gap-3">
        <span className="h-px w-5 bg-[#00d4aa]" />
        <span className="font-mono text-xs tracking-[0.2em] text-[#00d4aa]">
          projects
        </span>
      </div>
      <h2 className="mb-1 font-mono text-3xl font-bold text-[#ededed]">
        Things I've Built
      </h2>
      <p className="mb-8 font-mono text-xs text-[#555]">
        // personal &amp; professional work
      </p>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        {filterTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActive(tag)}
            className={cn(
              "rounded border px-4 py-1.5 font-mono text-xs tracking-wider transition-all",
              active === tag
                ? "border-[#00d4aa] bg-[#00d4aa0d] text-[#00d4aa]"
                : "border-[#1f1f1f] text-[#555] hover:border-[#333] hover:text-[#888]",
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <p className="font-mono text-sm text-[#444]">
          // no projects found for this filter
        </p>
      )}
    </section>
  );
}
