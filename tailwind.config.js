/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00ffff',
          pink: '#ff00ff',
          green: '#00ff00',
          purple: '#9d00ff',
        },
        'neon-cyan': '#00ffff',
        'neon-pink': '#ff00ff',
        'neon-green': '#00ff00',
        'neon-purple': '#9d00ff',
        dark: {
          bg: '#0e0e0e',
          card: '#1a1a1a',
          border: '#2a2a2a',
        },
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '20px 20px',
      },
    },
  },
  plugins: [],
};