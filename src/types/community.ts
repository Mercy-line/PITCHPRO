export interface Masterclass {
  id: number;
  title: string;
  speaker: string;
  views: string;
  url: string;
}

export interface CommunityVideo {
  id: number;
  title: string;
  user: string;
  likes: number;
  comments: number;
  thumbnail?: string;
  videoUrl: string;
}