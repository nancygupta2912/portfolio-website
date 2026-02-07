"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AboutSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const technologies = [
    "C++",
    "React",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Python",
    "MySQL",
  ];

  return (
    <section id="about" ref={ref} className="py-24 px-6 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div
          className={`transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="mb-12 flex items-center gap-4 text-2xl font-bold text-foreground md:text-3xl">
            <span className="font-mono text-lg text-primary md:text-xl">
              01.
            </span>
            About Me
            <span className="h-px flex-1 bg-border" />
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
          <div
            className={`transition-all duration-700 delay-200 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Hello! I’m a passionate developer currently pursuing my B.Tech from Dr. A.P.J. Abdul Kalam Technical University. I love turning ideas into visually appealing, responsive, and user-friendly web experiences.
              </p>
              <p>
                I love transforming ideas into clean, intuitive interfaces while exploring new technologies and sharpening my problem-solving skills through data structures and hands-on development. I’m always eager to learn, collaborate, and build impactful products—one line of code at a time.
                
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
            </div>

            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-2 font-mono text-xs text-muted-foreground"
                >
                  <span className="text-primary">{">"}</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`transition-all duration-700 delay-400 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="group relative mx-auto w-full max-w-[280px]">
              {/* Accent border offset */}
              <div className="absolute -right-4 -bottom-4 h-full w-full rounded border-2 border-primary transition-all duration-300 group-hover:-right-3 group-hover:-bottom-3" />
              {/* Overlay */}
              <div className="absolute inset-0 z-10 rounded bg-primary/20 transition-colors duration-300 group-hover:bg-transparent" />
              {/* Image */}
              <div className="relative overflow-hidden rounded">
                <Image
                  src="/avatar.jpeg"
                  alt="Profile photo"
                  width={280}
                  height={350}
                  className="rounded object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
