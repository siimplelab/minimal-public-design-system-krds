import type { Preview } from "@storybook/nextjs-vite";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "canvas",
      values: [
        { name: "canvas", value: "#f5f5f7" },
        { name: "surface", value: "#ffffff" },
        { name: "inverse", value: "#1d1d1f" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
    options: {
      storySort: {
        order: [
          "01 Foundations",
          "02 Primitives",
          "03 Patterns",
          "04 Examples",
        ],
      },
    },
  },
};

export default preview;
