module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  safelist: [{ pattern: /^grid-cols/, }],
  theme: {
    screens: {
      sm: { max: "639px" },
      // => @media (max-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      zIndex: {
        "-1": "-1",
      },
      fontFamily: {
        almarai: ["Almarai", " sans-serif"],
      },
      colors: {
        "golden-bell": {
          50: "#fef9f3",
          100: "#fcf3e7",
          200: "#f9e2c2",
          300: "#f5d09d",
          400: "#edac54",
          500: "#e5890a",
          600: "#ce7b09",
          700: "#ac6708",
          800: "#895206",
          900: "#704305",
        },
      }
    }
  }
};
