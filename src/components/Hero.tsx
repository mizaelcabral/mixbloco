import React, { useState } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';

interface HeroProps {
  onOpenQuote: () => void;
  onNavigate?: (sectionId: string) => void;
}

export function Hero({ onOpenQuote, onNavigate }: HeroProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoUrl = "https://content.app-sources.com/s/9665783212256127/uploads/Images/C%C3%B3pia_de_MIXBLOCO4-3112007.png";
  const bgUrl = "/images/mixbloco-background-image.webp";

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "QUEM SOMOS", href: "#quem-somos" },
    { label: "PRODUTOS", href: "#produtos" },
    { label: "SERVIÇOS", href: "#servicos" },
    { label: "PROJETOS", href: "#projetos" },
    { label: "CONTATOS", href: "#contatos" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    if (onNavigate) {
      onNavigate(targetId);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Vim através do site da Mixbloco e gostaria de solicitar um orçamento para soluções em pré-moldados.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section 
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-between bg-slate-900 overflow-hidden select-none"
    >
      {/* Background Image */}
      <img
        src={bgUrl}
        alt="Mixbloco Background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        loading="eager"
      />

      {/* Dark Slate-Navy Overlay */}
      <div 
        className="absolute inset-0 bg-[#0f1d2e]/78 transition-opacity duration-300" 
        style={{
          backdropFilter: 'contrast(102%) brightness(96%)',
        }}
        aria-hidden="true" 
      />

      {/* Top Header / Navigation Bar */}
      <header className="relative z-30 w-full px-4 sm:px-6 md:px-10 lg:px-16 pt-5 md:pt-7">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center transition-opacity hover:opacity-90 focus:outline-none"
            title="Mixbloco - Soluções em Pré-Moldados"
          >
            <img 
              src={logoUrl} 
              alt="Mixbloco Logo" 
              className="h-9 sm:h-11 md:h-12 w-auto object-contain drop-shadow-sm"
              loading="eager"
            />
          </a>

          {/* Desktop Navigation Links with pipe separators */}
          <nav className="hidden lg:flex items-center text-white text-[13px] font-semibold tracking-wider">
            {navItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-2.5 py-1 text-white hover:text-[#f48120] transition-colors duration-200 focus:outline-none focus:text-[#f48120]"
                >
                  {item.label}
                </a>
                {index < navItems.length - 1 && (
                  <span className="text-white/70 select-none text-xs font-normal" aria-hidden="true">
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Right Action: ORÇAMENTOS button & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="hidden sm:inline-block border border-white text-white font-bold text-xs md:text-sm tracking-wider px-5 md:px-7 py-2 md:py-2.5 rounded-none uppercase transition-all duration-200 hover:bg-white hover:text-slate-900 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/80 cursor-pointer shadow-sm"
            >
              ORÇAMENTOS
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#f48120] focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-slate-950/95 backdrop-blur-md border border-white/10 rounded-lg p-5 shadow-2xl transition-all duration-200 animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-white font-semibold text-sm tracking-wider py-2 border-b border-white/5 hover:text-[#f48120] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full text-center border border-white text-white font-bold text-sm tracking-wider py-2.5 uppercase hover:bg-white hover:text-slate-900 transition-colors"
                >
                  SOLICITAR ORÇAMENTO
                </button>
                <button
                  onClick={openWhatsApp}
                  className="w-full flex items-center justify-center gap-2 bg-[#f48120] text-white font-bold text-sm tracking-wider py-2.5 uppercase hover:bg-[#e07217] transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WHATSAPP DIRETO
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Center Body */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-7xl mx-auto">
        
        {/* Main Title: SOLUÇÕES EM PRÉ-MOLDADOS */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] font-black uppercase text-white tracking-tight leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] whitespace-nowrap">
          SOLUÇÕES EM PRÉ-MOLDADOS
        </h1>

        {/* Subtitle: AQUI VOCÊ ENCONTRA O MELHOR ATENDIMENTO */}
        <p className="mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm md:text-lg lg:text-xl font-bold uppercase tracking-wider sm:tracking-widest text-[#f48120] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          AQUI VOCÊ ENCONTRA O MELHOR ATENDIMENTO
        </p>

        {/* 3 Orange Square Social Buttons */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 mt-5 sm:mt-6 md:mt-7">
          {/* Facebook Button */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 sm:w-10 sm:h-10 bg-[#f48120] text-white rounded-[3px] flex items-center justify-center transition-all duration-200 hover:bg-[#e07217] hover:scale-105 active:scale-95 shadow-md focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Facebook da Mixbloco"
            title="Facebook"
          >
            <FacebookIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
          </a>

          {/* Instagram Button */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 sm:w-10 sm:h-10 bg-[#f48120] text-white rounded-[3px] flex items-center justify-center transition-all duration-200 hover:bg-[#e07217] hover:scale-105 active:scale-95 shadow-md focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Instagram da Mixbloco"
            title="Instagram"
          >
            <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </a>

          {/* WhatsApp Button */}
          <button
            type="button"
            onClick={openWhatsApp}
            className="w-9 h-9 sm:w-10 sm:h-10 bg-[#f48120] text-white rounded-[3px] flex items-center justify-center transition-all duration-200 hover:bg-[#e07217] hover:scale-105 active:scale-95 shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Fale conosco no WhatsApp"
            title="WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
          </button>
        </div>
      </div>

      {/* Bottom Notch / Triangle Cutout Divider - Identical to Image */}
      {/* The white section starts right below, and in the middle the dark hero background notches downward */}
      <div className="relative z-20 w-full pointer-events-none">
        <div className="w-full flex items-end">
          {/* Left horizontal white bar */}
          <div className="flex-1 bg-white h-4 sm:h-5 md:h-6" />
          
          {/* Center triangle notch that reveals the hero background below */}
          <div className="shrink-0 w-10 sm:w-12 md:w-14 h-4 sm:h-5 md:h-6 overflow-hidden">
            <svg 
              viewBox="0 0 48 20" 
              className="w-full h-full block fill-white" 
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* White polygon leaving a central downward V cutout (0,0 -> 24,18 -> 48,0) empty */}
              <polygon points="0,0 24,18 48,0 48,20 0,20" />
            </svg>
          </div>

          {/* Right horizontal white bar */}
          <div className="flex-1 bg-white h-4 sm:h-5 md:h-6" />
        </div>
      </div>
    </section>
  );
}
