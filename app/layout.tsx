import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Color lab",
  description:
    "この色とあの色を混ぜた時の色は？その色のカラーパレットは？試してみよう！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
