import React, { useState } from 'react';
import { Language } from '../App';
import { FormationIcon, RestaurantIcon, InternatIcon, SportIcon, CultureIcon, AnnexesIcon, SuggestionIcon, YourVoiceIcon } from '../components/Icons';

const translations = {
  fr: {
    title: "Ta Voix. Notre Action.",
    subtitle: "Une idée à planter ? Un problème à déraciner ? C'est ici. Constructif, direct, et nous nous engageons à répondre.",
    step1Title: "De quoi veux-tu nous parler ?",
    step2Title: "Quel est ton cycle et ta filière ?",
    step3Title: "Décris ton idée / ton problème",
    step4Title: "Comment veux-tu être notifié ?",
    filierePlaceholder: "Choisis ta filière...",
    subjectPlaceholder: "Ex: Problème WiFi Pavillon B",
    messagePlaceholder: "Sois précis et constructif pour nous aider à agir vite.",
    attachPhoto: "📎 Joindre une photo",
    anonymousOption: "Rester 100% Anonyme",
    anonymousHelp: "Tu recevras un code de suivi unique à la fin.",
    emailOption: "Recevoir une réponse par email",
    submitButton: "🌱 Soumettre ma demande",
    successTitle: "Ta demande a été plantée !",
    successText: "Reçu ! Ton code de suivi est :",
    successInfo: "Conserve-le précieusement. Tu peux suivre l'avancée de ta demande ci-dessous.",
    trackerTitle: "Suivre ma demande",
    trackerPlaceholder: "Entrer un code de suivi...",
    trackerButton: "Voir le statut",
    statusReceived: "Notre équipe a bien reçu ton message.",
    statusAssigned: "Le comité compétent étudie le problème.",
    statusInProgress: "Une action est en cours.",
    statusResolved: "Action prise et problème résolu.",
    statusClosed: "Message non constructif ou hors de notre champ d'action.",
    emailPlaceholder: "ton.email@example.com",
    categories: {
      Formation: 'Formation', Restaurant: 'Restaurant', Internat: 'Internat', Sport: 'Sport',
      Culturel: 'Culturel', Annexes: 'Annexes', Suggestion: 'Suggestion (Autre)',
    },
    cycles: {
        Ingenieur: 'Ingénieur',
        Master: 'Master',
        Technicien: 'Technicien Spécialisé'
    },
    years: ["1 CI", "2 CI", "3 CI"],
    statuses: {
      received: '📥 Reçu',
      assigned: '👀 Assigné',
      inProgress: '⏳ En cours',
      resolved: '✅ Résolu',
      closed: '❌ Classé',
    }
  },
  ar: {
    title: "صوتك. فعلنا.",
    subtitle: "عندك فكرة تزرعها؟ أو مشكل تجتثه؟ هذا هو المكان. بناء، مباشر، ونلتزم بالرد.",
    step1Title: "عن ماذا تريد التحدث؟",
    step2Title: "ما هو سلكك وشعبتك؟",
    step3Title: "صف فكرتك / مشكلتك",
    step4Title: "كيف تريد أن يتم إعلامك؟",
    filierePlaceholder: "اختر مسلكك...",
    subjectPlaceholder: "مثال: مشكلة الواي فاي في الجناح ب",
    messagePlaceholder: "كن دقيقًا وبناءً لمساعدتنا على التحرك بسرعة.",
    attachPhoto: "📎 إرفاق صورة",
    anonymousOption: "البقاء مجهول الهوية 100٪",
    anonymousHelp: "ستتلقى رمز تتبع فريد في النهاية.",
    emailOption: "تلقي رد عبر البريد الإلكتروني",
    submitButton: "🌱 إرسال طلبي",
    successTitle: "تم زرع طلبك!",
    successText: "تم الاستلام! رمز التتبع الخاص بك هو:",
    successInfo: "احتفظ به. يمكنك تتبع تقدم طلبك أدناه.",
    trackerTitle: "تتبع طلبي",
    trackerPlaceholder: "أدخل رمز التتبع...",
    trackerButton: "عرض الحالة",
    statusReceived: "لقد استلم فريقنا رسالتك بنجاح.",
    statusAssigned: "اللجنة المختصة تدرس المشكلة.",
    statusInProgress: "الإجراء قيد التنفيذ.",
    statusResolved: "تم اتخاذ الإجراء وحل المشكلة.",
    statusClosed: "رسالة غير بناءة أو خارج نطاق عملنا.",
    emailPlaceholder: "email@example.com",
    categories: {
      Formation: 'التكوين', Restaurant: 'المطعم', Internat: 'الداخلية', Sport: 'الرياضة',
      Culturel: 'الثقافة', Annexes: 'الملحقات', Suggestion: 'اقتراح (آخر)',
    },
    cycles: {
        Ingenieur: 'مهندس',
        Master: 'ماستر',
        Technicien: 'تقني متخصص'
    },
    years: ["1 CI", "2 CI", "3 CI"],
    statuses: {
      received: '📥 تم الاستلام',
      assigned: '👀 قيد الدراسة',
      inProgress: '⏳ قيد التنفيذ',
      resolved: '✅ تم الحل',
      closed: '❌ مغلق',
    }
  }
};

const filieres = {
  fr: {
    Ingenieur: {
      "1 CI": ["Tronc Commun Horti", "Ingénierie de l'eau"],
      "2 CI": ["Horticulture", "Protection des Plantes", "Architecture de Paysage", "Ingénierie de l'eau"],
      "3 CI": ["Horticulture", "Protection des Plantes", "Architecture de Paysage", "Ingénierie de l'eau"],
    },
    Master: [
      "Gestion des Acridiens",
      "Eau et Horticulture Durable",
      "Aménagement Durable et Réhabilitation des Espaces Dégradés (APRED)",
    ],
    Technicien: [
      "Technologies de l'Eau et Énergies Renouvelables",
      "Aquaculture",
      "Horticulture Ornementale et Gestion du Paysage",
      "Transformation et Valorisation des Produits Agricoles",
      "Technico-commercial en Horticulture",
      "Technicien Vétérinaire Spécialisé",
    ],
  },
  ar: {
    Ingenieur: {
      "1 CI": ["جذع مشترك بستنة", "هندسة المياه"],
      "2 CI": ["البستنة", "وقاية النباتات", "هندسة المناظر الطبيعية", "هندسة المياه"],
      "3 CI": ["البستنة", "وقاية النباتات", "هندسة المناظر الطبيعية", "هندسة المياه"],
    },
    Master: [
      "إدارة الجراد",
      "الماء والبستنة المستدامة",
      "التهيئة المستدامة وإعادة تأهيل المساحات المتدهورة (APRED)",
    ],
    Technicien: [
      "تكنولوجيات الماء والطاقات المتجددة",
      "تربية الأحياء المائية",
      "البستنة التزيينية وتدبير المناظر الطبيعية",
      "تحويل وتثمين المنتجات الفلاحية",
      "تقني تجاري في البستنة",
      "تقني بيطري متخصص",
    ],
  }
};

type Category = keyof typeof translations.fr.categories;
type Cycle = keyof typeof translations.fr.cycles;

interface CategoryButtonProps {
    Icon: React.FC<{className?: string}>;
    label: string;
    onClick: () => void;
    selected: boolean;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ Icon, label, onClick, selected }) => (
    <button onClick={onClick} className={`flex flex-col items-center justify-center text-center p-3 rounded-xl transition-all duration-300 w-full aspect-square ${selected ? 'bg-primary text-white shadow-lg scale-105' : 'bg-bg-primary hover:bg-bg-primary/60'}`}>
        <Icon className="w-8 h-8 mb-2"/>
        <span className="text-xs font-semibold">{label}</span>
    </button>
);


const TaVoixPage: React.FC<{ language: Language }> = ({ language }) => {
    const t = translations[language];
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      category: null as Category | null,
      cycle: '',
      year: '',
      filiere: '',
      subject: '',
      message: '',
      photo: null,
      notification: 'anonymous',
      email: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [trackingCode, setTrackingCode] = useState('');
    const [trackInput, setTrackInput] = useState('');
    const [trackedStatus, setTrackedStatus] = useState<{status: string, message: string} | null>(null);

    const handleCategorySelect = (category: Category) => {
        setFormData(prev => ({ ...prev, category }));
        if (category === 'Formation') {
            setStep(2);
        } else {
            setStep(3);
        }
    };

    const handleCycleSelect = (cycle: string) => {
        setFormData(prev => ({ ...prev, cycle, year: '', filiere: '' }));
    };

    const handleYearSelect = (year: string) => {
        setFormData(prev => ({...prev, year, filiere: ''}));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const code = `AECHA-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
      setTrackingCode(code);
      setSubmitted(true);
      console.log('Form Data:', formData);
    };

    const handleTrack = () => {
        if(!trackInput.toUpperCase().startsWith('AECHA-')) return;
        const statuses = t.statuses;
        const statusKeys = Object.keys(statuses) as (keyof typeof statuses)[];
        const randomStatusKey = statusKeys[Math.floor(Math.random() * statusKeys.length)];
        const statusText = statuses[randomStatusKey];
        
        const randomStatusKeyStr = String(randomStatusKey);
        const statusMessage = translations[language][`status${randomStatusKeyStr.charAt(0).toUpperCase() + randomStatusKeyStr.slice(1)}` as 'statusReceived' | 'statusAssigned' | 'statusInProgress' | 'statusResolved' | 'statusClosed'];
        setTrackedStatus({status: statusText, message: statusMessage});
    };

    const categories: { key: Category; Icon: React.FC<{className?: string}> }[] = [
      { key: 'Formation', Icon: FormationIcon }, { key: 'Restaurant', Icon: RestaurantIcon },
      { key: 'Internat', Icon: InternatIcon }, { key: 'Sport', Icon: SportIcon },
      { key: 'Culturel', Icon: CultureIcon }, { key: 'Annexes', Icon: AnnexesIcon },
      { key: 'Suggestion', Icon: SuggestionIcon },
    ];
    
    let currentFilieres: string[] = [];
    let isStep2Complete = false;

    const cycleKey = formData.cycle as keyof typeof filieres.fr;
    if (cycleKey === 'Ingenieur') {
        if (formData.year) {
            currentFilieres = filieres[language].Ingenieur[formData.year as keyof typeof filieres.fr.Ingenieur] || [];
        }
        isStep2Complete = !!formData.cycle && !!formData.year && !!formData.filiere;
    } else if (cycleKey === 'Master' || cycleKey === 'Technicien') {
        currentFilieres = filieres[language][cycleKey] || [];
        isStep2Complete = !!formData.cycle && !!formData.filiere;
    }


    return (
        <div className="pt-24 bg-bg-primary">
            <div className="container mx-auto px-4 sm:px-6 space-y-12 pb-16">
                <section className="text-center max-w-3xl mx-auto fade-in-up-section">
                    <YourVoiceIcon className="w-20 h-20 mx-auto text-text-dark mb-4"/>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-text-dark">{t.title}</h1>
                    <p className="mt-4 text-md md:text-lg text-text-light">{t.subtitle}</p>
                </section>

                <section className="max-w-2xl mx-auto fade-in-up-section">
                    <div className="bg-card p-6 sm:p-8 rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                        {!submitted ? (
                            <form onSubmit={handleSubmit}>
                                {/* Step 1 */}
                                {step === 1 && (
                                    <div>
                                        <h3 className="text-xl font-bold text-center mb-6">{t.step1Title}</h3>
                                        <div className="grid grid-cols-4 gap-2 sm:gap-4 text-text-dark">
                                            {categories.map(({key, Icon}) => (
                                                <CategoryButton key={key} Icon={Icon} label={t.categories[key]} onClick={() => handleCategorySelect(key)} selected={formData.category === key} />
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {/* Step 2 */}
                                {step === 2 && (
                                     <div>
                                        <h3 className="text-xl font-bold text-center mb-6">{t.step2Title}</h3>
                                        <div className="flex justify-center flex-wrap gap-2 mb-4">
                                            {(Object.keys(t.cycles) as Cycle[]).map(cycle => (
                                                <button type="button" key={cycle} onClick={() => handleCycleSelect(cycle)} className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${formData.cycle === cycle ? 'bg-primary text-white' : 'bg-bg-primary hover:bg-bg-primary/60'}`}>{t.cycles[cycle]}</button>
                                            ))}
                                        </div>

                                        {formData.cycle === 'Ingenieur' && (
                                            <div className="flex justify-center gap-2 my-4">
                                                {t.years.map(year => (
                                                    <button type="button" key={year} onClick={() => handleYearSelect(year)} className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${formData.year === year ? 'bg-primary text-white' : 'bg-bg-primary hover:bg-bg-primary/60'}`}>{year}</button>
                                                ))}
                                            </div>
                                        )}
                                        
                                        {currentFilieres.length > 0 && (
                                            <select value={formData.filiere} onChange={e => setFormData(prev => ({...prev, filiere: e.target.value}))} required className="w-full p-3 bg-bg-primary rounded-lg mt-4">
                                                <option value="">{t.filierePlaceholder}</option>
                                                {currentFilieres.map(f => <option key={f} value={f}>{f}</option>)}
                                            </select>
                                        )}

                                        <div className="flex justify-between mt-6">
                                            <button type="button" onClick={() => setStep(1)} className="text-sm font-semibold text-text-light">Précédent</button>
                                            <button type="button" onClick={() => setStep(3)} disabled={!isStep2Complete} className="text-sm font-semibold text-text-dark disabled:opacity-50">Suivant</button>
                                        </div>
                                    </div>
                                )}
                                {/* Step 3 */}
                                {step === 3 && (
                                     <div>
                                        <h3 className="text-xl font-bold text-center mb-6">{t.step3Title}</h3>
                                        <div className="space-y-4">
                                            <input type="text" placeholder={t.subjectPlaceholder} value={formData.subject} onChange={e => setFormData(prev => ({...prev, subject: e.target.value}))} required className="w-full p-3 bg-bg-primary rounded-lg"/>
                                            <textarea placeholder={t.messagePlaceholder} value={formData.message} onChange={e => setFormData(prev => ({...prev, message: e.target.value}))} required rows={4} className="w-full p-3 bg-bg-primary rounded-lg"></textarea>
                                            <button type="button" className="text-sm font-semibold text-primary">{t.attachPhoto}</button>
                                        </div>
                                        <div className="flex justify-between mt-6">
                                            <button type="button" onClick={() => setStep(formData.category === 'Formation' ? 2 : 1)} className="text-sm font-semibold text-text-light">Précédent</button>
                                            <button type="button" onClick={() => setStep(4)} disabled={!formData.subject || !formData.message} className="text-sm font-semibold text-text-dark disabled:opacity-50">Suivant</button>
                                        </div>
                                    </div>
                                )}
                                 {/* Step 4 */}
                                {step === 4 && (
                                     <div>
                                        <h3 className="text-xl font-bold text-center mb-6">{t.step4Title}</h3>
                                        <div className="space-y-4">
                                            <label className="flex items-start p-4 bg-bg-primary rounded-lg cursor-pointer">
                                                <input type="radio" name="notification" value="anonymous" checked={formData.notification === 'anonymous'} onChange={e => setFormData(prev => ({...prev, notification: e.target.value}))} className="mt-1"/>
                                                <div className="ltr:ml-3 rtl:mr-3">
                                                    <p className="font-semibold">{t.anonymousOption}</p>
                                                    <p className="text-xs text-text-light">{t.anonymousHelp}</p>
                                                </div>
                                            </label>
                                            <label className="flex items-start p-4 bg-bg-primary rounded-lg cursor-pointer">
                                                <input type="radio" name="notification" value="email" checked={formData.notification === 'email'} onChange={e => setFormData(prev => ({...prev, notification: e.target.value}))} className="mt-1"/>
                                                <div className="ltr:ml-3 rtl:mr-3">
                                                    <p className="font-semibold">{t.emailOption}</p>
                                                    {formData.notification === 'email' && <input type="email" placeholder={t.emailPlaceholder} required className="w-full p-2 mt-2 bg-card rounded-md" value={formData.email} onChange={e => setFormData(prev => ({...prev, email: e.target.value}))}/>}
                                                </div>
                                            </label>
                                        </div>
                                        <div className="flex justify-between mt-6 items-center">
                                            <button type="button" onClick={() => setStep(3)} className="text-sm font-semibold text-text-light">Précédent</button>
                                            <button type="submit" className="px-6 py-3 bg-accent text-white rounded-full font-bold hover:bg-opacity-90 transition-all duration-300">{t.submitButton}</button>
                                        </div>
                                    </div>
                                )}
                            </form>
                        ) : (
                            <div className="text-center">
                                <span className="text-6xl">✅</span>
                                <h2 className="text-2xl font-bold text-text-dark mt-4 mb-2">{t.successTitle}</h2>
                                <p className="text-text-light">{t.successText}</p>
                                <p className="my-3 text-xl font-mono font-bold bg-bg-primary p-3 rounded-lg inline-block">{trackingCode}</p>
                                <p className="text-sm text-text-light">{t.successInfo}</p>
                            </div>
                        )}
                    </div>
                </section>
                
                <section className="max-w-2xl mx-auto fade-in-up-section">
                     <div className="bg-card p-6 sm:p-8 rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                        <h3 className="text-xl font-bold text-center mb-4">{t.trackerTitle}</h3>
                        <div className="flex gap-2">
                            <input type="text" placeholder={t.trackerPlaceholder} value={trackInput} onChange={e => setTrackInput(e.target.value)} className="flex-grow p-3 bg-bg-primary rounded-lg"/>
                            <button onClick={handleTrack} className="px-6 bg-primary text-white rounded-lg font-semibold">{t.trackerButton}</button>
                        </div>
                        {trackedStatus && (
                            <div className="mt-4 bg-bg-primary/50 p-4 rounded-lg">
                                <p className="font-bold text-lg">{trackedStatus.status}</p>
                                <p className="text-sm text-text-light">{trackedStatus.message}</p>
                            </div>
                        )}
                     </div>
                </section>

            </div>
        </div>
    );
};

export default TaVoixPage;