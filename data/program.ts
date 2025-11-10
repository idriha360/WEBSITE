import { Language } from "../App";

export type ProjectCategory = 'Tous' | 'Formation' | 'Restaurant' | 'Annexes' | 'Internat' | 'Activités';
export type ProjectStatus = 'Prévu' | 'En cours' | 'Réalisé';

export interface Project {
  id: string;
  category: ProjectCategory;
  title: Record<Language, string>;
  description: Record<Language, string>;
  committee: Record<Language, string>;
  status: Record<Language, ProjectStatus>;
  status_ar: Record<Language, string>;
  cta: Record<Language, string>;
  ctaLink: string;
}

export const programData: Project[] = [
  // Formation
  {
    id: 'form-1', category: 'Formation',
    title: { fr: 'Ateliers et formations pratiques', ar: 'ورشات عمل ودورات تكوينية' },
    description: { fr: 'Organiser des sessions dans les domaines scientifique, technique et culturel pour enrichir vos compétences.', ar: 'تنظيم دورات تكوينية وورشات تدريبية في المجالات العلمية والتقنية والثقافية لإثراء مهاراتكم.' },
    committee: { fr: 'Comité Formation', ar: 'لجنة التكوين' },
    status: { fr: 'Prévu', ar: 'Prévu' },
    status_ar: { fr: 'Prévu', ar: 'مخطط له' },
    cta: { fr: 'Suggérer un atelier', ar: 'اقترح ورشة عمل' },
    ctaLink: '/ta-voix?category=Formation'
  },
  {
    id: 'form-2', category: 'Formation',
    title: { fr: 'Connecter formation et marché du travail', ar: 'ربط التكوين بسوق الشغل' },
    description: { fr: 'Lier la formation aux besoins réels du marché via des séminaires avec des experts et lauréats de l\'institut.', ar: 'العمل على تحسين جودة التعلمات وربط التكوين بالحاجيات الواقعية لسوق الشغل عبر ندوات بمشاركة خبراء وخريجي المعهد.' },
    committee: { fr: 'Comité Formation', ar: 'لجنة التكوين' },
    status: { fr: 'Prévu', ar: 'Prévu' },
    status_ar: { fr: 'Prévu', ar: 'مخطط له' },
    cta: { fr: 'Proposer un intervenant', ar: 'اقترح متحدثًا' },
    ctaLink: '/ta-voix?category=Formation'
  },
   {
    id: 'form-3', category: 'Formation',
    title: { fr: 'Soutien pédagogique renforcé', ar: 'دعم بيداغوجي معزز' },
    description: { fr: 'Développer des programmes de soutien pour les étudiants en difficulté afin de garantir la réussite de tous.', ar: 'تطوير برامج للدعم البيداغوجي لفائدة الطلبة المتعثرين دراسياً لضمان نجاح الجميع.' },
    committee: { fr: 'Comité Formation', ar: 'لجنة التكوين' },
    status: { fr: 'Prévu', ar: 'Prévu' },
    status_ar: { fr: 'Prévu', ar: 'مخطط له' },
    cta: { fr: 'Besoin d\'aide ?', ar: 'هل تحتاج إلى مساعدة؟' },
    ctaLink: '/ta-voix?category=Formation'
  },
  
  // Restaurant
  {
    id: 'resto-1', category: 'Restaurant',
    title: { fr: 'Objectif : Repas de meilleure qualité', ar: 'الهدف: وجبات ذات جودة أفضل' },
    description: { fr: 'Améliorer la qualité des repas, garantir leur équilibre nutritionnel et une hygiène stricte.', ar: 'تحسين جودة الوجبات الغذائية المقدمة وضمان توازنها الغذائي والحرص على النظافة.' },
    committee: { fr: 'Comité Restaurant', ar: 'لجنة المطعم' },
    status: { fr: 'Prévu', ar: 'Prévu' },
    status_ar: { fr: 'Prévu', ar: 'مخطط له' },
    cta: { fr: 'Une suggestion pour le menu ?', ar: 'اقتراح للقائمة؟' },
    ctaLink: '/ta-voix?category=Restaurant'
  },
  {
    id: 'resto-2', category: 'Restaurant',
    title: { fr: 'Menus diversifiés et participatifs', ar: 'قوائم طعام متنوعة وتشاركية' },
    description: { fr: 'Diversifier les repas et préparer les menus selon les choix et préférences des étudiants.', ar: 'تنويع الوجبات لتلبية حاجيات الطلبة المختلفة وإعداد اللائحة من اختيار الطلبة.' },
    committee: { fr: 'Comité Restaurant', ar: 'لجنة المطعم' },
    status: { fr: 'Prévu', ar: 'Prévu' },
    status_ar: { fr: 'Prévu', ar: 'مخطط له' },
    cta: { fr: 'Vote pour le prochain plat', ar: 'صوّت للطبق التالي' },
    ctaLink: '/ta-voix?category=Restaurant'
  },
  {
    id: 'resto-3', category: 'Restaurant',
    title: { fr: 'Réduire l\'affluence au restaurant', ar: 'تقليل الاكتظاظ في المطعم' },
    description: { fr: 'Travailler à des solutions concrètes pour résoudre le problème de la surpopulation aux heures de pointe.', ar: 'العمل على إيجاد حلول ملموسة لمشكل الاكتظاظ في أوقات الذروة.' },
    committee: { fr: 'Comité Restaurant', ar: 'لجنة المطعم' },
    status: { fr: 'Prévu', ar: 'Prévu' },
    status_ar: { fr: 'Prévu', ar: 'مخطط له' },
    cta: { fr: 'Proposer une solution', ar: 'اقترح حلاً' },
    ctaLink: '/ta-voix?category=Restaurant'
  },
  
  // Annexes
  {
    id: 'annex-1', category: 'Annexes',
    title: { fr: 'Amélioration des espaces communs', ar: 'تحسين الفضاءات المشتركة' },
    description: { fr: 'Aménager des espaces de repos et de lecture, et entretenir les installations sportives.', ar: 'تهيئة فضاءات للراحة والمطالعة داخل الأحياء الطلابية والعناية بالمرافق الرياضية.' },
    committee: { fr: 'Comité Annexes', ar: 'لجنة الملحقات' },
    status: { fr: 'Prévu', ar: 'Prévu' },
    status_ar: { fr: 'Prévu', ar: 'مخطط له' },
    cta: { fr: 'Idée d\'aménagement ?', ar: 'فكرة للتهيئة؟' },
    ctaLink: '/ta-voix?category=Annexes'
  },
  {
    id: 'annex-2', category: 'Annexes',
    title: { fr: 'Une infirmerie mieux équipée', ar: 'عيادة مجهزة بشكل أفضل' },
    description: { fr: 'Œuvrer pour équiper la clinique en fournitures médicales essentielles pour les premiers soins.', ar: 'العمل على تجهيز العيادة بالمستلزمات الطبية الأساسية للإسعافات الأولية.' },
    committee: { fr: 'Comité Annexes', ar: 'لجنة الملحقات' },
    status: { fr: 'Prévu', ar: 'Prévu' },
    status_ar: { fr: 'Prévu', ar: 'مخطط له' },
    cta: { fr: 'Besoin de matériel ?', ar: 'حاجة لمعدات؟' },
    ctaLink: '/ta-voix?category=Annexes'
  },
  {
    id: 'annex-3', category: 'Annexes',
    title: { fr: 'Une nouvelle mosquée pour l\'institut', ar: 'مسجد جديد يليق بالمعهد' },
    description: { fr: 'Veiller à la construction d\'une nouvelle mosquée digne de l\'institut et fournir les fournitures nécessaires.', ar: 'الحرص على بناء مسجد جديد يليق بالمعهد وكافي للطلبة وتوفير لوازمه.' },
    committee: { fr: 'Comité Culturel', ar: 'اللجنة الثقافية' },
    status: { fr: 'Prévu', ar: 'Prévu' },
    status_ar: { fr: 'Prévu', ar: 'مخطط له' },
    cta: { fr: 'Participer au projet', ar: 'شارك في المشروع' },
    ctaLink: '/ta-voix?category=Annexes'
  },

  // Internat
  {
    id: 'intern-1', category: 'Internat',
    title: { fr: 'Améliorer l\'hygiène et le séjour', ar: 'تحسين النظافة وظروف الإقامة' },
    description: { fr: 'Améliorer les conditions de séjour, l\'hygiène dans les chambres et l\'aménagement des sanitaires.', ar: 'تحسين ظروف الإقامة والنظافة العامة داخل الغرف والمرافق، والعناية بتهيئة المرافق الصحية.' },
    committee: { fr: 'Comité Internat', ar: 'لجنة الداخلية' },
    status: { fr: 'Prévu', ar: 'Prévu' },
    status_ar: { fr: 'Prévu', ar: 'مخطط له' },
    cta: { fr: 'Signaler un problème', ar: 'بلغ عن مشكلة' },
    ctaLink: '/ta-voix?category=Internat'
  },
  {
    id: 'intern-2', category: 'Internat',
    title: { fr: 'Réhabilitation des terrains de sport', ar: 'تأهيل الملاعب الرياضية' },
    description: { fr: 'Réhabiliter les terrains de sport pour qu\'ils soient de haute qualité et encourager leur utilisation.', ar: 'تأهيل الملاعب الرياضية لتكون ذات جودة عالية وتشجيع استغلالها.' },
    committee: { fr: 'Comité Sport', ar: 'لجنة الرياضة' },
    status: { fr: 'Prévu', ar: 'Prévu' },
    status_ar: { fr: 'Prévu', ar: 'مخطط له' },
    cta: { fr: 'Quel sport manque ?', ar: 'أي رياضة تنقص؟' },
    ctaLink: '/ta-voix?category=Sport'
  },
  
  // Activités
  {
    id: 'activ-1', category: 'Activités',
    title: { fr: 'Événements culturels et sportifs', ar: 'تظاهرات ثقافية ورياضية' },
    description: { fr: 'Organiser des forums, des rencontres et des événements culturels, sportifs et artistiques.', ar: 'تنظيم المنتديات والملتقيات الطلابية وتظاهرات ثقافية ورياضية وفنية.' },
    committee: { fr: 'Comité Culturel & Sport', ar: 'اللجنة الثقافية والرياضية' },
    status: { fr: 'Prévu', ar: 'Prévu' },
    status_ar: { fr: 'Prévu', ar: 'مخطط له' },
    cta: { fr: 'Proposer un événement', ar: 'اقترح حدثًا' },
    ctaLink: '/ta-voix?category=Activites'
  },
  {
    id: 'activ-2', category: 'Activités',
    title: { fr: 'Cérémonie de remise des diplômes', ar: 'حفل التخرج السنوي' },
    description: { fr: 'Organiser une cérémonie de remise des diplômes annuelle mémorable pour célébrer la réussite de nos lauréats.', ar: 'تنظيم حفل تخرج سنوي لا يُنسى للاحتفاء بنجاح خريجينا.' },
    committee: { fr: 'Comité Événementiel', ar: 'لجنة الفعاليات' },
    status: { fr: 'Prévu', ar: 'Prévu' },
    status_ar: { fr: 'Prévu', ar: 'مخطط له' },
    cta: { fr: 'Participer à l\'organisation', ar: 'شارك في التنظيم' },
    ctaLink: '/ta-voix?category=Activites'
  },
  {
    id: 'activ-3', category: 'Activités',
    title: { fr: 'Accueil des nouveaux étudiants', ar: 'استقبال الطلبة الجدد' },
    description: { fr: 'Mettre en place un programme d\'accueil chaleureux et informatif pour faciliter l\'intégration des nouveaux étudiants.', ar: 'تنظيم برنامج استقبالي حافل ومفيد لتسهيل اندماج الطلبة الجدد.' },
    committee: { fr: 'Tous les comités', ar: 'جميع اللجان' },
    status: { fr: 'Prévu', ar: 'Prévu' },
    status_ar: { fr: 'Prévu', ar: 'مخطط له' },
    cta: { fr: 'Devenir mentor', ar: 'كن مرشدًا' },
    ctaLink: '/ta-voix?category=Activites'
  }
];
