"use client"

import { motion } from "framer-motion"

const stats = [
  { label: "Frontend", value: 95 },
  { label: "Backend", value: 92 },
  { label: "DevOps", value: 85 },
  { label: "UI/UX", value: 88 },
  { label: "Speed", value: 90 },
]

function RadarChart() {
  const cx = 150
  const cy = 150
  const radius = 110
  const levels = 5
  const sides = stats.length
  const angleStep = (Math.PI * 2) / sides
  const startAngle = -Math.PI / 2

  function getPoint(angle, r) {
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    }
  }

  // Grid lines
  const gridPaths = Array.from({ length: levels }).map((_, level) => {
    const r = (radius / levels) * (level + 1)
    const points = Array.from({ length: sides })
      .map((_, i) => {
        const p = getPoint(startAngle + i * angleStep, r)
        return `${p.x},${p.y}`
      })
      .join(" ")
    return points
  })

  // Data points
  const dataPoints = stats
    .map((stat, i) => {
      const r = (stat.value / 100) * radius
      const p = getPoint(startAngle + i * angleStep, r)
      return `${p.x},${p.y}`
    })
    .join(" ")

  // Axis lines
  const axes = stats.map((_, i) => {
    const p = getPoint(startAngle + i * angleStep, radius)
    return { x1: cx, y1: cy, x2: p.x, y2: p.y }
  })

  // Labels
  const labels = stats.map((stat, i) => {
    const p = getPoint(startAngle + i * angleStep, radius + 22)
    return { ...stat, x: p.x, y: p.y }
  })

  return (
    <motion.svg
      viewBox="0 0 300 300"
      className="w-full max-w-xs mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Grid */}
      {gridPaths.map((points, i) => (
        <polygon
          key={i}
          points={points}
          fill="none"
          stroke="rgba(0,255,255,0.1)"
          strokeWidth={0.5}
        />
      ))}

      {/* Axes */}
      {axes.map((axis, i) => (
        <line
          key={i}
          x1={axis.x1}
          y1={axis.y1}
          x2={axis.x2}
          y2={axis.y2}
          stroke="rgba(0,255,255,0.1)"
          strokeWidth={0.5}
        />
      ))}

      {/* Data shape */}
      <motion.polygon
        points={dataPoints}
        fill="rgba(255,0,127,0.15)"
        stroke="var(--neon-pink)"
        strokeWidth={2}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ filter: "drop-shadow(0 0 8px rgba(255,0,127,0.5))" }}
      />

      {/* Data points */}
      {stats.map((stat, i) => {
        const r = (stat.value / 100) * radius
        const p = getPoint(startAngle + i * angleStep, r)
        return (
          <motion.circle
            key={stat.label}
            cx={p.x}
            cy={p.y}
            r={3}
            fill="var(--neon-pink)"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + i * 0.1 }}
            style={{ filter: "drop-shadow(0 0 5px rgba(255,0,127,0.8))" }}
          />
        )
      })}

      {/* Labels */}
      {labels.map((label) => (
        <text
          key={label.label}
          x={label.x}
          y={label.y}
          textAnchor="middle"
          dominantBaseline="central"
          fill="var(--neon-cyan)"
          fontSize={10}
          fontFamily="monospace"
        >
          {label.label}
        </text>
      ))}
    </motion.svg>
  )
}

function ChibiAvatar() {
  return (
    <motion.div
      className="absolute -top-8 right-4 md:right-8"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    >
      <div className="relative w-16 h-16">
        {/* Simple chibi figure using CSS */}
        <div
          className="w-12 h-12 rounded-full overflow-hidden mx-auto"
          style={{
            border: "2px solid var(--neon-pink)",
            boxShadow: "0 0 10px rgba(255,0,127,0.4)",
          }}
        >
          <img
            src="/avatar.jpg"
            alt=""
            className="w-full h-full object-cover"
            crossOrigin="anonymous"
          />
        </div>
        {/* Legs animation */}
        <motion.div
          className="flex justify-center gap-1 -mt-1"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-1.5 h-4 rounded-full" style={{ background: "var(--neon-pink)" }} />
          <div className="w-1.5 h-4 rounded-full" style={{ background: "var(--neon-pink)" }} />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function AboutSection() {
  const characterInfo = [
    { key: "Class", value: "Technomancer (Full Stack Dev)" },
    { key: "Origin", value: "Earth / India" },
    { key: "Level", value: "Senior Architect" },
    { key: "XP", value: "6+ Years of Battle" },
    { key: "Special", value: "Turning Coffee into Clean Code" },
  ]

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] mb-3"
            style={{ color: "var(--neon-pink)" }}>
            // Character Profile
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold"
            style={{ color: "#FFFFFF" }}>
            Character Stats
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <RadarChart />
          </motion.div>

          {/* Character Sheet */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ChibiAvatar />
            <div
              className="glass-strong rounded-2xl p-8"
              style={{ border: "1px solid rgba(255,0,127,0.15)" }}
            >
              <h4
                className="text-lg font-mono mb-6"
                style={{ color: "var(--neon-cyan)" }}
              >
                {">"} CHARACTER_SHEET.log
              </h4>

              <div className="flex flex-col gap-4">
                {characterInfo.map((info, i) => (
                  <motion.div
                    key={info.key}
                    className="flex flex-col gap-1"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span
                      className="text-xs font-mono uppercase tracking-wider"
                      style={{ color: "var(--neon-pink)" }}
                    >
                      [{info.key}]
                    </span>
                    <span
                      className="text-base"
                      style={{ color: "rgba(255,255,255,0.85)" }}
                    >
                      {info.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* XP Bar */}
              <div className="mt-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-mono" style={{ color: "var(--neon-cyan)" }}>
                    EXPERIENCE
                  </span>
                  <span className="text-xs font-mono" style={{ color: "var(--neon-pink)" }}>
                    87,420 / 100,000 XP
                  </span>
                </div>
                <div
                  className="h-2 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, var(--neon-pink), var(--neon-cyan))",
                      boxShadow: "0 0 10px rgba(255,0,127,0.5)",
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "87%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
