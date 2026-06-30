// ============================================================
//  ALNR Outdoor Services — single source of truth for content.
//  Edit copy, services, photos, and contact details here.
// ============================================================

// Prefix public asset paths with Vite's base URL so images resolve
// correctly on GitHub Pages project subpaths as well as at a domain root.
export const asset = (p) => import.meta.env.BASE_URL + String(p).replace(/^\/+/, '')

export const BUSINESS = {
  name: 'ALNR Outdoor Services',
  fullName: 'A Lil Nervous Resources Outdoor Services',
  tagline: 'No Job Too Big, No Fish Too Small.',
  phone: '361-391-6733',
  phoneRaw: '+13613916733',
  email: 'alnr.services@gmail.com',
  city: 'Corpus Christi',
  region: 'Corpus Christi & the Coastal Bend',
  logo: asset('/logo.png'),
}

// Navigation links (anchor IDs match the sections)
export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

// Trust bar pills under the hero
export const TRUST = [
  'Locally Owned',
  'Corpus Christi Based',
  'Free Estimates',
  'Reliable, On-Time Service',
  'Residential Properties',
]

// ---- Services ----
// icon keys map to the inline SVG set in components/Icons.jsx
export const SERVICES = [
  {
    icon: 'mower',
    title: 'Lawn Maintenance',
    text: 'Clean, consistent mowing, edging, trimming and blowing that keeps your yard looking sharp week after week — no chasing, no excuses.',
  },
  {
    icon: 'shrub',
    title: 'Landscaping',
    text: 'Rock beds, mulch, edging, plant installs and curb-appeal upgrades built to handle the South Texas sun and stand out on the block.',
  },
  {
    icon: 'trailer',
    title: 'Trailer Rentals',
    text: 'Need to haul it yourself? Dependable enclosed and utility trailer rentals for moves, projects, and hauling — ready when you are.',
  },
  {
    icon: 'leaf',
    title: 'Yard Cleanup',
    text: 'Overgrown, storm-hit, or just let-go? We clear brush, leaves, weeds and debris and haul it off — a fresh start for your property.',
  },
  {
    icon: 'tree',
    title: 'General Outdoor Services',
    text: "From odd jobs to ongoing upkeep, if it's outside and needs doing, we'll take care of it. No job too big, no job too small.",
  },
  {
    icon: 'calendar',
    title: 'Seasonal Property Maintenance',
    text: 'Year-round plans that keep your property dialed in through every Coastal Bend season — set it once and stop worrying about it.',
  },
]

// ---- Why choose us ----
export const WHY = [
  { icon: 'clock',   title: 'Reliable',              text: 'We show up when we say we will. Dependability is the whole job.' },
  { icon: 'chat',    title: 'Honest Communication',  text: "Straight answers, clear pricing, no runaround. You'll always know what's happening." },
  { icon: 'medal',   title: 'Quality Work',          text: 'We treat every yard like it’s our own and don’t leave until it’s right.' },
  { icon: 'tag',     title: 'Affordable Pricing',    text: 'Fair, upfront rates and free estimates — solid work that fits a real budget.' },
  { icon: 'pin',     title: 'Local Knowledge',       text: 'Born-and-raised in the Coastal Bend. We know the grass, the soil, and the sun here.' },
  { icon: 'calendar',title: 'Dependable Scheduling', text: 'Set a schedule and we keep it — your property stays handled all year long.' },
]

// ---- Gallery (real ALNR job photos in /public/work) ----
export const GALLERY = [
  { src: asset('/work/hero-curb-appeal.jpg'),    alt: 'Fresh xeriscape rock bed and trimmed lawn at a Corpus Christi stone home', span: 'tall' },
  { src: asset('/work/xeriscape-stone-home.jpg'),alt: 'Clean agave and rock landscaping with paver edging, Corpus Christi', span: 'wide' },
  { src: asset('/work/shrub-detail.jpg'),        alt: 'Detailed shrub and succulent bed against a stone facade', span: 'normal' },
  { src: asset('/work/rock-bed-tree.jpg'),       alt: 'Rock bed with young tree and paver border, residential curb appeal', span: 'normal' },
  { src: asset('/work/cleanup-after.jpg'),       alt: 'Freshly cleaned-up front yard and walkway after ALNR service', span: 'tall' },
  { src: asset('/work/trailer-rental.jpg'),      alt: 'ALNR enclosed trailer ready for hauling and rentals', span: 'wide' },
  { src: asset('/work/walkway-edging.jpg'),      alt: 'Crisp sidewalk edging along a tree-lined residential street', span: 'normal' },
  { src: asset('/work/lawn-cleanup.jpg'),        alt: 'Cleared and tidied lawn along a Corpus Christi sidewalk', span: 'normal' },
]

// ---- Before / After pair ----
export const BEFORE_AFTER = {
  before: { src: asset('/work/cleanup-before.jpg'), label: 'Before' },
  after:  { src: asset('/work/cleanup-after.jpg'),  label: 'After' },
}

// ---- Service area ----
export const SERVICE_AREAS = [
  'Corpus Christi',
  'Flour Bluff',
  'Calallen',
  'Portland',
  'Robstown',
  'Annaville',
  'North Padre',
  'Surrounding Coastal Bend',
]

// ---- Reviews ----
// PLACEHOLDER content — swap these for real Google reviews once they come in.
// `REVIEWS_ARE_PLACEHOLDER` shows an honest "sample" note until you set it false.
export const REVIEWS_ARE_PLACEHOLDER = true
export const REVIEWS = [
  { name: 'Sample Review', location: 'Flour Bluff', rating: 5, text: 'Showed up on time, cleaned up everything, and the yard looks better than it has in years. Will be using them every week.' },
  { name: 'Sample Review', location: 'Calallen', rating: 5, text: 'Honest pricing and they did exactly what they said they would. Hauled off all the brush and left the place spotless.' },
  { name: 'Sample Review', location: 'Corpus Christi', rating: 5, text: 'Reworked our whole front bed with rock and new plants. Neighbors keep asking who did it. Highly recommend.' },
]

// ---- Contact form: service options ----
export const SERVICE_OPTIONS = [
  'Lawn Maintenance',
  'Landscaping',
  'Trailer Rental',
  'Yard Cleanup',
  'Seasonal Maintenance',
  'Fishing Guide Trip',
  'Something Else',
]
