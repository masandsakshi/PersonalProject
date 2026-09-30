"use client";

import { motion } from "framer-motion";
import ScrapbookBook from "./ScrapbookBook";

export default function ScrapbookSection() {
  return (
    <section
      id="moments"
      className="relative overflow-hidden bg-[#F4F0F8] px-6 py-20 sm:px-10 sm:py-24"
    >
      {/* Background doodles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute left-[8%] top-[12%] rotate-[-12deg] text-2xl text-[#D8B8D8]/60">
          ♡
        </span>

        <span className="absolute right-[10%] top-[18%] rotate-[15deg] text-xl text-[#C7B8DF]/60">
          ✦
        </span>

        <span className="absolute bottom-[16%] left-[12%] rotate-[8deg] text-lg text-[#D8B8D8]/50">
          ✿
        </span>

        <span className="absolute bottom-[12%] right-[13%] rotate-[-10deg] text-2xl text-[#C7B8DF]/50">
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
          <p className="mb-3 text-[11px] font-medium tracking-[0.28em] text-[#A184A8]">
            A FEW LITTLE MOMENTS
          </p>

          <h2 className="font-serif text-4xl leading-tight text-[#493B50] sm:text-5xl">
            Happy 22nd You Gorgeous lil Rayy of Sunshine
            <br />
            <span className="italic">We Love youu</span>
          </h2>

          <p className="mt-5 text-sm text-[#806E84] sm:text-base">
            Here are a few of our favourite moments together:
          </p>
        </motion.div>

        {/* Scrapbook */}
        <ScrapbookBook />
      </div>
    </section>
  );
}