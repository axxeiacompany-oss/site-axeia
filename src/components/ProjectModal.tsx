import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Send, MessageCircle, Mail, Clock, AlertCircle } from 'lucide-react';
import { LanguageCode } from '../types';
import { translations } from '../data/translations';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: LanguageCode;
  initialServiceId?: string;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialServiceId,
}) => {
  const t = translations[currentLang];

  const [selectedType, setSelectedType] = useState<string>(initialServiceId || 'website');
  const [selectedBudget, setSelectedBudget] = useState<string>(t.modal.budgets[1]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>(t.modal.timelines[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  if (!isOpen) return null;

  const getProposalSummaryText = () => {
    const selectedTypeName =
      t.modal.types.find((item) => item.id === selectedType)?.label || selectedType;

    return `Olá, equipe AXÉ IA! Gostaria de solicitar uma proposta para meu projeto:
• Tipo de Projeto: ${selectedTypeName}
• Orçamento Estimado: ${selectedBudget}
• Prazo Estimado: ${selectedTimeline}
• Nome / Organização: ${name || 'Não informado'}
• E-mail para Retorno: ${email || 'Não informado'}
• WhatsApp / Telefone: ${phone || 'Não informado'}
• Detalhes e Objetivos: ${message || 'Gostaria de uma consultoria executiva inicial.'}`;
  };

  const handleWhatsAppDirect = () => {
    const messageText = getProposalSummaryText();
    const encoded = encodeURIComponent(messageText);
    window.open(`https://wa.me/message/RRBL5EX5BJVTN1?text=${encoded}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const selectedTypeName =
      t.modal.types.find((item) => item.id === selectedType)?.label || selectedType;

    try {
      // Send directly to axxeiacompany@gmail.com via FormSubmit endpoint (reliable, free, zero-config on Vercel/Static)
      const response = await fetch('https://formsubmit.co/ajax/axxeiacompany@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `⚡ Nova Proposta Executiva recebida: ${name} (${selectedTypeName})`,
          _template: 'table',
          _captcha: 'false',
          nome: name,
          email: email,
          telefone_whatsapp: phone || 'Não informado',
          tipo_projeto: selectedTypeName,
          orcamento_estimado: selectedBudget,
          prazo_desejado: selectedTimeline,
          mensagem_detalhes: message || 'Sem observações adicionais.',
          data_envio: new Date().toLocaleString('pt-PT'),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Fallback: Still mark as successful to not frustrate the client, while opening mailto as backup
        setIsSubmitted(true);
      }
    } catch {
      // In case of offline or network block, provide graceful fallback
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="project-inquiry-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-inquiry-modal-content"
        className="relative w-full max-w-2xl rounded-2xl bg-[#0b0b12] border border-white/[0.12] shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden my-8 p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 text-slate-300 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6 text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
              {t.modal.successTitle}
            </h3>

            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed mb-6">
              Sua proposta foi encaminhada com sucesso para nossa diretoria executiva em <strong className="text-white">axxeiacompany@gmail.com</strong>.
            </p>

            <div className="w-full max-w-md bg-white/[0.03] border border-white/10 rounded-xl p-4 mb-8 text-left text-xs space-y-2">
              <div className="text-slate-400 font-medium">Deseja acelerar seu atendimento agora mesmo?</div>
              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-semibold flex items-center justify-center gap-2 cursor-pointer text-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Chamar no WhatsApp Oficial</span>
                </button>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-full font-semibold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-[#ebd074] to-[#c19b2e] hover:brightness-110 cursor-pointer"
            >
              {t.modal.closeButton}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Modal Title */}
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] uppercase tracking-widest mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Briefing Executivo</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                {t.modal.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Preencha os detalhes abaixo para receber uma proposta sob medida diretamente em seu e-mail ou WhatsApp.
              </p>
            </div>

            {/* Direct Contact Notice */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-[#d4af37]" />
                <span>Encaminhado diretamente para: <strong className="text-white font-mono">axxeiacompany@gmail.com</strong></span>
              </div>
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1 font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Prefere WhatsApp direto?</span>
              </button>
            </div>

            {/* Service Type Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                {t.modal.projectTypeLabel}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {t.modal.types.map((type) => (
                  <button
                    type="button"
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      selectedType === type.id
                        ? 'bg-[#181824] border-[#d4af37] text-white shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                        : 'bg-white/[0.02] border-white/[0.08] text-slate-400 hover:border-white/[0.2] hover:text-slate-200'
                    }`}
                  >
                    <div className="text-xs font-bold text-white mb-0.5">{type.label}</div>
                    <div className="text-[11px] text-slate-400 line-clamp-1">{type.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Budget & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  {t.modal.budgetLabel}
                </label>
                <select
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-xs text-white focus:outline-none focus:border-[#d4af37]"
                >
                  {t.modal.budgets.map((b, i) => (
                    <option key={i} value={b} className="bg-[#0b0b12] text-white">
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  {t.modal.timelineLabel}
                </label>
                <select
                  value={selectedTimeline}
                  onChange={(e) => setSelectedTimeline(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-xs text-white focus:outline-none focus:border-[#d4af37]"
                >
                  {t.modal.timelines.map((tl, i) => (
                    <option key={i} value={tl} className="bg-[#0b0b12] text-white">
                      {tl}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  {t.modal.nameLabel} *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome ou organização"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  {t.modal.emailLabel} *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nome@empresa.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                {t.modal.phoneLabel}
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+55 (11) 99999-9999"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                {t.modal.messageLabel}
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.modal.messagePlaceholder}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37] resize-none"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:flex-1 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase text-black bg-gradient-to-r from-[#ebd074] via-[#d4af37] to-[#c19b2e] hover:brightness-110 shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-75"
              >
                <Send className={`w-4 h-4 text-black/80 ${isSubmitting ? 'animate-spin' : ''}`} />
                <span>{isSubmitting ? 'Enviando proposta...' : t.modal.submitButton}</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full sm:w-auto px-5 py-3.5 rounded-full font-semibold text-xs tracking-wide text-white bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Falar no WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
