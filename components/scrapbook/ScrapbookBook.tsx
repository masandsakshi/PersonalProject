"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { scrapbookPages } from "@/data/scrapbook";

export default function ScrapbookBook() {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(0);

  const currentPage = scrapbookPages[page];
  const isFirstPage = page === 0;
  const isLastPage = page === scrapbookPages.length - 1;

  const nextPage = () => {
    if (!isLastPage) {
      setPage((current) => current + 1);
    }
  };

  const previousPage = () => {
    if (!isFirstPage) {
      setPage((current) => current - 1);
    }
  };

  return (
    <div className="relative mx-auto flex min-h-[570px] items-center justify-center">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* =========================
             CLOSED BOOK
          ========================== */
          <motion.button
            key="closed-book"
            type="button"
            onClick={() => setIsOpen(true)}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.94,
              transition: { duration: 0.3 },
            }}
            whileHover={{
              y: -8,
              rotate: -1,
              transition: { duration: 0.25 },
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative h-[430px] w-[310px] cursor-pointer sm:h-[470px] sm:w-[340px]"
          >
            {/* Book shadow */}
            <div className="absolute -bottom-5 left-[7%] h-8 w-[86%] rounded-[50%] bg-[#8C7893]/20 blur-xl" />

            {/* Book spine */}
            <div className="absolute inset-y-3 left-0 w-7 rounded-l-[18px] bg-[#C996B6] shadow-inner" />

            {/* Cover */}
            <div className="absolute inset-y-0 left-3 right-0 overflow-hidden rounded-r-[20px] rounded-l-[8px] border border-[#B985A4] bg-[#DDAFC7] shadow-[10px_14px_25px_rgba(73,59,80,0.18)]">
              {/* Paper texture */}
              <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff_0.7px,transparent_0.7px)] [background-size:8px_8px]" />

              {/* Inner border */}
              <div className="absolute inset-5 rounded-[13px] border border-dashed border-[#FFF4F7]/70" />

              {/* Decorative flowers */}
              <span className="absolute left-9 top-8 rotate-[-12deg] text-2xl text-[#FFF4F7]">
                ✿
              </span>

              <span className="absolute right-10 top-10 rotate-[15deg] text-xl text-[#FFF4F7]">
                ✦
              </span>

              <span className="absolute bottom-10 left-10 rotate-[8deg] text-xl text-[#FFF4F7]">
                ♡
              </span>

              <span className="absolute bottom-9 right-10 rotate-[-8deg] text-2xl text-[#FFF4F7]">
                ✿
              </span>

              {/* Cover text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
                <p className="mb-4 font-serif text-lg italic text-[#FFF8FA]">
                  a little book of
                </p>

                <h3 className="font-serif text-4xl leading-[1.05] text-white sm:text-5xl">
                  Annie
                  <br />
                  <span className="italic">&amp; Friends</span>
                </h3>

                <div className="my-7 h-px w-24 bg-[#FFF4F7]/70" />

                <p className="font-serif text-2xl italic text-[#FFF8FA]">
                  The Scrapbook :)
                </p>

                <div className="mt-8 flex items-center gap-3 text-sm text-[#FFF4F7]">
                  <span>♡</span>
                  <span className="text-[10px] tracking-[0.25em]">
                    MADE WITH LOVE
                  </span>
                  <span>♡</span>
                </div>
              </div>

              {/* Open hint */}
              <div className="absolute bottom-5 left-0 right-0 text-center text-[10px] tracking-[0.2em] text-[#FFF4F7]/80 transition-opacity duration-300 group-hover:opacity-0">
                OPEN ME ♡
              </div>
            </div>
          </motion.button>
        ) : (
          /* =========================
             OPEN BOOK
          ========================== */
          <motion.div
            key="open-book"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full max-w-[1050px]"
          >
            {/* Book shadow */}
            <div className="absolute -bottom-7 left-[5%] h-10 w-[90%] rounded-[50%] bg-[#75667B]/20 blur-2xl" />

            {/* BOOK */}
            <div className="relative mx-auto grid min-h-[440px] grid-cols-1 overflow-hidden rounded-[12px] bg-[#E7D8E6] p-3 shadow-[0_18px_45px_rgba(73,59,80,0.2)] sm:min-h-[500px] sm:grid-cols-2 sm:p-4">

              {/* =========================
                  LEFT PAGE
              ========================== */}
              <div className="relative overflow-hidden rounded-l-[7px] bg-[#FFFDF7] px-5 py-8 shadow-[inset_-8px_0_15px_rgba(90,70,90,0.06)] sm:px-8">

                {/* Paper lines */}
                <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(transparent_31px,#E9DDE7_32px)] [background-size:100%_32px]" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage.id}
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4 }}
                    className="relative flex h-full items-center justify-center"
                  >

                    {/* =================================
                        ONE PHOTO
                    ================================== */}
                    {currentPage.photos.length === 1 && (
                      <div className="relative w-full max-w-[360px] rotate-[-2deg] bg-white p-3 pb-12 shadow-[0_8px_18px_rgba(73,59,80,0.15)]">

                        {/* Tape */}
                        <div className="absolute -top-4 left-1/2 h-9 w-20 -translate-x-1/2 rotate-[-2deg] bg-[#E8BFD0]/70" />

                        <div className="relative aspect-[4/3] overflow-hidden bg-[#F2EDF2]">
                          <img
                            src={currentPage.photos[0]}
                            alt={`Annie with ${currentPage.name}`}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        <p className="absolute bottom-3 left-0 right-0 text-center font-serif text-sm italic text-[#66566A]">
                          {currentPage.note}
                        </p>
                      </div>
                    )}

                    {/* =================================
                        TWO OR MORE PHOTOS
                    ================================== */}
                    {currentPage.photos.length > 1 && (
                      <div className="relative h-[360px] w-full">

                        {/* PHOTO 1 — HIGHER */}
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 20,
                            rotate: -8,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            rotate: -6,
                          }}
                          transition={{
                            duration: 0.5,
                          }}
                          className="absolute left-[3%] top-[4%] w-[47%] bg-white p-3 pb-11 shadow-[0_9px_20px_rgba(73,59,80,0.16)]"
                        >
                          {/* Tape */}
                          <div className="absolute -top-4 left-[28%] h-9 w-20 rotate-[-5deg] bg-[#E8BFD0]/75" />

                          <div className="relative aspect-[4/3] overflow-hidden bg-[#F2EDF2]">
                            <img
                              src={currentPage.photos[0]}
                              alt={`Annie with ${currentPage.name}`}
                              className="h-full w-full object-cover"
                            />
                          </div>

                          <p className="absolute bottom-2 left-0 right-0 text-center font-serif text-xs italic text-[#756477]">
                            ♡
                          </p>
                        </motion.div>

                        {/* PHOTO 2 — LOWER */}
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 20,
                            rotate: 8,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            rotate: 6,
                          }}
                          transition={{
                            duration: 0.5,
                            delay: 0.1,
                          }}
                          className="absolute bottom-[3%] right-[3%] w-[47%] bg-white p-3 pb-11 shadow-[0_9px_20px_rgba(73,59,80,0.16)]"
                        >
                          {/* Tape */}
                          <div className="absolute -top-4 right-[25%] h-9 w-20 rotate-[5deg] bg-[#C8D8EC]/75" />

                          <div className="relative aspect-[4/3] overflow-hidden bg-[#F2EDF2]">
                            <img
                              src={currentPage.photos[1]}
                              alt={`Annie with ${currentPage.name}`}
                              className="h-full w-full object-cover"
                            />
                          </div>

                          <p className="absolute bottom-2 left-0 right-0 text-center font-serif text-xs italic text-[#756477]">
                            ♡
                          </p>
                        </motion.div>

                        {/* Tiny doodle */}
                        <span className="absolute bottom-[8%] left-[43%] rotate-[-10deg] font-serif text-xl text-[#C795B1]">
                          ✦
                        </span>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* =========================
                  RIGHT PAGE
              ========================== */}
              <div className="relative overflow-hidden rounded-r-[7px] bg-[#FFFDF7] px-7 py-8 shadow-[inset_8px_0_15px_rgba(90,70,90,0.06)] sm:px-10">

                {/* Paper lines */}
                <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(transparent_31px,#E9DDE7_32px)] [background-size:100%_32px]" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage.id}
                    initial={{
                      opacity: 0,
                      x: 35,
                      rotate: 1,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -25,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                    className="relative flex h-full flex-col items-center justify-center text-center"
                  >
                    {/* Decorative details */}
                    <div className="absolute right-2 top-2 rotate-[8deg] text-xl text-[#C7B1CE]">
                      ✦
                    </div>

                    <div className="absolute left-2 top-5 rotate-[-12deg] text-lg text-[#D7A9C1]">
                      ♡
                    </div>

                    <p className="mb-3 text-[10px] tracking-[0.25em] text-[#A184A8]">
                      A MEMORY WITH
                    </p>

                    <h3 className="font-serif text-4xl text-[#493B50] sm:text-5xl">
                      {currentPage.name}
                    </h3>

                    <div className="my-5 flex items-center gap-3 text-[#C795B1]">
                      <span>♡</span>

                      <span className="h-px w-12 bg-[#D9C2D7]" />

                      <span>✦</span>

                      <span className="h-px w-12 bg-[#D9C2D7]" />

                      <span>♡</span>
                    </div>

                    <p className="max-w-xs font-serif text-lg italic leading-relaxed text-[#756477]">
                      
                    </p>

                    <div className="mt-8 rotate-[-3deg] rounded-sm bg-[#F8E4A9] px-4 py-2 text-xs text-[#6F5D4B] shadow-sm">
                    ♡
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Page number */}
                <div className="absolute bottom-4 right-6 font-serif text-xs italic text-[#AA99AC]">
                  {String(page + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Centre binding */}
              <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[#D3C0D1] shadow-[0_0_8px_rgba(80,60,80,0.15)] sm:block" />
            </div>

            {/* =========================
                NAVIGATION
            ========================== */}
            <div className="mt-7 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={previousPage}
                disabled={isFirstPage}
                className="rounded-full px-4 py-2 font-serif text-sm italic text-[#756477] transition hover:bg-white/60 disabled:pointer-events-none disabled:opacity-25"
              >
                ← previous
              </button>

              <div className="flex items-center gap-2">
                {scrapbookPages.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPage(index)}
                    aria-label={`Go to ${item.name}'s page`}
                    className={`h-1.5 rounded-full transition-all ${
                      index === page
                        ? "w-7 bg-[#B986A5]"
                        : "w-1.5 bg-[#CFC0D1]"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextPage}
                disabled={isLastPage}
                className="rounded-full px-4 py-2 font-serif text-sm italic text-[#756477] transition hover:bg-white/60 disabled:pointer-events-none disabled:opacity-25"
              >
                next →
              </button>
            </div>

            {/* Close book */}
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                setPage(0);
              }}
              className="mx-auto mt-3 block text-[10px] tracking-[0.2em] text-[#9A899D] transition hover:text-[#66566A]"
            >
              CLOSE THE SCRAPBOOK
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}