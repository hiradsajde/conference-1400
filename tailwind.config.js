module.exports = {
  content: [
    "./src/data/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        "DEFAULT": "1rem",
        "sm": "0.5rem",
        "lg": "1rem",
        "xl": "2rem",
        "2xl": "2.5rem",
      },
    },
    borderRadius: {
      "none": "0",
      "DEFAULT": "0.25rem",
      "sm": "0.125rem",
      "md": "0.375rem",
      "lg": "0.5rem",
      "xl": "0.75rem",
      "2xl": "1rem",
      "3xl": "1.25rem",
      "4xl": "1.5rem",
      "5xl": "1.75rem",
      "6xl": "2rem",
      "full": "9999px",
    },
    extend: {
      transitionDuration: {
        DEFAULT: '250ms'
      },
      colors: {
        "primary": "#ff802e",
        "primary-hover": "#e74e00",
        "primary-active": "#b43d00",
        "secondary": "#0CC455",
        "secondary-hover": "#039E41",
        "secondary-active": "#039E41",
      },
      fontFamily: {
        sans: [
          "Vazir",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          "ui-serif",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
        heading: ["Lalezar", "Vazir", "cursive"],
      },
      fontSize: {
        "2rem": "2rem",
      },
      rotate: {
        "135": "135deg",
      },
      animation: {
        heartbeat: 'heartbeat 2s linear infinite',
      },
      keyframes: {
        heartbeat: {
          "0%": { transform: "scale(1)" },
          "7%": { transform: "scale(1.2)" },
          "14%": { transform: "scale(1)" },
          "21%": { transform: "scale(1.2)" },
          "35%": { transform: "scale(1)" },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
