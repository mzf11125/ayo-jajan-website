"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Gamepad2, MapPin, Trophy } from "lucide-react";
import { WaitlistModal } from "./waitlist-modal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="container relative z-10 flex flex-col items-center gap-8 text-center">
        <div className="mb-8 animate-bounce">
          <div className="relative inline-block">
            <Trophy className="h-40 w-40 text-amber-400" />
            <Image
              src="/logoshadowy.png"
              alt="Ayo Jajan Logo"
              width={1000}
              height={1000}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40"
            />
          </div>
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-500">
          Track Your Favorite Vendors
          <span className="block mt-2">Live GPS Street Food Adventures!</span>
        </h1>

        <p className="max-w-prose text-xl text-gray-700 sm:text-2xl">
          Discover authentic local eats through real-time vendor tracking.
          Complete challenges, earn rewards, and connect with travelers
          worldwide - no delivery needed!
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link
            href="#"
            className="flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 text-lg font-semibold text-white hover:from-amber-600 hover:to-orange-600 transition-all"
          >
            <Gamepad2 className="h-6 w-6" />
            Start Challenges
          </Link>
          <Link
            href="#features"
            className="flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-gray-900 ring-2 ring-amber-500 hover:bg-amber-50 transition-all"
          >
            <MapPin className="h-6 w-6 text-amber-600" />
            Explore Vendors
          </Link>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg text-gray-600 mb-3">
          Want to join as a user or partner?
        </p>
        <Link
          href="#waitlist"
          className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-semibold text-lg transition-colors"
          onClick={() => setIsModalOpen(true)}
        >
          Join our waitlist for early access
          <span aria-hidden="true">→</span>
        </Link>
        <WaitlistModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
      </div>
    </section>
  );
}

function GooglePlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Google Play Store</title>
      <path d="M3 22h18v-20H3" />
      <path d="m7 5 8 5-8 5z" />
    </svg>
  );
}
