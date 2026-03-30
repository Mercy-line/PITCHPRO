// import { useState } from 'react';
// import { CommunityVideo } from '../types';

// export const useCommunity = () => {
//   const [showUpload, setShowUpload] = useState(false);
//   const [uploadedVideos, setUploadedVideos] = useState<CommunityVideo[]>([]);
//   const [likedVideos, setLikedVideos] = useState<Set<number>>(new Set());

//   const toggleLike = (e: React.MouseEvent, id: number) => {
//     e.stopPropagation();
//     setLikedVideos(prev => {
//       const next = new Set(prev);
//       if (next.has(id)) next.delete(id);
//       else next.add(id);
//       return next;
//     });
//   };

//   const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const url = URL.createObjectURL(file);
//       setUploadedVideos(prev => [{
//         id: Date.now(),
//         title: file.name,
//         user: "You",
//         likes: 0,
//         comments: 0,
//         videoUrl: url
//       }, ...prev]);
//       setShowUpload(false);
//     }
//   };

//   return {
//     showUpload,
//     setShowUpload,
//     uploadedVideos,
//     likedVideos,
//     toggleLike,
//     handleUpload,
//   };
// };


import { useUploadModal } from './useUploadModal';
import { useUploadedVideos } from './useUploadedVideos';
import { useLikes } from './useLikes';

export const useCommunity = () => {
  const uploadModal = useUploadModal();
  const uploadedVideos = useUploadedVideos();
  const likes = useLikes();

  return {
    ...uploadModal,
    ...uploadedVideos,
    ...likes,
  };
};