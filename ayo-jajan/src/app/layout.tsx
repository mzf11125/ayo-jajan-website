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
    "Ayo Jajan",
    "Ayo Jajan app",
    "jajan online",
    "jajan app",
    "street food delivery",
    "real-time food truck tracking",
    "best street food Jakarta",
    "Jakarta food app",
    "food finder app",
    "local food delivery",
    "where to find street food in Jakarta",
    "best street food near me",
    "track food trucks in real-time",
    "order street food online Jakarta",
    "street food vendor tracking",
    "Jakarta street food",
    "vendor tracking",
    "local cuisine guide",
    "culinary adventure",
    "street food market",
    "Indonesian street food",
    "food truck locator",
    "authentic street eats",
    "street food culture", // Kata kunci tambahan dalam Bahasa Indonesia
    "makanan kaki lima",
    "makanan gerobak",
    "jajanan pasar",
    "kuliner lokal",
    "jajanan pinggir jalan",
    "temukan makanan terdekat",
    "aplikasi makanan kaki lima",
    "jajanan enak",
    "jajanan murah",
    "kuliner indonesia",
    "jajanan kekinian",
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
