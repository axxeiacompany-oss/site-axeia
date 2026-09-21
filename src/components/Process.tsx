import React, { useState } from 'react';
import { Search, Compass, Palette, Terminal, Rocket, Check, ArrowRight } from 'lucide-react';
import { LanguageCode } from '../types';
import { translations } from '../data/translations';

interface ProcessProps {
  currentLang: LanguageCode;
}

export const Process: React.FC<ProcessProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-5 h-5 text-[#d4af37]" />;
      case 1:
        return <Compass className="w-5 h-5 text-[#d4af37]" />;
      case 2:
        return <Palette className="w-5 h-5 text-[#d4af37]" />;
      case 3:
        return <Terminal className="w-5 h-5 text-[#d4af37]" />;
      case 4:
      default:
        return <Rocket className="w-5 h-5 text-[#d4af37]" />;
    }
  };

  return (
    <section id="process" className="relative py-28 bg-[#050507] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d4af37] mb-4">
            <span>{t.process.sectionTag}</span>
          </div>

          <h2
            id="process-title"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display mb-4"
          >
            {t.process.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            {t.process.subtitle}
          </p>
        </div>

        {/* Desktop Horizontal Stepper / Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {t.process.steps.map((step, idx) => {
            const isSelected = activeStepIndex === idx;

            return (
              <div
                key={step.step}
                id={`process-step-${step.step}`}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-[#12121a] border-[#d4af37]/60 shadow-[0_15px_30px_rgba(212,175,55,0.1)]'
                    : 'bg-[#0a0a0f] border-white/[0.07] hover:border-white/[0.18] hover:bg-[#0e0e14]'
                }`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif-luxury text-2xl font-black text-[#d4af37]">
                      {step.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      {getStepIcon(idx)}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2 font-display">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-normal leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Duration Tag */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>{step.duration}</span>
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#d4af37]' : 'bg-slate-600'}`}></span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Details */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#0c0c14] to-[#12121c] border border-white/[0.1] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center shrink-0">
              <span className="font-serif-luxury text-lg font-bold text-[#d4af37]">
                {t.process.steps[activeStepIndex].step}
              </span>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-1">
                Etapa em Destaque: {t.process.steps[activeStepIndex].title}
              </div>
              <p className="text-sm sm:text-base text-slate-200 font-medium">
                {t.process.steps[activeStepIndex].details}
              </p>
            </div>
          </div>

          <div className="shrink-0 text-xs font-mono text-slate-400 bg-white/[0.04] px-4 py-2 rounded-lg border border-white/[0.08]">
            Duração estimada: <span className="text-[#d4af37] font-bold">{t.process.steps[activeStepIndex].duration}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
