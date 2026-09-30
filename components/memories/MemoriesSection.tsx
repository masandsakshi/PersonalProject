"use client";

import { useState } from "react";
import { motion } from "motion/react";

import { friends, type Friend } from "@/data/friends";
import FriendPolaroid from "./FriendPolaroid";
import CamcorderModal from "./CamcorderModal";

export default function MemoriesSection() {
  const [selectedFriend, setSelectedFriend] =
    useState<Friend | null>(null);

  return (
    <section
      id="memories"
      className="relative min-h-screen overflow-hidden bg-[#F8F2F8] px-6 py-28 sm:px-10"
    >
      {/* Decorative flowers */}
      <div className="pointer-events-none absolute left-[5%] top-[8%] text-3xl opacity-60">
        🌷
      </div>

      <div className="pointer-events-none absolute right-[6%] top-[12%] text-2xl opacity-60">
        ✦
      </div>

      <div className="pointer-events-none absolute bottom-[10%] left-[8%] text-2xl opacity-50">
        ♡
      </div>

      <div className="pointer-events-none absolute bottom-[15%] right-[8%] text-3xl opacity-50">
        🌸
      </div>

      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-xs tracking-[0.35em] text-[#9A7FA1]"
        >
          FOR YOU, FROM US
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-5xl italic leading-[1.05] text-[#55405F] sm:text-6xl md:text-7xl"
        >
          <span className="block">From Your People,</span>
          <span className="mt-2 block">With Love ♡</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mx-auto mt-7 max-w-xl font-serif text-lg leading-relaxed text-[#756078]"
        >
          Seven little pieces of love from seven people
          who think you&apos;re pretty wonderful.
        </motion.p>
      </div>

      {/* Friend Polaroids */}
      <div className="mx-auto mt-20 flex max-w-5xl flex-wrap justify-center gap-x-8 gap-y-20">
        {friends.map((friend, index) => (
          <FriendPolaroid
            key={friend.id}
            friend={friend}
            index={index}
            onClick={() => setSelectedFriend(friend)}
          />
        ))}
      </div>

      {/* Instruction */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="mt-20 text-center font-serif text-sm italic text-[#A48AAA]"
      >
        click a face to hear what they have to say ♡
      </motion.p>

      <CamcorderModal
        friend={selectedFriend}
        onClose={() => setSelectedFriend(null)}
      />
    </section>
  );
}