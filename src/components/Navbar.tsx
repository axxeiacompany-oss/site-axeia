import React, { useState, useEffect, useRef } from 'react';
import { Globe, Menu, X, ChevronDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { LanguageCode } from '../types';
import { languageOptions, translations } from '../data/translations';

interface NavbarProps {
  currentLang: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  onOpenProjectModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenProjectModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const t = translations[currentLang];
  const activeOption = languageOptions.find((l) => l.code === currentLang) || languageOptions[0];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050507]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-3 focus:outline-none"
          id="nav-logo"
        >
          <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-[#1b1b22] to-[#0a0a0d] border border-white/10 flex items-center justify-center overflow-hidden shadow-inner group-hover:border-[#d4af37]/50 transition-colors duration-300">
            <span className="font-serif-luxury text-sm font-bold tracking-widest text-[#f8fafc] group-hover:text-[#d4af37] transition-colors">
              AX
            </span>
            <span className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-60"></span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-lg tracking-wider text-white">
                AXÉ <span className="text-[#d4af37]">IA</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.22em] text-slate-400 font-medium hidden sm:block">
              Global Digital Studio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] tracking-wide font-medium text-slate-300">
          <button
            onClick={() => scrollToSection('what-we-do')}
            className="hover:text-white transition-colors duration-200 cursor-pointer"
            id="nav-link-services"
          >
            {t.nav.services}
          </button>
          <button
            onClick={() => scrollToSection('difference')}
            className="hover:text-white transition-colors duration-200 cursor-pointer"
            id="nav-link-difference"
          >
            {t.nav.difference}
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="hover:text-white transition-colors duration-200 cursor-pointer"
            id="nav-link-portfolio"
          >
            {t.nav.portfolio}
          </button>
          <button
            onClick={() => scrollToSection('process')}
            className="hover:text-white transition-colors duration-200 cursor-pointer"
            id="nav-link-process"
          >
            {t.nav.process}
          </button>
          <button
            onClick={() => scrollToSection('international')}
            className="hover:text-white transition-colors duration-200 cursor-pointer"
            id="nav-link-international"
          >
            {t.nav.international}
          </button>
          <button
            onClick={() => scrollToSection('technology')}
            className="hover:text-white transition-colors duration-200 cursor-pointer"
            id="nav-link-technology"
          >
            {t.nav.technology}
          </button>
        </nav>

        {/* Right Action: Language Selector & CTA */}
        <div className="flex items-center gap-3">
          {/* Language Selector Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-xs text-slate-200 font-medium transition-all duration-200"
              id="language-selector-button"
              aria-label="Select Language"
              aria-expanded={langDropdownOpen}
            >
              <span className="text-sm">{activeOption.flag}</span>
              <span className="hidden sm:inline tracking-wider font-semibold">{activeOption.shortLabel}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {langDropdownOpen && (
              <div
                id="language-dropdown-menu"
                className="absolute right-0 mt-2 w-52 rounded-xl bg-[#0b0b10] border border-white/[0.12] shadow-[0_20px_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl py-1.5 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
              >
                <div className="px-3 py-1.5 text-[10px] uppercase tracking-widest text-slate-400 border-b border-white/[0.06]">
                  {t.footer.languagesTitle}
                </div>
                {languageOptions.map((option) => (
                  <button
                    key={option.code}
                    onClick={() => {
                      onLanguageChange(option.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors ${
                      currentLang === option.code
                        ? 'bg-[#d4af37]/15 text-[#d4af37] font-semibold'
                        : 'text-slate-300 hover:bg-white/[0.06] hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="text-base">{option.flag}</span>
                      <span>{option.label}</span>
                    </span>
                    {currentLang === option.code && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Primary CTA Button */}
          <button
            onClick={onOpenProjectModal}
            id="nav-cta-btn"
            className="relative group hidden sm:inline-flex items-center justify-center px-4.5 py-2 rounded-full text-xs font-semibold tracking-wide text-black bg-gradient-to-r from-[#e5c158] via-[#d4af37] to-[#c5a037] hover:brightness-110 shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-black/80" />
              <span>{t.nav.ctaButton}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-black/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.05] transition-colors"
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden fixed inset-x-0 top-[61px] bg-[#07070a]/98 backdrop-blur-2xl border-b border-white/[0.1] px-6 py-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-200">
            <button
              onClick={() => scrollToSection('what-we-do')}
              className="text-left py-2 border-b border-white/[0.05] hover:text-[#d4af37]"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection('difference')}
              className="text-left py-2 border-b border-white/[0.05] hover:text-[#d4af37]"
            >
              {t.nav.difference}
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-left py-2 border-b border-white/[0.05] hover:text-[#d4af37]"
            >
              {t.nav.portfolio}
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-left py-2 border-b border-white/[0.05] hover:text-[#d4af37]"
            >
              {t.nav.process}
            </button>
            <button
              onClick={() => scrollToSection('international')}
              className="text-left py-2 border-b border-white/[0.05] hover:text-[#d4af37]"
            >
              {t.nav.international}
            </button>
            <button
              onClick={() => scrollToSection('technology')}
              className="text-left py-2 border-b border-white/[0.05] hover:text-[#d4af37]"
            >
              {t.nav.technology}
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProjectModal();
              }}
              className="w-full py-3 rounded-xl text-center font-semibold text-xs tracking-wider uppercase text-black bg-gradient-to-r from-[#e5c158] to-[#c5a037] shadow-lg flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-black/80" />
              <span>{t.nav.ctaButton}</span>
            </button>

            <div className="flex items-center justify-between pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#d4af37]" />
                {activeOption.label}
              </span>
              <span className="text-emerald-400 text-[11px] font-medium">● Hubs Ativos</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
