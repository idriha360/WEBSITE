
import React from 'react';
import { LightBulbIcon, TargetIcon, CheckCircleIcon, ArrowRightIcon } from './Icons';
import { Language } from '../App';

interface StepProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    isLast?: boolean;
}

const translations = {
    fr: {
        title: "On plante une nouvelle culture",
        subtitle: "Voici le parcours de votre idée.",
        steps: [
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
        ]
    },
    ar: {
        title: "نحن نزرع ثقافة جديدة",
        subtitle: "هذا هو مسار فكرتك.",
        steps: [
            {
                icon: <LightBulbIcon className="w-8 h-8" />,
                title: "أنت تقدم",
                description: "فكرة؟ مشكلة؟ قدمها عبر /صوتك في أقل من 60 ثانية."
            },
            {
                icon: <TargetIcon className="w-8 h-8" />,
                title: "نحن نُعين",
                description: "يتم توجيه طلبك فورًا إلى مسؤول اللجنة المختص (المطعم، الداخلية، الرياضة...)."
            },
            {
                icon: <CheckCircleIcon className="w-8 h-8" />,
                title: "أنت تتابع",
                description: "بفضل الرمز الخاص بك، يمكنك تتبع حالة طلبك في الوقت الفعلي، من 'تم الاستلام' إلى 'تم الحل'."
            }
        ]
    }
};

const ProcessStep: React.FC<StepProps> = ({ icon, title, description, isLast }) => (
    <div className="flex-1 relative flex flex-col items-center z-10">
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary transition-transform duration-300 hover:scale-110 shadow-sm">
            {icon}
        </div>
        <h3 className="text-lg font-bold text-text-dark mb-2">{title}</h3>
        <p className="text-sm text-text-light text-center leading-relaxed max-w-xs">
            {description}
        </p>
        
        {!isLast && (
            <div className="hidden md:block absolute top-8 transform text-primary/20 z-0 pointer-events-none ltr:-right-1/2 ltr:-translate-x-1/2 rtl:-left-1/2 rtl:translate-x-1/2">
                <ArrowRightIcon className="w-8 h-8 rtl:rotate-180" />
            </div>
        )}
        
        {!isLast && (
             <div className="md:hidden my-4 text-primary/20 transform rotate-90">
                <ArrowRightIcon className="w-6 h-6" />
            </div>
        )}
    </div>
);

const CultureSection: React.FC<{ language: Language }> = ({ language }) => {
  const t = translations[language];
  const steps = t.steps;

  return (
    <section className="bg-card p-8 rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] fade-in-up-section">
      <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-3">
            {t.title}
          </h2>
          <p className="text-text-light font-medium text-lg">
            {t.subtitle}
          </p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-start gap-6 md:gap-0 px-4">
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