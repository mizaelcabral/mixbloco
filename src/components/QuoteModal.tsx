import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, Send, Calculator } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';
import { CLIENT_PRODUCTS } from './ProductsSection';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
  initialDimensions?: string;
}

export function QuoteModal({ 
  isOpen, 
  onClose, 
  initialProduct = "PAVER INTERTRAVADO",
  initialDimensions = "20cm x 10cm x 06cm"
}: QuoteModalProps) {
  const [selectedProductId, setSelectedProductId] = useState<string>("");
  const [area, setArea] = useState<number | string>(100);
  const [color, setColor] = useState("Cinza Natural");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Sync initial product when opened
  useEffect(() => {
    if (isOpen) {
      const match = CLIENT_PRODUCTS.find(p => 
        p.name.toLowerCase() === initialProduct.toLowerCase() ||
        (initialDimensions && p.dimensoes.includes(initialDimensions))
      );
      if (match) {
        setSelectedProductId(match.id);
      } else {
        setSelectedProductId(CLIENT_PRODUCTS[5]?.id || CLIENT_PRODUCTS[0].id);
      }
      setSubmitted(false);
    }
  }, [isOpen, initialProduct, initialDimensions]);

  if (!isOpen) return null;

  const currentProduct = CLIENT_PRODUCTS.find(p => p.id === selectedProductId) || CLIENT_PRODUCTS[0];
  const numArea = typeof area === 'number' ? area : parseFloat(area) || 0;

  // Calculate pieces from consumption string
  let rate = 50;
  if (currentProduct.consumo.includes("12,5")) rate = 12.5;
  else if (currentProduct.consumo.includes("35")) rate = 35;
  else if (currentProduct.consumo.includes("19")) rate = 19;
  else if (currentProduct.consumo.includes("16")) rate = 16;
  else if (currentProduct.consumo.includes("25")) rate = 25;
  else if (currentProduct.consumo.includes("4")) rate = 4;
  else if (currentProduct.consumo.includes("5")) rate = 5;
  else if (currentProduct.consumo.includes("1 peça")) rate = 1;
  else if (currentProduct.consumo.includes("3,0")) rate = 3;
  else if (currentProduct.consumo.includes("3,4")) rate = 3.4;

  const estimatedPieces = Math.round(numArea * rate);
  const isLinear = currentProduct.category === 'Meio Fio - Guia' || currentProduct.name.includes('CALHA');

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const unitLabel = isLinear ? 'metros lineares' : 'm²';
    const text = `*SOLICITAÇÃO DE ORÇAMENTO - MIXBLOCO*\n\n` +
      `*Nome:* ${name || 'Cliente'}\n` +
      `*Telefone/WhatsApp:* ${phone || 'Não informado'}\n` +
      `*Cidade/Local:* ${city || 'A combinar'}\n\n` +
      `*PRODUTO SELECIONADO:*\n` +
      `• *Item:* ${currentProduct.name}\n` +
      `• *Medidas:* ${currentProduct.dimensoes}\n` +
      `• *Categoria:* ${currentProduct.category}\n` +
      `• *Quantidade:* ${numArea} ${unitLabel} (~${estimatedPieces.toLocaleString('pt-BR')} peças)\n` +
      `• *Acabamento/Cor:* ${color}\n` +
      (notes ? `• *Observações:* ${notes}\n\n` : `\n`) +
      `Por favor, me informe valores, condições de frete e prazo de entrega.`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5583986538607?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-[#0f1d2e] px-6 py-5 text-white flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#f48120] inline-block" />
              Solicitar Orçamento
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Cotação direta de fábrica com os consultores da Mixbloco
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">Solicitação Iniciada no WhatsApp!</h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Sua mensagem com a cotação do produto <strong>{currentProduct.name} ({currentProduct.dimensoes})</strong> foi transferida para nosso atendimento comercial.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-[#0f1d2e] text-white text-sm font-semibold rounded hover:bg-slate-800 transition-colors"
              >
                Fechar Janela
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSendWhatsApp} className="p-6 space-y-4 max-h-[82vh] overflow-y-auto">
            
            {/* Product selection dropdown grouped by client categories */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Produto do Catálogo
              </label>
              <select
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#f48120] font-medium"
              >
                <optgroup label="PISOS">
                  {CLIENT_PRODUCTS.filter(p => p.category === 'Pisos').map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} - {p.dimensoes}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="BLOCOS">
                  {CLIENT_PRODUCTS.filter(p => p.category === 'Blocos').map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} - {p.dimensoes}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="MEIO FIO - GUIA">
                  {CLIENT_PRODUCTS.filter(p => p.category === 'Meio Fio - Guia').map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} - {p.dimensoes}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="LAJOTA">
                  {CLIENT_PRODUCTS.filter(p => p.category === 'Lajota').map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} - {p.dimensoes}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            {/* Area/Quantity and Color Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  {isLinear ? "Comprimento Estimado (Metros)" : "Área Estimada (m²)"}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#f48120]"
                    placeholder="Ex: 100"
                    required
                  />
                  <span className="absolute right-3.5 top-2.5 text-xs font-bold text-slate-400">
                    {isLinear ? "m" : "m²"}
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Cor / Acabamento
                </label>
                <select
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#f48120]"
                >
                  <option value="Cinza Natural">Cinza Natural (Padrão)</option>
                  <option value="Grafite / Preto">Grafite / Preto</option>
                  <option value="Vermelho / Terracota">Vermelho / Terracota</option>
                  <option value="Amarelo">Amarelo</option>
                  <option value="Mesclado">Mesclado / Especial</option>
                </select>
              </div>
            </div>

            {/* Quick calculation preview box */}
            {numArea > 0 && (
              <div className="p-3 bg-amber-50/80 border border-amber-200/70 rounded flex items-center justify-between text-xs text-amber-950">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#f48120]" />
                  <span>Estimativa de peças:</span>
                </div>
                <div className="font-bold text-slate-900 font-mono">
                  ≈ {estimatedPieces.toLocaleString('pt-BR')} peças ({currentProduct.dimensoes})
                </div>
              </div>
            )}

            {/* Name, Phone and City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Seu Nome / Construtora
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#f48120]"
                  placeholder="Nome do responsável"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  WhatsApp / Telefone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#f48120]"
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Cidade e Bairro da Obra
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#f48120]"
                placeholder="Ex: São Paulo - SP (Zona Sul)"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Observações ou Dúvidas (Opcional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 border border-slate-300 rounded text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#f48120]"
                placeholder="Ex: Necessidade de descarga com caminhão munck, prazo de início..."
              />
            </div>

            {/* Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="w-full flex-1 flex items-center justify-center gap-2 bg-[#f48120] text-white py-3 px-6 rounded font-bold text-xs uppercase tracking-wider hover:bg-[#e07217] transition-all shadow-md active:scale-[0.99] cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                Receber Orçamento no WhatsApp
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 border border-slate-300 text-slate-700 font-semibold text-xs rounded hover:bg-slate-100 transition-colors uppercase"
              >
                Cancelar
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
