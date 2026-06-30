import { motion } from 'framer-motion'
import Icon from './Icons'
import Reveal from './Reveal'
import { SERVICES } from '../data'

function SectionHeading({ eyebrow, title, sub, light = false }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Reveal><span className="eyebrow justify-center">{eyebrow}</span></Reveal>
      <Reveal delay={0.05}>
        <h2 className={`mt-4 font-display text-4xl font-800 uppercase leading-[0.95] sm:text-5xl lg:text-6xl ${light ? 'text-charcoal' : 'text-cream'}`}>
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.1}>
          <p className={`mt-4 text-lg ${light ? 'text-charcoal/70' : 'text-cream/70'}`}>{sub}</p>
        </Reveal>
      )}
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative bg-ink py-24 lg:py-32">
      <div className="absolute inset-0 topo opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Outdoor Services, Done Right"
          sub="One local crew for everything your property needs — from a weekly mow to a full landscape refresh."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-charcoal-2 p-8 shadow-card transition-colors duration-300 hover:border-ember/50"
            >
              {/* glow on hover */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-ember/0 blur-3xl transition-all duration-500 group-hover:bg-ember/20" />

              <div className="relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-forest to-forest-deep text-cream shadow-lg transition-all duration-300 group-hover:from-ember group-hover:to-ember-2 group-hover:text-ink">
                <Icon name={s.icon} className="h-8 w-8" />
              </div>

              <h3 className="relative font-display text-2xl font-700 uppercase tracking-wide text-cream">
                {s.title}
              </h3>
              <p className="relative mt-3 leading-relaxed text-cream/70">{s.text}</p>

              <div className="relative mt-6 flex items-center gap-2 font-display text-sm font-700 uppercase tracking-wide text-ember opacity-0 transition-all duration-300 group-hover:opacity-100">
                Free Estimate <Icon name="arrowRight" className="h-4 w-4" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export { SectionHeading }
