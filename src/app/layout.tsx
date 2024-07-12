import "./globals.css";
import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import { css } from "../../styled-system/css";

const font = Noto_Serif_JP({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "charis WORKs",
  description: "charis WORKs is a EC site.",
  category: "shopping",
  icons: {
    icon: "/og-image.png",
    shortcut: "/og-image.png",
    apple: "/og-image.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/og-image.png",
    },
  },
  openGraph: {
    title: "charis WORKs",
    description: "charis WORKs is a EC site.",
    url: "https://beta.charis.works",
    siteName: "charis WORKs",
    type: "website",

    images: "/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "charis WORKs",
    description: "charis WORKs is a EC site.",
    site: "1440559012378931205",
    creator: "@yuki_osada0808",
    creatorId: "1440559012378931205",
    images: {
      url: "/og-image.png",
      alt: "charis WORKs",
    },
  },
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const baseStyle = css({
    bgColor: "night",
    width: "100%",
  });
  return (
    <html lang="ja">
      <body className={font.className}>
        <div className={baseStyle}>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
