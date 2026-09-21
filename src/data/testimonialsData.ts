import { LanguageCode } from '../types';

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  flag: string;
  avatar: string;
  projectType: string;
  rating: number;
  highlight: string;
  quote: string;
  metric?: string;
  metricLabel?: string;
}

export interface TestimonialsData {
  sectionTag: string;
  title: string;
  subtitle: string;
  ratingScore: string;
  ratingCount: string;
  verifiedLabel: string;
  items: TestimonialItem[];
}

export const testimonialsByLanguage: Record<LanguageCode, TestimonialsData> = {
  'pt-pt': {
    sectionTag: 'TESTEMUNHOS & REPUTAÇÃO',
    title: 'A confiança de marcas e líderes que exigem distinção.',
    subtitle: 'Veja o que fundadores, diretores executivos e investidores relatam após transformarem a sua presença digital com a AXÉ IA.',
    ratingScore: '5.0 / 5.0',
    ratingCount: 'Mais de 40+ projetos de luxo entregues internacionalmente',
    verifiedLabel: 'Testemunho Verificado',
    items: [
      {
        id: '1',
        name: 'Henrique Vasconcellos',
        role: 'Fundador & CEO',
        company: 'Vanguard Luxury Capital',
        location: 'São Paulo, Brasil',
        flag: '🇧🇷',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=260&q=80',
        projectType: 'Plataforma Institucional & Private Hub',
        rating: 5,
        highlight: 'Superou qualquer expectativa de sofisticação e velocidade.',
        quote: 'A AXÉ IA redefiniu totalmente como os investidores internacionais percebem a nossa gestora. O nível de acabamento, a velocidade instantânea em qualquer país e o cuidado com cada pormenor tipográfico colocaram-nos num novo patamar competitivo.',
        metric: '+140%',
        metricLabel: 'Leads qualificados internacionais'
      },
      {
        id: '2',
        name: 'Camila Drummond',
        role: 'Chief Brand Officer',
        company: 'Maison Éthérée Jewelry',
        location: 'Lisboa, Portugal',
        flag: '🇵🇹',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=260&q=80',
        projectType: 'E-commerce Internacional de Joias',
        rating: 5,
        highlight: 'Vendas na Europa e no Brasil sem qualquer atrito.',
        quote: 'As nossas joias exigiam um design digital que fizesse jus ao artesanato e ao luxo tangível. A loja criada pela AXÉ IA aumentou o nosso ticket médio imediatamente e facilitou o checkout multi-moeda em euro e real.',
        metric: '3.8x',
        metricLabel: 'Aumento na taxa de conversão'
      },
      {
        id: '3',
        name: 'Marcus Sterling',
        role: 'Managing Partner',
        company: 'Aetherion Cloud Systems',
        location: 'Miami, Estados Unidos',
        flag: '🇺🇸',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=260&q=80',
        projectType: 'Landing Page de Alta Conversão B2B',
        rating: 5,
        highlight: 'Precisão estética impecável e latência ultrabaixa.',
        quote: 'Precisávamos fechar contratos enterprise nos EUA e na Europa. A equipa da AXÉ IA entregou uma interface cinematográfica que conquistou clientes antes mesmo da primeira reunião com os nossos executivos.',
        metric: '< 0.3s',
        metricLabel: 'Tempo de abertura nos EUA e UE'
      },
      {
        id: '4',
        name: 'Drª. Sofia Alencastro',
        role: 'Diretora Clínica',
        company: 'Instituto Alencastro de Longevidade',
        location: 'Genebra & Lisboa',
        flag: '🇨🇭',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=260&q=80',
        projectType: 'Website Institucional & Concierge VIP',
        rating: 5,
        highlight: 'Elegância que transmite autoridade imediata.',
        quote: 'Os nossos pacientes de elevado património procuram exclusividade e privacidade. A integração do concierge inteligente com agendamento direto pelo site gerou uma experiência acolhedora, moderna e extremamente requintada.',
        metric: '98%',
        metricLabel: 'Aprovação dos pacientes VIP'
      },
      {
        id: '5',
        name: 'Eduardo Morales',
        role: 'Head of Growth',
        company: 'Solaria Solar Solutions',
        location: 'Madrid, Espanha',
        flag: '🇪🇸',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=260&q=80',
        projectType: 'Infraestrutura Multi-idiomas & Captação',
        rating: 5,
        highlight: 'O sistema multilíngue gerou novos mercados em semanas.',
        quote: 'A capacidade da AXÉ IA em conceber arquiteturas multilíngues com SEO internacional impecável permitiu-nos captar projetos industriais em 4 países em simultâneo.',
        metric: '€2.4M',
        metricLabel: 'Pipeline gerado em 6 meses'
      }
    ]
  },
  'en': {
    sectionTag: 'CLIENT VOICES & REPUTATION',
    title: 'Trusted by leaders and brands that demand distinction.',
    subtitle: 'Read how founders, chief executive officers, and investors transformed their digital footprint and international reach with AXÉ IA.',
    ratingScore: '5.0 / 5.0',
    ratingCount: 'Over 40+ luxury digital builds delivered worldwide',
    verifiedLabel: 'Verified Testimonial',
    items: [
      {
        id: '1',
        name: 'Henrique Vasconcellos',
        role: 'Founder & CEO',
        company: 'Vanguard Luxury Capital',
        location: 'São Paulo, Brazil',
        flag: '🇧🇷',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=260&q=80',
        projectType: 'Institutional Platform & Private Hub',
        rating: 5,
        highlight: 'Exceeded every expectation of speed and luxury sophistication.',
        quote: 'AXÉ IA fundamentally elevated how global capital and international investors perceive our firm. The micro-interactions, instant edge loading, and typographic mastery positioned us in an elite tier.',
        metric: '+140%',
        metricLabel: 'Qualified global leads'
      },
      {
        id: '2',
        name: 'Camila Drummond',
        role: 'Chief Brand Officer',
        company: 'Maison Éthérée Jewelry',
        location: 'Lisbon, Portugal',
        flag: '🇵🇹',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=260&q=80',
        projectType: 'International Luxury E-Commerce',
        rating: 5,
        highlight: 'Seamless commerce across Europe and the Americas.',
        quote: 'Our fine jewelry required a digital experience that mirrored high jewelry craftsmanship. AXÉ IA lifted our average order value immediately and made multi-currency transactions completely effortless.',
        metric: '3.8x',
        metricLabel: 'Conversion rate increase'
      },
      {
        id: '3',
        name: 'Marcus Sterling',
        role: 'Managing Partner',
        company: 'Aetherion Cloud Systems',
        location: 'Miami, United States',
        flag: '🇺🇸',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=260&q=80',
        projectType: 'High-Conversion B2B Enterprise Page',
        rating: 5,
        highlight: 'Impeccable aesthetics paired with sub-second performance.',
        quote: 'Closing enterprise deals requires an aura of unquestioned technological superiority. AXÉ IA created a cinematic web presence that converted enterprise decision-makers before our first presentation.',
        metric: '< 0.3s',
        metricLabel: 'Global load time across US & EU'
      },
      {
        id: '4',
        name: 'Dr. Sofia Alencastro',
        role: 'Medical Director',
        company: 'Alencastro Institute of Longevity',
        location: 'Geneva & São Paulo',
        flag: '🇨🇭',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=260&q=80',
        projectType: 'Bespoke Medical Web Presence & VIP Concierge',
        rating: 5,
        highlight: 'Sublime elegance that inspires immediate trust.',
        quote: 'Our high-net-worth clientele requires uncompromised privacy and warmth. The AI concierge integration and bespoke booking experience created a serene, discreet, and deeply luxurious journey.',
        metric: '98%',
        metricLabel: 'VIP patient satisfaction'
      },
      {
        id: '5',
        name: 'Eduardo Morales',
        role: 'Head of Growth',
        company: 'Solaria Solar Solutions',
        location: 'Madrid, Spain',
        flag: '🇪🇸',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=260&q=80',
        projectType: 'Multi-Language Infrastructure & Global Funnel',
        rating: 5,
        highlight: 'Multi-regional expansion launched within weeks.',
        quote: 'AXÉ IA’s international architecture and localized optimization allowed us to win multi-million euro commercial projects across four countries simultaneously. Truly outstanding engineering.',
        metric: '€2.4M',
        metricLabel: 'Commercial pipeline generated'
      }
    ]
  },
  'es': {
    sectionTag: 'OPINIONES & REPUTACIÓN',
    title: 'La confianza de marcas y líderes que exigen distinción.',
    subtitle: 'Conozca cómo fundadores, directores ejecutivos e inversores han transformado su presencia digital con AXÉ IA.',
    ratingScore: '5.0 / 5.0',
    ratingCount: 'Más de 40+ proyectos de lujo entregados internacionalmente',
    verifiedLabel: 'Testimonio Verificado',
    items: [
      {
        id: '1',
        name: 'Henrique Vasconcellos',
        role: 'Fundador & CEO',
        company: 'Vanguard Luxury Capital',
        location: 'São Paulo, Brasil',
        flag: '🇧🇷',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=260&q=80',
        projectType: 'Plataforma Institucional & Private Hub',
        rating: 5,
        highlight: 'Superó cualquier expectativa de velocidad y distinción.',
        quote: 'AXÉ IA redefinió por completo la percepción de los inversores internacionales hacia nuestra firma. El nivel de detalle, la fluidez visual y la velocidad instantánea nos han situado en la cima de nuestro sector.',
        metric: '+140%',
        metricLabel: 'Contactos internacionales calificados'
      },
      {
        id: '2',
        name: 'Camila Drummond',
        role: 'Directora de Marca',
        company: 'Maison Éthérée Jewelry',
        location: 'Lisboa, Portugal',
        flag: '🇵🇹',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=260&q=80',
        projectType: 'E-commerce Internacional de Alta Joyería',
        rating: 5,
        highlight: 'Ventas fluidas en Europa y América Latina.',
        quote: 'Nuestras piezas requerían una tienda digital a la altura de la artesanía de lujo. La plataforma de AXÉ IA elevó de inmediato el valor medio de nuestros pedidos y garantizó un checkout multidivisa impecable.',
        metric: '3.8x',
        metricLabel: 'Aumento en tasa de conversión'
      },
      {
        id: '3',
        name: 'Marcus Sterling',
        role: 'Socio Director',
        company: 'Aetherion Cloud Systems',
        location: 'Miami, Estados Unidos',
        flag: '🇺🇸',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=260&q=80',
        projectType: 'Página de Alta Conversión B2B Enterprise',
        rating: 5,
        highlight: 'Estética cinematográfica y latencia ultrabaja.',
        quote: 'Cerrar acuerdos corporativos en EE. UU. y Europa requería transmitir supremacía tecnológica indiscutible. AXÉ IA creó una web que convence a los directivos antes de comenzar la reunión.',
        metric: '< 0.3s',
        metricLabel: 'Tiempo de apertura en EE. UU. y UE'
      },
      {
        id: '4',
        name: 'Dra. Sofia Alencastro',
        role: 'Directora Médica',
        company: 'Instituto Alencastro de Longevidad',
        location: 'Ginebra & Madrid',
        flag: '🇨🇭',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=260&q=80',
        projectType: 'Web Institucional & Concierge VIP',
        rating: 5,
        highlight: 'Elegancia que genera confianza inmediata.',
        quote: 'Nuestros pacientes de alto poder adquisitivo valoran la máxima privacidad y un trato exquisito. La integración del asistente inteligente y la reserva directa brindaron una experiencia serena y distinguida.',
        metric: '98%',
        metricLabel: 'Satisfacción de pacientes VIP'
      },
      {
        id: '5',
        name: 'Eduardo Morales',
        role: 'Director de Crecimiento',
        company: 'Solaria Solar Solutions',
        location: 'Madrid, España',
        flag: '🇪🇸',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=260&q=80',
        projectType: 'Infraestructura Multilingüe & Ventas Globales',
        rating: 5,
        highlight: 'Expansión internacional en cuestión de semanas.',
        quote: 'La arquitectura multilingüe con SEO internacional de AXÉ IA nos permitió cerrar contratos industriales millonarios en cuatro países a la vez.',
        metric: '€2.4M',
        metricLabel: 'Pipeline generado en 6 meses'
      }
    ]
  },
  'fr': {
    sectionTag: 'TÉMOIGNAGES & RÉPUTATION',
    title: 'La confiance de leaders et de marques qui exigent la perfection.',
    subtitle: 'Découvrez comment fondateurs, directeurs généraux et investisseurs ont réinventé leur présence numérique grâce à AXÉ IA.',
    ratingScore: '5.0 / 5.0',
    ratingCount: 'Plus de 40+ créations numériques de luxe livrées à l’échelle mondiale',
    verifiedLabel: 'Témoignage Vérifié',
    items: [
      {
        id: '1',
        name: 'Henrique Vasconcellos',
        role: 'Fondateur & CEO',
        company: 'Vanguard Luxury Capital',
        location: 'São Paulo, Brésil',
        flag: '🇧🇷',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=260&q=80',
        projectType: 'Plateforme Institutionnelle & Hub Privé',
        rating: 5,
        highlight: 'A surpassé toutes nos attentes de sophistication et de rapidité.',
        quote: 'AXÉ IA a totalement métamorphosé la perception de notre société auprès des investisseurs internationaux. La minutie typographique et le temps de réponse instantané nous placent au premier rang.',
        metric: '+140%',
        metricLabel: 'Leads internationaux qualifiés'
      },
      {
        id: '2',
        name: 'Camila Drummond',
        role: 'Directrice de Marque',
        company: 'Maison Éthérée Jewelry',
        location: 'Lisbonne & Paris',
        flag: '🇫🇷',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=260&q=80',
        projectType: 'E-commerce International de Haute Joaillerie',
        rating: 5,
        highlight: 'Des ventes internationales sans la moindre friction.',
        quote: 'Nos pièces de haute joaillerie méritaient un écrin digital digne de notre savoir-faire. Le site créé par AXÉ IA a immédiatement augmenté notre panier moyen et sécurisé les transactions multi-devises.',
        metric: '3.8x',
        metricLabel: 'Augmentation du taux de conversion'
      },
      {
        id: '3',
        name: 'Marcus Sterling',
        role: 'Directeur Associé',
        company: 'Aetherion Cloud Systems',
        location: 'Miami, États-Unis',
        flag: '🇺🇸',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=260&q=80',
        projectType: 'Landing Page Haute Conversion Entreprise B2B',
        rating: 5,
        highlight: 'Esthétique cinématographique et latence ultra-faible.',
        quote: 'Conclure des contrats majeurs exigeait une crédibilité technologique sans faille. AXÉ IA a conçu une interface qui captive nos clients avant même notre première réunion.',
        metric: '< 0.3s',
        metricLabel: 'Temps d’ouverture en Amérique et Europe'
      },
      {
        id: '4',
        name: 'Dr. Sofia Alencastro',
        role: 'Directrice Médicale',
        company: 'Institut Alencastro de Longévité',
        location: 'Genève & Paris',
        flag: '🇨🇭',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=260&q=80',
        projectType: 'Site Institutionnel & Concierge VIP',
        rating: 5,
        highlight: 'Une élégance discrète qui suscite une confiance absolue.',
        quote: 'Notre patientèle internationale recherche l’excellence et la confidentialité. L’intégration du concierge intelligent et la réservation fluide ont créé une expérience d’un raffinement incomparable.',
        metric: '98%',
        metricLabel: 'Satisfaction des patients VIP'
      },
      {
        id: '5',
        name: 'Eduardo Morales',
        role: 'Responsable Croissance',
        company: 'Solaria Solar Solutions',
        location: 'Madrid, Espagne',
        flag: '🇪🇸',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=260&q=80',
        projectType: 'Infrastructure Multilingue & Ventes Globales',
        rating: 5,
        highlight: 'Expansion sur quatre marchés en quelques semaines.',
        quote: 'L’architecture multilingue conçue par AXÉ IA nous a permis de remporter des projets industriels d’envergure dans quatre pays simultanément.',
        metric: '€2.4M',
        metricLabel: 'Pipeline généré en 6 mois'
      }
    ]
  }
};
