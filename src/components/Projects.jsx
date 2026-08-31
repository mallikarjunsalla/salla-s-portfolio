import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

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

const projects = [
  {
    id: 'buildon',
    title: 'BuildOn',
    tag: 'Hackathon Project',
    tagColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    tagDot: 'bg-amber-400',
    accentGlow: 'shadow-accent-500/10',
    headerBg: 'from-accent-500/10 to-transparent',
    description:
      'A knowledge-sharing platform to store and connect student project insights. Implemented a knowledge graph and similarity-matching system to improve project discovery. Enables structured exploration of problem statements, solutions, and failures to enhance learning outcomes.',
    subtext: 'Built end-to-end in 24 hours during a hackathon.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Supabase', 'PostgreSQL'],
    techColors: {
      HTML: 'text-orange-400 border-orange-500/20 bg-orange-500/5',
      CSS: 'text-blue-400 border-blue-500/20 bg-blue-500/5',
      JavaScript: 'text-yellow-400 border-yellow-500/20 bg-yellow-500/5',
      Supabase: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5',
      PostgreSQL: 'text-sky-400 border-sky-500/20 bg-sky-500/5',
    },
    github: '#',
    demo: '#',
    features: ['Knowledge Graph', 'Similarity Matching', 'Project Discovery', 'Supabase Backend'],
  },
  {
    id: 'ai-redaction',
    title: 'AI-Based Data Redaction Tool',
    tag: 'AI / NLP',
    tagColor: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    tagDot: 'bg-violet-400',
    accentGlow: 'shadow-violet-500/10',
    headerBg: 'from-violet-500/10 to-transparent',
    description:
      'An AI-powered pipeline combining Named Entity Recognition with rule-based pattern matching to detect and structure sensitive content (names, locations, organisations) before applying transformations. Tuned to reduce false positives while balancing automation with reliability.',
    subtext: 'Designed for scalable document privacy.',
    tech: ['Python', 'spaCy', 'NLTK', 'Regular Expressions'],
    techColors: {
      Python: 'text-blue-400 border-blue-500/20 bg-blue-500/5',
      spaCy: 'text-accent-400 border-accent-500/20 bg-accent-500/5',
      NLTK: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5',
      'Regular Expressions': 'text-rose-400 border-rose-500/20 bg-rose-500/5',
    },
    github: '#',
    demo: '#',
    features: ['Named Entity Recognition', 'Rule-based Matching', 'PII Detection', 'Low False-Positive Rate'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-900/30">
      <div className="section-container">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-accent-400 text-sm">03.</span>
            <h2 className="section-title mb-0">Projects</h2>
          </div>
          <div className="h-px w-24 bg-gradient-to-r from-accent-500 to-transparent mb-10 ml-10" />
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <SectionReveal key={project.id} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className={`card group flex flex-col h-full shadow-xl ${project.accentGlow}
                            hover:shadow-2xl relative overflow-hidden`}
              >
                {/* Decorative top gradient */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.headerBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.headerBg} opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full
                                      text-xs font-mono font-medium border ${project.tagColor} mb-2`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${project.tagDot}`} />
                        {project.tag}
                      </span>
                      <h3 className="font-mono font-bold text-xl text-white group-hover:text-accent-300
                                     transition-colors duration-200">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        id={`${project.id}-github`}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub`}
                        className="w-8 h-8 flex items-center justify-center rounded-lg
                                   border border-slate-700 text-slate-500
                                   hover:border-accent-500/60 hover:text-accent-400
                                   transition-all duration-200"
                      >
                        <Github size={15} />
                      </a>
                      <a
                        id={`${project.id}-demo`}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} Live Demo`}
                        className="w-8 h-8 flex items-center justify-center rounded-lg
                                   border border-slate-700 text-slate-500
                                   hover:border-accent-500/60 hover:text-accent-400
                                   transition-all duration-200"
                      >
                        <ExternalLink size={15} />
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-2 flex-1">
                    {project.description}
                  </p>
                  <p className="text-slate-500 text-xs italic mb-4">{project.subtext}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.features.map(f => (
                      <span key={f} className="text-xs text-slate-500 font-mono">
                        ✦ {f}
                      </span>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium
                                    border ${project.techColors[t] || 'text-slate-400 border-slate-700 bg-slate-800'}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        {/* More projects note */}
        <SectionReveal delay={0.3}>
          <div className="mt-10 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 font-mono text-sm text-slate-500
                         hover:text-accent-400 transition-colors duration-200 group"
            >
              <Github size={16} />
              <span>More on GitHub</span>
              <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
