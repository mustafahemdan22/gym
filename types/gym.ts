export interface Trainer {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  role: {
    en: string;
    ar: string;
  };
  bio: {
    en: string;
    ar: string;
  };
  image: string;
  category: 'strength' | 'cardio' | 'fitness' | 'wellness' | 'bodybuilding' | 'crossfit';
  experience: number;
  rating: number;
}
