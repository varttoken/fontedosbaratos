import React from 'react';
import { useNavigate } from 'react-router-dom';
import { COUPONS } from '../constants';

const Coupons: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-[#181211] min-h-screen pb-24 text-white">
            <header className="sticky top-0 z-50 bg-[#181211] border-b border-white/5">
                <div className="flex items-center p-4 pb-2 justify-between max-w-md mx-auto">
                    <div onClick={() => navigate('/')} className="flex size-12 shrink-0 items-center justify-start cursor-pointer">
                        <span className="material-symbols-outlined text-white">arrow_back_ios</span>
                    </div>
                    <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Cupons e Ofertas</h2>
                    <div className="flex w-12 items-center justify-end">
                        <button className="flex items-center justify-center rounded-lg h-12 bg-transparent text-white">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-md mx-auto">
                {/* Search */}
                <div className="px-4 py-4">
                    <label className="flex flex-col min-w-40 h-12 w-full">
                        <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
                            <div className="text-[#b8a29d] flex border-none bg-[#382b29] items-center justify-center pl-4 rounded-l-xl">
                                <span className="material-symbols-outlined text-[20px]">search</span>
                            </div>
                            <input className="form-input flex w-full min-w-0 flex-1 border-none bg-[#382b29] text-white focus:ring-0 h-full placeholder:text-[#b8a29d] px-4 rounded-r-xl text-base font-normal" placeholder="Procurar cupom Shopee, Amazon..." type="text" />
                        </div>
                    </label>
                </div>

                {/* Chips */}
                <div className="flex gap-3 px-4 pb-6 overflow-x-auto no-scrollbar">
                    <div className="flex h-9 shrink-0 items-center justify-center px-5 rounded-full bg-[#ea4a2a] text-white shadow-lg shadow-[#ea4a2a]/20">
                        <p className="text-sm font-semibold">Todos</p>
                    </div>
                    {['Shopee', 'Amazon', 'AliExpress', 'Mercado Livre'].map(chip => (
                         <div key={chip} className="flex h-9 shrink-0 items-center justify-center px-5 rounded-full bg-[#382b29] text-white">
                            <p className="text-sm font-medium">{chip}</p>
                        </div>
                    ))}
                </div>

                {/* List */}
                <div className="flex flex-col gap-4 px-4">
                    {COUPONS.map(coupon => (
                        <div key={coupon.id} className="relative flex flex-col items-stretch justify-start rounded-xl overflow-hidden shadow-xl bg-[#261e1c] border border-white/5">
                            {/* Populares Tag */}
                             {coupon.id === "1" && (
                                <div className="absolute top-4 right-4 bg-[#ea4a2a]/10 text-[#ea4a2a] px-2 py-1 rounded-md flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] fill">local_fire_department</span>
                                    <span className="text-[10px] font-bold uppercase tracking-wider">Populares</span>
                                </div>
                             )}

                            <div className="p-5 flex gap-4 items-center">
                                <div className={`size-16 rounded-xl ${coupon.bgColor} flex items-center justify-center shrink-0`}>
                                    <img className="size-10 object-contain" src={coupon.logo} alt={coupon.store} />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[#b8a29d] text-[11px] font-semibold uppercase tracking-widest">{coupon.store}</p>
                                    <p className="text-white text-2xl font-extrabold tracking-tight">{coupon.offer}</p>
                                </div>
                            </div>
                            
                            <div className="px-5 pb-2">
                                <p className="text-[#b8a29d] text-sm leading-relaxed">{coupon.description}</p>
                            </div>

                            <div className="border-t-2 border-dashed border-[#382b29] mx-5 my-2"></div>

                            <div className="p-4 flex flex-col gap-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-[#ea4a2a] text-[18px]">group</span>
                                        <span className="text-[#b8a29d] text-xs font-medium">Usado por {coupon.usedCount} pessoas hoje</span>
                                    </div>
                                    <span className="text-xs font-bold text-green-500">ATIVO</span>
                                </div>
                                <button 
                                    onClick={() => window.open("https://www.tiktok.com/@fontedosbaratos?is_from_webapp=1&sender_device=pc", "_blank")}
                                    className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-[#ea4a2a] text-white text-sm font-bold shadow-lg shadow-[#ea4a2a]/30 active:scale-[0.98] transition-transform">
                                    <span className="material-symbols-outlined mr-2 text-[20px]">content_copy</span>
                                    <span className="truncate">Copiar e Ir para a Loja</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Coupons;