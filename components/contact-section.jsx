"use client";

import { useEffect, useRef, useState } from "react";

export default function ContactSection() {
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

  return (
    <section id="contact" ref={ref} className="py-24 px-6 md:py-32">
      <div
        className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <p className="mb-4 font-mono text-sm text-primary">04. What's Next?</p>

        <h2 className="text-balance text-4xl font-bold text-foreground md:text-5xl">
          Get In Touch
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
          I'm currently looking for new opportunities and my inbox is always
          open. Whether you have a question or just want to say hi, I'll try
          my best to get back to you!
        </p>

        <a
          href="mailto:hello@example.com"
          className="mt-10 inline-flex items-center gap-2 rounded border border-primary px-8 py-4 font-mono text-sm text-primary transition-all duration-200 hover:bg-primary/10"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
