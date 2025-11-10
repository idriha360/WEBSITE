import React, { useState, useMemo } from 'react';
import { Language, NavigateFunction } from '../App';
import { programData, Project, ProjectCategory } from '../data/program';

const translations = {
    fr: {
        title: "Notre Feuille de Route pour l'AECHA",
        subtitle: "Chaque projet est un engagement. Suivez nos avancées et contribuez directement via 'Ta Voix'.",
        finalCtaTitle: "Un programme fait par vous, pour vous.",
        finalCtaText: "Ce n'est qu'un début. La meilleure idée viendra peut-être de vous. Aidez-nous à l'améliorer.",
        finalCtaButton: "Partager une idée ou un problème",
        status: "Statut",
        committee: "Comité",
        filters: {
            'Tous': 'Tous',
            'Formation': 'Formation',
            'Restaurant': 'Restaurant',
            'Annexes': 'Annexes',
            'Internat': 'Internat',
            'Activités': 'Activités'
        }
    },
    ar: {
        title: "خارطة طريقنا لجمعية طلبة المعهد",
        subtitle: "كل مشروع هو التزام. تتبعوا تقدمنا وساهموا بشكل مباشر عبر 'صوتك'.",
        finalCtaTitle: "برنامج منكم وإليكم.",
        finalCtaText: "هذه مجرد بداية. قد تأتي أفضل فكرة منكم. ساعدونا على تحسينه.",
        finalCtaButton: "شارك بفكرة أو مشكلة",
        status: "الحالة",
        committee: "اللجنة",
        filters: {
            'Tous': 'الكل',
            'Formation': 'التكوين',
            'Restaurant': 'المطعم',
            'Annexes': 'الملحقات',
            'Internat': 'الداخلية',
            'Activités': 'الأنشطة'
        }
    }
};

interface ProgramPageProps {
    navigate: NavigateFunction;
    language: Language;
}

const ProjectCard: React.FC<{ project: Project; language: Language; navigate: NavigateFunction }> = ({ project, language, navigate }) => {
    const handleCtaClick = () => {
        navigate(`/ta-voix?category=${project.category}`);
    };

    return (
        <div className="bg-card p-6 rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex flex-col justify-between transition-transform duration-300 hover:scale-[1.03]">
            <div>
                <div className="flex justify-between items-start mb-3 text-xs">
                    <span className="bg-primary/10 text-primary font-semibold px-2 py-1 rounded-full">{project.committee[language]}</span>
                    <span className="bg-yellow-100 text-yellow-800 font-semibold px-2 py-1 rounded-full flex items-center">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full ltr:mr-2 rtl:ml-2"></span>
                        {language === 'ar' ? project.status_ar[language] : project.status[language]}
                    </span>
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-2">{project.title[language]}</h3>
                <p className="text-sm text-text-light">{project.description[language]}</p>
            </div>
            <button onClick={handleCtaClick} className="mt-4 text-sm font-semibold text-text-dark hover:text-accent transition-colors w-full text-left rtl:text-right">
                {project.cta[language]} 💬
            </button>
        </div>
    );
};

const ProgramPage: React.FC<ProgramPageProps> = ({ navigate, language }) => {
    const [activeFilter, setActiveFilter] = useState<ProjectCategory>('Tous');
    const t = translations[language];

    const filters: ProjectCategory[] = ['Tous', 'Formation', 'Restaurant', 'Annexes', 'Internat', 'Activités'];

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'Tous') {
            return programData;
        }
        return programData.filter(p => p.category === activeFilter);
    }, [activeFilter]);

    return (
        <div className="pt-24 bg-bg-primary">
            <div className="container mx-auto px-4 sm:px-6 space-y-12 pb-16">

                {/* Section 1: Introduction & Filters */}
                <section className="text-center max-w-3xl mx-auto fade-in-up-section">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-text-dark">{t.title}</h1>
                    <p className="mt-4 text-md md:text-lg text-text-light">{t.subtitle}</p>
                    <div className="mt-8 flex flex-wrap justify-center gap-2">
                        {filters.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${activeFilter === filter ? 'bg-card text-text-dark shadow-sm' : 'bg-transparent text-text-light hover:bg-card/50'}`}
                            >
                                {t.filters[filter]}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Section 2: Projects Grid */}
                <section className="fade-in-up-section">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map(project => (
                            <ProjectCard key={project.id} project={project} language={language} navigate={navigate} />
                        ))}
                    </div>
                </section>

                {/* Section 3: Final CTA */}
                <section className="text-center bg-card p-8 rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] max-w-2xl mx-auto fade-in-up-section">
                    <h2 className="text-3xl font-bold text-text-dark mb-4">{t.finalCtaTitle}</h2>
                    <p className="text-text-light mb-6">{t.finalCtaText}</p>
                    <button
                        onClick={() => navigate('/ta-voix')}
                        className="inline-block px-10 py-4 bg-accent text-white rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg"
                    >
                        {t.finalCtaButton}
                    </button>
                </section>

            </div>
        </div>
    );
};

export default ProgramPage;