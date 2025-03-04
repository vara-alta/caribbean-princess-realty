import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    textShadow: {
      sm: "0 1px 2px var(--tw-shadow-color)",
      DEFAULT: "0 2px 4px var(--tw-shadow-color)",
      lg: "0 8px 16px var(--tw-shadow-color)",
    },
    fontFamily: {
      monserrat: ["var(--font-monserrat)"],
      ubuntu: ["var(--font-ubuntu)"],
      benedict: ["var(--font-benedict)"],
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme, addUtilities }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
      addUtilities({
        ".backface-visible": {
          "backface-visibility": "visible",
        },
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
      });
    }),
  ],
} satisfies Config;

export default config;
