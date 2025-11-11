import React, { useState, useEffect } from 'react';
import { fullTeam } from '../data/team';
import { Language } from '../App';

const shuffleArray = (array: any[]) => {
  const newArr = array.slice();
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

interface TeamMemberAvatarProps {
  imgSrc: string;
  name: string;
  role: string;
  className?: string;
  style?: React.CSSProperties;
}

const TeamMemberAvatar: React.FC<TeamMemberAvatarProps> = ({ imgSrc, name, role, className, style }) => {
  return (
    <div
      className={`text-center transition-all duration-500 ease-in-out ${className}`}
      style={style}
    >
      <div className="relative group">
        <img
          src={imgSrc}
          alt={`Portrait of ${name}`}
          className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-card bg-card shadow-md group-hover:shadow-lg group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <p className="text-sm font-semibold text-text-dark whitespace-nowrap">{name}</p>
          <p className="text-xs text-text-light whitespace-nowrap">{role}</p>
        </div>
      </div>
    </div>
  );
};

interface TeamTeaserProps {
  navigate: (path: string) => void;
  language: Language;
}

const translations = {
  fr: {
    title: "Rencontrez ceux qui s'engagent",
    button: "Voir l'équipe"
  },
  ar: {
    title: "تعرف على الذين يلتزمون",
    button: "شاهد الفريق"
  }
};


const TeamTeaserSection: React.FC<TeamTeaserProps> = ({ navigate, language }) => {
  const [displayedTeam, setDisplayedTeam] = useState<any[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const t = translations[language];

  useEffect(() => {
    setDisplayedTeam(shuffleArray(fullTeam).slice(0, 3));

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setDisplayedTeam(shuffleArray(fullTeam).slice(0, 3));
        setIsAnimating(false);
      }, 800); 
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/equipe');
  };

  return (
    <section className="py-8 fade-in-up-section">
      <h2 className="text-2xl font-bold text-center mb-8 text-text-dark">
        {t.title}
      </h2>
      <div className="flex justify-center items-center gap-8 md:gap-12 h-48">
        {displayedTeam.map((member, index) => (
          <TeamMemberAvatar
            key={member.name + index}
            imgSrc={member.imgSrc}
            name={member.name}
            role={member.role[language]}
            className={isAnimating ? 'opacity-0 scale-75 translate-y-4' : 'opacity-100 scale-100 translate-y-0'}
            style={{ 
                transitionDelay: `${index * 150}ms`,
            }}
          />
        ))}
      </div>
       <div className="text-center mt-10">
        <a 
          href="/equipe"
          onClick={handleNavigate}
          className="inline-block px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md cursor-pointer"
        >
          {t.button}
        </a>
      </div>
    </section>
  );
};

export default TeamTeaserSection;