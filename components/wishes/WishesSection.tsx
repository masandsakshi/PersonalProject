"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { birthdayWishes, type BirthdayWish } from "@/data/wishes";

export default function WishesSection() {
  const [openedWishes, setOpenedWishes] = useState<string[]>([]);
  const [selectedWish, setSelectedWish] =
    useState<BirthdayWish | null>(null);

  const allOpened =
    openedWishes.length === birthdayWishes.length;

  const openWish = (wish: BirthdayWish) => {
    if (!openedWishes.includes(wish.id)) {
      setOpenedWishes((current) => [...current, wish.id]);
    }

    setSelectedWish(wish);
  };

  return (
    <section
      id="wishes"
      className="relative min-h-screen overflow-hidden bg-[#FFF9F7] px-6 py-24 sm:px-10 sm:py-28"
    >
      {/* ============================================================ */}
      {/* Background decorations                                        */}
      {/* ============================================================ */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top left heart */}
        <span className="absolute left-[8%] top-[10%] text-3xl text-[#E9B7CB]">
          ♡
        </span>

        {/* Top right sparkle */}
        <span className="absolute right-[9%] top-[13%] text-2xl text-[#CDB9E5]">
          ✦
        </span>

        {/* Left middle sparkle */}
        <span className="absolute left-[17%] top-[47%] text-lg text-[#BFDCEC]">
          ✦
        </span>

        {/* Right middle heart */}
        <span className="absolute right-[16%] top-[55%] text-xl text-[#E9B7CB]">
          ♡
        </span>

        {/* Bottom left tiny flower */}
        <span className="absolute bottom-[9%] left-[11%] text-xl text-[#DDB5D1]">
          ✿
        </span>

        {/* Bottom right tiny flower */}
        <span className="absolute bottom-[10%] right-[9%] text-xl text-[#C9B8E0]">
          ✿
        </span>
      </div>

      {/* ============================================================ */}
      {/* Heading                                                        */}
      {/* ============================================================ */}

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-xs tracking-[0.35em] text-[#9A7FA1] sm:text-sm"
        >
          A LITTLE SOMETHING FOR YOUR 22ND
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-5xl italic leading-tight text-[#55405F] sm:text-6xl md:text-7xl"
        >
          My Wish for Annie
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-5 max-w-lg font-serif text-lg leading-relaxed text-[#756078]"
        >
          Six little wishes for the year ahead.
          <br />
          <span className="italic">
            One from each of your people ♡
          </span>
        </motion.p>
      </div>

      {/* ============================================================ */}
      {/* Cake                                                           */}
      {/* ============================================================ */}

      <div className="relative z-10 mx-auto mt-4 flex max-w-4xl flex-col items-center sm:mt-6">
        <BirthdayCake
          wishes={birthdayWishes}
          openedWishes={openedWishes}
          onCandleClick={openWish}
        />

        {/* ======================================================== */}
        {/* Instruction                                               */}
        {/* ======================================================== */}

        <AnimatePresence mode="wait">
          {!allOpened && (
            <motion.p
              key="instruction"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="mt-3 font-serif text-sm italic text-[#A48AAA] sm:mt-5"
            >
              click a candle to open a little wish ♡
            </motion.p>
          )}
        </AnimatePresence>

        {/* ======================================================== */}
        {/* Completion message                                       */}
        {/* ======================================================== */}

        <AnimatePresence>
          {allOpened && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 100,
                damping: 14,
              }}
              className="mt-8 text-center"
            >
              <div className="mb-3 text-xl tracking-[0.5em] text-[#D89AB5]">
                ♡ ✦ ♡
              </div>

              <p className="font-serif text-3xl italic text-[#55405F]">
                Six smol wishes.
              </p>

              <p className="mt-1 font-serif text-2xl text-[#8B6F91]">
                One very loved Annie. ♡
              </p>

              <p className="mt-5 text-xs tracking-[0.25em] text-[#B49CB8]">
                ALL YOUR WISHES ARE HERE
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ============================================================ */}
      {/* Wish Letter                                                    */}
      {/* ============================================================ */}

      <WishLetter
        wish={selectedWish}
        onClose={() => setSelectedWish(null)}
      />
    </section>
  );
}

/* ====================================================================== */
/* Birthday Cake                                                          */
/* ====================================================================== */

function BirthdayCake({
  wishes,
  openedWishes,
  onCandleClick,
}: {
  wishes: BirthdayWish[];
  openedWishes: string[];
  onCandleClick: (wish: BirthdayWish) => void;
}) {
  return (
    <div className="relative h-[410px] w-full max-w-[620px] sm:h-[455px]">
      {/* ============================================================ */}
      {/* Soft cake glow                                                */}
      {/* ============================================================ */}

      <div className="pointer-events-none absolute bottom-[12px] left-1/2 h-16 w-[82%] -translate-x-1/2 rounded-[50%] bg-[#E8C9D8]/35 blur-2xl" />

      <div className="pointer-events-none absolute bottom-[28px] left-1/2 h-10 w-[75%] -translate-x-1/2 rounded-[50%] bg-[#D8C2E4]/25 blur-xl" />

      {/* ============================================================ */}
      {/* Plate                                                          */}
      {/* ============================================================ */}

      <div className="absolute bottom-[17px] left-1/2 h-9 w-[88%] -translate-x-1/2 rounded-[50%] border-2 border-[#DDB8CB] bg-[#FFFDFD] shadow-[0_8px_18px_rgba(120,80,110,0.1)] sm:bottom-[18px]" />

      {/* ============================================================ */}
      {/* Bottom cake layer                                             */}
      {/* ============================================================ */}

      <div className="absolute bottom-[40px] left-1/2 z-10 h-[82px] w-[78%] -translate-x-1/2 rounded-[20px] border-4 border-[#DDB8CB] bg-[#E9CBE0] shadow-[0_12px_24px_rgba(130,87,113,0.13)] sm:h-[88px]">
        {/* Ribbon */}
        <div className="absolute left-0 right-0 top-[22px] h-[14px] bg-[#D5C1E7]" />

        {/* Bottom frosting */}
        <div className="absolute bottom-[-2px] left-0 right-0 h-6 rounded-b-[16px] bg-[#F8E9F1]" />

        {/* Tiny details */}
        <span className="absolute left-[16%] top-[45px] text-sm text-[#D89AB5]">
          ♡
        </span>

        <span className="absolute left-[47%] top-[44px] text-sm text-[#B19CCB]">
          ✦
        </span>

        <span className="absolute right-[16%] top-[45px] text-sm text-[#D89AB5]">
          ♡
        </span>
      </div>

      {/* ============================================================ */}
      {/* Middle cake layer                                             */}
      {/* ============================================================ */}

      <div className="absolute bottom-[108px] left-1/2 z-10 h-[112px] w-[70%] -translate-x-1/2 rounded-[20px] border-4 border-[#EBC4D5] bg-[#F6DCE7] shadow-[0_12px_22px_rgba(130,87,113,0.11)] sm:h-[120px]">
        {/* Frosting stripe */}
        <div className="absolute left-0 right-0 top-6 h-6 bg-[#FFF5F9]" />

        {/* Frosting drips */}
        <div className="absolute left-[12%] top-[20px] h-9 w-8 rounded-b-full bg-[#FFF5F9]" />

        <div className="absolute left-[39%] top-[20px] h-12 w-9 rounded-b-full bg-[#FFF5F9]" />

        <div className="absolute right-[35%] top-[20px] h-9 w-8 rounded-b-full bg-[#FFF5F9]" />

        <div className="absolute right-[12%] top-[20px] h-11 w-9 rounded-b-full bg-[#FFF5F9]" />

        {/* Decorations */}
        <span className="absolute left-[18%] top-[63px] text-base text-[#D89AB5]">
          ♡
        </span>

        <span className="absolute left-[48%] top-[61px] text-sm text-[#A99BC8]">
          ✦
        </span>

        <span className="absolute right-[18%] top-[63px] text-base text-[#D89AB5]">
          ♡
        </span>
      </div>

      {/* ============================================================ */}
      {/* Cake top                                                        */}
      {/* ============================================================ */}

      <div className="absolute bottom-[205px] left-1/2 z-10 h-[78px] w-[64%] -translate-x-1/2 rounded-[50%] border-4 border-[#F0D0DE] bg-[#FFF3F7] shadow-[0_8px_18px_rgba(130,87,113,0.1)] sm:h-[85px]">
        {/* Cream frosting */}
        <div className="absolute inset-x-0 top-[-3px] h-[46px] rounded-[50%] bg-[#FFFDFD]" />

        {/* Frosting edge */}
        <div className="absolute left-[10%] right-[10%] top-[30px] h-4 rounded-[50%] bg-[#FCEBF2]" />

        {/* Sprinkles */}
        <span className="absolute left-[22%] top-[14px] rotate-12 text-xs text-[#D89AB5]">
          ✦
        </span>

        <span className="absolute left-[49%] top-[11px] text-xs text-[#AFA0D0]">
          ♡
        </span>

        <span className="absolute right-[22%] top-[14px] text-xs text-[#D89AB5]">
          ✦
        </span>
      </div>

      {/* ============================================================ */}
      {/* Candles                                                        */}
      {/* ============================================================ */}

      <div className="absolute bottom-[255px] left-1/2 z-30 flex -translate-x-1/2 items-end justify-center gap-1 sm:gap-3">
        {wishes.map((wish, index) => (
          <Candle
            key={wish.id}
            index={index}
            opened={openedWishes.includes(wish.id)}
            onClick={() => onCandleClick(wish)}
          />
        ))}
      </div>
    </div>
  );
}

/* ====================================================================== */
/* Candle                                                                  */
/* ====================================================================== */

function Candle({
  index,
  opened,
  onClick,
}: {
  index: number;
  opened: boolean;
  onClick: () => void;
}) {
  const colors = [
    "bg-[#F3B8CC]",
    "bg-[#C8B8E3]",
    "bg-[#AFCFE2]",
    "bg-[#E8AFC6]",
    "bg-[#CDBBE5]",
    "bg-[#B8D8E8]",
    "bg-[#E5B7CB]",
  ];

  return (
    <motion.button
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: 0.2 + index * 0.08,
        type: "spring",
        stiffness: 140,
        damping: 12,
      }}
      whileHover={{
        scale: 1.08,
        y: -4,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={onClick}
      aria-label={`Open birthday wish ${index + 1}`}
      className="group relative flex h-[105px] w-7 flex-col items-center justify-end focus:outline-none sm:h-[118px] sm:w-8"
    >
      {/* ========================================================== */}
      {/* Flame                                                        */}
      {/* ========================================================== */}

      <AnimatePresence>
        {!opened && (
          <motion.span
            initial={{
              opacity: 0,
              scale: 0,
              y: 5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0,
              y: -18,
            }}
            transition={{
              duration: 0.25,
            }}
            className="absolute top-[-2px] text-lg sm:text-xl"
          >
            🔥
          </motion.span>
        )}
      </AnimatePresence>

      {/* ========================================================== */}
      {/* Candle body                                                  */}
      {/* ========================================================== */}

      <div
        className={`relative h-[76px] w-5 rounded-t-sm rounded-b-md ${colors[index]} shadow-[inset_-3px_0_rgba(120,80,110,0.08)] sm:h-[88px] sm:w-6`}
      >
        {/* Stripe */}
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 rotate-[8deg] bg-white/40" />

        <span className="absolute left-1 top-5 h-1 w-3 rotate-[-8deg] rounded-full bg-white/50" />

        <span className="absolute left-1 top-12 h-1 w-3 rotate-[-8deg] rounded-full bg-white/50" />

        {/* Wick */}
        <span className="absolute -top-1 left-1/2 h-2 w-px -translate-x-1/2 bg-[#6B5968]" />
      </div>

      {/* ========================================================== */}
      {/* Little sparkle when opened                                   */}
      {/* ========================================================== */}

      <AnimatePresence>
        {opened && (
          <>
            <motion.span
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.3, 1.8],
                y: [0, -8, -15],
              }}
              transition={{
                duration: 0.7,
              }}
              className="pointer-events-none absolute top-0 text-sm text-[#E8B6CA]"
            >
              ✦
            </motion.span>

            <motion.span
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1, 1.5],
                x: [0, -8, -13],
                y: [0, -4, -9],
              }}
              transition={{
                duration: 0.65,
                delay: 0.05,
              }}
              className="pointer-events-none absolute top-1 text-xs text-[#C7B4DE]"
            >
              ✦
            </motion.span>
          </>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

/* ====================================================================== */
/* Wish Letter                                                             */
/* ====================================================================== */

function WishLetter({
  wish,
  onClose,
}: {
  wish: BirthdayWish | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {wish && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#493B50]/65 px-5 py-8 backdrop-blur-sm"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 30,
              rotate: -2,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              rotate: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 18,
            }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-xl"
          >
            {/* Paper */}
            <div className="relative overflow-hidden rounded-sm bg-[#FFFDF8] px-8 py-10 shadow-[0_20px_60px_rgba(40,25,45,0.2)] sm:px-14 sm:py-14">
              {/* Paper lines */}
              <div className="pointer-events-none absolute inset-0 opacity-30 [background:repeating-linear-gradient(0deg,transparent,transparent_31px,#E7DCE4_32px)]" />

              {/* Tape */}
              <div className="absolute -top-2 left-1/2 h-8 w-28 -translate-x-1/2 rotate-[-2deg] bg-[#E6D4EA]/75" />

              {/* Flower */}
              <div className="absolute right-7 top-7 text-2xl opacity-70">
                🌷
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className="text-center text-xs tracking-[0.3em] text-[#A48AAA]">
                  A LITTLE WISH FOR ANNIE
                </p>

                <h3 className="mt-5 text-center font-serif text-3xl italic text-[#55405F]">
                  Dear Annie,
                </h3>

                <p className="mt-8 font-serif text-lg leading-[2] text-[#67556D]">
                  {wish.wish}
                </p>

                <div className="mt-10 text-right">
                  <p className="font-serif text-xl italic text-[#55405F]">
                    With love,
                  </p>

                  <p className="mt-1 font-serif text-2xl italic text-[#D89AB5]">
                    {wish.name} ♡
                  </p>
                </div>
              </div>

              {/* Bottom decoration */}
              <div className="relative z-10 mt-8 text-center text-sm tracking-[0.4em] text-[#D8B4C8]">
                ✦ ♡ ✦
              </div>
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              className="mx-auto mt-5 block font-serif text-sm text-white/70 transition-colors hover:text-white"
            >
              close ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}