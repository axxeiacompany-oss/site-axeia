import React, { useState } from 'react';
import { Eye, ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { PortfolioItem, LanguageCode } from '../types';
import { translations } from '../data/translations';

interface PortfolioProps {
  currentLang: LanguageCode;
  onOpenProjectDetail: (project: PortfolioItem) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ currentLang, onOpenProjectDetail }) => {
  const t = translations[currentLang];
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems =
    activeCategory === 'all'
      ? t.portfolio.items
      : t.portfolio.items.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-28 bg-[#07070a] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d4af37] mb-4">
              <span>{t.portfolio.sectionTag}</span>
            </div>

            <h2
              id="portfolio-title"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display"
            >
              {t.portfolio.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mt-4">
              {t.portfolio.subtitle}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {t.portfolio.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#d4af37] text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                    : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white border border-white/[0.08]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`portfolio-item-${item.id}`}
              onClick={() => onOpenProjectDetail(item)}
              className="group relative rounded-2xl bg-[#0e0e14] border border-white/[0.08] overflow-hidden hover:border-[#d4af37]/50 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
            >
              {/* Media Container with Zoom */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#161620]">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e14] via-[#0e0e14]/20 to-transparent"></div>

                {/* Top Corner Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/15">
                    {item.categoryLabel}
                  </span>
                  <span className="text-[10px] font-mono text-slate-300 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                    {item.country}
                  </span>
                </div>

                {/* Hover Reveal Trigger */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-semibold text-xs shadow-xl tracking-wide">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ver Apresentação</span>
                  </span>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono text-[#d4af37] font-semibold uppercase tracking-wider mb-1">
                    {item.client}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-[#f8fafc] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Metric Strip & Action */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="text-xs font-mono font-bold text-emerald-400">
                    {item.metrics[0]?.value} <span className="text-[10px] text-slate-400 font-sans">{item.metrics[0]?.label}</span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 group-hover:text-[#d4af37] transition-colors">
                    <span>Detalhes</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
