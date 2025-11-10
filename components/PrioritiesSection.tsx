import React from 'react';
import { FoodSovereigntyIcon, DataInnovationIcon, GreenTechIcon } from './Icons';

interface PriorityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PriorityCard: React.FC<PriorityCardProps> = ({ icon, title, description }) => (
  <div className="bg-card p-4 rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-center">
    <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-lg mb-3">
      {icon}
    </div>
    <h3 className="font-bold text-sm text-text-dark">{title}</h3>
    <p className="text-xs text-text-light">{description}</p>
  </div>
);

const PrioritiesSection: React.FC = () => {
  const priorities = [
    {
      icon: <FoodSovereigntyIcon className="h-10 w-10 text-primary" />,
      title: "Souveraineté Alimentaire",
      description: "",
    },
    {
      icon: <DataInnovationIcon className="h-10 w-10 text-primary" />,
      title: "Data & Innovation Responsable",
      description: "",
    },
    {
      icon: <GreenTechIcon className="h-10 w-10 text-primary" />,
      title: "Formation & Emploi Vert Tech",
      description: "",
    },
  ];

  return (
    <section className="fade-in-up-section">
      <h2 className="text-2xl font-bold text-center mb-6 text-text-dark">
        Nos Chantiers Prioritaires
      </h2>
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {priorities.map((priority, index) => (
          <PriorityCard key={index} {...priority} />
        ))}
      </div>
    </section>
  );
};

export default PrioritiesSection;