import type { Metadata } from "next";
import { Figtree, Poppins } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap"
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://precisionplasticsfoam.com"),
  title: "Precision Plastics & Foam | Custom Foam Inserts & Plastic Machining",
  description:
    "Premium custom industrial foam inserts and plastic machining services for protective packaging, equipment, tools, electronics, and precision fabrication.",
  icons: {
    icon: [
      {
        url: "/favicon.webp",
        type: "image/webp"
      }
    ],
    shortcut: "/favicon.webp"
  },
  openGraph: {
    title: "Precision Plastics & Foam | Custom Foam Inserts & Plastic Machining",
    description:
      "Premium custom industrial foam inserts and plastic machining services for protective packaging, equipment, tools, electronics, and precision fabrication.",
    url: "/",
    siteName: "Precision Plastics & Foam",
    images: [
      {
        url: "/social-sharing.webp",
        width: 1200,
        height: 630,
        alt: "Precision Plastics & Foam custom plastic machining hero preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Precision Plastics & Foam | Custom Foam Inserts & Plastic Machining",
    description:
      "Premium custom industrial foam inserts and plastic machining services for protective packaging, equipment, tools, electronics, and precision fabrication.",
    images: ["/social-sharing.webp"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${poppins.variable}`}>
      <body className={`${figtree.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
