import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

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

const certifications = [
  {
    id: 'ccna-enterprise',
    name: 'CCNA: Enterprise Networking, Security, and Automation',
    issuer: 'Cisco',
    issuerColor: 'text-blue-400',
    issuerBg: 'bg-blue-500/10',
    issuerBorder: 'border-blue-500/20',
    icon: '🔗',
    level: 'Intermediate',
    levelColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    credentialUrl: '#',
  },
  {
    id: 'ccna-intro',
    name: 'CCNA: Introduction to Networks',
    issuer: 'Cisco',
    issuerColor: 'text-blue-400',
    issuerBg: 'bg-blue-500/10',
    issuerBorder: 'border-blue-500/20',
    icon: '📡',
    level: 'Foundation',
    levelColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    credentialUrl: '#',
  },
  {
    id: 'ccna-switching',
    name: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco',
    issuerColor: 'text-blue-400',
    issuerBg: 'bg-blue-500/10',
    issuerBorder: 'border-blue-500/20',
    icon: '🖧',
    level: 'Intermediate',
    levelColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    credentialUrl: '#',
  },
  {
    id: 'cisco-cybersec',
    name: 'Cisco Cybersecurity Essentials',
    issuer: 'Cisco',
    issuerColor: 'text-blue-400',
    issuerBg: 'bg-blue-500/10',
    issuerBorder: 'border-blue-500/20',
    icon: '🛡️',
    level: 'Intermediate',
    levelColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
    credentialUrl: '#',
  },
  {
    id: 'python-essentials-1',
    name: 'Python Essentials 1 & 2',
    issuer: 'Cisco',
    issuerColor: 'text-blue-400',
    issuerBg: 'bg-blue-500/10',
    issuerBorder: 'border-blue-500/20',
    icon: '🐍',
    level: 'Foundation',
    levelColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    credentialUrl: '#',
  },
  {
    id: 'python-gfg',
    name: 'Python Certification',
    issuer: 'GeeksforGeeks',
    issuerColor: 'text-emerald-400',
    issuerBg: 'bg-emerald-500/10',
    issuerBorder: 'border-emerald-500/20',
    icon: '🔬',
    level: 'Foundation',
    levelColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    credentialUrl: '#',
  },
  {
    id: 'six-sigma',
    name: 'Six Sigma White Belt',
    issuer: 'MSI',
    issuerColor: 'text-amber-400',
    issuerBg: 'bg-amber-500/10',
    issuerBorder: 'border-amber-500/20',
    icon: '⚙️',
    level: 'White Belt',
    levelColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    credentialUrl: '#',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-slate-900/30">
      <div className="section-container">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-accent-400 text-sm">05.</span>
            <h2 className="section-title mb-0">Certifications</h2>
          </div>
          <div className="h-px w-24 bg-gradient-to-r from-accent-500 to-transparent mb-10 ml-10" />
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <SectionReveal key={cert.id} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="card group h-full flex flex-col gap-3 relative overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Icon and issuer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl" role="img" aria-label={cert.name}>{cert.icon}</span>
                    <Award size={14} className="text-accent-500/60" />
                  </div>
                  <a
                    id={`cert-view-${cert.id}`}
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${cert.name} credential`}
                    className="text-slate-600 hover:text-accent-400 transition-colors duration-200"
                  >
                    <ExternalLink size={13} />
                  </a>
                </div>

                {/* Cert name */}
                <h3 className="font-mono font-semibold text-sm text-white leading-snug group-hover:text-accent-300
                               transition-colors duration-200 flex-1">
                  {cert.name}
                </h3>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                  <span className={`px-2 py-0.5 rounded-md text-xs font-mono font-medium
                                   border ${cert.issuerBg} ${cert.issuerBorder} ${cert.issuerColor}`}>
                    {cert.issuer}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-mono border ${cert.levelColor}`}>
                    {cert.level}
                  </span>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        {/* Stats */}
        <SectionReveal delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            {[
              { value: '7+', label: 'Certifications' },
              { value: '3', label: 'CCNA Modules' },
              { value: '2', label: 'Python Certs' },
              { value: '1', label: 'Six Sigma Belt' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <p className="font-mono font-bold text-3xl text-accent-400">{stat.value}</p>
                <p className="text-slate-500 text-sm mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
