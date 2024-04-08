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
        'zinc-800': '#333030',
        'rose-500': '#DA5162',
        'white': '#FFFFFF',
      },
      fontFamily:{
        poppinsBlack: ["Poppins-Black", "sans-serif"],
        poppinsExtraBold: ["Poppins-ExtraBold", "sans-serif"],
        poppinsBold: ["Poppins-Bold", "sans-serif"],
        poppinsSemiBold: ["Poppins-SemiBold", "sans-serif"],
        poppinsMedium: ["Poppins-Medium", "sans-serif"],
        poppinsRegular: ["Poppins-Regular", "sans-serif"],
        poppinsMediumItalic: ["Poppins-MediumItalic", "sans-serif"],
        poppinsSemiBoldItalic: ["Poppins-SemiBoldItalic", "sans-serif"],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

