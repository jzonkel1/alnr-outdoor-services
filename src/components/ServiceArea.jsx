import Icon from './Icons'
import Reveal from './Reveal'
import { SERVICE_AREAS, BUSINESS } from '../data'

// Google Maps embed centered on the Corpus Christi / Coastal Bend service area.
// Keyless embed — swap the q= value to recenter, or paste a custom embed URL.
const MAP_SRC =
  'https://www.google.com/maps?q=Corpus+Christi,+Texas&z=10&output=embed'

export default function ServiceArea() {
  return (
    <section className="relative bg-charcoal-2 py-24 lg:py-32">
      <div className="absolute inset-0 topo opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Map */}
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-lift">
              <iframe
                title="ALNR Outdoor Services — Corpus Christi service area"
                src={MAP_SRC}
                className="h-[340px] w-full sm:h-[420px]"
                style={{ border: 0, filter: 'grayscale(0.25) contrast(1.05)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              {/* brand frame accent */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-ember/20" />
            </div>
            <div className="mt-4 text-center font-display text-sm font-700 uppercase tracking-[0.2em] text-cream/60">
              Coastal Bend · South Texas
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
                    className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-display text-sm font-600 uppercase tracking-wide text-cream/80 transition-all duration-200 hover:border-ember hover:bg-ember hover:text-ink"
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
