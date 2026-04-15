import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  borderTokens,
  colorTokens,
  contrastGuidelines,
  elevationTokens,
  layoutTokens,
  radiusTokens,
  spacingTokens,
  typographyTokens,
} from "@/foundations/tokens";

const meta: Meta = {
  title: "01 Foundations/Tokens",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

function TokenCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-md border border-border-default bg-bg-surface p-4">
      <h3 className="text-base font-semibold">{title}</h3>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export const Overview: Story = {
  render: () => (
    <div className="ds-container space-y-4 py-6">
      <TokenCard title="Color Tokens">
        <div className="grid gap-2 md:grid-cols-3">
          {Object.entries(colorTokens.semantic).map(([key, value]) => (
            <div key={key} className="rounded-sm border border-border-default p-2">
              <div className="h-10 rounded-sm" style={{ background: value }} />
              <p className="mt-2 text-sm font-medium">{key}</p>
              <p className="text-xs text-fg-muted">{value}</p>
            </div>
          ))}
        </div>
      </TokenCard>

      <TokenCard title="Typography Tokens">
        <ul className="space-y-1 text-sm">
          {Object.entries(typographyTokens.fontSize).map(([key, value]) => (
            <li key={key} className="flex items-center justify-between rounded-sm border border-border-default px-3 py-2">
              <span>{key}</span>
              <span className="font-mono text-xs text-fg-muted">{value}</span>
            </li>
          ))}
        </ul>
      </TokenCard>

      <TokenCard title="Spacing / Radius / Border / Elevation">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold">Spacing</p>
            <ul className="space-y-1 text-sm">
              {Object.entries(spacingTokens).map(([key, value]) => (
                <li key={key} className="flex items-center justify-between rounded-sm border border-border-default px-3 py-2">
                  <span>{key}</span>
                  <span className="font-mono text-xs text-fg-muted">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold">Radius / Border / Elevation</p>
            <ul className="space-y-1 text-sm">
              {Object.entries(radiusTokens).map(([key, value]) => (
                <li key={key} className="flex items-center justify-between rounded-sm border border-border-default px-3 py-2">
                  <span>radius.{key}</span>
                  <span className="font-mono text-xs text-fg-muted">{value}</span>
                </li>
              ))}
              {Object.entries(borderTokens).map(([key, value]) => (
                <li key={key} className="flex items-center justify-between rounded-sm border border-border-default px-3 py-2">
                  <span>border.{key}</span>
                  <span className="font-mono text-xs text-fg-muted">{value}</span>
                </li>
              ))}
              {Object.entries(elevationTokens).map(([key, value]) => (
                <li key={key} className="flex items-center justify-between rounded-sm border border-border-default px-3 py-2">
                  <span>elevation.{key}</span>
                  <span className="font-mono text-xs text-fg-muted">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </TokenCard>

      <TokenCard title="Layout & Contrast Guidelines">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold">Layout</p>
            <ul className="space-y-1 text-sm">
              {Object.entries(layoutTokens).map(([key, value]) => (
                <li key={key} className="flex items-center justify-between rounded-sm border border-border-default px-3 py-2">
                  <span>{key}</span>
                  <span className="font-mono text-xs text-fg-muted">{value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold">Contrast Rules</p>
            <ul className="space-y-1 text-sm">
              {Object.entries(contrastGuidelines).map(([key, value]) => (
                <li key={key} className="rounded-sm border border-border-default px-3 py-2">
                  <p className="font-medium">{key}</p>
                  <p className="text-fg-muted">{value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </TokenCard>
    </div>
  ),
};
