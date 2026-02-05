"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, MessageSquare } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSending, setIsSending] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setIsSending(true)
    setTimeout(() => {
      setIsSending(false)
      setShowSuccess(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setShowSuccess(false), 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-sm font-mono uppercase tracking-[0.3em] mb-3"
            style={{ color: "var(--neon-cyan)" }}
          >
            // Communications
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold" style={{ color: "#FFFFFF" }}>
            Open Comms Channel
          </h3>
        </motion.div>

        <motion.div
          className="glass-strong rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(0,255,255,0.1)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Chat header */}
          <div
            className="flex items-center gap-3 px-6 py-4"
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              background: "rgba(0,0,0,0.3)",
            }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: "var(--neon-cyan)", boxShadow: "0 0 8px rgba(0,255,255,0.6)" }}
            />
            <MessageSquare size={16} style={{ color: "var(--neon-cyan)" }} />
            <span className="font-mono text-sm" style={{ color: "var(--neon-cyan)" }}>
              SECURE_CHANNEL_01
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-xs font-mono uppercase tracking-wider"
                style={{ color: "var(--neon-pink)" }}
              >
                [Callsign]
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name..."
                className="bg-transparent border-0 border-b-2 pb-2 text-sm font-mono outline-none transition-all duration-300 focus:pb-3 placeholder:opacity-30"
                style={{
                  borderColor: "var(--neon-cyan)",
                  color: "#FFFFFF",
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-xs font-mono uppercase tracking-wider"
                style={{ color: "var(--neon-pink)" }}
              >
                [Frequency]
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email..."
                className="bg-transparent border-0 border-b-2 pb-2 text-sm font-mono outline-none transition-all duration-300 focus:pb-3 placeholder:opacity-30"
                style={{
                  borderColor: "var(--neon-cyan)",
                  color: "#FFFFFF",
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-xs font-mono uppercase tracking-wider"
                style={{ color: "var(--neon-pink)" }}
              >
                [Transmission]
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message..."
                className="bg-transparent border-0 border-b-2 pb-2 text-sm font-mono outline-none transition-all duration-300 resize-none focus:pb-3 placeholder:opacity-30"
                style={{
                  borderColor: "var(--neon-cyan)",
                  color: "#FFFFFF",
                }}
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSending}
              className="relative flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider cursor-pointer overflow-hidden"
              style={{
                background: "var(--neon-cyan)",
                color: "#050505",
                boxShadow: "0 0 20px rgba(0,255,255,0.3)",
              }}
              whileHover={{
                boxShadow: "0 0 30px rgba(0,255,255,0.5), 0 0 60px rgba(0,255,255,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isSending ? (
                  <motion.div
                    key="sending"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: [-40, -200], opacity: [1, 0], rotate: -45 }}
                    transition={{ duration: 1 }}
                  >
                    <Send size={18} />
                  </motion.div>
                ) : showSuccess ? (
                  <motion.span
                    key="success"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="font-mono"
                  >
                    TRANSMISSION SENT
                  </motion.span>
                ) : (
                  <motion.span
                    key="default"
                    className="flex items-center gap-2"
                  >
                    <Send size={16} />
                    SEND TRANSMISSION
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
