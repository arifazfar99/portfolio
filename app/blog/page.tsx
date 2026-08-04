import type { Metadata } from "next";
import { posts } from "@/data/posts";
import PostCard from "@/components/blog/PostCard";

export const metadata: Metadata = {
  title: "Writing — Arif Azfar",
  description:
    "Notes on building with AI-assisted tooling, frontend engineering, and what it actually takes to ship production code.",
};

export default function BlogIndexPage() {
  return (
    <section className="py-20">
      <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] tracking-[0.15em] text-text-muted">
        <span>
          REF <span className="text-accent">RFZFR—LOG</span>
        </span>
        <span className="hidden h-3 w-px bg-border sm:block" />
        <span>
          {posts.length} {posts.length === 1 ? "ENTRY" : "ENTRIES"} FILED
        </span>
      </div>

      <h1 className="mb-3 font-display text-4xl italic text-text md:text-5xl">
        Writing
      </h1>
      <span className="mb-10 block h-px w-16 bg-accent" />

      <div className="flex flex-col gap-4">
        {posts.map((post, i) => (
          <PostCard key={post.slug} post={post} entryNo={posts.length - i} />
        ))}
      </div>
    </section>
  );
}
