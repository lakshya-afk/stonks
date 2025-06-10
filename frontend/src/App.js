import React, { useState } from 'react';
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

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'stocks':
        return <StocksPage />;
      case 'mutual-funds':
        return <MutualFundsPage />;
      case 'portfolio':
        return <PortfolioPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      <Header 
        onNavigation={handleNavigation} 
        onLoginClick={handleLoginClick}
        currentPage={currentPage}
      />
      
      {renderCurrentPage()}

      {showLoginModal && (
        <LoginModal onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;