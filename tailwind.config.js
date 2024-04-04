/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
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

