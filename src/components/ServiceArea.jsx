import { useState } from 'react'
import Icon from './Icons'
import Reveal from './Reveal'
import { SERVICE_AREAS, BUSINESS } from '../data'

// Simplified Texas silhouette (stylized, not survey-accurate).
const TEXAS_PATH =
  'M70 40 L150 40 L168 30 L176 44 L230 46 L232 70 L250 78 L256 96 L300 104 ' +
  'L300 130 L286 150 L292 172 L274 196 L262 188 L250 210 L238 200 L226 232 ' +
  'L214 226 L206 250 L196 244 L182 226 L150 222 L150 180 L92 176 L92 150 ' +
  'L70 150 Z'

export default function ServiceArea() {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="relative bg-charcoal-2 py-24 lg:py-32">
      <div className="absolute inset-0 topo opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Map */}
          <Reveal>
            <div className="relative mx-auto max-w-md">
              <svg viewBox="0 0 320 270" className="w-full drop-shadow-2xl" role="img" aria-label="Texas service area map">
                <defs>
                  <linearGradient id="tx" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#355C3A" />
                    <stop offset="100%" stopColor="#243F28" />
                  </linearGradient>
                </defs>
                <path d={TEXAS_PATH} fill="url(#tx)" stroke="#D77A28" strokeWidth="2.5" strokeLinejoin="round" />
                <path d={TEXAS_PATH} fill="none" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="6" strokeLinejoin="round" />

                {/* Corpus Christi / Coastal Bend pin (south coast) */}
                <g transform="translate(225, 205)">
                  <circle r="16" fill="#D77A28" opacity="0.25">
                    <animate attributeName="r" values="12;22;12" dur="2.4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.35;0;0.35" dur="2.4s" repeatCount="indefinite" />
                  </circle>
                  <circle r="7" fill="#F0A94A" stroke="#13160F" strokeWidth="1.5" />
                  <circle r="2.6" fill="#13160F" />
                </g>
              </svg>
              <div className="mt-4 text-center font-display text-sm font-700 uppercase tracking-[0.2em] text-cream/60">
                Coastal Bend · South Texas
              </div>
            </div>
          </Reveal>

          {/* Areas */}
          <div>
            <Reveal><span className="eyebrow">Where We Work</span></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-4xl font-800 uppercase leading-[0.95] text-cream sm:text-5xl lg:text-6xl">
                Proudly Serving
                <span className="block text-ember">The Coastal Bend</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-lg text-cream/75">
                Based in {BUSINESS.city} and covering the surrounding communities. Not sure if you're in
                our area? Just ask — if you're close, we've got you.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <ul className="mt-8 flex flex-wrap gap-3">
                {SERVICE_AREAS.map((a) => (
                  <li
                    key={a}
                    onMouseEnter={() => setHovered(a)}
                    onMouseLeave={() => setHovered(null)}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 font-display text-sm font-600 uppercase tracking-wide transition-all duration-200 ${
                      hovered === a
                        ? 'border-ember bg-ember text-ink'
                        : 'border-white/15 bg-white/5 text-cream/80'
                    }`}
                  >
                    <Icon name="pin" className="h-4 w-4" />
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <a href="#contact" className="btn-ember mt-9">
                Check My Area <Icon name="arrowRight" className="h-5 w-5" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
