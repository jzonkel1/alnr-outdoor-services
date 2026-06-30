import Icon from './Icons'
import Reveal from './Reveal'
import { BUSINESS, asset } from '../data'

const STATS = [
  { n: 'Local', l: 'Owned & Operated' },
  { n: 'Free', l: 'Estimates, Always' },
  { n: '7+', l: 'Coastal Bend Areas Served' },
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-ink to-forest-deep py-24 lg:py-32">
      <div className="absolute inset-0 topo opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-white/10 shadow-lift">
                <img
                  src={asset('/work/rock-bed-tree.jpg')}
                  alt="ALNR landscaping work at a Corpus Christi home"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-3 flex items-center gap-3 rounded-2xl border border-ember/40 bg-charcoal/95 px-5 py-4 shadow-ember backdrop-blur sm:-right-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ember text-ink">
                  <Icon name="cross" className="h-5 w-5" strokeWidth={2.4} />
                </span>
                <div className="font-display leading-tight">
                  <div className="text-lg font-800 uppercase text-cream">No Job Too Big</div>
                  <div className="text-sm font-600 uppercase tracking-wide text-ember">No Fish Too Small</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal><span className="eyebrow">Who We Are</span></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-4xl font-800 uppercase leading-[0.95] text-cream sm:text-5xl lg:text-6xl">
                Your Neighbors,
                <span className="block text-ember">Taking Care Of Home.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-cream/80">
                <p>
                  {BUSINESS.name} is a locally owned outdoor services company right here in {BUSINESS.city}.
                  We started the way a lot of good things do — working hard, showing up, and doing right by
                  the folks who trusted us with their yards.
                </p>
                <p>
                  We're not a national franchise with a call center. When you hire us, you get a local crew
                  that knows Coastal Bend grass, takes pride in clean work, and treats every property like
                  it's our own. Whether it's a weekly mow, a full landscape, a trailer to rent, or a day on
                  the water — we show up ready and we get it done.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9 grid grid-cols-3 gap-4">
                {STATS.map((s) => (
                  <div key={s.l} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
                    <div className="font-display text-2xl font-800 uppercase text-ember sm:text-3xl">{s.n}</div>
                    <div className="mt-1 text-xs leading-tight text-cream/65 sm:text-sm">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
