import Icon from './Icons'
import Reveal from './Reveal'
import { BUSINESS } from '../data'

// A wide coastal sunrise built in CSS/SVG — distinct from the landscaping
// sections, same brand palette. Layered waves drift slowly.
function Wave({ className, dur, opacity, fill }) {
  return (
    <div className={`absolute inset-x-0 ${className}`} aria-hidden="true">
      <div className={`flex w-[200%] ${dur}`} style={{ opacity }}>
        {[0, 1].map((k) => (
          <svg key={k} viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-24 w-1/2 sm:h-28">
            <path
              d="M0 60 Q150 20 300 60 T600 60 T900 60 T1200 60 V120 H0 Z"
              fill={fill}
            />
          </svg>
        ))}
      </div>
    </div>
  )
}

export default function FishingBonus() {
  return (
    <section className="relative overflow-hidden">
      {/* Sky */}
      <div className="relative isolate">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-[#5a3a22] to-[#caa15f]" />
        {/* Sun glow */}
        <div className="absolute left-1/2 top-[34%] -z-0 h-56 w-56 -translate-x-1/2 rounded-full bg-flame/80 blur-2xl animate-shine sm:h-72 sm:w-72" />
        <div className="absolute left-1/2 top-[40%] h-20 w-20 -translate-x-1/2 rounded-full bg-gradient-to-b from-cream to-flame shadow-[0_0_80px_30px_rgba(240,169,74,0.55)] sm:h-24 sm:w-24" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-3xl px-5 pb-44 pt-24 text-center sm:pb-52 lg:pt-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-ink/20 px-4 py-1.5 font-display text-sm font-700 uppercase tracking-[0.2em] text-cream backdrop-blur-sm">
              <Icon name="fish" className="h-4 w-4" /> Beyond The Lawn
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-5xl font-900 uppercase leading-[0.9] text-cream drop-shadow-lg sm:text-7xl">
              Love Fishing?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream drop-shadow sm:text-xl">
              Here's a little secret — we also run <strong className="text-ink/90">guided fishing trips</strong> along
              the Texas Coast. Whether you want a productive day on the water or just an excuse to enjoy the
              outdoors, ask us about our Fishing Guide Services.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href={`#contact`}
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 font-display font-700 uppercase tracking-wide text-cream shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-charcoal"
            >
              <Icon name="fish" className="h-5 w-5 text-flame" /> Ask About Fishing Trips
            </a>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 font-display text-sm font-600 uppercase tracking-[0.18em] text-cream/80">
              No Fish Too Small · {BUSINESS.phone}
            </p>
          </Reveal>
        </div>

        {/* Layered water */}
        <Wave className="bottom-16 sm:bottom-20" dur="animate-wave-slow" opacity={0.55} fill="#2a4a3a" />
        <Wave className="bottom-8 sm:bottom-10" dur="animate-wave-fast" opacity={0.75} fill="#1f3a30" />
        <Wave className="-bottom-1" dur="animate-wave-slow" opacity={1} fill="#13231d" />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-[#13231d]" />
      </div>
    </section>
  )
}
