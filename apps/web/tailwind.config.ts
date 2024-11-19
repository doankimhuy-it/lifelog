/** @type {import('tailwindcss').Config} */

import scrollbar from 'tailwind-scrollbar';
import animate from 'tailwindcss-animate';

export default {
  darkMode: ['class', 'class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: 'true',
    },
    screens: {
      'sm': '390px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1600px',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        tertiary: 'rgba(248, 248, 248, 0.5)',
        background: 'hsl(var(--background))',
        surface: {
          '2': '#282828CC',
          '3': '#282828E5',
          'DEFAULT': '#282828B2',
          'stack': '#12121299',
        },
        whitish: {
          '0': 'rgba(255, 255, 255, 0.00)',
          '1': 'rgba(255, 255, 255, 0.01)',
          '2': 'rgba(255, 255, 255, 0.02)',
          '5': 'rgba(255, 255, 255, 0.05)',
          '10': 'rgba(255, 255, 255, 0.10)',
          '15': 'rgba(255, 255, 255, 0.15)',
          '20': 'rgba(255, 255, 255, 0.20)',
          '25': 'rgba(255, 255, 255, 0.25)',
          '30': 'rgba(255, 255, 255, 0.30)',
          '35': 'rgba(255, 255, 255, 0.35)',
          '40': 'rgba(255, 255, 255, 0.40)',
          '45': 'rgba(255, 255, 255, 0.45)',
          '50': 'rgba(255, 255, 255, 0.50)',
          '55': 'rgba(255, 255, 255, 0.55)',
          '60': 'rgba(255, 255, 255, 0.60)',
          '65': 'rgba(255, 255, 255, 0.65)',
          '70': 'rgba(255, 255, 255, 0.70)',
          '75': 'rgba(255, 255, 255, 0.75)',
          '80': 'rgba(255, 255, 255, 0.80)',
          '85': 'rgba(255, 255, 255, 0.85)',
          '90': 'rgba(255, 255, 255, 0.90)',
          '95': 'rgba(255, 255, 255, 0.95)',
          'DEFAULT': '#FFFFFF',
        },
        reddish: {
          '1': 'rgba(248, 248, 248, 0.01)',
          '2': 'rgba(248, 248, 248, 0.02)',
          '3': 'rgba(248, 248, 248, 0.03)',
          '5': 'rgba(248, 248, 248, 0.05)',
          '10': 'rgba(248, 248, 248, 0.10)',
          '15': 'rgba(248, 248, 248, 0.15)',
          '20': 'rgba(248, 248, 248, 0.20)',
          '25': 'rgba(248, 248, 248, 0.25)',
          '30': 'rgba(248, 248, 248, 0.30)',
          '35': 'rgba(248, 248, 248, 0.35)',
          '40': 'rgba(248, 248, 248, 0.40)',
          '45': 'rgba(248, 248, 248, 0.45)',
          '50': 'rgba(248, 248, 248, 0.50)',
          '55': 'rgba(248, 248, 248, 0.55)',
          '60': 'rgba(248, 248, 248, 0.60)',
          '65': 'rgba(248, 248, 248, 0.65)',
          '70': 'rgba(248, 248, 248, 0.70)',
          '75': 'rgba(248, 248, 248, 0.75)',
          '80': 'rgba(248, 248, 248, 0.80)',
          '85': 'rgba(248, 248, 248, 0.85)',
          '90': 'rgba(248, 248, 248, 0.90)',
          '95': 'rgba(248, 248, 248, 0.95)',
          'DEFAULT': '#F8F8F8',
        },
        grayish: {
          '1': 'rgba(40, 40, 40, 0.01)',
          '5': 'rgba(40, 40, 40, 0.05)',
          '10': 'rgba(40, 40, 40, 0.10)',
          '15': 'rgba(40, 40, 40, 0.15)',
          '20': 'rgba(40, 40, 40, 0.20)',
          '25': 'rgba(40, 40, 40, 0.25)',
          '30': 'rgba(40, 40, 40, 0.30)',
          '35': 'rgba(40, 40, 40, 0.35)',
          '40': 'rgba(40, 40, 40, 0.40)',
          '45': 'rgba(40, 40, 40, 0.45)',
          '50': 'rgba(40, 40, 40, 0.50)',
          '55': 'rgba(40, 40, 40, 0.55)',
          '60': 'rgba(40, 40, 40, 0.60)',
          '65': 'rgba(40, 40, 40, 0.65)',
          '70': 'rgba(40, 40, 40, 0.70)',
          '75': 'rgba(40, 40, 40, 0.75)',
          '80': 'rgba(40, 40, 40, 0.80)',
          '85': 'rgba(40, 40, 40, 0.85)',
          '90': 'rgba(40, 40, 40, 0.90)',
          '95': 'rgba(40, 40, 40, 0.95)',
          'DEFAULT': '#282828',
        },
        darkish: {
          '1': 'rgba(18, 18, 18, 0.01)',
          '5': 'rgba(18, 18, 18, 0.05)',
          '10': 'rgba(18, 18, 18, 0.10)',
          '15': 'rgba(18, 18, 18, 0.15)',
          '20': 'rgba(18, 18, 18, 0.20)',
          '25': 'rgba(18, 18, 18, 0.25)',
          '30': 'rgba(18, 18, 18, 0.30)',
          '35': 'rgba(18, 18, 18, 0.35)',
          '40': 'rgba(18, 18, 18, 0.40)',
          '45': 'rgba(18, 18, 18, 0.45)',
          '50': 'rgba(18, 18, 18, 0.50)',
          '55': 'rgba(18, 18, 18, 0.55)',
          '60': 'rgba(18, 18, 18, 0.60)',
          '65': 'rgba(18, 18, 18, 0.65)',
          '70': 'rgba(18, 18, 18, 0.70)',
          '75': 'rgba(18, 18, 18, 0.75)',
          '80': 'rgba(18, 18, 18, 0.80)',
          '85': 'rgba(18, 18, 18, 0.85)',
          '90': 'rgba(18, 18, 18, 0.90)',
          '95': 'rgba(18, 18, 18, 0.95)',
          'DEFAULT': '#121212',
        },
        wine: '#BD3027',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          'DEFAULT': 'hsl(var(--sidebar-background))',
          'foreground': 'hsl(var(--sidebar-foreground))',
          'primary': 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          'accent': 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          'border': 'hsl(var(--sidebar-border))',
          'ring': 'hsl(var(--sidebar-ring))',
        },
      },
      width: {
        '18': '72px',
        '70': '280px',
        '80': '320px',
        '85': '340px',
        '120': '480px',
      },
      backgroundImage: {
        'linear-mask':
          'linear-gradient(180deg, rgba(18, 18, 18, 0.20) 0%, rgba(18, 18, 18, 0.20) 85%, rgba(18, 18, 18, 0.00) 100%)',
        'linear-card':
          'linear-gradient(165deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.40) 30%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0.10) 100%)',
        'linear-red':
          'linear-gradient(0deg, #BD3027 0%, #BD3027 100%, rgba(40, 40, 40, 0.70))',
        'linear-hover':
          'linear-gradient(0deg, rgba(248, 248, 248, 0.10) 0%, rgba(248, 248, 248, 0.10) 100%,rgba(40, 40, 40, 0.70))',
        'linear-object':
          'linear-gradient(180deg, rgba(248, 248, 248, 0.90) 0%, rgba(248, 248, 248, 0.30) 100%)',
        'auth':
          'radial-gradient(at 37% 100%, #3b3bba30 0px, transparent 50%),' +
          'radial-gradient(at 61% 100%, #623d762b 0px, transparent 50%)',
        'modal-backdrop':
          'linear-gradient(0deg, rgba(248, 248, 248, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%),rgba(40, 40, 40, 0.70)',
      },
      boxShadow: {
        DEFAULT:
          '2px 4px 16px 0px rgba(248, 248, 248, 0.06) inset,' +
          '0px 54px 32px -16px rgba(5, 5, 5, 0.05),' +
          '0px 24px 24px -16px rgba(5, 5, 5, 0.09),' +
          '0px 6px 12px 0px rgba(5, 5, 5, 0.10),' +
          '0px 4px 4px -4px rgba(5, 5, 5, 0.10),' +
          '0px 0.5px 1.5px -4px rgba(5, 5, 5, 0.50)',
        card:
          '2px 4px 16px 0px rgba(248, 248, 248, 0.06) inset,' +
          '0px 24px 24px -16px rgba(5, 5, 5, 0.09),' +
          '0px 6px 13px 0px rgba(5, 5, 5, 0.10),' +
          '0px 6px 4px -4px rgba(5, 5, 5, 0.10),' +
          '0px 5px 1.5px -4px rgba(5, 5, 5, 0.25)',
        btn: '2px 4px 16px 0 rgba(248, 248, 248, 0.06) inset',
        toggle:
          '0px 4px 4px 0px rgba(255, 255, 255, 0.05) inset,' +
          '0px 8px 16px - 4px rgba(18, 18, 18, 0.20)',
        dropup:
          '0px 24px 32px -12px rgba(18, 18, 18, 0.10),' +
          '2px 4px 16px 0px rgba(248, 248, 248, 0.06) inset',
      },
      backdropBlur: {
        '16': '16px',
        '50': '50px',
      },
      zIndex: {
        '1': '1',
        '9': '9',
        '99': '99',
      },
      borderRadius: {
        button: '2rem',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      borderWidth: {
        '1.5': '1.5px',
      },
    },
  },
  plugins: [scrollbar, animate],
};
