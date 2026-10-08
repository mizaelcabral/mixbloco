import React, { useState } from 'react';

interface ProductVisualProps {
  id: string;
  name: string;
  category: string;
  dimensoes: string;
}

export function getProductTag(name: string): string {
  if (name.includes("COLORIDO 4CM")) return "Colorido 4cm";
  if (name.includes("COLORIDO 6CM")) return "Colorido 6cm";
  if (name.includes("INTERTRAVADO 4CM")) return "Espessura 4 cm";
  if (name.includes("INTERTRAVADO 6CM")) return "Espessura 6 cm";
  if (name.includes("INTERTRAVADO 8CM")) return "Espessura 8 cm";
  if (name.includes("INTERTRAVADO 10CM")) return "Espessura 10 cm";
  if (name.includes("DRENANTE")) return "Permeável 100%";
  if (name.includes("GRAMA")) return "16 Faces (Ecológico)";
  if (name.includes("SEXTAVADO")) return "Hexagonal 24x8";
  if (name.includes("BLOCO") && name.includes("9CM")) return "9x19x39 cm";
  if (name.includes("BLOCO") && name.includes("14CM")) return "14x19x39 cm";
  if (name.includes("JARDIM")) return "Jardim (8x6cm)";
  if (name.includes("DENIT")) return "DNIT (15x13cm)";
  if (name.includes("GUIA")) return "Guia (13x11cm)";
  return "";
}

export function ProductVisual({ id, name, category, dimensoes }: ProductVisualProps) {
  const [hasError, setHasError] = useState(false);

  // Exact path to the client's product images in /images/produtos-mixbloco/[TITULO].webp
  const imageSrc = `/images/produtos-mixbloco/${encodeURIComponent(name)}.webp`;

  if (hasError) {
    return (
      <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center p-6 text-center">
        <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">{name}</span>
        <span className="text-[10px] text-slate-500 mt-1 font-mono">{dimensoes}</span>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-slate-100 relative overflow-hidden">
      <img
        src={imageSrc}
        alt={name}
        onError={() => setHasError(true)}
        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300 ease-out select-none"
        loading="lazy"
      />
    </div>
  );
}
