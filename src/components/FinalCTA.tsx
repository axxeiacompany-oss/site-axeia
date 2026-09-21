import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { LanguageCode } from '../types';
import { translations } from '../data/translations';

interface FinalCTAProps {
  currentLang: LanguageCode;
  onOpenProjectModal: () => void;
  onOpenWhatsApp: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  currentLang,
  onOpenProjectModal,
  onOpenWhatsApp,
}) => {
  const t = translations[currentLang];

  return (
    <section className="relative py-32 bg-[#050507] border-t border-white/[0.08] overflow-hidden">
      {/* Subtle central golden glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#d4af37]/10 via-[#c5a037]/5 to-transparent blur-[160px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Geographic Presence Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.1] text-xs font-medium text-slate-300 backdrop-blur-xl mb-8">
          <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></span>
          <span className="tracking-wider uppercase text-[11px] font-semibold text-slate-200">
            {t.finalCta.regionBadge}
          </span>
        </div>

        {/* Headline */}
        <h2
          id="final-cta-headline"
          className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.12] mb-6 font-display"
        >
          {t.finalCta.headline}
        </h2>

        {/* Subheadline */}
        <p
          id="final-cta-text"
          className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-12 font-normal"
        >
          {t.finalCta.subheadline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
          <button
            onClick={onOpenProjectModal}
            id="final-cta-primary-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase text-black bg-gradient-to-r from-[#ebd074] via-[#d4af37] to-[#c19b2e] hover:brightness-110 shadow-[0_0_35px_rgba(212,175,55,0.4)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2.5 group"
          >
            <Sparkles className="w-4 h-4 text-black/80" />
            <span>{t.finalCta.primaryButton}</span>
            <ArrowRight className="w-4 h-4 text-black/80 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenWhatsApp}
            id="final-cta-secondary-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-sm tracking-wide text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.15] hover:border-white/[0.3] backdrop-blur-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2.5"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>{t.finalCta.secondaryButton}</span>
          </button>
        </div>

        {/* Trust Note */}
        <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
          <span>Atendimento executivo em português, inglês, espanhol e francês.</span>
        </div>
      </div>
    </section>
  );
};
