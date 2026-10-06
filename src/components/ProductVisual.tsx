import React from 'react';

interface ProductVisualProps {
  id: string;
  name: string;
  category: string;
  dimensoes: string;
}

export function ProductVisual({ id, name, category, dimensoes }: ProductVisualProps) {
  // Render specialized high-fidelity isometric / concrete-themed visual representations
  // matching the client's product catalog photography

  if (category === "Blocos") {
    const isCalha = id.includes("calha");
    const isMeioBloco = id.includes("meio-bloco");
    const isM15 = id.includes("m15");

    return (
      <div className="w-full h-full bg-gradient-to-b from-[#e5e7eb] to-[#d1d5db] flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
        {/* Subtle concrete texture grain */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:8px_8px]" />

        {isCalha ? (
          // Calha / Canaleta em U
          <div className="relative w-36 h-24 flex items-center justify-center drop-shadow-xl">
            <svg viewBox="0 0 160 110" className="w-full h-full drop-shadow-lg">
              {/* Outer block base */}
              <polygon points="20,50 90,15 140,40 70,80" fill="#9ca3af" />
              <polygon points="20,50 70,80 70,100 20,70" fill="#6b7280" />
              <polygon points="70,80 140,40 140,60 70,100" fill="#4b5563" />
              {/* U-trough interior cavity */}
              <polygon points="40,52 90,28 120,44 70,68" fill="#374151" />
              <polygon points="40,52 70,68 70,85 40,68" fill="#1f2937" />
              <polygon points="70,68 120,44 120,60 70,85" fill="#111827" />
            </svg>
            <div className="absolute bottom-1 right-2 text-[10px] font-mono font-bold text-slate-700 bg-white/70 px-1.5 py-0.5 rounded">
              Canaleta U
            </div>
          </div>
        ) : isMeioBloco ? (
          // Meio Bloco
          <div className="relative w-32 h-24 flex items-center justify-center drop-shadow-xl">
            <svg viewBox="0 0 140 110" className="w-full h-full drop-shadow-lg">
              {/* Meio bloco body */}
              <polygon points="30,45 80,18 120,40 70,70" fill="#9ca3af" />
              <polygon points="30,45 70,70 70,95 30,70" fill="#6b7280" />
              <polygon points="70,70 120,40 120,65 70,95" fill="#4b5563" />
              {/* 1 single cavity */}
              <polygon points="48,46 80,29 102,42 70,60" fill="#1f2937" />
            </svg>
            <div className="absolute bottom-1 right-2 text-[10px] font-mono font-bold text-slate-700 bg-white/70 px-1.5 py-0.5 rounded">
              Meio Bloco
            </div>
          </div>
        ) : (
          // Bloco Inteiro M15 ou M10 com 2 furos
          <div className="relative w-40 h-28 flex items-center justify-center drop-shadow-xl">
            <svg viewBox="0 0 170 115" className="w-full h-full drop-shadow-lg">
              {/* Top face */}
              <polygon points="15,48 85,15 155,48 85,82" fill="#9ca3af" />
              {/* Front left face */}
              <polygon points="15,48 85,82 85,108 15,74" fill="#6b7280" />
              {/* Front right face */}
              <polygon points="85,82 155,48 155,74 85,108" fill="#4b5563" />
              {/* Left cavity */}
              <polygon points="35,50 68,34 76,46 43,62" fill="#1f2937" />
              {/* Right cavity */}
              <polygon points="94,46 102,34 135,50 127,62" fill="#1f2937" />
            </svg>
            <div className="absolute bottom-1 right-2 text-[10px] font-mono font-bold text-slate-700 bg-white/70 px-1.5 py-0.5 rounded">
              {isM15 ? "M15 (14cm)" : "M10 (9cm)"}
            </div>
          </div>
        )}
      </div>
    );
  }

  if (category === "Pisos") {
    const isInterface = id.includes("interface");
    const isDrenante = id.includes("drenante");
    const isSextavado = id.includes("sextavado");
    const isColored = id.includes("04cm");

    if (isSextavado) {
      return (
        <div className="w-full h-full bg-gradient-to-b from-[#e5e7eb] to-[#d1d5db] flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div className="relative w-32 h-28 flex items-center justify-center">
            <svg viewBox="0 0 120 110" className="w-full h-full drop-shadow-xl">
              {/* Top hexagon face */}
              <polygon points="60,15 100,32 100,68 60,85 20,68 20,32" fill="#e2e8f0" />
              {/* Front sides for 3D depth */}
              <polygon points="20,68 60,85 60,100 20,83" fill="#94a3b8" />
              <polygon points="60,85 100,68 100,83 60,100" fill="#64748b" />
            </svg>
            <div className="absolute bottom-1 right-2 text-[10px] font-mono font-bold text-slate-700 bg-white/80 px-1.5 py-0.5 rounded">
              Hexagonal
            </div>
          </div>
        </div>
      );
    }

    if (isInterface) {
      return (
        <div className="w-full h-full bg-gradient-to-b from-[#eef2f6] to-[#dbe2ea] flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div className="relative w-40 h-28 flex flex-col items-center justify-center">
            {/* Technical blueprint style schematic for Paver Interface / 16 Faces */}
            <svg viewBox="0 0 150 90" className="w-full h-full drop-shadow-md">
              <path 
                d="M 20,45 L 35,25 L 65,25 L 75,35 L 85,25 L 115,25 L 130,45 L 115,65 L 85,65 L 75,55 L 65,65 L 35,65 Z" 
                fill="#cbd5e1" 
                stroke="#475569" 
                strokeWidth="2.5" 
              />
              {/* Measurement lines */}
              <line x1="20" y1="15" x2="130" y2="15" stroke="#f48120" strokeWidth="1.5" strokeDasharray="3 2" />
              <circle cx="20" cy="15" r="2" fill="#f48120" />
              <circle cx="130" cy="15" r="2" fill="#f48120" />
            </svg>
            <span className="text-[10px] font-mono font-bold text-[#0f1d2e] bg-white/90 px-2 py-0.5 rounded mt-1 border border-slate-300">
              Esquema Técnico 16 Faces
            </span>
          </div>
        </div>
      );
    }

    if (isDrenante) {
      return (
        <div className="w-full h-full bg-gradient-to-b from-[#e5e7eb] to-[#d1d5db] flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          {/* Permeable porous texture representation */}
          <div className="relative w-36 h-24 flex items-center justify-center">
            <div className="w-28 h-20 bg-[#d6d3d1] border-2 border-[#a8a29e] rounded shadow-xl flex items-center justify-center relative overflow-hidden">
              {/* Macro granular porous texture effect */}
              <div 
                className="absolute inset-0 opacity-70"
                style={{
                  backgroundImage: `radial-gradient(#78716c 2px, transparent 2px), radial-gradient(#44403c 1.5px, transparent 1.5px)`,
                  backgroundSize: '8px 8px, 6px 6px',
                  backgroundPosition: '0 0, 3px 3px'
                }}
              />
              <span className="relative z-10 bg-[#0f1d2e]/80 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-xs">
                Permeável 100%
              </span>
            </div>
          </div>
        </div>
      );
    }

    if (isColored) {
      return (
        <div className="w-full h-full bg-gradient-to-b from-[#e5e7eb] to-[#d1d5db] flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          {/* 4 colors demonstration as in client image */}
          <div className="flex items-center gap-2 drop-shadow-xl">
            <div className="w-7 h-16 bg-[#b91c1c] rounded-xs border border-red-900/40 shadow-md flex items-end justify-center pb-1">
              <span className="text-[8px] text-white/90 font-bold uppercase rotate-90 mb-4">Rubro</span>
            </div>
            <div className="w-7 h-16 bg-[#d97706] rounded-xs border border-amber-800/40 shadow-md flex items-end justify-center pb-1">
              <span className="text-[8px] text-white/90 font-bold uppercase rotate-90 mb-4">Amarelo</span>
            </div>
            <div className="w-7 h-16 bg-[#9ca3af] rounded-xs border border-gray-600/40 shadow-md flex items-end justify-center pb-1">
              <span className="text-[8px] text-white/90 font-bold uppercase rotate-90 mb-4">Natural</span>
            </div>
            <div className="w-7 h-16 bg-[#374151] rounded-xs border border-gray-900/40 shadow-md flex items-end justify-center pb-1">
              <span className="text-[8px] text-white/90 font-bold uppercase rotate-90 mb-4">Grafite</span>
            </div>
          </div>
        </div>
      );
    }

    // Default Paver Intertravado (e.g. 6cm or 8cm)
    return (
      <div className="w-full h-full bg-gradient-to-b from-[#e5e7eb] to-[#d1d5db] flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
        <div className="flex items-center gap-2.5 drop-shadow-xl">
          <div className="w-9 h-20 bg-gradient-to-r from-[#9ca3af] to-[#6b7280] rounded-xs border border-gray-400 shadow-lg" />
          <div className="w-9 h-20 bg-gradient-to-r from-[#9ca3af] to-[#6b7280] rounded-xs border border-gray-400 shadow-lg -mt-2" />
          <div className="w-9 h-20 bg-gradient-to-r from-[#9ca3af] to-[#6b7280] rounded-xs border border-gray-400 shadow-lg" />
        </div>
      </div>
    );
  }

  if (category === "Meio Fio - Guia") {
    const isRobusta = dimensoes.includes("13x10cm");
    return (
      <div className="w-full h-full bg-gradient-to-b from-[#e5e7eb] to-[#d1d5db] flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
        <div className="relative w-44 h-28 flex items-center justify-center drop-shadow-xl">
          <svg viewBox="0 0 160 100" className="w-full h-full drop-shadow-lg">
            {/* 3D Beveled concrete curb / guia de rua */}
            {/* Top chamfer */}
            <polygon points="30,30 110,15 130,22 50,37" fill="#cbd5e1" />
            {/* Front vertical face */}
            <polygon points="50,37 130,22 130,75 50,90" fill="#94a3b8" />
            {/* Left face */}
            <polygon points="30,30 50,37 50,90 30,80" fill="#64748b" />
          </svg>
          <div className="absolute bottom-1 right-2 text-[10px] font-mono font-bold text-slate-700 bg-white/80 px-1.5 py-0.5 rounded">
            {isRobusta ? "100x30 (13x10)" : "100x30 (8x5)"}
          </div>
        </div>
      </div>
    );
  }

  if (category === "Lajota") {
    const isCopacabana = id.includes("copacabana");
    const isAlerta = id.includes("alerta");
    const isDirecional = id.includes("direcional");
    const isRampa = id.includes("rampa");

    if (isCopacabana) {
      return (
        <div className="w-full h-full bg-gradient-to-b from-[#e5e7eb] to-[#d1d5db] flex items-center justify-center p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div className="w-32 h-32 bg-slate-200 border-2 border-slate-300 rounded shadow-xl relative overflow-hidden flex items-center justify-center">
            {/* Wave pattern like Copacabana pavement */}
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <rect width="100" height="100" fill="#cbd5e1" />
              <path 
                d="M 0,30 Q 25,10 50,30 T 100,30 L 100,60 Q 75,40 50,60 T 0,60 Z" 
                fill="#475569" 
              />
              <path 
                d="M 0,75 Q 25,55 50,75 T 100,75 L 100,100 L 0,100 Z" 
                fill="#475569" 
              />
            </svg>
            <div className="absolute bottom-1 right-1 text-[9px] font-mono font-bold text-white bg-slate-900/80 px-1 rounded">
              Copacabana
            </div>
          </div>
        </div>
      );
    }

    if (isAlerta) {
      return (
        <div className="w-full h-full bg-gradient-to-b from-[#e5e7eb] to-[#d1d5db] flex items-center justify-center p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div className="w-32 h-32 bg-[#e2e8f0] border-2 border-slate-300 rounded shadow-xl p-3 flex flex-col justify-between">
            {/* Grid of raised tactile domes (bolinhas de alerta) */}
            <div className="grid grid-cols-4 gap-2 h-full items-center justify-items-center">
              {Array.from({ length: 16 }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-white to-slate-400 shadow-md border border-slate-300/80" 
                />
              ))}
            </div>
            <div className="text-center text-[9px] font-mono font-bold text-slate-700 mt-1">
              Tátil Alerta
            </div>
          </div>
        </div>
      );
    }

    if (isDirecional) {
      return (
        <div className="w-full h-full bg-gradient-to-b from-[#e5e7eb] to-[#d1d5db] flex items-center justify-center p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div className="w-32 h-32 bg-[#e2e8f0] border-2 border-slate-300 rounded shadow-xl p-3 flex items-center justify-around">
            {/* Raised directional relief bars */}
            <div className="w-4 h-full bg-gradient-to-r from-white via-slate-200 to-slate-400 rounded-sm shadow-md border border-slate-300" />
            <div className="w-4 h-full bg-gradient-to-r from-white via-slate-200 to-slate-400 rounded-sm shadow-md border border-slate-300" />
            <div className="w-4 h-full bg-gradient-to-r from-white via-slate-200 to-slate-400 rounded-sm shadow-md border border-slate-300" />
            <div className="w-4 h-full bg-gradient-to-r from-white via-slate-200 to-slate-400 rounded-sm shadow-md border border-slate-300" />
          </div>
        </div>
      );
    }

    if (isRampa) {
      return (
        <div className="w-full h-full bg-gradient-to-b from-[#e5e7eb] to-[#d1d5db] flex items-center justify-center p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div className="w-32 h-32 bg-[#e2e8f0] border-2 border-slate-300 rounded shadow-xl p-3 flex flex-col justify-around">
            {/* Horizontal anti-slip grooves for ramps */}
            <div className="w-full h-2.5 bg-gradient-to-b from-white via-slate-200 to-slate-400 rounded-xs shadow-sm border border-slate-300" />
            <div className="w-full h-2.5 bg-gradient-to-b from-white via-slate-200 to-slate-400 rounded-xs shadow-sm border border-slate-300" />
            <div className="w-full h-2.5 bg-gradient-to-b from-white via-slate-200 to-slate-400 rounded-xs shadow-sm border border-slate-300" />
            <div className="w-full h-2.5 bg-gradient-to-b from-white via-slate-200 to-slate-400 rounded-xs shadow-sm border border-slate-300" />
            <div className="w-full h-2.5 bg-gradient-to-b from-white via-slate-200 to-slate-400 rounded-xs shadow-sm border border-slate-300" />
          </div>
        </div>
      );
    }
  }

  // Fallback
  return (
    <div className="w-full h-full bg-slate-200 flex items-center justify-center p-6">
      <div className="text-xs font-bold text-slate-600 uppercase">{name}</div>
    </div>
  );
}
