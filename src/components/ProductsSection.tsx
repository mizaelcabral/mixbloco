import React, { useState } from 'react';
import { ArrowRight, Search, CheckCircle2, ShieldCheck, Filter } from 'lucide-react';
import { ProductVisual } from './ProductVisual';

export interface ProductItem {
  id: string;
  name: string;
  category: 'Blocos' | 'Pisos' | 'Meio Fio - Guia' | 'Lajota';
  dimensoes: string;
  resistencia: string;
  consumo: string;
  uso: string;
  cores?: string[];
  featured?: boolean;
}

export const CLIENT_PRODUCTS: ProductItem[] = [
  // --- BLOCOS (5 produtos) ---
  {
    id: "bloco-inteiro-m15",
    name: "BLOCO INTEIRO M15",
    category: "Blocos",
    dimensoes: "14cm x 19cm x 39cm",
    resistencia: "Classe M15 (Norma ABNT NBR 6136)",
    consumo: "12,5 peças por m²",
    uso: "Alvenaria estrutural e vedação de alta resistência para galpões, prédios e residências.",
    cores: ["Cinza Natural"],
    featured: true,
  },
  {
    id: "bloco-inteiro-m10",
    name: "BLOCO INTEIRO M10",
    category: "Blocos",
    dimensoes: "9cm x 19cm x 39cm",
    resistencia: "Classe M10 (Norma ABNT NBR 6136)",
    consumo: "12,5 peças por m²",
    uso: "Vedação e paredes divisórias internas, reduzindo espessura e aumentando área útil.",
    cores: ["Cinza Natural"],
  },
  {
    id: "meio-bloco-m10",
    name: "MEIO BLOCO M10",
    category: "Blocos",
    dimensoes: "14cm x 19cm x 19cm",
    resistencia: "Classe M10 / M15",
    consumo: "Peça modular de compensação",
    uso: "Arremates e modulação precisa de vãos de portas e janelas sem necessidade de quebra.",
    cores: ["Cinza Natural"],
  },
  {
    id: "calha-m15-33",
    name: "CALHA M15",
    category: "Blocos",
    dimensoes: "14cm x 19cm x 33cm",
    resistencia: "Conforme norma ABNT NBR 6136",
    consumo: "3,0 peças por metro linear",
    uso: "Bloco canaleta em U para canalização de armaduras, vergas, contravergas e cintas de amarração.",
    cores: ["Cinza Natural"],
  },
  {
    id: "calha-m15-29",
    name: "CALHA M15",
    category: "Blocos",
    dimensoes: "09cm x 19cm x 29cm",
    resistencia: "Conforme norma ABNT NBR 6136",
    consumo: "3,4 peças por metro linear",
    uso: "Canaleta estreita de 9cm para respaldo e vigas de amarração em paredes esbeltas.",
    cores: ["Cinza Natural"],
  },

  // --- PISOS (7 produtos) ---
  {
    id: "paver-intertravado-06cm",
    name: "PAVER INTERTRAVADO",
    category: "Pisos",
    dimensoes: "20cm x 10cm x 06cm",
    resistencia: "35 MPa (Norma ABNT NBR 9781)",
    consumo: "50 peças por m²",
    uso: "Calçadas, garagens residenciais, áreas comerciais e tráfego veicular leve.",
    cores: ["Natural", "Grafite", "Vermelho", "Amarelo"],
    featured: true,
  },
  {
    id: "paver-intertravado-08cm",
    name: "PAVER INTERTRAVADO",
    category: "Pisos",
    dimensoes: "20cm x 10cm x 08cm",
    resistencia: "35 MPa a 50 MPa",
    consumo: "50 peças por m²",
    uso: "Vias urbanas, pátios de carretas, postos de combustíveis e tráfego pesado.",
    cores: ["Natural", "Grafite", "Vermelho", "Amarelo"],
    featured: true,
  },
  {
    id: "paver-intertravado-04cm",
    name: "PAVER INTERTRAVADO",
    category: "Pisos",
    dimensoes: "20cm x 10cm x 04cm",
    resistencia: "35 MPa",
    consumo: "50 peças por m²",
    uso: "Passeios públicos, calçadas de condomínio, praças e áreas exclusivas de pedestres.",
    cores: ["Natural", "Grafite", "Vermelho", "Amarelo"],
  },
  {
    id: "paver-interface-06cm",
    name: "PAVER INTERFACE (16 FACES / ONDA)",
    category: "Pisos",
    dimensoes: "Espessura 06cm",
    resistencia: "35 MPa / 50 MPa",
    consumo: "35 peças por m²",
    uso: "Pisos industriais e estacionamentos com máxima retenção e travamento lateral multidirecional.",
    cores: ["Natural", "Vermelho", "Grafite"],
  },
  {
    id: "piso-drenante-06cm",
    name: "PISO DRENANTE - PERMEÁVEL",
    category: "Pisos",
    dimensoes: "20cm x 10cm x 06cm",
    resistencia: "Matriz porosa drenante",
    consumo: "50 peças por m²",
    uso: "Solução sustentável: infiltra 100% da água da chuva no solo, evitando poças e enchentes.",
    cores: ["Cinza Natural"],
  },
  {
    id: "piso-drenante-08cm",
    name: "PISO DRENANTE - PERMEÁVEL",
    category: "Pisos",
    dimensoes: "20cm x 10cm x 08cm",
    resistencia: "Matriz porosa drenante reforçada",
    consumo: "50 peças por m²",
    uso: "Estacionamentos ecológicos com veículos em movimento e exigência de coeficiente permeável.",
    cores: ["Cinza Natural"],
  },
  {
    id: "piso-sextavado-8cm",
    name: "PISO SEXTAVADO 8CM",
    category: "Pisos",
    dimensoes: "25cm x 08cm",
    resistencia: "35 MPa",
    consumo: "19 peças por m²",
    uso: "Loteamentos fechados, ruas municipais, pátios rurais e grandes praças.",
    cores: ["Natural", "Vermelho"],
  },

  // --- MEIO FIO - GUIA (2 produtos) ---
  {
    id: "meio-fio-guia-padrao",
    name: "MEIO FIO - GUIA",
    category: "Meio Fio - Guia",
    dimensoes: "100cm x 30cm x 13cm x 10cm",
    resistencia: "25 MPa a 35 MPa",
    consumo: "1 peça por metro linear",
    uso: "Guia de concreto com chanfro de acabamento para retenção e contenção do pavimento intertravado.",
    cores: ["Cinza Concreto"],
    featured: true,
  },
  {
    id: "meio-fio-guia-leve",
    name: "MEIO FIO - GUIA",
    category: "Meio Fio - Guia",
    dimensoes: "100cm x 30cm x 08cm x 05cm",
    resistencia: "25 MPa",
    consumo: "1 peça por metro linear",
    uso: "Guia de jardim, delimitação de canteiros, ciclovias e calçadas internas residenciais.",
    cores: ["Cinza Concreto"],
  },

  // --- LAJOTA (6 produtos) ---
  {
    id: "lajota-copacabana",
    name: "LAJOTA COPACABANA",
    category: "Lajota",
    dimensoes: "50cm x 50cm x 2cm",
    resistencia: "Alta resistência e acabamento nobre",
    consumo: "4 peças por m²",
    uso: "Calçadas decorativas com o tradicional traçado ondulado no estilo calçadão de Copacabana.",
    cores: ["Cinza e Preto / Branco"],
    featured: true,
  },
  {
    id: "lajota-tatil-alerta-25",
    name: "LAJOTA PISO TÁTIL ALERTA",
    category: "Lajota",
    dimensoes: "25cm x 25cm x 2cm",
    resistencia: "Norma ABNT NBR 16537",
    consumo: "16 peças por m²",
    uso: "Placa com semiesferas em relevo para sinalizar rebaixos, semáforos, portas e obstáculos.",
    cores: ["Natural", "Amarelo", "Vermelho"],
  },
  {
    id: "lajota-tatil-alerta-20",
    name: "LAJOTA PISO TÁTIL ALERTA",
    category: "Lajota",
    dimensoes: "20cm x 20cm x 2cm",
    resistencia: "Norma ABNT NBR 16537",
    consumo: "25 peças por m²",
    uso: "Piso tátil de alerta formato 20x20cm para calçadas públicas acessíveis e entradas comerciais.",
    cores: ["Natural", "Amarelo"],
  },
  {
    id: "lajota-tatil-direcional-25",
    name: "LAJOTA TÁTIL DIRECIONAL",
    category: "Lajota",
    dimensoes: "25cm x 25cm x 2cm",
    resistencia: "Norma ABNT NBR 16537",
    consumo: "16 peças por m²",
    uso: "Relevos lineares longitudinais que direcionam o percurso seguro e autônomo do pedestre.",
    cores: ["Natural", "Amarelo", "Vermelho"],
  },
  {
    id: "lajota-piso-rampa",
    name: "LAJOTA PISO RAMPA",
    category: "Lajota",
    dimensoes: "45cm x 45cm x 2cm",
    resistencia: "Antiderrapante de alta aderência",
    consumo: "5 peças por m²",
    uso: "Superfície ranhurada com frisos antiderrapantes para rampas de veículos e pedestres.",
    cores: ["Cinza Natural"],
  },
  {
    id: "lajota-tatil-direcional-20",
    name: "LAJOTA TÁTIL DIRECIONAL",
    category: "Lajota",
    dimensoes: "20cm x 20cm x 2cm",
    resistencia: "Norma ABNT NBR 16537",
    consumo: "25 peças por m²",
    uso: "Piso tátil direcional 20x20cm para sinalização de rotas contínuas em espaços urbanos.",
    cores: ["Natural", "Amarelo"],
  },
];

interface ProductsSectionProps {
  onSelectProduct: (productName: string, dimensions?: string) => void;
}

export function ProductsSection({ onSelectProduct }: ProductsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    { id: 'todos', label: 'Todos os Produtos', count: CLIENT_PRODUCTS.length },
    { id: 'Pisos', label: 'Pisos', count: CLIENT_PRODUCTS.filter(p => p.category === 'Pisos').length },
    { id: 'Blocos', label: 'Blocos', count: CLIENT_PRODUCTS.filter(p => p.category === 'Blocos').length },
    { id: 'Meio Fio - Guia', label: 'Meio Fio - Guia', count: CLIENT_PRODUCTS.filter(p => p.category === 'Meio Fio - Guia').length },
    { id: 'Lajota', label: 'Lajota', count: CLIENT_PRODUCTS.filter(p => p.category === 'Lajota').length },
  ];

  const filteredProducts = CLIENT_PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
    const matchesSearch = 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.dimensoes.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="produtos" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#f48120] mb-2">
            <span className="w-2 h-2 bg-[#f48120]" />
            Catálogo Oficial de Fábrica
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
            Nossos Produtos em Pré-Moldados
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Linha completa de blocos, pisos intertravados, meio-fio e lajotas produzidos com padrão industrial e normas ABNT.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="mb-10 space-y-4">
          
          {/* Category Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1.5 shadow-xs ${
                    isActive
                      ? 'bg-[#0f1d2e] text-white shadow-md ring-2 ring-[#f48120]'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-[#f48120] text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por nome ou medidas (ex: 14x19x39, 20x10x06, tátil, drenante...)"
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#f48120] focus:border-transparent shadow-xs"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600 font-bold"
              >
                ✕
              </button>
            )}
          </div>

          {/* Active Results Count */}
          <div className="text-center text-xs text-slate-500 font-medium">
            Exibindo <span className="font-bold text-slate-800">{filteredProducts.length}</span> produtos no catálogo
          </div>
        </div>

        {/* Product Cards Grid - Formatação Exata que o Cliente Adora */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Product Visual Container (Identical grey photo backdrop from catalog) */}
                <div className="relative h-56 overflow-hidden bg-slate-100 border-b border-slate-100">
                  <ProductVisual 
                    id={item.id}
                    name={item.name}
                    category={item.category}
                    dimensoes={item.dimensoes}
                  />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-[#0f1d2e]/90 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs">
                    {item.category}
                  </div>

                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute top-3 right-3 bg-[#f48120] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs shadow-sm">
                      Destaque
                    </div>
                  )}

                  {/* Dimension pill overlay */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-slate-900 text-xs font-mono font-bold px-2.5 py-1 rounded border border-slate-300/80 shadow-xs">
                    {item.dimensoes}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#f48120] transition-colors leading-snug">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {item.uso}
                  </p>

                  {/* Technical Specifications */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs">
                    <div className="flex justify-between items-center text-slate-700">
                      <span className="font-semibold text-slate-500">Dimensões:</span>
                      <span className="font-bold text-[#0f1d2e] font-mono">{item.dimensoes}</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-700">
                      <span className="font-semibold text-slate-500">Resistência:</span>
                      <span className="font-semibold text-slate-800">{item.resistencia}</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-700">
                      <span className="font-semibold text-slate-500">Rendimento:</span>
                      <span className="text-slate-800 font-medium">{item.consumo}</span>
                    </div>
                  </div>

                  {/* Available colors */}
                  {item.cores && item.cores.length > 0 && (
                    <div className="mt-4 flex items-center gap-1.5 flex-wrap">
                      <span className="text-[11px] font-semibold text-slate-400 mr-1">Cores:</span>
                      {item.cores.map((cor) => (
                        <span 
                          key={cor} 
                          className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-xs font-medium"
                        >
                          {cor}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button: Solicitar Cotação */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => onSelectProduct(item.name, item.dimensoes)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0f1d2e] hover:bg-[#f48120] text-white text-xs font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer shadow-sm active:scale-[0.99]"
                >
                  <span>Solicitar Cotação</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state when search produces no results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg border border-slate-200 p-8">
            <p className="text-base font-bold text-slate-700">Nenhum produto encontrado para "{searchTerm}"</p>
            <p className="text-xs text-slate-500 mt-1">Tente pesquisar por termos como "paver", "bloco", "guia", "tátil" ou "copacabana".</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('todos'); }}
              className="mt-4 px-4 py-2 bg-[#0f1d2e] text-white text-xs font-bold rounded uppercase"
            >
              Ver Todos os Produtos
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
