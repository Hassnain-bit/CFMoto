/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        f_11_l_14: [
          "11px",
          {
            lineHeight: "14px",
          },
        ],

        f_12_l_15: [
          "12px",
          {
            lineHeight: "15px",
          },
        ],

        f_14_l_18: [
          "14px",
          {
            lineHeight: "18px",
          },
        ],

        f_15_l_19: [
          "15px",
          {
            lineHeight: "19px",
          },
        ],

        f_16_l_20: [
          "16px",
          {
            lineHeight: "20px",
          },
        ],

        f_18_l_23: [
          "18px",
          {
            lineHeight: "23px",
          },
        ],

        f_19_l_24: [
          "19px",
          {
            lineHeight: "24px",
          },
        ],

        f_20_l_25: [
          "20px",
          {
            lineHeight: "25px",
          },
        ],

        f_22_l_28: [
          "22px",
          {
            lineHeight: "28px",
          },
        ],

        f_24_l_30: [
          "24px",
          {
            lineHeight: "30px",
          },
        ],

        f_27_l_34: [
          "27px",
          {
            lineHeight: "34px",
          },
        ],

        f_33_l_42: [
          "33px",
          {
            lineHeight: "42px",
          },
        ],
      },

      fontFamily: {
        supremeRegular: "Supreme-Regular, sans-serif",
        supremeMedium: "Supreme-Medium, sans-serif",
        supremeBold: "Supreme-Bold, sans-serif",
      },

      colors: {
        lightWhite: "#ffffff8c",
        offWhite: "#fafafa73",
        black: {
          100: "#000000",
          // Sidebar bg color
          200: "#181717",
          // Header bg color
          300: "#0F0F0F",
          // History Odd bg color
          400: "#101010",
          // History Even bg color
          500: "#181818",
        },
      },

      maxWidth: {
        "screen-2xl": "1440px",
      },

      screens: {
        md: "798px",
        // => @media (min-width: 640px) { ... }

        // laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        // desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
