## COIMBRA PROTEC — Website

Site institucional em Next.js para serviços de segurança, automação de portões, alarmes e monitoramento na região de Campinas/Valinhos/Vinhedo. Inclui landing page, catálogo de serviços detalhados, blog temático e formulários de orçamento e agendamento.

## Principais recursos

- Landing page com seções de hero, serviços, depoimentos e FAQ.
- Catálogo de serviços com páginas de caso de uso (`/servicos/[slug]`) preenchidas a partir de dados tipados.
- Blog com artigos estáticos (`/blog` e `/blog/[subject]`) carregados por lazy import.
- Formulários para orçamento e agendamento de visita.
- Botão flutuante de contato, menu navegável e footer global.
- Sitemap gerado via App Router (`src/app/sitemap.ts`) incluindo páginas estáticas, serviços e posts.

## Stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS (config 4.x) e componentes UI custom (shadcn-style)
- TypeScript 5
- Biome para lint/format
- Bun lockfile (project utiliza npm/yarn/pnpm/bun conforme preferência)

## Pré-requisitos

- Node 18+ (recomendado 20+)
- npm, pnpm, yarn ou bun instalado

## Configuração

1. Instale dependências (exemplo com npm):

```bash
npm install
```

2. Crie um arquivo `.env.local` (se necessário) e defina:

```bash
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

O `NEXT_PUBLIC_SITE_URL` é usado no sitemap para gerar URLs absolutas (fallback: `https://example.com`).

## Scripts

- `npm run dev` — ambiente de desenvolvimento.
- `npm run build` — build de produção.
- `npm run start` — serve o build.
- `npm run lint` — Biome check.
- `npm run format` — Biome format (write).

## Estrutura relevante

- `src/app/page.tsx` — landing page principal.
- `src/app/servicos/page.tsx` — listagem de serviços.
- `src/app/servicos/[slug]/` — páginas de caso de uso dinâmicas (dados em `src/app/servicos/lib/data.ts`).
- `src/app/blog/page.tsx` e `src/app/blog/[subject]/` — blog e posts (dados em `src/app/blog/blog-posts/` e loader em `src/app/blog/[subject]/use-get-article.ts`).
- `src/app/sitemap.ts` — sitemap dinâmico para SEO.
- `src/components/` — componentes UI compartilhados (menu, botões, form, etc.).

## SEO e otimização

- `metadata` padrão em `src/app/layout.tsx`.
- Sitemap dinâmico com rotas estáticas, serviços e posts.
- Imagens otimizadas via `next/image` e `public/`.
- Estrutura semântica com headings e descrições ricas nas páginas de serviço e blog.

## Estilo, lint e formatação

- Tailwind para utilidades de layout/estilo.
- Biome para lint/format: rode `npm run lint` e `npm run format` antes de commits.

## Deploy

- Build: `npm run build`
- Start: `npm run start` (usa `.env.local`).
- Compatível com Vercel ou hospedagem Node tradicional.

## Conteúdo e dados

- Serviços: editar/expandir em `src/app/servicos/lib/data.ts`.
- Posts: adicionar novos em `src/app/blog/blog-posts/` e registrar no `articleMap` em `src/app/blog/[subject]/use-get-article.ts`.

## Suporte

Abra uma issue ou contate a equipe responsável pelo site para dúvidas e melhorias.
