import React from 'react';
import { Language } from '../App';

const PillarCard = ({ title, description }: { title: string, description: string }) => (
  <div className="flip-card h-48 rounded-[20px] w-full" tabIndex={0}>
    <div className="flip-card-inner rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
      <div className="flip-card-front bg-card p-4 rounded-[20px]">
        <h3 className="text-xl font-bold text-text-dark">{title}</h3>
      </div>
      <div className="flip-card-back bg-primary text-white p-4 rounded-[20px]">
        <p className="text-md">{description}</p>
      </div>
    </div>
  </div>
);

interface PillarsSectionProps {
  navigate: (path: string) => void;
  language: Language;
}

const translations = {
  fr: {
    title: "Nos 3 Piliers pour l'AECHA",
    pillars: [
      { title: "Campus Vivant", description: "Un écosystème d'apprentissage dynamique et collaboratif." },
      { title: "Connexion Directe", description: "Mettre en relation directe les étudiants avec les professionnels et les marchés." },
      { title: "Réussite Étudiante", description: "Accompagner chaque talent vers l'excellence et l'emploi durable." },
    ],
    button: "Voir tous nos projets"
  },
  ar: {
    title: "أركاننا الثلاثة لجمعية طلبة المعهد",
    pillars: [
      { title: "حرم جامعي حيوي", description: "بيئة تعليمية ديناميكية وتعاونية." },
      { title: "اتصال مباشر", description: "ربط مباشر بين الطلاب والمهنيين والفرص." },
      { title: "نجاح الطالب", description: "مواكبة كل موهبة نحو التميز والتوظيف المستدام." },
    ],
    button: "شاهد كل مشاريعنا"
  }
};

const PillarsSection: React.FC<PillarsSectionProps> = ({ navigate, language }) => {
  const t = translations[language];
  const pillars = t.pillars;

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/vision'); 
  };


  return (
    <section className="py-8 fade-in-up-section">
      <h2 className="text-2xl font-bold text-center mb-8 text-text-dark">
        {t.title}
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map((pillar, index) => (
          <div 
            key={pillar.title} 
            className="stagger-appear w-full"
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <PillarCard {...pillar} />
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="/projets" onClick={handleNavigate} className="inline-block px-8 py-3 bg-accent text-white rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md cursor-pointer">
          {t.button}
        </a>
      </div>
    </section>
  );
};

export default PillarsSection;