/**
 * Tailwind config generated from the Figma "Design System (Community)" file.
 * Source: https://www.figma.com/design/dPwETv2wkZwfdboyw8k7yN/Design-System--Community-
 *
 * Tokens pulled directly from Figma variables:
 *  - Colors node (id 47:1045)
 *  - Typography node (id 27:606)
 *
 * Merge the `theme.extend` block below into your own tailwind.config, or use
 * this file as-is if this is a fresh project.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./.storybook/**/*.{js,jsx,ts,tsx}"],
  // Dark mode is class-based: consumers (and Storybook's theme toggle) enable
  // it by putting a `dark` class on <html> or any ancestor element.
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#0671E0", // Primary/M_Blue
          navy: "#0663C7", // Primary/Navy (hover)
          dark: "#0053AD", // Primary/D_Blue (active/click)
          azure: "#4196F0", // Primary/Azure
          sky: "#DBEDFF", // Primary/Sky
          light: "#EEF5FC", // Primary/L_Blue (hover surface / disabled bg)
        },
        success: {
          DEFAULT: "#009262", // Success/M_Green
          dark: "#115B43", // Success/D_Green
          forest: "#1B6E53", // Success/Forest
          herbal: "#32C997", // Success/Herbal
          mint: "#84DFC1", // Success/Mint
          light: "#F1FBF8", // Success/L_Green
        },
        warning: {
          DEFAULT: "#FFB240", // Warning/M_Yellow
          dark: "#E48900", // Warning/D_Yellow
          lemon: "#FFA826", // Warning/Lemon
          straw: "#FFC670", // Warning/Straw
          sand: "#FFD596", // Warning/Sand
          light: "#FFF8EC", // Warning/L_Yellow
        },
        danger: {
          DEFAULT: "#E02B1D", // Danger/M_Red
          dark: "#C33025", // Danger/D_Red
          scarlet: "#E01507", // Danger/Scarlet
          raspberry: "#FF5A4F", // Danger/Raspberry
          rubicund: "#F0857D", // Danger/Rubicund
          light: "#FFF1F0", // Danger/L_Red
        },
        neutral: {
          black: "#212121",
          dgrey: "#4D4D4D",
          grey: "#717171",
          lgrey: "#89939E",
          greyblue: "#ABBED1",
          silver: "#F5F7FA",
          white: "#FFFFFF",
        },
      },
      // Padding used across button sizes (Normal=32/16, Medium=32/14,
      // Small=24/8) all map to Tailwind's default 4px spacing scale already
      // (px-8, py-4, py-3.5, px-6, py-2) — no custom spacing scale needed.
      fontSize: {
        // Headlines — Desktop
        "headline-1": ["64px", { lineHeight: "76px", fontWeight: "600" }],
        "headline-2": ["36px", { lineHeight: "44px", fontWeight: "600" }],
        "headline-3": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "headline-4": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        // Headlines — Mobile
        "headline-1-mobile": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "headline-2-mobile": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "headline-3-mobile": ["18px", { lineHeight: "24px", fontWeight: "600" }],
        "headline-4-mobile": ["16px", { lineHeight: "20px", fontWeight: "600" }],
        // Body — Desktop
        "body-1": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-2": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-3": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        // Body — Mobile
        "body-1-mobile": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-2-mobile": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "body-3-mobile": ["12px", { lineHeight: "16px", fontWeight: "400" }],
        // Button / Link
        "button-lg": ["18px", { lineHeight: "24px", fontWeight: "400" }],
        "button-md": ["16px", { lineHeight: "20px", fontWeight: "400" }],
        "button-sm": ["14px", { lineHeight: "16px", fontWeight: "400" }],
      },
      borderRadius: {
        button: "4px",
      },
    },
  },
  plugins: [],
};
