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
      author: { en: 'Mahmoud Adel', ar: 'محمود عادل' },
    },
    {
      id: 'b3',
      title: { en: 'Avoid Overtraining: Signs You Need a Rest Day', ar: 'تجنب الإفراط في التدريب: علامات تشير إلى أنك بحاجة ليوم راحة' },
      excerpt: { en: 'Pushing hard is good, but knowing when to stop is even better. Look out for these overtraining symptoms.', ar: 'الدفع بقوة أمر جيد، لكن معرفة متى تتوقف هو الأفضل. احذر من أعراض الإفراط في التدريب هذه.' },
      category: { en: 'Recovery', ar: 'تعافي' },
      date: '2024-03-10',
      image: 'GymHub/blog/male/avoid-overtraining',
      author: { en: 'Omar Hassan', ar: 'عمر حسن' },
    },
    {
      id: 'b4',
      title: { en: 'Top 5 Supplements for Muscle Recovery', ar: 'أفضل 5 مكملات غذائية للتعافي العضلي' },
      excerpt: { en: 'Discover which supplements actually work to reduce soreness and speed up your recovery between heavy sessions.', ar: 'اكتشف المكملات الغذائية التي تعمل فعلياً على تقليل الألم وتسريع شفائك بين الجلسات الشاقة.' },
      category: { en: 'Nutrition', ar: 'تغذية' },
      date: '2024-03-25',
      image: 'GymHub/blog/male/supplements',
      author: { en: 'Coach Ahmed', ar: 'الكوتش أحمد' },
    },
    {
      id: 'b5',
      title: { en: 'The Mentality of a Champion: Pushing Past Plateaus', ar: 'عقلية البطل: تجاوز فترات الركود' },
      excerpt: { en: 'Stuck at the same weight? Learn the psychological tricks elite athletes use to break through physical barriers.', ar: 'عالق في نفس الوزن؟ تعلم الحيل النفسية التي يستخدمها نخبة الرياضيين لاختراق الحواجز الجسدية.' },
      category: { en: 'Training', ar: 'تدريب' },
      date: '2024-03-28',
      image: 'GymHub/blog/male/champion-mentality',
      author: { en: 'Omar Hassan', ar: 'عمر حسن' },
    },
    {
      id: 'b6',
      title: { en: 'Core Strength: Beyond the Six-Pack', ar: 'قوة الجذع: ما وراء عضلات البطن الستة' },
      excerpt: { en: 'A strong core protects your spine and increases your main lifts. Try this 15-minute post-workout core routine.', ar: 'الجذع القوي يحمي عمودك الفقري ويزيد من رفعاتك الأساسية. جرب روتين الجذع هذا لمدة 15 دقيقة بعد التمرين.' },
      category: { en: 'Training', ar: 'تدريب' },
      date: '2024-04-02',
      image: 'GymHub/blog/male/core-strength',
      author: { en: 'Mahmoud Adel', ar: 'محمود عادل' },
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
      author: { en: 'Sara Mohamed', ar: 'سارة محمد' },
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
      author: { en: 'Nourhan Ahmed', ar: 'نورهان أحمد' },
    },
    {
      id: 'f4',
      title: { en: 'The Benefits of Pilates for Posture and Core', ar: 'فوائد البيلاتس للقوام وعضلات الجذع' },
      excerpt: { en: 'Why adding just two Pilates sessions a week can transform your posture, alleviate back pain, and sculpt a strong core.', ar: 'لماذا يمكن لإضافة جلستي بيلاتس فقط أسبوعياً أن تغير قوامك وتخفف آلام الظهر وتنحت جذعاً قوياً.' },
      category: { en: 'Wellness', ar: 'عافية' },
      date: '2024-03-25',
      image: 'GymHub/blog/female/pilates-benefits',
      author: { en: 'Layla Murad', ar: 'ليلى مراد' },
    },
    {
      id: 'f5',
      title: { en: 'Power Foods for Natural Energy Boosts', ar: 'أطعمة الطاقة لتعزيز النشاط الطبيعي' },
      excerpt: { en: 'Ditch the coffee crashes. These 5 nutrient-dense foods will keep your energy levels stable all day long.', ar: 'تخلص من انهيارات القهوة. هذه الأطعمة الخمسة الغنية بالعناصر الغذائية ستحافظ على استقرار مستويات طاقتك طوال اليوم.' },
      category: { en: 'Nutrition', ar: 'تغذية' },
      date: '2024-03-28',
      image: 'GymHub/blog/female/power-foods',
      author: { en: 'Sara Mohamed', ar: 'سارة محمد' },
    },
    {
      id: 'f6',
      title: { en: 'How to Build a Sustainable Home Workout Routine', ar: 'كيفية بناء روتين تمرين منزلي مستدام' },
      excerpt: { en: 'Can’t make it to the gym? Here is how to structure an effective and fun home workout using minimal equipment.', ar: 'لا تستطيع الذهاب إلى الجيم؟ إليك كيفية تنظيم تمرين منزلي فعال وممتع باستخدام الحد الأدنى من المعدات.' },
      category: { en: 'Training', ar: 'تدريب' },
      date: '2024-04-02',
      image: 'GymHub/blog/female/home-workout',
      author: { en: 'Nourhan Ahmed', ar: 'نورهان أحمد' },
    },
  ],
};
