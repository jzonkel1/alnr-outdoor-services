// Inline stroke icons — lightweight, no dependency.
// Usage: <Icon name="mower" className="w-7 h-7" />

const PATHS = {
  mower: (
    <>
      <path d="M3 17h7l2-6h7" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="19" r="2" />
      <path d="M12 11V7h5" />
      <path d="M21 11v4a2 2 0 0 1-2 2h-1" />
    </>
  ),
  shrub: (
    <>
      <path d="M12 21v-6" />
      <path d="M12 15c-3.5 0-6-2.2-6-5a4.5 4.5 0 0 1 4-4.5A4 4 0 0 1 12 3a4 4 0 0 1 2 2.5A4.5 4.5 0 0 1 18 10c0 2.8-2.5 5-6 5Z" />
      <path d="M9 21h6" />
    </>
  ),
  trailer: (
    <>
      <rect x="2" y="7" width="14" height="9" rx="1" />
      <path d="M16 11h4l1 3v2h-2" />
      <circle cx="8" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
      <path d="M2 16h4M10 16h3" />
    </>
  ),
  leaf: (
    <>
      <path d="M4 20c0-9 7-15 16-15 0 9-6 15-15 15a8 8 0 0 1-1 0Z" />
      <path d="M5 19c4-4 8-7 13-9" />
    </>
  ),
  tree: (
    <>
      <path d="M12 22v-5" />
      <path d="M12 17 7 14h3l-4-3h3L8 8h2L8 5h8l-2 3h2l-4 3h3l-4 3h3l-5 3Z" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  chat: (
    <>
      <path d="M21 11.5a8.4 8.4 0 0 1-12 7.6L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5Z" />
    </>
  ),
  medal: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="m9 14-2 7 5-3 5 3-2-7" />
      <path d="m12 6 1 2 2 .3-1.5 1.5.4 2-1.9-1-1.9 1 .4-2L9 8.3 11 8Z" />
    </>
  ),
  tag: (
    <>
      <path d="M3 11V5a2 2 0 0 1 2-2h6l9 9-8 8-9-9Z" />
      <circle cx="8" cy="8" r="1.4" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-5.7-7-11a7 7 0 0 1 14 0c0 5.3-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  phone: (
    <>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  fish: (
    <>
      <path d="M3 12c3-5 9-7 15-6 0 0-1 6-1 6s1 6 1 6c-6 1-12-1-15-6Z" />
      <path d="M18 6c2-1 3-2 3-2s0 2-1 3M18 18c2 1 3 2 3 2s0-2-1-3" />
      <circle cx="7" cy="11" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" strokeWidth="3" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowDown: <path d="M12 5v14M6 13l6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  star: <path d="m12 3 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 18l-5.9 3 1.2-6.5L2.5 9.9 9 9Z" />,
  cross: <path d="M12 3v18M7 8h10" />,
}

export default function Icon({ name, className = 'w-6 h-6', strokeWidth = 1.9 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name] || PATHS.leaf}
    </svg>
  )
}
