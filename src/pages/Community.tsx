import CommunityHeader from '@/components/community/CommunityHeader';
import MasterclassesSection from '@/components/community/MasterClassesSection';
import CommunityVideosSection from '@/components/community/CommunityVideosSection';
import UploadModal from '@/components/community/UploadModal';
import { useUploadModal } from '@/hooks/useUploadModal';
import { useUploadedVideos } from '@/hooks/useUploadedVideos';
import { useLikes } from '@/hooks/useLikes';

export default function Community() {
  const { showUpload, openUpload, closeUpload } = useUploadModal();
  const { uploadedVideos, handleUpload } = useUploadedVideos();
  const { likedVideos, toggleLike } = useLikes();

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <CommunityHeader openUpload={openUpload} />
      <MasterclassesSection />
      <CommunityVideosSection 
        uploadedVideos={uploadedVideos} 
        likedVideos={likedVideos} 
        toggleLike={toggleLike} 
      />
      <UploadModal 
        showUpload={showUpload} 
        closeUpload={closeUpload} 
        handleUpload={handleUpload} 
      />
    </div>
  );
}