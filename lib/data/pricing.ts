export interface PricingPlan {
  id: string;
  name: { en: string; ar: string };
  price: string;
  period: { en: string; ar: string };
  features: { en: string; ar: string }[];
  isPopular?: boolean;
}

export const pricingPlans = {
  male: [
    {
      id: 'm1',
      name: { en: 'Basic Warrior', ar: 'المحارب الأساسي' },
      price: '$29',
      period: { en: 'month', ar: 'شهر' },
      features: [
        { en: 'Access to Gym Floor', ar: 'دخول إلى صالة الجيم' },
        { en: 'Locker & Shower', ar: 'خزانة وحمام' },
        { en: '1 Fitness Assessment', ar: '1 تقييم لياقة' },
      ],
    },
    {
      id: 'm2',
      name: { en: 'Elite Champion', ar: 'البطل النخبوي' },
      price: '$59',
      period: { en: 'month', ar: 'شهر' },
      features: [
        { en: 'All Basic Features', ar: 'جميع الميزات الأساسية' },
        { en: 'Group Training Sessions', ar: 'جلسات تدريب جماعية' },
        { en: 'Nutrition Consultation', ar: 'استشارة تغذية' },
        { en: '24/7 Access', ar: 'دخول 24/7' },
      ],
      isPopular: true,
    },
    {
      id: 'm3',
      name: { en: 'Titan Status', ar: 'مرتبة تيتان' },
      price: '$99',
      period: { en: 'month', ar: 'شهر' },
      features: [
        { en: 'All Elite Features', ar: 'جميع الميزات النخبوية' },
        { en: 'Personal Coaching (4/mo)', ar: 'تدريب شخصي (4/شهر)' },
        { en: 'VIP Lounge Access', ar: 'دخول قاعة كبار الشخصيات' },
        { en: 'Custom Workout Plan', ar: 'خطة تدريب مخصصة' },
      ],
    },
  ],
  female: [
    {
      id: 'f1',
      name: { en: 'Glow Basic', ar: 'توهج أساسي' },
      price: '$25',
      period: { en: 'month', ar: 'شهر' },
      features: [
        { en: 'Gym & Cardio Area', ar: 'منطقة الجيم والكارديو' },
        { en: 'Standard Locker Area', ar: 'منطقة الخزائن القياسية' },
        { en: 'Initial Goal Setting', ar: 'تحديد الأهداف الأولية' },
      ],
    },
    {
      id: 'f2',
      name: { en: 'Radiant Plus', ar: 'إشراق بلس' },
      price: '$49',
      period: { en: 'month', ar: 'شهر' },
      features: [
        { en: 'All Basic Features', ar: 'جميع الميزات الأساسية' },
        { en: 'Unlimited Yoga Classes', ar: 'دروس يوغا غير محدودة' },
        { en: 'Sauna & Spa Access', ar: 'دخول الساونا والسبا' },
        { en: 'Fitness Workshops', ar: 'ورش عمل للياقة البدنية' },
      ],
    },
    {
      id: 'f3',
      name: { en: 'Empower Elite', ar: 'نخبة التمكين' },
      price: '$89',
      period: { en: 'month', ar: 'شهر' },
      features: [
        { en: 'All Radiant Features', ar: 'جميع ميزات الإشراق' },
        { en: 'Personal Wellness Coach', ar: 'مدربة عافية شخصية' },
        { en: 'Cryotherapy (2/mo)', ar: 'علاج بالتبريد (2/شهر)' },
        { en: 'Tailored Nutrition Plan', ar: 'خطة تغذية مصممة خصيصاً' },
      ],
    },
  ],
};
