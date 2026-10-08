import React, { useState } from 'react';
import { ArrowRight, Search, CheckCircle2, ShieldCheck, Filter } from 'lucide-react';
import { ProductVisual } from './ProductVisual';

export interface ProductItem {
  id: string;
  name: string;
  category: 'Pisos' | 'Blocos' | 'Meio Fio - Guia';
  dimensoes: string;
  material: string;
  embalagem: string;
  cargaCompleta?: string;
  consumo?: string;
  uso: string;
  cores?: string[];
  featured?: boolean;
}

export const CLIENT_PRODUCTS: ProductItem[] = [
  // --- PISOS INTERTRAVADOS RETANGULARES (6 produtos) ---
  {
    id: "piso-retangular-intertravado-4cm",
    name: "PISO RETANGULAR INTERTRAVADO 4CM",
    category: "Pisos",
    material: "Concreto",
    dimensoes: "10 cm x 20 cm x 4 cm",
    embalagem: "20 m² por palete",
    cargaCompleta: "160 m²",
    consumo: "50 peças por m²",
    uso: "Pavimentação intertravada para calçadas residenciais, passeios públicos, praças e áreas de tráfego exclusivo de pedestres.",
    cores: ["Cinza natural"],
    featured: true,
  },
  {
    id: "piso-retangular-intertravado-colorido-4cm",
    name: "PISO RETANGULAR INTERTRAVADO COLORIDO 4CM",
    category: "Pisos",
    material: "Concreto",
    dimensoes: "10 cm x 20 cm x 4 cm",
    embalagem: "20 m² por palete",
    cargaCompleta: "160 m²",
    consumo: "50 peças por m²",
    uso: "Ideal para demarcações visuais, faixas de travessia, ciclovias e paginações arquitetônicas decorativas com cores vivas e duráveis.",
    cores: ["Grafite", "Amarelo", "Vermelho"],
  },
  {
    id: "piso-retangular-intertravado-6cm",
    name: "PISO RETANGULAR INTERTRAVADO 6CM",
    category: "Pisos",
    material: "Concreto",
    dimensoes: "10 cm x 20 cm x 6 cm",
    embalagem: "16 m² por palete",
    cargaCompleta: "128 m²",
    consumo: "50 peças por m²",
    uso: "Indicado para garagens residenciais, estacionamentos comerciais, vias urbanas e tráfego leve e médio de veículos.",
    cores: ["Cinza natural"],
    featured: true,
  },
  {
    id: "piso-retangular-intertravado-colorido-6cm",
    name: "PISO RETANGULAR INTERTRAVADO COLORIDO 6CM",
    category: "Pisos",
    material: "Concreto",
    dimensoes: "10 cm x 20 cm x 6 cm",
    embalagem: "16 m² por palete",
    cargaCompleta: "128 m²",
    consumo: "50 peças por m²",
    uso: "Pigmentação homogênea de alto padrão para condomínios, calçadões e acessos veiculares com impacto estético e segurança.",
    cores: ["Grafite", "Amarelo", "Vermelho"],
  },
  {
    id: "piso-retangular-intertravado-8cm",
    name: "PISO RETANGULAR INTERTRAVADO 8CM",
    category: "Pisos",
    material: "Concreto",
    dimensoes: "10 cm x 20 cm x 8 cm",
    embalagem: "12,5 m² por palete",
    cargaCompleta: "160 m²",
    consumo: "50 peças por m²",
    uso: "Pavimento de alta resistência mecânica para vias públicas de tráfego pesado, postos de combustíveis, ônibus e caminhões.",
    cores: ["Natural", "Cinza natural"],
    featured: true,
  },
  {
    id: "piso-retangular-intertravado-10cm",
    name: "PISO RETANGULAR INTERTRAVADO 10CM",
    category: "Pisos",
    material: "Concreto",
    dimensoes: "10 cm x 20 cm x 10 cm",
    embalagem: "10 m² por palete",
    cargaCompleta: "80 m²",
    consumo: "50 peças por m²",
    uso: "Projetado para tráfego extrapesado e alta tonelagem contínua: portos, terminais de contêineres, carretas e indústrias pesadas.",
    cores: ["Natural", "Grafite", "Amarelo", "Vermelho"],
  },

  // --- PISOS ESPECIAIS: DRENANTE, GRAMA E SEXTAVADO (3 produtos) ---
  {
    id: "piso-intertravado-drenante-6cm",
    name: "PISO INTERTRAVADO DRENANTE 6CM",
    category: "Pisos",
    material: "Concreto",
    dimensoes: "10 cm x 20 cm x 6 cm",
    embalagem: "16 m² por palete",
    cargaCompleta: "128 m²",
    consumo: "50 peças por m²",
    uso: "Pavimento 100% permeável e ecológico que infiltra a água de chuva no lençol freático, prevenindo poças e alagamentos.",
    cores: ["Cinza natural", "Grafite"],
    featured: true,
  },
  {
    id: "piso-grama-16-faces",
    name: "PISO GRAMA 16 FACES",
    category: "Pisos",
    material: "Concreto",
    dimensoes: "36 cm x 18 cm x 6 cm",
    embalagem: "15 m² por palete",
    consumo: "15 peças por m²",
    uso: "Bloco vazado ecológico que integra pavimentação e gramado natural, ideal para garagens verdes, quintais e estacionamentos.",
    cores: ["Cinza natural"],
    featured: true,
  },
  {
    id: "piso-concreto-sextavado",
    name: "PISO DE CONCRETO SEXTAVADO",
    category: "Pisos",
    material: "Concreto",
    dimensoes: "24 cm x 24 cm x 8 cm",
    embalagem: "10 m² por palete",
    consumo: "16 peças por m²",
    uso: "Pavimento hexagonal clássico de alta durabilidade e intertravamento lateral para pátios de manobra, vias rurais e loteamentos.",
    cores: ["Cinza natural", "Colorido sob consulta"],
  },

  // --- BLOCOS ESTRUTURAIS (2 produtos) ---
  {
    id: "bloco-estrutural-9cm",
    name: "BLOCO ESTRUTURAL 9CM",
    category: "Blocos",
    material: "Concreto",
    dimensoes: "19 cm x 39 cm x 9 cm",
    embalagem: "130 por palete",
    cargaCompleta: "1040 blocos",
    consumo: "12,5 peças por m²",
    uso: "Alvenaria racionalizada e paredes divisórias internas com espessura otimizada, excelente acabamento e economia de argamassa.",
    cores: ["Cinza natural"],
  },
  {
    id: "bloco-estrutural-14cm",
    name: "BLOCO ESTRUTURAL 14CM",
    category: "Blocos",
    material: "Concreto",
    dimensoes: "14 cm x 19 cm x 39 cm",
    embalagem: "90 por palete",
    cargaCompleta: "720 blocos",
    consumo: "12,5 peças por m²",
    uso: "Bloco estrutural portante de alta densidade e resistência para galpões, prédios residenciais, comerciais e muros estruturais.",
    cores: ["Cinza natural"],
    featured: true,
  },

  // --- MEIO FIO - GUIA (3 produtos) ---
  {
    id: "meio-fio-jardim",
    name: "MEIO FIO (JARDIM)",
    category: "Meio Fio - Guia",
    material: "Concreto",
    dimensoes: "100 cm x 30 cm x 8 cm x 6 cm",
    embalagem: "36 por palete",
    cargaCompleta: "288 m",
    consumo: "1 peça por metro linear",
    uso: "Guia pré-moldada leve para delimitação de canteiros, jardins, passeios internos, ciclovias e áreas de convivência.",
    cores: ["Cinza natural"],
  },
  {
    id: "meio-fio-guia",
    name: "MEIO FIO GUIA",
    category: "Meio Fio - Guia",
    material: "Concreto",
    dimensoes: "100 cm x 30 cm x 13 cm x 11 cm",
    embalagem: "24 m por palete",
    cargaCompleta: "192 m",
    consumo: "1 peça por metro linear",
    uso: "Guia padrão para contenção de pavimentação asfáltica e pisos intertravados em vias urbanas, avenidas e loteamentos.",
    cores: ["Cinza natural"],
    featured: true,
  },
  {
    id: "meio-fio-denit",
    name: "MEIO FIO DENIT",
    category: "Meio Fio - Guia",
    material: "Concreto",
    dimensoes: "100 cm x 30 cm x 15 cm x 13 cm",
    embalagem: "24 m por palete",
    cargaCompleta: "192 m",
    consumo: "1 peça por metro linear",
    uso: "Guia de alta robustez com geometria oficial padrão DNIT para rodovias, acessos expressos e vias de tráfego pesado.",
    cores: ["Cinza natural"],
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
    { id: 'Pisos', label: 'Pisos Intertravados', count: CLIENT_PRODUCTS.filter(p => p.category === 'Pisos').length },
    { id: 'Blocos', label: 'Blocos Estruturais', count: CLIENT_PRODUCTS.filter(p => p.category === 'Blocos').length },
    { id: 'Meio Fio - Guia', label: 'Meio Fio / Guias', count: CLIENT_PRODUCTS.filter(p => p.category === 'Meio Fio - Guia').length },
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
            Conheça nossos produtos de alta qualidade e o melhor custo-benefício da Paraíba. Linha completa de pisos intertravados, blocos e meio-fio.
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
                      <span className="font-semibold text-slate-500">Material:</span>
                      <span className="font-medium text-slate-800">{item.material}</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-700">
                      <span className="font-semibold text-slate-500">Dimensões:</span>
                      <span className="font-bold text-[#0f1d2e] font-mono">{item.dimensoes}</span>
                    </div>
                    {item.embalagem && (
                      <div className="flex justify-between items-center text-slate-700">
                        <span className="font-semibold text-slate-500">Embalagem:</span>
                        <span className="font-medium text-slate-800">{item.embalagem}</span>
                      </div>
                    )}
                    {item.cargaCompleta && (
                      <div className="flex justify-between items-center text-slate-700">
                        <span className="font-semibold text-slate-500">Carga completa:</span>
                        <span className="font-medium text-slate-800">{item.cargaCompleta}</span>
                      </div>
                    )}
                    {item.consumo && (
                      <div className="flex justify-between items-center text-slate-700">
                        <span className="font-semibold text-slate-500">Rendimento:</span>
                        <span className="text-slate-800 font-medium">{item.consumo}</span>
                      </div>
                    )}
                  </div>

                  {/* Available colors */}
                  {item.cores && item.cores.length > 0 && (
                    <div className="mt-4 flex items-center gap-1.5 flex-wrap">
                      <span className="text-[11px] font-semibold text-slate-400 mr-1">Cor:</span>
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
            <p className="text-xs text-slate-500 mt-1">Tente pesquisar por termos como "paver", "bloco", "drenante", "meio fio" ou "sextavado".</p>
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
