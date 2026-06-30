import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from './Icons'
import Reveal from './Reveal'
import { BUSINESS, SERVICE_OPTIONS } from '../data'

// NOTE: form posts to FormSubmit. Replace the action email below or activate it
// by submitting once and confirming the email FormSubmit sends to alnr.services@gmail.com.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${BUSINESS.email}`

const field =
  'w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-cream placeholder-cream/40 ' +
  'outline-none transition-colors focus:border-ember focus:bg-white/[0.07]'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | ok | error
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: `New estimate request — ${form.name || 'Website'}`,
        }),
      })
      if (!res.ok) throw new Error('bad response')
      setStatus('ok')
      setForm({ name: '', phone: '', email: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative bg-gradient-to-b from-forest-deep to-ink py-24 lg:py-32">
      <div className="absolute inset-0 topo opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: pitch + direct contact */}
          <div>
            <Reveal><span className="eyebrow">Get In Touch</span></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-4xl font-800 uppercase leading-[0.95] text-cream sm:text-5xl lg:text-6xl">
                Request Your
                <span className="block text-ember">Free Estimate</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-lg text-cream/75">
                Tell us a little about what you need and we'll get right back to you. Prefer to talk?
                Call or text — we answer.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 space-y-3">
                <a href={`tel:${BUSINESS.phoneRaw}`} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-ember/50">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ember text-ink"><Icon name="phone" className="h-6 w-6" /></span>
                  <span>
                    <span className="block font-display text-sm font-600 uppercase tracking-wide text-cream/60">Call or Text</span>
                    <span className="block font-display text-xl font-700 text-cream group-hover:text-ember">{BUSINESS.phone}</span>
                  </span>
                </a>
                <a href={`mailto:${BUSINESS.email}`} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-ember/50">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest text-cream"><Icon name="mail" className="h-6 w-6" /></span>
                  <span>
                    <span className="block font-display text-sm font-600 uppercase tracking-wide text-cream/60">Email Us</span>
                    <span className="block font-display text-lg font-700 text-cream group-hover:text-ember break-all">{BUSINESS.email}</span>
                  </span>
                </a>
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest text-cream"><Icon name="pin" className="h-6 w-6" /></span>
                  <span>
                    <span className="block font-display text-sm font-600 uppercase tracking-wide text-cream/60">Service Area</span>
                    <span className="block font-display text-lg font-700 text-cream">{BUSINESS.region}</span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-charcoal-2 p-6 shadow-lift sm:p-8">
              <AnimatePresence mode="wait">
                {status === 'ok' ? (
                  <motion.div
                    key="ok"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex min-h-[420px] flex-col items-center justify-center text-center"
                  >
                    <span className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-ember/15 text-ember">
                      <Icon name="check" className="h-10 w-10" />
                    </span>
                    <h3 className="font-display text-3xl font-800 uppercase text-cream">Request Sent!</h3>
                    <p className="mt-3 max-w-sm text-cream/70">
                      Thanks — we got it. We'll reach out shortly. Need us sooner? Call or text{' '}
                      <a href={`tel:${BUSINESS.phoneRaw}`} className="font-700 text-ember">{BUSINESS.phone}</a>.
                    </p>
                    <button onClick={() => setStatus('idle')} className="btn-ghost mt-8">Send Another</button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={onSubmit}
                    className="space-y-4"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block font-display text-sm font-600 uppercase tracking-wide text-cream/70">Name</label>
                        <input required value={form.name} onChange={update('name')} className={field} placeholder="Your name" />
                      </div>
                      <div>
                        <label className="mb-1.5 block font-display text-sm font-600 uppercase tracking-wide text-cream/70">Phone</label>
                        <input required type="tel" value={form.phone} onChange={update('phone')} className={field} placeholder="(361) 000-0000" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block font-display text-sm font-600 uppercase tracking-wide text-cream/70">Email</label>
                      <input type="email" value={form.email} onChange={update('email')} className={field} placeholder="you@email.com" />
                    </div>
                    <div>
                      <label className="mb-1.5 block font-display text-sm font-600 uppercase tracking-wide text-cream/70">Service Needed</label>
                      <select required value={form.service} onChange={update('service')} className={`${field} appearance-none`}>
                        <option value="" disabled>Select a service…</option>
                        {SERVICE_OPTIONS.map((o) => (
                          <option key={o} value={o} className="bg-charcoal-2">{o}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block font-display text-sm font-600 uppercase tracking-wide text-cream/70">Message</label>
                      <textarea rows={4} value={form.message} onChange={update('message')} className={`${field} resize-none`} placeholder="Tell us about your property or project…" />
                    </div>

                    {status === 'error' && (
                      <p className="rounded-lg bg-ember-2/20 px-4 py-2.5 text-sm text-flame">
                        Something went wrong sending that. Please call or text {BUSINESS.phone}.
                      </p>
                    )}

                    <button type="submit" disabled={status === 'sending'} className="btn-ember w-full text-base disabled:opacity-70">
                      {status === 'sending' ? 'Sending…' : 'Get My Free Estimate'}
                      {status !== 'sending' && <Icon name="arrowRight" className="h-5 w-5" />}
                    </button>
                    <p className="text-center text-xs text-cream/50">No spam, ever. We only use your info to get back to you.</p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
