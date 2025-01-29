"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <>
      {/* Extra spacing to push the "About" section further down */}
      <div className="h-[25vh]" />

      <motion.section
        id="about"
        className="mt-20 p-10 bg-white bg-opacity-75 text-gray-900 rounded-lg shadow-lg"
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-extrabold mb-6">About Ayo Jajan</h2>
        <p className="text-lg leading-relaxed">
          Ayo Jajan is on a mission to promote local street food, including food
          carts and food trucks. We believe in supporting small businesses and
          showcasing the diverse culinary experiences that can be found on the
          streets. Through our platform, you can track local street vendors in
          real-time and discover culinary adventures. Join us in celebrating the
          vibrant street food culture and supporting local vendors!
        </p>
      </motion.section>
    </>
  );
}
