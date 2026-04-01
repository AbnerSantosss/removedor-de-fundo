/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: '#05050A',
          dark: '#0A0A12',
          card: 'rgba(20, 20, 30, 0.7)',
          primary: '#00F0FF',
          secondary: '#FF003C',
          accent: '#8A2BE2',
        }
      },
      dropShadow: {
        'glow-primary': '0 0 10px rgba(0, 240, 255, 0.5)',
        'glow-secondary': '0 0 10px rgba(255, 0, 60, 0.5)',
        'glow-accent': '0 0 10px rgba(138, 43, 226, 0.5)',
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(0, 240, 255, 0.3)',
        'glow-inner-primary': 'inset 0 0 20px rgba(0, 240, 255, 0.1)',
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(145deg, rgba(0,240,255,0.05) 0%, rgba(138,43,226,0.05) 100%)',
      }
    },
  },
  plugins: [],
}
