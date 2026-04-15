import type { Preview } from "@storybook/nextjs-vite";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "canvas",
      values: [
        { name: "canvas", value: "#f6f8fa" },
        { name: "surface", value: "#ffffff" },
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
        order: ["01 Foundations", "02 Primitives", "03 Patterns", "04 Examples"],
      },
    },
  },
};

export default preview;
