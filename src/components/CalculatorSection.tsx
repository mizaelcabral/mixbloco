import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Info } from 'lucide-react';

interface CalculatorSectionProps {
  onQuoteWithCalc: (data: { product: string; area: number }) => void;
}

export function CalculatorSection({ onQuoteWithCalc }: CalculatorSectionProps) {
  const [calcType, setCalcType] = useState<'dimensions' | 'area'>('dimensions');
  const [length, setLength] = useState<number | string>(15);
  const [width, setWidth] = useState<number | string>(8);
  const [directArea, setDirectArea] = useState<number | string>(120);
  const [selectedPaver, setSelectedPaver] = useState('holandes06');
  const [trafficType, setTrafficType] = useState('leve');

  const paverOptions: Record<string, { name: string; pcsM2: number; defaultThick: string }> = {
    holandes06: { name: "Paver Intertravado 20x10x06cm", pcsM2: 50, defaultThick: "6 cm" },
    holandes08: { name: "Paver Intertravado 20x10x08cm", pcsM2: 50, defaultThick: "8 cm" },
    interface06: { name: "Paver Interface (16 Faces)", pcsM2: 35, defaultThick: "6 cm" },
    drenante: { name: "Piso Drenante Permeável", pcsM2: 50, defaultThick: "6 cm" },
    sextavado: { name: "Piso Sextavado 8cm (25x08cm)", pcsM2: 19, defaultThick: "8 cm" },
    blocoM15: { name: "Bloco Inteiro M15 (14x19x39cm)", pcsM2: 12.5, defaultThick: "14 cm" },
    copacabana: { name: "Lajota Copacabana (50x50x2cm)", pcsM2: 4, defaultThick: "2 cm" },
  };

  const calculatedM2 = calcType === 'dimensions' 
    ? (Number(length) || 0) * (Number(width) || 0)
    : (Number(directArea) || 0);

  const activePaver = paverOptions[selectedPaver];
  const basePcs = Math.round(calculatedM2 * activePaver.pcsM2);
  const reservePcs = Math.round(basePcs * 1.05); // 5% technical margin for cuts
  const sandVolume = (calculatedM2 * 0.04).toFixed(1); // 4cm sand bedding

  return (
    <section id="projetos" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative subtle texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#f48120_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#f48120] mb-2">
            <Calculator className="w-3.5 h-3.5" />
            Ferramenta para sua Obra
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white whitespace-nowrap">
            Calculadora de Pavimentação e Blocos
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Estime rapidamente a quantidade exata de peças necessárias para o seu projeto com margem técnica de assentamento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Input Box */}
          <div className="lg:col-span-7 bg-slate-800/90 border border-slate-700/80 rounded-lg p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              
              {/* Calculation mode selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  1. Como deseja calcular?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCalcType('dimensions')}
                    className={`py-2.5 px-4 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
                      calcType === 'dimensions'
                        ? 'bg-[#f48120] text-white shadow'
                        : 'bg-slate-700/60 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    Comprimento x Largura
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcType('area')}
                    className={`py-2.5 px-4 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
                      calcType === 'area'
                        ? 'bg-[#f48120] text-white shadow'
                        : 'bg-slate-700/60 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    Área Total em m²
                  </button>
                </div>
              </div>

              {/* Dimensions or Area inputs */}
              {calcType === 'dimensions' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Comprimento (metros)
                    </label>
                    <input
                      type="number"
                      min="1"
                      step="0.5"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#f48120]"
                      placeholder="Ex: 15"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Largura (metros)
                    </label>
                    <input
                      type="number"
                      min="1"
                      step="0.5"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#f48120]"
                      placeholder="Ex: 8"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Metragem Quadrada Total (m²)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={directArea}
                    onChange={(e) => setDirectArea(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#f48120]"
                    placeholder="Ex: 120"
                  />
                </div>
              )}

              {/* Model Choice */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  2. Modelo de Produto
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(paverOptions).map(([key, item]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedPaver(key)}
                      className={`text-left p-3 rounded border transition-all cursor-pointer ${
                        selectedPaver === key
                          ? 'border-[#f48120] bg-[#f48120]/10 text-white'
                          : 'border-slate-700 bg-slate-900/60 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <div className="text-xs font-bold">{item.name}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{item.pcsM2} peças/m²</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Traffic recommendation */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  3. Intensidade de Tráfego
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'leve', label: 'Leve (Passeio)', thick: '6 cm' },
                    { id: 'medio', label: 'Médio (Veículos)', thick: '8 cm' },
                    { id: 'pesado', label: 'Pesado (Caminhões)', thick: '10 cm' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTrafficType(t.id)}
                      className={`p-2.5 rounded text-center border text-xs font-semibold transition-all cursor-pointer ${
                        trafficType === t.id
                          ? 'border-[#f48120] bg-[#f48120]/20 text-[#f48120]'
                          : 'border-slate-700 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <div className="leading-tight">{t.label}</div>
                      <div className="text-[10px] text-slate-400 mt-1">Espessura {t.thick}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-800 to-[#0f1d2e] border-2 border-[#f48120]/30 rounded-lg p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#f48120] mb-1">
                Resultado Estimado
              </div>
              <h3 className="text-2xl font-black uppercase text-white">
                Resumo da Sua Obra
              </h3>

              <div className="mt-6 space-y-4">
                <div className="bg-slate-900/80 p-4 rounded border border-slate-700/60 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Área total calculada</span>
                    <span className="text-2xl font-black text-white">{calculatedM2} m²</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block font-medium">Modelo</span>
                    <span className="text-xs font-bold text-[#f48120]">{activePaver.name}</span>
                  </div>
                </div>

                <div className="bg-slate-900/80 p-4 rounded border border-slate-700/60 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-300 font-medium">Quantidade nominal:</span>
                    <span className="font-bold text-white">{basePcs.toLocaleString('pt-BR')} peças</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-t border-slate-800 pt-2">
                    <span className="text-[#f48120] font-semibold flex items-center gap-1">
                      Com +5% para recortes:
                    </span>
                    <span className="font-black text-lg text-white">
                      {reservePcs.toLocaleString('pt-BR')} peças
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-400 border-t border-slate-800 pt-2">
                    <span>Areia / pó de brita (colchão ~4cm):</span>
                    <span className="font-bold text-slate-300">≈ {sandVolume} m³</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-3 bg-slate-900/50 rounded text-[11px] text-slate-400">
                  <Info className="w-4 h-4 text-[#f48120] shrink-0 mt-0.5" />
                  <span>
                    A Mixbloco disponibiliza paletização com filme stretch para proteção e transporte seguro até a sua obra.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-700">
              <button
                type="button"
                onClick={() => onQuoteWithCalc({ product: activePaver.name, area: calculatedM2 })}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-[#f48120] hover:bg-[#e07217] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
              >
                <span>Solicitar Cotação Destes Materiais</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
