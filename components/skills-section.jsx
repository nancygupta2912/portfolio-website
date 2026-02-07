"use client";

import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React ", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML / CSS", level: 95 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 75 },
      { name: "PostgreSQL", level: 80 },
      { name: "REST APIs", level: 88 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    title: "Tools & Other",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Vercel", level: 70 },
      { name: "Figma", level: 78 },
      { name: "AWS (EC2, S3, IAM)", level: 75 },
      { name: "VS Code", level: 80 },
    ],
  },
];

function SkillBar({ name, level, visible, delay }) {
  return (
    <div className="group">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm text-foreground">{name}</span>
        <span
          className={`font-mono text-xs text-primary transition-all duration-500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: `${delay + 400}ms` }}
        >
          {level}%
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary/80 transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-24 px-6 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div
          className={`transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="mb-12 flex items-center gap-4 text-2xl font-bold text-foreground md:text-3xl">
            <span className="font-mono text-lg text-primary md:text-xl">
              02.
            </span>
            Skills & Expertise
            <span className="h-px flex-1 bg-border" />
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className={`rounded-lg border border-border bg-card p-6 transition-all duration-700 hover:border-primary/30 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + catIdx * 150}ms` }}
            >
              <h3 className="mb-6 font-mono text-sm font-semibold uppercase tracking-wider text-primary">
                {category.title}
              </h3>
              <div className="flex flex-col gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    visible={visible}
                    delay={300 + catIdx * 150 + skillIdx * 100}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
