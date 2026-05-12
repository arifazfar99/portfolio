import Link from "next/link";
import { GitBranchPlus, LinkIcon, FileText } from "lucide-react";

const socials = [
  { label: "github", href: "https://github.com/arifazfar99", icon: GitBranchPlus },
  { label: "linkedin", href: "https://linkedin.com/in/arif-azfar-azri", icon: LinkIcon },
  { label: "resume", href: "/resume.pdf", icon: FileText },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] px-6 py-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <p className="font-mono text-xs text-[#444]">
          © {new Date().getFullYear()} Arif Azfar. Built with Next.js.
        </p>
        <ul className="flex items-center gap-6">
          {socials.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs text-[#555] transition-colors hover:text-[#00d4aa]"
              >
                <s.icon size={14} />
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}