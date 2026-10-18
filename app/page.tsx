"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Background from "@/components/Background";
import ProfileHeader from "@/components/ProfileHeader";
import ProductCard from "@/components/ProductCard";
import { banners, social } from "@/lib/config";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <>
      <Background />

      <main className="relative mx-auto flex min-h-dvh w-full max-w-bio flex-col px-4 pb-10 pt-12 sm:pt-14">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <ProfileHeader />

          {/* Banners */}
          <div className="mt-9 flex w-full flex-col gap-4">
            {banners.map((banner, i) => (
              <ProductCard
                key={banner.image}
                banner={banner}
                priority={i === 0}
              />
            ))}
          </div>

          {/* Rodapé */}
          <motion.footer
            variants={item}
            className="mt-12 flex flex-col items-center gap-3"
          >
            <a
              href={social.brandUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Site da LCX"
              className="opacity-60 outline-none transition-opacity hover:opacity-100 focus-visible:opacity-100"
            >
              <Image
                src="/images/lcx-logo.png"
                alt="LCX"
                width={687}
                height={339}
                className="h-6 w-auto"
              />
            </a>
            <p className="text-xs text-faint">
              © {new Date().getFullYear()} {social.brand}. Todos os direitos
              reservados.
            </p>
          </motion.footer>
        </motion.div>
      </main>
    </>
  );
}
