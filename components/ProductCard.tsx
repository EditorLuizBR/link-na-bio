"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/lib/config";

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const isLink = Boolean(product.href);

  const inner = (
    <>
      {/* Capa / thumbnail */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          priority={priority}
          sizes="(max-width: 420px) 100vw, 420px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </div>

      {/* Texto */}
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-white">
            {product.title}
          </h3>
          {product.subtitle && (
            <p className="truncate text-xs text-neutral-400">
              {product.subtitle}
            </p>
          )}
        </div>
        {isLink && (
          <span className="shrink-0 text-neutral-500 transition-colors group-hover:text-lime">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H8M17 7v9" />
            </svg>
          </span>
        )}
      </div>
    </>
  );

  const className =
    "group block w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-colors hover:border-lime/40 hover:shadow-[0_0_0_1px_rgba(190,242,100,0.25),0_10px_40px_-15px_rgba(190,242,100,0.35)]";

  if (!isLink) {
    return (
      <motion.div variants={item} className={className}>
        {inner}
      </motion.div>
    );
  }

  return (
    <motion.a
      variants={item}
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={className}
    >
      {inner}
    </motion.a>
  );
}
