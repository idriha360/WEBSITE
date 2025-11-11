import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CultureSection from './components/CultureSection';
import PillarsSection from './components/PillarsSection';
import TeamTeaserSection from './components/TeamTeaserSection';
import TeamPage from './pages/TeamPage';
import VisionPage from './pages/VisionPage';
import ProgramPage from './pages/ProgramPage';
import TaVoixPage from './pages/TaVoixPage';
import ThemeSwitcher from './components/ThemeSwitcher';

export type Language = 'fr' | 'ar';
export type NavigateFunction = (path: string) => void;
export type Theme = 'original' | 'forest' | 'tech' | 'earthy';

const themes = {
  original: {
    '--bg-color': '#F3F4F0',
    '--card-color': '#FFFFFF',
    '--text-dark': '#3A4A3E',
    '--text-light': '#6B7B71',
    '--accent-color': '#F4A261',
    '--primary-color': '#3A4A3E',
    '--secondary-color': '#6B7B71',
  },
  forest: {
    '--bg-color': '#F7F7F7',
    '--card-color': '#FFFFFF',
    '--text-dark': '#1E1E1E',
    '--text-light': '#3A5A70',
    '--accent-color': '#D95F43',
    '--primary-color': '#2E5740',
    '--secondary-color': '#3A5A70',
  },
  tech: {
    '--bg-color': '#FFFFFF',
    '--card-color': '#FFFFFF',
    '--text-dark': '#333333',
    '--text-light': '#1A2B44',
    '--accent-color': '#F2C94C',
    '--primary-color': '#1A2B44',
    '--secondary-color': '#4CAF50',
  },
  earthy: {
    '--bg-color': '#FBF9F6',
    '--card-color': '#FFFFFF',
    '--text-dark': '#2A2A2A',
    '--text-light': '#5D4037',
    '--accent-color': '#FF6B00',
    '--primary-color': '#3D4A3A',
    '--secondary-color': '#5D4037',
  }
};


const HomePage = ({ navigate }: { navigate: NavigateFunction }) => (
  <>
    <Hero />
    <div className="p-4 sm:p-6 space-y-6">
      <CultureSection />
      <PillarsSection navigate={navigate} />
      <TeamTeaserSection navigate={navigate} />
    </div>
  </>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('/');
  const [language, setLanguage] = useState<Language>('fr');
  const [theme, setTheme] = useState<Theme>('original');

  const navigate: NavigateFunction = (path: string) => {
    const [basePath] = path.split('?');
    if (basePath !== currentPage.split('?')[0]) {
      setCurrentPage(path);
      window.scrollTo(0, 0);
    }
  };
  
  useEffect(() => {
    const currentTheme = themes[theme];
    for (const key in currentTheme) {
      document.documentElement.style.setProperty(key, currentTheme[key as keyof typeof currentTheme]);
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
    });

    const timeoutId = setTimeout(() => {
      const sections = document.querySelectorAll('.fade-in-up-section');
      sections.forEach(section => observer.observe(section));
    }, 100);

    return () => {
        clearTimeout(timeoutId);
        observer.disconnect();
    };
  }, [currentPage]);

  let ComponentToRender;
  switch (currentPage.split('?')[0]) {
    case '/equipe':
      ComponentToRender = <TeamPage />;
      break;
    case '/vision':
      ComponentToRender = <VisionPage navigate={navigate} />;
      break;
    case '/programme':
      ComponentToRender = <ProgramPage navigate={navigate} language={language} />;
      break;
    case '/ta-voix':
      ComponentToRender = <TaVoixPage language={language} />;
      break;
    default:
      ComponentToRender = <HomePage navigate={navigate} />;
  }

  return (
    <div className="bg-bg-primary min-h-screen text-text-dark">
      <Header 
        navigate={navigate} 
        currentPage={currentPage}
        language={language}
        setLanguage={setLanguage} 
      />
      <main>
        {ComponentToRender}
      </main>
      <footer className="text-center p-4 text-text-light text-sm">
        <p>&copy; 2025 AECHA. Tous droits réservés.</p>
      </footer>
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;