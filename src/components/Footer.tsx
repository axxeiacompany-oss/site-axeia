import React from 'react';
import { Globe, ArrowUpRight } from 'lucide-react';
import { LanguageCode } from '../types';
import { languageOptions, translations } from '../data/translations';

interface FooterProps {
  currentLang: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  onOpenProjectModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onLanguageChange,
  onOpenProjectModal,
}) => {
  const t = translations[currentLang];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-[#030305] border-t border-white/[0.08] pt-20 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1b1b22] to-[#0a0a0d] border border-white/10 flex items-center justify-center">
                <span className="font-serif-luxury text-sm font-bold text-white">AX</span>
              </div>
              <span className="font-display font-black text-xl tracking-wider text-white">
                AXÉ <span className="text-[#d4af37]">IA</span>
              </span>
            </div>

            <p className="text-slate-300 text-sm font-medium mb-4 max-w-sm">
              {t.footer.tagline}
            </p>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mb-6">
              Estúdio de tecnologia de luxo e engenharia digital para empresas, marcas e líderes no Brasil e no exterior.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>São Paulo • Lisboa • Paris • Miami</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => scrollToSection('what-we-do')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('difference')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.difference}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.portfolio}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('process')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.process}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('technology')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.technology}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Languages */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
              {t.footer.languagesTitle}
            </h4>
            <ul className="space-y-2">
              {languageOptions.map((lang) => (
                <li key={lang.code}>
                  <button
                    onClick={() => onLanguageChange(lang.code)}
                    className={`flex items-center gap-2 transition-colors cursor-pointer ${
                      currentLang === lang.code
                        ? 'text-[#d4af37] font-semibold'
                        : 'hover:text-white'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Engagement */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
              Contato Executivo
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={onOpenProjectModal}
                  className="text-white hover:text-[#d4af37] transition-colors flex items-center gap-1 font-semibold cursor-pointer"
                >
                  <span>Iniciar Projeto</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#d4af37]" />
                </button>
              </li>
              <li className="pt-2">
                <a
                  href="mailto:axxeiacompany@gmail.com"
                  className="text-white hover:text-[#d4af37] transition-colors font-mono text-xs flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>axxeiacompany@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/message/RRBL5EX5BJVTN1"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors font-mono text-xs flex items-center gap-1.5"
                >
                  <span>WhatsApp Oficial Diretoria</span>
                  <span>↗</span>
                </a>
              </li>
              <li className="pt-2 text-[11px] text-slate-500">
                Atendimento confidencial e acordos de NDA disponíveis.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Rights Row */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} AXÉ IA. {t.footer.rights}
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">{t.footer.privacy}</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">{t.footer.terms}</span>
            <span>•</span>
            <span className="text-emerald-400 font-mono">Status: 100% Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
