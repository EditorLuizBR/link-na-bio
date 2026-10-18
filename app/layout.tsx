import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { profile, site } from "@/lib/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: profile.name,
  description: profile.bio,
  openGraph: {
    title: profile.name,
    description: profile.bio,
    type: "website",
    url: site.url,
    images: [{ url: profile.avatar, alt: profile.name }],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-dvh font-sans antialiased">{children}</body>
    </html>
  );
}
