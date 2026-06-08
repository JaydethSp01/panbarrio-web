import type { Config } from 'tailwindcss';

const config: Config = { darkMode: "class",
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: { colors: { brand: { DEFAULT: "#d97706", dark: "#9c5504" }, },}
  },
  plugins: []
};

export default config;