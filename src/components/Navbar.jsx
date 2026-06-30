import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from './Icons'
import { BUSINESS, NAV_LINKS } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink/92 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <img
            src={BUSINESS.logo}
            alt={BUSINESS.name}
            className={`w-auto transition-all duration-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] ${
              scrolled ? 'h-11' : 'h-12 lg:h-14'
            }`}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-display font-600 uppercase tracking-wide text-cream/85 transition-colors hover:text-cream"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-ember transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-2 font-display font-700 text-cream/90 hover:text-ember transition-colors">
            <Icon name="phone" className="h-4 w-4 text-ember" />
            {BUSINESS.phone}
          </a>
          <a href="#contact" className="btn-ember text-sm">Get Free Estimate</a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-cream p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-7 w-7" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden border-t border-white/10 bg-ink/97 backdrop-blur-md"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/5 py-3 font-display text-xl font-600 uppercase tracking-wide text-cream/90"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-ghost" onClick={() => setOpen(false)}>
                  <Icon name="phone" className="h-4 w-4" /> {BUSINESS.phone}
                </a>
                <a href="#contact" className="btn-ember" onClick={() => setOpen(false)}>Get Free Estimate</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
