"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile, social } from "@/lib/config";

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function ProfileHeader() {
  return (
    <header className="flex flex-col items-center text-center">
      {/* Avatar */}
      <motion.div variants={item} className="relative">
        <div className="rounded-full p-[2px] ring-1 ring-white/15">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={104}
            height={104}
            priority
            className="h-24 w-24 rounded-full object-cover object-[center_8%] sm:h-26 sm:w-26"
          />
        </div>
      </motion.div>

      {/* Nome */}
      <motion.h1
        variants={item}
        className="mt-4 text-2xl font-bold tracking-tight text-white"
      >
        {profile.name}
      </motion.h1>

      {/* Bio */}
      <motion.p
        variants={item}
        className="mt-2 max-w-[22rem] text-sm leading-relaxed text-neutral-400"
      >
        {profile.bio}
      </motion.p>

      {/* Pill do Instagram */}
      <motion.a
        variants={item}
        href={social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        aria-label={`Instagram ${social.handle}`}
        className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-neutral-300 transition-colors hover:border-lime/40 hover:text-lime"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
        <span>{social.handle}</span>
      </motion.a>
    </header>
  );
}
