"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FFF9F3]">
      {/* ================================================================ */}
      {/* Background Decorations                                           */}
      {/* ================================================================ */}

      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-[8%] top-[12%] text-2xl text-[#DCCCF2]">
          ✦
        </span>

        <span className="absolute right-[12%] top-[18%] text-xl text-[#F4AFC1]">
          ♡
        </span>

        <span className="absolute bottom-[18%] left-[14%] text-xl text-[#CFE7F5]">
          ✦
        </span>

        <span className="absolute bottom-[15%] right-[10%] text-2xl text-[#DCCCF2]">
          ♡
        </span>
      </div>

      {/* ================================================================ */}
      {/* Main Hero                                                         */}
      {/* ================================================================ */}

      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-16">
        {/* ============================================================ */}
        {/* Scrapbook Photos                                              */}
        {/* ============================================================ */}

        <div className="pointer-events-none absolute inset-0 mx-auto max-w-[1500px]">
          {/* Top Left */}
          <ScrapPhoto
            src="/photos/annie/Baby_Annie.jpg"
            alt="Annie"
            className="left-[10%] top-[11%] hidden sm:block"
            rotate="-rotate-6"
            delay={0.25}
            size="large"
            floatDuration={5}
          />

          {/* Top Right */}
          <ScrapPhoto
            src="/photos/annie/Birthday_Annie.jpg"
            alt="Annie"
            className="right-[10%] top-[11%] hidden sm:block"
            rotate="rotate-6"
            delay={0.4}
            size="large"
            floatDuration={5.4}
          />

          {/* Middle Left */}
          <ScrapPhoto
            src="/photos/annie/Hawt_Annie.jpg"
            alt="Annie"
            className="left-[4%] top-[39%] hidden sm:block"
            rotate="rotate-4"
            delay={0.55}
            size="large"
            floatDuration={5.2}
          />

          {/* Middle Right */}
          <ScrapPhoto
            src="/photos/annie/Pretty_Annie.jpg"
            alt="Annie"
            className="right-[4%] top-[38%] hidden sm:block"
            rotate="-rotate-4"
            delay={0.7}
            size="large"
            floatDuration={5.6}
          />

          {/* Bottom Left */}
          <ScrapPhoto
            src="/photos/annie/Hawtie_Annie.jpg"
            alt="Annie"
            className="left-[20%] bottom-[5%] hidden md:block"
            rotate="-rotate-5"
            delay={0.85}
            size="medium"
            floatDuration={5.1}
          />

          {/* Bottom Right */}
          <ScrapPhoto
            src="/photos/annie/Saree_Annie.jpg"
            alt="Annie"
            className="right-[20%] bottom-[5%] hidden md:block"
            rotate="rotate-5"
            delay={1}
            size="medium"
            floatDuration={5.5}
          />
        </div>

        {/* ============================================================ */}
        {/* Central Content                                                */}
        {/* ============================================================ */}

        <div className="relative z-20 flex flex-col items-center text-center">
          {/* Little scrapbook label */}
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mb-5 text-xs tracking-[0.35em] text-[#8B6F91] sm:text-sm"
          >
            A LITTLE SCRAPBOOK
          </motion.div>

          {/* Happy Birthday */}
          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="mb-1 font-serif text-2xl italic text-[#8B6F91] sm:text-3xl"
          >
            happy birthday
          </motion.p>

          {/* Annie */}
          <motion.h1
            initial={{
              opacity: 0,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.25,
            }}
            className="font-serif text-7xl font-semibold tracking-tight text-[#55405F] sm:text-9xl md:text-[9rem] lg:text-[10rem]"
          >
            Annie
          </motion.h1>

          {/* ========================================================== */}
          {/* 22 Birthday Badge                                           */}
          {/* ========================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.65,
              type: "spring",
              stiffness: 120,
              damping: 12,
            }}
            className="relative mt-3 flex items-center justify-center"
          >
            {/* Left line */}
            <span className="mr-3 h-px w-10 bg-[#E9B7CB] sm:w-12" />

            {/* Badge */}
            <div className="relative flex h-12 min-w-[62px] items-center justify-center">
              {/* Soft hand-drawn oval */}
              <span className="absolute inset-0 rotate-[-3deg] rounded-[50%] border border-[#E9B7CB]" />

              <span className="absolute inset-[3px] rotate-[2deg] rounded-[50%] border border-[#F1C8D7]" />

              {/* Number */}
              <span className="relative z-10 font-serif text-3xl text-[#D89AB5]">
                22
              </span>
            </div>

            {/* Right line */}
            <span className="ml-3 h-px w-10 bg-[#E9B7CB] sm:w-12" />
          </motion.div>

          {/* Tiny birthday sparkle */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.9,
              type: "spring",
            }}
            className="mt-1 text-xs tracking-widest text-[#D89AB5]"
          >
            ♡ ✦ ♡
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.95,
            }}
            className="mt-7 max-w-md px-4 font-serif text-lg italic leading-relaxed text-[#756078]"
          >
            a little corner of the internet made by the people
            who love you ♡
          </motion.p>

          {/* Open Button */}
          <motion.button
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.15,
            }}
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={() => {
              document
                .getElementById("memories")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
            className="mt-7 rounded-full border border-[#E7B9CB] bg-[#F8DCE7] px-8 py-3 font-serif text-lg text-[#55405F] shadow-[0_4px_15px_rgba(216,154,181,0.15)] transition-shadow duration-300 hover:shadow-[0_7px_20px_rgba(216,154,181,0.25)]"
          >
            open me ♡
          </motion.button>
        </div>

        {/* ============================================================ */}
        {/* Footer Detail                                                  */}
        {/* ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
          className="absolute bottom-5 z-20 text-[10px] tracking-[0.2em] text-[#B49CB8] sm:text-xs"
        >
        </motion.div>
      </section>
    </main>
  );
}

/* ====================================================================== */
/* Scrapbook Photo                                                        */
/* ====================================================================== */

function ScrapPhoto({
  src,
  alt,
  className,
  rotate,
  delay,
  floatDuration = 5,
  size = "medium",
}: {
  src: string;
  alt: string;
  className: string;
  rotate: string;
  delay: number;
  floatDuration?: number;
  size?: "medium" | "large";
}) {
  const dimensions =
    size === "large"
      ? "h-64 w-48"
      : "h-56 w-44";

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.7,
        y: 70,
        rotate: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -4, 0],
        rotate: [0, 0.7, -0.7, 0],
      }}
      transition={{
        opacity: {
          duration: 0.45,
          delay,
        },

        scale: {
          duration: 0.75,
          delay,
          type: "spring",
          stiffness: 115,
          damping: 11,
        },

        y: {
          duration: floatDuration,
          delay: delay + 0.9,
          repeat: Infinity,
          ease: "easeInOut",
        },

        rotate: {
          duration: floatDuration + 0.5,
          delay: delay + 0.9,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className={`absolute ${className}`}
    >
      <div
        className={`relative ${dimensions} ${rotate} overflow-hidden rounded-[3px] bg-white p-3 shadow-[0_10px_30px_rgba(85,64,95,0.13)] transition-shadow duration-300 hover:shadow-[0_15px_35px_rgba(85,64,95,0.18)]`}
      >
        {/* Photograph */}
        <div className="relative h-full w-full overflow-hidden bg-[#F5EAF0]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 176px, 192px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
}