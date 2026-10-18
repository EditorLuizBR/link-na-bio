"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/lib/config";
import SocialButtons from "@/components/SocialButtons";

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function ProfileHeader() {
  return (
    <header className="flex flex-col items-center text-center">
      <motion.div variants={item}>
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={112}
          height={112}
          priority
          className="h-28 w-28 rounded-full border border-white/10 object-cover object-[center_8%] shadow-[0_20px_60px_-20px_rgba(255,255,255,0.25)]"
        />
      </motion.div>

      <motion.h1
        variants={item}
        className="mt-5 flex items-center gap-1.5 text-[26px] font-bold leading-none tracking-[-0.03em] text-white"
      >
        {profile.name}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          role="img"
          aria-label="Perfil verificado"
        >
          <path
            fill="#ffffff"
            d="M12 1.5l2.6 1.9 3.2-.1 1 3 2.7 1.8-1 3.1 1 3.1-2.7 1.8-1 3-3.2-.1L12 22.5l-2.6-1.9-3.2.1-1-3-2.7-1.8 1-3.1-1-3.1 2.7-1.8 1-3 3.2.1z"
          />
          <path
            d="M8 12.2l2.6 2.6L16.2 9"
            fill="none"
            stroke="#000000"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.h1>

      <motion.p
        variants={item}
        className="mt-3 whitespace-pre-line text-[14px] leading-relaxed tracking-[-0.03em] text-neutral-300 min-[400px]:text-[15px]"
      >
        {profile.bio}
      </motion.p>

      <SocialButtons />
    </header>
  );
}
