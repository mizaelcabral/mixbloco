import React from 'react';
import { ShieldCheck, Truck, Clock, Award, CheckCircle, PhoneCall } from 'lucide-react';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export function AboutSection({ onOpenQuote }: AboutSectionProps) {
  const differentials = [
    {
      icon: Award,
      title: "Qualidade NBR Rigorosa",
      description: "Blocos e pavers submetidos a testes de compressão (MPa) e absorção de água, garantindo resistência e durabilidade vitalícia.",
    },
    {
      icon: Clock,
      title: "Agilidade na Entrega",
      description: "Capacidade produtiva contínua com estoques estratégicos para abastecer obras de pequeno a grande porte sem atrasos.",
    },
    {
      icon: Truck,
      title: "Logística Própria com Munck",
      description: "Entregas programadas com descarregamento rápido e seguro diretamente no canteiro de sua obra.",
    },
    {
      icon: ShieldCheck,
      title: "Atendimento Consultivo",
      description: "Orientação técnica especializada sobre espessura ideal, tipo de paginação e base de assentamento para cada projeto.",
    },
  ];

  return (
    <section id="quem-somos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#f48120] mb-2">
              <span className="w-2 h-2 bg-[#f48120]" />
              Excelência Construtiva
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight leading-tight">
              A Mixbloco é referência em soluções de concreto e pré-moldados
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Com maquinário de prensagem de última geração e controle rigoroso de matéria-prima, a Mixbloco fornece pavers e blocos de concreto de altíssima densidade e uniformidade estética.
            </p>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Nossa missão é oferecer o melhor atendimento do mercado, desde a consultoria técnica na escolha do modelo adequado até a entrega pontual no canteiro da sua obra.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Pisos intertravados com 35 e 50 MPa para tráfego leve, médio e pesado",
                "Blocos estruturais com precisão milimétrica e cantos vivos",
                "Apoio técnico para engenheiros, arquitetos, construtoras e proprietários",
                "Condições comerciais diferenciadas para grandes metragens",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f48120] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={onOpenQuote}
                className="px-6 py-3 bg-[#f48120] hover:bg-[#e07217] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer"
              >
                Falar com Nossos Especialistas
              </button>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="/images/Produ%C3%A7%C3%A3o%20de%20Blocos%20na%20MIXBLOCO(1).png"
                alt="Produção de Blocos na MIXBLOCO"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/30 to-transparent flex flex-col justify-start p-6 sm:p-8 text-white">
                <span className="text-xs uppercase font-bold tracking-widest text-[#f48120]">Garantia de Qualidade</span>
                <p className="text-xl font-bold mt-1">Soluções que valorizam o seu projeto</p>
                <p className="text-xs text-slate-200 mt-1 max-w-md">Pavimentação intertravada permeável, sustentável e de rápida liberação de tráfego.</p>
              </div>
            </div>

            {/* Badge floating */}
            <div className="absolute -bottom-6 -left-6 bg-[#0f1d2e] text-white p-5 rounded-lg shadow-xl border border-white/10 hidden sm:block max-w-[220px]">
              <div className="text-3xl font-black text-[#f48120]">100%</div>
              <div className="text-xs font-semibold uppercase tracking-wider mt-1 text-slate-200">
                Conformidade com Normas ABNT
              </div>
            </div>
          </div>
        </div>

        {/* Differentials 4 Columns */}
        <div id="servicos" className="mt-24 pt-16 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-slate-900 tracking-tight">
              Por que escolher a Mixbloco?
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Compromisso com o prazo da sua obra e padrão industrial comprovado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-50 p-6 rounded-lg border border-slate-200/80 hover:border-[#f48120]/50 transition-all hover:bg-white hover:shadow-lg group"
                >
                  <div className="w-12 h-12 bg-white rounded-md border border-slate-200 flex items-center justify-center text-[#f48120] group-hover:bg-[#f48120] group-hover:text-white transition-colors mb-4 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
