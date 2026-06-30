import Icon from './Icons'
import Reveal from './Reveal'
import { BUSINESS, asset } from '../data'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-28">
      {/* photo band */}
      <div className="absolute inset-0">
        <img src={asset('/work/xeriscape-stone-home.jpg')} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-ink/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/70 to-transparent" />
        <div className="absolute inset-0 topo opacity-40" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-5xl font-900 uppercase leading-[0.9] text-cream sm:text-6xl lg:text-7xl">
            Ready For A Yard
            <span className="block text-ember">You'll Be Proud Of?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-cream/80 sm:text-xl">
            Free estimates, honest pricing, and a local crew that actually shows up. Let's get your
            property looking its best.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" className="btn-ember text-base">
              Request Your Free Estimate <Icon name="arrowRight" className="h-5 w-5" />
            </a>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-ghost text-base">
              <Icon name="phone" className="h-5 w-5" /> {BUSINESS.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
