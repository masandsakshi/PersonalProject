"use client";

import { motion } from "motion/react";
import type { Friend } from "@/data/friends";

type Props = {
  friend: Friend;
  index: number;
  onClick: () => void;
};

const rotations = [
  "-rotate-6",
  "rotate-3",
  "-rotate-2",
  "rotate-6",
  "-rotate-4",
  "rotate-2",
  "-rotate-3",
];

const verticalOffsets = [
  "translate-y-2",
  "-translate-y-2",
  "translate-y-4",
  "-translate-y-1",
  "translate-y-3",
  "-translate-y-3",
  "translate-y-1",
];

export default function FriendPolaroid({
  friend,
  index,
  onClick,
}: Props) {
  return (
    <motion.button
      initial={{
        opacity: 0,
        scale: 0.7,
        y: 45,
        rotate: index % 2 === 0 ? -8 : 8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
        rotate: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.09,
        type: "spring",
        stiffness: 120,
        damping: 12,
      }}
      whileHover={{
        scale: 1.07,
        rotate: 0,
        y: -10,
        zIndex: 20,
      }}
      whileTap={{
        scale: 0.97,
      }}
      onClick={onClick}
      className={`group relative ${rotations[index]} ${verticalOffsets[index]} focus:outline-none`}
      aria-label={`Watch ${friend.name}'s memory`}
    >
      {/* Washi tape */}
      <motion.div
        whileHover={{ rotate: 0 }}
        className="absolute -top-3 left-1/2 z-10 h-7 w-20 -translate-x-1/2 rotate-[-2deg] bg-[#E8D8EE]/80 shadow-sm"
      />

      {/* Polaroid */}
      <div className="relative w-44 bg-white p-3 pb-12 shadow-[0_8px_25px_rgba(85,64,95,0.12)] transition-shadow duration-300 group-hover:shadow-[0_18px_40px_rgba(85,64,95,0.2)] sm:w-48">
        <div className="aspect-[4/5] overflow-hidden bg-[#F1E7F0]">
          <img
            src={friend.photo}
            alt={`${friend.name} memory`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="absolute bottom-3 left-0 right-0 text-center">
          <span className="font-serif text-lg italic text-[#55405F]">
            {friend.name}
          </span>
        </div>
      </div>

      {/* Hover hint */}
      <motion.div
        initial={{ opacity: 0, y: 4 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs tracking-wide text-[#A48AAA]"
      >
        watch memory ♡
      </motion.div>
    </motion.button>
  );
}