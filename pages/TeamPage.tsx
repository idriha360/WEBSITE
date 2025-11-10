import React from 'react';
import { fullTeam } from '../data/team';

const TeamMemberCard: React.FC<{ name: string; role: string; imgSrc: string; }> = ({ name, role, imgSrc }) => {
  return (
    <div className="text-center bg-card rounded-[20px] p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <img
        src={imgSrc}
        alt={`Portrait de ${name}`}
        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-100"
      />
      <h3 className="mt-4 text-lg font-bold text-text-dark">{name}</h3>
      <p className="text-sm text-text-light">{role}</p>
    </div>
  );
};

const TeamPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-28">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-text-dark mb-12 fade-in-up-section">
        L'Équipe qui s'engage
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 fade-in-up-section">
        {fullTeam.map(member => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;