import { useState } from 'react';

export const useLikes = () => {
  const [likedVideos, setLikedVideos] = useState<Set<number>>(new Set());

  const toggleLike = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setLikedVideos(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return { likedVideos, toggleLike };
};