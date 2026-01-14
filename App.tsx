import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Coupons from './pages/Coupons';
import Saved from './pages/Saved';
import Profile from './pages/Profile';
import ProductDetails from './pages/ProductDetails';
import BottomNav from './components/BottomNav';

const AppContent: React.FC = () => {
    const location = useLocation();
    const hideBottomNav = location.pathname.includes('/product');

    return (
        <div className="font-sans antialiased">
             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coupons" element={<Coupons />} />
                <Route path="/saved" element={<Saved />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/product" element={<ProductDetails />} />
            </Routes>
            {!hideBottomNav && <BottomNav />}
        </div>
    );
};

const App: React.FC = () => {
  return (
    <Router>
        <AppContent />
    </Router>
  );
};

export default App;