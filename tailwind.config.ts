import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./containers/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      neutral: {
        0: "#ffffff",
        50: "#B2C1C8",
        100: "#1A2531",
        150: "#5D6770",
        200: "#304156",
        300: "#141D27",
        400: "#1C2936",
        500: "#263440",
        600: "#19232D",
        700: "rgba(14,19,32,0.3)",
        800: "#121B24",
        900: "#000000",
        "black-rgba": "rgba(0, 0, 0, 0.5)",
      },
      purple: {
        50: "#F3F0FF",
        100: "#E5DEFF",
        200: "#AC97FF",
        300: "#8364FF",
        400: "#5B35F3",
        500: "#4405CA",
        600: "#2D1169",
        700: "#1E014F",
        "gradient-1": "rgba(91, 53, 243, 0.8)",
      },
      blue: {
        100: "#D9EDFF",
        200: "#95CCFF",
        300: "#3EA7FF",
        400: "#2887DF",
        500: "#0065C2",
        600: "#003F7A",
        700: "#007AFF",
      },
      teal: {
        100: "#E6FAFF",
        200: "#B7F2FF",
        300: "#6BE4FF",
        400: "#42C9E7",
        500: "#119EBD",
        600: "#00768F",
      },
      red: {
        100: "#FFDFDF",
        200: "#FFB0B0",
        300: "#FF8383",
        400: "#FF5050",
        500: "#F2262E",
      },
      yellow: {
        100: "#FFF9BE",
        200: "#FFF384",
        300: "#FFEA28",
        400: "#F0D800",
        500: "#DBB803",
      },
      green: {
        100: "#C7F283",
        200: "#E8F9FF0D",
        300: "#D2FA47",
        400: "#BFEE1D",
        500: "#A1DA01",
        600: "#83D202",
      },
      gray: {
        100: "#F4F4F4",
        200: "#D8D8D8",
        300: "#B1B0B0",
        400: "#808080",
        500: "#3F3F3F",
        600: "#2B2B2B",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
