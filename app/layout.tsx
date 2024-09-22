import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "chromix",
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
      <head>
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta property="og:title" content="chromix" />
        <meta
          property="og:description"
          content="この色とあの色を混ぜた時の色は？その色のカラーパレットは？試してみよう！"
        />
        <meta property="og:image" content="/ogp.png" />
        <meta property="og:url" content="https://chromix.xyz/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="chromix" />
        <meta
          name="twitter:description"
          content="この色とあの色を混ぜた時の色は？その色のカラーパレットは？試してみよう！"
        />
        <meta name="twitter:image" content="/ogp.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;1,700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
