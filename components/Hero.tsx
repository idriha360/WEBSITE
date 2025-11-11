import React from 'react';
import { Language, NavigateFunction } from '../App';

interface HeroProps {
  language: Language;
  navigate: NavigateFunction;
}

const translations = {
  fr: {
    title: "Cultivant Ensemble l'Avenir de Demain",
    subtitle: "AECHA - Liste des Etudiants 2025/2026",
    button: "Découvrir"
  },
  ar: {
    title: "معًا نزرع مستقبل الغد",
    subtitle: "جمعية طلبة المعهد - لائحة الطلاب 2025/2026",
    button: "اكتشف"
  }
};

const Hero: React.FC<HeroProps> = ({ language, navigate }) => {
  const t = translations[language];
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white pt-20">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <img 
        src="AECHA/logo.jpg" 
        alt="L'agriculture connectée et durable" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 p-4 max-w-3xl mx-auto fade-in-up-section">
        <p className="font-semibold uppercase tracking-widest text-sm md:text-base text-gray-200">
          {t.subtitle}
        </p>
        <h1 className="mt-2 text-4xl md:text-6xl font-extrabold leading-tight">
          {t.title}
        </h1>
        <button 
          onClick={() => navigate('/vision')}
          className="mt-8 px-8 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full font-semibold hover:bg-white/30 transition-all duration-300"
        >
          {t.button}
        </button>
      </div>
    </section>
  );
};

export default Hero;