export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO — displayed as "filed" date, ledger-style
  tags: string[];
};

export const posts: Post[] = [
  {
    slug: "ai-memory-that-actually-remembers-you",
    title: "Giving Claude a Memory That Actually Remembers You",
    excerpt:
      "Three markdown files and one habit turn Claude Code into something that doesn't forget who you are between sessions — no database, no plugin, and no coding experience required to set up.",
    date: "2026-08-04",
    tags: ["ai-tooling", "claude-code", "guide"],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
