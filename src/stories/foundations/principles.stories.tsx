import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { designPrinciples, publicServiceQualities } from "@/foundations/principles";

const meta: Meta = {
  title: "01 Foundations/Principles",
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DesignPrinciples: Story = {
  render: () => (
    <div className="ds-container space-y-4 py-6">
      <section className="rounded-xl bg-bg-surface p-5 shadow-[0_2px_8px_rgba(0,0,0,0.07)]">
        <h2 className="text-xs font-semibold uppercase tracking-[0.06em] text-fg-muted">설계 원칙</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {designPrinciples.map((principle) => (
            <li key={principle.title} className="rounded-xl bg-bg-canvas p-4">
              <h3 className="text-sm font-semibold tracking-[-0.02em] text-fg-default">
                {principle.title}
              </h3>
              <p className="mt-1.5 text-sm tracking-[-0.015em] text-fg-muted">{principle.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl bg-bg-surface p-5 shadow-[0_2px_8px_rgba(0,0,0,0.07)]">
        <h2 className="text-xs font-semibold uppercase tracking-[0.06em] text-fg-muted">공공서비스 품질 기준</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {publicServiceQualities.map((quality) => (
            <li
              key={quality}
              className="rounded-lg bg-bg-canvas px-4 py-3 text-sm tracking-[-0.015em] text-fg-default"
            >
              {quality}
            </li>
          ))}
        </ul>
      </section>
    </div>
  ),
};
