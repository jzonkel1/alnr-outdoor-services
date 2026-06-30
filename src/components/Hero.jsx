import { motion } from 'framer-motion'
import Icon from './Icons'
import LeafField from './LeafField'
import HeroForm from './HeroForm'
import { BUSINESS, asset } from '../data'

const rise = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.15 * i, ease: [0.21, 0.47, 0.32, 0.98] } }),
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src={asset('/work/hero-curb-appeal.jpg')}
          alt="Freshly landscaped Corpus Christi home by ALNR Outdoor Services"
          className="h-full w-full object-cover"
          fetchpriority="high"
        />
        {/* Layered overlays for depth + legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        <div className="absolute inset-0 topo opacity-60 mix-blend-soft-light" />
      </div>

      <LeafField />

      {/* Content */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pt-28 pb-24 lg:grid-cols-[1.05fr_minmax(360px,400px)] lg:gap-10 lg:px-8 lg:pb-28">
        {/* Left: message */}
        <div className="max-w-2xl">
          <motion.div custom={0} variants={rise} initial="hidden" animate="show"
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-ember/40 bg-ember/10 px-4 py-1.5 backdrop-blur-sm">
            <Icon name="cross" className="h-3.5 w-3.5 text-ember" strokeWidth={2.4} />
            <span className="font-display text-sm font-700 uppercase tracking-[0.18em] text-flame">
              {BUSINESS.region}
            </span>
          </motion.div>

          <motion.h1 custom={1} variants={rise} initial="hidden" animate="show"
            className="font-display text-6xl font-800 uppercase leading-[0.92] text-cream sm:text-7xl">
            Your Property.
            <span className="mt-1 block text-ember">Taken Care Of.</span>
          </motion.h1>

          <motion.p custom={2} variants={rise} initial="hidden" animate="show"
            className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85 sm:text-xl [text-shadow:_0_2px_16px_rgba(0,0,0,0.55)]">
            Professional lawn maintenance, landscaping, trailer rentals and dependable
            outdoor services for homeowners across {BUSINESS.city} and the Coastal Bend.
          </motion.p>

          <motion.div custom={3} variants={rise} initial="hidden" animate="show"
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#services" className="btn-ghost text-base">View Services</a>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center gap-2 font-display text-lg font-700 uppercase tracking-wide text-cream/90 transition-colors hover:text-ember">
              <Icon name="phone" className="h-5 w-5 text-ember" /> {BUSINESS.phone}
            </a>
          </motion.div>

          {/* Tagline */}
          <motion.p custom={4} variants={rise} initial="hidden" animate="show"
            className="mt-8 font-display text-lg font-600 uppercase tracking-wide text-cream/60">
            <span className="text-ember">“</span>{BUSINESS.tagline}<span className="text-ember">”</span>
          </motion.p>
        </div>

        {/* Right: lead form */}
        <div className="flex justify-center lg:justify-end">
          <HeroForm />
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-cream/50 lg:block"
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Icon name="arrowDown" className="h-7 w-7" />
      </motion.a>
    </section>
  )
}
