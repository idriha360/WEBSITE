import React from 'react';

interface TeamMemberProps {
  imgSrc: string;
  name: string;
  role: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ imgSrc, name, role }) => (
  <div className="text-center">
    <img 
      src={imgSrc} 
      alt={`Portrait of ${name}`}
      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto object-cover border-2 border-card shadow-md"
    />
    <h3 className="mt-3 font-bold text-sm text-text-dark">{name}</h3>
    <p className="text-xs text-text-light">{role}</p>
  </div>
);

const TeamSection: React.FC = () => {
  const team = [
    { name: 'Sophie Dubois', role: 'CEO & Fondatrice', imgSrc: 'https://picsum.photos/seed/sophie/200' },
    { name: 'Leila Benali', role: 'Cheffe de Project Logicile', imgSrc: 'https://picsum.photos/seed/leila/200' },
    { name: 'David Kowlaski', role: 'Responsable R&D Agricole', imgSrc: 'https://picsum.photos/seed/david/200' },
  ];

  return (
    <section className="bg-card p-6 rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] fade-in-up-section">
      <h2 className="text-2xl font-bold text-center mb-6 text-text-dark">
        L'Équipe qui s'engage
      </h2>
      <div className="flex justify-around items-start space-x-2">
        {team.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;