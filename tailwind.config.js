/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  daisyui: {
    themes: ["winter", "night"]
  },
  theme: {
    extend: {
      fontFamily: {
        plus: "'M PLUS Rounded 1c', sans-serif",
        mono: "'DM Mono', monospace"
      }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")]
};

