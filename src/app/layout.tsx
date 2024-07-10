import "./globals.css";
import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "../../index.css";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={font.className}>{children}</body>
    </html>
  );
}
