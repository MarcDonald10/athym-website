/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#0578BE',
          100: '#F2F2F2',
          200: '#0B8CBF',
          300: '#498BA6',
          400: '#F2DA91',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        secondary: {
          50: '#F8E493',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#F8E493',
        },
        accent: {
          50: '#fff7ed',
          100: '#F8E493 ',
          200: '#FFFF00',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide': 'slide 9s infinite',
        'fade-slide-up': 'fadeSlideUp 1s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite ease-in-out',
       'shooting-star': 'shootingStar 5s infinite linear',
        'water-ripple': 'waterRipple 1.2s ease-in-out',
        'fade-slide-up': 'fadeSlideUp 1s ease-out forwards',
      },
      keyframes: {
        shootingStar: {
          '0%': { transform: 'translateX(-100vw)', opacity: '1' },
          '20%': { opacity: '1' },
          '100%': { transform: 'translateX(100vw)', opacity: '0' },
        },
        waterRipple: {
          '0%': { transform: 'translateY(0) scale(1) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) scale(1.08) rotate(3deg)' },
          '100%': { transform: 'translateY(0) scale(1) rotate(0deg)' },
        },
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeSlideUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
         slide: {
          '0%': { opacity: 0, transform: 'translateX(0)' },
          '20%': { opacity: 0.1, transform: 'translateX(0)' },
          '33%': { opacity: 0.1, transform: 'translateX(0)' },
          '53%': { opacity: 0, transform: 'translateX(100%)' },
          '100%': { opacity: 0, transform: 'translateX(100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};