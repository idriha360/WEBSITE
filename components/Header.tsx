import React, { useState, useEffect } from 'react';
import { BurgerMenuIcon, CloseIcon } from './Icons';
import { Language } from '../App';

interface HeaderProps {
  navigate: (path: string) => void;
  currentPage: string;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const translations = {
  fr: {
    vision: 'Vision',
    programme: 'Programme',
    taVoix: 'Ta Voix',
  },
  ar: {
    vision: 'الرؤية',
    programme: 'البرنامج',
    taVoix: 'صوتك',
  }
};

const Header: React.FC<HeaderProps> = ({ navigate, currentPage, language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleLangClick = (lang: Language) => {
    setLanguage(lang);
    setIsMenuOpen(false);
  };

  const getLinkClass = (path: string) => {
    const isActive = currentPage === path || (path !== '/' && currentPage.startsWith(path));
    return `transition-colors ${isActive ? 'text-accent font-bold' : 'hover:text-text-light'}`;
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-sm fade-in-up-section">
        <div className="container mx-auto px-4 sm:px-6 h-20 flex justify-between items-center">
          <a 
            href="/" 
            onClick={(e) => handleNavClick(e, '/')}
            className="flex items-center space-x-2" 
            aria-label="Retour à la page d'accueil"
          >
            <img src="AECHA/logo.jpg" alt="AECHA Logo" className="h-16" />
          </a>
          
          <div className="flex items-center">
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8 text-lg font-semibold text-text-dark">
                <a href="/vision" onClick={(e) => handleNavClick(e, '/vision')} className={getLinkClass('/vision')}>{t.vision}</a>
                <a href="/programme" onClick={(e) => handleNavClick(e, '/programme')} className={getLinkClass('/programme')}>{t.programme}</a>
                <a href="/ta-voix" onClick={(e) => handleNavClick(e, '/ta-voix')} className={getLinkClass('/ta-voix')}>{t.taVoix}</a>
            </nav>
            <div className="hidden md:block w-px h-6 bg-gray-300 mx-6"></div>
            <div className="hidden md:flex items-center space-x-2 text-sm font-bold">
              <button 
                onClick={() => setLanguage('fr')} 
                className={`${language === 'fr' ? 'text-text-dark' : 'text-text-light'} hover:text-text-dark transition-colors`}
              >
                FR
              </button>
              <span className="text-text-light">|</span>
              <button 
                onClick={() => setLanguage('ar')}
                className={`${language === 'ar' ? 'text-text-dark' : 'text-text-light'} hover:text-text-dark transition-colors`}
              >
                AR
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 md:hidden text-text-dark"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <CloseIcon className="h-8 w-8" /> : <BurgerMenuIcon className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div className={`
        md:hidden fixed inset-0 z-40 bg-bg-primary pt-20
        transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'transform translate-x-0' : (language === 'ar' ? 'transform -translate-x-full' : 'transform translate-x-full')}
      `}>
        <div className="container mx-auto px-4 sm:px-6 h-full">
          <nav className="flex flex-col items-center justify-center h-full space-y-8 text-2xl font-semibold text-text-dark">
            <a href="/vision" onClick={(e) => handleNavClick(e, '/vision')} className={getLinkClass('/vision')}>{t.vision}</a>
            <a href="/programme" onClick={(e) => handleNavClick(e, '/programme')} className={getLinkClass('/programme')}>{t.programme}</a>
            <a href="/ta-voix" onClick={(e) => handleNavClick(e, '/ta-voix')} className={getLinkClass('/ta-voix')}>{t.taVoix}</a>
            <div className="pt-8 flex items-center space-x-4 text-lg font-bold">
              <button 
                onClick={() => handleLangClick('fr')} 
                className={`${language === 'fr' ? 'text-text-dark' : 'text-text-light'} hover:text-text-dark transition-colors`}
              >
                FR
              </button>
              <span className="text-text-light">|</span>
              <button 
                onClick={() => handleLangClick('ar')}
                className={`${language === 'ar' ? 'text-text-dark' : 'text-text-light'} hover:text-text-dark transition-colors`}
              >
                AR
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;