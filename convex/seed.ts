/* eslint-disable @typescript-eslint/no-explicit-any */
import { mutation } from "./_generated/server";

const maleTrainers = [
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
    name: { en: "Mahmoud Adel", ar: "محمود عادل" },
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
    name: { en: "Kareem Tarek", ar: "كريم طارق" },
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

const femaleTrainers = [
  {
    id: "trainer_01",
    name: { en: "Sara Mohamed", ar: "سارة محمد" },
    role: { en: "Fitness Expert", ar: "خبيرة لياقة" },
    bio: {
      en: "Certified personal trainer focused on body sculpting, toning, and sustainable fitness habits.",
      ar: "مدربة شخصية معتمدة متخصصة في نحت الجسم والتناسق وعادات اللياقة المستدامة."
    },
    image: "GymHub/trainers/female/trainer_01",
    category: "fitness",
    experience: 8,
    rating: 4.9
  },
  {
    id: "trainer_02",
    name: { en: "Layla Murad", ar: "ليلى مراد" },
    role: { en: "Yoga & Wellness", ar: "يوغا وعافية" },
    bio: {
      en: "RYT-500 certified yoga instructor blending mindfulness, flexibility, and strength into holistic wellness.",
      ar: "مدربة يوغا معتمدة RYT-500 تجمع بين التأمل والمرونة والقوة في عافية شاملة."
    },
    image: "GymHub/trainers/female/trainer_02",
    category: "wellness",
    experience: 10,
    rating: 5.0
  },
  {
    id: "trainer_03",
    name: { en: "Nourhan Ahmed", ar: "نورهان أحمد" },
    role: { en: "Cardio Specialist", ar: "متخصصة كارديو" },
    bio: {
      en: "HIIT and cardio dance expert with a passion for energizing group classes and fat-burning circuits.",
      ar: "خبيرة تمارين HIIT ورقص الكارديو مع شغف لتنشيط الحصص الجماعية ودوائر حرق الدهون."
    },
    image: "GymHub/trainers/female/trainer_03",
    category: "cardio",
    experience: 6,
    rating: 4.7
  },
  {
    id: "trainer_04",
    name: { en: "Mariam Khaled", ar: "مريم خالد" },
    role: { en: "Pilates Master", ar: "خبيرة بيلاتس" },
    bio: {
      en: "Classical Pilates instructor specializing in core strengthening, posture correction, and rehabilitation.",
      ar: "مدربة بيلاتس كلاسيكية متخصصة في تقوية عضلات الوسط وتصحيح القوام وإعادة التأهيل."
    },
    image: "GymHub/trainers/female/trainer_04",
    category: "wellness",
    experience: 11,
    rating: 4.9
  },
  {
    id: "trainer_05",
    name: { en: "Amira Farouk", ar: "أميرة فاروق" },
    role: { en: "Dance Fitness", ar: "رقص ولياقة" },
    bio: {
      en: "Zumba and barre fitness instructor bringing rhythm, joy, and effective calorie-burning to every session.",
      ar: "مدربة زومبا وباري فتنس تجلب الإيقاع والفرح وحرق السعرات الفعّال لكل جلسة."
    },
    image: "GymHub/trainers/female/trainer_05",
    category: "cardio",
    experience: 5,
    rating: 4.6
  },
  {
    id: "trainer_06",
    name: { en: "Nada Youssef", ar: "ندى يوسف" },
    role: { en: "Nutrition & Wellness", ar: "تغذية وعافية" },
    bio: {
      en: "Registered dietitian and wellness coach integrating nutrition science with movement therapy.",
      ar: "أخصائية تغذية مسجلة ومدربة عافية تدمج علم التغذية مع العلاج بالحركة."
    },
    image: "GymHub/trainers/female/trainer_06",
    category: "wellness",
    experience: 9,
    rating: 4.8
  }
];

const malePrograms = [
  {
    id: "prog_01",
    title: { en: "The Titan Build", ar: "بناء العملاق" },
    description: {
      en: "Hypertrophy and strength gains through progressive overload. Built for serious lifters who want to push past their limits.",
      ar: "أقصى قدر من تضخم العضلات ومكاسب القوة من خلال التحميل التدريجي. مصمم للرافعين الجادين الذين يريدون تجاوز حدودهم."
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
    image: "GymHub/programs/strength/program_strength_05",
    duration: "12 Weeks",
    intensity: "High",
    category: "muscle-gain",
    sessions: 4
  }
];

const femalePrograms = [
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
  },
  {
    id: "prog_05",
    title: { en: "HIIT Blaze", ar: "لهيب الهيت" },
    description: {
      en: "Incinerate calories and boost your metabolism with high-intensity intervals designed for maximum efficiency.",
      ar: "احرق السعرات الحرارية وعزز عملية التمثيل الغذائي لديك من خلال فترات عالية الكثافة مصممة لتحقيق أقصى قدر من الكفاءة."
    },
    image: "GymHub/programs/cardio/program_cardio_02",
    duration: "6 Weeks",
    intensity: "High",
    category: "cardio",
    sessions: 5
  },
  {
    id: "prog_06",
    title: { en: "Strength Queen", ar: "ملكة القوة" },
    description: {
      en: "Build a powerful foundation. Focus on compound lifts to increase overall strength, tone, and functional fitness.",
      ar: "ابني أساساً قوياً. ركزي على الرفعات المركبة لزيادة القوة الإجمالية، التناسك، واللياقة البدنية الوظيفية."
    },
    image: "GymHub/programs/cardio/program_cardio_03",
    duration: "12 Weeks",
    intensity: "High",
    category: "strength",
    sessions: 4
  }
];

const pricingPlans = {
  male: [
    {
      id: 'm1',
      name: { en: 'Basic Warrior', ar: 'المحارب الأساسي' },
      price: '1,450 EGP',
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
      price: '2,950 EGP',
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
      price: '4,950 EGP',
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
      price: '1,250 EGP',
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
      price: '2,450 EGP',
      period: { en: 'month', ar: 'شهر' },
      features: [
        { en: 'All Basic Features', ar: 'جميع الميزات الأساسية' },
        { en: 'Unlimited Yoga Classes', ar: 'دروس يوغا غير محدودة' },
        { en: 'Sauna & Spa Access', ar: 'دخول الساونا والسبا' },
        { en: 'Fitness Workshops', ar: 'ورش عمل للياقة البدنية' },
      ],
      isPopular: true,
    },
    {
      id: 'f3',
      name: { en: 'Empower Elite', ar: 'نخبة التمكين' },
      price: '4,450 EGP',
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

const blogPosts = {
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

const faqs = [
  {
    id: 1,
    category: 'membership',
    question: { en: 'What is included in the premium membership?', ar: 'ما الذي تشمله العضوية المميزة؟' },
    answer: { 
      en: 'Our premium membership includes 24/7 gym access, all group classes, a monthly session with an elite coach, and access to our recovery lounge and sauna.', 
      ar: 'تشمل عضويتنا المميزة الدخول إلى الجيم على مدار الساعة، وجميع الحصص الجماعية، وجلسة شهرية مع مدرب نخبة، والوصول إلى صالة التعافي والساونا.' 
    }
  },
  {
    id: 2,
    category: 'programs',
    question: { en: 'Can I switch between male and female programs?', ar: 'هل يمكنني التبديل بين برامج الرجال والنساء؟' },
    answer: { 
      en: 'Yes, our platform is designed to be flexible. You can toggle the content mode at any time to view different training philosophies and specialized programs.', 
      ar: 'نعم، منصتنا مصممة لتكون مرنة. يمكنك تبديل وضع المحتوى في أي وقت لعرض فلسفات تدريب مختلفة وبرامج متخصصة.' 
    }
  },
  {
    id: 3,
    category: 'training',
    question: { en: 'Are the trainers certified professionals?', ar: 'هل المدربون محترفون معتمدون؟' },
    answer: { 
      en: 'Absolutely. Every trainer at GymHub holds international certifications (NASM, ISSA, etc.) and has at least 5 years of experience in their respective field.', 
      ar: 'بالتأكيد. كل مدرب في جيم هب يحمل شهادات دولية (NASM، ISSA، إلخ) ولديه خبرة لا تقل عن 5 سنوات في مجاله.' 
    }
  },
  {
    id: 4,
    category: 'membership',
    question: { en: 'Is there a contract or can I cancel anytime?', ar: 'هل هناك عقد أم يمكنني الإلغاء في أي وقت؟' },
    answer: { 
      en: 'We offer both monthly rolling plans and discounted annual memberships. Monthly plans can be cancelled with 30 days notice.', 
      ar: 'نحن نقدم خططاً شهرية متجددة وعضويات سنوية مخفضة. يمكن إلغاء الخطط الشهرية مع إشعار مسبق لمدة 30 يوماً.' 
    }
  },
  {
    id: 5,
    category: 'training',
    question: { en: 'Do you offer nutrition plans as well?', ar: 'هل تقدمون خطط تغذية أيضاً؟' },
    answer: { 
      en: 'Yes, our elite coaching sessions include basic nutrition guidance. For a full custom meal plan, you can book our Nutrition Specialization add-on.', 
      ar: 'نعم، تشمل جلسات التدريب النخبوي توجيهات غذائية أساسية. للحصول على خطة وجبات مخصصة بالكامل، يمكنك حجز إضافتنا المتخصصة في التغذية.' 
    }
  },
  {
    id: 6,
    category: 'membership',
    question: { en: 'Can I freeze my membership if I travel?', ar: 'هل يمكنني إيقاف عضويتي مؤقتاً إذا سافرت؟' },
    answer: {
      en: 'Yes, members on annual or premium plans can freeze their membership up to twice a year for a maximum total of 60 days.',
      ar: 'نعم، يمكن للأعضاء في الخطط السنوية أو المميزة تجميد عضويتهم حتى مرتين في السنة لمدة أقصاها 60 يوماً.'
    }
  }
];

export const run = mutation({
  args: {},
  handler: async (ctx) => {
    // 1. Clear existing data to avoid duplicates
    const existingTrainers = await ctx.db.query("trainers").collect();
    for (const t of existingTrainers) await ctx.db.delete(t._id);
    
    const existingPrograms = await ctx.db.query("programs").collect();
    for (const p of existingPrograms) await ctx.db.delete(p._id);

    const existingPricing = await ctx.db.query("pricing").collect();
    for (const p of existingPricing) await ctx.db.delete(p._id);

    const existingBlog = await ctx.db.query("blog").collect();
    for (const b of existingBlog) await ctx.db.delete(b._id);

    const existingFaq = await ctx.db.query("faq").collect();
    for (const f of existingFaq) await ctx.db.delete(f._id);

    // 2. Insert Trainers
    for (const t of maleTrainers) {
      await ctx.db.insert("trainers", { ...t, mode: "male", category: t.category as any });
    }
    for (const t of femaleTrainers) {
      await ctx.db.insert("trainers", { ...t, mode: "female", category: t.category as any });
    }

    // 3. Insert Programs
    for (const p of malePrograms) {
      await ctx.db.insert("programs", { ...p, mode: "male", intensity: p.intensity as any });
    }
    for (const p of femalePrograms) {
      await ctx.db.insert("programs", { ...p, mode: "female", intensity: p.intensity as any });
    }

    // 4. Insert Pricing
    for (const p of pricingPlans.male) {
      await ctx.db.insert("pricing", { ...p, mode: "male" });
    }
    for (const p of pricingPlans.female) {
      await ctx.db.insert("pricing", { ...p, mode: "female" });
    }

    // 5. Insert Blog
    for (const b of blogPosts.male) {
      await ctx.db.insert("blog", { ...b, mode: "male" });
    }
    for (const b of blogPosts.female) {
      await ctx.db.insert("blog", { ...b, mode: "female" });
    }

    // 6. Insert FAQ (same for both for now, but filtered by mode)
    for (const f of faqs) {
      await ctx.db.insert("faq", { ...f, mode: "male" });
      await ctx.db.insert("faq", { ...f, mode: "female" });
    }

    console.log("Seeding complete!");
  },
});
