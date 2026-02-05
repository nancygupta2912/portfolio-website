"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const skills = [
  { name: "React", level: 99, category: "frontend" },
  { name: "Node.js", level: 95, category: "backend" },
  { name: "TypeScript", level: 94, category: "frontend" },
  { name: "Docker", level: 88, category: "devops" },
  { name: "AWS", level: 90, category: "devops" },
  { name: "Python", level: 85, category: "backend" },
  { name: "Next.js", level: 97, category: "frontend" },
  { name: "PostgreSQL", level: 91, category: "backend" },
  { name: "GraphQL", level: 87, category: "backend" },
  { name: "Redis", level: 83, category: "devops" },
  { name: "Figma", level: 80, category: "frontend" },
  { name: "K8s", level: 82, category: "devops" },
]

function Hexagon({ skill, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const isFrontend = skill.category === "frontend"
  const baseColor = isFrontend ? "var(--neon-pink)" : "var(--neon-cyan)"
  const glowColor = isFrontend
    ? "rgba(255,0,127,0.3)"
    : "rgba(0,255,255,0.3)"

  const breatheDelay = (index * 0.7) % 4

  return (
    <motion.div
      className="relative flex items-center justify-center cursor-pointer"
      style={{ width: 120, height: 138 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={
        isHovered
          ? { scale: 1.2 }
          : {
              scale: [1, 1.04, 1],
            }
      }
      transition={
        isHovered
          ? { type: "spring", stiffness: 300, damping: 15 }
          : {
              duration: 3,
              delay: breatheDelay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }
      }
    >
      <svg
        viewBox="0 0 120 138"
        className="absolute inset-0 w-full h-full"
        style={{ filter: isHovered ? `drop-shadow(0 0 15px ${glowColor})` : "none" }}
      >
        <polygon
          points="60,1 115,35 115,103 60,137 5,103 5,35"
          fill={isHovered ? baseColor : "rgba(255,255,255,0.03)"}
          stroke={baseColor}
          strokeWidth={isHovered ? 2 : 1}
          opacity={isHovered ? 1 : 0.6}
        />
      </svg>
      <div className="relative z-10 flex flex-col items-center gap-1">
        <span
          className="text-sm font-bold font-sans"
          style={{ color: isHovered ? "#050505" : baseColor }}
        >
          {skill.name}
        </span>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-1"
          >
            <div className="flex gap-px">
              {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-3 rounded-sm"
                  style={{
                    background:
                      i < Math.floor(skill.level / 10)
                        ? "#050505"
                        : "rgba(5,5,5,0.3)",
                  }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: i * 0.03 }}
                />
              ))}
            </div>
            <span
              className="text-[10px] font-mono font-bold"
              style={{ color: "#050505" }}
            >
              LVL {skill.level}
            </span>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] mb-3"
            style={{ color: "var(--neon-cyan)" }}>
            // Inventory System
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold"
            style={{ color: "#FFFFFF" }}>
            Weaponry & Magic
          </h3>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Hexagon skill={skill} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
