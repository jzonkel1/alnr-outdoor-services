import { useState, useEffect } from 'react'
import Icon from './Icons'
import { BUSINESS } from '../data'

// Always-present call / estimate bar on mobile — the highest-intent conversion path.
export default function MobileCTABar() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 bg-ink/95 p-3 backdrop-blur-md transition-transform duration-300 lg:hidden ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center justify-center gap-2 rounded-full border-2 border-cream/30 py-3 font-display font-700 uppercase tracking-wide text-cream">
        <Icon name="phone" className="h-5 w-5 text-ember" /> Call
      </a>
      <a href="#contact" className="flex items-center justify-center gap-2 rounded-full bg-ember py-3 font-display font-700 uppercase tracking-wide text-ink">
        <Icon name="leaf" className="h-5 w-5" /> Free Estimate
      </a>
    </div>
  )
}
