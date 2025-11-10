import React, { useState } from 'react';
import { Theme } from '../App';

interface ThemeSwitcherProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const themeNames = {
  original: 'Défaut',
  forest: 'Forêt',
  tech: 'Techno',
  earthy: 'Terre',
};

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[100]">
      <div className="relative">
        {isOpen && (
          <div className="absolute bottom-full right-0 mb-2 w-40 bg-card rounded-lg shadow-lg border border-primary/10">
            {(Object.keys(themeNames) as Theme[]).map((themeKey) => (
              <button
                key={themeKey}
                onClick={() => selectTheme(themeKey)}
                className={`block w-full text-left px-4 py-2 text-sm hover:bg-bg-primary ${
                  theme === themeKey ? 'font-bold text-accent' : 'text-text-dark'
                }`}
              >
                {themeNames[themeKey]}
              </button>
            ))}
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Changer le thème"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
