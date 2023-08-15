import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      fontSize: {
        base: "16px",
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      colors: {
        primary: {
          Red: "hsl(0, 100%, 74%)",
          Green: "hsl(154, 59%, 51%)",
        },
        accent: {
          Blue: "hsl(248, 32%, 49%)",
        },
        Neutral: {
          Dark_Blue: " hsl(249, 10%, 26%) ",
          Grayish_Blue: "hsl(246, 25%, 77%)}",
        },
      },
    },
    plugins: [],
  },
};

export default config;
