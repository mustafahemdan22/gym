import { Program } from '@/types/program';

export const femalePrograms: Program[] = [
  {
    id: "prog_01",
    title: { en: "Lean Sculpt", ar: "نحت الجسم" },
    description: {
      en: "Tone, define, and build a lean physique through strategic resistance training and metabolic conditioning circuits.",
      ar: "نحت وتحديد وبناء جسم رشيق من خلال تدريب المقاومة الاستراتيجي ودوائر التكييف الأيضي."
    },
    image: "GymHub/programs/fitness/program_fitness_01",
    duration: "10 Weeks",
    intensity: "Medium",
    category: "fitness",
    sessions: 4
  },
  {
    id: "prog_02",
    title: { en: "Velocity Flow", ar: "تدفق السرعة" },
    description: {
      en: "High-energy cardio dance and agility training designed to torch calories while having fun on the floor.",
      ar: "تدريب رقص كارديو عالي الطاقة مع تمارين رشاقة مصمم لحرق السعرات مع الاستمتاع."
    },
    image: "GymHub/programs/cardio/program_cardio_01",
    duration: "6 Weeks",
    intensity: "Medium",
    category: "cardio",
    sessions: 5
  },
  {
    id: "prog_03",
    title: { en: "Glow & Balance", ar: "توهج وتوازن" },
    description: {
      en: "A harmonious blend of yoga, Pilates, and breathwork for inner calm, flexibility, and total body balance.",
      ar: "مزيج متناغم من اليوغا والبيلاتس وتمارين التنفس للهدوء الداخلي والمرونة وتوازن الجسم الكامل."
    },
    image: "GymHub/programs/wellness/program_wellness_01",
    duration: "8 Weeks",
    intensity: "Low",
    category: "wellness",
    sessions: 3
  },
  {
    id: "prog_04",
    title: { en: "Power Barre", ar: "باور باري" },
    description: {
      en: "Ballet-inspired strength training that sculpts long, lean muscles through low-impact, high-rep movements.",
      ar: "تدريب قوة مستوحى من الباليه ينحت عضلات طويلة ورشيقة من خلال حركات منخفضة التأثير وعالية التكرار."
    },
    image: "GymHub/programs/fitness/program_fitness_02",
    duration: "8 Weeks",
    intensity: "Medium",
    category: "fitness",
    sessions: 4
  }
];
