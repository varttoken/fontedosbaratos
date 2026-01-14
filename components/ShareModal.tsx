import React from 'react';
import { IMAGES } from '../constants';

interface ShareModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const SHARE_LINK = "https://www.tiktok.com/@fontedosbaratos?is_from_webapp=1&sender_device=pc";

    const handleShare = (platform: string) => {
        const text = "Confira essa oferta incrível!";
        const url = encodeURIComponent(SHARE_LINK);
        let shareUrl = "";

        switch(platform) {
            case 'whatsapp':
                shareUrl = `https://wa.me/?text=${encodeURIComponent(text + " " + SHARE_LINK)}`;
                break;
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                break;
            case 'telegram':
                shareUrl = `https://t.me/share/url?url=${url}&text=${encodeURIComponent(text)}`;
                break;
            case 'stories':
                window.open(SHARE_LINK, '_blank');
                return;
        }
        if (shareUrl) window.open(shareUrl, '_blank');
    }

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative w-full max-w-md bg-white dark:bg-[#1c1c1e] rounded-t-[2.5rem] sm:rounded-3xl shadow-2xl animate-[slideUp_0.3s_ease-out] overflow-hidden">
                {/* Handle */}
                <div className="flex h-8 w-full items-center justify-center" onClick={onClose}>
                    <div className="h-1.5 w-12 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                </div>

                <div className="px-4 pt-2">
                    <h4 className="text-zinc-900 dark:text-white text-lg font-bold text-center">Compartilhar Oferta</h4>
                </div>

                {/* Product Preview */}
                <div className="p-4">
                    <div className="flex items-center justify-between gap-4 rounded-xl bg-gray-50 dark:bg-zinc-800/50 p-3 border border-zinc-100 dark:border-zinc-700">
                        <div className="flex flex-col gap-1 flex-[2_2_0px]">
                            <p className="text-zinc-900 dark:text-zinc-100 text-sm font-semibold line-clamp-1">Fone de Ouvido Bluetooth Premium</p>
                            <p className="text-[#ea2a33] text-lg font-bold">R$ 149,90</p>
                            <p className="text-zinc-500 text-xs">Disponível em 4 cores</p>
                        </div>
                        <div className="w-20 h-20 bg-center bg-cover rounded-lg shrink-0" style={{ backgroundImage: `url(${IMAGES.headphoneHero})` }}></div>
                    </div>
                </div>

                {/* Social Grid */}
                <div className="px-4 py-2">
                    <div className="grid grid-cols-4 gap-2">
                        <div onClick={() => handleShare('whatsapp')} className="flex flex-col items-center gap-2 py-2 group cursor-pointer">
                            <div className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center shadow-md active:scale-95 transition-transform">
                                <span className="material-symbols-outlined text-white text-3xl">chat</span>
                            </div>
                            <p className="text-zinc-900 dark:text-zinc-300 text-xs font-medium">WhatsApp</p>
                        </div>
                        <div onClick={() => handleShare('stories')} className="flex flex-col items-center gap-2 py-2 group cursor-pointer">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#fdf497] via-[#fd5949] to-[#285AEB] flex items-center justify-center shadow-md active:scale-95 transition-transform">
                                <span className="material-symbols-outlined text-white text-3xl">history_toggle_off</span>
                            </div>
                            <p className="text-zinc-900 dark:text-zinc-300 text-xs font-medium">Stories</p>
                        </div>
                        <div onClick={() => handleShare('facebook')} className="flex flex-col items-center gap-2 py-2 group cursor-pointer">
                            <div className="w-14 h-14 rounded-2xl bg-[#1877F2] flex items-center justify-center shadow-md active:scale-95 transition-transform">
                                <span className="material-symbols-outlined text-white text-3xl">public</span>
                            </div>
                            <p className="text-zinc-900 dark:text-zinc-300 text-xs font-medium">Facebook</p>
                        </div>
                        <div onClick={() => handleShare('telegram')} className="flex flex-col items-center gap-2 py-2 group cursor-pointer">
                            <div className="w-14 h-14 rounded-2xl bg-[#0088cc] flex items-center justify-center shadow-md active:scale-95 transition-transform">
                                <span className="material-symbols-outlined text-white text-3xl">send</span>
                            </div>
                            <p className="text-zinc-900 dark:text-zinc-300 text-xs font-medium">Telegram</p>
                        </div>
                    </div>
                </div>

                {/* Copy Link */}
                <div className="px-4 py-4">
                    <div className="flex items-center gap-3 bg-gray-50 dark:bg-zinc-800 px-4 py-3 rounded-xl border border-dashed border-zinc-300 dark:border-zinc-600">
                        <div className="flex items-center justify-center rounded-lg bg-white dark:bg-zinc-700 shrink-0 w-9 h-9 shadow-sm">
                            <span className="material-symbols-outlined text-xl dark:text-white">link</span>
                        </div>
                        <div className="flex flex-col flex-1 overflow-hidden">
                            <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-wider">Link da Oferta</p>
                            <p className="text-zinc-900 dark:text-zinc-100 text-sm font-medium truncate">{SHARE_LINK}</p>
                        </div>
                        <button 
                            onClick={() => {
                                navigator.clipboard.writeText(SHARE_LINK);
                            }}
                            className="flex min-w-[70px] items-center justify-center rounded-lg h-9 px-4 bg-[#ea2a33] text-white text-sm font-bold shadow-lg active:scale-95 transition-transform">
                            Copiar
                        </button>
                    </div>
                </div>

                <div className="px-4 pb-8 pt-2">
                    <button onClick={onClose} className="w-full py-4 text-zinc-500 dark:text-zinc-400 font-semibold text-base active:opacity-60 transition-opacity">
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShareModal;