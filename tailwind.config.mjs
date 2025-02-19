/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: "#064C4A", 
        verdeoscuro: "#053C3A",
        amarillo : "#E9A41C",
        blanco : "#FAFAFA"
      },
    },
  },
  plugins: [],
};
