import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // <– this is critical!
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config
