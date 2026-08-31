import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { supabase } from '../lib/supabase'
import toast from 'react-hot-toast'

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

const contactInfo = [
  {
    id: 'contact-email',
    icon: Mail,
    label: 'Email',
    value: 's.mallikarjun256@gmail.com',
    href: 'mailto:s.mallikarjun256@gmail.com',
    color: 'text-accent-400',
    bg: 'bg-accent-500/10',
    border: 'border-accent-500/20',
  },
  {
    id: 'contact-linkedin',
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mallikarjunsalla',
    href: 'https://linkedin.com/in/mallikarjunsalla',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    id: 'contact-phone',
    icon: Phone,
    label: 'Phone',
    value: '+91 — (available on request)',
    href: '#',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
]

const INITIAL_FORM = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error('Please fill in all fields.', { icon: <AlertCircle size={16} /> })
      return
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error('Please enter a valid email address.')
      return
    }

    setLoading(true)

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
      const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

      if (!supabaseUrl || !supabaseKey || supabaseUrl === 'your_supabase_project_url_here') {
        // Demo mode — simulate success
        await new Promise(r => setTimeout(r, 1200))
        toast.success("Message received! I'll get back to you soon. 🚀", {
          duration: 5000,
          icon: <CheckCircle size={16} className="text-emerald-400" />,
        })
        setForm(INITIAL_FORM)
        setSubmitted(true)
        return
      }

      const { error } = await supabase
        .from('contacts')
        .insert([{ name: form.name.trim(), email: form.email.trim(), message: form.message.trim() }])

      if (error) throw error

      toast.success("Message sent! I'll get back to you soon. 🚀", {
        duration: 5000,
        icon: <CheckCircle size={16} className="text-emerald-400" />,
      })
      setForm(INITIAL_FORM)
      setSubmitted(true)
    } catch (err) {
      console.error('Contact form error:', err)
      toast.error('Failed to send message. Please try again or email me directly.', {
        duration: 5000,
        icon: <AlertCircle size={16} className="text-red-400" />,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-accent-400 text-sm">06.</span>
            <h2 className="section-title mb-0">Let's Connect</h2>
          </div>
          <div className="h-px w-24 bg-gradient-to-r from-accent-500 to-transparent mb-4 ml-10" />
          <p className="text-slate-400 ml-10 mb-10 max-w-xl">
            Whether it's a project collab, internship opportunity, or just a quick hello —
            my inbox is always open.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact form */}
          <SectionReveal delay={0.1} className="lg:col-span-3">
            <div className="lg:col-span-3">
              <div className="card">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle size={48} className="text-emerald-400 mb-4" />
                    <h3 className="font-mono font-bold text-xl text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-400 mb-6">Thanks for reaching out. I'll respond as soon as possible.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-outline text-sm"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form id="contact-form" onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block font-mono text-xs text-slate-400 mb-1.5 uppercase tracking-wider">
                          Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="form-input"
                          disabled={loading}
                          maxLength={100}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block font-mono text-xs text-slate-400 mb-1.5 uppercase tracking-wider">
                          Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="form-input"
                          disabled={loading}
                          maxLength={254}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block font-mono text-xs text-slate-400 mb-1.5 uppercase tracking-wider">
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me what's on your mind..."
                        rows={5}
                        className="form-input resize-none"
                        disabled={loading}
                        maxLength={2000}
                        required
                      />
                      <p className="text-right text-slate-600 text-xs mt-1 font-mono">
                        {form.message.length}/2000
                      </p>
                    </div>

                    <motion.button
                      id="contact-submit"
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: loading ? 1 : 1.02 }}
                      whileTap={{ scale: loading ? 1 : 0.98 }}
                      className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </SectionReveal>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map(({ id, icon: Icon, label, value, href, color, bg, border }, i) => (
              <SectionReveal key={id} delay={0.2 + i * 0.1}>
                <motion.a
                  id={id}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="card flex items-start gap-4 group hover:bg-slate-800/60 cursor-pointer block"
                >
                  <div className={`w-10 h-10 rounded-xl ${bg} border ${border} flex items-center justify-center shrink-0
                                   group-hover:scale-110 transition-transform duration-200`}>
                    <Icon size={18} className={color} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-1">{label}</p>
                    <p className={`text-sm font-medium ${color} truncate`}>{value}</p>
                  </div>
                </motion.a>
              </SectionReveal>
            ))}

            {/* Availability card */}
            <SectionReveal delay={0.5}>
              <div className="card border-emerald-500/20 bg-emerald-500/5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    Available
                  </span>
                </div>
                <p className="text-slate-400 text-sm">
                  Open to internships, part-time roles, and freelance projects. Response time: usually within 24 hrs.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
