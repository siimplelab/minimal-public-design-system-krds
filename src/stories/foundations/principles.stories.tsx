import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { designPrinciples, publicServiceQualities } from "@/foundations/principles";

const meta: Meta = {
  title: "01 Foundations/Principles",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Principles: Story = {
  render: () => (
    <div className="ds-container space-y-4 py-6">
      <section className="rounded-md border border-border-default bg-bg-surface p-4">
        <h2 className="text-lg font-semibold">설계 원칙</h2>
        <ul className="mt-3 grid gap-2 md:grid-cols-2">
          {designPrinciples.map((principle) => (
            <li key={principle.title} className="rounded-sm border border-border-default bg-bg-canvas p-3">
              <h3 className="text-sm font-semibold">{principle.title}</h3>
              <p className="mt-1 text-sm text-fg-muted">{principle.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-md border border-border-default bg-bg-surface p-4">
        <h2 className="text-lg font-semibold">공공서비스 품질 기준</h2>
        <ul className="mt-3 grid gap-2 md:grid-cols-2">
          {publicServiceQualities.map((quality) => (
            <li key={quality} className="rounded-sm border border-border-default px-3 py-2 text-sm text-fg-default">
              {quality}
            </li>
          ))}
        </ul>
      </section>
    </div>
  ),
};
