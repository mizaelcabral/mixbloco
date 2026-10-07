import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';

interface FooterProps {
  onOpenQuote: () => void;
}

export function Footer({ onOpenQuote }: FooterProps) {
  const logoUrl = "https://content.app-sources.com/s/9665783212256127/uploads/Images/C%C3%B3pia_de_MIXBLOCO4-3112007.png";
  const bgUrl = "/images/mixbloco-background-image.webp";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Estou no site da Mixbloco e gostaria de tirar dúvidas e solicitar atendimento.");
    window.open(`https://wa.me/5583986538607?text=${message}`, '_blank');
  };

  return (
    <footer id="rodape" className="relative bg-[#0b1624] text-slate-300 border-t border-slate-800 overflow-hidden">
      {/* Background Image from Hero */}
      <img
        src={bgUrl}
        alt="Mixbloco Background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        loading="lazy"
      />
      {/* Dark Slate-Navy Overlay for text contrast */}
      <div 
        className="absolute inset-0 bg-[#0b1624]/90 pointer-events-none" 
        style={{
          backdropFilter: 'contrast(102%) brightness(95%)',
        }}
        aria-hidden="true" 
      />

      {/* Top Banner / Callout */}
      <div className="relative z-10 bg-[#0f1d2e]/85 backdrop-blur-xs border-b border-slate-800/80 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
              Pronto para iniciar sua obra com a Mixbloco?
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Atendimento ágil, cálculo técnico e entrega rápida para sua construção.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="border border-white text-white font-bold text-xs uppercase tracking-wider px-6 py-3 hover:bg-white hover:text-slate-900 transition-colors cursor-pointer"
            >
              Pedir Orçamento
            </button>
            <button
              onClick={openWhatsApp}
              className="bg-[#f48120] hover:bg-[#e07217] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 flex items-center gap-2 transition-colors cursor-pointer shadow"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              WhatsApp Direto
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <img 
              src={logoUrl} 
              alt="Mixbloco Logo" 
              className="h-10 w-auto object-contain"
            />
            <p className="text-xs text-slate-400 leading-relaxed">
              Mixbloco® - Fabricação e comercialização de artefatos de cimento, pavers intertravados, blocos de concreto e guias pré-moldadas de alta performance.
            </p>
            {/* Social Icons in Orange */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#f48120] text-white rounded-[3px] flex items-center justify-center hover:bg-[#e07217] transition-colors"
                title="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5 fill-current" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#f48120] text-white rounded-[3px] flex items-center justify-center hover:bg-[#e07217] transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={openWhatsApp}
                className="w-8 h-8 bg-[#f48120] text-white rounded-[3px] flex items-center justify-center hover:bg-[#e07217] transition-colors cursor-pointer"
                title="WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
              </button>
            </div>
          </div>

          {/* Col 2: Produtos */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Produtos & Linhas
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#produtos" className="hover:text-[#f48120] transition-colors">Pisos (Intertravados, Drenantes, Sextavado)</a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-[#f48120] transition-colors">Blocos (M15, M10, Meio Bloco, Calhas)</a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-[#f48120] transition-colors">Meio Fio - Guia (100x30x13x10cm e 8x5cm)</a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-[#f48120] transition-colors">Lajota Copacabana (50x50x2cm)</a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-[#f48120] transition-colors">Lajotas Táteis Alerta e Direcional</a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-[#f48120] transition-colors">Lajota Piso Rampa Antiderrapante</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navegação Rápida */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Institucional
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-[#f48120] transition-colors">Página Inicial</a>
              </li>
              <li>
                <a href="#quem-somos" className="hover:text-[#f48120] transition-colors">Quem Somos</a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-[#f48120] transition-colors">Nossos Produtos</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#f48120] transition-colors">Serviços & Logística</a>
              </li>
              <li>
                <a href="#projetos" className="hover:text-[#f48120] transition-colors">Calculadora de Obra</a>
              </li>
              <li>
                <a href="#contatos" className="hover:text-[#f48120] transition-colors">Canais de Contato</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contato & Atendimento com dados oficiais de Cabedelo/PB */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Atendimento de Fábrica
            </h4>
            <div className="flex items-start gap-3 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-[#f48120] shrink-0 mt-0.5" />
              <span>Rua Antônio Francisco de Araújo, s/n, quadra D, Lote R66, Parque Esperança, Cabedelo/PB</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <Phone className="w-4 h-4 text-[#f48120] shrink-0" />
              <span>(83) 3268-5052 / (83) 98653-8607</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <Mail className="w-4 h-4 text-[#f48120] shrink-0" />
              <span>contato@mixbloco.com</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-[#f48120] shrink-0" />
              <span>Segunda a Sexta: 07:30 às 17:30</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} MIXBLOCO® Soluções em Pré-Moldados. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Conformidade ABNT NBR 9781 & NBR 6136</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-800 hover:bg-[#f48120] text-white rounded transition-colors cursor-pointer"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
