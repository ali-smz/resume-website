"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]">
      {/* Circular Clipped Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1, ease: "easeIn" }}
        className="absolute inset-2 rounded-full overflow-hidden mix-blend-lighten"
      >
        <Image
          src="/assets/photo.jpg"
          alt="ali samizade image"
          priority
          quality={100}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Animated SVG Circle Frame */}
      <motion.svg
        className="w-full h-full"
        fill="transparent"
        viewBox="0 0 506 506"
        transition={{ delay: 1 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#00ff99"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
