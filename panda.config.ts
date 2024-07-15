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
      breakpoints: {
        sm: "500px",
        lg: "1210px",
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
