export interface Program {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  image: string;
  duration: string;
  intensity: 'Low' | 'Medium' | 'High';
  category: string;
  sessions: number;
}
