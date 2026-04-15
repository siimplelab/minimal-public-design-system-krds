import type { Metadata } from "next";
import { IBM_Plex_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const koreanSans = Noto_Sans_KR({
  variable: "--font-korean-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const uiMono = IBM_Plex_Mono({
  variable: "--font-ui-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Minimal Public Design System",
  description:
    "KRDS structural philosophy를 참고해 재해석한 공공서비스 지향 미니멀 디자인 시스템",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${koreanSans.variable} ${uiMono.variable}`}>
      <body className="min-h-screen bg-bg-canvas text-fg-default antialiased">
        {children}
      </body>
    </html>
  );
}
