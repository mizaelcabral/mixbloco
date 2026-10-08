import React from 'react';

interface ProductVisualProps {
  id: string;
  name: string;
  category: string;
  dimensoes: string;
}

export function ProductVisual({ id, name, category, dimensoes }: ProductVisualProps) {
  // Render specialized high-fidelity isometric / concrete-themed visual representations
  // matching the client's official product catalog

  if (category === "Blocos") {
    const is9cm = id.includes("9cm");

    return (
      <div className="w-full h-full bg-gradient-to-b from-[#e5e7eb] to-[#d1d5db] flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
        {/* Subtle concrete texture grain */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:8px_8px]" />

        {/* Bloco Estrutural com 2 furos */}
        <div className="relative w-40 h-28 flex items-center justify-center drop-shadow-xl">
          <svg viewBox="0 0 170 115" className="w-full h-full drop-shadow-lg">
            {/* Top face */}
            <polygon points={is9cm ? "25,48 85,20 145,48 85,76" : "15,48 85,15 155,48 85,82"} fill="#9ca3af" />
            {/* Front left face */}
            <polygon points={is9cm ? "25,48 85,76 85,102 25,74" : "15,48 85,82 85,108 15,74"} fill="#6b7280" />
            {/* Front right face */}
            <polygon points={is9cm ? "85,76 145,48 145,74 85,102" : "85,82 155,48 155,74 85,108"} fill="#4b5563" />
            {/* Left cavity */}
            <polygon points={is9cm ? "45,48 72,35 78,45 52,58" : "35,50 68,34 76,46 43,62"} fill="#1f2937" />
            {/* Right cavity */}
            <polygon points={is9cm ? "92,45 98,35 125,48 118,58" : "94,46 102,34 135,50 127,62"} fill="#1f2937" />
          </svg>
          <div className="absolute bottom-1 right-2 text-[10px] font-mono font-bold text-slate-700 bg-white/80 px-1.5 py-0.5 rounded shadow-xs">
            {is9cm ? "9x19x39 cm" : "14x19x39 cm"}
          </div>
        </div>
      </div>
    );
  }

  if (category === "Pisos") {
    const isGrama = id.includes("grama");
    const isDrenante = id.includes("drenante");
    const isSextavado = id.includes("sextavado");
    const isColored = id.includes("colorido");

    if (isGrama) {
      return (
        <div className="w-full h-full bg-gradient-to-b from-[#eef2f6] to-[#dbe2ea] flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div className="relative w-36 h-28 flex flex-col items-center justify-center">
            {/* Technical grid paver representation for Piso Grama 16 faces */}
            <svg viewBox="0 0 140 100" className="w-full h-full drop-shadow-lg">
              {/* Main outer body */}
              <rect x="20" y="15" width="100" height="70" rx="6" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
              {/* Internal hollow cavities for grass */}
              <circle cx="45" cy="35" r="12" fill="#15803d" opacity="0.85" />
              <circle cx="95" cy="35" r="12" fill="#15803d" opacity="0.85" />
              <circle cx="45" cy="65" r="12" fill="#15803d" opacity="0.85" />
              <circle cx="95" cy="65" r="12" fill="#15803d" opacity="0.85" />
              <rect x="62" y="42" width="16" height="16" rx="3" fill="#166534" opacity="0.8" />
            </svg>
            <span className="text-[10px] font-mono font-bold text-emerald-900 bg-emerald-100/90 px-2 py-0.5 rounded mt-1 border border-emerald-300">
              16 Faces (Ecológico)
            </span>
          </div>
        </div>
      );
    }

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
            <div className="absolute bottom-1 right-2 text-[10px] font-mono font-bold text-slate-700 bg-white/80 px-1.5 py-0.5 rounded shadow-xs">
              Hexagonal 24x8
            </div>
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
      const is4cm = id.includes("4cm");
      return (
        <div className="w-full h-full bg-gradient-to-b from-[#e5e7eb] to-[#d1d5db] flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          {/* 3 colors demonstration matching catalog: Grafite, Amarelo, Vermelho */}
          <div className="flex items-center gap-2.5 drop-shadow-xl">
            <div className="w-8 h-18 bg-[#b91c1c] rounded-xs border border-red-900/40 shadow-md flex items-end justify-center pb-1">
              <span className="text-[8px] text-white/90 font-bold uppercase rotate-90 mb-4">Vermelho</span>
            </div>
            <div className="w-8 h-18 bg-[#d97706] rounded-xs border border-amber-800/40 shadow-md flex items-end justify-center pb-1">
              <span className="text-[8px] text-white/90 font-bold uppercase rotate-90 mb-4">Amarelo</span>
            </div>
            <div className="w-8 h-18 bg-[#374151] rounded-xs border border-gray-900/40 shadow-md flex items-end justify-center pb-1">
              <span className="text-[8px] text-white/90 font-bold uppercase rotate-90 mb-4">Grafite</span>
            </div>
          </div>
          <div className="absolute bottom-1 right-2 text-[10px] font-mono font-bold text-slate-700 bg-white/80 px-1.5 py-0.5 rounded shadow-xs">
            {is4cm ? "Colorido 4cm" : "Colorido 6cm"}
          </div>
        </div>
      );
    }

    // Default Paver Intertravado Cinza Natural (4cm, 6cm, 8cm, 10cm)
    const thickness = id.includes("10cm") ? "10 cm" : id.includes("8cm") ? "8 cm" : id.includes("4cm") ? "4 cm" : "6 cm";

    return (
      <div className="w-full h-full bg-gradient-to-b from-[#e5e7eb] to-[#d1d5db] flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
        <div className="flex items-center gap-2.5 drop-shadow-xl">
          <div className="w-9 h-20 bg-gradient-to-r from-[#9ca3af] to-[#6b7280] rounded-xs border border-gray-400 shadow-lg" />
          <div className="w-9 h-20 bg-gradient-to-r from-[#9ca3af] to-[#6b7280] rounded-xs border border-gray-400 shadow-lg -mt-2" />
          <div className="w-9 h-20 bg-gradient-to-r from-[#9ca3af] to-[#6b7280] rounded-xs border border-gray-400 shadow-lg" />
        </div>
        <div className="absolute bottom-1 right-2 text-[10px] font-mono font-bold text-slate-700 bg-white/80 px-1.5 py-0.5 rounded shadow-xs">
          Espessura {thickness}
        </div>
      </div>
    );
  }

  if (category === "Meio Fio - Guia") {
    const isJardim = id.includes("jardim");
    const isDenit = id.includes("denit");
    const label = isJardim ? "Jardim (8x6cm)" : isDenit ? "DNIT (15x13cm)" : "Guia (13x11cm)";

    return (
      <div className="w-full h-full bg-gradient-to-b from-[#e5e7eb] to-[#d1d5db] flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
        <div className="relative w-44 h-28 flex items-center justify-center drop-shadow-xl">
          <svg viewBox="0 0 160 100" className="w-full h-full drop-shadow-lg">
            {/* 3D Beveled concrete curb / guia de rua */}
            {/* Top chamfer */}
            <polygon points={isJardim ? "35,32 105,20 125,26 50,38" : "30,30 110,15 130,22 50,37"} fill="#cbd5e1" />
            {/* Front vertical face */}
            <polygon points={isJardim ? "50,38 125,26 125,72 50,84" : "50,37 130,22 130,75 50,90"} fill="#94a3b8" />
            {/* Left face */}
            <polygon points={isJardim ? "35,32 50,38 50,84 35,76" : "30,30 50,37 50,90 30,80"} fill="#64748b" />
          </svg>
          <div className="absolute bottom-1 right-2 text-[10px] font-mono font-bold text-slate-700 bg-white/80 px-1.5 py-0.5 rounded shadow-xs">
            {label}
          </div>
        </div>
      </div>
    );
  }

  // Fallback
  return (
    <div className="w-full h-full bg-slate-200 flex items-center justify-center p-6">
      <div className="text-xs font-bold text-slate-600 uppercase">{name}</div>
    </div>
  );
}
