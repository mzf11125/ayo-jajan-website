"use client";

import { motion } from "framer-motion";
import logo from "../../../public/logo.png";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-8 bg-gradient-to-b from-neonPurple to-black">
      <motion.img
        src={logo.src}
        alt="AyoJajan Logo"
        className="w-120 h-120 mb-6"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      />
      <h1 className="text-4xl md:text-6xl font-bold text-neonYellow">
        Gamify Your <span className="text-neonTeal">Street Food</span> Adventure
      </h1>
      <p className="text-lg md:text-xl mt-4 text-gray-300">
        Explore, compete, and earn crypto rewards!
      </p>
      <motion.button
        className="mt-8 px-6 py-3 bg-neonYellow hover:bg-neonPurple rounded-lg text-black font-medium"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Start Your Journey
      </motion.button>
    </section>
  );
};

export default Hero;
