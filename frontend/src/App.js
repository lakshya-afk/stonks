import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { 
  Header,
  HomePage,
  StocksPage,
  MutualFundsPage,
  PortfolioPage,
  LoginModal
} from './Components';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  return (
    <div className="App">
      <Router>
        <Header 
          onNavigation={handleNavigation} 
          onLoginClick={handleLoginClick}
          currentPage={currentPage}
        />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stocks" element={<StocksPage />} />
          <Route path="/mutual-funds" element={<MutualFundsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>

        {showLoginModal && (
          <LoginModal onClose={handleCloseModal} />
        )}
      </Router>
    </div>
  );
}

export default App;