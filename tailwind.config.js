/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      boxShadow: {
        'xl': '5px 5px 5px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        'LetterColor' : '#073B4C', 
        'primaryColor' : '#EF476F', 
        'secondaryColor' : '#FFCF5E',
        'tertiaryColor' : '#06D6A0', 
        'quarteryColor' : '#118AB2',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

