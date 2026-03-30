import { useState } from 'react';

export const useUploadModal = () => {
  const [showUpload, setShowUpload] = useState(false);

  const openUpload = () => setShowUpload(true);
  const closeUpload = () => setShowUpload(false);

  return { showUpload, openUpload, closeUpload };
};