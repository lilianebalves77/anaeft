import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { ink: '#3E2723', sun: '#E8C00E', honey: '#FFF1B3', cream: '#FAF8F1' },
    fontFamily: { display: ['var(--font-display)', 'Georgia', 'serif'], sans: ['var(--font-sans)', 'Arial', 'sans-serif'] },
    boxShadow: { soft: '0 18px 50px rgba(62,39,35,.10)', lift: '0 24px 70px rgba(62,39,35,.14)' },
    borderRadius: { '4xl': '2rem' }
  }},
  plugins: []
}
export default config
