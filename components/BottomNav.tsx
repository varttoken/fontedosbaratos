import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BottomNav: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    // Different active colors based on the page theme logic in screenshots
    const getActiveColor = () => {
        if (isActive('/')) return 'text-[#f07878]'; // Viral Pink
        if (isActive('/coupons')) return 'text-[#ea4a2a]'; // Coupon Orange
        if (isActive('/profile')) return 'text-[#ea2a33]'; // Profile Red
        if (isActive('/saved')) return 'text-[#ea4a2a]'; // Saved Orange
        return 'text-primary'; 
    };

    const activeColor = getActiveColor();

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-[#121212]/95 backdrop-blur-lg border-t border-gray-200 dark:border-white/10 px-6 pb-safe pt-3 flex justify-between items-center max-w-md mx-auto z-40">
            <button onClick={() => navigate('/')} className={`flex flex-col items-center gap-1 ${isActive('/') ? activeColor : 'text-slate-400'}`}>
                <span className={`material-symbols-outlined ${isActive('/') ? 'fill' : ''}`}>home</span>
                <span className="text-[10px] font-bold">Início</span>
            </button>
            <button onClick={() => navigate('/coupons')} className={`flex flex-col items-center gap-1 ${isActive('/coupons') ? activeColor : 'text-slate-400'}`}>
                <span className={`material-symbols-outlined ${isActive('/coupons') ? 'fill' : ''}`}>confirmation_number</span>
                <span className="text-[10px] font-medium">Cupons</span>
            </button>
            <button onClick={() => navigate('/saved')} className={`flex flex-col items-center gap-1 ${isActive('/saved') ? activeColor : 'text-slate-400'}`}>
                <span className={`material-symbols-outlined ${isActive('/saved') ? 'fill' : ''}`}>favorite</span>
                <span className="text-[10px] font-medium">Salvos</span>
            </button>
            <button onClick={() => navigate('/profile')} className={`flex flex-col items-center gap-1 ${isActive('/profile') ? activeColor : 'text-slate-400'}`}>
                <span className={`material-symbols-outlined ${isActive('/profile') ? 'fill' : ''}`}>person</span>
                <span className="text-[10px] font-medium">Perfil</span>
            </button>
        </nav>
    );
};

export default BottomNav;