import React, { useState } from 'react';
import { CheckCircle2, Phone, Mail, MapPin, Send } from 'lucide-react';
import { CLIENT_PRODUCTS } from './ProductsSection';

export function ContactSection() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [produto, setProduto] = useState('PISO GRAMA 16 FACES 6CM');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  const bgUrl = "https://content.app-sources.com/s/4184156413966117/uploads/Images/PAVEMIXBLOCO-8602796.png?format=webp";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = `*SOLICITAÇÃO DE ORÇAMENTO - MIXBLOCO*\n\n` +
      `*Nome:* ${nome || 'Não informado'}\n` +
      `*Email:* ${email || 'Não informado'}\n` +
      `*Telefone:* ${telefone || 'Não informado'}\n` +
      `*Produto:* ${produto}\n` +
      (mensagem ? `*Mensagem:* ${mensagem}\n\n` : `\n`) +
      `Olá, gostaria de receber uma cotação para o produto selecionado.`;

    const encoded = encodeURIComponent(texto);
    window.open(`https://wa.me/5583988856056?text=${encoded}`, '_blank');
    setEnviado(true);
  };

  return (
    <section 
      id="contatos" 
      className="relative bg-white text-slate-800 scroll-mt-6 border-t border-slate-200 overflow-hidden"
    >
      {/* Decorative top dark stripe or subtle transition */}
      <div className="w-full h-2 bg-[#0f1d2e]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Watermark Paver Pattern, Logo & Contact Details */}
          <div className="lg:col-span-5 relative flex flex-col justify-center py-6 px-2 sm:px-6">
            
            {/* Subtle paver interlocking watermark background (SVG matching the image) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-5 -z-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 L20 0 L40 20 L20 40 Z M40 60 L60 40 L80 60 L60 80 Z M20 40 L60 0 M20 80 L60 40' stroke='%23000' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
                backgroundSize: '120px 120px'
              }}
              aria-hidden="true"
            />

            {/* Mixbloco Brand Logo identical to image */}
            <div className="mb-6">
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="text-3xl sm:text-4xl font-black tracking-tight text-[#f48120]">
                    MIX
                  </span>
                  <span className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                    BLOCO
                  </span>
                </div>
                <div className="text-lg sm:text-xl font-black tracking-tight text-slate-900 -mt-1 uppercase">
                  PRÉ-MOLDADOS
                </div>
              </div>
            </div>

            {/* Address and Contact Information */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              <p className="text-slate-600">
                Rua Antônio Francisco de Araújo, s/n, quadra D,<br />
                Lote R66, Parque Esperança, Cabedelo/PB
              </p>

              <p className="pt-2">
                <span className="text-slate-600">Phone: </span>
                <a 
                  href="tel:8332685052" 
                  className="text-[#f48120] font-semibold hover:underline"
                >
                  (83) 3268-5052
                </a>
                <span className="text-slate-400"> / </span>
                <a 
                  href="https://wa.me/5583988856056" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#f48120] font-semibold hover:underline"
                >
                  (83) 98885-6056
                </a>
              </p>

              <p>
                <span className="text-slate-600">Email: </span>
                <a 
                  href="mailto:contato@mixbloco.com" 
                  className="text-[#f48120] font-semibold hover:underline"
                >
                  contato@mixbloco.com
                </a>
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: Form Card over Pavers Background */}
          <div className="lg:col-span-7 relative rounded-lg overflow-hidden shadow-2xl border border-slate-200">
            
            {/* Background photo of pavers & tools with a soft white frosted wash */}
            <div 
              className="absolute inset-0 bg-cover bg-center -z-10"
              style={{
                backgroundImage: `url("${bgUrl}")`,
              }}
              aria-hidden="true"
            />
            {/* Translucent overlay that reveals the tools & pavement texture softly */}
            <div 
              className="absolute inset-0 bg-white/88 backdrop-blur-[2px] -z-10" 
              aria-hidden="true" 
            />

            {/* Form Inner Content */}
            <div className="p-6 sm:p-10">
              
              {/* Form Title */}
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-slate-950 tracking-tight">
                ORÇAMENTO
              </h2>

              {/* Form Subtitle */}
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
                Solicite seu orçamento conosco preenchendo as informações abaixo que em breve retornaremos.
              </p>

              {enviado ? (
                <div className="mt-6 p-6 bg-white/95 rounded border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Orçamento Iniciado com Sucesso!
                  </h3>
                  <p className="text-xs text-slate-600">
                    Sua mensagem foi direcionada ao nosso WhatsApp comercial da unidade Cabedelo/PB. Responderemos em instantes.
                  </p>
                  <button
                    type="button"
                    onClick={() => setEnviado(false)}
                    className="mt-2 px-4 py-2 bg-[#f48120] text-white text-xs font-bold rounded uppercase hover:bg-[#e07217]"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  
                  {/* Row 1: Nome and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-700 font-medium mb-1">
                        Nome
                      </label>
                      <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                        className="w-full bg-white/90 border border-slate-300 rounded px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#f48120] focus:border-transparent shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-slate-700 font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-white/90 border border-slate-300 rounded px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#f48120] focus:border-transparent shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Row 2: Telefone and Produto */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-700 font-medium mb-1">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        required
                        placeholder="(00) 00000-0000"
                        className="w-full bg-white/90 border border-slate-300 rounded px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#f48120] focus:border-transparent shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-slate-700 font-medium mb-1">
                        Produto
                      </label>
                      <select
                        value={produto}
                        onChange={(e) => setProduto(e.target.value)}
                        className="w-full bg-white/90 border border-slate-300 rounded px-3 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#f48120] focus:border-transparent shadow-2xs"
                      >
                        <option value="PISO GRAMA 16 FACES 6CM">PISO GRAMA 16 FACES 6CM</option>
                        {CLIENT_PRODUCTS.map((p) => (
                          <option key={p.id} value={`${p.name} - ${p.dimensoes}`}>
                            {p.name} - {p.dimensoes}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Mensagem */}
                  <div>
                    <label className="block text-xs text-slate-700 font-medium mb-1">
                      Mensagem
                    </label>
                    <textarea
                      rows={3}
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                      placeholder="Descreva detalhes como metragem da obra ou prazo desejado..."
                      className="w-full bg-white/90 border border-slate-300 rounded px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#f48120] focus:border-transparent shadow-2xs"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#f48120] hover:bg-[#e07217] active:scale-[0.99] text-white py-3 px-6 rounded-none font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>ENVIAR ORÇAMENTO</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>

      {/* Decorative Bottom Diamond / Point Cutout leading into Footer as shown in image */}
      <div className="w-full flex justify-center -mb-3 relative z-10">
        <div className="w-6 h-6 bg-slate-900 rotate-45 border-2 border-white shadow-sm" />
      </div>
    </section>
  );
}
