"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { playlist } from "@/data/playlist";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const currentSong = playlist[currentIndex];

  /* =========================
     LOAD SONG
  ========================== */

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.src = currentSong.file;
    audioRef.current.load();

    setProgress(0);
    setDuration(0);

    if (isPlaying) {
      audioRef.current
        .play()
        .catch(() => setIsPlaying(false));
    }
  }, [currentIndex]);

  /* =========================
     AUDIO EVENTS
  ========================== */

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const updateProgress = () => {
      setProgress(audio.currentTime);
    };

    const updateDuration = () => {
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => {
      if (currentIndex < playlist.length - 1) {
        setCurrentIndex((index) => index + 1);
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
        setProgress(0);
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentIndex]);

  /* =========================
     PLAY / PAUSE
  ========================== */

  const togglePlay = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }
  };

  /* =========================
     NEXT / PREVIOUS
  ========================== */

  const nextSong = () => {
    if (currentIndex < playlist.length - 1) {
      setCurrentIndex((index) => index + 1);
      setIsPlaying(true);
    }
  };

  const previousSong = () => {
    if (progress > 3) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
      }

      setProgress(0);
      return;
    }

    if (currentIndex > 0) {
      setCurrentIndex((index) => index - 1);
      setIsPlaying(true);
    }
  };

  /* =========================
     SEEK
  ========================== */

  const handleSeek = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = Number(event.target.value);

    if (audioRef.current) {
      audioRef.current.currentTime = value;
    }

    setProgress(value);
  };

  /* =========================
     TIME FORMAT
  ========================== */

  const formatTime = (seconds: number) => {
    if (!Number.isFinite(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const progressPercentage =
    duration > 0 ? (progress / duration) * 100 : 0;

  return (
    <div className="mx-auto max-w-[1050px]">
      <audio ref={audioRef} preload="metadata" />

      <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">

        {/* ==========================================
            RECORD PLAYER
        =========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Shadow */}
          <div className="absolute -bottom-8 left-[8%] h-12 w-[84%] rounded-[50%] bg-[#756070]/20 blur-2xl" />

          {/* Player */}
          <div className="relative overflow-hidden rounded-[28px] border border-[#B88CA8] bg-[#D9A9C1] p-5 shadow-[0_20px_45px_rgba(73,59,80,0.22)] sm:p-7">

            {/* Plastic texture */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:radial-gradient(#ffffff_0.7px,transparent_0.7px)] [background-size:7px_7px]" />

            {/* Top decorative strip */}
            <div className="relative mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#FFF4F8]" />
                <span className="text-[8px] font-medium tracking-[0.25em] text-[#FFF4F8]/80">
                  ANNIE FM
                </span>
              </div>

              <span className="font-serif text-xs italic text-[#FFF4F8]/80">
                ♡ 22
              </span>
            </div>

            {/* Main deck */}
            <div className="relative rounded-[20px] bg-[#F4E7EF] p-5 shadow-[inset_0_2px_8px_rgba(73,59,80,0.12)] sm:p-7">

              {/* Turntable */}
              <div className="relative mx-auto aspect-square w-full max-w-[390px]">

                {/* Turntable platter */}
                <div className="absolute inset-[5%] rounded-full bg-[#CDB9C9] shadow-[inset_0_5px_12px_rgba(73,59,80,0.15)]" />

                {/* Record */}
                <motion.div
                  animate={{
                    rotate: isPlaying ? 360 : 0,
                  }}
                  transition={{
                    duration: 3.2,
                    repeat: isPlaying ? Infinity : 0,
                    ease: "linear",
                  }}
                  className="absolute inset-[10%] rounded-full bg-[#493B50] shadow-[0_8px_15px_rgba(73,59,80,0.25)]"
                >
                  {/* Vinyl grooves */}
                  <div className="absolute inset-[5%] rounded-full border border-[#746276]/50" />
                  <div className="absolute inset-[11%] rounded-full border border-[#746276]/40" />
                  <div className="absolute inset-[17%] rounded-full border border-[#746276]/35" />
                  <div className="absolute inset-[23%] rounded-full border border-[#746276]/30" />
                  <div className="absolute inset-[29%] rounded-full border border-[#746276]/25" />

                  {/* Label */}
                  <div className="absolute left-1/2 top-1/2 flex aspect-square w-[32%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#E5A9C2] shadow-inner">
                    <div className="absolute inset-[8%] rounded-full border border-[#F8DCE8]/50" />

                    <div className="text-center font-serif text-[#FFF8FA]">
                      <div className="text-[9px] italic">
                        ANNIE
                      </div>

                      <div className="mt-1 text-[7px] tracking-[0.2em]">
                        22
                      </div>
                    </div>
                  </div>

                  {/* Centre hole */}
                  <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F7E9EF] shadow-inner" />
                </motion.div>

                {/* Tonearm */}
                <motion.div
                  animate={{
                    rotate: isPlaying ? 18 : 0,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="absolute right-[3%] top-[4%] z-20 h-[65%] w-[32%] origin-[75%_15%]"
                >
                  {/* Pivot */}
                  <div className="absolute right-[7%] top-0 h-10 w-10 rounded-full bg-[#E8C0D2] shadow-md sm:h-12 sm:w-12">
                    <div className="absolute inset-2 rounded-full bg-[#C58FAE]" />
                  </div>

                  {/* Arm */}
                  <div className="absolute right-[22%] top-[25px] h-[7px] w-[78%] origin-right rotate-[23deg] rounded-full bg-[#F5E9EF] shadow-sm sm:top-[30px]" />

                  {/* Needle */}
                  <div className="absolute bottom-[15%] left-[4%] h-8 w-5 rotate-[12deg] rounded-b-md bg-[#F5E9EF] shadow-sm">
                    <div className="absolute bottom-[-4px] left-1/2 h-2 w-1 -translate-x-1/2 rounded-full bg-[#493B50]" />
                  </div>
                </motion.div>

                {/* Little decorative screw */}
                <div className="absolute bottom-[5%] left-[6%] h-4 w-4 rounded-full border border-[#B89EAF] bg-[#E8DCE4]" />
              </div>

              {/* ==================================
                  SONG DISPLAY
              =================================== */}
              <div className="mt-4 rounded-[12px] border border-[#D6B5C7] bg-[#FFF9FC] px-5 py-4 text-center shadow-[inset_0_1px_5px_rgba(73,59,80,0.06)]">

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSong.id}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="text-[8px] tracking-[0.28em] text-[#A184A8]">
                      NOW PLAYING
                    </p>

                    <h3 className="mt-1 font-serif text-xl text-[#493B50] sm:text-2xl">
                      {currentSong.title}
                    </h3>

                    <p className="mt-1 font-serif text-sm italic text-[#A184A8]">
                      picked by {currentSong.friend} ♡
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Progress */}
                <div className="mt-4">
                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    step="0.1"
                    value={progress}
                    onChange={handleSeek}
                    aria-label="Song progress"
                    className="h-1 w-full cursor-pointer appearance-none rounded-full accent-[#B986A5]"
                    style={{
                      background: `linear-gradient(to right, #B986A5 ${progressPercentage}%, #E5D5E1 ${progressPercentage}%)`,
                    }}
                  />

                  <div className="mt-1 flex justify-between text-[9px] text-[#9B879B]">
                    <span>{formatTime(progress)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="mt-3 flex items-center justify-center gap-5">
                  <button
                    type="button"
                    onClick={previousSong}
                    aria-label="Previous song"
                    className="text-[#756477] transition hover:scale-110 hover:text-[#493B50]"
                  >
                    ↶
                  </button>

                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause" : "Play"}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#B986A5] text-white shadow-[0_5px_12px_rgba(73,59,80,0.18)] transition hover:scale-105 hover:bg-[#A97898]"
                  >
                    {isPlaying ? (
                      <span className="text-sm">Ⅱ</span>
                    ) : (
                      <span className="ml-0.5 text-sm">▶</span>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={nextSong}
                    aria-label="Next song"
                    className="text-[#756477] transition hover:scale-110 hover:text-[#493B50]"
                  >
                    ↷
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom controls / details */}
            <div className="relative mt-5 flex items-center justify-between px-2">
              <span className="font-serif text-xs italic text-[#FFF4F8]/80">
                side A
              </span>

              <div className="flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFF4F8]/70" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFF4F8]/50" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFF4F8]/30" />
              </div>

              <span className="font-serif text-xs italic text-[#FFF4F8]/80">
                made for Annie ♡
              </span>
            </div>
          </div>
        </motion.div>

        {/* ==========================================
            PLAYLIST
        =========================================== */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          {/* Paper */}
          <div className="relative rotate-[1deg] bg-[#FFFDF8] p-6 shadow-[0_10px_25px_rgba(73,59,80,0.12)] sm:p-8">

            {/* Tape */}
            <div className="absolute -top-4 left-[42%] h-9 w-24 rotate-[-3deg] bg-[#E8BFD0]/70" />

            {/* Paper lines */}
            <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(transparent_31px,#E9DDE7_32px)] [background-size:100%_32px]" />

            <div className="relative">

              {/* Header */}
              <div className="mb-6 text-center">
                <p className="text-[9px] tracking-[0.28em] text-[#A184A8]">
                  THE ANNIE MIX
                </p>

                <h3 className="mt-1 font-serif text-3xl italic text-[#493B50]">
                  songs from your people ♡
                </h3>
              </div>

              {/* Songs */}
              <div className="space-y-1">
                {playlist.map((song, index) => {
                  const isCurrent = index === currentIndex;

                  return (
                    <button
                      key={song.id}
                      type="button"
                      onClick={() => {
                        setCurrentIndex(index);
                        setIsPlaying(true);
                      }}
                      className={`group flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition ${
                        isCurrent
                          ? "bg-[#F3DFE9]"
                          : "hover:bg-[#FAF1F6]"
                      }`}
                    >
                      {/* Number */}
                      <span
                        className={`w-6 font-serif text-xs italic ${
                          isCurrent
                            ? "text-[#A97898]"
                            : "text-[#B6A5B5]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Vinyl icon */}
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                          isCurrent
                            ? "border-[#C18EAA] bg-[#D9A9C1]"
                            : "border-[#D9C6D2] bg-[#F6ECF2]"
                        }`}
                      >
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${
                            isCurrent
                              ? "bg-[#FFF8FA]"
                              : "bg-[#C5AFBF]"
                          }`}
                        />
                      </span>

                      {/* Song */}
                      <span className="min-w-0 flex-1">
                        <span
                          className={`block truncate font-serif text-sm ${
                            isCurrent
                              ? "text-[#493B50]"
                              : "text-[#66566A]"
                          }`}
                        >
                          {song.title}
                        </span>

                        <span className="mt-0.5 block text-[10px] italic text-[#A184A8]">
                          picked by {song.friend} ♡
                        </span>
                      </span>

                      {/* Playing indicator */}
                      <span
                        className={`font-serif text-sm ${
                          isCurrent
                            ? "text-[#B986A5]"
                            : "text-transparent group-hover:text-[#D1B6C8]"
                        }`}
                      >
                        {isCurrent && isPlaying ? "♪" : "♡"}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="mt-7 border-t border-[#E7D9E2] pt-5 text-center">
                <p className="font-serif text-sm italic text-[#806E84]">
                  <br />
                  <span className="text-[#A97898]">
                  </span>
                </p>

                <div className="mt-4 text-xs tracking-[0.3em] text-[#C19CAF]">
                  ♡ ✦ ♡
                </div>
              </div>
            </div>
          </div>

          {/* Little floating note */}
          <motion.div
            animate={{
              y: [0, -4, 0],
              rotate: [-2, -1, -2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-5 -right-3 rotate-[-3deg] bg-[#F8E4A9] px-4 py-2 font-serif text-xs italic text-[#6F5D4B] shadow-[0_5px_12px_rgba(73,59,80,0.1)]"
          >
            press play ♡
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}