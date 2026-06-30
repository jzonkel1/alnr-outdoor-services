/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ALNR brand — pulled from the logo & business card
        forest:    '#355C3A',
        'forest-deep': '#243F28',
        olive:     '#556B2F',
        charcoal:  '#1C1C1C',
        'charcoal-2': '#252521',
        ink:       '#13160F',
        ember:     '#D77A28',  // burnt orange
        'ember-2': '#B85F17',
        flame:     '#F0A94A',  // glow highlight
        sand:      '#E9E2D2',
        cream:     '#F7F6F2',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'system-ui', 'sans-serif'],
        body:    ['Barlow', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        400: '400', 500: '500', 600: '600', 700: '700', 800: '800', 900: '900',
      },
      boxShadow: {
        card:   '0 18px 50px -12px rgba(0,0,0,0.45)',
        ember:  '0 14px 40px -8px rgba(215,122,40,0.45)',
        lift:   '0 28px 70px -20px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        'float-leaf': {
          '0%':   { transform: 'translateY(-5%) translateX(0) rotate(0deg)', opacity: '0' },
          '10%':  { opacity: '0.7' },
          '90%':  { opacity: '0.7' },
          '100%': { transform: 'translateY(115vh) translateX(40px) rotate(220deg)', opacity: '0' },
        },
        'sway': {
          '0%,100%': { transform: 'rotate(-2.5deg)' },
          '50%':     { transform: 'rotate(2.5deg)' },
        },
        'wave': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'shine': {
          '0%,100%': { opacity: '0.35' },
          '50%':     { opacity: '0.9' },
        },
      },
      animation: {
        'float-leaf': 'float-leaf linear infinite',
        'sway': 'sway 6s ease-in-out infinite',
        'wave-slow': 'wave 18s linear infinite',
        'wave-fast': 'wave 11s linear infinite',
        'shine': 'shine 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
