import Link from "next/link";
import type { Post } from "@/data/posts";

function formatFiled(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export default function PostCard({
  post,
  entryNo,
}: {
  post: Post;
  entryNo: number;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-4 rounded border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent sm:flex-row sm:gap-6"
    >
      <div className="flex shrink-0 items-center gap-3 sm:w-16 sm:flex-col sm:items-start sm:gap-1">
        <span className="font-mono text-xs text-text-muted">
          {String(entryNo).padStart(3, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <h3 className="font-display text-lg italic text-text transition-colors group-hover:text-accent">
          {post.title}
        </h3>
        <p className="font-sans text-[13px] leading-relaxed text-text-muted">
          {post.excerpt}
        </p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-accent/30 bg-accent-soft px-2 py-0.5 font-mono text-[10px] tracking-wider text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="shrink-0 font-mono text-[10px] tracking-wider text-text-muted">
            filed {formatFiled(post.date)}
          </span>
        </div>
      </div>
    </Link>
  );
}
