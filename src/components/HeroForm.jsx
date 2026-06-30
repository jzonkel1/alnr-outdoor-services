import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from './Icons'
import { BUSINESS, SERVICE_OPTIONS } from '../data'

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${BUSINESS.email}`

const field =
  'w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-cream placeholder-cream/40 ' +
  'outline-none transition-colors focus:border-ember focus:bg-white/[0.08]'

// Compact lead form that lives in the hero — the fastest path to a conversion.
export default function HeroForm() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', phone: '', service: '' })
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: `New estimate request — ${form.name || 'Website'}`, source: 'Hero form' }),
      })
      if (!res.ok) throw new Error('bad response')
      setStatus('ok')
      setForm({ name: '', phone: '', service: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative w-full max-w-md rounded-3xl border border-white/12 bg-ink/80 p-6 shadow-lift backdrop-blur-md sm:p-7"
    >
      {/* ember corner accent */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-ember/20 blur-2xl" />

      <AnimatePresence mode="wait">
        {status === 'ok' ? (
          <motion.div key="ok" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="flex min-h-[300px] flex-col items-center justify-center text-center">
            <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-ember/15 text-ember">
              <Icon name="check" className="h-8 w-8" />
            </span>
            <h3 className="font-display text-2xl font-800 uppercase text-cream">Request Sent!</h3>
            <p className="mt-2 text-sm text-cream/70">We'll reach out shortly. Need us now? Call{' '}
              <a href={`tel:${BUSINESS.phoneRaw}`} className="font-700 text-ember">{BUSINESS.phone}</a>.
            </p>
            <button onClick={() => setStatus('idle')} className="btn-ghost mt-6 text-sm">Send Another</button>
          </motion.div>
        ) : (
          <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={onSubmit} className="relative space-y-3">
            <div className="mb-1">
              <h3 className="font-display text-2xl font-800 uppercase leading-none text-cream">Get A Free Estimate</h3>
              <p className="mt-1.5 text-sm text-cream/60">Quick reply. No pressure, ever.</p>
            </div>

            <input required value={form.name} onChange={update('name')} className={field} placeholder="Your name" aria-label="Your name" />
            <input required type="tel" value={form.phone} onChange={update('phone')} className={field} placeholder="Phone number" aria-label="Phone number" />
            <select required value={form.service} onChange={update('service')} className={`${field} appearance-none`} aria-label="Service needed">
              <option value="" disabled>What do you need?</option>
              {SERVICE_OPTIONS.map((o) => (
                <option key={o} value={o} className="bg-charcoal-2">{o}</option>
              ))}
            </select>

            {status === 'error' && (
              <p className="rounded-lg bg-ember-2/20 px-3 py-2 text-xs text-flame">
                Couldn't send — please call or text {BUSINESS.phone}.
              </p>
            )}

            <button type="submit" disabled={status === 'sending'} className="btn-ember w-full text-base disabled:opacity-70">
              {status === 'sending' ? 'Sending…' : <>Get My Free Estimate <Icon name="arrowRight" className="h-5 w-5" /></>}
            </button>
            <p className="text-center text-xs text-cream/45">
              Or call/text <a href={`tel:${BUSINESS.phoneRaw}`} className="font-600 text-cream/70 hover:text-ember">{BUSINESS.phone}</a>
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
