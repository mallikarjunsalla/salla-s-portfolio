import { motion } from 'framer-motion'
import { Briefcase, Calendar, ExternalLink } from 'lucide-react'

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

const experiences = [
  {
    id: 'eduskills-python',
    role: 'Python Full Stack Virtual Internship',
    company: 'EduSkills',
    companyUrl: '#',
    period: 'Completed',
    status: 'completed',
    description:
      'Completed a structured virtual internship covering full-stack Python development: front-end basics, backend logic, and database integration. Gained hands-on experience building complete web features from UI to server-side logic.',
    skills: ['Python', 'Django/Flask', 'HTML/CSS', 'Database Integration'],
    color: 'border-accent-500',
    dotColor: 'bg-accent-500',
    dotGlow: 'shadow-accent-500/50',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
  {
    id: 'cisco-cybersecurity',
    role: 'Cisco Cybersecurity Essentials Virtual Internship',
    company: 'Cisco / EduSkills',
    companyUrl: '#',
    period: 'In Progress',
    status: 'inprogress',
    description:
      'Hands-on labs in cybersecurity fundamentals, network defense, and threat analysis. Covering topics including firewall configurations, intrusion detection, and network protocol security. Capstone project currently in progress.',
    skills: ['Network Defense', 'Threat Analysis', 'Firewall Configuration', 'IDS/IPS'],
    color: 'border-amber-500',
    dotColor: 'bg-amber-500',
    dotGlow: 'shadow-amber-500/50',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-accent-400 text-sm">04.</span>
            <h2 className="section-title mb-0">Experience</h2>
          </div>
          <div className="h-px w-24 bg-gradient-to-r from-accent-500 to-transparent mb-10 ml-10" />
        </SectionReveal>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/60 via-slate-700 to-transparent timeline-line" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <SectionReveal key={exp.id} delay={i * 0.15}>
                <div className="relative flex gap-8 pl-14">
                  {/* Dot */}
                  <div className={`absolute left-3 top-1 w-5 h-5 rounded-full ${exp.dotColor}
                                   border-4 border-slate-950 shadow-lg ${exp.dotGlow} z-10`} />

                  {/* Card */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className={`card flex-1 border-l-2 ${exp.color} hover:bg-slate-800/60`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-mono font-bold text-lg text-white mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-2">
                          <Briefcase size={14} className="text-slate-500" />
                          <a
                            href={exp.companyUrl}
                            className="text-accent-400 hover:text-accent-300 text-sm font-medium transition-colors"
                          >
                            {exp.company}
                          </a>
                          <ExternalLink size={11} className="text-slate-600" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={13} className="text-slate-500" />
                        <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${exp.badgeColor}`}>
                          {exp.status === 'inprogress' && (
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse mr-1.5" />
                          )}
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map(skill => (
                        <span key={skill} className="badge text-xs">{skill}</span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
