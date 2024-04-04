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
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

