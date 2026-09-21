import React, { useState } from 'react';
import { Gauge, Sparkles, Cpu, Check, Activity, ShieldAlert, Zap } from 'lucide-react';
import { LanguageCode } from '../types';
import { translations } from '../data/translations';

interface OurDifferenceProps {
  currentLang: LanguageCode;
}

export const OurDifference: React.FC<OurDifferenceProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [activeTab, setActiveTab] = useState<'01' | '02' | '03'>('01');

  return (
    <section id="difference" className="relative py-28 bg-[#050507] border-t border-white/[0.06] overflow-hidden">
      {/* Subtle lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d4af37] mb-4">
            <span>{t.difference.sectionTag}</span>
          </div>

          <h2
            id="difference-title"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 font-display"
          >
            {t.difference.title}
          </h2>

          <p
            id="difference-subtitle"
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
          >
            {t.difference.subtitle}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {t.difference.pillars.map((pillar) => {
            const isSelected = activeTab === pillar.number;

            return (
              <div
                key={pillar.number}
                id={`pillar-${pillar.number}`}
                onClick={() => setActiveTab(pillar.number as '01' | '02' | '03')}
                className={`relative rounded-2xl p-8 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#16161f] to-[#0e0e14] border-[#d4af37]/60 shadow-[0_20px_45px_rgba(212,175,55,0.12)] scale-[1.02]'
                    : 'bg-[#0d0d12]/80 border-white/[0.08] hover:border-white/[0.2] hover:bg-[#121218]'
                } border backdrop-blur-md`}
              >
                <div>
                  {/* Pillar Number & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif-luxury text-3xl font-black text-[#d4af37] tracking-widest">
                      {pillar.number}
                    </span>

                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                      {pillar.title}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug font-display">
                    {pillar.headline}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-8 font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Metric Box */}
                <div className="pt-6 border-t border-white/[0.06]">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-3xl font-black text-white font-display">
                      {pillar.metric}
                    </span>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#d4af37]">
                      {pillar.metricLabel}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-medium">{pillar.highlight}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Visual Benchmark Proof Panel */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0c0c12] via-[#101017] to-[#0c0c12] border border-white/[0.1] p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-2">
                <Activity className="w-4 h-4" />
                <span>Auditoria Técnica em Tempo Real</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white font-display mb-3">
                Padrão Google Lighthouse 100/100 & Código Enterprise
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Cada website entregue pela Axé IA passa por mais de 80 testes automatizados de
                segurança, acessibilidade e renderização assíncrona, assegurando que sua marca
                esteja sempre no topo das recomendações dos motores de busca mundiais.
              </p>
            </div>

            {/* Score Gauges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto">
              <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/[0.02] border border-emerald-500/20 text-center">
                <span className="text-3xl font-black text-emerald-400 font-display">100</span>
                <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mt-1">
                  Performance
                </span>
                <span className="text-[9px] text-emerald-500 font-mono mt-0.5">&lt; 0.4s FCP</span>
              </div>

              <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/[0.02] border border-emerald-500/20 text-center">
                <span className="text-3xl font-black text-emerald-400 font-display">100</span>
                <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mt-1">
                  Acessibilidade
                </span>
                <span className="text-[9px] text-emerald-500 font-mono mt-0.5">WCAG AAA</span>
              </div>

              <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/[0.02] border border-emerald-500/20 text-center">
                <span className="text-3xl font-black text-emerald-400 font-display">100</span>
                <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mt-1">
                  Best Practices
                </span>
                <span className="text-[9px] text-emerald-500 font-mono mt-0.5">TLS / CSP</span>
              </div>

              <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/[0.02] border border-emerald-500/20 text-center">
                <span className="text-3xl font-black text-emerald-400 font-display">100</span>
                <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mt-1">
                  SEO Técnico
                </span>
                <span className="text-[9px] text-emerald-500 font-mono mt-0.5">JSON-LD 100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
