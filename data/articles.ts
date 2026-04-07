export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  image: string;
  body: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  body: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Hair Loss: Causes and What You Can Do',
    author: 'Hair4Life Clinical Team',
    date: 'April 2, 2026',
    readTime: '8 min read',
    category: 'Education',
    excerpt:
      'A clear look at why thinning happens, how pattern loss progresses, and which clinic-backed options are worth discussing with your doctor.',
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    body: [
      'Hair loss is rarely “just stress.” Genetics, hormones, nutrition, and scalp health all play a role. The first step is an accurate diagnosis—not guessing from photos online.',
      'At Hair4Life Clinic, we map density, miniaturization, and donor reserves before recommending a plan. That might mean medical therapy, in-clinic treatments, or surgery—or a combination.',
      'If you are noticing recession or widening parting, book a private consultation. Early action often preserves more of your native hair for the long term.',
    ],
  },
  {
    id: '2',
    title: 'After Your Procedure: Care Tips for the Best Outcome',
    author: 'Hair4Life Clinical Team',
    date: 'March 20, 2026',
    readTime: '12 min read',
    category: 'Aftercare',
    excerpt:
      'The first weeks after restoration matter. Here is how sleep position, washing, sun exposure, and follow-ups support healing and growth.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173bdb999ef?auto=format&fit=crop&q=80&w=800',
    body: [
      'Follow the written aftercare sheet we provide. Gentle washing protects grafts; scratching or rubbing does not.',
      'Avoid heavy exercise, steam rooms, and direct sun on the scalp until your doctor clears you. Hydration and prescribed medication should be taken on schedule.',
      'Growth is a months-long process. Stay in touch for your review visits so we can adjust care if needed.',
    ],
  },
  {
    id: '3',
    title: 'Confidence After Restoration: One Patient Perspective',
    author: 'Hair4Life Clinical Team',
    date: 'March 5, 2026',
    readTime: '6 min read',
    category: 'Stories',
    excerpt:
      'How a structured treatment plan and realistic expectations helped one patient feel like himself again at work and at home.',
    image:
      'https://images.unsplash.com/photo-1503910368127-b4420c7ff609?auto=format&fit=crop&q=80&w=800',
    body: [
      'Every patient’s story is different. In this case, combining a tailored surgical plan with ongoing scalp care produced a natural hairline and stable density over time.',
      'We focus on honest timelines: you will see change gradually, not overnight. That transparency builds trust.',
      'If you are considering treatment, start with a face-to-face assessment in Ahmedabad so we can match options to your goals.',
    ],
  },
];

export const featuredBlogPost: BlogPost = {
  id: 'featured',
  title: 'Precision in Hair Restoration: Tools, Technique, and Planning',
  author: 'Hair4Life Clinical Team',
  date: 'March 28, 2026',
  readTime: '10 min read',
  category: 'Featured',
  excerpt:
    'How refined extraction, custom hairline design, and strict theatre protocols work together for natural density and predictable recovery.',
  image:
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200',
  body: [
    'Modern restoration is not one device or slogan—it is planning. We study your face shape, age-appropriate hairline, and donor capacity before any surgery day.',
    'Stereo magnification, controlled graft handling, and experienced technicians reduce transection and support graft survival.',
    'Our team trains continuously and keeps equipment theatre-standard. If you want to understand what would suit you, schedule a consultation at our Paldi clinic.',
  ],
};

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Hair4Life Clinic Recognized for Excellence in Patient Care',
    date: 'March 15, 2026',
    category: 'Award',
    excerpt:
      'We are grateful for recognition that reflects our focus on ethical counselling, clear consent, and consistent surgical standards.',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    body: [
      'This acknowledgment belongs to our entire team—from front desk to theatre—and to every patient who trusted us with their care.',
      'We will continue to invest in training, hygiene, and honest communication rather than unrealistic promises.',
      'Thank you for choosing Hair4Life Clinic in Ahmedabad.',
    ],
  },
  {
    id: '2',
    title: 'Latest Laser Therapy System Now Available',
    date: 'February 28, 2026',
    category: 'Technology',
    excerpt:
      'Our clinic has added an updated low-level laser platform for eligible patients as part of a broader medical hair-loss plan.',
    image:
      'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&q=80&w=800',
    body: [
      'Laser therapy can support certain types of thinning when used under supervision—not as a standalone miracle fix.',
      'During consultation we will tell you if you are a suitable candidate and how it fits with other treatments.',
      'Ask our coordinators about scheduling and what to expect from a full course.',
    ],
  },
  {
    id: '3',
    title: 'Expanded Hours and Consultation Slots in Ahmedabad',
    date: 'January 15, 2026',
    category: 'Clinic',
    excerpt:
      'To serve working patients better, we have opened additional weekday consultation slots at our Paldi location.',
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    body: [
      'Use the contact form or WhatsApp to request a time. We will confirm by phone or email.',
      'First visits include a scalp assessment and discussion of realistic outcomes—no pressure to decide on the spot.',
      'We look forward to meeting you at Mahavir Tower, Paldi Road.',
    ],
  },
];
