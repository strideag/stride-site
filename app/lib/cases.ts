// Case study pages data — content sourced from the 2025 Stride proposal.
// Drives /cases (index) and /cases/[slug].

export type CaseImpact = { value: string; label: string };

export type CaseStudy = {
  slug: string;
  name: string;
  segment: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  summary: string;
  historia: string[];
  estrategia: string[];
  impacto: CaseImpact[];
};

export const cases: CaseStudy[] = [
  {
    slug: "tradicionalbet",
    name: "TradicionalBet",
    segment: "B2C · iGaming",
    metaTitle: "Case TradicionalBet — 17x em depósitos em 5 meses",
    metaDescription:
      "Como a Stride estruturou o ecossistema de performance de uma plataforma de apostas: de R$105 mil para R$1,84 milhão em depósitos mensais em 5 meses.",
    headline: "De R$105 mil para R$8 milhões em depósitos mensais",
    summary:
      "Estruturação e escalada de um produto digital de apostas, do estágio embrionário a R$3 milhões de lucro mensal em 10 meses.",
    historia: [
      "A BNP (Bicho No Pix — hoje TradicionalBet) é uma plataforma digital voltada ao mercado de apostas online. Quando iniciamos a atuação, em janeiro de 2024, o negócio estava em estágio inicial, com estrutura embrionária e operação descentralizada.",
      "Nos primeiros meses, realizamos um trabalho profundo de imersão estratégica, estruturando o time, os processos e os pilares de crescimento com base no funil AARRR.",
    ],
    estrategia: [
      "Operação e inteligência de mídia (Google, Meta, YouTube e Afiliados)",
      "Estruturação de BI com dashboards de funil e CAC por jornada (clique > cadastro > depósito)",
      "Otimização da jornada de usuário e da taxa de conversão",
      "Fortalecimento da identidade visual e comunicação do produto",
      "Estratégia de lançamento, escala e aceleração",
    ],
    impacto: [
      { value: "17x", label: "crescimento em depósitos em 5 meses: de R$105.607 (jan/24) para R$1.839.581 (mai/24)" },
      { value: "R$8MM", label: "em depósitos mensais atingidos em outubro/24, com mais de R$3 milhões em lucro" },
      { value: "22x", label: "crescimento do GGR (lucro bruto): de R$27.702 para R$621.766 em 5 meses" },
      { value: "R$1,50", label: "custo por redepósito com 84.285 redepósitos gerados" },
    ],
  },
  {
    slug: "pm-run",
    name: "PM RUN (ITSS)",
    segment: "B2B · SaaS",
    metaTitle: "Case PM RUN — de 0 a R$4,5 milhões em receita recorrente",
    metaDescription:
      "Da concepção do produto ao lançamento e escala: como o PM RUN atingiu R$4,5 milhões em receitas recorrentes anuais em 3 anos, com vendas para Volkswagen e Faber Castell.",
    headline: "De 0 a R$4,5 milhões em receitas recorrentes anuais",
    summary:
      "Estruturação de marketing de resultado para um aplicativo de mobilidade da manutenção usado por grandes indústrias com SAP.",
    historia: [
      "O PM RUN, anteriormente ITSS PM RUN, é um aplicativo para a mobilidade da manutenção utilizado por grandes empresas e equipes de manutenção que possuem SAP.",
      "O trabalho que realizamos foi desde a concepção do produto até seu lançamento e escala de negócios. Com o sucesso extremo do produto, ele ganhou uma operação própria, com a recriação do branding e criação de canais próprios.",
    ],
    estrategia: [
      "Go-to-market completo: da concepção do produto ao lançamento",
      "Operação de DemandGen com eventos e webinars (Disrupção Industrial)",
      "Recriação do branding e canais próprios após a validação",
      "Construção de autoridade de mercado no nicho SAP PM",
    ],
    impacto: [
      { value: "R$4,5MM", label: "em receitas recorrentes anuais em 3 anos (2019 a 2022), partindo de 0" },
      { value: "Volkswagen", label: "entre as grandes contas conquistadas — além de Faber Castell, Dori e Marilan" },
      { value: "+15.000", label: "pessoas assistindo aos eventos da marca em 3 anos" },
    ],
  },
  {
    slug: "disrupcao-industrial",
    name: "Disrupção Industrial",
    segment: "B2B · Eventos",
    metaTitle: "Case Disrupção Industrial — liderança de pensamento que vende",
    metaDescription:
      "Como um conceito de evento criou liderança de pensamento para o PM RUN: +10.400 inscritos e 78% dos leads qualificados vindos da estratégia.",
    headline: "78% dos leads qualificados vindos de uma estratégia de evento",
    summary:
      "Criação de um conceito e um evento específico para engajar um público de nicho e crescer receita.",
    historia: [
      "O Disrupção Industrial nasceu da necessidade de criar uma liderança de pensamento para a marca PM RUN, que possuía um público extremamente específico, feito de grandes indústrias detentoras do software SAP com o módulo PM instalado.",
      "Devido ao diminuto mercado total (TAM) e à necessidade de especialização e liderança do mercado acessível (SOM), decidimos criar um conceito baseado em um evento para atrair o público, engajar e conquistar liderança de pensamento.",
    ],
    estrategia: [
      "Conceito próprio de evento (Summit) para um nicho específico",
      "Série de lives e webinars recorrentes para engajamento contínuo",
      "Portal de conteúdo dominando as buscas do nicho no Google",
      "Qualificação de leads a partir da audiência dos eventos",
    ],
    impacto: [
      { value: "44", label: "lives e webinars realizados" },
      { value: "+10.400", label: "inscritos para os eventos" },
      { value: "+4.600", label: "participantes nos eventos e webinars" },
      { value: "78%", label: "dos leads qualificados com perfil provenientes dessa estratégia" },
    ],
  },
  {
    slug: "hable",
    name: "Grupo Hable (Claro)",
    segment: "B2C · Telecom",
    metaTitle: "Case Grupo Hable — +111% de vendas em 3 meses",
    metaDescription:
      "Otimização de campanhas Google para o Grupo Hable (autorizada Claro): custo por conversão de R$6,60 para R$3,88 e +111% de vendas em 3 meses.",
    headline: "+111% de aumento das vendas em somente 3 meses",
    summary:
      "Reestruturação das campanhas Google de um grupo de telecomunicações, única autorizada Claro presente em todos os mercados de comercialização.",
    historia: [
      "Iniciamos o trabalho com o Grupo Hable em setembro de 2019 com o objetivo de otimizar e alavancar as vendas do canal Call Center. A empresa é um grupo de telecomunicações, sendo a única autorizada Claro presente em todos os mercados de comercialização.",
      "O trabalho realizado foi de reestruturação da estratégia de campanhas do Google, com criação de LPs específicas para cada vertical de atuação e campanhas específicas para atender o público-alvo dentro da vertical e da região pretendida — todas feitas com estratégias para otimizar a conversão (CRO).",
      "Como resultado, já no primeiro mês de ativação da nova campanha houve melhora significativa da pontuação das páginas de destino, otimização da campanha, crescimento nas vendas com aumento proporcional menor de investimento, e maior foco para a equipe comercial atuar com o público-alvo correto.",
    ],
    estrategia: [
      "Reestruturação completa da estratégia de campanhas Google",
      "LPs específicas por vertical de atuação, otimizadas para CRO",
      "Campanhas segmentadas por público e região",
      "Gestão de verba acima de R$80.000/mês em campanhas",
    ],
    impacto: [
      { value: "+111%", label: "de aumento das vendas em somente 3 meses de operação" },
      { value: "R$6,60 → R$3,88", label: "de otimização do custo por conversão no Google Ads" },
      { value: "+128%", label: "de aumento de conversão (out/19 a mar/20), com apenas +87% de custo" },
      { value: "99,5%", label: "de pontuação de otimização das campanhas" },
    ],
  },
  {
    slug: "assinei",
    name: "Assinei",
    segment: "SaaS · B2B",
    metaTitle: "Case Assinei — +157% em vendas com tráfego e marketing digital",
    metaDescription:
      "Como a Assinei escalou as vendas de 7 para 18/mês: estratégia de canais e públicos, com o canal pago representando 33% das vendas.",
    headline: "+157% em vendas: de 7 para 18 vendas mensais",
    summary:
      "Escalada de vendas de um sistema de gestão de documentos B2B através de uma estratégia pautada em ações de tráfego e marketing digital.",
    historia: [
      "Entramos para atuar na Assinei no início de 2022, quando era preciso fazer uma escalada rápida das vendas para atender metas agressivas — o objetivo era basicamente dobrar de tamanho.",
      "Sendo uma empresa com um sistema de gestão de documentos, a estratégia seria de atuação B2B, com ticket médio do produto em R$700. Até então, a estratégia era atacar todas as bases e todos os mercados sem uma orientação de público ou canal.",
      "Em nossa entrada estudamos os canais de aquisição e os perfis de público que mais se engajavam e aderiam ao produto. Criamos campanhas para atacar os principais públicos nos mais diversos canais e, ao perceber uma escala dentro de um perfil específico (provedores de internet), aumentamos nossa abordagem para esse público — que se tornou a maior representatividade das vendas (35%).",
    ],
    estrategia: [
      "Estudo de canais de aquisição e perfis de público com maior aderência",
      "Campanhas segmentadas por público nos diversos canais",
      "Dobra de aposta no perfil vencedor (provedores de internet)",
      "Entrada do canal pago (Facebook) como motor de crescimento",
    ],
    impacto: [
      { value: "+157%", label: "de aumento em vendas: média de 7 para 18 vendas mensais" },
      { value: "33%", label: "das vendas vindas do canal pago (Facebook)" },
      { value: "61%", label: "de representatividade das vendas somente das ações de marketing" },
    ],
  },
  {
    slug: "myfarm",
    name: "MyFarm",
    segment: "SaaS · Agro",
    metaTitle: "Case MyFarm — +220% de conversão com nova LP e growth",
    metaDescription:
      "Estratégia de growth e tração de canais para software do produtor rural: +220% de conversão com nova landing page e +30% em vendas.",
    headline: "+220% de conversão a partir de uma nova página de vendas",
    summary:
      "Estratégia de growth e tração de canais para destravar o plateau de crescimento de um software para o produtor rural.",
    historia: [
      "Entramos para atuar no MyFarm no início de 2022, quando havia a necessidade de escalar após um crescimento forte a partir de tráfego pago e ações orgânicas. O negócio estava chegando em um plateau: não conseguia mais sair de um nível específico de vendas nem abordar novos clientes.",
      "Nossa entrada foi justamente para possibilitar uma nova tração a partir de uma outra visão e uma estratégia diferente — tanto em canais quanto em conversão.",
      "Primeiro revemos a estratégia e levantamos quickwins a partir do que já possuíam. A vitória rápida veio com a criação de uma nova página de conversão e uma campanha específica para ela, com diversos testes A/B aplicados. Em seguida, desenhamos um projeto para alavancar novos canais (afiliados e parceiros), que trouxe 19 novas vendas no ano somente por esse canal.",
    ],
    estrategia: [
      "Levantamento de quickwins sobre campanhas e orgânico existentes",
      "Nova página de conversão com testes A/B na concepção",
      "Projeto de novos canais de aquisição: afiliados e parceiros",
      "Revisão das etapas da jornada de compra e funis de vendas",
    ],
    impacto: [
      { value: "+220%", label: "de conversão em oportunidades e vendas com a nova LP (Google Ads)" },
      { value: "19", label: "novas vendas no ano somente pelo novo canal de parceiros" },
      { value: "+30%", label: "em vendas e +15% em oportunidades (2021 para 2022)" },
      { value: "+37%", label: "em leads gerados e +28% em leads qualificados" },
    ],
  },
  {
    slug: "agriq",
    name: "AgriQ",
    segment: "SaaS · Agro",
    metaTitle: "Case AgriQ — +435% em leads qualificados com PLG",
    metaDescription:
      "Escalada comercial pautada em marketing digital e PLG para receituário agronômico: vendas triplicadas um mês após o novo site e +435% em qualificações.",
    headline: "Vendas triplicadas um mês após o lançamento do novo site",
    summary:
      "Escalada comercial pautada em ações de marketing digital e PLG (Product-Led Growth) para um sistema de receituário agronômico.",
    historia: [
      "O foco para a atuação no AgriQ, um sistema para receituário agronômico, começou no final de 2022. O sistema estava perdendo performance comercial e já não conseguia mais atrair clientes e interessados ao produto.",
      "O website estava desatualizado e, para que pudesse voltar a concorrer com os novos entrantes, uma revitalização da proposta de valor foi realizada. A partir de uma estratégia que uniu branding e promoção, refizemos o website e definimos uma precificação mais agressiva para o mercado.",
      "Focamos em atuar com um único canal — o Google (orgânico e pago) — com o objetivo de trazer mais conversão. Até agosto, com o site antigo, a média era de 3 vendas mensais. Somente em outubro de 2023, um mês após o lançamento, conseguimos triplicar a média de vendas.",
    ],
    estrategia: [
      "Revitalização da proposta de valor: novo website e precificação agressiva",
      "Foco em canal único (Google orgânico + pago) para maximizar conversão",
      "Implementação de estratégia PLG com teste grátis",
      "Go-to-market coordenado com o lançamento do novo site",
    ],
    impacto: [
      { value: "3 → 10+", label: "vendas mensais um mês após o lançamento do novo site" },
      { value: "+435%", label: "em leads qualificados: de 42 para 225 por quadrimestre (2023)" },
      { value: "+157%", label: "em vendas realizadas" },
      { value: "19%", label: "das qualificações vindas da estratégia de teste grátis (PLG)" },
    ],
  },
  {
    slug: "esup",
    name: "Faculdade ESUP",
    segment: "B2C · Educação",
    metaTitle: "Case ESUP — +2.087% em cadastros para o vestibular digital",
    metaDescription:
      "Estruturação completa do departamento de marketing da Faculdade ESUP: de 0 a 28 mil acessos/ano e crescimento de 2.087% nos cadastros do vestibular.",
    headline: "+2.087% de crescimento em cadastros para o vestibular digital",
    summary:
      "Criação de um departamento de marketing completo, com integração entre canais e ações on/off, para uma escola de negócios de renome em Goiânia.",
    historia: [
      "Iniciado em 2017, o projeto caracterizou-se por ser uma completa integração entre canais e ações de marketing em todas as esferas (on/off).",
      "A tarefa inicial era a criação de um departamento de marketing para a Faculdade ESUP. O projeto durou 3 anos e teve três fases distintas: estruturação do departamento e plataformas; lançamento das plataformas digitais; e crescimento, com campanhas e divulgação.",
      "Cada fase durou praticamente um ano e, em outubro de 2019, foi entregue todo o projeto, com uma equipe madura e uma plataforma de marca digital forte — com portais, posicionamento no Google e campanhas bem estruturadas.",
    ],
    estrategia: [
      "Estruturação do departamento de marketing do zero",
      "Lançamento das plataformas digitais (portais e posicionamento no Google)",
      "Campanhas de crescimento integradas on/off",
      "Vestibular digital como motor de conversão",
    ],
    impacto: [
      { value: "1 → 9", label: "pessoas no departamento estruturado (8 + 1 gestora)" },
      { value: "+28 mil", label: "acessos/ano partindo de 0 (2017 vs 2019)" },
      { value: "+2.087%", label: "de crescimento em cadastros para o vestibular digital (2018 para 2019)" },
      { value: "+39%", label: "de crescimento em tráfego de 2018 para 2019" },
    ],
  },
  {
    slug: "herreira",
    name: "Grupo Herreira",
    segment: "B2C · Varejo",
    metaTitle: "Case Grupo Herreira — de 0 a 50 mil acessos mensais",
    metaDescription:
      "Projeto de sustentabilidade de marketing com Inbound: de uma página no Facebook a +50.000 acessos/mês e +1.500 vendas mensais nas 3 marcas do grupo.",
    headline: "De 0 a +50.000 acessos e +1.500 vendas por mês",
    summary:
      "Um projeto de sustentabilidade de marketing: plataforma de marca digital completa para as 3 marcas do grupo (Aulore, Herreira e Vitesse).",
    historia: [
      "O projeto do Grupo Herreira foi iniciado em 2015. No início, existia apenas uma página do Facebook para cada uma das empresas (Aulore e Herreira) e uma página web de demonstração de semi joias.",
      "Através de um trabalho de marketing digital com metodologia de Inbound Marketing, a empresa conquistou um domínio nas pesquisas do Google e um acesso mensal aos sites ultrapassando os 50.000 acessos por mês, além de 1.500 vendas mensais contando as três marcas do grupo: Aulore, Herreira e Vitesse.",
      "A integração de site, blog, campanhas e automação de marketing transformou o marketing digital em uma máquina de vendas, com a gestão e automação dos leads feita através da RD Station, a maior plataforma de Inbound Marketing do Brasil.",
    ],
    estrategia: [
      "Criação de uma plataforma de marca digital completa",
      "Metodologia de Inbound Marketing: site + blog + campanhas + automação",
      "Gestão, controle e automação de leads com RD Station",
      "SEO e conteúdo para domínio das pesquisas do Google",
    ],
    impacto: [
      { value: "+50.000", label: "acessos mensais aos sites das 3 marcas, partindo de 0" },
      { value: "+1.500", label: "vendas por mês contando as três marcas do grupo" },
      { value: "1ª página", label: "domínio nas pesquisas do Google no segmento" },
    ],
  },
];

export function getCase(slug: string) {
  return cases.find((c) => c.slug === slug);
}
