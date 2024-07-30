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
    "street food",
    "vendor tracking",
    "culinary adventure",
    "local cuisine",
    "ayo jajan",
    "ayo jajan app",
    "Ayo Jajan",
    "Ayo Jajan App",
    "Street food",
    "Jakarta Street Food",
    "food festival",
    "food truck",
    "gourmet street food",
    "street food market",
    "street food tour",
    "street food vendor",
    "street food culture",
    "street food experience",
    "street food guide",
    "street food recipes",
    "Street good app",
    "street food game",
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
