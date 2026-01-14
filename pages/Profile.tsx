import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-[#181111] min-h-screen pb-24 text-white flex flex-col">
            <header className="sticky top-0 z-10 bg-[#181111]/95 backdrop-blur-sm p-4 flex items-center justify-between border-b border-white/5">
                <div className="flex size-12 items-center cursor-pointer" onClick={() => navigate('/')}>
                    <span className="material-symbols-outlined text-white text-[24px]">arrow_back_ios</span>
                </div>
                <h1 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center font-display">Perfil</h1>
                <div className="flex w-12 items-center justify-end">
                    <button className="flex items-center justify-center rounded-lg h-12 bg-transparent text-white">
                        <span className="material-symbols-outlined text-[24px]">more_horiz</span>
                    </button>
                </div>
            </header>

            <main className="flex-1 overflow-y-auto max-w-md mx-auto w-full">
                <section className="flex p-6">
                    <div className="flex w-full flex-col gap-6 items-center">
                        <div className="flex gap-4 flex-col items-center">
                            {/* Custom Logo Replacement */}
                            <div className="bg-[#181111] aspect-square rounded-full border-4 border-[#ea2a33]/20 p-2 flex items-center justify-center w-32 h-32 shadow-2xl overflow-hidden relative group">
                                <div className="absolute inset-0 bg-[#ea2a33]/5 blur-xl group-hover:bg-[#ea2a33]/10 transition-colors"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="249" height="249" viewBox="0 0 249 249" className="w-full h-full p-1 drop-shadow-2xl">
                                    <path fill="#EF7070" transform="matrix(1.91538 0 0 1.91538 0 3.05176e-05)" d="M62.0615 4.02547C68.5614 3.71024 66.8269 5.28414 66.9815 10.6909C71.0874 11.3358 74.8754 11.6304 78.9505 12.6269C91.4832 15.6917 102.013 23.3917 109.643 33.6826C115.916 42.1437 118.2 51.4348 119.855 61.5759C122.002 61.6391 124.925 61.6478 127 61.8379C127.023 63.389 127.089 65.0912 126.973 66.6278C123.221 66.9685 117.09 66.7827 113.146 66.7926C109.956 66.8005 104.198 66.956 101.247 66.7162C99.5109 78.9651 97.4265 85.856 87.0465 94.2591C82.1522 98.2212 73.1708 101.919 66.7855 101.724C66.9444 104.259 67.1492 126.12 66.5151 127.15C65.503 128.034 63.4315 127.962 62.3875 127.183C61.2594 125.184 62.1533 122.398 61.8656 120.65C59.6168 119.902 55.5029 119.37 52.9518 118.807C45.0962 117.042 37.7249 113.571 31.3601 108.64C21.6056 101.144 15.265 90.5289 12.1343 78.6466C11.2864 75.4283 10.7456 70.3072 10.2944 66.8442C8.967 66.7205 -0.588987 68.2157 2.35779 62.5908C3.146 61.0863 8.29611 61.8287 10.4284 61.649C10.474 52.9731 14.9527 41.6889 19.9223 34.7056C27.3238 24.3051 38.7929 15.9998 51.1283 12.5703C54.6162 11.6006 58.349 11.2324 61.9209 10.5966C62.0395 8.47646 61.879 5.97622 62.0615 4.02547ZM66.9455 52.7174C65.424 52.8692 63.5814 52.8084 62.031 52.7999C61.834 47.8643 61.7455 43.1081 62.0058 38.1709C47.8719 41.1448 41.3099 48.1717 37.555 61.7803C41.7457 61.5766 47.0596 61.7227 51.3337 61.7212C51.2812 63.498 51.324 65.0555 51.3882 66.8329C49.2282 66.6256 44.1285 66.7524 41.7708 66.7521L23.0422 66.7612C23.5436 69.2396 23.4251 71.3728 24.1895 74.6336C26.6337 85.3125 33.0598 94.6567 42.157 100.76C47.2153 104.121 55.79 107.601 61.9054 107.438C62.0616 104.942 61.8435 101.066 61.8373 98.3826C61.7956 91.7162 61.8613 85.0495 62.0345 78.3852C63.4705 78.2708 65.5531 78.3913 67.0509 78.4394C66.5896 82.44 66.9327 88.484 66.8899 92.7741C82.2718 91.7253 90.7101 81.5364 92.6251 66.778C88.7817 67.0156 82.3674 66.7221 78.2531 66.7587C78.2776 65.1069 78.2794 63.4549 78.2584 61.803C83.0772 61.72 87.8965 61.6704 92.7159 61.6542C91.0081 57.744 91.0641 55.2179 88.1323 51.0068C82.2283 42.5263 76.4324 40.0977 66.874 38.0829C67.0802 42.5148 66.8302 48.0536 66.9455 52.7174ZM22.9022 61.6373C24.9965 61.7005 27.0922 61.7087 29.187 61.662C30.1447 47.9152 42.0776 34.224 55.2355 30.8484C57.4919 30.2695 59.7769 29.9031 62.0743 29.5397C61.9261 27.7028 61.9474 25.8557 61.7806 23.9538C51.765 24.0683 41.6032 29.6869 34.7736 36.7457C27.4241 44.3418 24.7078 51.512 22.9022 61.6373ZM100.935 61.7309C101.935 61.7292 106.102 61.7836 106.892 61.6354C106.1 53.8474 102.841 45.2753 97.9261 39.1833C91.8567 31.7807 83.4559 26.6557 74.0966 24.6459C71.245 24.0403 69.7674 24.0322 67.002 23.7402L66.9352 29.4817C84.7724 30.1834 99.089 44.0653 100.935 61.7309Z" />
                                    <path fill="#3C3D45" transform="matrix(1.91538 0 0 1.91538 0 3.05176e-05)" d="M10.2944 66.8442C11.9689 66.5641 20.8237 66.7415 23.0422 66.7612C23.5436 69.2396 23.4251 71.3728 24.1895 74.6336C26.6337 85.3125 33.0598 94.6567 42.157 100.76C47.2153 104.121 55.79 107.601 61.9054 107.438C61.7605 111.9 61.9333 116.24 61.8656 120.65C59.6168 119.902 55.5029 119.37 52.9518 118.807C45.0962 117.042 37.7249 113.571 31.3601 108.64C21.6056 101.144 15.265 90.5289 12.1343 78.6466C11.2864 75.4283 10.7456 70.3072 10.2944 66.8442Z" />
                                    <path fill="#3C3D45" transform="matrix(1.91538 0 0 1.91538 0 3.05176e-05)" d="M66.9815 10.6909C71.0874 11.3358 74.8754 11.6304 78.9505 12.6269C91.4832 15.6917 102.013 23.3917 109.643 33.6826C115.916 42.1437 118.2 51.4348 119.855 61.5759C116.89 61.8849 110.139 61.6978 106.892 61.6354C106.1 53.8474 102.841 45.2753 97.9261 39.1833C91.8567 31.7807 83.4559 26.6557 74.0966 24.6459C71.245 24.0403 69.7674 24.0322 67.002 23.7402C66.6673 20.8455 66.8851 13.7744 66.9815 10.6909Z" />
                                    <path fill="#3C3D45" transform="matrix(1.91538 0 0 1.91538 0 3.05176e-05)" d="M61.9209 10.5966C61.6771 15.0543 61.9558 19.524 61.7806 23.9538C51.765 24.0683 41.6032 29.6869 34.7736 36.7457C27.4241 44.3418 24.7078 51.512 22.9022 61.6373C19.8578 61.8523 13.5995 61.6837 10.4284 61.649C10.474 52.9731 14.9527 41.6889 19.9223 34.7056C27.3238 24.3051 38.7929 15.9998 51.1283 12.5703C54.6162 11.6006 58.349 11.2324 61.9209 10.5966Z" />
                                </svg>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-white text-2xl font-bold leading-tight tracking-tight text-center">@fontedosbaratos</p>
                                <p className="text-[#b89d9f] text-base font-normal leading-relaxed text-center mt-2 max-w-xs">
                                    Os melhores achados e promoções do TikTok em um só lugar!
                                </p>
                                <div className="flex items-center gap-1 mt-2">
                                    <span className="material-symbols-outlined text-[#b89d9f] text-sm">location_on</span>
                                    <p className="text-[#b89d9f] text-sm font-normal leading-normal text-center">São Paulo, Brasil</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-6 py-4">
                    <button 
                        onClick={() => window.open("https://www.tiktok.com/@fontedosbaratos?is_from_webapp=1&sender_device=pc", "_blank")}
                        className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-6 bg-[#ea2a33] text-white gap-3 transition-transform active:scale-[0.98] shadow-lg shadow-[#ea2a33]/20">
                        <span className="material-symbols-outlined text-[24px] font-bold">brand_awareness</span>
                        <span className="truncate text-lg font-bold leading-normal tracking-wide">Ver no TikTok</span>
                    </button>
                </section>

                <section className="px-4 mt-6 flex flex-col gap-1">
                    {['Meus Favoritos', 'Notificações de Ofertas', 'Configurações', 'Suporte'].map((item, idx) => {
                        const icon = ['favorite', 'notifications', 'settings', 'help'][idx];
                        return (
                            <div key={item} className="flex items-center gap-4 bg-white/5 hover:bg-white/10 transition-colors px-4 py-3 rounded-xl cursor-pointer justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="text-[#ea2a33] flex items-center justify-center rounded-lg bg-[#ea2a33]/10 shrink-0 size-10">
                                        <span className="material-symbols-outlined text-[24px]">{icon}</span>
                                    </div>
                                    <p className="text-white text-base font-medium leading-normal flex-1 truncate">{item}</p>
                                </div>
                                <div className="shrink-0">
                                    <span className="material-symbols-outlined text-[#b89d9f] text-[20px]">chevron_right</span>
                                </div>
                            </div>
                        );
                    })}
                </section>
                <div className="h-24"></div>
            </main>
        </div>
    );
};

export default Profile;