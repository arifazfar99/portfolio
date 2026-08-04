import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPostBySlug } from "@/data/posts";
import { postContent } from "@/content/blog";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

function formatFiled(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Arif Azfar`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const Body = postContent[slug];

  if (!post || !Body) {
    notFound();
  }

  return (
    <article className="py-20">
      <Link
        href="/blog"
        className="mb-10 inline-flex items-center gap-1.5 font-mono text-xs tracking-widest text-text-muted transition-colors hover:text-accent"
      >
        ← writing
      </Link>

      <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] tracking-[0.15em] text-text-muted">
        <span>
          REF <span className="text-accent">RFZFR—LOG</span>
        </span>
        <span className="hidden h-3 w-px bg-border sm:block" />
        <span>FILED {formatFiled(post.date).toUpperCase()}</span>
      </div>

      <h1 className="mb-4 font-display text-3xl italic leading-tight text-text md:text-4xl">
        {post.title}
      </h1>
      <span className="mb-10 block h-px w-16 bg-accent" />

      <div className="max-w-2xl">
        <Body />
      </div>

      <div className="mt-16 flex flex-wrap gap-1.5 border-t border-border pt-6">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-accent/30 bg-accent-soft px-2 py-0.5 font-mono text-[10px] tracking-wider text-accent"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
