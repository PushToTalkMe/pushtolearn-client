import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  content: ["*./src/**/*.{ts,tsx}"],
  theme: {},
  plugins: [],
} satisfies Config;

export default config;
