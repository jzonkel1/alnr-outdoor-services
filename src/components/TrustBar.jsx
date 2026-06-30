import Icon from './Icons'
import { TRUST } from '../data'

export default function TrustBar() {
  return (
    <section className="relative z-10 border-y border-white/10 bg-charcoal-2">
      <div className="mx-auto max-w-7xl px-5 py-5 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-12">
          {TRUST.map((t) => (
            <li key={t} className="flex items-center gap-2.5">
              <Icon name="check" className="h-4 w-4 text-ember" />
              <span className="font-display text-sm font-700 uppercase tracking-wide text-cream/80 sm:text-base">
                {t}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
