import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Editor Luiz",
  description:
    "Editor de vídeos especializado em transformar ideias em conteúdos que vendem e geram resultados.",
  openGraph: {
    title: "Editor Luiz",
    description:
      "Editor de vídeos especializado em transformar ideias em conteúdos que vendem e geram resultados.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={interTight.variable}>
      <body className="min-h-dvh bg-base font-sans antialiased">{children}</body>
    </html>
  );
}
