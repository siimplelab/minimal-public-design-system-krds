export const colorTokens = {
  neutral: {
    0: "#ffffff",
    50: "#f6f8fa",
    100: "#eef2f5",
    200: "#dde4ea",
    300: "#c8d2dc",
    400: "#8a98a8",
    500: "#5f6b78",
    600: "#3f4b57",
    700: "#2d3944",
    800: "#1f2a33",
    900: "#121a21",
  },
  semantic: {
    primary: "#0d4cb5",
    info: "#0d4cb5",
    success: "#16794f",
    warning: "#b55d00",
    danger: "#be2d2d",
    accent: "#005f83",
  },
} as const;

export const semanticRoles = {
  background: {
    canvas: "var(--ds-bg-canvas)",
    surface: "var(--ds-bg-surface)",
    subtle: "var(--ds-bg-subtle)",
    inverse: "var(--ds-bg-inverse)",
  },
  foreground: {
    default: "var(--ds-fg-default)",
    muted: "var(--ds-fg-muted)",
    inverse: "var(--ds-fg-inverse)",
    link: "var(--ds-fg-link)",
  },
  border: {
    default: "var(--ds-border-default)",
    strong: "var(--ds-border-strong)",
    focus: "var(--ds-border-focus)",
  },
  state: {
    info: "var(--ds-state-info)",
    success: "var(--ds-state-success)",
    warning: "var(--ds-state-warning)",
    danger: "var(--ds-state-danger)",
  },
} as const;

export const typographyTokens = {
  fontFamily: {
    sans: '"Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
    mono: '"IBM Plex Mono", "SFMono-Regular", Menlo, monospace',
  },
  fontSize: {
    display: "2rem",
    h1: "1.75rem",
    h2: "1.375rem",
    h3: "1.125rem",
    bodyLg: "1rem",
    body: "0.9375rem",
    caption: "0.8125rem",
  },
  lineHeight: {
    compact: "1.4",
    normal: "1.55",
    relaxed: "1.7",
  },
  letterSpacing: {
    tight: "-0.01em",
    normal: "0",
    wide: "0.02em",
  },
} as const;

export const spacingTokens = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
} as const;

export const radiusTokens = {
  none: "0",
  sm: "0.25rem",
  md: "0.5rem",
  lg: "0.75rem",
  pill: "9999px",
} as const;

export const borderTokens = {
  subtle: "1px solid var(--ds-border-default)",
  strong: "1px solid var(--ds-border-strong)",
  focus: "2px solid var(--ds-border-focus)",
} as const;

export const elevationTokens = {
  flat: "none",
  raised: "0 1px 2px rgba(16, 24, 40, 0.06)",
  overlay: "0 8px 24px rgba(16, 24, 40, 0.16)",
} as const;

export const layoutTokens = {
  contentWidth: "72rem",
  sectionGap: "2.5rem",
  cardPadding: "1.5rem",
} as const;

export const contrastGuidelines = {
  bodyText: "최소 4.5:1",
  largeText: "최소 3:1",
  interactiveFocus: "배경과 명확히 구분되는 2px 이상 윤곽선",
  stateColorUsage: "상태 색상 + 텍스트 라벨 동시 제공",
} as const;
