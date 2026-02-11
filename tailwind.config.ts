import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', 'src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      // Нейтральные палитры (Ахроматические цвета)
      black: {
        DEFAULT: '#000000', // lch(0% 0 0) hsl(0, 0%, 0%)
        soft: '#0a0a0a', // lch(4% 0 0) hsl(0, 0%, 4%)
      },
      white: {
        DEFAULT: '#ffffff', // lch(100% 0 0) hsl(0, 0%, 100%)
      },
      gray: {
        DEFAULT: '#d9d9d9', // lch(85% 0 0) hsl(0, 0%, 85%)
        dark: '#303030', // lch(20% 0 0) hsl(0, 0%, 19%)
        darker: '#212121', // lch(13% 0 0) hsl(0, 0%, 13%)
      },

      // Желтая палитра
      yellow: {
        DEFAULT: '#f6d33c', // lch(84% 84 94) hsl(47, 92%, 60%)
        bright: '#ffea00', // lch(96% 100 90) hsl(56, 100%, 50%)
        neon: '#fffb00', // lch(98% 100 90) hsl(58, 100%, 50%)
        gold: '#ffc300', // lch(84% 94 90) hsl(46, 100%, 50%)
      },

      // Синяя палитра
      blue: {
        DEFAULT: '#0280ff', // lch(53% 100 280) hsl(210, 100%, 50%)
        sky: '#00c8ff', // lch(76% 80 260) hsl(190, 100%, 50%)
        cyan: '#03d5ff', // lch(80% 80 260) hsl(190, 100%, 51%)
      },

      // Зеленая палитра
      green: {
        DEFAULT: '#4acb39', // lch(70% 80 140) hsl(114, 58%, 51%)
        neon: '#1fff8b', // lch(88% 70 160) hsl(149, 100%, 69%)
        lime: '#00ff09', // lch(88% 100 130) hsl(122, 100%, 50%)
      },

      // Красная палитра
      red: {
        DEFAULT: '#ff0000', // lch(53% 100 40) hsl(0, 100%, 50%)
        light: '#ff3636', // lch(60% 100 40) hsl(0, 100%, 61%)
        bright: '#ff1f1f', // lch(58% 100 40) hsl(0, 100%, 56%)
      },

      // Фиолетовая палитра
      purple: {
        DEFAULT: '#aa00ff', // lch(40% 100 320) hsl(276, 100%, 50%)
      },

      // Розовая палитра
      pink: {
        DEFAULT: '#ff00e5', // lch(58% 100 340) hsl(305, 100%, 50%)
      },

      // Бирюзовая палитра
      aqua: {
        DEFAULT: '#1fffd2', // lch(90% 40 200) hsl(172, 100%, 69%)
      },
    },

    fontFamily: {
      // Брендовый шрифт берём из next/font через CSS‑переменную.
      // См. Inter в `src/app/layout.tsx`, где задаётся `--font-inter`.
      brand: ['var(--font-inter)', 'system-ui', 'sans-serif'],
    },

    fontSize: {
      xs: ['12px', 'normal'],
      sm: ['15px', 'normal'],
      md: ['17px', 'normal'],
      lg: ['18px', 'normal'],
      xl: ['20px', 'normal'],
      '2xl': ['22px', 'normal'],
      '3xl': ['25px', 'normal'],
      '4xl': ['30px', 'normal'],
      '5xl': ['40px', 'normal'],
      '6xl': ['50px', 'normal'],
    },

    borderRadius: {
      none: '0',
      lg: '20px',
      xl: '25px',
      '2xl': '30px',
      '3xl': '50px',
      full: 'calc(infinity * 1px)',
    },
  },
} satisfies Config
