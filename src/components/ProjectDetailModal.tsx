import React from 'react';
import { X, ExternalLink, CheckCircle2, Sparkles, Globe, Calendar, ArrowRight } from 'lucide-react';
import { PortfolioItem, LanguageCode } from '../types';

interface ProjectDetailModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onSelectForProposal: (projectName: string) => void;
  currentLang: LanguageCode;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onSelectForProposal,
}) => {
  if (!project) return null;

  return (
    <div
      id="project-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-content"
        className="relative w-full max-w-4xl rounded-2xl bg-[#0a0a0f] border border-white/[0.12] shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
          aria-label="Close Project Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Visual Presentation Header */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent"></div>

          {/* Badges Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#d4af37] mb-2 uppercase tracking-widest">
                <span>{project.categoryLabel}</span>
                <span>•</span>
                <span>{project.country}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                {project.title}
              </h3>
            </div>

            <div className="text-xs font-mono text-slate-300 bg-black/60 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
              Cliente: {project.client}
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Key Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center"
              >
                <div className="text-2xl sm:text-3xl font-black text-[#d4af37] font-display">
                  {metric.value}
                </div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Description & Tangible Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/[0.08]">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-3">
                Visão & Arquitetura
              </h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">
                Resultados Obtidos
              </h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {project.results}
              </p>
            </div>
          </div>

          {/* Deliverables & Technologies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/[0.08]">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                Entregas Realizadas
              </h4>
              <ul className="space-y-2">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                Stack & Engenharia
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md text-xs font-mono font-medium text-slate-300 bg-white/[0.05] border border-white/[0.08]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Quer uma experiência equivalente para o seu negócio?
            </span>

            <button
              onClick={() => {
                onSelectForProposal(project.title);
                onClose();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-full font-bold text-xs tracking-wider uppercase text-black bg-gradient-to-r from-[#ebd074] via-[#d4af37] to-[#c19b2e] hover:brightness-110 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-black/80" />
              <span>Solicitar Projeto Equivalente</span>
              <ArrowRight className="w-4 h-4 text-black/80" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
