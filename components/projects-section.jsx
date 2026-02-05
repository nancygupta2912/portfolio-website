"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { ExternalLink, Server, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "NeoShop",
    katakana: "ネオショップ",
    description: "A next-gen e-commerce platform with AI-driven product recommendations and real-time inventory management.",
    tags: ["React", "Node.js", "PostgreSQL"],
    server: "Node.js",
    status: "Deployed",
    color: "var(--neon-pink)",
  },
  {
    title: "CloudForge",
    katakana: "クラウドフォージ",
    description: "Infrastructure-as-code toolkit enabling one-click deployment of microservices across multi-cloud environments.",
    tags: ["Go", "Docker", "AWS"],
    server: "Go / Docker",
    status: "Deployed",
    color: "var(--neon-cyan)",
  },
  {
    title: "SynapseAI",
    katakana: "シナプスAI",
    description: "Real-time collaborative AI workspace that enables teams to co-create with machine learning models.",
    tags: ["Python", "React", "TensorFlow"],
    server: "Python / FastAPI",
    status: "Beta",
    color: "var(--neon-pink)",
  },
  {
    title: "VaultNet",
    katakana: "ヴォルトネット",
    description: "Zero-knowledge encrypted communications platform with distributed consensus for enterprise security.",
    tags: ["Rust", "React", "WebRTC"],
    server: "Rust / Actix",
    status: "Deployed",
    color: "var(--neon-cyan)",
  },
]

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const [showTerminal, setShowTerminal] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [8, -8]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  })

  function handleMouseMove(e) {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative flex-shrink-0 w-80 md:w-96"
      style={{ perspective: 1000, rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
    >
      <div
        className="relative glass-strong rounded-2xl overflow-hidden h-full"
        style={{ border: `1px solid ${project.color}20` }}
      >
        {/* Card header */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p
                className="text-2xl font-bold mb-0 leading-tight"
                style={{ color: project.color }}
              >
                {project.katakana}
              </p>
              <h4 className="text-xl font-bold" style={{ color: "#FFFFFF" }}>
                {project.title}
              </h4>
            </div>
            <motion.button
              className="p-2 rounded-lg glass cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`View ${project.title} project`}
            >
              <ExternalLink size={16} style={{ color: project.color }} />
            </motion.button>
          </div>

          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-mono font-bold"
                style={{
                  background: `${project.color}15`,
                  color: project.color,
                  border: `1px solid ${project.color}30`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Data Terminal */}
        <motion.button
          className="w-full px-6 py-3 flex items-center justify-between cursor-pointer"
          style={{
            background: "rgba(0,0,0,0.4)",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
          onClick={() => setShowTerminal(!showTerminal)}
          whileHover={{ background: "rgba(0,0,0,0.6)" }}
        >
          <span className="flex items-center gap-2 font-mono text-xs"
            style={{ color: "var(--neon-cyan)" }}>
            <Server size={12} />
            Data Terminal
          </span>
          <span className="text-xs font-mono"
            style={{ color: "rgba(255,255,255,0.4)" }}>
            {showTerminal ? "[-]" : "[+]"}
          </span>
        </motion.button>

        {showTerminal && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 py-3 font-mono text-xs"
            style={{ background: "rgba(0,0,0,0.6)" }}
          >
            <p style={{ color: "var(--neon-cyan)" }}>
              Server: {project.server}
            </p>
            <p style={{ color: project.status === "Deployed" ? "var(--neon-pink)" : "var(--neon-orange)" }}>
              Status: {project.status}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const scrollRef = useRef(null)

  function scroll(direction) {
    if (!scrollRef.current) return
    const amount = 420
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] mb-3"
            style={{ color: "var(--neon-pink)" }}>
            // Mission Logs
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold"
            style={{ color: "#FFFFFF" }}>
            Completed Operations
          </h3>
        </motion.div>

        {/* Carousel controls */}
        <div className="flex justify-end gap-2 mb-6 pr-4">
          <motion.button
            onClick={() => scroll("left")}
            className="p-2 rounded-lg glass cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll projects left"
          >
            <ChevronLeft size={20} style={{ color: "var(--neon-cyan)" }} />
          </motion.button>
          <motion.button
            onClick={() => scroll("right")}
            className="p-2 rounded-lg glass cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll projects right"
          >
            <ChevronRight size={20} style={{ color: "var(--neon-cyan)" }} />
          </motion.button>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 px-4 snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {projects.map((project, index) => (
            <div key={project.title} className="snap-center">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
