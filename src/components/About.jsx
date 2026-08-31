import { motion } from 'framer-motion'
import { GraduationCap, Code2, Shield, Zap } from 'lucide-react'

const SectionReveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, ease: 'easeOut', delay }}
  >
    {children}
  </motion.div>
)

const highlights = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'B.Tech CSE',
    sub: 'CGPA 7.96 · 2023–2027',
    color: 'text-accent-400',
    bg: 'bg-accent-500/10',
    border: 'border-accent-500/20',
  },
  {
    icon: Code2,
    label: 'Focus',
    value: 'Full-Stack Dev',
    sub: 'React · Python · SQL',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
  },
  {
    icon: Shield,
    label: 'Specialisation',
    value: 'Cybersecurity',
    sub: 'IoT & Blockchain Track',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  {
    icon: Zap,
    label: 'Achievement',
    value: '24 hr Hackathon',
    sub: 'Built BuildOn end-to-end',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-900/30">
      <div className="section-container">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-accent-400 text-sm">01.</span>
            <h2 className="section-title mb-0">About Me</h2>
          </div>
          <div className="h-px w-24 bg-gradient-to-r from-accent-500 to-transparent mb-10 ml-10" />
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text content */}
          <div className="space-y-5">
            <SectionReveal delay={0.1}>
              <p className="text-slate-300 text-lg leading-relaxed">
                I'm a final-year{' '}
                <span className="text-accent-400 font-semibold">B.Tech CSE</span> student
                specialising in{' '}
                <span className="text-accent-400 font-semibold">
                  Cybersecurity, IoT &amp; Blockchain
                </span>{' '}
                at{' '}
                <span className="text-white">
                  Maharaj Vijayaram Gajapathi Raj College of Engineering
                </span>
                , Vizianagaram, graduating in 2027 with a CGPA of{' '}
                <span className="text-accent-400 font-semibold">7.96</span>.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <p className="text-slate-400 leading-relaxed">
                I'm comfortable across the web stack — from crafting responsive UIs with
                HTML/CSS/JavaScript to building backend logic and integrating SQL databases
                like PostgreSQL and MySQL. I enjoy the full picture of a problem, not just
                a single layer.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="text-slate-400 leading-relaxed">
                My most intense build: I delivered{' '}
                <span className="text-white font-medium">BuildOn</span> end-to-end in a{' '}
                <span className="text-amber-400 font-medium">24-hour hackathon</span> — a
                full knowledge-sharing platform with a similarity-matching system and
                Supabase/PostgreSQL backend.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.25}>
              <p className="text-slate-400 leading-relaxed">
                Coursework in cybersecurity and networking has sharpened my approach to
                building reliable, secure systems — I don't just make things work, I think
                about why they could fail.
              </p>
            </SectionReveal>

            {/* Terminal-style fun fact */}
            <SectionReveal delay={0.3}>
              <div className="mt-6 rounded-xl border border-slate-700 bg-slate-950/60 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-700/60 bg-slate-900/60">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-2 font-mono text-xs text-slate-500">~/about</span>
                </div>
                <div className="p-4 font-mono text-sm space-y-1">
                  <div className="text-slate-500">
                    <span className="text-accent-400">❯</span> whoami
                  </div>
                  <div className="text-slate-300">salla_mallikarjun</div>
                  <div className="text-slate-500 mt-2">
                    <span className="text-accent-400">❯</span> cat interests.txt
                  </div>
                  <div className="text-slate-300">
                    [Full-Stack Dev, Cybersecurity, Problem Solving, Open Source]
                  </div>
                  <div className="text-slate-500 mt-2">
                    <span className="text-accent-400">❯</span> echo $LOCATION
                  </div>
                  <div className="text-slate-300">Visakhapatnam, Andhra Pradesh 🇮🇳</div>
                  <div className="flex items-center gap-1 text-slate-500 mt-2">
                    <span className="text-accent-400">❯</span>
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, value, sub, color, bg, border }, i) => (
              <SectionReveal key={label} delay={0.1 + i * 0.08}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className={`card group cursor-default`}
                >
                  <div className={`w-10 h-10 rounded-xl ${bg} border ${border} flex items-center justify-center mb-3`}>
                    <Icon size={20} className={color} />
                  </div>
                  <p className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-1">{label}</p>
                  <p className={`font-mono font-bold text-lg ${color} mb-0.5`}>{value}</p>
                  <p className="text-slate-500 text-sm">{sub}</p>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
