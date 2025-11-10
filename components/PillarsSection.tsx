import React from 'react';

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
}


const PillarsSection: React.FC<PillarsSectionProps> = ({ navigate }) => {
  const pillars = [
    { title: "Campus Vivant", description: "Un écosystème d'apprentissage dynamique et collaboratif." },
    { title: "Connexion Directe", description: "Mettre en relation directe les agriculteurs avec les innovateurs et les marchés." },
    { title: "Réussite Étudiante", description: "Accompagner chaque talent vers l'excellence et l'emploi durable." },
  ];

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // This will navigate to a future /programme page
    // For now, let's make it navigate to vision as a placeholder
    navigate('/vision'); 
  };


  return (
    <section className="py-8 fade-in-up-section">
      <h2 className="text-2xl font-bold text-center mb-8 text-text-dark">
        Nos 3 Piliers pour l'AECHA
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
          Voir tous nos projets
        </a>
      </div>
    </section>
  );
};

export default PillarsSection;