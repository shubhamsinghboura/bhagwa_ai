/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // <-- Added "src/" here
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        "bhagwa-gradient": "linear-gradient(to right, #ff7e5f, #ff6a00)",
      },
      dropShadow: {
        "bhagwa-glow": "0 4px 20px rgba(255, 106, 0, 0.6)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};