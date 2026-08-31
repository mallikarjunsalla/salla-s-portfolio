import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MapPin, ArrowDown, Mail, Phone, Linkedin, ChevronRight } from 'lucide-react'

// Particle canvas for animated background
function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
    })

    const init = () => {
      resize()
      particles = Array.from({ length: 80 }, createParticle)
    }

    const drawConnections = () => {
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach(q => {
          const d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(0, 200, 230, ${0.12 * (1 - d / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 200, 230, ${p.opacity})`
        ctx.fill()
      })
      drawConnections()
      animationId = requestAnimationFrame(animate)
    }

    init()
    animate()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} id="particles-canvas" className="absolute inset-0 w-full h-full" />
}

const socialLinks = [
  {
    id: 'hero-linkedin',
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/mallikarjunsalla',
    color: 'hover:text-blue-400',
  },
  {
    id: 'hero-email',
    icon: Mail,
    label: 'Email',
    href: 'mailto:s.mallikarjun256@gmail.com',
    color: 'hover:text-accent-400',
  },
  {
    id: 'hero-phone',
    icon: Phone,
    label: 'Phone',
    href: 'tel:+91',
    color: 'hover:text-emerald-400',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden
                 bg-slate-950 dark:bg-slate-950 grid-bg"
    >
      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-5"
        >
          {/* Status badge */}
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                            border border-accent-500/30 bg-accent-500/5 text-accent-400 text-sm font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
              Open to Internships &amp; Opportunities
            </div>
          </motion.div>

          {/* Name */}
          <motion.div variants={fadeUp}>
            <h1 className="font-mono font-bold leading-tight">
              <span className="block text-4xl sm:text-6xl md:text-7xl text-white mb-1">
                Salla
              </span>
              <span className="block text-4xl sm:text-6xl md:text-7xl gradient-text">
                Mallikarjun
              </span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div variants={fadeUp}>
            <p className="font-mono text-sm sm:text-base text-accent-400/80 tracking-widest uppercase">
              Final-Year CSE Student{' '}
              <span className="text-slate-600 mx-2">//</span>
              Full-Stack Developer{' '}
              <span className="text-slate-600 mx-2">//</span>
              Cybersecurity Enthusiast
            </p>
          </motion.div>

          {/* Short intro */}
          <motion.div variants={fadeUp} className="max-w-2xl">
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              I build end-to-end web applications and enjoy turning ambiguous problems into
              structured, working systems. Comfortable across the stack —{' '}
              <span className="text-slate-300">from UI to database design.</span>
            </p>
          </motion.div>

          {/* Location */}
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-1.5 text-slate-500 text-sm">
              <MapPin size={14} className="text-accent-500" />
              Visakhapatnam, Andhra Pradesh
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <button
              id="hero-view-projects"
              onClick={() => scrollToSection('#projects')}
              className="btn-primary font-mono text-sm"
            >
              <ChevronRight size={16} />
              View Projects
            </button>
            <button
              id="hero-contact-me"
              onClick={() => scrollToSection('#contact')}
              className="btn-outline font-mono text-sm"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mt-2">
            {socialLinks.map(({ id, icon: Icon, label, href, color }) => (
              <a
                key={id}
                id={id}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className={`w-10 h-10 flex items-center justify-center rounded-xl
                            border border-slate-700 text-slate-500 ${color}
                            hover:border-current transition-all duration-200 hover:-translate-y-0.5`}
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                   text-slate-600 hover:text-accent-400 transition-colors duration-200 group"
        aria-label="Scroll to about"
      >
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  )
}
