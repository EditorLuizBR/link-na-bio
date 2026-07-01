# Editor Luiz — Link na Bio

Página única estilo Linktree, feita com **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em http://localhost:3000

## Editar conteúdo (links, textos, imagens)

Tudo fica em **`lib/config.ts`** — não precisa mexer nos componentes:

- `profile` — nome, bio, avatar e o link do botão "+"
- `whatsapp` — link e texto do botão CTA principal
- `products` — cards (título, subtítulo, imagem e `href`; card sem `href` vira só imagem)
- `social` — marca do rodapé e Instagram

## Trocar as imagens

As imagens ficam em **`public/images/`**. Os arquivos atuais são **placeholders em SVG**.
Para usar as imagens reais:

1. Coloque seus arquivos em `public/images/` (ex: `contato.jpg`, `notion.jpg`, `portfolio.jpg`, `avatar.jpg`).
2. Atualize o caminho correspondente em `lib/config.ts` (uma linha por imagem).

Qualquer formato funciona (JPG, PNG, SVG, WebP) — a otimização de imagem está desligada
em `next.config.mjs` justamente para não travar em nenhum formato.

## Componentes

- `components/Background.tsx` — blobs animados (lava lamp). Animações em `app/globals.css`.
- `components/ProfileHeader.tsx` — avatar, nome, bio e botão "+".
- `components/CTAButton.tsx` — botão grande do WhatsApp.
- `components/ProductCard.tsx` — cards de produto.

## Deploy na Vercel

1. Suba o repositório para o GitHub.
2. Em [vercel.com](https://vercel.com) → **New Project** → importe o repo.
3. Framework é detectado como Next.js automaticamente. Clique em **Deploy**.

Nenhuma variável de ambiente é necessária.
