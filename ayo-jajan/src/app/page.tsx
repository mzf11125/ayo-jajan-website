// File: app/page.tsx
import Image from "next/image";
import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-24"
      style={{ background: "rgba(255, 255, 0, 0.78)" }}
    >
      <section className="text-center">
        <h1
          className={`${pressStart2P.className} font-bold text-3xl sm:text-5xl mb-8`}
        >
          Welcome to Ayo Jajan
        </h1>
        <p className="text-xl mb-8">
          Track local street vendors in real-time and discover culinary adventures!
        </p>
        <Image
          src="/ayo-jajan-logo.png"
          alt="Ayo Jajan Logo"
          width={200}
          height={200}
          priority
        />
      </section>
      <section className="mt-12">
        <a
          href="#"
          className={`${pressStart2P.className} bg-black text-white py-3 px-6 rounded-full text-lg hover:bg-gray-800 transition-colors`}
        >
          Start Exploring
        </a>
      </section>
    </main>
  );
}