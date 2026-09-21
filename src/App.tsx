import React, { useState, useEffect } from 'react';
import { LanguageCode, PortfolioItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatWeDo } from './components/WhatWeDo';
import { OurDifference } from './components/OurDifference';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Process } from './components/Process';
import { International } from './components/International';
import { WhoIsItFor } from './components/WhoIsItFor';
import { Technology } from './components/Technology';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';

export default function App() {
  // Initialize language from path (e.g., /en, /es, /fr, /pt-pt) or fallback to 'pt-pt'
  const getInitialLanguage = (): LanguageCode => {
    if (typeof window === 'undefined') return 'pt-pt';
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();

    if (path.includes('/pt-pt') || hash.includes('pt-pt') || path.includes('/pt') || hash.includes('pt')) return 'pt-pt';
    if (path.includes('/en') || hash.includes('en')) return 'en';
    if (path.includes('/es') || hash.includes('es')) return 'es';
    if (path.includes('/fr') || hash.includes('fr')) return 'fr';

    // Check navigator language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('pt')) return 'pt-pt';
    if (browserLang.startsWith('en')) return 'en';
    if (browserLang.startsWith('es')) return 'es';
    if (browserLang.startsWith('fr')) return 'fr';

    return 'pt-pt';
  };

  const [currentLang, setCurrentLang] = useState<LanguageCode>(getInitialLanguage());
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>(undefined);
  const [selectedProjectForDetail, setSelectedProjectForDetail] = useState<PortfolioItem | null>(null);

  const handleLanguageChange = (lang: LanguageCode) => {
    setCurrentLang(lang);
    try {
      window.history.pushState(null, '', `/${lang}`);
    } catch {
      window.location.hash = `/${lang}`;
    }
    // Update html lang attribute for accessibility
    document.documentElement.lang = lang;
  };

  const handleOpenProjectModal = (serviceId?: string) => {
    setSelectedServiceForModal(serviceId);
    setIsProjectModalOpen(true);
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      'Olá, equipe AXÉ IA! Gostaria de conversar sobre uma experiência digital de alto padrão para o meu negócio.'
    );
    window.open(`https://wa.me/message/RRBL5EX5BJVTN1?text=${text}`, '_blank');
  };

  return (
    <div className="relative min-h-screen bg-[#050507] text-[#f1f5f9] selection:bg-[#d4af37]/30 selection:text-[#fff8e7]">
      {/* Sticky Navigation Bar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onOpenProjectModal={() => handleOpenProjectModal()}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenProjectModal={() => handleOpenProjectModal()}
        />

        {/* Section: O Que Fazemos */}
        <WhatWeDo
          currentLang={currentLang}
          onSelectService={(serviceId) => handleOpenProjectModal(serviceId)}
        />

        {/* Section: Nossa Diferença */}
        <OurDifference currentLang={currentLang} />

        {/* Section: Portfólio */}
        <Portfolio
          currentLang={currentLang}
          onOpenProjectDetail={(project) => setSelectedProjectForDetail(project)}
        />

        {/* Section: Testimonials / Avaliações */}
        <Testimonials currentLang={currentLang} />

        {/* Section: Processo */}
        <Process currentLang={currentLang} />

        {/* Section: Internacional */}
        <International currentLang={currentLang} />

        {/* Section: Para Quem É */}
        <WhoIsItFor currentLang={currentLang} />

        {/* Section: Tecnologia */}
        <Technology currentLang={currentLang} />

        {/* Section: CTA Final */}
        <FinalCTA
          currentLang={currentLang}
          onOpenProjectModal={() => handleOpenProjectModal()}
          onOpenWhatsApp={handleOpenWhatsApp}
        />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onOpenProjectModal={() => handleOpenProjectModal()}
      />

      {/* Interactive Project Inquiry Modal */}
      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        currentLang={currentLang}
        initialServiceId={selectedServiceForModal}
      />

      {/* Interactive Project Detail Presentation Modal */}
      <ProjectDetailModal
        project={selectedProjectForDetail}
        onClose={() => setSelectedProjectForDetail(null)}
        onSelectForProposal={(projectName) => handleOpenProjectModal(projectName)}
        currentLang={currentLang}
      />
    </div>
  );
}
