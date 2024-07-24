/ File: app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Ayo Jajan | Real-time Street Food Vendor Tracking",
  description: "Discover and track local street food vendors in real-time with Ayo Jajan, your ultimate culinary adventure app.",
  keywords: ["street food", "vendor tracking", "culinary adventure", "local cuisine"],
  openGraph: {
    title: "Ayo Jajan | Real-time Street Food Vendor Tracking",
    description: "Discover and track local street food vendors in real-time with Ayo Jajan.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Ayo Jajan App" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayo Jajan | Real-time Street Food Vendor Tracking",
    description: "Discover and track local street food vendors in real-time with Ayo Jajan.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
