/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0070f3",
        secondary: "#1a1a1a",
        accent: "#3498db",
        success: "#2c7a7b",
        light: "#f7fafc",
        dark: "#2d3748",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'custom': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'hover': '0 15px 35px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee-left': 'marqueeLeft 60s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
        'marquee-right': 'marqueeRight 60s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
      },
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.3)',
        'md': '0 2px 4px rgba(0, 0, 0, 0.3)',
        'lg': '0 2px 6px rgba(0, 0, 0, 0.5)',
        'xl': '0 3px 8px rgba(0, 0, 0, 0.7)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        marqueeLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.pause-animation': {
          animationPlayState: 'paused',
        },
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-md': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
        },
        '.text-shadow-lg': {
          textShadow: '0 2px 6px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-xl': {
          textShadow: '0 3px 8px rgba(0, 0, 0, 0.7)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} 