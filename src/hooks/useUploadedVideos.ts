import { useState } from 'react';
import { CommunityVideo } from '@/types/community';

export const useUploadedVideos = () => {
  const [uploadedVideos, setUploadedVideos] = useState<CommunityVideo[]>([]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const newVideo: CommunityVideo = {
        id: Date.now(),
        title: file.name,
        user: "You",
        likes: 0,
        comments: 0,
        videoUrl: url,
      };
      setUploadedVideos(prev => [newVideo, ...prev]);
    }
  };

  return { uploadedVideos, handleUpload, setUploadedVideos };
};