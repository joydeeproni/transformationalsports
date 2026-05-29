/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-klima)', 'Klima', 'sans-serif'],
      },
      fontSize: {
        '2xs':  ['11px', { lineHeight: '1.5' }],
        'xs':   ['13px', { lineHeight: '1.5' }],
        'sm':   ['14px', { lineHeight: '1.6' }],
        'base': ['16px', { lineHeight: '1.6' }],
        'md':   ['20px', { lineHeight: '1.5' }],
        'lg':   ['24px', { lineHeight: '1.4' }],
        'xl':   ['28px', { lineHeight: '1.3' }],
        '2xl':  ['36px', { lineHeight: '1.2' }],
        '3xl':  ['40px', { lineHeight: '1.2' }],
        '4xl':  ['48px', { lineHeight: '1.1' }],
        '5xl':  ['56px', { lineHeight: '1.1' }],
      },
      colors: {
        amber: {
          DEFAULT: '#FFB23E',
          light: '#FFD89F',
          warm: '#ffba60',
          dark: '#D58816',
          orange: '#ffa40d',
        },
        cream: '#FFF7EB',
        brown: '#534B38',
        'dark-blue-gray': '#313e47',
        'near-black': '#1f1f1f',
        'gray-bg': '#f7f7f7',
        'gray-subtle': 'rgba(0,0,0,0.03)',
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '8px',
        md: '8px',
        lg: '8px',
      },
    },
  },
  plugins: [],
};
