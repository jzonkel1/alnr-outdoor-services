import Icon from './Icons'
import Reveal from './Reveal'
import { WHY } from '../data'

export default function WhyChooseUs() {
  return (
    <section className="relative bg-gradient-to-b from-forest-deep to-ink py-24 lg:py-32">
      <div className="absolute inset-0 topo opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Left: headline */}
          <div>
            <Reveal><span className="eyebrow">Why Homeowners Pick Us</span></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-4xl font-800 uppercase leading-[0.95] text-cream sm:text-5xl lg:text-6xl">
                Built on Hard Work.
                <span className="block text-ember">Driven by Integrity.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/75">
                We're a local crew that treats your property like our own. No corporate runaround —
                just honest work, fair pricing, and a team that shows up.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <a href="#contact" className="btn-ember mt-8 text-base">
                Request Your Free Estimate <Icon name="arrowRight" className="h-5 w-5" />
              </a>
            </Reveal>
          </div>

          {/* Right: cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={(i % 2) * 0.06 + Math.floor(i / 2) * 0.04}>
                <div className="group flex h-full gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-ember/40 hover:bg-white/[0.07]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ember/15 text-ember transition-colors duration-300 group-hover:bg-ember group-hover:text-ink">
                    <Icon name={w.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-700 uppercase tracking-wide text-cream">{w.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-cream/65">{w.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
