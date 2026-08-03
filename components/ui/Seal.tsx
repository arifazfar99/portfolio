import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type SealProps = {
  size?: "sm" | "md";
  className?: string;
};

// The signature "verified record" stamp — used once large in the hero,
// and small next to any project that's actually live.
export default function Seal({ size = "md", className }: SealProps) {
  if (size === "sm") {
    return (
      <span
        className={cn(
          "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-accent text-accent",
          className,
        )}
        title="Shipped"
      >
        <Check size={10} strokeWidth={3} />
      </span>
    );
  }

  return (
    <div
      className={cn(
        "flex h-28 w-28 shrink-0 -rotate-12 flex-col items-center justify-center gap-1.5 rounded-full border-2 border-dashed border-accent text-accent",
        className,
      )}
    >
      <Check size={20} strokeWidth={2.5} />
      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em]">
        Verified
      </span>
      <span className="font-mono text-[6px] uppercase tracking-[0.22em] text-text-muted">
        owns the code
      </span>
    </div>
  );
}
