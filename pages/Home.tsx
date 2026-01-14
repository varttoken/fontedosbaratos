import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#f8f6f6] dark:bg-[#121212] min-h-screen pb-24 text-slate-900 dark:text-white">
            {/* Header */}
            <header className="sticky top-0 z-30 bg-white/95 dark:bg-[#121212]/95 backdrop-blur-md border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center p-4 pb-2 justify-between max-w-md mx-auto">
                    <div className="flex items-center gap-2">
                        <div className="bg-white dark:bg-white/10 p-1 rounded-lg flex items-center justify-center">
                           <span className="material-symbols-outlined text-viral text-3xl">bolt</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-base font-bold leading-none tracking-tight text-[#373c46] dark:text-white">Fonte dos Baratos</h1>
                            <span className="text-[10px] font-medium text-viral uppercase tracking-tighter">Economia no seu bolso</span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white">
                            <span className="material-symbols-outlined text-[24px]">shopping_cart</span>
                        </button>
                    </div>
                </div>
                
                {/* TikTok Banner */}
                <div className="px-4 py-2 max-w-md mx-auto">
                    <div className="bg-black rounded-xl p-3 flex items-center justify-between border-l-2 border-tiktokCyan border-r-2 border-tiktokMagenta">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                                <span className="font-bold text-black text-xs">Tik</span>
                            </div>
                            <div>
                                <p className="text-white text-xs font-bold leading-tight">Siga a Fonte no TikTok</p>
                                <div className="flex items-center gap-2 mt-0.5">
                                    <p className="text-slate-400 text-[10px]">@fontedosbaratos</p>
                                    <button onClick={() => window.open("https://www.tiktok.com/@fontedosbaratos?is_from_webapp=1&sender_device=pc", "_blank")} className="text-viral text-[10px] font-bold uppercase tracking-wider hover:opacity-80">Seguir</button>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => window.open("https://www.tiktok.com/@fontedosbaratos?is_from_webapp=1&sender_device=pc", "_blank")} className="bg-viral text-white px-4 py-1.5 rounded-full text-xs font-bold">Seguir</button>
                    </div>
                </div>

                {/* Search */}
                <div className="px-4 py-3 max-w-md mx-auto relative">
                    <label className="flex flex-col min-w-40 h-11 w-full relative">
                        <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm border border-slate-200 dark:border-white/10 overflow-hidden">
                            <div className="text-slate-400 flex border-none bg-slate-100 dark:bg-white/5 items-center justify-center pl-4">
                                <span className="material-symbols-outlined text-xl">search</span>
                            </div>
                            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-slate-100 dark:bg-white/5 h-full placeholder:text-slate-400 px-3 text-sm font-normal" placeholder="Encontre produtos virais..." />
                        </div>
                    </label>
                </div>

                {/* Categories */}
                <div className="flex gap-3 px-4 pb-3 overflow-x-auto no-scrollbar max-w-md mx-auto">
                    <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-viral px-5 shadow-lg shadow-viral/20">
                        <p className="text-white text-sm font-semibold">Tudo</p>
                    </div>
                    {['Eletrônicos', 'Beleza', 'Cozinha'].map(cat => (
                        <div key={cat} className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-100 dark:bg-white/5 px-5">
                            <p className="text-slate-600 dark:text-slate-300 text-sm font-medium">{cat}</p>
                        </div>
                    ))}
                </div>
            </header>

            <main className="max-w-md mx-auto">
                {/* Community Favorites */}
                <div className="py-6 overflow-hidden">
                    <div className="px-4 flex justify-between items-end mb-4">
                        <div>
                            <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Os Favoritos da Comunidade</h3>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold tracking-widest">Bombando Agora</p>
                        </div>
                        <button className="text-viral text-xs font-bold flex items-center gap-1 uppercase">
                            Ranking <span className="material-symbols-outlined text-sm">trending_up</span>
                        </button>
                    </div>
                    <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar snap-x">
                        {PRODUCTS.slice(1).concat(PRODUCTS[0]).map((product, index) => (
                             <div key={product.id} className="flex-shrink-0 w-40 snap-start" onClick={() => navigate('/product')}>
                                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-2 bg-slate-200 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                                    <img alt={product.title} className="w-full h-full object-cover" src={product.image} />
                                    <div className="absolute top-2 left-2 w-7 h-7 bg-viral text-white flex items-center justify-center rounded-lg font-bold shadow-lg text-sm border border-white/20">{index + 1}</div>
                                    <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[12px] text-viral fill">favorite</span>
                                        <span className="text-[10px] font-bold text-white">{product.soldCount}</span>
                                    </div>
                                </div>
                                <h4 className="text-xs font-semibold line-clamp-1 dark:text-slate-200">{product.title}</h4>
                                <p className="text-viral text-xs font-bold">R$ {product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hero / Daily Offers */}
                <div className="px-4 py-2">
                    <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[180px] relative group shadow-xl" style={{ backgroundImage: `linear-gradient(to top, rgba(55, 60, 70, 0.9) 0%, rgba(55, 60, 70, 0.3) 60%), url(${PRODUCTS[3].image})` }}>
                        <div className="absolute top-4 right-4 bg-viral text-white px-3 py-1 rounded-lg font-bold text-xs uppercase tracking-wider">Ofertas do Dia</div>
                        <div className="p-4 w-full">
                            <p className="text-white text-2xl font-bold leading-tight mb-2">Descontos de até 70%</p>
                            <div className="flex gap-2 items-center">
                                <p className="text-white/80 text-xs font-medium uppercase tracking-widest">Acaba em:</p>
                                <div className="flex gap-1.5 items-center">
                                    {['12', '45', '32'].map((t, i) => (
                                        <React.Fragment key={i}>
                                            <div className="flex h-7 w-8 items-center justify-center rounded bg-white/20 backdrop-blur-sm border border-white/10">
                                                <p className="text-white text-xs font-bold">{t}</p>
                                            </div>
                                            {i < 2 && <span className="text-white text-xs">:</span>}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TikTok Highlights Grid */}
                <div className="px-4 flex justify-between items-center mb-4 mt-8">
                    <h3 className="text-lg font-bold tracking-tight flex items-center gap-2">
                        Destaque do TikTok <span className="text-xl">🔥</span>
                    </h3>
                    <button className="text-viral text-sm font-semibold">Ver tudo</button>
                </div>
                
                <div className="grid grid-cols-2 gap-4 px-4">
                    {PRODUCTS.slice(0, 2).map((product) => (
                        <div key={product.id} className="flex flex-col bg-white dark:bg-white/5 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm group active:scale-95 transition-transform relative" onClick={() => navigate('/product')}>
                            <div className="relative aspect-square bg-slate-200 dark:bg-white/5">
                                <img alt={product.title} className="w-full h-full object-cover" src={product.image} />
                                <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-md text-[10px] text-white px-2 py-0.5 rounded-full flex items-center gap-1">
                                    <span className="material-symbols-outlined text-xs text-viral fill">trending_up</span>
                                    <span>Viral</span>
                                </div>
                                <div className="absolute bottom-2 right-2 flex flex-col gap-1.5">
                                    <button className="w-8 h-8 rounded-full bg-white/90 dark:bg-black/70 backdrop-blur-md flex items-center justify-center text-slate-700 dark:text-white shadow-sm hover:scale-105 transition-transform">
                                        <span className="material-symbols-outlined text-sm">favorite</span>
                                    </button>
                                     <button className="w-8 h-8 rounded-full bg-white/90 dark:bg-black/70 backdrop-blur-md flex items-center justify-center text-slate-700 dark:text-white shadow-sm hover:scale-105 transition-transform">
                                        <span className="material-symbols-outlined text-sm">share</span>
                                    </button>
                                </div>
                            </div>
                            <div className="p-3 flex flex-col flex-1">
                                <p className="text-[10px] text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-tight">{product.soldCount}+ vendidos</p>
                                <h4 className="text-sm font-medium line-clamp-2 leading-snug mb-2 flex-1 dark:text-white">{product.title}</h4>
                                <div className="flex flex-col gap-0.5 mb-3">
                                    <span className="text-[10px] text-slate-400 line-through font-medium">R$ {product.originalPrice}</span>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-lg font-bold text-viral leading-none">R$ {product.price}</span>
                                        {product.discount && (
                                            <div className="flex items-center gap-0.5 bg-emerald-500/10 dark:bg-emerald-500/20 px-1 py-0.5 rounded">
                                                <span className="material-symbols-outlined text-[10px] text-emerald-500 fill">verified</span>
                                                <span className="text-[8px] font-bold text-emerald-600 dark:text-emerald-400 uppercase leading-none">Link Verificado</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.open("https://www.tiktok.com/@fontedosbaratos?is_from_webapp=1&sender_device=pc", "_blank");
                                    }}
                                    className="w-full bg-black dark:bg-viral text-white py-2.5 rounded-lg text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 border-b-2 border-tiktokCyan">
                                     {product.discount ? 'Comprar no TikTok' : 'Comprar Agora'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Profile Promo */}
                <div className="mt-8 px-4 mb-8">
                    <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-slate-200 dark:border-white/10 shadow-sm text-center">
                        <div className="w-20 h-20 bg-slate-100 dark:bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-viral">
                            <span className="material-symbols-outlined text-4xl text-slate-400">person</span>
                        </div>
                        <h2 className="text-xl font-bold mb-1">Seu Perfil</h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Acompanhe seus achadinhos favoritos</p>
                        <button onClick={() => window.open("https://www.tiktok.com/@fontedosbaratos?is_from_webapp=1&sender_device=pc", "_blank")} className="w-full bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-xl relative overflow-hidden group">
                            <span className="material-symbols-outlined text-tiktokCyan">brand_awareness</span>
                            Visitar Perfil Oficial
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;