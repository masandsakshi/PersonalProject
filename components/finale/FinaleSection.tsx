"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FinaleSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const handlePlay = async () => {
    if (!videoRef.current) return;

    try {
      await videoRef.current.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setHasFinished(true);
  };

  return (
    <section
      id="finale"
      className="relative min-h-screen overflow-hidden bg-[#FFF7F5] px-5 py-24 sm:px-10 sm:py-28"
    >
      {/* ==================================================
          BACKGROUND
      =================================================== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Soft glow */}
        <div className="absolute left-1/2 top-[45%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8C9DD]/20 blur-[100px]" />

        {/* Scrapbook decorations */}
        <span className="absolute left-[8%] top-[18%] rotate-[-12deg] font-serif text-2xl text-[#D8B7CC]">
          ♡
        </span>

        <span className="absolute right-[9%] top-[23%] rotate-[10deg] text-xl text-[#C9B5D3]">
          ✦
        </span>

        <span className="absolute bottom-[19%] left-[11%] rotate-[8deg] text-xl text-[#D8B7CC]">
          ✿
        </span>

        <span className="absolute bottom-[15%] right-[12%] rotate-[-8deg] font-serif text-2xl text-[#C9B5D3]">
          ♡
        </span>

        <span className="absolute left-[18%] top-[52%] text-sm text-[#DABFD1]">
          ✧
        </span>

        <span className="absolute right-[18%] top-[61%] text-sm text-[#DABFD1]">
          ♡
        </span>
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center">

        {/* ==================================================
            INTRO
        =================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-[10px] tracking-[0.32em] text-[#A184A8]">
            ONE LAST THING ♡
          </p>

          <h2 className="font-serif text-4xl leading-tight text-[#493B50] sm:text-6xl">
            Look How SESKI you ARE.
            <br />
            <span className="italic"></span>
          </h2>

          <p className="mt-5 font-serif text-base italic text-[#806E84]">
          </p>
        </motion.div>

        {/* ==================================================
            VIDEO
        =================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="relative w-full max-w-[850px]"
        >
          {/* Shadow */}
          <div className="absolute -bottom-8 left-[5%] h-12 w-[90%] rounded-[50%] bg-[#735D72]/20 blur-2xl" />

          {/* Scrapbook frame */}
          <div className="relative rounded-[18px] bg-[#D7B4CC] p-3 shadow-[0_20px_50px_rgba(73,59,80,0.2)] sm:p-5">

            {/* Decorative tape */}
            <div className="absolute -left-4 top-[12%] h-12 w-24 rotate-[-8deg] bg-[#F1D4A8]/70" />

            <div className="absolute -right-4 bottom-[13%] h-12 w-24 rotate-[7deg] bg-[#C8D8EC]/70" />

            {/* Inner video frame */}
            <div className="relative overflow-hidden rounded-[10px] border-[3px] border-[#FFF8FA] bg-[#493B50]">

              <video
                ref={videoRef}
                src="/videos/finale.mp4"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={handleEnded}
                playsInline
                controls
                preload="metadata"
                className="block aspect-video w-full object-cover"
              />

              {/* Custom play overlay */}
              <AnimatePresence>
                {!isPlaying && !hasFinished && (
                  <motion.button
                    type="button"
                    onClick={handlePlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-[#493B50]/25 backdrop-blur-[2px]"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex h-20 w-20 items-center justify-center rounded-full border border-white/70 bg-white/90 text-[#9E708F] shadow-[0_8px_25px_rgba(0,0,0,0.18)] sm:h-24 sm:w-24"
                    >
                      <span className="ml-1 text-xl sm:text-2xl">
                        ▶
                      </span>
                    </motion.div>

                    <span className="absolute bottom-6 left-0 right-0 font-serif text-sm italic text-white">
                      press play ♡
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Film grain */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#ffffff_0.7px,transparent_0.7px)] [background-size:5px_5px]" />
            </div>

            {/* Frame caption */}
            <div className="mt-4 flex items-center justify-center gap-3 text-[#FFF8FA]">
              <span>♡</span>

              <span className="font-serif text-sm italic">
                a little something from us to you
              </span>

              <span>♡</span>
            </div>
          </div>
        </motion.div>

        {/* ==================================================
            FINAL MESSAGE
        =================================================== */}
        <AnimatePresence>
          {hasFinished && (
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="mt-16 max-w-2xl text-center"
            >
              {/* Divider */}
              <div className="mb-7 flex items-center justify-center gap-4 text-[#C795B1]">
                <span className="h-px w-16 bg-[#DCC5D8]" />

                <span>♡</span>

                <span className="h-px w-16 bg-[#DCC5D8]" />
              </div>

              {/* Main message */}
              <p className="font-serif text-3xl leading-relaxed text-[#493B50] sm:text-4xl">
                Thank you for everything you do.
              </p>

              <p className="mt-4 font-serif text-2xl italic leading-relaxed text-[#806E84] sm:text-3xl">
                Hope you have the most
                <br />

                <span className="text-[#B9789B]">
                  AMAZING year ahead.
                </span>
              </p>

              {/* Final line */}
              <motion.p
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                }}
                className="mt-8 font-serif text-2xl italic text-[#493B50] sm:text-3xl"
              >
                You gorgeous hooman being! ♡
              </motion.p>

              <div className="mt-8 text-sm tracking-[0.35em] text-[#C795B1]">
                ✦ ♡ ✦
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ==================================================
            FOOTER
        =================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="font-serif text-sm italic text-[#A184A8]">
            happy birthday, ANNIEE (have the bestest 22 EVER :3) ♡
          </p>

          <p className="mt-3 text-[9px] tracking-[0.28em] text-[#B9A5B7]">
          </p>
        </motion.div>
      </div>
    </section>
  );
}