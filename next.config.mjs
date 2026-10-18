/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Otimização de imagem ligada: a Vercel entrega WebP/AVIF no tamanho certo,
  // o que importa aqui porque os banners originais têm 1–2 MB.
};

export default nextConfig;
