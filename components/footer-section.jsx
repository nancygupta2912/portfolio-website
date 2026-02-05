"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export default function FooterSection() {
  return (
    <footer className="py-8 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Mobile social links (hidden on desktop since they're on the side) */}
        <div className="mb-6 flex items-center justify-center gap-6 md:hidden">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block font-mono text-xs leading-relaxed text-muted-foreground transition-colors hover:text-primary"
          >
            <p>Designed & Built with care</p>
            <p className="mt-1 text-muted-foreground/60 transition-colors group-hover:text-primary/60">
              Built with Next.js & Tailwind CSS
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
}
