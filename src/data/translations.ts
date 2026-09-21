import { LanguageCode, LanguageOption, Translations } from '../types';
import { portfolioItems } from './portfolioData';

export const languageOptions: LanguageOption[] = [
  { code: 'pt-pt', label: 'Português', flag: '🇵🇹', shortLabel: 'PT' },
  { code: 'en', label: 'English', flag: '🇺🇸', shortLabel: 'EN' },
  { code: 'es', label: 'Español', flag: '🇪🇸', shortLabel: 'ES' },
  { code: 'fr', label: 'Français', flag: '🇫🇷', shortLabel: 'FR' },
];

export const translations: Record<LanguageCode, Translations> = {
  'pt-pt': {
    nav: {
      services: 'O Que Fazemos',
      difference: 'Diferencial',
      portfolio: 'Portfólio',
      process: 'Processo',
      international: 'Internacional',
      technology: 'Tecnologia',
      ctaButton: 'Criar o meu projeto',
      availableBadge: 'Disponível para projetos selecionados',
    },
    hero: {
      badge: 'Brasil • Europa • América Latina • Worldwide',
      headline: 'O SEU NEGÓCIO MERECE UMA PRESENÇA DIGITAL À ALTURA.',
      subheadline: 'Criamos experiências digitais premium que transformam ideias, empresas e marcas em presenças memoráveis na internet.',
      primaryCta: 'Criar o meu projeto',
      secondaryCta: 'Explorar os nossos projetos',
      presenceTag: 'Digital experiences engineered for the world.',
      metrics: {
        satisfaction: '100% Satisfação de Clientes',
        speed: '< 0.4s Tempo de Carregamento',
        global: '28+ Países Atendidos',
      },
    },
    whatWeDo: {
      sectionTag: 'SERVIÇOS DE ELEVADO VALOR',
      title: 'Não criamos apenas websites. Criamos presença.',
      subtitle: 'A Axé IA transforma negócios em experiências digitais sofisticadas, rápidas e preparadas para conquistar clientes em qualquer lugar do mundo.',
      cards: [
        {
          id: 'websites-premium',
          title: 'Websites Premium',
          tagline: 'Websites institucionais modernos, rápidos e estratégicos.',
          description: 'Arquitetura refinada, tipografia cinematográfica e engenharia de alta fidelidade para empresas e líderes que exigem distinção absoluta.',
          features: ['Design exclusivo à medida', 'Velocidade ultrarrápida (Edge)', 'SEO técnico internacional', 'Experiência imersiva em qualquer ecrã'],
          icon: 'Globe',
          badge: 'Institucional de Luxo'
        },
        {
          id: 'landing-pages',
          title: 'Landing Pages',
          tagline: 'Páginas desenvolvidas para transformar tráfego em oportunidades e vendas.',
          description: 'Estruturas de altíssima conversão que unem copywriting persuasivo de luxo, estética impecável e resposta imediata do utilizador.',
          features: ['Copywriting estratégico', 'Microinterações que guiam a decisão', 'Testes A/B nativos', 'Integração direta com CRMs'],
          icon: 'Sparkles',
          badge: 'Alta Conversão'
        },
        {
          id: 'ecommerce',
          title: 'E-commerce',
          tagline: 'Lojas virtuais preparadas para vender produtos e serviços.',
          description: 'Plataformas de comércio digital pensadas para marcas de prestígio, com navegação fluida, checkout instantâneo e suporte multi-moeda.',
          features: ['Checkout em 1 clique', 'Multi-moeda (EUR, USD, BRL)', 'Integração de pagamentos europeus e globais', 'Performance ultra-otimizada'],
          icon: 'ShoppingBag',
          badge: 'Digital Commerce'
        },
        {
          id: 'ia-experiences',
          title: 'Experiências com IA',
          tagline: 'Integração de inteligência artificial para criar experiências digitais mais inteligentes.',
          description: 'Agentes conversacionais inteligentes, personalização dinâmica de conteúdo e automações em tempo real que encantam os seus clientes.',
          features: ['Agentes de qualificação 24/7', 'Personalização preditiva', 'Automação inteligente de processos', 'Modelos avançados de linguagem'],
          icon: 'Cpu',
          badge: 'Inteligência Artificial'
        },
        {
          id: 'international-presence',
          title: 'Presença Internacional',
          tagline: 'Estruturas digitais preparadas para diferentes idiomas, mercados e públicos.',
          description: 'Infraestrutura global distribuída em CDN de baixa latência, conformidade integral com o RGPD/GDPR e adaptação cultural para múltiplos mercados.',
          features: ['Sistemas multi-idiomas nativos', 'Encaminhamento geográfico inteligente', 'Conformidade legal global', 'Latência inferior a 25ms'],
          icon: 'Navigation',
          badge: 'Escala Global'
        },
        {
          id: 'bespoke-solutions',
          title: 'Soluções Sob Medida',
          tagline: 'Projetos personalizados de acordo com o objetivo de cada negócio.',
          description: 'Desenvolvimento técnico de alta complexidade para marcas, ecossistemas digitais, portais exclusivos e ferramentas proprietárias.',
          features: ['Arquitetura escalável', 'APIs e integrações complexas', 'Design System proprietário', 'Suporte e governança contínua'],
          icon: 'Layers',
          badge: 'Tailor-Made'
        }
      ]
    },
    difference: {
      sectionTag: 'FILOSOFIA EXCLUSIVA',
      title: 'Tecnologia. Estratégia. Estética.',
      subtitle: 'Combinamos o rigor da engenharia de ponta com a sofisticação do design internacional para entregar ativos digitais inestimáveis.',
      pillars: [
        {
          number: '01',
          title: 'DESIGN',
          headline: 'Interfaces sofisticadas que valorizam a sua marca.',
          description: 'Design digital com padrão de galeria internacional. Cada proporção, microinteração e contraste visual é desenhado para elevar o valor percebido do seu negócio.',
          metric: '100%',
          metricLabel: 'Identidade Única',
          highlight: 'Sem templates genéricos. Apenas distinção.'
        },
        {
          number: '02',
          title: 'PERFORMANCE',
          headline: 'Websites rápidos, responsivos e preparados para conversão.',
          description: 'Arquitetura de ponta com carregamento instantâneo em qualquer lugar do mundo. Código limpo que garante índices máximos de conversão e aprovação no Google.',
          metric: '99+',
          metricLabel: 'Lighthouse Score',
          highlight: 'Carregamento abaixo de 400ms em redes globais.'
        },
        {
          number: '03',
          title: 'INTELIGÊNCIA',
          headline: 'Tecnologia e IA aplicadas para criar experiências digitais mais eficientes.',
          description: 'Integramos modelos de IA e automações inteligentes que transformam o seu website num canal ativo de geração de negócios e atendimento refinado.',
          metric: '24/7',
          metricLabel: 'Automação Ativa',
          highlight: 'Inteligência invisível que maximiza resultados.'
        }
      ]
    },
    portfolio: {
      sectionTag: 'TRABALHOS SELECIONADOS',
      title: 'Projetos que falam antes da primeira palavra.',
      subtitle: 'Uma seleção de experiências criadas para líderes, marcas inovadoras e empresas com ambição internacional.',
      allCategories: 'Todos os Projetos',
      categories: [
        { id: 'all', name: 'Todos' },
        { id: 'websites', name: 'Websites' },
        { id: 'landing-pages', name: 'Landing Pages' },
        { id: 'ecommerce', name: 'E-commerce' },
        { id: 'ia', name: 'IA' },
        { id: 'internacional', name: 'Internacional' }
      ],
      viewProject: 'Ver Apresentação do Projeto',
      items: portfolioItems
    },
    process: {
      sectionTag: 'METODOLOGIA DE ALTO NÍVEL',
      title: 'Do conceito à experiência.',
      subtitle: 'Um fluxo de trabalho transparente, cirúrgico e pontual para materializar a sua visão com perfeição técnica.',
      steps: [
        {
          step: '01',
          title: 'Discovery',
          description: 'Entendemos o seu negócio, público e objetivos.',
          details: 'Imersão detalhada no posicionamento da marca, análise competitiva internacional e definição clara das métricas de sucesso.',
          duration: 'Semana 1'
        },
        {
          step: '02',
          title: 'Estratégia',
          description: 'Definimos estrutura, posicionamento e experiência.',
          details: 'Arquitetura de informação, mapa de jornada do cliente de alto valor e roteiro de conversão para cada secção da interface.',
          duration: 'Semana 1–2'
        },
        {
          step: '03',
          title: 'Design',
          description: 'Criamos uma identidade visual digital exclusiva.',
          details: 'Direção de arte de prestígio, tipografia cinematográfica, microinterações e protótipos de alta fidelidade para validação visual.',
          duration: 'Semana 2–3'
        },
        {
          step: '04',
          title: 'Development',
          description: 'Transformamos o conceito numa experiência funcional e responsiva.',
          details: 'Codificação limpa em React/Next.js e Tailwind, otimização de performance extrema e integração com IA e APIs.',
          duration: 'Semana 3–4'
        },
        {
          step: '05',
          title: 'Launch',
          description: 'Publicamos, testamos e entregamos o seu projeto pronto para o mundo.',
          details: 'Deploy em rede CDN global, testes exaustivos de segurança e velocidade, configuração de SEO técnico e entrega final impecável.',
          duration: 'Semana 5'
        }
      ]
    },
    international: {
      sectionTag: 'ALCANCE GLOBAL',
      title: 'Uma marca. Um mundo inteiro.',
      description: 'A Axé IA desenvolve experiências digitais preparadas para empresas que desejam atuar além das fronteiras.',
      quote: 'Designed locally. Built globally.',
      badge: 'Hubs Globais Ativos',
      activeNodesLabel: 'Nós de Infraestrutura Edge',
      latencyLabel: 'Latência média global',
      complianceLabel: 'Conformidade Regulamentar',
      complianceDesc: 'RGPD (Europa) • LGPD (Brasil) • CCPA (EUA)'
    },
    audience: {
      sectionTag: 'SEGMENTOS DE EXCELÊNCIA',
      title: 'Construído para quem pensa grande.',
      subtitle: 'Atendemos clientes com visão que entendem que o design e a tecnologia são os maiores alavancadores de valor de uma marca.',
      cards: [
        {
          id: 'empresas',
          title: 'Empresas',
          tag: 'Corporativo & B2B',
          description: 'Companhias consolidadas que procuram modernizar o seu posicionamento e transmitir solidez e liderança inquestionáveis.',
          benefit: 'Autoridade imediata e credibilidade institucional.',
          icon: 'Building2'
        },
        {
          id: 'startups',
          title: 'Startups',
          tag: 'Scale-ups & Tech',
          description: 'Startups inovadoras que precisam de interfaces de nível internacional para atrair investidores, clientes e talentos de ponta.',
          benefit: 'Velocidade de go-to-market com apelo internacional.',
          icon: 'Rocket'
        },
        {
          id: 'profissionais',
          title: 'Profissionais',
          tag: 'Líderes & Consultores',
          description: 'Médicos, advogados, consultores e executivos que exigem uma presença digital tão elegante quanto a sua reputação.',
          benefit: 'Valorização de honorários e diferenciação de topo.',
          icon: 'UserCheck'
        },
        {
          id: 'infoprodutores',
          title: 'Infoprodutores',
          tag: 'High-Ticket & Mentores',
          description: 'Criadores de produtos de alto valor que procuram páginas de lançamento cinematográficas com elevadíssima taxa de conversão.',
          benefit: 'Aumento expressivo na conversão de produtos premium.',
          icon: 'TrendingUp'
        },
        {
          id: 'criadores',
          title: 'Criadores',
          tag: 'Mídia & Influência',
          description: 'Figuras públicas e criadores de conteúdo que pretendem um ecossistema digital próprio, independente das redes sociais.',
          benefit: 'Controlo total da própria audiência e monetização.',
          icon: 'Camera'
        },
        {
          id: 'marcas',
          title: 'Marcas',
          tag: 'Luxo & Lifestyle',
          description: 'Marcas de moda, design, hotelaria e estética que exigem uma narrativa visual memorável e requintada.',
          benefit: 'Fidelização sensorial e valor de marca elevado.',
          icon: 'Crown'
        },
        {
          id: 'e-commerces',
          title: 'E-commerces',
          tag: 'Retalho de Prestígio',
          description: 'Operações de e-commerce que querem distanciar-se dos modelos genéricos e oferecer uma experiência de compra sofisticada.',
          benefit: 'Ticket médio superior e retenção de clientes.',
          icon: 'ShoppingBag'
        },
        {
          id: 'empresas-internacionais',
          title: 'Empresas Internacionais',
          tag: 'Cross-Border',
          description: 'Organizações com operações na Europa, Brasil e América Latina que requerem websites multi-idiomas perfeitamente arquitetados.',
          benefit: 'Consistência global e presença sem barreiras locais.',
          icon: 'Globe2'
        }
      ]
    },
    technology: {
      sectionTag: 'ENGENHARIA AVANÇADA',
      title: 'Tecnologia invisível. Experiência inesquecível.',
      subtitle: 'Eliminamos a complexidade técnica para entregar websites que operam à velocidade do pensamento com segurança de classe mundial.',
      modules: [
        {
          id: 'ia',
          title: 'IA & Agentes',
          benefit: 'Atendimento e inteligência 24/7',
          description: 'Integração de inteligência artificial generativa para qualificação automática e personalização dinâmica.',
          badge: 'Next-Gen',
          icon: 'Cpu'
        },
        {
          id: 'automacao',
          title: 'Automação',
          benefit: 'Processos comerciais fluidos',
          description: 'Conexão nativa com fluxos de CRM, notificações em tempo real e automação de agendamentos.',
          badge: 'Fluxos Inteligentes',
          icon: 'Zap'
        },
        {
          id: 'integracoes',
          title: 'Integrações',
          benefit: 'Ecossistema unificado',
          description: 'Conexão fluida com sistemas legados, gateways de pagamento europeus e plataformas corporativas.',
          badge: 'Sem Atrito',
          icon: 'Workflow'
        },
        {
          id: 'apis',
          title: 'APIs Modernas',
          benefit: 'Dados em tempo real',
          description: 'Arquiteturas headless modernas que consomem e distribuem dados com latência ultra-baixa.',
          badge: 'Headless',
          icon: 'Code2'
        },
        {
          id: 'analytics',
          title: 'Analytics Avançado',
          benefit: 'Decisões guiadas por dados',
          description: 'Telemetria e mapas de calor sem comprometer a privacidade do utilizador ou a velocidade do website.',
          badge: 'Insights',
          icon: 'BarChart3'
        },
        {
          id: 'seo',
          title: 'SEO Técnico',
          benefit: 'Primeiras posições no Google',
          description: 'Indexação estruturada JSON-LD, tags OpenGraph e pontuação máxima nos Core Web Vitals.',
          badge: 'Visibilidade',
          icon: 'Search'
        },
        {
          id: 'performance',
          title: 'Performance Extrema',
          benefit: 'Carregamento em milissegundos',
          description: 'Otimização de pacotes, compressão de média de última geração e execução assíncrona.',
          badge: '< 0.4s',
          icon: 'Gauge'
        },
        {
          id: 'responsividade',
          title: 'Responsividade Total',
          benefit: 'Impecável em qualquer ecrã',
          description: 'Adaptação geométrica fluida de smartphones a monitores ultra-wide 8K.',
          badge: 'Mobile-First',
          icon: 'Smartphone'
        },
        {
          id: 'seguranca',
          title: 'Segurança & Criptografia',
          benefit: 'Proteção institucional',
          description: 'Certificados SSL enterprise, mitigação de DDoS, headers de segurança e conformidade RGPD.',
          badge: 'Blindado',
          icon: 'ShieldCheck'
        },
        {
          id: 'cloud',
          title: 'Cloud & Edge CDN',
          benefit: '99.99% Uptime global',
          description: 'Distribuição em nós globais de borda para entrega instantânea em qualquer continente.',
          badge: 'Global Edge',
          icon: 'Cloud'
        }
      ]
    },
    finalCta: {
      headline: 'Vamos construir algo extraordinário?',
      subheadline: 'A sua próxima grande presença digital começa com uma ideia. Nós transformamos essa ideia em experiência.',
      primaryButton: 'Começar um projeto',
      secondaryButton: 'Falar com a Axé IA',
      regionBadge: 'Brasil · Portugal · Europa · América Latina · Worldwide'
    },
    footer: {
      tagline: 'Digital experiences engineered for the world.',
      companyLinks: 'Empresa',
      servicesLinks: 'Serviços',
      legalLinks: 'Legal',
      languagesTitle: 'Idiomas',
      rights: 'Todos os direitos reservados. Axé IA Studio.',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Serviço'
    },
    modal: {
      title: 'Iniciar Novo Projeto com a Axé IA',
      subtitle: 'Partilhe a sua visão e receba uma proposta técnica e comercial sob medida em 24 horas úteis.',
      step1Title: 'Tipo de Projeto',
      step2Title: 'Escala & Prazo',
      step3Title: 'Contacto & Detalhes',
      projectTypeLabel: 'Qual a solução ideal para o seu momento?',
      types: [
        { id: 'website', label: 'Website Premium', desc: 'Website institucional moderno, rápido e estratégico' },
        { id: 'landing', label: 'Landing Page', desc: 'Página de altíssima conversão para vendas e contactos' },
        { id: 'ecommerce', label: 'E-commerce de Luxo', desc: 'Loja virtual com experiência de compra refinada' },
        { id: 'ia', label: 'Experiência com IA', desc: 'Automação inteligente e agentes à medida' },
        { id: 'global', label: 'Presença Internacional', desc: 'Multi-idioma e escala transfronteiriça' },
        { id: 'custom', label: 'Solução Sob Medida', desc: 'Projeto complexo ou ecossistema exclusivo' }
      ],
      budgetLabel: 'Investimento previsto para o projeto',
      budgets: ['Sob Consulta', '€ 1.500 — € 3.500', '€ 3.500 — € 8.000', '€ 8.000+ / Internacional'],
      timelineLabel: 'Expectativa de lançamento',
      timelines: ['Imediato (até 3 semanas)', '1 a 2 meses', 'Planeamento estratégico (3+ meses)'],
      nameLabel: 'Nome Completo',
      emailLabel: 'E-mail Profissional',
      phoneLabel: 'WhatsApp / Telefone com Indicativo',
      messageLabel: 'Descreva resumidamente a sua visão ou objetivo',
      messagePlaceholder: 'Partilhe pormenores sobre a sua empresa e o que espera da sua nova presença digital...',
      submitButton: 'Enviar Briefing do Projeto',
      whatsappButton: 'Falar Diretamente no WhatsApp',
      submitting: 'A enviar dados...',
      successTitle: 'Solicitação Enviada com Sucesso',
      successMessage: 'Recebemos os detalhes do seu projeto. Entraremos em contacto brevemente.',
      closeButton: 'Fechar'
    }
  },

  'en': {
    nav: {
      services: 'What We Do',
      difference: 'Difference',
      portfolio: 'Portfolio',
      process: 'Process',
      international: 'International',
      technology: 'Technology',
      ctaButton: 'Start My Project',
      availableBadge: 'Available for Selected Global Engagements',
    },
    hero: {
      badge: 'Brazil • Europe • Latin America • Worldwide',
      headline: 'YOUR BUSINESS DESERVES A DIGITAL PRESENCE TO MATCH.',
      subheadline: 'We craft premium digital experiences that transform ideas, businesses, and brands into memorable worldwide internet presences.',
      primaryCta: 'Start My Project',
      secondaryCta: 'Explore Our Work',
      presenceTag: 'Digital experiences engineered for the world.',
      metrics: {
        satisfaction: '100% Client Satisfaction',
        speed: '< 0.4s Ultra-Fast Load',
        global: '28+ Countries Served',
      },
    },
    whatWeDo: {
      sectionTag: 'HIGH-VALUE CAPABILITIES',
      title: "We don't just build websites. We engineer presence.",
      subtitle: 'Axé IA transforms businesses into sophisticated, blazing-fast digital experiences engineered to captivate clients anywhere across the globe.',
      cards: [
        {
          id: 'websites-premium',
          title: 'Premium Websites',
          tagline: 'Modern, fast, and strategic institutional websites.',
          description: 'Refined architecture, cinematic typography, and high-fidelity engineering for businesses and leaders who demand undeniable prestige.',
          features: ['Bespoke tailor-made design', 'Ultra-fast global edge speed', 'International technical SEO', 'Immersive across every screen size'],
          icon: 'Globe',
          badge: 'Luxury Institutional'
        },
        {
          id: 'landing-pages',
          title: 'Landing Pages',
          tagline: 'Pages engineered to convert traffic into high-value opportunities and sales.',
          description: 'Ultra-high-converting structures marrying persuasive luxury copywriting, impeccable aesthetic balance, and instantaneous user feedback.',
          features: ['Strategic copywriting', 'Conversion micro-interactions', 'Native A/B optimization', 'Direct enterprise CRM sync'],
          icon: 'Sparkles',
          badge: 'High Conversion'
        },
        {
          id: 'ecommerce',
          title: 'E-commerce',
          tagline: 'Virtual boutiques prepared to sell products and services globally.',
          description: 'Digital commerce destinations created for prestigious brands, featuring frictionless navigation, one-click checkout, and multi-currency billing.',
          features: ['1-Click checkout flows', 'Multi-currency (USD, EUR, BRL)', 'Global payment gateways', 'Ultra-optimized performance'],
          icon: 'ShoppingBag',
          badge: 'Digital Commerce'
        },
        {
          id: 'ia-experiences',
          title: 'AI Experiences',
          tagline: 'Artificial intelligence integration to craft smarter, adaptive digital experiences.',
          description: 'Intelligent conversational agents, dynamic real-time personalization, and autonomous workflows that fascinate your clients.',
          features: ['24/7 Qualification agents', 'Predictive personalization', 'Intelligent process automation', 'Frontier LLM integrations'],
          icon: 'Cpu',
          badge: 'Artificial Intelligence'
        },
        {
          id: 'international-presence',
          title: 'International Presence',
          tagline: 'Digital structures engineered for different languages, markets, and audiences.',
          description: 'Global distributed edge infrastructure with ultra-low latency, GDPR/LGPD compliance, and cultural localization across continents.',
          features: ['Native multi-language engine', 'Smart geographical routing', 'Global regulatory compliance', 'Sub-25ms global latency'],
          icon: 'Navigation',
          badge: 'Global Scale'
        },
        {
          id: 'bespoke-solutions',
          title: 'Bespoke Solutions',
          tagline: 'Custom digital projects aligned with each unique business goal.',
          description: 'High-complexity engineering for visionary brands, exclusive digital ecosystems, private portals, and proprietary toolsets.',
          features: ['Scalable cloud architecture', 'Complex API integrations', 'Proprietary Design System', 'Continuous governance & support'],
          icon: 'Layers',
          badge: 'Tailor-Made'
        }
      ]
    },
    difference: {
      sectionTag: 'EXCLUSIVE PHILOSOPHY',
      title: 'Technology. Strategy. Aesthetics.',
      subtitle: 'We unite the discipline of top-tier software engineering with the sophistication of international luxury design to deliver irreplaceable digital assets.',
      pillars: [
        {
          number: '01',
          title: 'DESIGN',
          headline: 'Sophisticated interfaces that elevate your brand.',
          description: 'Digital aesthetics curated to international gallery standards. Every proportion, microinteraction, and contrast ratio is calculated to amplify perceived market value.',
          metric: '100%',
          metricLabel: 'Singular Identity',
          highlight: 'Zero generic templates. Pure distinction.'
        },
        {
          number: '02',
          title: 'PERFORMANCE',
          headline: 'Fast, responsive websites engineered for peak conversion.',
          description: 'Cutting-edge edge infrastructure delivering instant loads worldwide. Clean code guaranteeing top-tier conversion rates and Google Core Web Vitals scores.',
          metric: '99+',
          metricLabel: 'Lighthouse Score',
          highlight: 'Sub-400ms load times on global networks.'
        },
        {
          number: '03',
          title: 'INTELLIGENCE',
          headline: 'Technology and AI applied to build more efficient digital experiences.',
          description: 'We embed frontier AI models and autonomous automations that transform your digital presence into an active 24/7 business generation channel.',
          metric: '24/7',
          metricLabel: 'Active Intelligence',
          highlight: 'Invisible technology maximizing tangible returns.'
        }
      ]
    },
    portfolio: {
      sectionTag: 'CURATED ARCHIVE',
      title: 'Projects that speak before the first word.',
      subtitle: 'A bespoke selection of experiences designed for industry leaders, disruptive innovators, and globally ambitious brands.',
      allCategories: 'All Projects',
      categories: [
        { id: 'all', name: 'All' },
        { id: 'websites', name: 'Websites' },
        { id: 'landing-pages', name: 'Landing Pages' },
        { id: 'ecommerce', name: 'E-commerce' },
        { id: 'ia', name: 'AI' },
        { id: 'internacional', name: 'International' }
      ],
      viewProject: 'View Project Presentation',
      items: portfolioItems
    },
    process: {
      sectionTag: 'PRESTIGE METHODOLOGY',
      title: 'From concept to experience.',
      subtitle: 'A surgical, transparent, and punctual execution workflow that turns your vision into technical perfection.',
      steps: [
        {
          step: '01',
          title: 'Discovery',
          description: 'We decipher your business, audience, and commercial goals.',
          details: 'In-depth brand positioning immersion, international competitor benchmark, and clear mathematical success definitions.',
          duration: 'Week 1'
        },
        {
          step: '02',
          title: 'Strategy',
          description: 'We define structure, positioning, and end-to-end experience.',
          details: 'Information architecture, high-net-worth customer journey mapping, and conversion narrative for every viewport.',
          duration: 'Week 1–2'
        },
        {
          step: '03',
          title: 'Design',
          description: 'We architect an exclusive digital visual identity.',
          details: 'Prestige art direction, cinematic typography, haptic microinteractions, and high-fidelity clickable prototypes.',
          duration: 'Week 2–3'
        },
        {
          step: '04',
          title: 'Development',
          description: 'We translate the concept into a functional, responsive reality.',
          details: 'Clean, type-safe React/Next.js and Tailwind code, extreme edge optimization, and native AI/API integrations.',
          duration: 'Week 3–4'
        },
        {
          step: '05',
          title: 'Launch',
          description: 'We test, deploy, and release your project to the world.',
          details: 'Global CDN distribution, rigorous security and latency testing, enterprise technical SEO, and flawless handover.',
          duration: 'Week 5'
        }
      ]
    },
    international: {
      sectionTag: 'WORLDWIDE REACH',
      title: 'One brand. An entire world.',
      description: 'Axé IA engineers digital experiences prepared for companies ready to operate far beyond borders.',
      quote: 'Designed locally. Built globally.',
      badge: 'Active Global Hubs',
      activeNodesLabel: 'Active Edge Nodes',
      latencyLabel: 'Global Average Latency',
      complianceLabel: 'Regulatory Compliance',
      complianceDesc: 'GDPR (Europe) • LGPD (Brazil) • CCPA (US)'
    },
    audience: {
      sectionTag: 'DISTINGUISHED CLIENTELE',
      title: 'Built for those who think big.',
      subtitle: 'We partner with visionary founders and leaders who recognize that high design and engineering are the ultimate value multipliers.',
      cards: [
        {
          id: 'empresas',
          title: 'Enterprises',
          tag: 'Corporate & B2B',
          description: 'Established organizations modernizing their market stance to project unshakeable authority and global prestige.',
          benefit: 'Instant institutional authority and stakeholder trust.',
          icon: 'Building2'
        },
        {
          id: 'startups',
          title: 'Startups',
          tag: 'Scale-ups & Tech',
          description: 'High-growth ventures requiring world-class digital interfaces to attract tier-1 venture capital, clients, and talent.',
          benefit: 'Speed to market with undeniable international appeal.',
          icon: 'Rocket'
        },
        {
          id: 'profissionais',
          title: 'Professionals',
          tag: 'Leaders & Advisors',
          description: 'Private doctors, elite attorneys, board advisors, and executives whose digital presence must match their reputation.',
          benefit: 'Fee elevation and definitive market differentiation.',
          icon: 'UserCheck'
        },
        {
          id: 'infoprodutores',
          title: 'High-Ticket Mentors',
          tag: 'Premium Knowledge',
          description: 'Educators and mentors who demand cinematic launch funnels with extraordinary conversion ratios.',
          benefit: 'Dramatic sales conversion increases on high-ticket offers.',
          icon: 'TrendingUp'
        },
        {
          id: 'criadores',
          title: 'Creators',
          tag: 'Media & Influence',
          description: 'Influential cultural figures seeking a sovereign digital home independent of third-party social algorithms.',
          benefit: 'Complete ownership of your audience and revenue.',
          icon: 'Camera'
        },
        {
          id: 'marcas',
          title: 'Brands',
          tag: 'Luxury & Lifestyle',
          description: 'Fashion, hospitality, architectural, and design houses requiring hypnotic storytelling and visual majesty.',
          benefit: 'Sensory loyalty and elevated premium brand equity.',
          icon: 'Crown'
        },
        {
          id: 'e-commerces',
          title: 'E-commerces',
          tag: 'Prestige Retail',
          description: 'Commerce operations breaking free from standard templates to deliver a truly luxurious shopping atmosphere.',
          benefit: 'Higher average order value and repeat customer retention.',
          icon: 'ShoppingBag'
        },
        {
          id: 'empresas-internacionais',
          title: 'Global Companies',
          tag: 'Cross-Border',
          description: 'Multinational organizations demanding flawless multi-language architecture, multi-currency routing, and zero friction.',
          benefit: 'Worldwide consistency across all regional markets.',
          icon: 'Globe2'
        }
      ]
    },
    technology: {
      sectionTag: 'FRONTIER ENGINEERING',
      title: 'Invisible technology. Unforgettable experience.',
      subtitle: 'We abstract technical friction to deliver websites that respond at the speed of thought with bank-grade security.',
      modules: [
        {
          id: 'ia',
          title: 'AI & Autonomous Agents',
          benefit: '24/7 Intelligence & Service',
          description: 'Generative AI integration for automated high-value lead qualification and dynamic personalization.',
          badge: 'Next-Gen',
          icon: 'Cpu'
        },
        {
          id: 'automacao',
          title: 'Automation',
          benefit: 'Frictionless Sales Funnels',
          description: 'Native connections with CRM workflows, instant notification triggers, and executive calendar scheduling.',
          badge: 'Smart Flows',
          icon: 'Zap'
        },
        {
          id: 'integracoes',
          title: 'Enterprise Integrations',
          benefit: 'Unified Architecture',
          description: 'Seamless data exchanges with ERPs, payment gateways, and proprietary legacy databases.',
          badge: 'Zero Friction',
          icon: 'Workflow'
        },
        {
          id: 'apis',
          title: 'Modern APIs',
          benefit: 'Real-time Synchronization',
          description: 'Modern decoupled headless architectures consuming and streaming data at lightning speeds.',
          badge: 'Headless',
          icon: 'Code2'
        },
        {
          id: 'analytics',
          title: 'Advanced Analytics',
          benefit: 'Data-Backed Strategy',
          description: 'Privacy-first user telemetry and heatmaps without degrading page speed or violating GDPR.',
          badge: 'Actionable',
          icon: 'BarChart3'
        },
        {
          id: 'seo',
          title: 'Technical SEO',
          benefit: 'Top Tier Organic Ranking',
          description: 'Schema.org JSON-LD microdata, dynamic OpenGraph cards, and flawless Google Core Web Vitals.',
          badge: 'Top Ranks',
          icon: 'Search'
        },
        {
          id: 'performance',
          title: 'Extreme Performance',
          benefit: 'Instantaneous Page Loads',
          description: 'Micro-bundle chunking, modern AVIF/WebP assets, and non-blocking asynchronous JavaScript execution.',
          badge: '< 0.4s',
          icon: 'Gauge'
        },
        {
          id: 'responsividade',
          title: 'Total Responsiveness',
          benefit: 'Flawless on Every Canvas',
          description: 'Fluid optical scaling from modern compact smartphones up to 8K ultrawide monitors.',
          badge: 'Mobile-First',
          icon: 'Smartphone'
        },
        {
          id: 'seguranca',
          title: 'Security & Encryption',
          benefit: 'Bank-Grade Armor',
          description: 'Enterprise TLS/SSL, automated DDoS mitigation, strict CSP security headers, and compliance.',
          badge: 'Hardened',
          icon: 'ShieldCheck'
        },
        {
          id: 'cloud',
          title: 'Cloud & Edge CDN',
          benefit: '99.99% Global Uptime',
          description: 'Distribution across hundreds of worldwide edge nodes for lightning-fast delivery on any continent.',
          badge: 'Global Edge',
          icon: 'Cloud'
        }
      ]
    },
    finalCta: {
      headline: 'Shall we build something extraordinary?',
      subheadline: 'Your next great digital presence begins with an idea. We engineer that idea into an unforgettable experience.',
      primaryButton: 'Start a Project',
      secondaryButton: 'Talk with Axé IA',
      regionBadge: 'Brazil · Portugal · Europe · Latin America · Worldwide'
    },
    footer: {
      tagline: 'Digital experiences engineered for the world.',
      companyLinks: 'Company',
      servicesLinks: 'Services',
      legalLinks: 'Legal',
      languagesTitle: 'Languages',
      rights: 'All rights reserved. Axé IA Digital Studio.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    },
    modal: {
      title: 'Start Your Project with Axé IA',
      subtitle: 'Share your vision with us and receive a tailored technical and strategic proposal within 24 business hours.',
      step1Title: 'Project Scope',
      step2Title: 'Scale & Timeline',
      step3Title: 'Contact & Vision',
      projectTypeLabel: 'Which digital capability aligns with your goals?',
      types: [
        { id: 'website', label: 'Premium Website', desc: 'Modern, fast, and strategic institutional presence' },
        { id: 'landing', label: 'Landing Page', desc: 'High-conversion page engineered for sales & leads' },
        { id: 'ecommerce', label: 'Luxury E-commerce', desc: 'Prestige digital boutique with frictionless checkout' },
        { id: 'ia', label: 'AI Experience', desc: 'Autonomous intelligence, agents & adaptive flows' },
        { id: 'global', label: 'International Presence', desc: 'Multi-lingual architecture and cross-border scale' },
        { id: 'custom', label: 'Bespoke Engineering', desc: 'Tailor-made complex portal or digital platform' }
      ],
      budgetLabel: 'Estimated project investment tier',
      budgets: ['Under Consultation', '$2,500 — $5,000 USD', '$5,000 — $15,000 USD', '$15,000+ USD / Global Scale'],
      timelineLabel: 'Expected delivery window',
      timelines: ['Immediate (within 3 weeks)', '1 to 2 months', 'Strategic development (3+ months)'],
      nameLabel: 'Full Name',
      emailLabel: 'Corporate Email',
      phoneLabel: 'WhatsApp / Phone (with country code)',
      messageLabel: 'Briefly describe your vision and primary goal',
      messagePlaceholder: 'Tell us about your organization, core objectives, and what you envision...',
      submitButton: 'Submit Project Brief',
      whatsappButton: 'Chat Directly via WhatsApp',
      submitting: 'Transmitting details...',
      successTitle: 'Briefing Received Successfully',
      successMessage: 'We have received your project parameters. Our executive team will reach out shortly.',
      closeButton: 'Close'
    }
  },

  'es': {
    nav: {
      services: 'Qué Hacemos',
      difference: 'Diferencial',
      portfolio: 'Portafolio',
      process: 'Proceso',
      international: 'Internacional',
      technology: 'Tecnología',
      ctaButton: 'Crear mi proyecto',
      availableBadge: 'Disponible para proyectos seleccionados',
    },
    hero: {
      badge: 'Brasil • Europa • América Latina • Worldwide',
      headline: 'SU NEGOCIO MERECE UNA PRESENCIA DIGITAL A LA ALTURA.',
      subheadline: 'Creamos experiencias digitales premium que transforman ideas, empresas y marcas en presencias memorables en internet.',
      primaryCta: 'Crear mi proyecto',
      secondaryCta: 'Explorar nuestros proyectos',
      presenceTag: 'Digital experiences engineered for the world.',
      metrics: {
        satisfaction: '100% Satisfacción de Clientes',
        speed: '< 0.4s Carga Ultrarrápida',
        global: '28+ Países Atendidos',
      },
    },
    whatWeDo: {
      sectionTag: 'SERVICIOS DE ALTO VALOR',
      title: 'No creamos solo sitios web. Creamos presencia.',
      subtitle: 'Axé IA transforma negocios en experiencias digitales sofisticadas, veloces y preparadas para conquistar clientes en cualquier parte del mundo.',
      cards: [
        {
          id: 'websites-premium',
          title: 'Sitios Web Premium',
          tagline: 'Sitios institucionales modernos, rápidos y estratégicos.',
          description: 'Arquitectura refinada, tipografía cinematográfica e ingeniería de alta fidelidad para líderes que exigen distinción absoluta.',
          features: ['Diseño exclusivo a medida', 'Velocidad ultrarrápida (Edge)', 'SEO técnico internacional', 'Experiencia inmersiva en cada pantalla'],
          icon: 'Globe',
          badge: 'Institucional de Lujo'
        },
        {
          id: 'landing-pages',
          title: 'Landing Pages',
          tagline: 'Páginas desarrolladas para transformar tráfico en oportunidades y ventas.',
          description: 'Estructuras de altísima conversión que unen copywriting persuasivo de lujo, estética impecable y respuesta inmediata.',
          features: ['Copywriting estratégico', 'Microinteracciones que guían la decisión', 'Pruebas A/B nativas', 'Integración directa con CRMs'],
          icon: 'Sparkles',
          badge: 'Alta Conversión'
        },
        {
          id: 'ecommerce',
          title: 'E-commerce',
          tagline: 'Tiendas virtuales preparadas para vender productos y servicios.',
          description: 'Plataformas de comercio digital para marcas de prestigio, con navegación fluida, checkout instantáneo y soporte multidivisa.',
          features: ['Checkout en 1 clic', 'Multidivisa (USD, EUR, BRL)', 'Pasarelas de pago globales', 'Rendimiento ultraoptimizado'],
          icon: 'ShoppingBag',
          badge: 'Digital Commerce'
        },
        {
          id: 'ia-experiences',
          title: 'Experiencias con IA',
          tagline: 'Integración de inteligencia artificial para experiencias digitales más inteligentes.',
          description: 'Agentes conversacionales inteligentes, personalización dinámica de contenidos y automatizaciones en tiempo real.',
          features: ['Agentes de cualificación 24/7', 'Personalización predictiva', 'Automatización inteligente de procesos', 'Modelos avanzados de lenguaje'],
          icon: 'Cpu',
          badge: 'Inteligencia Artificial'
        },
        {
          id: 'international-presence',
          title: 'Presencia Internacional',
          tagline: 'Estructuras digitales preparadas para diferentes idiomas, mercados y audiencias.',
          description: 'Infraestructura global distribuida en CDN de baja latencia, cumplimiento con GDPR/LGPD y adaptación cultural para múltiples mercados.',
          features: ['Sistemas multiidioma nativos', 'Enrutamiento geográfico inteligente', 'Cumplimiento normativo global', 'Latencia inferior a 25ms'],
          icon: 'Navigation',
          badge: 'Escala Global'
        },
        {
          id: 'bespoke-solutions',
          title: 'Soluciones a Medida',
          tagline: 'Proyectos personalizados de acuerdo con el objetivo de cada negocio.',
          description: 'Desarrollo técnico de alta complejidad para marcas, ecosistemas digitales, portales exclusivos y herramientas propietarias.',
          features: ['Arquitectura escalable', 'APIs e integraciones complejas', 'Design System propietario', 'Soporte y gobernanza continua'],
          icon: 'Layers',
          badge: 'Tailor-Made'
        }
      ]
    },
    difference: {
      sectionTag: 'FILOSOFÍA EXCLUSIVA',
      title: 'Tecnología. Estrategia. Estética.',
      subtitle: 'Combinamos el rigor de la ingeniería de software de punta con la sofisticación del diseño internacional para entregar activos digitales invaluables.',
      pillars: [
        {
          number: '01',
          title: 'DISEÑO',
          headline: 'Interfaces sofisticadas que valorizan su marca.',
          description: 'Diseño digital con estándar de galería internacional. Cada proporción y contraste visual se calcula para elevar el valor percibido.',
          metric: '100%',
          metricLabel: 'Identidad Única',
          highlight: 'Cero plantillas genéricas. Solo distinción.'
        },
        {
          number: '02',
          title: 'RENDIMIENTO',
          headline: 'Sitios veloces, adaptativos y preparados para la conversión.',
          description: 'Arquitectura de vanguardia con carga instantánea en cualquier lugar del mundo. Código limpio que garantiza máximas conversiones.',
          metric: '99+',
          metricLabel: 'Puntuación Lighthouse',
          highlight: 'Carga inferior a 400ms en redes mundiales.'
        },
        {
          number: '03',
          title: 'INTELIGENCIA',
          headline: 'Tecnología e IA aplicadas para crear experiencias digitales más eficientes.',
          description: 'Integramos modelos de IA y automatizaciones inteligentes que transforman su sitio en un canal activo de negocios 24/7.',
          metric: '24/7',
          metricLabel: 'Automatización Activa',
          highlight: 'Inteligencia invisible que maximiza resultados.'
        }
      ]
    },
    portfolio: {
      sectionTag: 'TRABAJOS SELECCIONADOS',
      title: 'Proyectos que hablan antes de la primera palabra.',
      subtitle: 'Una selección de experiencias creadas para líderes, marcas innovadoras y empresas con ambición internacional.',
      allCategories: 'Todos los Proyectos',
      categories: [
        { id: 'all', name: 'Todos' },
        { id: 'websites', name: 'Websites' },
        { id: 'landing-pages', name: 'Landing Pages' },
        { id: 'ecommerce', name: 'E-commerce' },
        { id: 'ia', name: 'IA' },
        { id: 'internacional', name: 'Internacional' }
      ],
      viewProject: 'Ver Presentación del Proyecto',
      items: portfolioItems
    },
    process: {
      sectionTag: 'METODOLOGÍA DE ALTO NIVEL',
      title: 'Del concepto a la experiencia.',
      subtitle: 'Un flujo de trabajo transparente, quirúrgico y puntual para materializar su visión con perfección técnica.',
      steps: [
        {
          step: '01',
          title: 'Discovery',
          description: 'Entendemos su negocio, público y objetivos comerciales.',
          details: 'Inmersión en el posicionamiento de marca, análisis de competidores internacionales y métricas de éxito claras.',
          duration: 'Semana 1'
        },
        {
          step: '02',
          title: 'Estrategia',
          description: 'Definimos estructura, posicionamiento y experiencia.',
          details: 'Arquitectura de la información, mapeo del viaje del cliente de alto valor y guión de conversión para cada sección.',
          duration: 'Semana 1–2'
        },
        {
          step: '03',
          title: 'Diseño',
          description: 'Creamos una identidad visual digital exclusiva.',
          details: 'Dirección de arte de prestigio, tipografía cinematográfica, microinteracciones y prototipos interactivos de alta fidelidad.',
          duration: 'Semana 2–3'
        },
        {
          step: '04',
          title: 'Development',
          description: 'Transformamos el concepto en una experiencia funcional y veloz.',
          details: 'Codificación limpia en React/Next.js y Tailwind, optimización de rendimiento y conexión con IA y APIs.',
          duration: 'Semana 3–4'
        },
        {
          step: '05',
          title: 'Launch',
          description: 'Publicamos, probamos y entregamos su proyecto listo para el mundo.',
          details: 'Despliegue en red CDN global, pruebas de seguridad, configuración de SEO técnico y entrega final impecable.',
          duration: 'Semana 5'
        }
      ]
    },
    international: {
      sectionTag: 'ALCANCE GLOBAL',
      title: 'Una marca. Un mundo entero.',
      description: 'Axé IA desarrolla experiencias digitales preparadas para empresas que desean actuar más allá de las fronteras.',
      quote: 'Designed locally. Built globally.',
      badge: 'Nodos Globales Activos',
      activeNodesLabel: 'Nodos de Infraestructura Edge',
      latencyLabel: 'Latencia promedio mundial',
      complianceLabel: 'Cumplimiento Regulatorio',
      complianceDesc: 'GDPR (Europa) • LGPD (Brasil) • CCPA (EE. UU.)'
    },
    audience: {
      sectionTag: 'SEGMENTOS DE EXCELENCIA',
      title: 'Construido para quienes piensan en grande.',
      subtitle: 'Trabajamos con líderes y empresas que entienden que el diseño y la tecnología son los mayores multiplicadores de valor.',
      cards: [
        {
          id: 'empresas',
          title: 'Empresas',
          tag: 'Corporativo & B2B',
          description: 'Compañías consolidadas que buscan modernizar su posicionamiento y proyectar solidez y liderazgo indiscutibles.',
          benefit: 'Autoridad institucional inmediata y confianza.',
          icon: 'Building2'
        },
        {
          id: 'startups',
          title: 'Startups',
          tag: 'Scale-ups & Tech',
          description: 'Empresas de rápido crecimiento que requieren interfaces de nivel mundial para atraer inversores y talento.',
          benefit: 'Velocidad de salida al mercado con atractivo global.',
          icon: 'Rocket'
        },
        {
          id: 'profissionais',
          title: 'Profesionales',
          tag: 'Líderes & Consultores',
          description: 'Médicos, abogados, consultores y ejecutivos que exigen una presencia digital tan distinguida como su reputación.',
          benefit: 'Valorización de honorarios y diferenciación de élite.',
          icon: 'UserCheck'
        },
        {
          id: 'infoprodutores',
          title: 'Infoproductores',
          tag: 'High-Ticket & Mentores',
          description: 'Creadores de formación de alto valor que requieren páginas de lanzamiento con altísima tasa de conversión.',
          benefit: 'Incremento sensible en las ventas de programas premium.',
          icon: 'TrendingUp'
        },
        {
          id: 'criadores',
          title: 'Creadores',
          tag: 'Medios & Audiencia',
          description: 'Figuras públicas que buscan un ecosistema digital soberano e independiente de algoritmos de redes sociales.',
          benefit: 'Control total de la audiencia y monetización.',
          icon: 'Camera'
        },
        {
          id: 'marcas',
          title: 'Marcas',
          tag: 'Lujo & Lifestyle',
          description: 'Marcas de moda, diseño, hotelería y estética que demandan una narrativa visual cautivadora y memorable.',
          benefit: 'Fidelización sensorial y valor de marca elevado.',
          icon: 'Crown'
        },
        {
          id: 'e-commerces',
          title: 'E-commerces',
          tag: 'Comercio Selecto',
          description: 'Comercios electrónicos que se alejan de los formatos estándar para brindar una experiencia de compra lujosa.',
          benefit: 'Ticket medio superior y retención recurrente.',
          icon: 'ShoppingBag'
        },
        {
          id: 'empresas-internacionais',
          title: 'Empresas Globales',
          tag: 'Cross-Border',
          description: 'Organizaciones con operaciones multinacionales que requieren plataformas multiidioma perfectamente arquitectadas.',
          benefit: 'Consistencia global y presencia sin barreras locales.',
          icon: 'Globe2'
        }
      ]
    },
    technology: {
      sectionTag: 'INGENIERÍA AVANZADA',
      title: 'Tecnología invisible. Experiencia inolvidable.',
      subtitle: 'Eliminamos la complejidad técnica para entregar sitios web que operan a la velocidad del pensamiento.',
      modules: [
        {
          id: 'ia',
          title: 'IA & Agentes',
          benefit: 'Atención e inteligencia 24/7',
          description: 'Integración de IA generativa para cualificación automática y personalización dinámica.',
          badge: 'Next-Gen',
          icon: 'Cpu'
        },
        {
          id: 'automacao',
          title: 'Automatización',
          benefit: 'Flujos comerciales fluidos',
          description: 'Conexión nativa con CRMs, notificaciones automáticas y agenda ejecutiva.',
          badge: 'Flujos Inteligentes',
          icon: 'Zap'
        },
        {
          id: 'integracoes',
          title: 'Integraciones',
          benefit: 'Ecosistema unificado',
          description: 'Conexión sin fricciones con pasarelas de pago y sistemas empresariales.',
          badge: 'Sin Fricción',
          icon: 'Workflow'
        },
        {
          id: 'apis',
          title: 'APIs Modernas',
          benefit: 'Datos en tiempo real',
          description: 'Arquitecturas headless que consumen y distribuyen datos con latencia mínima.',
          badge: 'Headless',
          icon: 'Code2'
        },
        {
          id: 'analytics',
          title: 'Analytics Avanzado',
          benefit: 'Decisiones basadas en datos',
          description: 'Telemetría de usuarios con máxima privacidad sin ralentizar la carga.',
          badge: 'Insights',
          icon: 'BarChart3'
        },
        {
          id: 'seo',
          title: 'SEO Técnico',
          benefit: 'Primeras posiciones en Google',
          description: 'Marcado JSON-LD, tarjetas OpenGraph y máxima puntuación en Core Web Vitals.',
          badge: 'Visibilidad',
          icon: 'Search'
        },
        {
          id: 'performance',
          title: 'Rendimiento Extremo',
          benefit: 'Carga en milisegundos',
          description: 'Optimización de paquetes, compresión moderna de imágenes y ejecución asíncrona.',
          badge: '< 0.4s',
          icon: 'Gauge'
        },
        {
          id: 'responsividade',
          title: 'Responsividad Total',
          benefit: 'Impecable en cualquier pantalla',
          description: 'Adaptación geométrica fluida desde smartphones hasta pantallas ultrawide 8K.',
          badge: 'Mobile-First',
          icon: 'Smartphone'
        },
        {
          id: 'seguranca',
          title: 'Seguridad & Cifrado',
          benefit: 'Protección institucional',
          description: 'Certificados SSL enterprise, mitigación de DDoS y cumplimiento legal.',
          badge: 'Blindado',
          icon: 'ShieldCheck'
        },
        {
          id: 'cloud',
          title: 'Cloud & Edge CDN',
          benefit: '99.99% Uptime global',
          description: 'Distribución en nodos de borde globales para entrega instantánea en todo el mundo.',
          badge: 'Global Edge',
          icon: 'Cloud'
        }
      ]
    },
    finalCta: {
      headline: '¿Vamos a construir algo extraordinario?',
      subheadline: 'Su próxima gran presencia digital comienza con una idea. Nosotros transformamos esa idea en experiencia.',
      primaryButton: 'Comenzar un proyecto',
      secondaryButton: 'Hablar con Axé IA',
      regionBadge: 'Brasil · Portugal · Europa · América Latina · Worldwide'
    },
    footer: {
      tagline: 'Digital experiences engineered for the world.',
      companyLinks: 'Empresa',
      servicesLinks: 'Servicios',
      legalLinks: 'Legal',
      languagesTitle: 'Idiomas',
      rights: 'Todos los derechos reservados. Axé IA Studio.',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio'
    },
    modal: {
      title: 'Iniciar Proyecto con Axé IA',
      subtitle: 'Cuéntenos su visión y reciba una propuesta técnica y estratégica a medida en menos de 24 horas hábiles.',
      step1Title: 'Tipo de Proyecto',
      step2Title: 'Escala & Plazos',
      step3Title: 'Contacto & Detalles',
      projectTypeLabel: '¿Qué solución se adapta mejor a su objetivo?',
      types: [
        { id: 'website', label: 'Sitio Web Premium', desc: 'Sitio institucional moderno, rápido y estratégico' },
        { id: 'landing', label: 'Landing Page', desc: 'Página de alta conversión para ventas y prospectos' },
        { id: 'ecommerce', label: 'E-commerce de Lujo', desc: 'Boutique digital con proceso de compra refinado' },
        { id: 'ia', label: 'Experiencia con IA', desc: 'Automatización inteligente y agentes a medida' },
        { id: 'global', label: 'Presencia Internacional', desc: 'Arquitectura multiidioma y escala global' },
        { id: 'custom', label: 'Solución a Medida', desc: 'Proyecto complejo o ecosistema exclusivo' }
      ],
      budgetLabel: 'Rango de inversión previsto',
      budgets: ['Bajo Consulta', '$2.000 — $5.000 USD', '$5.000 — $12.000 USD', '$12.000+ USD / Global'],
      timelineLabel: 'Expectativa de lanzamiento',
      timelines: ['Inmediato (hasta 3 semanas)', '1 a 2 meses', 'Planificación estratégica (3+ meses)'],
      nameLabel: 'Nombre Completo',
      emailLabel: 'Correo Corporativo',
      phoneLabel: 'WhatsApp / Teléfono con código de país',
      messageLabel: 'Describa brevemente su visión u objetivo',
      messagePlaceholder: 'Comparta información sobre su empresa y lo que espera de su presencia digital...',
      submitButton: 'Enviar Briefing del Proyecto',
      whatsappButton: 'Conversar Directamente en WhatsApp',
      submitting: 'Transmitiendo datos...',
      successTitle: 'Briefing Enviado con Éxito',
      successMessage: 'Hemos recibido los datos de su proyecto. Nos comunicaremos con usted en breve.',
      closeButton: 'Cerrar'
    }
  },

  'fr': {
    nav: {
      services: 'Ce Que Nous Faisons',
      difference: 'Différence',
      portfolio: 'Portfolio',
      process: 'Processus',
      international: 'International',
      technology: 'Technologie',
      ctaButton: 'Créer mon projet',
      availableBadge: 'Disponible pour des projets sélectionnés',
    },
    hero: {
      badge: 'Brésil • Europe • Amérique Latine • Worldwide',
      headline: 'VOTRE ENTREPRISE MÉRITE UNE PRÉSENCE DIGITALE À LA HAUTEUR.',
      subheadline: 'Nous concevons des expériences digitales premium qui métamorphosent idées, entreprises et marques en présences mémorables à l’échelle mondiale.',
      primaryCta: 'Créer mon projet',
      secondaryCta: 'Découvrir nos créations',
      presenceTag: 'Digital experiences engineered for the world.',
      metrics: {
        satisfaction: '100% Satisfaction Client',
        speed: '< 0.4s Chargement Éclair',
        global: '28+ Pays Couverts',
      },
    },
    whatWeDo: {
      sectionTag: 'SAVOIR-FAIRE D’EXCEPTION',
      title: 'Nous ne créons pas de simples sites. Nous façonnons une présence.',
      subtitle: 'Axé IA transforme vos ambitions en expériences numériques sophistiquées, ultra-rapides et prêtes à séduire des clients aux quatre coins du globe.',
      cards: [
        {
          id: 'websites-premium',
          title: 'Sites Web Premium',
          tagline: 'Sites institutionnels modernes, véloces et stratégiques.',
          description: 'Architecture ciselée, typographie cinématique et ingénierie de haute fidélité pour les entreprises qui exigent une distinction absolue.',
          features: ['Design exclusif sur-mesure', 'Vitesse ultra-rapide (Edge)', 'SEO technique international', 'Expérience immersive sur tout écran'],
          icon: 'Globe',
          badge: 'Institutionnel de Luxe'
        },
        {
          id: 'landing-pages',
          title: 'Landing Pages',
          tagline: 'Pages conçues pour convertir le trafic en opportunités de haute valeur.',
          description: 'Structures à conversion maximale alliant copywriting persuasif haut de gamme, élégance visuelle et réactivité immédiate.',
          features: ['Copywriting stratégique', 'Micro-interactions de décision', 'Tests A/B natifs', 'Synchronisation directe CRM'],
          icon: 'Sparkles',
          badge: 'Haute Conversion'
        },
        {
          id: 'ecommerce',
          title: 'E-commerce',
          tagline: 'Boutiques en ligne prêtes à commercialiser produits et services.',
          description: 'Plateformes de commerce numérique conçues pour des maisons de prestige, avec navigation sans friction et paiement multi-devises.',
          features: ['Tunnel d’achat en 1 clic', 'Multi-devises (EUR, USD, BRL)', 'Paiements mondiaux sécurisés', 'Performance optimisée'],
          icon: 'ShoppingBag',
          badge: 'Digital Commerce'
        },
        {
          id: 'ia-experiences',
          title: 'Expériences avec IA',
          tagline: 'Intégration d’intelligence artificielle pour des expériences plus intelligentes.',
          description: 'Agents conversationnels d’élite, personnalisation dynamique en temps réel et automatisations autonomes qui émerveillent vos clients.',
          features: ['Agents de qualification 24/7', 'Personnalisation prédictive', 'Automatisation intelligente des processus', 'Modèles de langage de pointe'],
          icon: 'Cpu',
          badge: 'Intelligence Artificielle'
        },
        {
          id: 'international-presence',
          title: 'Présence Internationale',
          tagline: 'Structures numériques taillées pour différentes langues, marchés et cultures.',
          description: 'Infrastructure mondiale distribuée sur CDN à très faible latence, stricte conformité RGPD/LGPD et localisation culturelle.',
          features: ['Moteur multilingue natif', 'Routage géographique intelligent', 'Conformité légale mondiale', 'Latence inférieure à 25ms'],
          icon: 'Navigation',
          badge: 'Échelle Globale'
        },
        {
          id: 'bespoke-solutions',
          title: 'Solutions Sur-Mesure',
          tagline: 'Projets sur-mesure répondant aux ambitions de chaque marque.',
          description: 'Développement technologique de haute complexité pour marques de renom, écosystèmes exclusifs et outils propriétaires.',
          features: ['Architecture évolutive', 'APIs et intégrations complexes', 'Design System propriétaire', 'Gouvernance et support continu'],
          icon: 'Layers',
          badge: 'Tailor-Made'
        }
      ]
    },
    difference: {
      sectionTag: 'PHILOSOPHIE EXCLUSIVE',
      title: 'Technologie. Stratégie. Esthétique.',
      subtitle: 'Nous unissons la rigueur de l’ingénierie de pointe au raffinement du design international pour concevoir des actifs digitaux inestimables.',
      pillars: [
        {
          number: '01',
          title: 'DESIGN',
          headline: 'Des interfaces sophistiquées qui subliment votre marque.',
          description: 'Esthétique numérique calibrée sur les standards des galeries internationales. Chaque proportion rehausse la valeur perçue de votre entreprise.',
          metric: '100%',
          metricLabel: 'Identité Singulière',
          highlight: 'Zéro modèle générique. Rien que la distinction.'
        },
        {
          number: '02',
          title: 'PERFORMANCE',
          headline: 'Des sites rapides, réactifs et taillés pour la conversion.',
          description: 'Infrastructure de pointe assurant un affichage instantané mondial. Un code épuré garantissant des taux de conversion maximaux.',
          metric: '99+',
          metricLabel: 'Score Lighthouse',
          highlight: 'Chargement en moins de 400ms sur les réseaux mondiaux.'
        },
        {
          number: '03',
          title: 'INTELLIGENCE',
          headline: 'Technologie et IA au service d’expériences digitales plus efficientes.',
          description: 'Nous intégrons des modèles d’IA et des automatisations intelligentes qui transforment votre site en un canal d’affaires actif 24h/24.',
          metric: '24/7',
          metricLabel: 'Automatisation Active',
          highlight: 'Une intelligence invisible pour des résultats tangibles.'
        }
      ]
    },
    portfolio: {
      sectionTag: 'SÉLECTION EXCLUSIVE',
      title: 'Des projets qui s’expriment avant même le premier mot.',
      subtitle: 'Une sélection d’expériences façonnées pour des leaders visionnaires et des marques à vocation internationale.',
      allCategories: 'Tous les Projets',
      categories: [
        { id: 'all', name: 'Tous' },
        { id: 'websites', name: 'Websites' },
        { id: 'landing-pages', name: 'Landing Pages' },
        { id: 'ecommerce', name: 'E-commerce' },
        { id: 'ia', name: 'IA' },
        { id: 'internacional', name: 'International' }
      ],
      viewProject: 'Voir la Présentation du Projet',
      items: portfolioItems
    },
    process: {
      sectionTag: 'MÉTHODOLOGIE D’ÉLITE',
      title: 'Du concept à l’expérience.',
      subtitle: 'Un processus chirurgical, transparent et ponctuel pour matérialiser votre vision avec une parfaite maîtrise technique.',
      steps: [
        {
          step: '01',
          title: 'Discovery',
          description: 'Nous cernons votre modèle, vos cibles et vos ambitions.',
          details: 'Immersion dans le positionnement de la marque, benchmark international et définition claire des indicateurs clés.',
          duration: 'Semaine 1'
        },
        {
          step: '02',
          title: 'Stratégie',
          description: 'Nous définissons l’architecture, le positionnement et le parcours.',
          details: 'Architecture de l’information, parcours utilisateur à haute valeur et trame narrative de conversion pour chaque écran.',
          duration: 'Semaine 1–2'
        },
        {
          step: '03',
          title: 'Design',
          description: 'Nous créons une identité visuelle digitale exclusive.',
          details: 'Direction artistique de prestige, typographie cinématographique, micro-interactions et prototypes interactifs.',
          duration: 'Semaine 2–3'
        },
        {
          step: '04',
          title: 'Development',
          description: 'Nous transformons le concept en une expérience réactive et vivante.',
          details: 'Code propre en React/Next.js et Tailwind, optimisation extrême de la vitesse et intégrations IA/APIs.',
          duration: 'Semaine 3–4'
        },
        {
          step: '05',
          title: 'Launch',
          description: 'Nous déployons, testons et livrons votre projet au monde.',
          details: 'Distribution sur CDN mondial, tests de sécurité rigoureux, configuration SEO technique et transmission sereine.',
          duration: 'Semaine 5'
        }
      ]
    },
    international: {
      sectionTag: 'PORTÉE INTERNATIONALE',
      title: 'Une marque. Un monde entier.',
      description: 'Axé IA conçoit des expériences digitales armées pour les entreprises prêtes à conquérir les marchés transfrontaliers.',
      quote: 'Designed locally. Built globally.',
      badge: 'Hubs Mondiaux Actifs',
      activeNodesLabel: 'Nœuds d’infrastructure Edge',
      latencyLabel: 'Latence moyenne globale',
      complianceLabel: 'Conformité Réglementaire',
      complianceDesc: 'RGPD (Europe) • LGPD (Brésil) • CCPA (USA)'
    },
    audience: {
      sectionTag: 'CLIENTÈLE D’EXCEPTION',
      title: 'Conçu pour ceux qui voient grand.',
      subtitle: 'Nous accompagnons des bâtisseurs et des dirigeants qui savent que le design et la haute technologie sont les plus puissants leviers de valeur.',
      cards: [
        {
          id: 'empresas',
          title: 'Entreprises',
          tag: 'Corporate & B2B',
          description: 'Sociétés établies souhaitant moderniser leur image et affirmer un leadership et une solidité incontestables.',
          benefit: 'Autorité institutionnelle immédiate et crédibilité.',
          icon: 'Building2'
        },
        {
          id: 'startups',
          title: 'Startups',
          tag: 'Scale-ups & Tech',
          description: 'Startups à forte croissance ayant besoin d’interfaces de classe mondiale pour séduire investisseurs et talents.',
          benefit: 'Rapidité de déploiement et attractivité globale.',
          icon: 'Rocket'
        },
        {
          id: 'profissionais',
          title: 'Professionnels',
          tag: 'Élite & Conseillers',
          description: 'Médecins, avocats, consultants et dirigeants exigeant une présence numérique digne de leur réputation.',
          benefit: 'Valorisation des honoraires et nette distinction.',
          icon: 'UserCheck'
        },
        {
          id: 'infoprodutores',
          title: 'Infopreneurs',
          tag: 'High-Ticket & Mentors',
          description: 'Créateurs d’enseignements exclusifs cherchant des tunnels cinématiques aux taux de conversion records.',
          benefit: 'Hausse marquée des ventes sur les offres premium.',
          icon: 'TrendingUp'
        },
        {
          id: 'criadores',
          title: 'Créateurs',
          tag: 'Média & Notoriété',
          description: 'Personnalités publiques souhaitant bâtir leur propre sanctuaire digital affranchi des plateformes sociales.',
          benefit: 'Contrôle souverain de l’audience et des revenus.',
          icon: 'Camera'
        },
        {
          id: 'marcas',
          title: 'Marques',
          tag: 'Luxe & Lifestyle',
          description: 'Maisons de mode, de design et d’hôtellerie en quête d’une narration visuelle hypnotique et inoubliable.',
          benefit: 'Fidélisation sensorielle et prestige accru.',
          icon: 'Crown'
        },
        {
          id: 'e-commerces',
          title: 'E-commerces',
          tag: 'Commerce Sélect',
          description: 'E-shops qui délaissent les gabarits standardisés pour offrir une expérience d’achat véritablement luxueuse.',
          benefit: 'Panier moyen supérieur et fidélisation durable.',
          icon: 'ShoppingBag'
        },
        {
          id: 'empresas-internacionais',
          title: 'Entreprises Mondiales',
          tag: 'Cross-Border',
          description: 'Groupes transnationaux exigeant une architecture multilingue sans faille et une navigation sans friction.',
          benefit: 'Cohérence globale et fluidité d’implantation locale.',
          icon: 'Globe2'
        }
      ]
    },
    technology: {
      sectionTag: 'INGÉNIERIE D’AVANT-GARDE',
      title: 'Technologie invisible. Expérience inoubliable.',
      subtitle: 'Nous effaçons la complexité pour délivrer des sites qui répondent à la vitesse de la pensée avec une sécurité maximale.',
      modules: [
        {
          id: 'ia',
          title: 'IA & Agents',
          benefit: 'Intelligence & Service 24/7',
          description: 'Intégration d’IA générative pour la qualification instantanée et la personnalisation dynamique.',
          badge: 'Next-Gen',
          icon: 'Cpu'
        },
        {
          id: 'automacao',
          title: 'Automatisation',
          benefit: 'Parcours commerciaux fluides',
          description: 'Connexion aux flux CRM, alertes temps réel et planification exécutive automatisée.',
          badge: 'Flux Intelligents',
          icon: 'Zap'
        },
        {
          id: 'integracoes',
          title: 'Intégrations',
          benefit: 'Écosystème unifié',
          description: 'Interconnexion fluide avec passerelles de paiement et bases de données d’entreprise.',
          badge: 'Zéro Friction',
          icon: 'Workflow'
        },
        {
          id: 'apis',
          title: 'APIs Modernes',
          benefit: 'Données en temps réel',
          description: 'Architectures headless modernes diffusant les contenus à latence ultra-faible.',
          badge: 'Headless',
          icon: 'Code2'
        },
        {
          id: 'analytics',
          title: 'Analytics Avancé',
          benefit: 'Stratégie éclairée par la donnée',
          description: 'Télémétrie respectueuse de la vie privée sans compromettre la vitesse de chargement.',
          badge: 'Insights',
          icon: 'BarChart3'
        },
        {
          id: 'seo',
          title: 'SEO Technique',
          benefit: 'Positions de tête sur Google',
          description: 'Données structurées JSON-LD, cartes OpenGraph et scores optimaux sur Core Web Vitals.',
          badge: 'Visibilité',
          icon: 'Search'
        },
        {
          id: 'performance',
          title: 'Performance Extrême',
          benefit: 'Affichage en millisecondes',
          description: 'Optimisation de code, formats d’images modernes et exécution asynchrone.',
          badge: '< 0.4s',
          icon: 'Gauge'
        },
        {
          id: 'responsividade',
          title: 'Adaptabilité Totale',
          benefit: 'Impeccable sur tout support',
          description: 'Mise à l’échelle optique fluide du smartphone au moniteur 8K panoramique.',
          badge: 'Mobile-First',
          icon: 'Smartphone'
        },
        {
          id: 'seguranca',
          title: 'Sécurité & Chiffrement',
          benefit: 'Protection institutionnelle',
          description: 'Certificats SSL entreprise, pare-feu DDoS et stricte conformité réglementaire.',
          badge: 'Blindé',
          icon: 'ShieldCheck'
        },
        {
          id: 'cloud',
          title: 'Cloud & Edge CDN',
          benefit: '99.99% Uptime mondial',
          description: 'Distribution sur des centaines de nœuds de bordure pour une réactivité instantanée.',
          badge: 'Global Edge',
          icon: 'Cloud'
        }
      ]
    },
    finalCta: {
      headline: 'Bâtissons ensemble quelque chose d’extraordinaire.',
      subheadline: 'Votre prochaine grande présence numérique commence par une idée. Nous faisons de cette idée une expérience inoubliable.',
      primaryButton: 'Démarrer un projet',
      secondaryButton: 'Parler avec Axé IA',
      regionBadge: 'Brésil · Portugal · Europe · Amérique Latine · Worldwide'
    },
    footer: {
      tagline: 'Digital experiences engineered for the world.',
      companyLinks: 'Entreprise',
      servicesLinks: 'Services',
      legalLinks: 'Légal',
      languagesTitle: 'Langues',
      rights: 'Tous droits réservés. Axé IA Studio.',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions Générales'
    },
    modal: {
      title: 'Lancer Votre Projet avec Axé IA',
      subtitle: 'Partagez votre vision et recevez une proposition technique et stratégique sur-mesure sous 24h ouvrées.',
      step1Title: 'Périmètre du Projet',
      step2Title: 'Envergure & Délais',
      step3Title: 'Contact & Détails',
      projectTypeLabel: 'Quelle solution correspond à votre ambition ?',
      types: [
        { id: 'website', label: 'Site Web Premium', desc: 'Site institutionnel moderne, rapide et stratégique' },
        { id: 'landing', label: 'Landing Page', desc: 'Page à haute conversion pour ventes et prospects' },
        { id: 'ecommerce', label: 'E-commerce de Luxe', desc: 'Boutique en ligne sélecte au parcours raffiné' },
        { id: 'ia', label: 'Expérience avec IA', desc: 'Automatisation intelligente et agents sur-mesure' },
        { id: 'global', label: 'Présence Internationale', desc: 'Architecture multilingue et déploiement mondial' },
        { id: 'custom', label: 'Solution Sur-Mesure', desc: 'Projet complexe ou plateforme propriétaire' }
      ],
      budgetLabel: 'Enveloppe d’investissement estimée',
      budgets: ['Sur Devis', '2 000 € — 5 000 €', '5 000 € — 12 000 €', '12 000 €+ / Global'],
      timelineLabel: 'Échéance de lancement souhaitée',
      timelines: ['Immédiat (sous 3 semaines)', '1 à 2 mois', 'Déploiement stratégique (3+ mois)'],
      nameLabel: 'Nom et Prénom',
      emailLabel: 'E-mail Professionnel',
      phoneLabel: 'WhatsApp / Téléphone avec indicatif',
      messageLabel: 'Décrivez brièvement votre projet et vos objectifs',
      messagePlaceholder: 'Parlez-nous de votre entreprise et de l’impact recherché...',
      submitButton: 'Transmettre le Briefing',
      whatsappButton: 'Échanger Directement sur WhatsApp',
      submitting: 'Transmission des données...',
      successTitle: 'Demande Transmise avec Succès',
      successMessage: 'Nous avons bien reçu votre briefing. Notre équipe prendra contact avec vous très prochainement.',
      closeButton: 'Fermer'
    }
  }
};
