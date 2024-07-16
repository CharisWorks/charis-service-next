import { defineConfig } from "@pandacss/dev";
import { Smokum } from "next/font/google";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          night: { value: "#002D52" },
          star: { value: "#BFA45E" },
        },
      },

      keyframes: {
        spin: {
          "0%": { transform: "rotate(45deg)" },
          "100%": { transform: "rotate(135deg)" },
        },
        fadeOut: {
          "0%": { zIndex: "10", opacity: "1" },
          "100%": { zIndex: "-1", opacity: "0" },
        },
      },
      breakpoints: {
        // item_sm: "10px",
        // item_md: "100px",
        item_lg: "655px",
        item_xl: "1069px",
        sm: "980px",
        md: "1140px",
        lg: "1320px",
        xl: "1480px",
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
