"use client";

import { motion } from "framer-motion";
import Background from "@/components/Background";
import ProfileHeader from "@/components/ProfileHeader";
import CTAButton from "@/components/CTAButton";
import ProductCard from "@/components/ProductCard";
import { products, social } from "@/lib/config";

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

      <main className="relative mx-auto flex min-h-dvh w-full max-w-bio flex-col px-5 pb-10 pt-14">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          {/* Painel de vidro fosco (glassmorphism) sobre o fundo animado */}
          <div className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
            <ProfileHeader />

            <CTAButton />

            {/* Cards de produtos */}
            <div className="flex flex-col gap-4">
              {products.map((product, i) => (
                <ProductCard
                  key={product.title}
                  product={product}
                  priority={i === 0}
                />
              ))}
            </div>
          </div>

          {/* Rodapé */}
          <motion.footer
            variants={item}
            className="mt-6 flex flex-col items-center gap-2 pb-2"
          >
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-neutral-500 transition-colors hover:text-lime"
            >
              <svg
                width="20"
                height="20"
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
            </a>
            <p className="text-xs text-neutral-600">
              © {new Date().getFullYear()} {social.brand}
            </p>
          </motion.footer>
        </motion.div>
      </main>
    </>
  );
}
