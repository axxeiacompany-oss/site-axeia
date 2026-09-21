import { PortfolioItem } from '../types';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'aethelgard-private-wealth',
    title: 'Aethelgard Capital & Private Wealth',
    category: 'websites',
    categoryLabel: 'Websites Premium',
    client: 'Aethelgard Group (Zurich / São Paulo)',
    year: '2025',
    country: 'Suíça • Brasil',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=85',
    description: 'Plataforma digital para gestora de patrimônio com navegação fluida, visualização de carteiras institucionais e segurança de dados bancários.',
    results: '+340% em solicitações de credenciamento e presença institucional impecável na Europa e América Latina.',
    metrics: [
      { label: 'Desempenho Lighthouse', value: '100/100' },
      { label: 'Tempo de Carregamento', value: '0.42s' },
      { label: 'Conversão Global', value: '+340%' }
    ],
    deliverables: ['Design System Exclusivo', 'Portal Institucional Multi-idioma', 'Segurança Bancária', 'Arquitetura Edge'],
    technologies: ['React 19', 'Tailwind CSS', 'Cloudflare Edge', 'Framer Motion'],
    accentColor: '#d4af37'
  },
  {
    id: 'lumina-haute-joaillerie',
    title: 'LUMINA Haute Horlogerie & Joaillerie',
    category: 'ecommerce',
    categoryLabel: 'E-commerce de Luxo',
    client: 'Maison Lumina (Paris / Lisboa)',
    year: '2025',
    country: 'França • Portugal',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=85',
    description: 'Boutique digital de alta joalheria com renderização tridimensional interativa, agendamento de concierge privado e checkout multi-moeda.',
    results: 'Ticket médio de €4.800 com clientes em 14 países e integração em tempo real de inventário europeu.',
    metrics: [
      { label: 'Ticket Médio', value: '€4.800' },
      { label: 'Países Atendidos', value: '14 Países' },
      { label: 'Retenção de Sessão', value: '4m 18s' }
    ],
    deliverables: ['E-commerce Headless', 'Experiência Concierge 3D', 'Checkout Multi-moeda (EUR, USD, BRL)', 'Stripe Luxury'],
    technologies: ['Next.js', 'WebGL', 'Stripe Multi-Currency', 'Tailwind'],
    accentColor: '#e5c158'
  },
  {
    id: 'synthesis-ai-cloud',
    title: 'Synthesis Neural Enterprise Cloud',
    category: 'ia',
    categoryLabel: 'Experiências com IA',
    client: 'Synthesis AI Labs (Austin / São Paulo)',
    year: '2025',
    country: 'EUA • Brasil',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85',
    description: 'Interface interativa para modelo proprietário de inteligência artificial com visualização em tempo real de embeddings e agentes autônomos.',
    results: 'Captação de Série A de $18M pós-lançamento da interface institucional construída pela Axé IA.',
    metrics: [
      { label: 'Série A Captada', value: '$18M USD' },
      { label: 'Latência de Visualização', value: '18ms' },
      { label: 'Usuários Ativos B2B', value: '120k+' }
    ],
    deliverables: ['Dashboard de IA Interativo', 'Design Futurista de Luxo', 'SDK Frontend Realtime', 'Microinterações Hápticas'],
    technologies: ['Canvas API', 'TypeScript', 'WebSockets', 'Tailwind CSS'],
    accentColor: '#38bdf8'
  },
  {
    id: 'oriente-architects',
    title: 'Oriente Arquitetura Contemporânea',
    category: 'websites',
    categoryLabel: 'Websites Premium',
    client: 'Studio Oriente (Barcelona / Rio de Janeiro)',
    year: '2024',
    country: 'Espanha • Brasil',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    description: 'Monografia digital imersiva para estúdio premiado de arquitetura internacional com transições cinematográficas e tipografia monumental.',
    results: 'Vencedor de Awwwards Site of the Day e expansão de clientes para Miami e Dubai.',
    metrics: [
      { label: 'Prêmio Internacional', value: 'SOTD Awwwards' },
      { label: 'Projetos Fechados', value: '€2.4M' },
      { label: 'Tempo de Carregamento', value: '0.38s' }
    ],
    deliverables: ['Identidade Visual Digital', 'Portfólio Cinematográfico', 'Galeria de Mídia Ultra-HD', 'Otimização Global'],
    technologies: ['Vite', 'Motion/React', 'Tailwind CSS', 'PWA'],
    accentColor: '#f1f5f9'
  },
  {
    id: 'valkyrie-hypercar',
    title: 'Valkyrie Private Aviation & Yachting',
    category: 'landing-pages',
    categoryLabel: 'Landing Pages',
    client: 'Valkyrie Global Escapes (Miami / Lisboa)',
    year: '2025',
    country: 'EUA • Portugal',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=85',
    description: 'Landing page de ultra-conversão para fretamento exclusivo de jatos executivos e iates transatlânticos com qualificação instantânea via IA.',
    results: 'Taxa de conversão de leads qualificados de 14.2% com ticket médio superior a US$ 85.000.',
    metrics: [
      { label: 'Taxa de Conversão', value: '14.2%' },
      { label: 'Qualificação por IA', value: 'Instantânea' },
      { label: 'ROI de Tráfego', value: '8.4x' }
    ],
    deliverables: ['Landing Page de Alto Impacto', 'Agente de Qualificação IA', 'Copywriting Estratégico', 'Integração CRM'],
    technologies: ['React', 'Tailwind', 'AI Form Assistant', 'Analytics'],
    accentColor: '#d4af37'
  },
  {
    id: 'meridian-cross-border',
    title: 'Meridian Global Fintech & Pay',
    category: 'internacional',
    categoryLabel: 'Internacional',
    client: 'Meridian Network (Londres / São Paulo / Madrid)',
    year: '2025',
    country: 'Reino Unido • Brasil • Espanha',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85',
    description: 'Infraestrutura de presença digital multi-jurisdicional com localização automática de taxas cambiais, idiomas em tempo real e conformidade regulatória.',
    results: 'Presença unificada em 28 países, com roteamento de conteúdo com menos de 25ms de latência em todo o globo.',
    metrics: [
      { label: 'Países Ativos', value: '28' },
      { label: 'Latência Global', value: '< 25ms' },
      { label: 'Conformidade', value: 'LGPD & GDPR' }
    ],
    deliverables: ['Portal Global Multi-idioma', 'Roteamento Inteligente Geográfico', 'Design System Institucional', 'SLA 99.99%'],
    technologies: ['Edge Computing', 'React 19', 'i18n Engine', 'Tailwind'],
    accentColor: '#10b981'
  }
];
