"use client";

import { motion } from "framer-motion";
import MusicPlayer from "./MusicPlayer";

export default function PlaylistSection() {
  return (
    <section
      id="playlist"
      className="relative overflow-hidden bg-[#F9F1F6] px-5 py-20 sm:px-10 sm:py-24"
    >
      {/* Soft paper texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:radial-gradient(#C9AFC4_0.6px,transparent_0.6px)] [background-size:9px_9px]" />

      {/* Decorative scrapbook doodles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute left-[8%] top-[14%] rotate-[-14deg] font-serif text-2xl text-[#D5B3CA]">
          ♡
        </span>

        <span className="absolute right-[9%] top-[19%] rotate-[12deg] text-xl text-[#BBA8C8]">
          ✦
        </span>

        <span className="absolute bottom-[17%] left-[10%] rotate-[8deg] font-serif text-2xl text-[#D5B3CA]">
          ♪
        </span>

        <span className="absolute bottom-[12%] right-[11%] rotate-[-10deg] font-serif text-xl text-[#C5AFC9]">
          ♡
        </span>

        <span className="absolute left-[18%] top-[48%] rotate-[-5deg] text-sm text-[#D5B3CA]">
          ✧
        </span>

        <span className="absolute right-[18%] top-[58%] rotate-[8deg] text-sm text-[#C5B3CA]">
          ♡
        </span>
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-[10px] font-medium tracking-[0.3em] text-[#A184A8] sm:text-[11px]">
            PRESS PLAY ♡
          </p>

          <h2 className="font-serif text-4xl leading-[1.08] text-[#493B50] sm:text-5xl">
            Songs That Are
            <br />
            <span className="italic">SOOO ANNIEEE</span>
          </h2>

          <p className="mt-5 text-sm text-[#806E84] sm:text-base">
            A little playlist from the people who know you best.
          </p>
        </motion.div>

        <MusicPlayer />
      </div>
    </section>
  );
}