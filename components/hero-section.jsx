"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6"
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        <div
          className={`transition-all duration-700 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-5 font-mono text-sm text-primary md:text-base">
            Hi, my name is
          </p>
        </div>

        <div
          className={`transition-all duration-700 delay-200 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
            Your Name Here.
          </h1>
        </div>

        <div
          className={`transition-all duration-700 delay-300 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="mt-2 text-balance text-4xl font-bold leading-tight tracking-tight text-muted-foreground md:text-6xl">
            I build things for the web.
          </h2>
        </div>

        <div
          className={`transition-all duration-700 delay-500 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I'm a frontend developer specializing in building exceptional
            digital experiences. Currently focused on creating accessible,
            human-centered products with modern web technologies.
          </p>
        </div>

        <div
          className={`transition-all duration-700 delay-700 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <a
            href="#projects"
            className="mt-10 inline-flex items-center gap-2 rounded border border-primary px-7 py-4 font-mono text-sm text-primary transition-all duration-200 hover:bg-primary/10"
          >
            Check out my work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>

      {/* Side decorative elements */}
      <div className="fixed bottom-0 left-6 hidden flex-col items-center gap-6 after:h-24 after:w-px after:bg-muted-foreground/30 md:flex lg:left-10">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-all duration-200 hover:-translate-y-1 hover:text-primary"
          aria-label="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-all duration-200 hover:-translate-y-1 hover:text-primary"
          aria-label="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-all duration-200 hover:-translate-y-1 hover:text-primary"
          aria-label="Twitter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        </a>
      </div>

      {/* Email side */}
      <div className="fixed bottom-0 right-6 hidden flex-col items-center gap-6 after:h-24 after:w-px after:bg-muted-foreground/30 md:flex lg:right-10">
        <a
          href="mailto:hello@example.com"
          className="font-mono text-xs tracking-widest text-muted-foreground transition-all duration-200 hover:-translate-y-1 hover:text-primary"
          style={{ writingMode: "vertical-rl" }}
        >
          hello@example.com
        </a>
      </div>
    </section>
  );
}
