import { motion } from 'framer-motion'

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

const skillGroups = [
  {
    id: 'languages',
    category: 'Languages',
    icon: '⌨️',
    accent: 'from-accent-500/20 to-accent-700/5',
    border: 'border-accent-500/30',
    titleColor: 'text-accent-400',
    skills: ['C', 'C++', 'Python', 'Java'],
  },
  {
    id: 'web-database',
    category: 'Web & Database',
    icon: '🌐',
    accent: 'from-blue-500/20 to-blue-700/5',
    border: 'border-blue-500/30',
    titleColor: 'text-blue-400',
    skills: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'PostgreSQL'],
  },
  {
    id: 'ai-nlp',
    category: 'AI / NLP',
    icon: '🧠',
    accent: 'from-violet-500/20 to-violet-700/5',
    border: 'border-violet-500/30',
    titleColor: 'text-violet-400',
    skills: ['spaCy', 'NLTK', 'Regular Expressions'],
  },
  {
    id: 'networking-security',
    category: 'Networking & Security',
    icon: '🔐',
    accent: 'from-emerald-500/20 to-emerald-700/5',
    border: 'border-emerald-500/30',
    titleColor: 'text-emerald-400',
    skills: ['Cisco Packet Tracer', 'Network Fundamentals', 'Cybersecurity Essentials'],
  },
  {
    id: 'tools-platforms',
    category: 'Tools & Platforms',
    icon: '🛠️',
    accent: 'from-amber-500/20 to-amber-700/5',
    border: 'border-amber-500/30',
    titleColor: 'text-amber-400',
    skills: ['VS Code', 'Supabase', 'Ethereum', 'Git'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-accent-400 text-sm">02.</span>
            <h2 className="section-title mb-0">Skills</h2>
          </div>
          <div className="h-px w-24 bg-gradient-to-r from-accent-500 to-transparent mb-10 ml-10" />
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <SectionReveal key={group.id} delay={gi * 0.08}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className={`card bg-gradient-to-br ${group.accent} border ${group.border} h-full`}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl" role="img" aria-label={group.category}>{group.icon}</span>
                  <div>
                    <h3 className={`font-mono font-semibold text-base ${group.titleColor}`}>
                      {group.category}
                    </h3>
                    <p className="text-slate-500 text-xs font-mono">{group.skills.length} skills</p>
                  </div>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.08 + si * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="skill-tag"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        {/* Proficiency note */}
        <SectionReveal delay={0.4}>
          <p className="mt-8 text-center text-slate-600 text-sm font-mono">
            // constantly learning · always building
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
