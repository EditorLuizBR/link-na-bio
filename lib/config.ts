/**
 * =====================================================================
 *  CONFIGURAÇÃO CENTRAL — edite tudo por aqui
 * =====================================================================
 *  Troque os links, textos e imagens sem precisar mexer nos componentes.
 *  As imagens ficam em /public/images (referencie com "/images/arquivo.jpg").
 */

export const site = {
  url: "https://editorluizbr.vercel.app",
};

export const profile = {
  name: "Editor Luiz",
  handle: "@editordevideosluiz",
  // "\n" marca a quebra de linha da bio (fica em 2 linhas)
  bio: "Editor de vídeos especialista em transformar\nconteúdos em resultados e vendas.",
  avatar: "/images/avatar.jpg",
};

// Botões redondos abaixo da bio (ícones em components/SocialButtons.tsx)
export const socials = [
  {
    name: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/editordevideosluiz/",
  },
  {
    name: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@editorluizbr",
  },
  {
    name: "whatsapp",
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=5584991445598&text=Ol%C3%A1!%20Gostaria%20De%20Saber%20Mais%20Sobre%20Seus%20Servi%C3%A7os%20de%20Edi%C3%A7%C3%A3o.",
  },
] as const;

// Todos os banners aparecem no formato 16:9 (imagens de outra proporção
// são cortadas pelo centro).
export type Banner = {
  title: string; // texto alternativo da imagem (e título da legenda)
  subtitle?: string; // com subtitle, o card ganha a legenda embaixo da imagem
  image: string;
  href?: string; // sem href = card sem link
};

export const banners: Banner[] = [
  {
    title: "Solicite seu orçamento",
    subtitle: "Conte sobre o seu projeto em poucos passos",
    image: "/images/orcamento.webp",
    href: "https://lcx-site.vercel.app/",
  },
  {
    title: "Conheça meu portfólio",
    subtitle: "Confira alguns de nossos trabalhos",
    image: "/images/portfolio.png",
    href: "https://drive.google.com/drive/folders/1XvTA2vPIFBacp5x2-p12dT6Fjn6NKnTm?usp=sharing",
  },
];

export const social = {
  brand: "LCX",
  brandUrl: "https://lcx-site.vercel.app",
  instagram: "https://www.instagram.com/editordevideosluiz/",
};
