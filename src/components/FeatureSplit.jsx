import { useState, useRef, useCallback } from 'react'
import Icon from './Icons'
import Reveal from './Reveal'
import { BEFORE_AFTER } from '../data'

// Draggable before/after comparison slider.
function BeforeAfter() {
  // Default the handle near the right so visitors mostly see the "before"
  // and are nudged to slide left to reveal the finished result.
  const [pos, setPos] = useState(78)
  const ref = useRef(null)
  const dragging = useRef(false)

  const setFromClientX = useCallback((clientX) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, pct)))
  }, [])

  const onDown = (e) => {
    dragging.current = true
    setFromClientX(e.touches ? e.touches[0].clientX : e.clientX)
  }
  const onMove = (e) => {
    if (!dragging.current) return
    setFromClientX(e.touches ? e.touches[0].clientX : e.clientX)
  }
  const onUp = () => { dragging.current = false }

  return (
    <div
      ref={ref}
      className="relative aspect-[4/5] w-full select-none overflow-hidden rounded-3xl border border-white/10 shadow-lift sm:aspect-[4/3] lg:aspect-[4/5]"
      onMouseDown={onDown}
      onMouseMove={onMove}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onTouchStart={onDown}
      onTouchMove={onMove}
      onTouchEnd={onUp}
    >
      {/* After (base) — full frame */}
      <img src={BEFORE_AFTER.after.src} alt="After ALNR service" className="absolute inset-0 h-full w-full object-cover" draggable="false" />
      <span className="absolute right-4 top-4 z-10 rounded-full bg-forest/90 px-3 py-1 font-display text-xs font-700 uppercase tracking-wide text-cream backdrop-blur">
        {BEFORE_AFTER.after.label}
      </span>

      {/* Before — full frame, revealed left-to-right via clip-path (no resizing) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img
          src={BEFORE_AFTER.before.src}
          alt="Before ALNR service"
          className="absolute inset-0 h-full w-full object-cover"
          draggable="false"
        />
        <span className="absolute left-4 top-4 rounded-full bg-charcoal/85 px-3 py-1 font-display text-xs font-700 uppercase tracking-wide text-cream backdrop-blur">
          {BEFORE_AFTER.before.label}
        </span>
      </div>

      {/* Handle */}
      <div className="absolute inset-y-0 z-10 flex items-center" style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}>
        <div className="h-full w-1 bg-ember/90 shadow-[0_0_18px_rgba(215,122,40,0.7)]" />
        <div className="absolute left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border-2 border-ember bg-ink/90 text-ember shadow-ember">
          <Icon name="arrowRight" className="h-4 w-4 -mr-0.5" />
          <Icon name="arrowRight" className="h-4 w-4 rotate-180 -ml-0.5" />
        </div>
      </div>

      <span className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-ink/70 px-3 py-1 text-xs text-cream/80 backdrop-blur">
        Drag to compare
      </span>
    </div>
  )
}

export default function FeatureSplit() {
  return (
    <section className="relative bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: comparison */}
          <Reveal>
            <BeforeAfter />
          </Reveal>

          {/* Right: copy */}
          <div className="lg:pl-6">
            <Reveal><span className="eyebrow">Pride In Every Property</span></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-4xl font-800 uppercase leading-[0.95] text-cream sm:text-5xl lg:text-6xl">
                Outdoor Services
                <span className="block text-ember">You Can Count On</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-cream/75">
                We sweat the details most crews skip — the clean edges, the hauled-off debris,
                the corners actually trimmed. Whether it's a one-time cleanup or a yard we keep
                looking sharp all year, we take pride in leaving every property better than we found it.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <ul className="mt-8 space-y-4">
                {[
                  'Dependable service that shows up on schedule',
                  'Attention to detail on every cut and corner',
                  'Real before-and-afters from real Coastal Bend yards',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ember/15 text-ember">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    <span className="text-cream/85">{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <a href="#gallery" className="btn-ghost mt-9">See More Of Our Work</a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
