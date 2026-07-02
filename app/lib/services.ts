// Service pages data — content sourced from the 2025 Stride proposal.
// Each entry drives /servicos/[slug] (template + metadata).

export type ServiceCase = { name: string; result: string };
export type ServiceFaq = { q: string; a: string };
export type ServiceProof = { value: string; label: string };

export type Service = {
  slug: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  includes: string[];
  proof: ServiceProof[];
  cases: ServiceCase[];
  faq: ServiceFaq[];
};

export const services: Service[] = [
  {
    slug: "trafego-pago",
    navLabel: "Tráfego Pago",
    metaTitle: "Gestão de Tráfego Pago para empresas de tecnologia",
    metaDescription:
      "Gestão de campanhas Meta Ads, Google Ads e TikTok Ads com foco em receita. Mais de R$100 milhões investidos em tráfego pago e acompanhamento diário de performance.",
    eyebrow: "Tráfego Pago",
    h1: "Gestão de tráfego pago que gera receita, não cliques",
    intro:
      "Somos especialistas em performance de campanhas, trabalhando desde 2010 com tráfego e SEO. Nosso foco é ROI real e aumento de faturamento — não métricas de vaidade.",
    includes: [
      "Gestão de campanhas em diversos canais: Meta Ads, Google Ads e TikTok Ads",
      "Acompanhamento diário e otimização de performance, com relatórios via Lookerstudio",
      "Estruturação de copys, criativos (artes e vídeos) e anúncios para as campanhas",
      "Criação ou otimização de LPs (pré-sell) quando necessário para a escala de resultados",
      "Estrutura e apoio para código de conversão e GTM",
      "Apoio e consultoria, com respostas rápidas sobre o desempenho de campanhas e anúncios",
    ],
    proof: [
      { value: "+R$100MM", label: "investidos em tráfego pago" },
      { value: "R$6,60 → R$3,88", label: "custo por conversão otimizado no case Hable (Google Ads)" },
      { value: "+13 anos", label: "de experiência em performance" },
    ],
    cases: [
      { name: "Grupo Hable (Telecom / Claro)", result: "+111% de aumento das vendas em somente 3 meses de operação, com verba acima de R$80 mil/mês" },
      { name: "TradicionalBet (iGaming)", result: "Depósitos de R$105 mil para R$1,84 milhão em 5 meses — crescimento de 17x" },
      { name: "Assinei (SaaS)", result: "Canal pago (Facebook) passou a representar 33% das vendas; +157% em vendas no total" },
    ],
    faq: [
      {
        q: "Qual verba mínima de mídia vocês recomendam?",
        a: "Nossos planos acompanham o investimento em mídia e começam em R$ 3.000/mês de fee para verbas de até R$ 5.000/mês. Na sessão estratégica indicamos a faixa ideal para o seu momento.",
      },
      {
        q: "Em quais plataformas vocês operam?",
        a: "Meta Ads, Google Ads e TikTok Ads — além de estratégias com afiliados e parceiros quando fazem sentido para o funil.",
      },
      {
        q: "Como acompanho os resultados?",
        a: "Acompanhamento diário pelo nosso time e relatórios claros via Lookerstudio, com reunião semanal de alinhamento e fechamento mensal de estratégia.",
      },
    ],
  },
  {
    slug: "seo",
    metaTitle: "Agência de SEO e Marketing de Busca",
    navLabel: "SEO",
    metaDescription:
      "SEO técnico, conteúdo e autoridade para dominar o Google. Cases com crescimento de 0 a 50.000 acessos mensais e domínio das pesquisas do segmento.",
    eyebrow: "SEO & Busca",
    h1: "SEO e marketing de busca para dominar o Google",
    intro:
      "Posicionamento orgânico que constrói ativo de marca: conteúdo, SEO técnico e autoridade para o seu negócio ser encontrado por quem já está procurando a solução.",
    includes: [
      "Estratégia de palavras-chave por etapa do funil",
      "SEO técnico: estrutura, performance e indexação do site",
      "Marketing de conteúdo e blog com metodologia de Inbound Marketing",
      "Construção de autoridade e liderança de pensamento no segmento",
      "Integração com automação de marketing (RD Station) para converter tráfego em leads",
      "Monitoramento contínuo de posições, tráfego e conversões",
    ],
    proof: [
      { value: "0 → +50.000", label: "acessos/mês conquistados para o Grupo Herreira" },
      { value: "+39%", label: "de crescimento em tráfego no case ESUP (ano contra ano)" },
      { value: "1ª página", label: "domínio das pesquisas do Google no segmento (cases Herreira e Disrupção Industrial)" },
    ],
    cases: [
      { name: "Grupo Herreira (B2C)", result: "De 0 a +50.000 acessos/mês e +1.500 vendas mensais nas 3 marcas do grupo, com domínio nas pesquisas do Google" },
      { name: "Faculdade ESUP", result: "De 0 a +28 mil acessos/ano e +2.087% de crescimento em cadastros para o vestibular digital" },
      { name: "Disrupção Industrial (PM RUN)", result: "Liderança de pensamento: portal dominando as buscas do nicho, com +10.400 inscritos nos eventos" },
    ],
    faq: [
      {
        q: "Quanto tempo o SEO leva para dar resultado?",
        a: "SEO é construção de ativo: os primeiros movimentos aparecem em semanas, mas posições consistentes e tráfego relevante se consolidam ao longo de meses. Por isso combinamos SEO com tráfego pago para resultado imediato + ativo de longo prazo.",
      },
      {
        q: "Vocês produzem o conteúdo?",
        a: "Sim. Nosso time cuida da estratégia de keywords, produção de conteúdo otimizado e da estrutura técnica do site ou blog.",
      },
    ],
  },
  {
    slug: "landing-pages",
    navLabel: "Landing Pages & CRO",
    metaTitle: "Landing Pages e CRO — páginas que convertem",
    metaDescription:
      "Criação de landing pages de alta conversão com testes A/B e otimização contínua (CRO). Case com +220% de conversão a partir de uma nova página de vendas.",
    eyebrow: "Landing Pages & CRO",
    h1: "Landing pages e CRO: páginas que convertem visitantes em receita",
    intro:
      "Campanhas não performam só com anúncios. Unimos copywriting persuasivo, design impactante e otimização contínua de conversão para transformar cliques em clientes.",
    includes: [
      "Criação de landing pages (pré-sell) com copy estratégico",
      "Diagnóstico e estratégia de CRO (otimização de conversão)",
      "Orientação e realização de testes A/B com ferramentas selecionadas",
      "Estruturação de Google Analytics e acompanhamento do KPI de conversão",
      "Consultoria nas jornadas de compra dos usuários, com testes semanais e mensais",
      "Otimização dos eventos e APIs de conversão",
    ],
    proof: [
      { value: "+220%", label: "de conversão em oportunidades e vendas com a nova LP do MyFarm" },
      { value: "3 → 10+", label: "vendas mensais um mês após o novo site do AgriQ" },
      { value: "99,5%", label: "de pontuação de otimização nas campanhas Google (case Hable)" },
    ],
    cases: [
      { name: "MyFarm (SaaS Agro)", result: "Nova página de conversão com testes A/B trouxe +220% de conversão em oportunidades e vendas no Google Ads" },
      { name: "AgriQ (SaaS)", result: "Site refeito com nova proposta de valor: vendas triplicaram (3 → 10+/mês) um mês após o lançamento; +435% em leads qualificados" },
      { name: "Grupo Hable (Telecom)", result: "LPs específicas por vertical de atuação, otimizadas para CRO — melhora significativa da pontuação das páginas de destino" },
    ],
    faq: [
      {
        q: "Vocês criam a página do zero?",
        a: "Sim: copy, design e implementação. Também otimizamos páginas existentes quando a estrutura atual já funciona — o diagnóstico de CRO indica o melhor caminho.",
      },
      {
        q: "O que é CRO?",
        a: "Conversion Rate Optimization: o processo contínuo de melhorar a taxa de conversão das suas páginas com hipóteses, testes A/B e análise de dados — mais receita com o mesmo tráfego.",
      },
    ],
  },
  {
    slug: "consultoria-growth",
    navLabel: "Consultoria de Growth",
    metaTitle: "Consultoria de Growth — CMO as a Service",
    metaDescription:
      "Um time de consultores C-Level pelo preço de uma contratação: diagnóstico, plano de 90 dias, GTM-Strategy e execução em sprints semanais. R$6k/mês, sem fidelidade.",
    eyebrow: "Consultoria & Growth",
    h1: "Consultoria de growth: um time de C-Levels pelo preço de uma contratação",
    intro:
      "CMO as a Service para empresas de tecnologia: estratégia, consultoria e execução full-funnel (Marketing + Vendas + CS) trabalhando em sprints, orientados pelo ROI.",
    includes: [
      "CMO as a Service com diagnóstico inicial e plano de ação 90D",
      "Marketing-Plan (trimestre/semestre/ano) e construção da GTM-Strategy",
      "Weekly reviews, monthly results e quarterly marketing analysis",
      "Docs estratégicos: posicionamento de marca, jornada de compra e persona",
      "Automação de marketing (RD Station) e inteligência de negócios com foco em marketing",
      "Execução: conteúdo, design, SEO, gestão de performance e CRO",
    ],
    proof: [
      { value: "R$6k/mês", label: "investimento mensal, sem fidelidade" },
      { value: "0 → R$4,5MM", label: "em receitas recorrentes anuais no case PM RUN (3 anos)" },
      { value: "+43%", label: "de crescimento de receita para todas as startups do HubConexa" },
    ],
    cases: [
      { name: "PM RUN (ITSS)", result: "Da concepção do produto ao lançamento e escala: 0 → R$4,5 milhões em receitas recorrentes anuais, com vendas para Faber Castell, Dori, Marilan e Volkswagen" },
      { name: "TradicionalBet (iGaming)", result: "Ecossistema completo de performance com funil AARRR: R$8 milhões em depósitos mensais e R$3 milhões+ de lucro em 10 meses" },
      { name: "Conexa / Aliare (B2B)", result: "GTM e cultura de growth para 7 startups do hub: +43% de crescimento de receita no conjunto" },
    ],
    faq: [
      {
        q: "Como funciona o modelo de trabalho?",
        a: "Reunião semanal de alinhamento (métricas, sprints, plano de ação) e reunião mensal de fechamento e estratégia. Somos executores: além da estratégia, colocamos a mão na massa.",
      },
      {
        q: "Existe fidelidade?",
        a: "Não. Pagamentos mensais e cancelamento sem multas — nós nos pagamos no tempo, orientados pelo ROI do nosso trabalho.",
      },
      {
        q: "Para quem é a consultoria?",
        a: "Empresas de tecnologia e B2B que precisam de senioridade estratégica sem o custo (e o risco) de montar um time interno de C-Level — que custaria mais de R$300k/ano.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
