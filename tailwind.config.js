/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 950: '#04090F', 900: '#080F1C', 800: '#0B1525', 700: '#111E30' },
        cream: { 50: '#FDFCF9', 100: '#F8F5EF', 200: '#EDE8DF' },
        brand: { green: '#0EA472', 'green-hover': '#0B8A5F', amber: '#E8970A', muted: '#8A9AB4' },
      },
      fontFamily: { display: ['var(--font-display)', 'Georgia', 'serif'], body: ['var(--font-body)', 'system-ui', 'sans-serif'] },
      fontSize: {
        'display-2xl': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
        'display-xl': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.25rem, 2vw, 1.875rem)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
      },
      spacing: { section: '5rem', 'section-lg': '7rem' },
      borderRadius: { card: '0.75rem', pill: '9999px' },
      boxShadow: { card: '0 1px 3px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.3)', glow: '0 0 40px rgba(14,164,114,0.15)', 'glow-lg': '0 0 80px rgba(14,164,114,0.2)' },
      backgroundImage: { 'grid-dark': 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)' },
      backgroundSize: { grid: '40px 40px' },
      animation: { 'fade-up': 'fadeUp 0.6s ease forwards', 'fade-in': 'fadeIn 0.4s ease forwards', 'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite' },
      keyframes: { fadeUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } }, fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } } },
    },
  },
  plugins: [],
}
