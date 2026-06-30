import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from './Icons'
import Reveal from './Reveal'
import { GALLERY } from '../data'

const spanClass = {
  tall: 'row-span-2',
  wide: 'sm:col-span-2',
  normal: '',
}

export default function Gallery() {
  const [active, setActive] = useState(null) // index or null

  const close = useCallback(() => setActive(null), [])
  const next = useCallback(() => setActive((i) => (i + 1) % GALLERY.length), [])
  const prev = useCallback(() => setActive((i) => (i - 1 + GALLERY.length) % GALLERY.length), [])

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, close, next, prev])

  return (
    <section id="gallery" className="relative bg-charcoal-2 py-24 lg:py-32">
      <div className="absolute inset-0 topo opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><span className="eyebrow justify-center">Our Work</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl font-800 uppercase leading-[0.95] text-cream sm:text-5xl lg:text-6xl">
              Real Yards. Real Results.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-cream/70">
              Every photo here is real ALNR work across {`Corpus Christi`} and the Coastal Bend.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[230px] lg:grid-cols-4">
          {GALLERY.map((g, i) => (
            <motion.button
              key={g.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 ${spanClass[g.span] || ''}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-3 left-3 right-3 flex translate-y-2 items-center gap-2 text-left opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ember text-ink">
                  <Icon name="arrowRight" className="h-4 w-4 rotate-[-45deg]" />
                </span>
                <span className="font-display text-sm font-600 uppercase tracking-wide text-cream/90 line-clamp-1">View</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 backdrop-blur-sm p-4"
            onClick={close}
          >
            <button onClick={close} className="absolute right-5 top-5 text-cream/70 hover:text-ember" aria-label="Close">
              <Icon name="close" className="h-8 w-8" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev() }} className="absolute left-4 text-cream/70 hover:text-ember sm:left-8" aria-label="Previous">
              <Icon name="arrowRight" className="h-9 w-9 rotate-180" />
            </button>
            <motion.figure
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="max-h-[85vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={GALLERY[active].src} alt={GALLERY[active].alt} className="max-h-[78vh] w-auto rounded-xl object-contain" />
              <figcaption className="mt-3 text-center text-sm text-cream/70">{GALLERY[active].alt}</figcaption>
            </motion.figure>
            <button onClick={(e) => { e.stopPropagation(); next() }} className="absolute right-4 text-cream/70 hover:text-ember sm:right-8" aria-label="Next">
              <Icon name="arrowRight" className="h-9 w-9" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
