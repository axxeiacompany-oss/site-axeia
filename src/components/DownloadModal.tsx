import React, { useState } from 'react';
import { Download, Check, Sparkles, FolderArchive, HelpCircle, ExternalLink, X, FileCode, Copy, Image } from 'lucide-react';

export const DownloadModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [downloadedZip, setDownloadedZip] = useState(false);
  const [downloadedHtml, setDownloadedHtml] = useState(false);
  const [copied, setCopied] = useState(false);

  const downloadHtmlFile = async () => {
    try {
      const response = await fetch('/axe-ia.html');
      const text = await response.text();
      const blob = new Blob([text], { type: 'text/html;charset=utf-8' });
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'index.html';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
      setDownloadedHtml(true);
      setTimeout(() => setDownloadedHtml(false), 4000);
    } catch (err) {
      console.error('HTML Download error:', err);
      window.location.href = '/axe-ia.html';
    }
  };

  const triggerDownloadZip = async () => {
    try {
      const response = await fetch('/axe-ia-dist.zip');
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'axe-ia-dist.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
      setDownloadedZip(true);
      setTimeout(() => setDownloadedZip(false), 4000);
    } catch (err) {
      console.error('Download error:', err);
      window.location.href = '/axe-ia-dist.zip';
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 animate-bounce hover:animate-none">
        <button
          onClick={() => setIsOpen(true)}
          id="floating-download-btn"
          className="flex items-center gap-2.5 px-4.5 py-3 rounded-full bg-[#121218] border border-[#d4af37]/60 text-white shadow-[0_10px_30px_rgba(212,175,55,0.35)] hover:border-[#d4af37] hover:scale-105 transition-all duration-200 cursor-pointer text-xs font-bold"
        >
          <FileCode className="w-4 h-4 text-[#d4af37]" />
          <span>Baixar em HTML</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        </button>
      </div>

      {/* Modal with instructions and one-click download */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-xl rounded-2xl bg-[#0d0d14] border border-white/[0.12] shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-6 sm:p-8 text-left max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 text-slate-300 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                <FileCode className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white font-display">
                  Download do Site em HTML
                </h3>
                <p className="text-xs text-[#d4af37] font-mono">
                  Arquivo único autossuficiente (HTML + CSS + JS unificados)
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Aqui você pode baixar diretamente o arquivo <strong className="text-white">index.html</strong> completo. Ele contém tudo embutido num único arquivo: design, animações, sistema de 5 idiomas, formulários e lógica executiva.
            </p>

            {/* Main Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <button
                onClick={downloadHtmlFile}
                id="modal-direct-download-html-action"
                className="py-4 px-4 rounded-xl font-bold text-xs tracking-wider uppercase text-black bg-gradient-to-r from-[#ebd074] via-[#d4af37] to-[#c19b2e] hover:brightness-110 shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {downloadedHtml ? (
                  <>
                    <Check className="w-4 h-4 text-black" />
                    <span>HTML Baixado!</span>
                  </>
                ) : (
                  <>
                    <FileCode className="w-4 h-4 text-black" />
                    <span>Baixar index.html</span>
                  </>
                )}
              </button>

              <button
                onClick={triggerDownloadZip}
                id="modal-direct-download-zip-action"
                className="py-4 px-4 rounded-xl font-bold text-xs tracking-wider uppercase text-slate-200 bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {downloadedZip ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>ZIP Baixado!</span>
                  </>
                ) : (
                  <>
                    <FolderArchive className="w-4 h-4 text-[#d4af37]" />
                    <span>Baixar Pacote .ZIP</span>
                  </>
                )}
              </button>
            </div>

            {/* Logo Assets Section */}
            <div className="mb-6 rounded-xl bg-black/40 border border-[#d4af37]/20 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Image className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Logos Oficiais AXÉ IA (Vetoriais SVG)</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono">Pronto p/ uso</span>
              </div>

              {/* Preview box */}
              <div className="w-full bg-[#050507] rounded-lg p-3 mb-3 border border-white/10 flex items-center justify-center">
                <img src="/axe-ia-logo.svg" alt="AXÉ IA Logo Preview" className="h-12 w-auto object-contain" />
              </div>

              {/* Action buttons for logos */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <a
                  href="/axe-ia-logo.svg"
                  download="axe-ia-logo.svg"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-[#d4af37]/40 text-center font-medium text-slate-200 transition-all flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3 h-3 text-[#d4af37]" />
                  <span>Logo Completa</span>
                </a>

                <a
                  href="/axe-ia-logo-transparent.svg"
                  download="axe-ia-logo-transparent.svg"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-[#d4af37]/40 text-center font-medium text-slate-200 transition-all flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3 h-3 text-[#d4af37]" />
                  <span>Fundo Transparente</span>
                </a>

                <a
                  href="/axe-ia-icon.svg"
                  download="axe-ia-icon.svg"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-[#d4af37]/40 text-center font-medium text-slate-200 transition-all flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3 h-3 text-[#d4af37]" />
                  <span>Ícone / Favicon</span>
                </a>
              </div>
            </div>

            {/* Instructions */}
            <div className="rounded-xl bg-white/[0.03] border border-white/[0.08] p-4 text-xs space-y-4">
              <div>
                <div className="font-bold text-white flex items-center gap-2 mb-2">
                  <HelpCircle className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Como subir na VERCEL (Recomendado):</span>
                </div>
                <ol className="list-decimal list-inside space-y-1.5 text-slate-300">
                  <li>
                    O projeto já inclui o arquivo <code className="text-[#d4af37]">vercel.json</code> otimizado com build do Vite e rotas SPA.
                  </li>
                  <li>
                    Basta subir a pasta do projeto para seu <strong>GitHub</strong> ou arrastar a pasta compilada na CLI da Vercel (<code className="text-white">vercel deploy</code>).
                  </li>
                  <li>
                    Na Vercel, o framework selecionado é <strong>Vite</strong>, o comando de build é <code className="text-white">npm run build</code> e o diretório de saída é <code className="text-[#d4af37]">dist</code>.
                  </li>
                </ol>
              </div>

              <div className="pt-2 border-t border-white/[0.06]">
                <div className="font-bold text-white flex items-center gap-2 mb-2">
                  <ExternalLink className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Como subir no NETLIFY DROP (Sem código, 10 segundos):</span>
                </div>
                <ol className="list-decimal list-inside space-y-1.5 text-slate-300">
                  <li>
                    Clique no botão <strong className="text-white">"Baixar index.html"</strong> acima.
                  </li>
                  <li>
                    Crie uma pasta vazia no seu computador e coloque o arquivo <code className="text-[#d4af37]">index.html</code> dentro dela.
                  </li>
                  <li>
                    Acesse <a href="https://app.netlify.com/drop" target="_blank" rel="noreferrer" className="text-[#d4af37] underline font-medium inline-flex items-center gap-0.5">Netlify Drop <ExternalLink className="w-3 h-3 inline" /></a> e arraste a pasta. Seu site estará no ar imediatamente!
                  </li>
                </ol>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-500">
              <span>Arquivo: <strong className="font-mono text-slate-300">index.html</strong></span>
              <a
                href="/axe-ia.html"
                target="_blank"
                rel="noreferrer"
                className="text-[#d4af37] hover:underline flex items-center gap-1 font-mono"
              >
                <span>Visualizar HTML em nova aba</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
