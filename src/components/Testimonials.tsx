import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, ShieldCheck, Pause, Play, Sparkles, TrendingUp } from 'lucide-react';
import { LanguageCode } from '../types';
import { testimonialsByLanguage, TestimonialItem } from '../data/testimonialsData';

interface TestimonialsProps {
  currentLang: LanguageCode;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ currentLang }) => {
  const data = testimonialsByLanguage[currentLang] || testimonialsByLanguage['pt-pt'];
  const items = data.items;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Auto-play interval with pause-on-hover capability
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused, items.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const current = items[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative py-28 bg-[#050507] border-t border-white/[0.06] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d4af37] mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{data.sectionTag}</span>
            </div>

            <h2
              id="testimonials-title"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display"
            >
              {data.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mt-4">
              {data.subtitle}
            </p>
          </div>

          {/* Social Proof Badge & Carousel Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <div className="flex text-[#d4af37] gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                ))}
              </div>
              <div className="border-l border-white/10 pl-3">
                <div className="text-xs font-bold text-white tracking-wide font-mono">
                  {data.ratingScore}
                </div>
                <div className="text-[10px] text-slate-400">
                  {data.verifiedLabel}
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                id="testimonial-prev-btn"
                aria-label="Previous Testimonial"
                className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                id="testimonial-next-btn"
                aria-label="Next Testimonial"
                className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsPaused(!isPaused)}
                id="testimonial-pause-btn"
                aria-label={isPaused ? 'Resume auto-play' : 'Pause auto-play'}
                title={isPaused ? 'Retomar rotação automática' : 'Pausar rotação'}
                className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-[#d4af37] flex items-center justify-center transition-all cursor-pointer"
              >
                {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Featured Testimonial Card (Smooth Transition) */}
        <div className="relative">
          <div
            key={current.id}
            id={`testimonial-card-${current.id}`}
            className="rounded-3xl bg-gradient-to-b from-[#111118] via-[#0c0c12] to-[#07070b] border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-6 sm:p-10 md:p-14 relative overflow-hidden transition-all duration-500 ease-out"
          >
            {/* Top decorative elements */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/25 font-mono">
                  {current.projectType}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1.5">
                  <span>{current.flag}</span>
                  <span>{current.location}</span>
                </span>
              </div>

              {/* Verified badge */}
              <div className="flex items-center gap-1.5 text-xs text-emerald-400/90 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{data.verifiedLabel}</span>
              </div>
            </div>

            {/* Quotation Icon & Headline */}
            <div className="mb-6">
              <Quote className="w-10 h-10 text-[#d4af37]/30 mb-4" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-display tracking-tight leading-snug">
                "{current.highlight}"
              </h3>
            </div>

            {/* Testimonial Quote */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-4xl">
              {current.quote}
            </p>

            {/* Footer with Author Details & Measured Impact Metric */}
            <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              {/* Author info */}
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#d4af37]/40 shadow-lg"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-base font-bold text-white tracking-wide">
                    {current.name}
                  </h4>
                  <p className="text-xs text-[#d4af37] font-medium">
                    {current.role} • <span className="text-slate-400">{current.company}</span>
                  </p>
                </div>
              </div>

              {/* Impact Metric (if present) */}
              {current.metric && (
                <div className="flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/[0.08] self-start sm:self-auto">
                  <div className="w-9 h-9 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold text-white font-mono leading-none">
                      {current.metric}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      {current.metricLabel}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Carousel Pagination Indicators */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {items.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                id={`testimonial-dot-${item.id}`}
                aria-label={`Ir para depoimento ${index + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === index
                    ? 'w-8 h-2.5 bg-[#d4af37] shadow-[0_0_10px_rgba(212,175,55,0.5)]'
                    : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Global summary badge */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 font-mono tracking-wider uppercase">
            {data.ratingCount}
          </p>
        </div>
      </div>
    </section>
  );
};
