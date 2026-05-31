export const colorTokens = {
  neutral: {
    0: "#ffffff",
    50: "#f5f5f7",
    100: "#f0f0f3",
    200: "#e4e4e8",
    300: "#c8c8cc",
    400: "#8e8e93",
    500: "#636366",
    600: "#48484a",
    700: "#3a3a3c",
    800: "#2c2c2e",
    900: "#1d1d1f",
  },
  semantic: {
    primary: "#0071e3",
    info: "#0071e3",
    success: "#1a7f4b",
    warning: "#b55d00",
    danger: "#c9302c",
    accent: "#0066cc",
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
    display: "1.875rem",
    h1: "1.875rem",
    h2: "1.25rem",
    h3: "1rem",
    bodyLg: "0.9375rem",
    body: "0.9375rem",
    caption: "0.8125rem",
  },
  lineHeight: {
    compact: "1.2",
    normal: "1.6",
    relaxed: "1.7",
  },
  letterSpacing: {
    tight: "-0.03em",
    normal: "-0.018em",
    loose: "-0.01em",
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
  sm: "0.375rem",
  md: "0.625rem",
  lg: "0.875rem",
  xl: "1.25rem",
  pill: "9999px",
} as const;

export const borderTokens = {
  subtle: "1px solid rgba(0, 0, 0, 0.08)",
  default: "1px solid rgba(0, 0, 0, 0.10)",
  strong: "1px solid rgba(0, 0, 0, 0.22)",
  focus: "2px solid var(--ds-border-focus)",
} as const;

export const elevationTokens = {
  flat: "none",
  raised: "0 2px 8px rgba(0, 0, 0, 0.07)",
  overlay: "rgba(0, 0, 0, 0.18) 3px 5px 30px 0px",
} as const;

export const layoutTokens = {
  contentWidth: "74rem",
  sectionGap: "3rem",
  cardPadding: "1.5rem",
} as const;

export const contrastGuidelines = {
  bodyText: "최소 4.5:1",
  largeText: "최소 3:1",
  interactiveFocus: "배경과 명확히 구분되는 2px 이상 윤곽선",
  stateColorUsage: "상태 색상 + 텍스트 라벨 동시 제공",
} as const;
