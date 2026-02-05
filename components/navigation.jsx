"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Cpu, FolderKanban, Mail, Sun, Moon } from "lucide-react"
import { useTheme } from "./theme-context"

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: Cpu, label: "Skills", href: "#skills" },
  { icon: FolderKanban, label: "Projects", href: "#projects" },
  { icon: Mail, label: "Contact", href: "#contact" },
]

function DockIcon({ icon: Icon, label, href }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href={href}
      className="relative flex flex-col items-center justify-center"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.4, y: -8 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: -8 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute -top-8 text-xs font-mono text-neon-pink whitespace-nowrap"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
      <div
        className="p-3 rounded-xl transition-all duration-300"
        style={{
          boxShadow: isHovered
            ? "0 0 20px var(--neon-pink), 0 0 40px rgba(255,0,127,0.3)"
            : "none",
          background: isHovered ? "rgba(255,0,127,0.15)" : "transparent",
        }}
      >
        <Icon
          size={22}
          style={{ color: isHovered ? "var(--neon-pink)" : "rgba(255,255,255,0.6)" }}
        />
      </div>
    </motion.a>
  )
}

function BrandLogo() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="fixed top-6 left-6 z-50"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.span
        className="text-xl font-bold font-mono text-neon-cyan cursor-default select-none"
        animate={
          isHovered
            ? {
                x: [0, -2, 2, -2, 0],
                textShadow: [
                  "0 0 10px var(--neon-cyan)",
                  "2px 0 var(--neon-pink), -2px 0 var(--neon-cyan)",
                  "-2px 0 var(--neon-pink), 2px 0 var(--neon-cyan)",
                  "0 0 10px var(--neon-cyan)",
                ],
              }
            : {}
        }
        transition={{ duration: 0.3, repeat: isHovered ? Number.POSITIVE_INFINITY : 0, repeatType: "loop" }}
      >
        {"<Priyanka.Dev />"}
      </motion.span>
    </motion.div>
  )
}

function ThemeToggle() {
  const { isStealth, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full glass cursor-pointer"
      whileHover={{ scale: 1.1, rotate: 180 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      style={{
        boxShadow: `0 0 15px ${isStealth ? "rgba(255,255,255,0.3)" : "rgba(255,87,34,0.5)"}`,
      }}
      aria-label={isStealth ? "Switch to Cyberpunk mode" : "Switch to Stealth mode"}
    >
      <motion.div
        animate={{ rotate: isStealth ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {isStealth ? (
          <Sun size={18} style={{ color: "#FFFFFF" }} />
        ) : (
          <Moon size={18} style={{ color: "var(--neon-orange)" }} />
        )}
      </motion.div>
    </motion.button>
  )
}

export default function Navigation() {
  return (
    <>
      <BrandLogo />
      <ThemeToggle />
      <motion.nav
        className="fixed bottom-6 left-1/2 z-50 glass-strong rounded-2xl px-6 py-3"
        initial={{ y: 100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
      >
        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <DockIcon key={item.label} {...item} />
          ))}
        </div>
      </motion.nav>
    </>
  )
}
