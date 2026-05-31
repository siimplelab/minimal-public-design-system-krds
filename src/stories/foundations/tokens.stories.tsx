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
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

function TokenCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl bg-bg-surface p-5 shadow-[0_2px_8px_rgba(0,0,0,0.07)]">
      <h3 className="text-xs font-semibold uppercase tracking-[0.06em] text-fg-muted">{title}</h3>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function TokenRow({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-center justify-between rounded-lg bg-bg-canvas px-3 py-2.5">
      <span className="text-sm tracking-[-0.015em] text-fg-default">{label}</span>
      <span className="font-mono text-xs text-fg-muted">{value}</span>
    </li>
  );
}

export const Colors: Story = {
  render: () => (
    <div className="ds-container space-y-4 py-6">
      <TokenCard title="Neutral Palette">
        <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
          {Object.entries(colorTokens.neutral).map(([key, value]) => (
            <div key={key} className="text-center">
              <div
                className="h-10 rounded-lg border border-[rgba(0,0,0,0.08)]"
                style={{ background: value }}
              />
              <p className="mt-1 font-mono text-[10px] text-fg-muted">{key}</p>
            </div>
          ))}
        </div>
      </TokenCard>

      <TokenCard title="Semantic Colors">
        <div className="grid gap-3 sm:grid-cols-3">
          {Object.entries(colorTokens.semantic).map(([key, value]) => (
            <div key={key} className="overflow-hidden rounded-xl border border-[rgba(0,0,0,0.08)]">
              <div className="h-12" style={{ background: value }} />
              <div className="bg-bg-surface px-3 py-2">
                <p className="text-sm font-medium tracking-[-0.015em] text-fg-default">{key}</p>
                <p className="font-mono text-xs text-fg-muted">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </TokenCard>
    </div>
  ),
};

export const Typography: Story = {
  render: () => (
    <div className="ds-container space-y-4 py-6">
      <TokenCard title="Type Scale">
        <ul className="space-y-1.5">
          {Object.entries(typographyTokens.fontSize).map(([key, value]) => (
            <li key={key} className="flex items-baseline justify-between rounded-lg bg-bg-canvas px-3 py-2.5 gap-4">
              <span style={{ fontSize: value }} className="font-semibold tracking-[-0.02em] text-fg-default truncate">
                {key} — 가나다라 Aa
              </span>
              <span className="shrink-0 font-mono text-xs text-fg-muted">{value}</span>
            </li>
          ))}
        </ul>
      </TokenCard>

      <TokenCard title="Letter Spacing">
        <ul className="space-y-1.5">
          {Object.entries(typographyTokens.letterSpacing).map(([key, value]) => (
            <TokenRow key={key} label={`letterSpacing.${key}`} value={value} />
          ))}
        </ul>
      </TokenCard>

      <TokenCard title="Line Height">
        <ul className="space-y-1.5">
          {Object.entries(typographyTokens.lineHeight).map(([key, value]) => (
            <TokenRow key={key} label={`lineHeight.${key}`} value={value} />
          ))}
        </ul>
      </TokenCard>
    </div>
  ),
};

export const SpacingAndRadius: Story = {
  render: () => (
    <div className="ds-container space-y-4 py-6">
      <TokenCard title="Spacing Scale">
        <ul className="space-y-1.5">
          {Object.entries(spacingTokens).map(([key, value]) => (
            <li key={key} className="flex items-center gap-4 rounded-lg bg-bg-canvas px-3 py-2.5">
              <div className="h-4 rounded bg-[#0071e3]" style={{ width: value }} />
              <span className="text-sm tracking-[-0.015em] text-fg-muted">
                spacing.{key} = <span className="font-mono">{value}</span>
              </span>
            </li>
          ))}
        </ul>
      </TokenCard>

      <TokenCard title="Border Radius">
        <ul className="space-y-1.5">
          {Object.entries(radiusTokens).filter(([, v]) => v !== "9999px").map(([key, value]) => (
            <li key={key} className="flex items-center gap-4 rounded-lg bg-bg-canvas px-3 py-2.5">
              <div
                className="h-8 w-8 shrink-0 bg-[rgba(0,113,227,0.15)] border border-[#0071e3]"
                style={{ borderRadius: value }}
              />
              <span className="text-sm tracking-[-0.015em] text-fg-default">
                radius.{key} = <span className="font-mono text-fg-muted">{value}</span>
              </span>
            </li>
          ))}
        </ul>
      </TokenCard>

      <TokenCard title="Elevation">
        <div className="grid gap-4 sm:grid-cols-3">
          {Object.entries(elevationTokens).map(([key, value]) => (
            <div
              key={key}
              className="flex h-16 items-center justify-center rounded-xl bg-bg-surface"
              style={{ boxShadow: value === "none" ? undefined : value }}
            >
              <span className="text-xs font-medium text-fg-muted">elevation.{key}</span>
            </div>
          ))}
        </div>
      </TokenCard>

      <TokenCard title="Borders & Layout">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.06em] text-fg-muted">Border</p>
            <ul className="space-y-1.5">
              {Object.entries(borderTokens).map(([key, value]) => (
                <TokenRow key={key} label={`border.${key}`} value={value} />
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.06em] text-fg-muted">Layout</p>
            <ul className="space-y-1.5">
              {Object.entries(layoutTokens).map(([key, value]) => (
                <TokenRow key={key} label={key} value={value} />
              ))}
            </ul>
          </div>
        </div>
      </TokenCard>

      <TokenCard title="Accessibility & Contrast">
        <ul className="space-y-1.5">
          {Object.entries(contrastGuidelines).map(([key, value]) => (
            <li key={key} className="rounded-lg bg-bg-canvas px-3 py-3">
              <p className="text-xs font-semibold tracking-[-0.01em] text-fg-default">{key}</p>
              <p className="mt-0.5 text-xs tracking-[-0.01em] text-fg-muted">{value}</p>
            </li>
          ))}
        </ul>
      </TokenCard>
    </div>
  ),
};
