import { Program } from '@/types/program';

export const malePrograms: Program[] = [
  {
    id: "prog_01",
    title: { en: "The Titan Build", ar: "بناء العملاق" },
    description: {
      en: "Hypertrophy gains through progressive overload. Built for serious lifters who want to push past their limits.",
      ar: "تضخم العضلات ومكاسب القوة من خلال التحميل التدريجي. مصمم للرافعين الجادين الذين يريدون تجاوز حدودهم."
    },
    image: "GymHub/programs/strength/program_strength_01",
    duration: "12 Weeks",
    intensity: "High",
    category: "strength",
    sessions: 5
  },
  {
    id: "prog_02",
    title: { en: "Power Surge", ar: "اندفاع القوة" },
    description: {
      en: "Explosive power and functional athletic strength. Combines Olympic lifts, plyometrics, and sprint conditioning.",
      ar: "قوة انفجارية وقوة رياضية وظيفية. يجمع بين الرفعات الأولمبية والبليومتريك وتكييف السرعة."
    },
    image: "GymHub/programs/strength/program_strength_02",
    duration: "8 Weeks",
    intensity: "High",
    category: "powerlifting",
    sessions: 4
  },
  {
    id: "prog_03",
    title: { en: "Iron Foundation", ar: "الأساس الحديدي" },
    description: {
      en: "Master the fundamentals of weight training with perfect form, compound movements, and structured progression.",
      ar: "أتقن أساسيات تدريب الأثقال مع الشكل المثالي والحركات المركبة والتقدم المنظم."
    },
    image: "GymHub/programs/strength/program_strength_03",
    duration: "10 Weeks",
    intensity: "Medium",
    category: "strength",
    sessions: 4
  },
  {
    id: "prog_04",
    title: { en: "Beast Mode", ar: "وضع الوحش" },
    description: {
      en: "An advanced split routine targeting each muscle group twice per week with volume-based intensity techniques.",
      ar: "برنامج تقسيم متقدم يستهدف كل مجموعة عضلية مرتين أسبوعياً بتقنيات شدة قائمة على الحجم."
    },
    image: "GymHub/programs/strength/program_strength_04",
    duration: "16 Weeks",
    intensity: "High",
    category: "bodybuilding",
    sessions: 6
  },
   {
  id: "prog_05",
  title: { en: "Fat Burn Pro", ar: "حرق الدهون الاحترافي" },
  description: {
    en: "A high-energy fat burning program combining HIIT, cardio, and full-body workouts to maximize calorie burn.",
    ar: "برنامج عالي الطاقة لحرق الدهون يجمع بين HIIT والكارديو وتمارين الجسم الكامل لتحقيق أقصى حرق للسعرات."
  },
  image: "GymHub/programs/cardio/program_cardio_01",
  duration: "8 Weeks",
  intensity: "Medium",
  category: "fat-loss",
  sessions: 5
},
{
  id: "prog_06",
  title: { en: "Muscle Builder X", ar: "بناء العضلات X" },
  description: {
    en: "A hypertrophy-focused training plan designed to increase muscle size using progressive overload and structured splits.",
    ar: "برنامج يركز على التضخيم العضلي باستخدام الحمل التدريجي وتقسيم التمارين بشكل منظم."
  },
  image: "GymHub/programs/strength/program_strength_01",
  duration: "12 Weeks",
  intensity: "High",
  category: "muscle-gain",
  sessions: 4
}
];
