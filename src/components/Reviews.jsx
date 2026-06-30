import { motion } from 'framer-motion'
import Icon from './Icons'
import Reveal from './Reveal'
import { REVIEWS, REVIEWS_ARE_PLACEHOLDER, BUSINESS } from '../data'

function Stars({ n = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className={`h-5 w-5 ${i < n ? 'text-ember' : 'text-cream/15'}`} fill="currentColor" aria-hidden="true">
          <path d="m12 2 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 18l-5.9 3 1.2-6.5L2.5 9.9 9 9Z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-ink py-24 lg:py-32">
      <div className="absolute inset-0 topo opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><span className="eyebrow justify-center">Reviews</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl font-800 uppercase leading-[0.95] text-cream sm:text-5xl lg:text-6xl">
              Loved By Local Homeowners
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-5 flex flex-col items-center gap-2">
              <Stars n={5} />
              <p className="text-cream/70">
                {REVIEWS_ARE_PLACEHOLDER
                  ? 'Sample layout — your real Google reviews will show here as customers leave them.'
                  : 'Real reviews from across the Coastal Bend.'}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="relative flex flex-col rounded-3xl border border-white/10 bg-charcoal-2 p-7 shadow-card"
            >
              <span className="pointer-events-none absolute right-6 top-4 font-display text-6xl font-900 leading-none text-ember/20">”</span>
              <Stars n={r.rating} />
              <blockquote className="mt-4 flex-1 leading-relaxed text-cream/80">“{r.text}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-forest to-forest-deep font-display text-lg font-800 text-cream">
                  {r.location.charAt(0)}
                </span>
                <span>
                  <span className="block font-display font-700 uppercase tracking-wide text-cream">{r.name}</span>
                  <span className="flex items-center gap-1 text-sm text-cream/55">
                    <Icon name="pin" className="h-3.5 w-3.5" /> {r.location}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
            <p className="font-display text-lg font-600 uppercase tracking-wide text-cream/70">
              Worked with us? We'd love your review.
            </p>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-ember text-sm">
              <Icon name="star" className="h-4 w-4" /> Leave A Review
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
