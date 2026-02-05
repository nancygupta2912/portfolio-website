"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Volume2 } from "lucide-react"

function FrequencyBars({ isPlaying }) {
  const bars = [0.6, 0.9, 0.5, 0.8]

  return (
    <div className="flex items-end gap-0.5 h-4">
      {bars.map((maxHeight, i) => (
        <motion.div
          key={i}
          className="w-1 rounded-full"
          style={{ background: "var(--neon-cyan)" }}
          animate={
            isPlaying
              ? {
                  height: [`${maxHeight * 4}px`, `${maxHeight * 16}px`, `${maxHeight * 4}px`],
                }
              : { height: "3px" }
          }
          transition={
            isPlaying
              ? {
                  duration: 0.4 + i * 0.1,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 0.08,
                }
              : { duration: 0.3 }
          }
        />
      ))}
    </div>
  )
}

export default function AudioWidget() {
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50 glass-strong rounded-xl px-4 py-2.5 flex items-center gap-3 cursor-pointer"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.button
        onClick={() => setIsPlaying(!isPlaying)}
        className="p-1 cursor-pointer bg-transparent border-0"
        whileTap={{ scale: 0.9 }}
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
      >
        {isPlaying ? (
          <Pause size={14} style={{ color: "var(--neon-cyan)" }} />
        ) : (
          <Play size={14} style={{ color: "var(--neon-cyan)" }} />
        )}
      </motion.button>

      <FrequencyBars isPlaying={isPlaying} />

      <span
        className="text-[10px] font-mono uppercase tracking-wider hidden sm:inline"
        style={{ color: "rgba(255,255,255,0.5)" }}
      >
        Audio Log
      </span>
    </motion.div>
  )
}
