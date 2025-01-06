"use client";

import { motion } from "framer-motion";
import {
  AiOutlineTrophy,
  AiOutlineWallet,
  AiOutlineFork,
} from "react-icons/ai";

const features = [
  {
    title: "Discover",
    icon: <AiOutlineFork size={40} />,
    description: "Find unique street foods near you.",
  },
  {
    title: "Compete",
    icon: <AiOutlineTrophy size={40} />,
    description: "Complete challenges and top leaderboards.",
  },
  {
    title: "Earn",
    icon: <AiOutlineWallet size={40} />,
    description: "Earn crypto rewards as you play.",
  },
];

const Features = () => {
  return (
    <section className="py-16 px-8 bg-yellow-300 text-black rounded-lg">
      <h2 className="text-4xl font-extrabold text-center mb-8">Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="text-center bg-black rounded-lg p-6 hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-yellow-300 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-white">
              {feature.title}
            </h3>
            <p className="text-white">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
