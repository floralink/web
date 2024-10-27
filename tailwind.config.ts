import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        "green-leaf": {
          "50": "#f3f9ec",
          "100": "#e3f2d5",
          "200": "#cae6b0",
          "300": "#a9d482",
          "400": "#89c15a",
          "500": "#6ba63c",
          "600": "#52842c",
          "700": "#456e29",
          "800": "#365123",
          "900": "#2f4621",
          "950": "#16250e",
        },
      },
    },
  },
};
