import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const roboto = VT323({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayo Jajan | Real-time Street Food Vendor Tracking",
  description:
    "Discover and track local street food vendors in real-time with Ayo Jajan, your ultimate culinary adventure app.",
  keywords: [
    "Ayo Jajan app",
    "Ayo Jajan",
    "street food vendor tracking",
    "Jakarta street food",
    "vendor tracking",
    "local cuisine guide",
    "culinary adventure",
    "street food market",
    "Indonesian street food",
    "food truck locator",
    "authentic street eats",
    "street food culture",
  ],
  openGraph: {
    title: "Ayo Jajan | Real-time Street Food Vendor Tracking",
    description:
      "Discover and track local street food vendors in real-time with Ayo Jajan.",
    images: [
      {
        url: "../../public/croplogo.png",
        width: 1200,
        height: 630,
        alt: "Ayo Jajan App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayo Jajan | Real-time Street Food Vendor Tracking",
    description:
      "Discover and track local street food vendors in real-time with Ayo Jajan.",
    images: ["../../public/croplogo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
