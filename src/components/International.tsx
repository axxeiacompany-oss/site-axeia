import React, { useState, useEffect, useRef } from 'react';
import {
  Globe,
  Radio,
  Shield,
  Network,
  Zap,
  CheckCircle2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  Layers,
  Send,
  Activity,
  Maximize2
} from 'lucide-react';
import { LanguageCode } from '../types';
import { translations } from '../data/translations';

interface InternationalProps {
  currentLang: LanguageCode;
}

export interface RealisticHub {
  id: string;
  name: string;
  shortName: string;
  flag: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  svgX: number;
  svgY: number;
  latency: string;
  pingMs: number;
  status: string;
  tier: string;
  role: string;
  coverage: string;
  currencies: string[];
  regulations: string;
  bandwidth: string;
  region: 'americas' | 'europe';
}

export interface SubseaCable {
  id: string;
  name: string;
  fromId: string;
  toId: string;
  pathD: string;
  distanceKm: string;
  capacity: string;
}

export const REALISTIC_HUBS: RealisticHub[] = [
  {
    id: 'brazil',
    name: 'Brasil (São Paulo / Salvador)',
    shortName: 'São Paulo',
    flag: '🇧🇷',
    city: 'São Paulo & Salvador',
    country: 'Brasil',
    lat: -23.55,
    lng: -46.63,
    svgX: 370,
    svgY: 315,
    latency: '8ms',
    pingMs: 8,
    status: 'Ativo • QG Criativo Global',
    tier: 'Tier 1 Global Flagship',
    role: 'Creative Direction, Engenharia de Software de Luxo & Hub Sul-Americano',
    coverage: 'Brasil & América do Sul inteira',
    currencies: ['BRL (Pix / Boleto / Cartão)', 'USD'],
    regulations: 'LGPD Compliance (Lei 13.709/2018)',
    bandwidth: '48 Tbps Backbone',
    region: 'americas'
  },
  {
    id: 'portugal',
    name: 'Portugal (Lisboa / Porto)',
    shortName: 'Lisboa',
    flag: '🇵🇹',
    city: 'Lisboa & Porto',
    country: 'Portugal',
    lat: 38.72,
    lng: -9.14,
    svgX: 475,
    svgY: 142,
    latency: '14ms',
    pingMs: 14,
    status: 'Ativo • Hub Europeu',
    tier: 'European Gateway',
    role: 'Operações Europeias, Mercado Ibérico & Comunidade Lusófona',
    coverage: 'Portugal, Espanha, Cabo Verde, Angola & União Europeia',
    currencies: ['EUR (MBWay / SEPA / Multibanco)', 'GBP'],
    regulations: 'GDPR / RGPD (Regulamento UE 2016/679)',
    bandwidth: '64 Tbps Subsea Interconnect',
    region: 'europe'
  },
  {
    id: 'spain',
    name: 'Espanha (Madrid / Barcelona)',
    shortName: 'Madrid',
    flag: '🇪🇸',
    city: 'Madrid & Barcelona',
    country: 'Espanha',
    lat: 40.41,
    lng: -3.7,
    svgX: 490,
    svgY: 138,
    latency: '16ms',
    pingMs: 16,
    status: 'Ativo • Conexão Ibero',
    tier: 'Regional Edge Cluster',
    role: 'Comunidade Ibero-Americana, E-commerce Transfronteiriço',
    coverage: 'Espanha, América Hispânica & Sul da Europa',
    currencies: ['EUR (Bizum / SEPA / Cartões UE)', 'USD'],
    regulations: 'GDPR & AEPD Standards',
    bandwidth: '32 Tbps Edge Ring',
    region: 'europe'
  },
  {
    id: 'france',
    name: 'França (Paris / Lyon)',
    shortName: 'Paris',
    flag: '🇫🇷',
    city: 'Paris & Lyon',
    country: 'França',
    lat: 48.85,
    lng: 2.35,
    svgX: 506,
    svgY: 114,
    latency: '17ms',
    pingMs: 17,
    status: 'Ativo • Luxury Hub',
    tier: 'Luxury Architecture',
    role: 'Marcas de Luxo, Alta Joalheria, Moda & Private Wealth',
    coverage: 'França, Mônaco, Suíça & Benelux',
    currencies: ['EUR', 'CHF'],
    regulations: 'CNIL & GDPR European Standard',
    bandwidth: '40 Tbps Optical Fiber',
    region: 'europe'
  },
  {
    id: 'usa-east',
    name: 'Estados Unidos (Miami / NY)',
    shortName: 'Miami / NY',
    flag: '🇺🇸',
    city: 'Miami & Nova York',
    country: 'Estados Unidos',
    lat: 25.76,
    lng: -80.19,
    svgX: 277,
    svgY: 178,
    latency: '12ms',
    pingMs: 12,
    status: 'Ativo • Capital Gateway',
    tier: 'Tier 1 Ultra-Edge',
    role: 'Captação de Capital, Venture Capital, Fintechs & Enterprise B2B',
    coverage: 'EUA, Canadá & Corredor Financeiro da Flórida',
    currencies: ['USD (ACH / Stripe / Apple Pay)', 'CAD'],
    regulations: 'CCPA & SOC2 Type II Certified',
    bandwidth: '80 Tbps High-Frequency',
    region: 'americas'
  },
  {
    id: 'uk-central-eu',
    name: 'Reino Unido & Alemanha (Londres / Frankfurt)',
    shortName: 'Frankfurt / UK',
    flag: '🇬🇧',
    city: 'Londres & Frankfurt',
    country: 'Reino Unido & Alemanha',
    lat: 51.5,
    lng: 0.12,
    svgX: 500,
    svgY: 107,
    latency: '15ms',
    pingMs: 15,
    status: 'Ativo • Core Datacenter',
    tier: 'Core Backbone Transit',
    role: 'Data Centers Primários, Roteamento Anycast & CDN Global',
    coverage: 'Reino Unido, DACH (Alemanha, Áustria, Suíça) & Nórdicos',
    currencies: ['GBP', 'EUR', 'USD'],
    regulations: 'ISO 27001 & UK GDPR',
    bandwidth: '120 Tbps Global Exchange',
    region: 'europe'
  },
  {
    id: 'latam-north',
    name: 'México & Andes (Cidade do México / Bogotá)',
    shortName: 'México / Andes',
    flag: '🇲🇽',
    city: 'Cidade do México & Bogotá',
    country: 'México & Colômbia',
    lat: 19.43,
    lng: -99.13,
    svgX: 224,
    svgY: 196,
    latency: '22ms',
    pingMs: 22,
    status: 'Ativo • LATAM Ring',
    tier: 'Pacific-Atlantic Bridge',
    role: 'Expansão de Negócios México e Aliança do Pacífico',
    coverage: 'México, Colômbia, América Central & Caribe',
    currencies: ['MXN', 'COP', 'USD'],
    regulations: 'Conformidade Regional Ibero-Americana',
    bandwidth: '28 Tbps Ring',
    region: 'americas'
  }
];

export const SUBSEA_CABLES: SubseaCable[] = [
  {
    id: 'cable-ellalink',
    name: 'EllaLink Submarine Fiber (Direto Brasil ⇄ Portugal)',
    fromId: 'brazil',
    toId: 'portugal',
    pathD: 'M 370,315 Q 435,245 475,142',
    distanceKm: '6,200 km',
    capacity: '72 Tbps Óptico'
  },
  {
    id: 'cable-iberia',
    name: 'Corredor Terrestre Ibérico (Lisboa ⇄ Madrid)',
    fromId: 'portugal',
    toId: 'spain',
    pathD: 'M 475,142 Q 482,140 490,138',
    distanceKm: '650 km',
    capacity: '40 Tbps DWDM'
  },
  {
    id: 'cable-spain-france',
    name: 'Dorsal Pirenaica (Madrid ⇄ Paris)',
    fromId: 'spain',
    toId: 'france',
    pathD: 'M 490,138 Q 498,126 506,114',
    distanceKm: '1,270 km',
    capacity: '50 Tbps Fibra'
  },
  {
    id: 'cable-france-uk',
    name: 'Euro-Tunnel High Speed (Paris ⇄ Frankfurt/Londres)',
    fromId: 'france',
    toId: 'uk-central-eu',
    pathD: 'M 506,114 Q 503,110 500,107',
    distanceKm: '470 km',
    capacity: '80 Tbps Interconnect'
  },
  {
    id: 'cable-monet',
    name: 'Monet / Seabras-1 (São Paulo ⇄ Miami)',
    fromId: 'brazil',
    toId: 'usa-east',
    pathD: 'M 370,315 Q 310,250 277,178',
    distanceKm: '10,556 km',
    capacity: '64 Tbps Subsea'
  },
  {
    id: 'cable-transatlantic',
    name: 'MAREA / Dunant Transatlantic (EUA ⇄ Europa Central)',
    fromId: 'usa-east',
    toId: 'uk-central-eu',
    pathD: 'M 277,178 Q 385,120 500,107',
    distanceKm: '6,600 km',
    capacity: '250 Tbps Ultra-Fast'
  },
  {
    id: 'cable-latam-caribe',
    name: 'South American Crossing (São Paulo ⇄ México/Andes)',
    fromId: 'brazil',
    toId: 'latam-north',
    pathD: 'M 370,315 Q 285,270 224,196',
    distanceKm: '7,400 km',
    capacity: '36 Tbps Ring'
  },
  {
    id: 'cable-mexico-usa',
    name: 'Gulf of Mexico Fiber (México ⇄ Miami)',
    fromId: 'latam-north',
    toId: 'usa-east',
    pathD: 'M 224,196 Q 250,187 277,178',
    distanceKm: '2,100 km',
    capacity: '30 Tbps Link'
  }
];

export const International: React.FC<InternationalProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [selectedHub, setSelectedHub] = useState<RealisticHub>(REALISTIC_HUBS[0]);
  const [hoveredHub, setHoveredHub] = useState<RealisticHub | null>(null);

  // Interactive Luxury Controls
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeFilter, setActiveFilter] = useState<'all' | 'americas' | 'europe'>('all');
  const [showCables, setShowCables] = useState<boolean>(true);
  const [showDataPackets, setShowDataPackets] = useState<boolean>(true);
  const [isSimulatingPing, setIsSimulatingPing] = useState<boolean>(false);
  const [simulatedPingResult, setSimulatedPingResult] = useState<number | null>(null);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const active = hoveredHub || selectedHub;

  // Zoom Handler
  const handleZoom = (direction: 'in' | 'out') => {
    setZoomLevel((prev) => {
      if (direction === 'in') return Math.min(prev + 0.35, 2.5);
      return Math.max(prev - 0.35, 1);
    });
  };

  const handleResetView = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  // Drag & Pan support
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1) return;
    isDraggingRef.current = true;
    dragStartRef.current = { x: e.clientX - panOffset.x, y: e.clientY - panOffset.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || zoomLevel <= 1) return;
    setPanOffset({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y
    });
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Ping simulation trigger
  const runPingTest = (hub: RealisticHub) => {
    setIsSimulatingPing(true);
    setSimulatedPingResult(null);

    setTimeout(() => {
      // Realistic jitter +/- 2ms
      const jitter = Math.floor(Math.random() * 5) - 2;
      const result = Math.max(4, hub.pingMs + jitter);
      setSimulatedPingResult(result);
      setIsSimulatingPing(false);
    }, 450);
  };

  // Filtered Hubs
  const displayedHubs = REALISTIC_HUBS.filter((h) => {
    if (activeFilter === 'all') return true;
    return h.region === activeFilter;
  });

  // Calculate connected cables for active hub
  const connectedCables = SUBSEA_CABLES.filter(
    (c) => c.fromId === active.id || c.toId === active.id
  );

  return (
    <section
      id="international"
      className="relative py-28 bg-[#060609] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background ambient luxury gold illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#d4af37]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d4af37] mb-4">
              <Radio className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
              <span>{t.international.sectionTag}</span>
            </div>

            <h2
              id="international-title"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display mb-4"
            >
              {t.international.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              {t.international.description}
            </p>
          </div>

          {/* Interactive Metric Pill */}
          <div className="flex flex-wrap items-center gap-4 bg-[#0a0a10] border border-white/[0.1] rounded-2xl p-3.5 shadow-2xl">
            <div className="flex items-center gap-2.5 pr-4 border-r border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]" />
              <div>
                <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Status da Rede</div>
                <div className="text-xs font-bold text-white font-mono">100% OPERACIONAL</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pr-4 border-r border-white/10">
              <Activity className="w-4 h-4 text-[#d4af37]" />
              <div>
                <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Latência Média</div>
                <div className="text-xs font-bold text-emerald-400 font-mono">&lt; 15ms Transatlântico</div>
              </div>
            </div>

            <div>
              <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Roteamento</div>
              <div className="text-xs font-bold text-[#d4af37] font-mono">Anycast Global Edge</div>
            </div>
          </div>
        </div>

        {/* LUXURY INTERACTIVE WORLD MAP WORKSTATION */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0f0f18] via-[#09090f] to-[#040407] border border-white/[0.12] p-4 sm:p-7 lg:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.95)] overflow-hidden mb-12">
          
          {/* Top Control Bar (Filters, Toggles & View Controls) */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/[0.08] mb-6 relative z-20">
            
            {/* Region Filter Buttons */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/50 border border-white/[0.08]">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeFilter === 'all'
                    ? 'bg-[#d4af37] text-black font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Todos ({REALISTIC_HUBS.length})
              </button>
              <button
                onClick={() => setActiveFilter('americas')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeFilter === 'americas'
                    ? 'bg-[#d4af37] text-black font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Américas (3)
              </button>
              <button
                onClick={() => setActiveFilter('europe')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeFilter === 'europe'
                    ? 'bg-[#d4af37] text-black font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Europa (4)
              </button>
            </div>

            {/* Layer toggles & View Zoom Buttons */}
            <div className="flex items-center gap-3">
              {/* Toggle Submarine Cables */}
              <button
                onClick={() => setShowCables(!showCables)}
                className={`px-3 py-1.5 rounded-xl border text-xs font-mono flex items-center gap-2 transition-all cursor-pointer ${
                  showCables
                    ? 'bg-white/[0.08] border-[#d4af37]/50 text-[#ebd074]'
                    : 'bg-black/40 border-white/10 text-slate-500 hover:text-slate-300'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Cabos Submarinos</span>
              </button>

              {/* Toggle Live Packets */}
              <button
                onClick={() => setShowDataPackets(!showDataPackets)}
                className={`px-3 py-1.5 rounded-xl border text-xs font-mono flex items-center gap-2 transition-all cursor-pointer ${
                  showDataPackets
                    ? 'bg-white/[0.08] border-emerald-500/50 text-emerald-400'
                    : 'bg-black/40 border-white/10 text-slate-500 hover:text-slate-300'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${showDataPackets ? 'bg-emerald-400 animate-ping' : 'bg-slate-600'}`} />
                <span className="hidden sm:inline">Pulsos em Tempo Real</span>
              </button>

              {/* Zoom Controls */}
              <div className="flex items-center gap-1 bg-black/50 border border-white/[0.08] rounded-xl p-1">
                <button
                  onClick={() => handleZoom('in')}
                  title="Aproximar Zoom"
                  aria-label="Zoom In"
                  className="w-7 h-7 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.1] flex items-center justify-center transition-all cursor-pointer"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleZoom('out')}
                  title="Afastar Zoom"
                  aria-label="Zoom Out"
                  className="w-7 h-7 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.1] flex items-center justify-center transition-all cursor-pointer"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                {zoomLevel > 1 && (
                  <button
                    onClick={handleResetView}
                    title="Restaurar visualização"
                    aria-label="Reset View"
                    className="w-7 h-7 rounded-lg text-[#d4af37] hover:bg-[#d4af37]/20 flex items-center justify-center transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Map Canvas Stage */}
          <div
            ref={mapContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            className={`relative w-full aspect-[2/1] min-h-[340px] max-h-[560px] rounded-2xl bg-[#030306] border border-white/[0.08] overflow-hidden select-none ${
              zoomLevel > 1 ? 'cursor-grab active:cursor-grabbing' : ''
            }`}
          >
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#131322]/40 via-transparent to-transparent pointer-events-none" />

            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full transition-transform duration-300 ease-out origin-center"
              style={{
                transform: `scale(${zoomLevel}) translate(${panOffset.x / zoomLevel}px, ${panOffset.y / zoomLevel}px)`
              }}
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Gold Glow Filter */}
                <filter id="goldGlowHigh" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Cable Glow */}
                <filter id="cableGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Ocean Gradient */}
                <linearGradient id="oceanSurface" x1="0" y1="0" x2="0" y2="100%">
                  <stop offset="0%" stopColor="#080811" />
                  <stop offset="100%" stopColor="#020204" />
                </linearGradient>

                {/* Gold Route Gradient */}
                <linearGradient id="goldRoute" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ebd074" />
                  <stop offset="50%" stopColor="#d4af37" />
                  <stop offset="100%" stopColor="#996515" />
                </linearGradient>
              </defs>

              {/* Ocean Base Plate */}
              <rect width="1000" height="500" fill="url(#oceanSurface)" />

              {/* Cartographic Coordinate Lines */}
              <g stroke="rgba(255,255,255,0.035)" strokeWidth="1" strokeDasharray="3 4">
                {/* Equator */}
                <line x1="0" y1="250" x2="1000" y2="250" stroke="rgba(212,175,55,0.18)" strokeWidth="1.2" />
                {/* Tropics of Cancer & Capricorn */}
                <line x1="0" y1="185" x2="1000" y2="185" />
                <line x1="0" y1="315" x2="1000" y2="315" />
                {/* Prime Meridian (Greenwich) */}
                <line x1="500" y1="0" x2="500" y2="500" stroke="rgba(212,175,55,0.18)" strokeWidth="1.2" />
                {/* Longitudinal intervals */}
                <line x1="250" y1="0" x2="250" y2="500" />
                <line x1="750" y1="0" x2="750" y2="500" />
              </g>

              {/* CONTINENTS VECTOR GEOMETRY */}
              <g fill="#161624" stroke="rgba(255,255,255,0.08)" strokeWidth="1.2" opacity="0.95">
                
                {/* NORTH AMERICA */}
                <path
                  d="M 120,45 
                     L 165,40 L 210,48 L 245,60 L 275,50 L 305,65 L 340,75 L 355,100 L 340,115 
                     L 310,110 L 285,125 L 315,145 L 300,175 L 265,185 L 235,190 L 215,220 
                     L 245,225 L 265,245 L 245,260 L 225,245 L 210,230 L 195,200 L 175,180 
                     L 160,150 L 140,135 L 125,120 L 105,95 L 90,80 L 105,60 Z"
                  className="hover:fill-[#1b1b2c] transition-colors"
                />

                {/* GREENLAND */}
                <path d="M 360,35 L 430,30 L 450,55 L 420,85 L 380,95 L 350,75 Z" />

                {/* SOUTH AMERICA */}
                <path
                  d="M 285,260 
                     L 330,250 L 385,270 L 430,305 L 440,335 L 400,380 L 370,425 L 350,470 
                     L 335,465 L 325,410 L 300,345 L 280,300 L 275,275 Z"
                  className="hover:fill-[#1b1b2c] transition-colors"
                />

                {/* EUROPE & BRITISH ISLES */}
                <path d="M 485,95 L 495,90 L 505,105 L 490,120 L 480,110 Z" />
                <path d="M 468,102 L 476,98 L 478,112 L 470,115 Z" />
                <path
                  d="M 465,145 
                     L 485,130 L 495,115 L 515,105 L 530,70 L 555,60 L 575,80 L 550,110 
                     L 580,120 L 610,135 L 615,160 L 580,175 L 550,165 L 530,185 L 505,175 
                     L 485,178 L 460,165 Z"
                  className="hover:fill-[#1b1b2c] transition-colors"
                />

                {/* AFRICA */}
                <path
                  d="M 465,185 
                     L 535,185 L 575,200 L 615,225 L 640,265 L 610,315 L 575,370 L 545,430 
                     L 515,435 L 490,390 L 485,320 L 450,285 L 420,240 L 440,205 Z"
                  className="hover:fill-[#1b1b2c] transition-colors"
                />
                <path d="M 640,350 L 655,340 L 665,375 L 650,400 L 638,380 Z" />

                {/* ASIA */}
                <path
                  d="M 610,135 
                     L 670,105 L 750,85 L 840,75 L 910,95 L 890,140 L 860,165 L 830,150 
                     L 810,195 L 835,230 L 805,275 L 775,240 L 730,225 L 690,295 L 665,240 
                     L 640,210 L 615,165 Z"
                  className="hover:fill-[#1b1b2c] transition-colors"
                />
                <path d="M 885,150 L 910,140 L 920,165 L 895,190 L 880,175 Z" />
                <path d="M 780,290 L 820,295 L 800,310 Z" />
                <path d="M 830,295 L 870,295 L 860,315 Z" />

                {/* AUSTRALIA */}
                <path
                  d="M 800,345 
                     L 855,335 L 895,365 L 905,405 L 875,435 L 815,430 L 785,395 L 785,365 Z"
                  className="hover:fill-[#1b1b2c] transition-colors"
                />
                <path d="M 920,420 L 935,410 L 945,445 L 930,460 Z" />
              </g>

              {/* SUBSEA HIGH-CAPACITY FIBER CABLES */}
              {showCables && (
                <g fill="none">
                  {SUBSEA_CABLES.map((cable) => {
                    const isConnectedToActive =
                      active.id === cable.fromId || active.id === cable.toId;

                    return (
                      <g key={cable.id} className="transition-all duration-300">
                        {/* Background wider line for hover target & glow */}
                        <path
                          d={cable.pathD}
                          stroke={isConnectedToActive ? '#d4af37' : 'rgba(212,175,55,0.25)'}
                          strokeWidth={isConnectedToActive ? 2.8 : 1.2}
                          strokeDasharray={isConnectedToActive ? 'none' : '4 4'}
                          filter={isConnectedToActive ? 'url(#cableGlow)' : undefined}
                          className="transition-all duration-300"
                        />

                        {/* Animated glowing fiber data packet running along the cable */}
                        {showDataPackets && (
                          <circle r="3" fill="#ffffff" filter="url(#goldGlowHigh)">
                            <animateMotion
                              path={cable.pathD}
                              dur={isConnectedToActive ? '2.2s' : '4.5s'}
                              repeatCount="indefinite"
                            />
                          </circle>
                        )}
                      </g>
                    );
                  })}
                </g>
              )}

              {/* INTERACTIVE GEOGRAPHIC HUBS */}
              {displayedHubs.map((hub) => {
                const isSelected = active.id === hub.id;

                return (
                  <g
                    key={hub.id}
                    className="cursor-pointer group"
                    onClick={() => {
                      setSelectedHub(hub);
                      runPingTest(hub);
                    }}
                    onMouseEnter={() => setHoveredHub(hub)}
                    onMouseLeave={() => setHoveredHub(null)}
                  >
                    {/* Ping Radar Wave */}
                    {isSelected && (
                      <>
                        <circle
                          cx={hub.svgX}
                          cy={hub.svgY}
                          r="16"
                          fill="none"
                          stroke="#d4af37"
                          strokeWidth="1.5"
                          className="animate-ping opacity-60"
                        />
                        <circle
                          cx={hub.svgX}
                          cy={hub.svgY}
                          r="24"
                          fill="none"
                          stroke="#d4af37"
                          strokeWidth="0.8"
                          className="animate-ping opacity-30"
                          style={{ animationDelay: '0.4s' }}
                        />
                      </>
                    )}

                    {/* Outer Target Circle */}
                    <circle
                      cx={hub.svgX}
                      cy={hub.svgY}
                      r={isSelected ? 9 : 6.5}
                      fill={isSelected ? 'rgba(212,175,55,0.4)' : 'rgba(20,20,30,0.8)'}
                      stroke={isSelected ? '#ffffff' : '#d4af37'}
                      strokeWidth={isSelected ? 2.2 : 1.4}
                      filter={isSelected ? 'url(#goldGlowHigh)' : undefined}
                      className="transition-all duration-300 group-hover:r-9 group-hover:stroke-white"
                    />

                    {/* Solid Core Pin */}
                    <circle
                      cx={hub.svgX}
                      cy={hub.svgY}
                      r={isSelected ? 4 : 2.5}
                      fill={isSelected ? '#d4af37' : '#ffffff'}
                      className="transition-all duration-300"
                    />

                    {/* City Floating Tag */}
                    <g
                      transform={`translate(${hub.svgX}, ${hub.svgY - 14})`}
                      className="pointer-events-none transition-all duration-200"
                    >
                      <rect
                        x="-40"
                        y="-18"
                        width="80"
                        height="18"
                        rx="9"
                        fill={isSelected ? '#d4af37' : 'rgba(8,8,14,0.92)'}
                        stroke={isSelected ? '#ffffff' : 'rgba(255,255,255,0.22)'}
                        strokeWidth="1"
                        className="shadow-lg"
                      />
                      <text
                        x="0"
                        y="-6"
                        textAnchor="middle"
                        fill={isSelected ? '#000000' : '#ffffff'}
                        fontSize="9"
                        fontWeight="800"
                        fontFamily="'Plus Jakarta Sans', sans-serif"
                        letterSpacing="0.4"
                      >
                        {hub.shortName} {hub.flag}
                      </text>
                    </g>
                  </g>
                );
              })}
            </svg>

            {/* Bottom Floating Interactive Telemetry Bar on Map */}
            <div className="absolute bottom-3 left-3 right-3 sm:left-4 sm:right-auto bg-[#07070c]/90 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2 flex items-center gap-4 text-xs font-mono text-slate-300 shadow-xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white font-bold">{active.name}</span>
              </div>
              <div className="hidden sm:block border-l border-white/10 pl-3 text-slate-400">
                Lat: {active.lat}° | Lng: {active.lng}°
              </div>
              <div className="border-l border-white/10 pl-3 text-[#ebd074] font-bold">
                {active.latency} TTL
              </div>
            </div>
          </div>

          {/* Quick Hub Selector Ribbon */}
          <div className="mt-6 flex flex-wrap gap-2 items-center">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              Hubs Globais:
            </span>
            {REALISTIC_HUBS.map((hub) => {
              const isSelected = active.id === hub.id;
              return (
                <button
                  key={hub.id}
                  onClick={() => {
                    setSelectedHub(hub);
                    runPingTest(hub);
                  }}
                  onMouseEnter={() => setHoveredHub(hub)}
                  onMouseLeave={() => setHoveredHub(null)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-2 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#d4af37] text-black border-transparent font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105'
                      : 'bg-white/[0.03] text-slate-300 border-white/10 hover:border-[#d4af37]/50 hover:bg-white/[0.06]'
                  }`}
                >
                  <span>{hub.flag}</span>
                  <span>{hub.shortName}</span>
                  <span
                    className={`text-[10px] font-mono ${
                      isSelected ? 'text-black/80' : 'text-emerald-400'
                    }`}
                  >
                    {hub.latency}
                  </span>
                </button>
              );
            })}
          </div>

          {/* LUXURY ACTIVE HUB COMMAND COCKPIT */}
          <div className="mt-6 pt-6 border-t border-white/[0.08] bg-[#07070b] rounded-2xl p-6 border border-white/[0.08] shadow-inner">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Col 1: Identity & Live Ping Test */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{active.flag}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white font-display leading-tight">
                        {active.name}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">
                        {active.city} • {active.country}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="text-[10px] font-mono font-bold text-[#d4af37] bg-[#d4af37]/10 px-2.5 py-1 rounded-md border border-[#d4af37]/25">
                    {active.tier}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/25 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {active.status}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {active.role}
                </p>

                {/* Live Diagnostic Ping Button */}
                <div className="pt-2">
                  <button
                    onClick={() => runPingTest(active)}
                    disabled={isSimulatingPing}
                    className="w-full sm:w-auto px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-[#d4af37]/50 text-xs font-mono text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Send className={`w-3.5 h-3.5 text-[#d4af37] ${isSimulatingPing ? 'animate-spin' : ''}`} />
                    <span>
                      {isSimulatingPing
                        ? 'Executando diagnóstico ICMP...'
                        : `Testar Rota com ${active.shortName}`}
                    </span>
                    {simulatedPingResult && !isSimulatingPing && (
                      <span className="text-emerald-400 font-bold ml-1">
                        → {simulatedPingResult}ms (Excelente)
                      </span>
                    )}
                  </button>
                </div>
              </div>

              {/* Col 2: Connected Subsea Cables & Financial Corridors */}
              <div className="space-y-4 lg:border-l lg:border-white/[0.08] lg:pl-6">
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-1.5 flex items-center justify-between">
                    <span>Corredores de Fibra Conectados</span>
                    <span className="text-emerald-400 font-mono text-[10px]">
                      {active.bandwidth}
                    </span>
                  </div>
                  <div className="space-y-1.5 max-h-32 overflow-y-auto pr-1">
                    {connectedCables.map((c) => (
                      <div
                        key={c.id}
                        className="px-2.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs flex items-center justify-between"
                      >
                        <span className="text-slate-300 font-medium text-[11px] truncate">
                          {c.name}
                        </span>
                        <span className="text-[10px] font-mono text-[#d4af37] shrink-0 ml-2">
                          {c.capacity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-1.5">
                    Moedas & Formas de Pagamento Locais
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {active.currencies.map((curr, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-[#ebd074]"
                      >
                        {curr}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Col 3: Latency Performance & Legal Compliance */}
              <div className="flex flex-col justify-between lg:border-l lg:border-white/[0.08] lg:pl-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">
                      {t.international.latencyLabel}
                    </div>
                    <div className="text-2xl font-mono font-extrabold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                      <span>{active.latency}</span>
                      <span className="text-[10px] font-sans font-normal text-slate-400">Edge</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">
                      Disponibilidade
                    </div>
                    <div className="text-2xl font-mono font-extrabold text-white mt-0.5">
                      99.99%
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-mono mb-1">
                    Mercados Abrangidos
                  </div>
                  <div className="text-xs font-semibold text-slate-200">
                    {active.coverage}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.06]">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-mono mb-1">
                    {t.international.complianceLabel}
                  </div>
                  <div className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{active.regulations}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Global Architecture Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#d4af37]/30 transition-all flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37] shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Multi-idioma Nativo</div>
              <div className="text-xs text-slate-400">PT-BR, PT-PT, EN, ES, FR</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#d4af37]/30 transition-all flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37] shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Global Edge CDN</div>
              <div className="text-xs text-slate-400">&lt; 15ms de latência mundial</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#d4af37]/30 transition-all flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37] shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Conformidade Legal</div>
              <div className="text-xs text-slate-400">LGPD, GDPR e CCPA</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#d4af37]/30 transition-all flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37] shrink-0">
              <Network className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Multi-moedas Nativas</div>
              <div className="text-xs text-slate-400">BRL, EUR, USD, GBP, CHF</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
