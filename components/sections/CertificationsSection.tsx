import { certifications } from "@/data/certifications";
import { BadgeCheck } from "lucide-react";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24">
      <div className="mb-2 flex items-center gap-3">
        <span className="h-px w-5 bg-accent" />
        <span className="font-mono text-xs tracking-[0.2em] text-accent">
          certifications
        </span>
      </div>
      <h2 className="mb-1 font-display text-3xl italic text-text">
        Credentials on File
      </h2>
      <p className="mb-12 font-mono text-xs text-text-muted">
        {"// exams passed, courses completed"}
      </p>

      <div className="rounded border border-border bg-surface">
        {certifications.map((cert, i) => (
          <div
            key={cert.title}
            className={
              "flex flex-wrap items-center gap-3 p-5" +
              (i < certifications.length - 1 ? " border-b border-border" : "")
            }
          >
            <BadgeCheck size={16} className="shrink-0 text-accent" />
            <div className="min-w-0 flex-1">
              <p className="font-display text-base italic text-text">
                {cert.title}
              </p>
              <p className="mt-1 font-mono text-xs text-text-muted">
                {cert.issuer}
                {cert.note ? ` · ${cert.note}` : ""}
              </p>
            </div>
            <span className="font-mono text-xs text-text-muted">
              {cert.date}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
