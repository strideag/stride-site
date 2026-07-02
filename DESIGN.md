# DESIGN.md — Blueprint do site Stride

> Documento de design e arquitetura do site `strideag/stride-site`.
> Fonte de verdade para conteúdo, identidade visual, arquitetura de páginas e roadmap.
> Conteúdo baseado na proposta comercial Stride 2025 (Inbound & Marketing).

## Índice

1. [Posicionamento & Mensagem](#1-posicionamento--mensagem)
2. [Identidade & Design System](#2-identidade--design-system)
3. [Arquitetura de Páginas (SEO)](#3-arquitetura-de-páginas-seo)
4. [Hero Cinemático](#4-hero-cinemático)
5. [Blog (Sanity CMS)](#5-blog-sanity-cms)
6. [SEO Técnico](#6-seo-técnico)
7. [Roadmap de Implementação](#7-roadmap-de-implementação)

---

## 1. Posicionamento & Mensagem

### Quem somos

**Agência de marketing digital de performance que ajuda empresas — especialmente de tecnologia e B2B — a escalarem receita.**

> ⚠️ Substituir o posicionamento antigo ("agência para negócios brasileiros nos EUA") em todo o site. Moeda: R$. Mercado: Brasil.

### Headline principal (Hero)

- **Principal:** "Ajudamos empresas de tecnologia a escalarem receita"
- **Sub:** "Nós simplificamos o crescimento de receita para empresas Tech. Serviços especializados em marketing digital: foco absoluto em estratégias que geram resultados e crescimento."

### Big Numbers

| Número | Descrição |
|--------|-----------|
| **+R$300MM** | vendas realizadas para os clientes em 2024 |
| **+R$100MM** | investidos em tráfego pago |
| **+13 anos** | de experiência no mercado |

### Nosso compromisso

1. **Melhorar seu posicionamento de marca**
2. **Gerar novos clientes todas as semanas**

### Stride vs Mercado (tabela de diferenciação)

| | **Stride** (new school) | Mercado (old school) |
|---|---|---|
| **Entrega de Valor** | Time de consultores sêniores pelo preço de uma contratação (time de C-Levels) | Gerente de contas ou profissional júnior sem experiência |
| **Custo** | Nós nos pagamos no tempo (orientados pelo ROI do nosso trabalho) | > R$300k/ano sem comprometimento/garantia de ROI |
| **TTV (Time to Value)** | Rápidos e executores. Experimentos em sprints | 3 a 6 meses para o setup da operação |
| **Risco** | Baixo (pagamentos mensais, cancelamento sem multas) | Contratações longas (uma má contratação custa no mínimo 1 ano) |
| **Atuação** | Foco total em negócios de tecnologia B2B (fit total) | Baixo entendimento do seu negócio (atendem todos os segmentos) |
| **Abordagem** | Full-Funnel (Marketing + Vendas + CS) | Marketing OU Vendas |

### Certificações

| Ano | Certificação |
|-----|-------------|
| 2023 | **RD Station Partners — Silver** (Agência Parceira) |
| 2023 | Certificação Inbound Marketing |
| 2020 | Growth Master — Growth University (Sean Ellis) |
| 2017 | Google AdWords e Google Analytics |

### Modelo de trabalho

- **1x por semana:** reunião de alinhamento — métricas, sprints de atuação, avaliação, melhorias, plano de ação, ofertas e campanhas
- **1x por mês:** reunião de fechamento e estratégia
- Gestão de projetos via ferramenta própria (Sintetiz): Ticket → Avaliação → Estimativa → Entrega

### Sócios

| | |
|---|---|
| **Thiago Bueno** — Head de Performance | Especialista em tráfego pago e conversão, gerenciou **mais de R$100MM em mídia paga**. Responsável por escalar empresas de tecnologia e apostas, aumentando faturamento em milhões de reais. |
| **Leonardo Lins** — Head de Branding & Produto | Designer de Produto e Branding, com projetos para **Vivo, Livelo, Dotz, Nestlé, Decathlon**. Experiência em grandes agências e foco em construir marcas que se tornam referência. |

### Clientes / logos ("7+ anos nas trincheiras")

Aliare, MyFarm, ITSS, Docnix, Conexa, Play4 (4Play), AgriQ, PM RUN, Nou Inteligência Fiscal, Ellévti, Assinei
+ logos de branding do Leonardo: Vivo, Livelo, Dotz, Nestlé, Decathlon

---

## 2. Identidade & Design System

### Princípios

- **Dark-first:** fundo quase preto (`ink-950`), texto claro
- **Laranja como cor de ação:** accent `#ff3e00` reservado para CTAs, destaques e números
- **Animações CSS-only quando possível** (animation-timeline, keyframes); JS mínimo
- **Cinemático e premium:** grain, glows, gradientes cônicos, revelações coreografadas

### Tokens de cor (`app/globals.css`)

```
Accent:     #ff3e00 (base) · #ff7b3f (light) · #ffa066 (lighter) · #db2500 (dark) · #7a0005 (deep)
Ink (bg):   #000502 (950) · #0d0d0d (900) · #141414 (850) · #1e1e1e (800) · #221d26 (750) · #2a2630 (700)
Texto:      #fcfcfc (cloud) · #c7c7c7 (muted) · #868686 (faint) · #e6e9fa (faq)
```

### Tipografia

- **Plus Jakarta Sans** (400, 500, 600, 700, 800) — Google Fonts via `next/font`
- H1: 44–64px semibold, tracking apertado · H2 de seção: 28→44px responsivo · Body: 14–16px, `text-cloud/70`

### Componentes UI (`app/components/ui/`)

| Componente | Uso |
|-----------|-----|
| `Button` | 3 variantes: primary (laranja), outline, light. Default `href="#contato"` |
| `Container` | max-width 1280px, `px-5 sm:px-8` |
| `SectionTitle` | eyebrow + h2, center/left |

### Padrões de animação existentes (reutilizar)

| Classe/keyframe | Efeito |
|----------------|--------|
| `.reveal` (+`-d1/-d2/-d3`) | Fade-slide-up no scroll via `animation-timeline: view()` — progressive enhancement |
| `.nav-cta` | Borda "racing light" com conic-gradient girando (`@property --border-angle`) |
| `.case-sticky-{0,1,2}` | Cards empilhados com sticky + peek offsets responsivos |
| `challengeFloat` | Flutuação suave de elementos SVG (3.2s ease-in-out) |
| `.stat-card` | Hover/active scale 1.04 com spring cubic-bezier |

### Bibliotecas

- `@splinetool/react-spline` — cenas 3D (hero/CTA)
- `@lottiefiles/dotlottie-react` — animações Lottie (Como Trabalhamos)
- Sem Framer Motion/GSAP — animações são CSS

---

## 3. Arquitetura de Páginas (SEO)

### Mapa de rotas

```
/                              Home (re-conteudizada)
/servicos/trafego-pago         Gestão de tráfego pago (Meta, Google, TikTok Ads)
/servicos/seo                  SEO e marketing de busca
/servicos/landing-pages        Landing pages e CRO
/servicos/consultoria-growth   Consultoria de Growth / CMO as a Service
/cases                         Índice de cases
/cases/[slug]                  Case individual (8 cases — ver abaixo)
/sobre                         História, sócios, certificações
/contato                       Formulário completo
/blog                          Índice do blog (Sanity)
/blog/[slug]                   Post individual
/studio                        Sanity Studio (admin, noindex)
```

### Home (nova ordem de seções)

1. **Hero cinemático** — headline nova + big numbers + Spline
2. Logos de clientes
3. Desafios (seção atual com ilustrações SVG — adaptar textos para tech/B2B)
4. Serviços (4 cards linkando para as páginas `/servicos/*`)
5. Stride vs Mercado (nova seção — tabela new school/old school)
6. Método Stride (diagrama atual)
7. Como Trabalhamos (Lottie atual)
8. Cases em destaque (stacked cards atuais, linkando para `/cases/[slug]`)
9. Por quê a Stride (diferenciais)
10. Sócios
11. Depoimentos
12. Últimos posts do blog (3 cards — só após blog no ar)
13. FAQ (adaptar perguntas: remover "EUA", incluir fidelidade/cancelamento, modelo de sprint)
14. CTA final + formulário

### Páginas de serviço — template comum

Cada página: Hero curto (H1 com keyword) → o que está incluso (checklist da proposta) → números/prova relevante → mini-cases relacionados → FAQ específico → CTA.

| Rota | Keyword alvo | Conteúdo-chave (da proposta) |
|------|-------------|------------------------------|
| `/servicos/trafego-pago` | gestão de tráfego pago | Campanhas Meta/TikTok/Google Ads, acompanhamento diário, relatórios Lookerstudio, copys/criativos/anúncios, GTM e código de conversão |
| `/servicos/seo` | agência de SEO | Marketing de busca, conteúdo, autoridade (case Herreira: domínio no Google, 50k acessos/mês) |
| `/servicos/landing-pages` | landing pages que convertem | LPs pré-sell, testes A/B, CRO (case MyFarm: +220% conversão com nova LP) |
| `/servicos/consultoria-growth` | consultoria de growth | CMO as a Service, diagnóstico + plano 90D, GTM-Strategy, weekly reviews, R$6k/mês sem fidelidade, funil AARRR |

### Cases individuais (`/cases/[slug]`)

Template: Hero com logo + segmento (B2C/B2B/SaaS) → História → Estratégia → Impacto (números grandes) → CTA.

| Slug | Case | Números-chave |
|------|------|---------------|
| `tradicionalbet` | TradicionalBet (iGaming) | R$105k → R$1,84MM em depósitos em 5 meses (17x); GGR R$27,7k → R$621,8k; out/24: R$8MM depósitos/mês e R$3MM+ lucro |
| `pm-run` | PM RUN (ITSS) | De 0 a R$4,5MM em receitas recorrentes anuais em 3 anos; vendas para Faber Castell, Dori, Marilan, Volkswagen |
| `disrupcao-industrial` | Disrupção Industrial (evento PM RUN) | 44 lives/webinars, +4.600 participantes, +10.400 inscritos, 78% dos qualificados vindos da estratégia |
| `hable` | Grupo Hable (Telecom/Claro) | Custo/conversão R$6,60 → R$4,70 (depois R$3,88); +111% vendas em 3 meses; +128% conversão; verba R$80k+/mês |
| `assinei` | Assinei (SaaS) | +157% em vendas (média 7 → 18/mês); canal pago = 33% das vendas; 61% das vendas via marketing |
| `myfarm` | MyFarm (SaaS Agro) | +220% conversão na nova LP; 19 vendas/ano por novo canal; +30% vendas, +37% leads, +28% qualificados |
| `agriq` | AgriQ (SaaS) | Qualificações 42 → 225/quadrimestre (+435%); vendas 3 → 10+/mês um mês após novo site; +157% vendas |
| `esup` | Faculdade ESUP | Departamento de 1 → 9 pessoas; 0 → 28k acessos/ano; 1.509 conversões vestibular/ano; +39% tráfego; +2.087% cadastros |
| `herreira` | Grupo Herreira (B2C joias) | 0 → +50.000 acessos/mês; 0 → +1.500 vendas/mês nas 3 marcas (Aulore, Herreira, Vitesse); domínio no Google |

### /sobre

História (+13 anos, 7+ nas trincheiras), sócios (fotos + bios), certificações, modelo de trabalho, ferramentas (RD Station, Lookerstudio, Sintetiz).

### /contato

Formulário: nome, e-mail, WhatsApp, empresa, site, faturamento mensal (faixas), desafio principal. Integração futura com RD Station. CTA WhatsApp paralelo.

---

## 4. Hero Cinemático

**Direção:** manter a cena Spline 3D atual e adicionar entrada coreografada + parallax.

### Sequência de entrada (uma vez, no load)

| t (s) | Elemento | Efeito |
|-------|----------|--------|
| 0.0 | Background/glow | Fade-in do glow laranja (opacity 0→1, 1.2s) |
| 0.2 | Headline | Reveal palavra por palavra: cada palavra sobe (translateY 24px→0) + fade, stagger 80ms |
| 0.6 | Subheadline | Fade-slide-up |
| 0.8 | CTA | Fade-slide-up + racing border ativa |
| 1.0 | Stat cards | Sobem em stagger com spring (`cubic-bezier(0.34, 1.56, 0.64, 1)`) |
| 0.0–2.5 | Spline | Zoom lento: `scale(1.06) → scale(1)` ease-out (wrapper CSS, não a cena) |

### Scroll (parallax)

- Glow/Spline se move a ~0.5x da velocidade do scroll; texto a 1x (profundidade)
- Implementação CSS-first: `animation-timeline: scroll()` com fallback JS mínimo (`requestAnimationFrame` + `transform`) para browsers sem suporte
- Stat cards mantêm hover scale atual

### Acessibilidade

- `@media (prefers-reduced-motion: reduce)`: sem animação de entrada, tudo visível imediatamente, sem parallax

---

## 5. Blog (Sanity CMS)

**Decisão:** CMS headless **Sanity** — painel visual para publicação por não-devs. Free tier suficiente.

### Stack

- `sanity` + `next-sanity` + `@sanity/image-url`
- Studio embarcado na rota `/studio` do próprio Next (sem deploy separado)
- Variáveis: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`

### Schemas

```
post:     title, slug, excerpt, coverImage (com alt), body (portable text),
          author (ref), categories (ref[]), publishedAt, seo { metaTitle, metaDescription }
author:   name, role, avatar, bio
category: title, slug, description
```

### Rendering

- `/blog` e `/blog/[slug]`: SSG + ISR (`revalidate: 60`)
- `generateStaticParams` a partir dos slugs publicados
- Imagens via CDN do Sanity com `next/image` (loader custom)
- Portable Text → componentes estilizados no design system (headings, quote com borda accent, código, imagem com caption)

### Componentes novos

`BlogCard` (cover + categoria + título + excerpt + data), `BlogIndex` (grid + filtro por categoria), `PostBody` (portable text renderer), `PostHero` (cover full-width + título + autor/data)

### SEO do blog

- `generateMetadata` por post (usa campos seo com fallback para title/excerpt)
- JSON-LD `Article` por post, `Blog` no índice
- OG image = coverImage
- `/studio` com `robots: noindex`

---

## 6. SEO Técnico

- **`generateMetadata` por rota** — title/description únicos, template `%s | Stride`
- **Metadata base** (layout): novo title "Stride — Marketing de performance para empresas de tecnologia", description alinhada, `metadataBase`, openGraph default + imagem OG da marca
- **`app/sitemap.ts`** — rotas estáticas + cases + posts do Sanity
- **`app/robots.ts`** — allow all, disallow `/studio`, aponta sitemap
- **JSON-LD:** `Organization` (layout), `Article` (posts), `FAQPage` (FAQ da home), `BreadcrumbList` (cases e serviços)
- **Canonical** por página; headings semânticos (1 H1 por página)

---

## 7. Roadmap de Implementação

| Fase | Escopo | Depende de |
|------|--------|-----------|
| **1. Re-conteudização da home** | Novo posicionamento, headline, FAQ, seção Stride vs Mercado, textos dos desafios/serviços adaptados | — |
| **2. Hero cinemático** | Sequência de entrada + parallax + reduced-motion | Fase 1 (headline nova) |
| **3. Páginas institucionais + SEO técnico** | /servicos/* , /sobre, /contato, sitemap, robots, JSON-LD, metadata | Fase 1 |
| **4. Páginas de cases** | /cases e /cases/[slug] com conteúdo da proposta | Fase 3 (padrões de página) |
| **5. Blog Sanity** | Studio, schemas, /blog, /blog/[slug], seção na home | Fase 3 |

> Cada fase termina com: verificação no preview (desktop + mobile 375px), commit e push.
