import { Activity, Gamepad2 } from 'lucide-react';
import { Book, Game, Exercise } from '../types/learn';

export const books: Book[] = [
  { 
    id: 1, 
    title: "Talk Like TED", 
    author: "Carmine Gallo", 
    read: true, 
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop",
    content: [
      "Ideas are the currency of the twenty-first century. In order to succeed, you need to be able to sell your ideas persuasively. This skill is the single greatest skill that will help you accomplish your dreams.",
      "The most engaging presentations are emotional, novel, and memorable. Carmine Gallo breaks down hundreds of TED talks to find the common denominators of the most successful ones.",
      "**1. Unleash the Master Within:** Passion is the key to mastering your subject. You cannot inspire others unless you are inspired yourself.",
      "**2. Master the Art of Storytelling:** Stories are just data with a soul. They connect us, inspire us, and make us human. Use personal stories to build trust and connection.",
      "**3. Have a Conversation:** Practice relentlessly so you can deliver your presentation as comfortably as having a conversation with a close friend.",
      "**4. Teach Me Something New:** The human brain loves novelty. An unfamiliar, unusual, or unexpected element in a presentation intrigues the audience and jars them out of their preconceived notions.",
      "**5. Deliver Jaw-Dropping Moments:** Create a moment that is so shocking, impressive, or surprising that it grabs the audience's attention and is remembered long after the presentation is over."
    ],
    quote: "The most important thing in communication is hearing what isn't said."
  },
  { 
    id: 2, 
    title: "Confessions of a Public Speaker", 
    author: "Scott Berkun", 
    read: false, 
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&auto=format&fit=crop",
    content: [
      "Public speaking is not about perfection; it's about connection. Scott Berkun provides a highly practical, often hilarious look at what it takes to survive and thrive on stage.",
      "**1. The Myth of the Natural:** Nobody is born a great speaker. It takes practice, preparation, and a willingness to fail.",
      "**2. The Importance of Preparation:** The best speakers spend hours preparing for every minute they are on stage. Know your material inside and out.",
      "**3. Handling Mistakes:** Mistakes happen. The key is how you recover. Acknowledge the mistake, make a joke if appropriate, and move on.",
      "**4. Engaging the Audience:** Don't just talk at your audience; talk with them. Ask questions, use eye contact, and encourage participation.",
      "**5. The Power of Authenticity:** Be yourself. Audiences can spot a fake from a mile away. Share your true thoughts and feelings."
    ],
    quote: "The only thing worse than a speaker who doesn't know what they're talking about is a speaker who does, but can't explain it."
  },
  { 
    id: 3, 
    title: "Steal the Show", 
    author: "Michael Port", 
    read: false, 
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&auto=format&fit=crop",
    content: [
      "Every interaction is a performance. Michael Port teaches you how to use acting techniques to succeed in any situation, from a job interview to a keynote address.",
      "**1. Find Your Voice:** Don't try to be someone else. Discover your unique voice and use it to connect with your audience.",
      "**2. Play the Right Role:** Adapt your performance to the situation. Are you the expert, the facilitator, or the entertainer?",
      "**3. Use Your Body:** Your body language speaks volumes. Use gestures, posture, and movement to enhance your message.",
      "**4. Connect Emotionally:** People make decisions based on emotion, not logic. Appeal to your audience's feelings to persuade them.",
      "**5. Rehearse, Rehearse, Rehearse:** The more you practice, the more natural you will appear. Rehearse until you can deliver your performance flawlessly."
    ],
    quote: "The goal is not to be perfect, but to be present."
  },
];

export const games: Game[] = [
  { id: 1, title: "Power Posing Timer", desc: "Hold a power pose for 2 minutes to boost confidence.", icon: Activity, color: "text-lime-600 dark:text-lime-400", bg: "bg-lime-500/10" },
  { id: 2, title: "Tongue Twister Challenge", desc: "Warm up your articulation with rapid-fire phrases.", icon: Gamepad2, color: "text-green-600 dark:text-green-400", bg: "bg-green-500/10" },
];

export const tongueTwisters = [
  "Peter Piper picked a peck of pickled peppers.",
  "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
  "She sells seashells by the seashore.",
  "Unique New York, unique New York, you know you need unique New York.",
  "Red lorry, yellow lorry, red lorry, yellow lorry."
];

export const exercises: Exercise[] = [
  { id: 1, title: "Vocal Warmup (5 mins)", done: true },
  { id: 2, title: "Mirror Practice (10 mins)", done: false },
  { id: 3, title: "Breathing Exercise (3 mins)", done: false },
];
