"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Terminal } from "lucide-react"

const logMessages = [
  { type: "SYSTEM", text: "Visual Interface Loaded Successfully..." },
  { type: "MAGIC", text: "Mana recharged..." },
  { type: "LINK", text: "Connected to Backend Cluster..." },
  { type: "SYSTEM", text: "Portfolio v3.7.1 initialized..." },
  { type: "NET", text: "WebSocket handshake complete..." },
  { type: "MAGIC", text: "Spell components compiled..." },
  { type: "SYSTEM", text: "All systems nominal." },
  { type: "LINK", text: "Syncing with GitHub..." },
  { type: "NET", text: "API endpoints responding 200..." },
  { type: "MAGIC", text: "Dark energy levels stable..." },
  { type: "SYSTEM", text: "Ready for incoming transmissions..." },
  { type: "LINK", text: "Connected to Cloud Forge..." },
]

export default function FooterSection() {
  const [visibleLogs, setVisibleLogs] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % logMessages.length
        const timestamp = new Date().toLocaleTimeString("en-US", { hour12: false })
        const msg = logMessages[nextIndex]

        setVisibleLogs((logs) => {
          const newLogs = [
            ...logs,
            { ...msg, timestamp, id: Date.now() },
          ]
          return newLogs.slice(-8)
        })

        return nextIndex
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [visibleLogs])

  function getTypeColor(type) {
    switch (type) {
      case "SYSTEM":
        return "var(--neon-cyan)"
      case "MAGIC":
        return "var(--neon-pink)"
      case "LINK":
        return "var(--neon-cyan)"
      case "NET":
        return "var(--neon-cyan)"
      default:
        return "var(--neon-cyan)"
    }
  }

  return (
    <footer
      className="relative py-12 overflow-hidden"
      style={{ background: "rgba(5,5,5,0.95)" }}
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Console header */}
        <div className="flex items-center gap-2 mb-4">
          <Terminal size={14} style={{ color: "var(--neon-cyan)" }} />
          <span
            className="text-xs font-mono uppercase tracking-wider"
            style={{ color: "var(--neon-cyan)" }}
          >
            System Diagnostics
          </span>
          <div className="flex-1" />
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--neon-pink)" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--neon-orange)" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--neon-cyan)" }} />
          </div>
        </div>

        {/* Console */}
        <div
          ref={scrollRef}
          className="rounded-lg p-4 h-48 overflow-y-auto font-mono text-xs"
          style={{
            background: "rgba(0,0,0,0.6)",
            border: "1px solid rgba(0,255,255,0.1)",
            scrollbarWidth: "none",
          }}
        >
          {visibleLogs.map((log) => (
            <motion.div
              key={log.id}
              className="flex gap-2 py-0.5"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span style={{ color: "rgba(255,255,255,0.3)" }}>
                {log.timestamp}
              </span>
              <span style={{ color: getTypeColor(log.type) }}>
                [{log.type}]
              </span>
              <span style={{ color: "var(--neon-cyan)" }}>{log.text}</span>
            </motion.div>
          ))}
          <motion.span
            className="inline-block"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            style={{ color: "var(--neon-cyan)" }}
          >
            _
          </motion.span>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-between mt-8 pt-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>
            {"<Priyanka.Dev />"} {new Date().getFullYear()}
          </span>
          <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>
            Built with Magic & Code
          </span>
        </div>
      </div>
    </footer>
  )
}
