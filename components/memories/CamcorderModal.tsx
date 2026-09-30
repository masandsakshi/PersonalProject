"use client";

import { AnimatePresence, motion } from "motion/react";
import type { Friend } from "@/data/friends";

type Props = {
  friend: Friend | null;
  onClose: () => void;
};

export default function CamcorderModal({
  friend,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {friend && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#302638]/80 px-5 py-8 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 18,
            }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-3xl"
          >
            {/* Camcorder body */}
            <div className="rounded-[2rem] bg-[#6C6570] p-3 shadow-2xl sm:p-5">

              {/* Top controls */}
              <div className="flex items-center justify-between px-3 pb-3 font-mono text-[10px] tracking-widest text-[#EEE8EF] sm:px-5 sm:text-xs">
                <span>HANDYCAM</span>

                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#F5A7BA]" />
                  REC
                </span>

                <span>SP</span>
              </div>

              {/* Screen */}
              <div className="relative aspect-video overflow-hidden rounded-xl bg-[#19161B] shadow-inner">

                {/* ACTUAL VIDEO */}
                <video
                    key={friend.video}
                    src={friend.video}
                    poster={friend.photo}
                    controls
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-contain bg-black"
                />

                {/* Camcorder HUD */}
                <div className="pointer-events-none absolute inset-0 p-4 font-mono text-[10px] text-white/80 sm:p-6 sm:text-xs">
                  <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#FF7D96]" />
                      REC
                    </span>

                    <span>22:00:22</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex justify-between sm:bottom-6 sm:left-6 sm:right-6">
                    <span>PLAY</span>
                    <span>AUTO</span>
                    <span>🔋</span>
                  </div>
                </div>

                {/* Scanlines */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background:repeating-linear-gradient(0deg,transparent,transparent_3px,#fff_4px)]" />
              </div>

              {/* Bottom camcorder controls */}
              <div className="flex items-center justify-between px-3 pt-3 text-[#EEE8EF] sm:px-5 sm:pt-4">
                <div className="font-mono text-[10px]">
                  MEMORY_01
                </div>

                <div className="h-8 w-14 rounded-full bg-[#4E4851] shadow-inner" />

                <div className="font-mono text-[10px]">
                  VHS ♡
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="mt-5 text-center">
              <p className="font-serif text-xl italic text-white">
                A memory from {friend.name} ♡
              </p>

              <button
                type="button"
                onClick={onClose}
                className="mt-3 text-sm tracking-wide text-white/60 transition-colors hover:text-white"
              >
                close ×
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}