/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        abril: ['"Abril Fatface"', 'cursive'],
        alice: ['"Alice"', 'serif'],
        magnolia: ['"Magnolia Script"', 'cursive'],
        anonymous: ['"Anonymous Pro"', 'monospace'],
        alfa: ['"Alfa Slab One"', 'cursive'],
      },
      keyframes: {
      gradient: {
        "0%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
        "100%": { backgroundPosition: "0% 50%" },
      },
    },
    animation: {
      gradient: "gradient 4s ease infinite",
    },
    },
  },
  plugins: [],
};
