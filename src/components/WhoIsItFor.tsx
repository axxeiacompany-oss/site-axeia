import React from 'react';
import {
  Building2,
  Rocket,
  UserCheck,
  TrendingUp,
  Camera,
  Crown,
  ShoppingBag,
  Globe2,
  Check,
} from 'lucide-react';
import { LanguageCode } from '../types';
import { translations } from '../data/translations';

interface WhoIsItForProps {
  currentLang: LanguageCode;
}

export const WhoIsItFor: React.FC<WhoIsItForProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#d4af37]" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-[#d4af37]" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-[#d4af37]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#d4af37]" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-[#d4af37]" />;
      case 'Crown':
        return <Crown className="w-5 h-5 text-[#d4af37]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-[#d4af37]" />;
      case 'Globe2':
      default:
        return <Globe2 className="w-5 h-5 text-[#d4af37]" />;
    }
  };

  return (
    <section id="audience" className="relative py-28 bg-[#050507] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d4af37] mb-4">
            <span>{t.audience.sectionTag}</span>
          </div>

          <h2
            id="audience-title"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display mb-4"
          >
            {t.audience.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            {t.audience.subtitle}
          </p>
        </div>

        {/* 8 Audience Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.audience.cards.map((card) => (
            <div
              key={card.id}
              id={`audience-card-${card.id}`}
              className="group relative rounded-2xl bg-[#0a0a0f] border border-white/[0.08] p-6 hover:border-[#d4af37]/45 transition-all duration-300 flex flex-col justify-between hover:bg-[#0f0f16]"
            >
              <div>
                {/* Icon & Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:border-[#d4af37]/40 group-hover:bg-[#d4af37]/10 transition-colors">
                    {getIcon(card.icon)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-white/[0.03] px-2.5 py-1 rounded border border-white/[0.06]">
                    {card.tag}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6 font-normal">
                  {card.description}
                </p>
              </div>

              {/* Specific Benefit */}
              <div className="pt-4 border-t border-white/[0.06] flex items-start gap-2 text-xs text-slate-200">
                <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="font-medium">{card.benefit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
