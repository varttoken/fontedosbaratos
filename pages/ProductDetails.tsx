import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS, IMAGES } from '../constants';
import ShareModal from '../components/ShareModal';

const ProductDetails: React.FC = () => {
    const navigate = useNavigate();
    const product = PRODUCTS[0];
    const [isShareOpen, setIsShareOpen] = useState(false);

    return (
        <div className="bg-[#121212] min-h-screen text-white">
            <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between p-4 max-w-md mx-auto pointer-events-none">
                <button onClick={() => navigate(-1)} className="bg-black/30 backdrop-blur-md p-2 rounded-full shadow-lg text-white flex items-center justify-center pointer-events-auto">
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-white/20 pointer-events-auto">
                    <div className="w-6 h-6 rounded-full bg-[#f17373] flex items-center justify-center text-[10px] font-bold text-white">FB</div>
                    <span className="text-xs font-bold text-white">Fonte dos Baratos</span>
                    <button onClick={() => window.open("https://www.tiktok.com/@fontedosbaratos?is_from_webapp=1&sender_device=pc", "_blank")} className="ml-1 bg-[#f17373] text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-0.5 active:scale-95 transition-transform">
                        <span className="material-symbols-outlined text-[12px] font-bold">add</span>
                        Seguir
                    </button>
                </div>
                <button className="bg-black/30 backdrop-blur-md p-2 rounded-full shadow-lg text-white flex items-center justify-center pointer-events-auto">
                    <span className="material-symbols-outlined">more_vert</span>
                </button>
            </nav>

            <main className="max-w-md mx-auto pb-32">
                <div className="relative w-full aspect-square bg-white/5 overflow-hidden">
                    <img alt={product.title} className="w-full h-full object-cover" src={product.image} />
                    <div className="absolute top-20 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/20">
                        <span className="material-symbols-outlined text-[#f17373] text-sm fill">trending_up</span>
                        <span className="text-white text-[10px] font-bold uppercase tracking-wider">TikTok Viral</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-[#f17373]/90 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm group animate-pulse-fast">
                            <span className="material-symbols-outlined text-4xl fill translate-x-0.5">play_arrow</span>
                        </button>
                    </div>
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
                        <div className="h-1.5 w-6 bg-[#f17373] rounded-full"></div>
                        <div className="h-1.5 w-1.5 bg-white/50 rounded-full"></div>
                        <div className="h-1.5 w-1.5 bg-white/50 rounded-full"></div>
                    </div>
                </div>

                <div className="flex items-center justify-around py-4 px-6 border-b border-white/5">
                    <button className="flex flex-col items-center gap-1 group">
                        <span className="material-symbols-outlined text-2xl text-slate-400 group-hover:text-[#f17373] transition-colors">favorite</span>
                        <span className="text-[10px] font-bold text-slate-500">2.4k</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 group">
                        <span className="material-symbols-outlined text-2xl text-slate-400 group-hover:text-[#f17373] transition-colors">comment</span>
                        <span className="text-[10px] font-bold text-slate-500">128</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 group">
                        <span className="material-symbols-outlined text-2xl text-slate-400 group-hover:text-[#f17373] transition-colors">bookmark</span>
                        <span className="text-[10px] font-bold text-slate-500">Salvar</span>
                    </button>
                    <button onClick={() => setIsShareOpen(true)} className="flex flex-col items-center gap-1 group">
                        <span className="material-symbols-outlined text-2xl text-slate-400 group-hover:text-[#f17373] transition-colors">share</span>
                        <span className="text-[10px] font-bold text-slate-500">Enviar</span>
                    </button>
                </div>

                <div className="px-5 pt-6 flex flex-col gap-4">
                    <div>
                        <h1 className="text-xl font-bold leading-tight mb-2">Headphone Bluetooth Noise Cancelling Pro - Edição Limitada</h1>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center text-amber-400">
                                {[1,2,3,4].map(s => <span key={s} className="material-symbols-outlined text-sm fill">star</span>)}
                                <span className="material-symbols-outlined text-sm fill">star_half</span>
                            </div>
                            <span className="text-xs text-slate-400 font-medium">4.8 (1,240 avaliações)</span>
                        </div>
                    </div>

                    <div className="bg-[#f17373]/10 rounded-2xl p-4 border border-[#f17373]/20">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-xs font-bold text-[#f17373] uppercase tracking-widest flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">bolt</span>
                                Price Drop
                            </span>
                            <div className="flex gap-1.5 items-center">
                                <span className="text-[10px] text-slate-400 uppercase font-bold mr-1">Termina em:</span>
                                {['12', '45', '32'].map((t, i) => (
                                    <React.Fragment key={i}>
                                        <div className="flex h-6 w-7 items-center justify-center rounded bg-[#f17373] text-white text-[10px] font-bold">{t}</div>
                                        {i < 2 && <span className="text-[#f17373] font-bold">:</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-baseline gap-3">
                            <span className="text-3xl font-black text-[#f17373]">R$ 89,90</span>
                            <span className="text-sm text-slate-400 line-through font-medium">R$ 299,00</span>
                            <span className="bg-[#f17373]/20 text-[#f17373] text-[10px] font-bold px-2 py-0.5 rounded ml-auto">-70%</span>
                        </div>
                    </div>

                    <div className="py-2">
                        <h3 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">description</span>
                            Descrição do Produto
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-[#f17373] text-lg">check_circle</span>
                                <p className="text-sm text-slate-400">Cancelamento de ruído ativo profissional (ANC) para foco total.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-[#f17373] text-lg">check_circle</span>
                                <p className="text-sm text-slate-400">Bateria de ultra-longa duração com até 40 horas de reprodução contínua.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-[#f17373] text-lg">check_circle</span>
                                <p className="text-sm text-slate-400">Drivers de 40mm para graves profundos e som cristalino.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>

            <div className="fixed bottom-0 left-0 right-0 bg-[#121212] border-t border-white/10 px-5 pb-8 pt-4 max-w-md mx-auto shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-30">
                <div className="flex gap-4">
                    <button onClick={() => setIsShareOpen(true)} className="w-14 h-12 rounded-xl border-2 border-white/10 flex items-center justify-center text-slate-300 active:text-[#f17373] active:border-[#f17373] transition-colors">
                        <span className="material-symbols-outlined">share</span>
                    </button>
                    <button 
                        onClick={() => window.open("https://www.tiktok.com/@fontedosbaratos?is_from_webapp=1&sender_device=pc", "_blank")}
                        className="flex-1 bg-[#f17373] hover:opacity-95 text-white h-12 rounded-xl flex items-center justify-center gap-3 font-bold text-sm shadow-lg shadow-[#f17373]/25 transition-all active:scale-95">
                        <span className="material-symbols-outlined text-lg">shopping_bag</span>
                        Ir para a Loja
                        <div className="flex items-center gap-1.5 ml-2 pl-3 border-l border-white/20">
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </div>
                    </button>
                </div>
            </div>

            <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
        </div>
    );
};

export default ProductDetails;