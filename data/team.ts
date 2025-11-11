import { Language } from "../App";

export interface TeamMember {
  name: Record<Language, string>;
  role: Record<Language, string>;
  imgSrc: string;
  type: 'bureau' | 'committee';
  quote?: Record<Language, string>;
}

export const fullTeam: TeamMember[] = [
  { 
    name: { fr: 'Mohamed DERKAOUI', ar: 'محمد الدرقاوي' }, 
    role: { fr: 'Président', ar: 'الرئيس' },
    imgSrc: 'AECHA/1.jpg',
    type: 'bureau',
    quote: { fr: "Transformer vos idées en projets concrets pour le campus.", ar: "تحويل أفكاركم إلى مشاريع ملموسة للحرم الجامعي." }
  },
  { 
    name: { fr: 'Mohamed KHABABI', ar: 'محمد خبابي' }, 
    role: { fr: 'Vice Président', ar: 'نائب الرئيس' },
    imgSrc: 'AECHA/2.jpg',
    type: 'bureau',
    quote: { fr: "Assurer la continuité et le soutien de chaque initiative.", ar: "ضمان استمرارية ودعم كل مبادرة." }
  },
  { 
    name: { fr: 'Hajar AIT MERRI', ar: 'هجر ايتمري' }, 
    role: { fr: 'Secrétaire Générale', ar: 'الكاتبة العامة' },
    imgSrc: 'AECHA/3.jpg',
    type: 'bureau',
    quote: { fr: "L'organisation est la clé de notre réussite collective.", ar: "التنظيم هو مفتاح نجاحنا الجماعي." }
  },
  { 
    name: { fr: 'Mohamed BAALA', ar: 'محمد باعلا' }, 
    role: { fr: 'Trésorier', ar: 'أمين المال' },
    imgSrc: 'AECHA/4.jpg',
    type: 'bureau',
    quote: { fr: "Une gestion transparente pour une confiance durable.", ar: "إدارة شفافة من أجل ثقة دائمة." }
  },
  { 
    name: { fr: 'Haithem CHOUARI', ar: 'هيثم الشواري' }, 
    role: { fr: 'Vice-Trésorier', ar: 'نائب أمين المال' },
    imgSrc: 'AECHA/5.jpg',
    type: 'bureau',
    quote: { fr: "Chaque ressource compte et sera utilisée pour vous.", ar: "كل مورد مهم وسيتم استخدامه من أجلكم." }
  },
  { 
    name: { fr: 'Youness AKYOD', ar: 'يونس أكيوض' }, 
    role: { fr: 'Responsable Formation', ar: 'مسؤول التكوين' },
    imgSrc: 'AECHA/6.jpg',
    type: 'committee',
  },
  { 
    name: { fr: 'Abdellilah AMKASSOU', ar: 'عبد الإله أمكاسو' }, 
    role: { fr: 'Responsable Forum', ar: 'مسؤول المنتدى' },
    imgSrc: 'AECHA/7.jpg',
    type: 'committee',
  },
  { 
    name: { fr: 'Ali AJAGOUR', ar: 'علي أجاݣور' }, 
    role: { fr: 'Responsable culturel', ar: 'المسؤول الثقافي' },
    imgSrc: 'AECHA/8.jpg',
    type: 'committee',
  },
  { 
    name: { fr: 'Zouhair FAKRANI', ar: 'زهير فكراني' }, 
    role: { fr: 'Responsable Restauration', ar: 'مسؤول المطعم' },
    imgSrc: 'AECHA/9.jpg',
    type: 'committee',
  },
  { 
    name: { fr: 'Zakaria ALMOU', ar: 'زكرياء آلمو' }, 
    role: { fr: 'Responsable Buvette-Internat', ar: 'مسؤول المقصف والداخلية' },
    imgSrc: 'AECHA/10.jpg',
    type: 'committee',
  },
  { 
    name: { fr: 'Anas AIT BOUDOUN', ar: 'أنس أيت بودون' }, 
    role: { fr: 'Responsable Sport', ar: 'مسؤول الرياضة' },
    imgSrc: 'AECHA/11.jpg',
    type: 'committee',
  },
];