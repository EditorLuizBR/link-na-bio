"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Banner } from "@/lib/config";

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

/**
 * Banner 16:9 de imagem inteira. Com `subtitle`, ganha uma legenda embaixo
 * (título + subtítulo + seta).
 */
export default function ProductCard({
  banner,
  priority = false,
}: {
  banner: Banner;
  priority?: boolean;
}) {
  const image = (
    <div className="relative aspect-[16/9] w-full overflow-hidden">
      <Image
        src={banner.image}
        alt={banner.title}
        fill
        priority={priority}
        sizes="(max-width: 440px) 100vw, 404px"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
    </div>
  );

  const caption = banner.subtitle && (
    <div className="flex items-center justify-between gap-3 px-4 py-3.5">
      <div className="min-w-0">
        <h3 className="truncate text-[15px] font-semibold tracking-[-0.01em] text-white">
          {banner.title}
        </h3>
        <p className="truncate text-[13px] text-muted">{banner.subtitle}</p>
      </div>
      {banner.href && (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          className="shrink-0 text-muted transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
        >
          <path d="M7 17L17 7M17 7H8M17 7v9" />
        </svg>
      )}
    </div>
  );

  const base =
    "group relative block overflow-hidden rounded-xl border border-white/10 bg-panel";

  if (!banner.href) {
    return (
      <motion.div variants={item} className={base}>
        {image}
        {caption}
      </motion.div>
    );
  }

  return (
    <motion.a
      variants={item}
      href={banner.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} outline-none transition-[border-color,box-shadow] duration-300 hover:border-white/25 hover:shadow-[0_20px_50px_-20px_rgba(255,255,255,0.25)] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black`}
    >
      {image}
      {caption}
    </motion.a>
  );
}
