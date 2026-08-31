import { Mail, Github, Linkedin, Heart } from 'lucide-react'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { id: 'footer-github', icon: Github, href: '#', label: 'GitHub' },
  { id: 'footer-linkedin', icon: Linkedin, href: 'https://linkedin.com/in/mallikarjunsalla', label: 'LinkedIn' },
  { id: 'footer-email', icon: Mail, href: 'mailto:s.mallikarjun256@gmail.com', label: 'Email' },
]

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-950 border-t border-slate-800/60">
      <div className="section-container py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center">
                <span className="font-mono font-bold text-slate-950 text-xs">SM</span>
              </div>
              <span className="font-mono font-bold text-white">Salla Mallikarjun</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Final-Year CSE Student · Full-Stack Developer · Cybersecurity Enthusiast
            </p>
            <p className="font-mono text-xs text-accent-500/70 mt-2">
              // building things that matter
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => { e.preventDefault(); scrollTo(link.href) }}
                    className="text-slate-500 hover:text-accent-400 text-sm transition-colors duration-200
                               font-mono hover:translate-x-1 inline-block transition-transform"
                  >
                    › {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Contact
            </h3>
            <p className="text-slate-500 text-sm mb-1">s.mallikarjun256@gmail.com</p>
            <p className="text-slate-500 text-sm mb-4">Visakhapatnam, AP, India</p>
            <div className="flex items-center gap-3">
              {socials.map(({ id, icon: Icon, href, label }) => (
                <a
                  key={id}
                  id={id}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-800
                             text-slate-500 hover:text-accent-400 hover:border-accent-500/40
                             transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs font-mono">
            © {new Date().getFullYear()} Salla Mallikarjun. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs font-mono flex items-center gap-1.5">
            Built with
            <Heart size={10} className="text-red-500/70 fill-current" />
            React · Vite · TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  )
}
