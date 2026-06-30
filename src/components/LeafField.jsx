// Subtle drifting leaf/grass particles for the hero. CSS-animation driven,
// deterministic positions so it stays calm — "no excessive motion".
const LEAVES = [
  { left: '8%',  size: 14, dur: 17, delay: 0,   hue: '#3F6A43', tilt: 18 },
  { left: '20%', size: 9,  dur: 22, delay: 5,   hue: '#556B2F', tilt: -20 },
  { left: '34%', size: 12, dur: 19, delay: 9,   hue: '#355C3A', tilt: 40 },
  { left: '52%', size: 8,  dur: 25, delay: 2,   hue: '#6B7E3A', tilt: -10 },
  { left: '66%', size: 13, dur: 18, delay: 12,  hue: '#3F6A43', tilt: 25 },
  { left: '78%', size: 10, dur: 21, delay: 7,   hue: '#556B2F', tilt: -30 },
  { left: '90%', size: 11, dur: 24, delay: 14,  hue: '#355C3A', tilt: 15 },
]

export default function LeafField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {LEAVES.map((l, i) => (
        <svg
          key={i}
          className="absolute -top-10 animate-float-leaf"
          style={{
            left: l.left,
            width: l.size,
            height: l.size,
            animationDuration: `${l.dur}s`,
            animationDelay: `${l.delay}s`,
            color: l.hue,
            transform: `rotate(${l.tilt}deg)`,
          }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4 20c0-9 7-15 16-15 0 9-6 15-15 15a8 8 0 0 1-1 0Z" opacity="0.85" />
        </svg>
      ))}
    </div>
  )
}
