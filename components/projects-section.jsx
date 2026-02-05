"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, Folder } from "lucide-react";

const featuredProjects = [
  {
    title: "Analytics Dashboard",
    description:
      "A comprehensive web analytics dashboard with real-time data visualization, custom reporting, and team collaboration features. Built with a focus on performance and accessibility.",
    image: "/project-1.jpg",
    tech: ["React", "Next.js", "TypeScript", "D3.js", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    align: "right",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with product search, cart management, secure checkout, and an admin dashboard. Includes real-time inventory tracking and order management.",
    image: "/project-2.jpg",
    tech: ["Next.js", "Stripe", "Tailwind CSS", "Prisma", "Node.js"],
    github: "https://github.com",
    live: "https://example.com",
    align: "left",
  },
  {
    title: "Social Platform",
    description:
      "A social networking application featuring real-time messaging, user profiles, content feeds, and notification systems. Optimized for mobile-first experiences.",
    image: "/project-3.jpg",
    tech: ["React", "Socket.io", "Express", "MongoDB", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
    align: "right",
  },
];

const otherProjects = [
  {
    title: "Weather App",
    description:
      "A clean weather application with location-based forecasts, interactive maps, and severe weather alerts.",
    tech: ["React", "OpenWeather API", "CSS Modules"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Manager",
    description:
      "A minimal yet powerful task management tool with drag-and-drop, labels, and calendar integration.",
    tech: ["Next.js", "DnD Kit", "Supabase"],
    github: "https://github.com",
  },
  {
    title: "Portfolio Generator",
    description:
      "A CLI tool that generates stunning portfolio websites from a simple JSON config file.",
    tech: ["Node.js", "Handlebars", "CLI"],
    github: "https://github.com",
  },
  {
    title: "Markdown Editor",
    description:
      "A real-time markdown editor with live preview, syntax highlighting, and export options.",
    tech: ["React", "CodeMirror", "Marked"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Budget Tracker",
    description:
      "A personal finance tracker with spending categories, charts, and monthly budget goals.",
    tech: ["Vue.js", "Chart.js", "Firebase"],
    github: "https://github.com",
  },
  {
    title: "URL Shortener",
    description:
      "A fast URL shortener service with custom aliases, click analytics, and QR code generation.",
    tech: ["Express", "Redis", "React"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

function FeaturedProject({ project, index, visible }) {
  const isRight = project.align === "right";

  return (
    <div
      className={`relative grid items-center gap-4 md:grid-cols-12 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } transition-all duration-700`}
      style={{ transitionDelay: `${200 + index * 200}ms` }}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden rounded md:col-span-7 ${
          isRight ? "md:col-start-1" : "md:col-start-6"
        } md:row-start-1`}
      >
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <div className="absolute inset-0 z-10 bg-background/60 transition-colors duration-300 group-hover:bg-transparent" />
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={700}
            height={400}
            className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </a>
      </div>

      {/* Content */}
      <div
        className={`relative z-20 md:col-span-6 ${
          isRight ? "md:col-start-7 md:text-right" : "md:col-start-1 md:text-left"
        } md:row-start-1`}
      >
        <p className="mb-1 font-mono text-xs text-primary">Featured Project</p>
        <h3 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            {project.title}
          </a>
        </h3>

        <div className="rounded-lg bg-card/90 p-5 shadow-lg backdrop-blur-sm md:bg-card">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        <ul
          className={`mt-4 flex flex-wrap gap-3 font-mono text-xs text-muted-foreground ${
            isRight ? "md:justify-end" : "md:justify-start"
          }`}
        >
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div
          className={`mt-4 flex items-center gap-4 ${
            isRight ? "md:justify-end" : "md:justify-start"
          }`}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition-colors hover:text-primary"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github size={20} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition-colors hover:text-primary"
              aria-label={`View ${project.title} live`}
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function OtherProjectCard({ project, index, visible }) {
  return (
    <div
      className={`group flex flex-col justify-between rounded-lg border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${300 + index * 100}ms` }}
    >
      <div>
        <div className="mb-6 flex items-center justify-between">
          <Folder size={40} className="text-primary" strokeWidth={1} />
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github size={18} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={`View ${project.title} live`}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>

      <ul className="mt-5 flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const otherRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [otherVisible, setOtherVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    const otherObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setOtherVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    if (otherRef.current) otherObserver.observe(otherRef.current);
    return () => {
      observer.disconnect();
      otherObserver.disconnect();
    };
  }, []);

  return (
    <section id="projects" ref={ref} className="py-24 px-6 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div
          className={`transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="mb-16 flex items-center gap-4 text-2xl font-bold text-foreground md:text-3xl">
            <span className="font-mono text-lg text-primary md:text-xl">
              03.
            </span>
            Some Things I've Built
            <span className="h-px flex-1 bg-border" />
          </h2>
        </div>

        {/* Featured projects */}
        <div className="flex flex-col gap-24">
          {featuredProjects.map((project, i) => (
            <FeaturedProject
              key={project.title}
              project={project}
              index={i}
              visible={visible}
            />
          ))}
        </div>

        {/* Other noteworthy projects */}
        <div ref={otherRef} className="mt-32">
          <div
            className={`mb-10 text-center transition-all duration-700 ${
              otherVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold text-foreground">
              Other Noteworthy Projects
            </h3>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block font-mono text-sm text-primary transition-colors hover:underline"
            >
              view the archive
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, i) => (
              <OtherProjectCard
                key={project.title}
                project={project}
                index={i}
                visible={otherVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
