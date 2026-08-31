import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, FileText } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section tracker via IntersectionObserver
  useEffect(() => {
    const sections = navLinks.map(l => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection('#' + entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/60 shadow-lg shadow-slate-950/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <a
          href="#"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="flex items-center gap-2 group"
          aria-label="SM - Back to top"
        >
          <div className="w-9 h-9 bg-accent-500 rounded-lg flex items-center justify-center
                          group-hover:bg-accent-400 transition-colors duration-200 shadow-lg shadow-accent-500/30">
            <span className="font-mono font-bold text-slate-950 text-sm leading-none">SM</span>
          </div>
          <span className="font-mono font-bold text-white hidden sm:block text-sm tracking-wide">
            salla<span className="text-accent-400">.dev</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                className={`nav-link py-1 ${activeSection === link.href ? 'text-accent-400 after:w-full' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-700
                       hover:border-accent-500/60 hover:bg-accent-500/10 text-slate-400 hover:text-accent-400
                       transition-all duration-200"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isDark ? 'dark' : 'light'}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </motion.div>
            </AnimatePresence>
          </button>

          {/* Resume button */}
          <a
            id="resume-btn"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-semibold
                       bg-accent-500/10 text-accent-400 border border-accent-500/30
                       hover:bg-accent-500 hover:text-slate-950 hover:border-accent-500
                       transition-all duration-200"
          >
            <FileText size={14} />
            Resume
          </a>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(v => !v)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-slate-700
                       hover:border-accent-500/60 text-slate-400 hover:text-accent-400 transition-all duration-200"
            aria-label="Toggle mobile menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={mobileOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/60"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200
                    ${activeSection === link.href
                      ? 'bg-accent-500/10 text-accent-400'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center gap-2 px-4 py-3 rounded-xl font-mono text-sm font-semibold
                           bg-accent-500/10 text-accent-400 border border-accent-500/20"
              >
                <FileText size={14} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
