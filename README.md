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

- `profile` — nome, bio (o `\n` marca a quebra de linha) e avatar
- `socials` — botões redondos abaixo da bio (Instagram, TikTok, WhatsApp)
- `banners` — cards 16:9 (título, subtítulo, imagem e `href`; com `subtitle` o card ganha a legenda embaixo)
- `social` — marca e link do rodapé (LCX)

## Trocar as imagens

As imagens ficam em **`public/images/`**. Coloque o arquivo lá e atualize o caminho
correspondente em `lib/config.ts`. Imagens que não são 16:9 são cortadas pelo centro.
A Vercel otimiza as imagens automaticamente (WebP/AVIF no tamanho certo).

## Visual

Identidade do site da LCX: fundo preto, fonte Inter, manchas de luz branca desfocadas.

- `components/Background.tsx` — fundo preto com o blur branco.
- `components/ProfileHeader.tsx` — avatar, nome, bio e botões das redes.
- `components/SocialButtons.tsx` — botões redondos das redes.
- `components/ProductCard.tsx` — cards/banners.

## Deploy na Vercel

1. Suba o repositório para o GitHub.
2. Em [vercel.com](https://vercel.com) → **New Project** → importe o repo.
3. Framework é detectado como Next.js automaticamente. Clique em **Deploy**.

Nenhuma variável de ambiente é necessária.
