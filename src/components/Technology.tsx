import React from 'react';
import {
  Cpu,
  Zap,
  Workflow,
  Code2,
  BarChart3,
  Search,
  Gauge,
  Smartphone,
  ShieldCheck,
  Cloud,
} from 'lucide-react';
import { LanguageCode } from '../types';
import { translations } from '../data/translations';

interface TechnologyProps {
  currentLang: LanguageCode;
}

export const Technology: React.FC<TechnologyProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const getTechIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#d4af37]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#d4af37]" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-[#d4af37]" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#d4af37]" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-[#d4af37]" />;
      case 'Search':
        return <Search className="w-5 h-5 text-[#d4af37]" />;
      case 'Gauge':
        return <Gauge className="w-5 h-5 text-[#d4af37]" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-[#d4af37]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#d4af37]" />;
      case 'Cloud':
      default:
        return <Cloud className="w-5 h-5 text-[#d4af37]" />;
    }
  };

  return (
    <section id="technology" className="relative py-28 bg-[#07070a] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d4af37] mb-4">
            <span>{t.technology.sectionTag}</span>
          </div>

          <h2
            id="technology-title"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display mb-4"
          >
            {t.technology.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            {t.technology.subtitle}
          </p>
        </div>

        {/* 10 Technology Modules Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {t.technology.modules.map((item) => (
            <div
              key={item.id}
              id={`tech-module-${item.id}`}
              className="group rounded-2xl bg-[#0c0c12] border border-white/[0.07] p-5 hover:border-[#d4af37]/45 transition-all duration-300 flex flex-col justify-between hover:bg-[#111118]"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:border-[#d4af37]/30 group-hover:bg-[#d4af37]/10 transition-colors">
                    {getTechIcon(item.icon)}
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Benefit */}
                <h3 className="text-base font-bold text-white mb-1 font-display">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-[#d4af37] mb-2 tracking-wide">
                  {item.benefit}
                </div>

                <p className="text-xs text-slate-400 font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
