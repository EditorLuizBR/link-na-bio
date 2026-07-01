/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Deixado como "unoptimized" para que qualquer formato (SVG placeholder,
    // JPG/PNG real) funcione sem configuração extra. Como é uma bio page
    // pequena, o ganho da otimização é irrelevante. Se quiser otimização
    // da Vercel para imagens raster, remova esta linha.
    unoptimized: true,
  },
};

export default nextConfig;
