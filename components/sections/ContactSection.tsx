"use client";

import { useState } from "react";
import { Send, GitBranchIcon, LinkIcon, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const contactLinks = [
  {
    icon: Mail,
    label: "arifazfar99@gmail.com",
    href: "mailto:arifazfar99@gmail.com",
  },
  {
    icon: GitBranchIcon,
    label: "github.com/arifazfar99",
    href: "https://github.com/arifazfar99",
  },
  {
    icon: LinkIcon,
    label: "linkedin.com/in/arif-azfar-azri",
    href: "https://linkedin.com/in/arif-azfar-azri",
  },
  {
    icon: MapPin,
    label: "Kuala Lumpur, Malaysia",
    href: "#",
  },
];

const INITIAL: FormState = { name: "", email: "", subject: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm(INITIAL);
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="mb-2 flex items-center gap-3">
        <span className="h-px w-5 bg-accent" />
        <span className="font-mono text-xs tracking-[0.2em] text-accent">
          contact
        </span>
      </div>
      <h2 className="mb-1 font-display text-3xl italic text-text">
        Get In Touch
      </h2>
      <p className="mb-12 font-mono text-xs text-text-muted">
        {"// sign-off & open lines"}
      </p>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.6fr]">
        {/* Left — info */}
        <div>
          <p className="mb-8 font-sans text-[13px] leading-loose text-text-muted">
            I&apos;m currently{" "}
            <span className="text-accent">open to Frontend Developer roles</span>{" "}
            — remote-friendly or hybrid in Kuala Lumpur.
            <br />
            <br />
            Got a project, opportunity, or just want to say hi? Drop a message
            and I&apos;ll get back to you.
          </p>

          <ul className="flex flex-col gap-3">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 font-mono text-xs text-text-muted transition-colors hover:text-accent"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded border border-border bg-surface transition-colors group-hover:border-accent">
                    <link.icon size={13} />
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name + Email row */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field
              label="NAME"
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
            />
            <Field
              label="EMAIL"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <Field
            label="SUBJECT"
            name="subject"
            type="text"
            placeholder="What's this about?"
            value={form.subject}
            onChange={handleChange}
          />

          {/* Message textarea */}
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[10px] tracking-[0.15em] text-text-muted">
              MESSAGE
            </label>
            <textarea
              name="message"
              placeholder="Tell me more..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="resize-none rounded border border-border bg-surface px-3.5 py-2.5 font-mono text-xs text-text placeholder-text-muted/50 outline-none transition-colors focus:border-accent"
            />
          </div>

          {/* Error message */}
          {status === "error" && (
            <p className="font-mono text-xs text-red-500">✗ {errorMsg}</p>
          )}

          {/* Success message */}
          {status === "success" && (
            <p className="font-mono text-xs text-accent">
              ✓ Message sent — I&apos;ll get back to you soon.
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className={cn(
              "flex items-center gap-2 self-start rounded bg-accent px-5 py-2.5 font-mono text-xs font-bold tracking-wider text-accent-contrast transition-opacity",
              status === "loading" ? "cursor-not-allowed opacity-60" : "hover:opacity-90"
            )}
          >
            <Send size={13} />
            {status === "loading" ? "sending..." : "seal & send →"}
          </button>
        </form>
      </div>
    </section>
  );
}

// Reusable input field
function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-[10px] tracking-[0.15em] text-text-muted">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="rounded border border-border bg-surface px-3.5 py-2.5 font-mono text-xs text-text placeholder-text-muted/50 outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}
