import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Compass, ShieldCheck, Zap, Globe2 } from 'lucide-react';
import { LanguageCode } from '../types';
import { translations } from '../data/translations';
import { HeroCanvas } from './HeroCanvas';

interface HeroProps {
  currentLang: LanguageCode;
  onOpenProjectModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenProjectModal }) => {
  const t = translations[currentLang];

  // Real-time dynamic world clocks for international prestige
  const [worldTimes, setWorldTimes] = useState({
    sp: '',
    lisbon: '',
    paris: '',
    ny: '',
  });

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setWorldTimes({
        sp: now.toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit' }),
        lisbon: now.toLocaleTimeString('pt-PT', { timeZone: 'Europe/Lisbon', hour: '2-digit', minute: '2-digit' }),
        paris: now.toLocaleTimeString('fr-FR', { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit' }),
        ny: now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit' }),
      });
    };
    updateClocks();
    const timer = setInterval(updateClocks, 10000);
    return () => clearInterval(timer);
  }, []);

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-[#050507]"
    >
      {/* Background Interactive Generative Canvas */}
      <HeroCanvas />

      {/* Decorative Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#d4af37]/10 via-[#c5a037]/5 to-transparent blur-[140px] pointer-events-none -z-0"></div>
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-500/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col items-center justify-center">
        {/* Geographic Presence Badge */}
        <div
          id="hero-presence-badge"
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.1] text-xs font-medium text-slate-300 backdrop-blur-xl mb-8 shadow-sm hover:border-[#d4af37]/40 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></span>
          <span className="tracking-wider uppercase text-[11px] font-semibold text-slate-200">
            {t.hero.badge}
          </span>
        </div>

        {/* Main Headline */}
        <h1
          id="hero-headline"
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] max-w-5xl mb-7 font-display"
        >
          {t.hero.headline.split(' ').map((word, idx) => {
            // Highlight key words for cinematic elegance
            const isHighlight =
              word.toUpperCase().includes('PRESENÇA') ||
              word.toUpperCase().includes('PRESENCE') ||
              word.toUpperCase().includes('DIGITAL') ||
              word.toUpperCase().includes('ALTURA') ||
              word.toUpperCase().includes('HAUTEUR');

            return (
              <span
                key={idx}
                className={
                  isHighlight
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3e8c8] to-[#d4af37] font-black'
                    : 'text-white'
                }
              >
                {word}{' '}
              </span>
            );
          })}
        </h1>

        {/* Subheadline */}
        <p
          id="hero-subheadline"
          className="text-base sm:text-lg md:text-xl text-slate-300 font-normal max-w-3xl mb-10 leading-relaxed font-sans"
        >
          {t.hero.subheadline}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onOpenProjectModal}
            id="hero-primary-cta"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase text-black bg-gradient-to-r from-[#ebd074] via-[#d4af37] to-[#c19b2e] hover:brightness-110 shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 group"
          >
            <Sparkles className="w-4 h-4 text-black/80" />
            <span>{t.hero.primaryCta}</span>
            <ArrowRight className="w-4 h-4 text-black/80 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={scrollToPortfolio}
            id="hero-secondary-cta"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-sm tracking-wide text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-white/[0.25] backdrop-blur-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2.5"
          >
            <Compass className="w-4 h-4 text-[#d4af37]" />
            <span>{t.hero.secondaryCta}</span>
          </button>
        </div>

        {/* Positioning Tagline */}
        <div className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold flex items-center gap-2 opacity-90">
          <span className="w-6 h-[1px] bg-[#d4af37]/60"></span>
          <span>{t.hero.presenceTag}</span>
          <span className="w-6 h-[1px] bg-[#d4af37]/60"></span>
        </div>
      </div>

      {/* Bottom Global Status Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 pt-8 border-t border-white/[0.06]">
        <div className="flex flex-wrap items-center justify-between gap-6 text-xs text-slate-400">
          {/* Key Value Proof Metrics */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span className="text-slate-300 font-medium">{t.hero.metrics.satisfaction}</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#d4af37]" />
              <span className="text-slate-300 font-medium">{t.hero.metrics.speed}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-[#d4af37]" />
              <span className="text-slate-300 font-medium">{t.hero.metrics.global}</span>
            </div>
          </div>

          {/* Real-time Regional Hub Clocks */}
          <div className="flex items-center gap-4 text-[11px] font-mono text-slate-400 bg-white/[0.02] px-3 py-1.5 rounded-lg border border-white/[0.05]">
            <span className="text-[#d4af37] font-sans font-semibold">EDGE HUBS:</span>
            <span>SP {worldTimes.sp || '--:--'}</span>
            <span className="text-slate-600">•</span>
            <span>LIS {worldTimes.lisbon || '--:--'}</span>
            <span className="text-slate-600">•</span>
            <span>PAR {worldTimes.paris || '--:--'}</span>
            <span className="text-slate-600">•</span>
            <span>NYC {worldTimes.ny || '--:--'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
