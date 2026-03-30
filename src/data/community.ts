import { Masterclass, CommunityVideo } from '@/types/community';

export const masterclasses: Masterclass[] = [
  { id: 1, title: "Steve Jobs: iPhone 2007 Presentation", speaker: "Steve Jobs", views: "12M", url: "https://www.youtube.com/embed/MnrJzXM7a6o" },
  { id: 2, title: "Start with why", speaker: "Simon Sinek", views: "8M", url: "https://www.youtube.com/embed/u4ZoJKF_VuA" },
];

export const communityVideos: CommunityVideo[] = [
  { id: 1, title: "My Series A Pitch Practice", user: "Sarah Jenkins", likes: 124, comments: 18, thumbnail: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/8kYkciD9VjU" },
  { id: 2, title: "Feedback on my intro?", user: "David Chen", likes: 89, comments: 24, thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/i0Q4zPR4G7M" },
  { id: 3, title: "Demo Day Rehearsal", user: "Alex Rivera", likes: 256, comments: 42, thumbnail: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/HAnw168huqA" },
];