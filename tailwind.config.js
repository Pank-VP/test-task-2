/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'light-grey': '#F0F0F0',
        'grey': '#999999',
        'dark-grey': '#666666',
        'error': '#D74D4D',
        'success': '#46A515',
        'light-blue': '#5A8CF1',
        'blue': '#316FEE',
        'text-color': '#000000',
      },
      fontSize: {
        sm: '14px',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '20':'20px'
      },
      spacing: {
        '7px': '7px',
      },
      boxShadow: {
        'overlay': '-1px 3px 11px 0px rgba(0, 0, 0, 0.08)',
      },
      screens: {
        xs: '340px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        'desktop': '1440px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      gridTemplateColumns: {
        '14': 'repeat(14, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}

