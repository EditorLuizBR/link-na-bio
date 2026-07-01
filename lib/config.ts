/**
 * =====================================================================
 *  CONFIGURAÇÃO CENTRAL — edite tudo por aqui
 * =====================================================================
 *  Troque os links, textos e imagens sem precisar mexer nos componentes.
 *  As imagens ficam em /public/images (referencie com "/images/arquivo.jpg").
 */

export const profile = {
  name: "Editor Luiz",
  bio: "Editor de vídeos especializado em transformar ideias em conteúdos que vendem e geram resultados.",
  avatar: "/images/avatar.jpg",
  // Botão "+" (redes extras). Deixe "#" enquanto não tiver o link final.
  extraLink: "#",
};

// Número no formato internacional, só dígitos (ex: 55DDDNUMERO).
// Como o CTA usa um wa.link encurtado, o número abaixo é apenas fallback.
export const whatsapp = {
  href: "https://wa.link/dp64ki",
  label: "Entre em contato conosco",
};

export type Product = {
  title: string;
  subtitle?: string;
  image: string;
  href?: string; // sem href = card sem link (só imagem)
};

export const products: Product[] = [
  {
    title: "Entre em contato",
    subtitle: "Fale comigo agora no WhatsApp",
    image: "/images/contato.png",
    href: "https://wa.link/dp64ki",
  },
  {
    title: "Notion do Freelancer",
    subtitle: "Seu sistema operacional completo",
    image: "/images/notion.png",
    href: "https://pay.cakto.com.br/jjfzk36_936866",
  },
  {
    title: "Portfólio",
    subtitle: "Alguns dos meus trabalhos",
    image: "/images/portfolio.png",
    // sem href por enquanto
  },
];

export const social = {
  brand: "LCX Media",
  handle: "@editordevideosluiz",
  instagram: "https://www.instagram.com/editordevideosluiz/",
};
