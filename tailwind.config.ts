import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'Montserrat',
      },
      keyframes: {
        swipe: {
          '0%': { transform: 'translate(0)' },
          '100%': { transform: 'translate(-100%)' },
        },
      },
      animation: {
        swipe: 'swipe var(--speed) linear infinite backwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
