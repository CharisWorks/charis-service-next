import "./globals.css";
import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import { css } from "../../styled-system/css";

const font = Noto_Serif_JP({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "charis WORKsへようこそ！",
  description: "charis WORKsはブレスレットを始めとする雑貨を販売しています。",
  category: "shopping",
  icons: {
    icon: "https://charis.works/og-image.png",
    shortcut: "https://charis.works/og-image.png",
    apple: "https://charis.works/og-image.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "https://charis.works/og-image.png",
    },
  },
  openGraph: {
    title: "charis WORKs",
    description: "charis WORKsはブレスレットを始めとする雑貨を販売しています。",
    url: "https://charis.works",
    siteName: "charis WORKs",
    type: "website",

    images: "https://charis.works/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "charis WORKs",
    description: "charis WORKsはブレスレットを始めとする雑貨を販売しています。",
    site: "1440559012378931205",
    creator: "@yuki_osada0808",
    creatorId: "1440559012378931205",
    images: {
      url: "https://charis.works/og-image.png",
      alt: "charis WORKs",
    },
  },
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="ja">
      <body className={font.className}>
        <div className={baseStyle}>{children}</div>
      </body>
    </html>
  );
};

const baseStyle = css({
  bgColor: "night",
  width: "100%",
});

export default RootLayout;
