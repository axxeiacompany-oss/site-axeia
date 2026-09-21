import React from 'react';
import {
  Globe,
  Sparkles,
  ShoppingBag,
  Cpu,
  Navigation,
  Layers,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import { LanguageCode } from '../types';
import { translations } from '../data/translations';

interface WhatWeDoProps {
  currentLang: LanguageCode;
  onSelectService: (serviceId: string) => void;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ currentLang, onSelectService }) => {
  const t = translations[currentLang];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-[#d4af37]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#d4af37]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-[#d4af37]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#d4af37]" />;
      case 'Navigation':
        return <Navigation className="w-6 h-6 text-[#d4af37]" />;
      case 'Layers':
      default:
        return <Layers className="w-6 h-6 text-[#d4af37]" />;
    }
  };

  return (
    <section id="what-we-do" className="relative py-28 bg-[#07070a] border-t border-white/[0.05]">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d4af37] mb-4">
            <span>{t.whatWeDo.sectionTag}</span>
          </div>

          <h2
            id="what-we-do-title"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 font-display"
          >
            {t.whatWeDo.title}
          </h2>

          <p
            id="what-we-do-subtitle"
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
          >
            {t.whatWeDo.subtitle}
          </p>
        </div>

        {/* 6 High-Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {t.whatWeDo.cards.map((card, idx) => (
            <div
              key={card.id}
              id={`service-card-${card.id}`}
              className="group relative rounded-2xl bg-gradient-to-b from-[#111117]/90 to-[#0c0c10]/90 border border-white/[0.08] p-8 hover:border-[#d4af37]/45 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-sm"
            >
              {/* Subtle light sheen on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              <div>
                {/* Header of Card */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-xl bg-white/[0.03] border border-white/[0.1] flex items-center justify-center group-hover:bg-[#d4af37]/10 group-hover:border-[#d4af37]/30 transition-all duration-300">
                    {getIcon(card.icon)}
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.06]">
                    {card.badge}
                  </span>
                </div>

                {/* Title and Tagline */}
                <h3 className="text-xl font-bold text-white mb-2 font-display group-hover:text-[#f8fafc] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs font-semibold text-[#d4af37] mb-4 tracking-wide">
                  {card.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                  {card.description}
                </p>

                {/* Bullet Features */}
                <ul className="space-y-2.5 mb-8 border-t border-white/[0.06] pt-5">
                  {card.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action Trigger */}
              <button
                onClick={() => onSelectService(card.id)}
                className="w-full pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-[#d4af37] transition-colors cursor-pointer"
              >
                <span>Solicitar proposta para este serviço</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#d4af37]" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
