/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { ProductsSection } from './components/ProductsSection';
import { AboutSection } from './components/AboutSection';
import { CalculatorSection } from './components/CalculatorSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { WhatsAppIcon } from './components/SocialIcons';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string>("PAVER INTERTRAVADO");
  const [selectedDimensionsForQuote, setSelectedDimensionsForQuote] = useState<string>("20cm x 10cm x 06cm");

  const handleOpenQuote = (productName?: string, dimensions?: string) => {
    if (productName) {
      setSelectedProductForQuote(productName);
    }
    if (dimensions) {
      setSelectedDimensionsForQuote(dimensions);
    }
    setIsQuoteModalOpen(true);
  };

  const handleQuoteWithCalc = (data: { product: string; area: number }) => {
    setSelectedProductForQuote(data.product);
    setIsQuoteModalOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsAppFloating = () => {
    const message = encodeURIComponent("Olá! Estou no site da Mixbloco e gostaria de atendimento.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#f48120] selection:text-white font-sans">
      {/* 
        HERO SECTION - Identical to provided screenshot:
        - Logo: Mixbloco
        - Nav: HOME | QUEM SOMOS | PRODUTOS | SERVIÇOS | PROJETOS | CONTATOS
        - Button: ORÇAMENTOS
        - Background: Pavement with gloves, mallet and tape measure
        - Slate-navy dark overlay
        - Title: SOLUÇÕES EM PRÉ-MOLDADOS
        - Subtitle: AQUI VOCÊ ENCONTRA O MELHOR ATENDIMENTO
        - 3 Orange Social Icons: Facebook, Instagram, WhatsApp
        - Bottom triangle notch cutout pointing into the white area
      */}
      <Hero 
        onOpenQuote={() => handleOpenQuote()} 
        onNavigate={handleNavigate}
      />

      {/* Supporting Sections */}
      <main>
        {/* Products Catalog */}
        <ProductsSection onSelectProduct={(name, dims) => handleOpenQuote(name, dims)} />

        {/* About Us & Services */}
        <AboutSection onOpenQuote={() => handleOpenQuote()} />

        {/* Interactive Paver & Concrete Calculator */}
        <CalculatorSection onQuoteWithCalc={handleQuoteWithCalc} />

        {/* Orçamento & Contatos Section (Identical to image with #contatos anchor) */}
        <ContactSection />
      </main>

      {/* Institutional Footer */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* Interactive Quick Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
        initialProduct={selectedProductForQuote}
        initialDimensions={selectedDimensionsForQuote}
      />

      {/* Floating WhatsApp Quick Action */}
      <aside aria-label="Atendimento rápido" className="fixed bottom-6 right-6 z-40">
        <button
          onClick={openWhatsAppFloating}
          type="button"
          className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-4 focus:ring-green-400/40"
          aria-label="Falar no WhatsApp"
        >
          <WhatsAppIcon className="w-6 h-6 fill-current" />
          <span className="hidden sm:inline-block font-bold text-xs uppercase tracking-wider">
            WhatsApp
          </span>
        </button>
      </aside>
    </div>
  );
}
