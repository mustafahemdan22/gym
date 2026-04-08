export interface BlogPost {
  id: string;
  title: { en: string; ar: string };
  excerpt: { en: string; ar: string };
  category: { en: string; ar: string };
  date: string;
  image: string;
  author: { en: string; ar: string };
}

export const blogPosts = {
  male: [
    {
      id: 'b1',
      title: { en: '5 Essential Compound Lifts for Massive Gains', ar: '5 تمارين مركبة أساسية لزيادة الكتلة العضلية' },
      excerpt: { en: 'Learn why squats, deadlifts, and bench press are the foundation of any serious strength program.', ar: 'تعرف على سبب كون السكوات والرفعة الميتة والضغط على الكرسي هي أساس أي برنامج قوة جاد.' },
      category: { en: 'Training', ar: 'تدريب' },
      date: '2024-03-20',
      image: 'GymHub/blog/male/compound-lifts',
      author: { en: 'Coach Ahmed', ar: 'الكوتش أحمد' },
    },
    {
      id: 'b2',
      title: { en: 'The Ultimate Bulking Diet for Hardgainers', ar: 'النظام الغذائي الأمثل لتضخيم العضلات لأصحاب الأجسام النحيفة' },
      excerpt: { en: 'Struggling to put on weight? Here is a daily meal plan designed to push your calorie surplus to the limit.', ar: 'هل تواجه صعوبة في زيادة الوزن؟ إليك خطة وجبات يومية مصممة لدفع فائض السعرات الحرارية لديك إلى أقصى حد.' },
      category: { en: 'Nutrition', ar: 'تغذية' },
      date: '2024-03-15',
      image: 'GymHub/blog/male/bulking-diet',
      author: { en: 'Marcus Chen', ar: 'ماركوس تشين' },
    },
    {
      id: 'b3',
      title: { en: 'Avoid Overtraining: Signs You Need a Rest Day', ar: 'تجنب الإفراط في التدريب: علامات تشير إلى أنك بحاجة ليوم راحة' },
      excerpt: { en: 'Pushing hard is good, but knowing when to stop is even better. Look out for these overtraining symptoms.', ar: 'الدفع بقوة أمر جيد، لكن معرفة متى تتوقف هو الأفضل. احذر من أعراض الإفراط في التدريب هذه.' },
      category: { en: 'Recovery', ar: 'تعافي' },
      date: '2024-03-10',
      image: 'GymHub/blog/male/avoid-overtraining',
      author: { en: 'David Miller', ar: 'ديفيد ميلر' },
    },
  ],
  female: [
    {
      id: 'f1',
      title: { en: 'Finding Balance: The Power of Yoga and HIIT', ar: 'إيجاد التوازن: قوة اليوغا والتدريب عالي الكثافة' },
      excerpt: { en: 'How a combination of slow flow and high intensity can help you build lean muscle and inner peace.', ar: 'كيف يمكن لمزيج من التدفق البطيء والتدريب عالي الكثافة أن يساعدك على بناء عضلات رشيقة وسلام داخلي.' },
      category: { en: 'Wellness', ar: 'عافية' },
      date: '2024-03-20',
      image: 'GymHub/blog/female/finding-balance',
      author: { en: 'Sarah Jenkins', ar: 'سارة جينكينز' },
    },
    {
      id: 'f2',
      title: { en: 'Meal Prep for Busy Professionals', ar: 'تحضير الوجبات للمهنيين المشغولين' },
      excerpt: { en: 'Eat clean without spending hours in the kitchen. Here are 3 quick recipes for your busy work week.', ar: 'تناول طعاماً نظيفاً دون قضاء ساعات في المطبخ. إليك 3 وصفات سريعة لأسبوع عملك المزدحم.' },
      category: { en: 'Nutrition', ar: 'تغذية' },
      date: '2024-03-12',
      image: 'GymHub/blog/female/meal-prep',
      author: { en: 'Layla Murad', ar: 'ليلى مراد' },
    },
    {
      id: 'f3',
      title: { en: 'Self-Care Rituals After a Tough Workout', ar: 'طقوس العناية بالذات بعد تمرين شاق' },
      excerpt: { en: 'Post-workout habits that will help you recover faster and feel more energized for your next session.', ar: 'عادات ما بعد التمرين التي ستساعدك على التعافي بشكل أسرع والشعور بمزيد من الطاقة لجلستك القادمة.' },
      category: { en: 'Recovery', ar: 'تعافي' },
      date: '2024-03-05',
      image: 'GymHub/blog/female/self-care',
      author: { en: 'Elena Rossi', ar: 'إيلينا روسي' },
    },
  ],
};
