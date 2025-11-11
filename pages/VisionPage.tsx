import React from 'react';
import { fullTeam, TeamMember } from '../data/team';
import { DocumentIcon, UsersIcon, YourVoiceIcon } from '../components/Icons';
import { Language } from '../App';

interface VisionPageProps {
  navigate: (path: string) => void;
  language: Language;
}

const translations = {
    fr: {
        mainTitle: "Plus qu'une association. Un Mouvement.",
        manifesto: {
            p1: "On est fatigués des promesses vagues et des \"groupes de discussion\" qui n'aboutissent à rien. Nous ne sommes pas des politiciens, nous sommes des étudiants comme vous, prêts à bâtir.",
            p2: "Notre vision est simple : l'AECHA doit être un outil au service de chaque étudiant. Un outil pour améliorer notre formation, un outil pour rendre notre vie sur le campus meilleure, et un outil pour que votre voix soit enfin entendue.",
            p3: "Nous nous engageons à une gestion basée sur l'action, la transparence et la communication directe."
        },
        teamTitle: "L'Équipe qui s'engage pour vous.",
        bureauTitle: "Le Bureau",
        bureauDesc: "Le noyau dur qui coordonne l'action et représente l'association.",
        committeeTitle: "Les Responsables de Comités",
        committeeDesc: "Vos référents directs pour chaque aspect de la vie étudiante.",
        trustTitle: "Notre Contrat de Confiance",
        trustPillars: [
            { title: "Transparence Totale", text: "Chaque dépense, chaque réunion. Nos comptes et nos PV seront publics." },
            { title: "Communication Directe", text: "Fini les messages lus sans réponse. Sur '/ta-voix', chaque ticket aura un statut et une réponse." },
            { title: "Action Collective", text: "L'AECHA, c'est vous. Nous vous donnons les outils pour vous impliquer, rejoindre un comité et agir." }
        ],
        ctaText: "Vous savez pourquoi nous sommes là et qui nous sommes. Découvrez maintenant ce que nous allons faire.",
        ctaButton: "Voir notre Programme"
    },
    ar: {
        mainTitle: "أكثر من مجرد جمعية. إنها حركة.",
        manifesto: {
            p1: "لقد سئمنا من الوعود الغامضة و \"مجموعات النقاش\" التي لا تؤدي إلى أي نتيجة. نحن لسنا سياسيين، نحن طلاب مثلكم، مستعدون للبناء.",
            p2: "رؤيتنا بسيطة: يجب أن تكون جمعية طلبة المعهد أداة في خدمة كل طالب. أداة لتحسين تكويننا، أداة لجعل حياتنا في الحرم الجامعي أفضل، وأداة لجعل صوتكم مسموعًا أخيرًا.",
            p3: "نلتزم بإدارة قائمة على العمل والشفافية والتواصل المباشر."
        },
        teamTitle: "الفريق الذي يلتزم من أجلكم.",
        bureauTitle: "المكتب",
        bureauDesc: "النواة الصلبة التي تنسق العمل وتمثل الجمعية.",
        committeeTitle: "مسؤولو اللجان",
        committeeDesc: "مرجعكم المباشر لكل جانب من جوانب الحياة الطلابية.",
        trustTitle: "عقد الثقة بيننا",
        trustPillars: [
            { title: "شفافية تامة", text: "كل نفقة، كل اجتماع. ستكون حساباتنا ومحاضرنا علنية." },
            { title: "تواصل مباشر", text: "لا مزيد من الرسائل المقروءة بدون رد. على '/صوتك'، كل تذكرة سيكون لها حالة ورد." },
            { title: "عمل جماعي", text: "جمعية طلبة المعهد هي أنتم. نحن نمنحكم الأدوات للمشاركة والانضمام إلى لجنة والعمل." }
        ],
        ctaText: "أنتم تعرفون لماذا نحن هنا ومن نحن. اكتشفوا الآن ما سنفعله.",
        ctaButton: "شاهد برنامجنا"
    }
};

const TeamMemberCard: React.FC<{ name: string; role: string; imgSrc: string; quote?: string; }> = ({ name, role, imgSrc, quote }) => (
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

const VisionPage: React.FC<VisionPageProps> = ({ navigate, language }) => {
  const bureau = fullTeam.filter(member => member.type === 'bureau');
  const committees = fullTeam.filter(member => member.type === 'committee');
  const t = translations[language];

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
            {t.mainTitle}
          </h1>
          <div className="mt-8 text-left rtl:text-right relative bg-card/50 rounded-2xl p-6 sm:p-8 shadow-inner border border-primary/10">
            <span className="absolute top-0 ltr:left-0 rtl:right-0 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/4 text-8xl text-primary/10 font-serif" aria-hidden="true">“</span>
            <div className="space-y-6 text-md md:text-lg text-text-light relative z-10">
              <p>{t.manifesto.p1}</p>
              <p>{t.manifesto.p2}</p>
              <p className="font-bold text-text-dark p-4 bg-primary/10 ltr:border-l-4 rtl:border-r-4 border-primary ltr:rounded-r-lg rtl:rounded-l-lg">
                {t.manifesto.p3}
              </p>
            </div>
          </div>
        </section>
        
        {/* Section 2: L'Équipe */}
        <section id="equipe" className="fade-in-up-section">
            <h2 className="text-3xl font-bold text-center mb-10 text-text-dark">{t.teamTitle}</h2>
            
            <div className="mb-12">
                <h3 className="text-xl font-semibold text-center text-text-dark">{t.bureauTitle}</h3>
                <p className="text-center text-md text-text-light mb-8">{t.bureauDesc}</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                    {bureau.map(member => <TeamMemberCard key={member.name} name={member.name} imgSrc={member.imgSrc} role={member.role[language]} quote={member.quote?.[language]} />)}
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-center text-text-dark">{t.committeeTitle}</h3>
                <p className="text-center text-md text-text-light mb-8">{t.committeeDesc}</p>
                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {committees.map(member => <TeamMemberCard key={member.name} name={member.name} imgSrc={member.imgSrc} role={member.role[language]} quote={member.quote?.[language]} />)}
                </div>
            </div>
        </section>

        {/* Section 3: Notre Contrat de Confiance */}
        <section className="fade-in-up-section">
            <h2 className="text-3xl font-bold text-center mb-10 text-text-dark">{t.trustTitle}</h2>
            <div className="grid md:grid-cols-3 gap-6">
                <TrustPillarCard 
                    icon={<DocumentIcon className="w-10 h-10" />}
                    title={t.trustPillars[0].title}
                    text={t.trustPillars[0].text}
                />
                <TrustPillarCard 
                    icon={<YourVoiceIcon className="w-10 h-10" />}
                    title={t.trustPillars[1].title}
                    text={t.trustPillars[1].text}
                />
                 <TrustPillarCard 
                    icon={<UsersIcon className="w-10 h-10" />}
                    title={t.trustPillars[2].title}
                    text={t.trustPillars[2].text}
                />
            </div>
        </section>

        {/* Section 4: CTA */}
        <section className="text-center fade-in-up-section">
             <p className="text-lg text-text-dark mb-6">{t.ctaText}</p>
             <button 
                onClick={handleNavigate}
                className="inline-block px-10 py-4 bg-accent text-white rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg">
                {t.ctaButton}
             </button>
        </section>

      </div>
    </div>
  );
};

export default VisionPage;