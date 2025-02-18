"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Gift,
  Star,
  Download,
  Utensils,
  Moon,
  Sun,
} from "lucide-react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`flex flex-col min-h-screen overflow-hidden ${
        isDarkMode ? "dark" : ""
      }`}
    >
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 dark:from-yellow-900 dark:via-yellow-800 dark:to-yellow-700 animate-gradient-x" />
      </div>

      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/30 dark:bg-black/30 supports-[backdrop-filter]:bg-white/10 dark:supports-[backdrop-filter]:bg-black/10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 h-16 flex items-center justify-between"
        >
          <Link className="flex items-center space-x-2" href="/">
            <Utensils className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
            <span className="font-bold text-xl text-yellow-800 dark:text-yellow-200">
              Ayo Jajan
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#features"
              className="text-yellow-800 dark:text-yellow-200 hover:text-yellow-600 dark:hover:text-yellow-400"
            >
              Features
            </Link>
            <Link
              href="#rewards"
              className="text-yellow-800 dark:text-yellow-200 hover:text-yellow-600 dark:hover:text-yellow-400"
            >
              Rewards
            </Link>
            <Link
              href="#tracking"
              className="text-yellow-800 dark:text-yellow-200 hover:text-yellow-600 dark:hover:text-yellow-400"
            >
              Tracking
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              onClick={toggleDarkMode}
              variant="ghost"
              size="icon"
              className="text-yellow-800 dark:text-yellow-200"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white dark:bg-yellow-600 dark:hover:bg-yellow-700">
              Join Waitlist
            </Button>
          </div>
        </motion.div>
      </header>

      <main className="flex-1 relative z-10">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 dark:from-yellow-400 dark:to-yellow-200 mb-4">
                  Discover Jakarta's Street Food
                </h1>
                <p className="text-yellow-800 dark:text-yellow-200 md:text-xl mb-6">
                  Ayo Jajan App helps you find, track, and enjoy the best street
                  food in Jakarta. Earn rewards while exploring local flavors!
                </p>
                <div className="flex justify-center space-x-4">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-white dark:bg-yellow-600 dark:hover:bg-yellow-700">
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    className="text-yellow-800 dark:text-yellow-200 border-yellow-500 dark:border-yellow-400 hover:bg-yellow-100 dark:hover:bg-yellow-900"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full max-w-3xl"
              >
                <Image
                  src="/placeholder.svg"
                  alt="Street Food Illustration"
                  width={800}
                  height={400}
                  layout="responsive"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="py-12 md:py-24 lg:py-32 bg-yellow-100/50 dark:bg-yellow-900/30 backdrop-blur-md"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-yellow-800 dark:text-yellow-200"
            >
              Features
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: MapPin,
                  title: "Real-time Tracking",
                  description:
                    "Find and track street food vendors in real-time across Jakarta",
                },
                {
                  icon: Gift,
                  title: "Reward System",
                  description:
                    "Earn points and unlock exclusive rewards as you explore",
                },
                {
                  icon: Star,
                  title: "Reviews & Ratings",
                  description:
                    "Share your experiences and discover top-rated vendors",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-6 bg-white/20 dark:bg-black/20 backdrop-blur-lg rounded-2xl shadow-xl"
                >
                  <feature.icon className="h-12 w-12 mb-4 text-yellow-500 dark:text-yellow-400" />
                  <h3 className="text-xl font-bold mb-2 text-yellow-700 dark:text-yellow-300">
                    {feature.title}
                  </h3>
                  <p className="text-yellow-800 dark:text-yellow-200">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="rewards" className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1"
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-yellow-900 dark:text-yellow-100">
                  Earn Rewards
                </h2>
                <p className="text-xl text-yellow-800 dark:text-yellow-200 mb-6">
                  Collect points every time you visit a street food vendor.
                  Redeem your points for exclusive discounts, free meals, and
                  special experiences!
                </p>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-white dark:bg-yellow-600 dark:hover:bg-yellow-700">
                  Start Earning
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 w-full max-w-md"
              >
                <Image
                  src="/placeholder.svg"
                  alt="Rewards illustration"
                  width={400}
                  height={300}
                  layout="responsive"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section
          id="tracking"
          className="py-12 md:py-24 lg:py-32 bg-yellow-100/50 dark:bg-yellow-900/30 backdrop-blur-md"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-yellow-800 dark:text-yellow-200"
            >
              Real-Time Tracking
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <Image
                src="/placeholder.svg"
                alt="Real-time tracking map"
                width={800}
                height={450}
                layout="responsive"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mt-6 text-xl text-yellow-800 dark:text-yellow-200 max-w-2xl mx-auto"
            >
              Find your favorite street food vendors in real-time. Never miss
              out on the best local delicacies again!
            </motion.p>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center space-y-4 text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-yellow-900 dark:text-yellow-100">
                Ready to Explore Jakarta's Street Food?
              </h2>
              <p className="text-yellow-800 dark:text-yellow-200 md:text-xl">
                Download the Ayo Jajan app now and start your culinary
                adventure!
              </p>
              <Button className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white dark:bg-yellow-600 dark:hover:bg-yellow-700">
                <Download className="mr-2 h-4 w-4" /> Join Waitlist
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-6 bg-yellow-100 dark:bg-yellow-900 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Utensils className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              <span className="font-bold text-yellow-800 dark:text-yellow-200">
                Ayo Jajan
              </span>
            </div>
            <nav className="flex gap-4 sm:gap-6">
              <Link
                className="text-sm hover:underline underline-offset-4 text-yellow-700 dark:text-yellow-300"
                href="#"
              >
                Terms of Service
              </Link>
              <Link
                className="text-sm hover:underline underline-offset-4 text-yellow-700 dark:text-yellow-300"
                href="#"
              >
                Privacy
              </Link>
            </nav>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              © 2024 Ayo Jajan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
