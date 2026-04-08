import { Trainer } from '@/types/gym';

export const maleTrainers: Trainer[] = [
  {
    id: "trainer_01",
    name: { en: "Ahmed Ali", ar: "أحمد علي" },
    role: { en: "Strength Coach", ar: "مدرب قوة" },
    bio: {
      en: "10+ years helping athletes reach peak performance through progressive overload and periodization.",
      ar: "أكثر من 10 سنوات في مساعدة الرياضيين على تحقيق أعلى أداء من خلال التحميل التدريجي والتقسيم الدوري."
    },
    image: "GymHub/trainers/male/trainer_01",
    category: "strength",
    experience: 10,
    rating: 4.9
  },
  {
    id: "trainer_02",
    name: { en: "Mahmoud Ibrahim", ar: "محمود إبراهيم" },
    role: { en: "Bodybuilding Pro", ar: "محترف كمال أجسام" },
    bio: {
      en: "IFBB Pro competitor and certified nutrition specialist with a focus on hypertrophy training.",
      ar: "متنافس IFBB محترف وأخصائي تغذية معتمد مع التركيز على تدريب تضخيم العضلات."
    },
    image: "GymHub/trainers/male/trainer_02",
    category: "bodybuilding",
    experience: 8,
    rating: 4.8
  },
  {
    id: "trainer_03",
    name: { en: "Omar Hassan", ar: "عمر حسن" },
    role: { en: "CrossFit Specialist", ar: "متخصص كروس فت" },
    bio: {
      en: "CrossFit Level 3 trainer specializing in functional fitness and competitive WODs.",
      ar: "مدرب كروس فت المستوى 3 متخصص في اللياقة الوظيفية وتمارين المنافسة."
    },
    image: "GymHub/trainers/male/trainer_03",
    category: "crossfit",
    experience: 6,
    rating: 4.7
  },
  {
    id: "trainer_04",
    name: { en: "Khalid Mansour", ar: "خالد منصور" },
    role: { en: "Powerlifting Coach", ar: "مدرب رفع أثقال" },
    bio: {
      en: "National powerlifting champion and certified strength & conditioning specialist.",
      ar: "بطل رفع الأثقال الوطني ومتخصص معتمد في القوة والتكييف."
    },
    image: "GymHub/trainers/male/trainer_04",
    category: "strength",
    experience: 12,
    rating: 5.0
  },
  {
    id: "trainer_05",
    name: { en: "Sami Mansour", ar: "سامي منصور" },
    role: { en: "Athletic Performance", ar: "أداء رياضي" },
    bio: {
      en: "Former D1 athlete now coaching explosive power and sport-specific conditioning.",
      ar: "رياضي سابق في الدرجة الأولى يدرب الآن على القوة الانفجارية والتكييف الرياضي."
    },
    image: "GymHub/trainers/male/trainer_05",
    category: "fitness",
    experience: 7,
    rating: 4.6
  },
  {
    id: "trainer_06",
    name: { en: "Youssef Karim", ar: "يوسف كريم" },
    role: { en: "MMA & Combat", ar: "فنون قتالية" },
    bio: {
      en: "Mixed martial arts instructor combining combat training with full-body conditioning.",
      ar: "مدرب فنون قتالية مختلطة يجمع بين التدريب القتالي وتكييف الجسم بالكامل."
    },
    image: "GymHub/trainers/male/trainer_06",
    category: "fitness",
    experience: 9,
    rating: 4.8
  }
];
