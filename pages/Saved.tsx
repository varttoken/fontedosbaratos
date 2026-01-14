import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SAVED_ITEMS } from '../constants';

const Saved: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-[#f8f6f6] min-h-screen pb-24 text-[#181211]">
             <header className="sticky top-0 z-50 bg-[#f8f6f6]/80 backdrop-blur-md border-b border-gray-200">
                <div className="flex items-center p-4 justify-between max-w-md mx-auto">
                    <div className="flex items-center gap-3">
                        <button onClick={() => navigate('/')} className="text-[#181211] flex items-center justify-center p-1 rounded-full hover:bg-black/5">
                            <span className="material-symbols-outlined text-2xl">chevron_left</span>
                        </button>
                        <h1 className="text-[#181211] text-xl font-bold leading-tight tracking-tight">Salvos</h1>
                    </div>
                    <button className="text-[#ea4a2a] text-sm font-semibold hover:opacity-80 transition-opacity">
                        Limpar tudo
                    </button>
                </div>
            </header>

            <main className="max-w-md mx-auto">
                <div className="px-4 py-4">
                    <div className="flex h-11 items-center justify-center rounded-xl bg-gray-200/50 p-1">
                        <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 bg-white shadow-sm text-[#ea4a2a] text-sm font-semibold leading-normal transition-all">
                            <span className="truncate">Todos</span>
                            <input className="invisible w-0" name="filter" type="radio" value="Todos" defaultChecked />
                        </label>
                         <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-gray-500 text-sm font-semibold leading-normal transition-all">
                            <span className="truncate">Em estoque</span>
                            <input className="invisible w-0" name="filter" type="radio" value="Em estoque" />
                        </label>
                         <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-gray-500 text-sm font-semibold leading-normal transition-all">
                            <span className="truncate">Baixou o preço</span>
                            <input className="invisible w-0" name="filter" type="radio" value="Baixou o preço" />
                        </label>
                    </div>
                </div>

                <div className="flex flex-col gap-4 px-4">
                    {SAVED_ITEMS.map(item => (
                        <div key={item.id} className="flex items-center gap-4 rounded-xl bg-white p-3 shadow-sm border border-gray-100 relative group">
                            <div className="relative h-24 w-24 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
                                <div className="w-full h-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${item.image})` }}></div>
                            </div>
                            <div className="flex flex-col flex-1 gap-1 min-w-0">
                                {item.priceDrop && (
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#ea4a2a] bg-[#ea4a2a]/10 px-1.5 py-0.5 rounded">BAIXOU O PREÇO</span>
                                    </div>
                                )}
                                <h3 className="text-[#181211] text-[15px] font-bold leading-snug line-clamp-2">{item.title}</h3>
                                <div className="flex items-baseline gap-2">
                                    <p className="text-[#ea4a2a] text-lg font-bold">R$ {item.price}</p>
                                    {item.originalPrice && <p className="text-gray-400 text-xs line-through">R$ {item.originalPrice}</p>}
                                </div>
                                <div className="flex items-center justify-between mt-1">
                                    <button 
                                        onClick={() => window.open("https://www.tiktok.com/@fontedosbaratos?is_from_webapp=1&sender_device=pc", "_blank")}
                                        className="flex items-center justify-center rounded-lg h-9 px-4 bg-[#ea4a2a] text-white text-sm font-bold hover:bg-[#ea4a2a]/90 active:scale-95 transition-all">
                                        Ver Oferta
                                    </button>
                                </div>
                            </div>
                            <button className="absolute top-3 right-3 text-[#ea4a2a]">
                                <span className="material-symbols-outlined fill text-2xl">favorite</span>
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Saved;