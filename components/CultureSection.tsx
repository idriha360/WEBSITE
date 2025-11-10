
import React from 'react';
import { LightBulbIcon, TargetIcon, CheckCircleIcon, ArrowRightIcon } from './Icons';

interface StepProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    isLast?: boolean;
}

const ProcessStep: React.FC<StepProps> = ({ icon, title, description, isLast }) => (
    <div className="flex-1 relative flex flex-col items-center">
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary transition-transform duration-300 hover:scale-110 shadow-sm">
            {icon}
        </div>
        <h3 className="text-lg font-bold text-text-dark mb-2">{title}</h3>
        <p className="text-sm text-text-light text-center leading-relaxed">
            {description}
        </p>
        
        {/* Desktop Arrow */}
        {!isLast && (
            <div className="hidden md:block absolute top-8 -right-1/2 transform -translate-x-1/2 text-primary/20 z-0">
                <ArrowRightIcon className="w-8 h-8" />
            </div>
        )}
        
        {/* Mobile Arrow - Decorative only between items */}
        {!isLast && (
             <div className="md:hidden my-4 text-primary/20 transform rotate-90">
                <ArrowRightIcon className="w-6 h-6" />
            </div>
        )}
    </div>
);

const CultureSection: React.FC = () => {
  const steps = [
    {
        icon: <LightBulbIcon className="w-8 h-8" />,
        title: "Vous Soumettez",
        description: "Une idée ? Un problème ? Vous le soumettez via /ta-voix en moins de 60 secondes."
    },
    {
        icon: <TargetIcon className="w-8 h-8" />,
        title: "Nous Assignons",
        description: "Votre demande est immédiatement dirigée vers le bon responsable de comité (Restaurant, Internat, Sport...)."
    },
    {
        icon: <CheckCircleIcon className="w-8 h-8" />,
        title: "Vous Suivez",
        description: "Grâce à votre code, vous suivez en temps réel le statut de votre demande, de 'Reçu' à 'Résolu'."
    }
  ];

  return (
    <section className="bg-card p-8 rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] fade-in-up-section">
      <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-text-dark mb-2">
            On plante une nouvelle culture
          </h2>
          <p className="text-text-light font-medium">
            Voici le parcours de votre idée.
          </p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-start gap-4 md:gap-0 px-4">
        {steps.map((step, index) => (
            <ProcessStep 
                key={index} 
                {...step} 
                isLast={index === steps.length - 1} 
            />
        ))}
      </div>
    </section>
  );
};

export default CultureSection;
