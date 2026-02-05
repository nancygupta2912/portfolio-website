"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Download, Rocket } from "lucide-react"

function DataStars() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")

    let animationId
    let stars = []

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function createStars() {
      stars = []
      const count = Math.floor((canvas.width * canvas.height) / 8000)
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.3,
          speed: Math.random() * 0.3 + 0.05,
          opacity: Math.random() * 0.8 + 0.2,
          pulse: Math.random() * Math.PI * 2,
          color: Math.random() > 0.5 ? "0, 255, 255" : "255, 0, 127",
        })
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const star of stars) {
        star.y -= star.speed
        star.pulse += 0.02
        if (star.y < -5) {
          star.y = canvas.height + 5
          star.x = Math.random() * canvas.width
        }
        const opacity = star.opacity * (0.5 + 0.5 * Math.sin(star.pulse))
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${star.color}, ${opacity})`
        ctx.fill()
      }
      animationId = requestAnimationFrame(animate)
    }

    resize()
    createStars()
    animate()

    window.addEventListener("resize", () => {
      resize()
      createStars()
    })

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

function HUDOverlay() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false }))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="absolute top-20 right-6 z-10 font-mono text-xs"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <div className="glass rounded-lg p-3 flex flex-col gap-1"
        style={{ color: "var(--neon-cyan)" }}>
        <span>FPS: 144</span>
        <span>MEM: 4096MB</span>
        <span>SYS: {time}</span>
        <span className="text-neon-pink">STATUS: ONLINE</span>
      </div>
    </motion.div>
  )
}

function HolographicGate() {
  const codeRingTexts = useMemo(() => [
    "const build = () => dream.deploy()",
    "async function createMagic() { return await reality.bend() }",
    "npm run universe --mode=cyberpunk",
  ], [])

  return (
    <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80">
      {/* Outer rotating ring */}
      <div
        className="absolute inset-0 rounded-full animate-spin-slow"
        style={{
          border: "1px solid var(--neon-cyan)",
          boxShadow: "0 0 20px rgba(0,255,255,0.2), inset 0 0 20px rgba(0,255,255,0.1)",
        }}
      />
      {/* Middle rotating ring */}
      <div
        className="absolute rounded-full animate-spin-reverse"
        style={{
          width: "90%",
          height: "90%",
          border: "1px dashed var(--neon-pink)",
          boxShadow: "0 0 15px rgba(255,0,127,0.2)",
        }}
      />
      {/* Code ring text */}
      {codeRingTexts.map((text, i) => (
        <div
          key={i}
          className="absolute font-mono text-[8px] md:text-[9px] opacity-30 whitespace-nowrap"
          style={{
            color: "var(--neon-cyan)",
            width: `${85 - i * 10}%`,
            height: `${85 - i * 10}%`,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: `${i % 2 === 0 ? "spin-slow" : "spin-reverse"} ${18 + i * 5}s linear infinite`,
          }}
        >
          {text}
        </div>
      ))}
      {/* Inner glow circle */}
      <div
        className="absolute rounded-full"
        style={{
          width: "75%",
          height: "75%",
          background: "radial-gradient(circle, rgba(0,255,255,0.05) 0%, rgba(255,0,127,0.05) 50%, transparent 70%)",
          boxShadow: "inset 0 0 30px rgba(0,255,255,0.1)",
        }}
      />
      {/* Avatar */}
      <motion.div
        className="relative rounded-full overflow-hidden z-10"
        style={{
          width: "65%",
          height: "65%",
          border: "2px solid var(--neon-pink)",
          boxShadow: "0 0 25px rgba(255,0,127,0.4), inset 0 0 15px rgba(255,0,127,0.2)",
        }}
        animate={{
          boxShadow: [
            "0 0 25px rgba(255,0,127,0.4), inset 0 0 15px rgba(255,0,127,0.2)",
            "0 0 35px rgba(0,255,255,0.4), inset 0 0 20px rgba(0,255,255,0.2)",
            "0 0 25px rgba(255,0,127,0.4), inset 0 0 15px rgba(255,0,127,0.2)",
          ],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <img
          src="/avatar.jpg"
          alt="Priyanka - Full Stack Developer avatar in cyberpunk style"
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
        />
      </motion.div>
    </div>
  )
}

export default function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid"
    >
      <DataStars />
      <HUDOverlay />

      <motion.div
        className="relative z-10 flex flex-col items-center gap-8 px-4 text-center"
        style={{ y, opacity }}
      >
        <HolographicGate />

        <motion.div
          className="flex flex-col items-center gap-4 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.p
            className="font-mono text-sm tracking-widest uppercase"
            style={{ color: "var(--neon-cyan)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            System Online. Welcome, Traveler.
          </motion.p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight"
            style={{ color: "#FFFFFF" }}>
            I am{" "}
            <span className="text-neon-pink text-glow-pink">Priyanka</span>
          </h1>

          <p className="text-lg md:text-xl font-light"
            style={{ color: "rgba(255,255,255,0.7)" }}>
            Full Stack Architect & Digital Creator
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider cursor-pointer"
            style={{
              background: "var(--neon-pink)",
              color: "#FFFFFF",
              boxShadow: "0 0 20px rgba(255,0,127,0.4)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255,0,127,0.6), 0 0 60px rgba(255,0,127,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={16} />
            Initialize Mission
          </motion.a>

          <motion.a
            href="#projects"
            className="flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider cursor-pointer"
            style={{
              background: "transparent",
              color: "var(--neon-cyan)",
              border: "1px solid var(--neon-cyan)",
              boxShadow: "0 0 15px rgba(0,255,255,0.2)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(0,255,255,0.5), 0 0 50px rgba(0,255,255,0.2)",
              background: "rgba(0,255,255,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Rocket size={16} />
            Explore Universe
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #050505, transparent)",
        }}
      />
    </section>
  )
}
