import Icon from './Icons'
import { BUSINESS, NAV_LINKS, SERVICES, SERVICE_AREAS } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-white/10 bg-ink">
      <div className="absolute inset-0 topo opacity-20" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={BUSINESS.logo} alt={BUSINESS.name} className="h-16 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/65">
              {BUSINESS.fullName}. Locally owned lawn, landscaping & outdoor services across {BUSINESS.region}.
            </p>
            <p className="mt-4 font-display text-sm font-700 uppercase tracking-wide text-ember">
              {BUSINESS.tagline}
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-display text-lg font-700 uppercase tracking-wide text-cream">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-cream/65 transition-colors hover:text-ember">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-700 uppercase tracking-wide text-cream">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <a href="#services" className="text-sm text-cream/65 transition-colors hover:text-ember">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-700 uppercase tracking-wide text-cream">Get In Touch</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-2.5 text-sm text-cream/80 transition-colors hover:text-ember">
                  <Icon name="phone" className="h-4 w-4 text-ember" /> {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2.5 break-all text-sm text-cream/80 transition-colors hover:text-ember">
                  <Icon name="mail" className="h-4 w-4 text-ember" /> {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-cream/80">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                <span>{SERVICE_AREAS.slice(0, 5).join(' · ')} & more</span>
              </li>
            </ul>
            <a href="#contact" className="btn-ember mt-5 text-sm">Free Estimate</a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-cream/50">© {year} {BUSINESS.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-xs text-cream/50">
            Built by <a href="#" className="font-600 text-cream/70 hover:text-ember">Zonkel Media</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
