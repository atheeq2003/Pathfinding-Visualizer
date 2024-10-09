import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        traversed: {
          "0%": {
            transform: "scale(0.3)",
            backgroungColor: "#9333eabf",
            borderRadius: "100%",
          },
          "50%": {
            backgroungColor: "#4f46e5bf",
          },
          "75%": {
            transform: "scale(1.2)",
            backgroungColor: "#3b82f6bf",
          },
          "100%": {
            transform: "scale(1)",
            backgroungColor: "#22d3ee",
          },
        },
        path: {
          "0%": {
            transform: "scale(0.3)",
            backgroungColor: "#e11d48bf",
            borderRadius: "100%",
          },
          "50%": {
            backgroungColor: "#ea580cbf",
          },
          "75%": {
            transform: "scale(1.2)",
            backgroungColor: "#fb923cbf",
          },
          90: {
            transform: "scale(0.8)",
            backgroungColor: "#fde68a",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        wall: {
          "0%": {
            transform: "scale(0.7)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        traversed: "traversed 0.5s cubic-bezier(0, 0, 0.2, 1)",
        path: "path 1.5s cubic-bezier(0, 0, 0.2, 1)",
        wall: "wall 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }
    },
  },
  plugins: [],
};
