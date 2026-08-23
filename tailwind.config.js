/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#14171F",
          soft: "#2A2E3A",
        },
        cream: {
          DEFAULT: "#F4F2ED",
          card: "#FFFFFF",
          line: "#E7E2D6",
        },
        brand: {
          DEFAULT: "#545CFF",
          soft: "#E3E4FF",
          dark: "#3538C7",
        },
        mint: { DEFAULT: "#1FA97C", soft: "#DCF3EA" },
        amber: { DEFAULT: "#C87F1E", soft: "#FBEBD2" },
        rose: { DEFAULT: "#D64B62", soft: "#FBE1E4" },
        slate: {
          muted: "#8A8F98",
        },
      },
      fontFamily: {
        serif: ["'Source Serif 4'", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      borderRadius: {
        xl2: "14px",
      },
    },
  },
  plugins: [],
};
