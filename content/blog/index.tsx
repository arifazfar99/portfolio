import type { ComponentType } from "react";
import AiMemoryThatActuallyRemembersYou from "./ai-memory-that-actually-remembers-you";

// Registry mapping each post's slug (data/posts.ts) to its body component.
// Add a new entry here whenever a new file is added to content/blog/.
export const postContent: Record<string, ComponentType> = {
  "ai-memory-that-actually-remembers-you": AiMemoryThatActuallyRemembersYou,
};
