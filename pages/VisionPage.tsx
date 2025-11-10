import React from 'react';
import { fullTeam } from '../data/team';
import { DocumentIcon, UsersIcon, YourVoiceIcon } from '../components/Icons';

interface TeamMember {
  name: string;
  role: string;
  imgSrc: string;
  quote?: string;
  type: 'bureau' | 'committee';
}

interface VisionPageProps {
  navigate: (path: string) => void;
}

const TeamMemberCard: React.FC<Omit<TeamMember, 'type'>> = ({ name, role, imgSrc, quote }) => (
  <div className="text-center bg-card rounded-[20px] p-4 shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center">
    <img
      src={imgSrc}
      alt={`Portrait de ${name}`}
      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gray-100"
    />
    <h3 className="mt-3 text-md font-bold text-text-dark">{name}</h3>
    <p className="text-sm text-text-light">{role}</p>
    {quote && <p className="text-xs text-text-dark mt-2 italic">"{quote}"</p>}
  </div>
);

const TrustPillarCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
    <div className="bg-card p-6 rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-center flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-lg mb-4 text-primary">
            {icon}
        </div>
        <h3 className="text-lg font-bold text-text-dark mb-2">{title}</h3>
        <p className="text-sm text-text-light">{text}</p>
    </div>
);

const VisionPage: React.FC<VisionPageProps> = ({ navigate }) => {
  const bureau = fullTeam.filter(member => member.type === 'bureau');
  const committees = fullTeam.filter(member => member.type === 'committee');

  const handleNavigate = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      navigate('/programme');
  };

  return (
    <div className="pt-24 bg-bg-primary">
      <div className="container mx-auto px-4 sm:px-6 space-y-16 sm:space-y-24 pb-16">

        {/* Section 1: Le Manifeste */}
        <section className="text-center max-w-3xl mx-auto fade-in-up-section">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-dark">
            Plus qu'une association. Un Mouvement.
          </h1>
          <div className="mt-8 text-left relative bg-card/50 rounded-2xl p-6 sm:p-8 shadow-inner border border-primary/10">
            <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/4 text-8xl text-primary/10 font-serif" aria-hidden="true">“</span>
            <div className="space-y-6 text-md md:text-lg text-text-light relative z-10">
              <p>
                On est fatigués des promesses vagues et des "groupes de discussion" qui n'aboutissent à rien. Nous ne sommes pas des politiciens, nous sommes des étudiants comme vous, prêts à bâtir.
              </p>
              <p>
                Notre vision est simple : l'AECHA doit être un outil au service de chaque étudiant. Un outil pour améliorer notre formation, un outil pour rendre notre vie sur le campus meilleure, et un outil pour que votre voix soit enfin entendue.
              </p>
              <p className="font-bold text-text-dark p-4 bg-primary/10 border-l-4 border-primary rounded-r-lg">
                Nous nous engageons à une gestion basée sur l'action, la transparence et la communication directe.
              </p>
            </div>
          </div>
        </section>
        
        {/* Section 2: L'Équipe */}
        <section id="equipe" className="fade-in-up-section">
            <h2 className="text-3xl font-bold text-center mb-10 text-text-dark">L'Équipe qui s'engage pour vous.</h2>
            
            <div className="mb-12">
                <h3 className="text-xl font-semibold text-center text-text-dark">Le Bureau</h3>
                <p className="text-center text-md text-text-light mb-8">Le noyau dur qui coordonne l'action et représente l'association.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                    {bureau.map(member => <TeamMemberCard key={member.name} {...member} />)}
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-center text-text-dark">Les Responsables de Comités</h3>
                <p className="text-center text-md text-text-light mb-8">Vos référents directs pour chaque aspect de la vie étudiante.</p>
                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {committees.map(member => <TeamMemberCard key={member.name} {...member} />)}
                </div>
            </div>
        </section>

        {/* Section 3: Notre Contrat de Confiance */}
        <section className="fade-in-up-section">
            <h2 className="text-3xl font-bold text-center mb-10 text-text-dark">Notre Contrat de Confiance</h2>
            <div className="grid md:grid-cols-3 gap-6">
                <TrustPillarCard 
                    icon={<DocumentIcon className="w-10 h-10" />}
                    title="Transparence Totale"
                    text="Chaque dépense, chaque réunion. Nos comptes et nos PV seront publics."
                />
                <TrustPillarCard 
                    icon={<YourVoiceIcon className="w-10 h-10" />}
                    title="Communication Directe"
                    text="Fini les messages lus sans réponse. Sur '/ta-voix', chaque ticket aura un statut et une réponse."
                />
                 <TrustPillarCard 
                    icon={<UsersIcon className="w-10 h-10" />}
                    title="Action Collective"
                    text="L'AECHA, c'est vous. Nous vous donnons les outils pour vous impliquer, rejoindre un comité et agir."
                />
            </div>
        </section>

        {/* Section 4: CTA */}
        <section className="text-center fade-in-up-section">
             <p className="text-lg text-text-dark mb-6">Vous savez pourquoi nous sommes là et qui nous sommes. Découvrez maintenant ce que nous allons faire.</p>
             <button 
                onClick={handleNavigate}
                className="inline-block px-10 py-4 bg-accent text-white rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg">
                Voir notre Programme
             </button>
        </section>

      </div>
    </div>
  );
};

export default VisionPage;