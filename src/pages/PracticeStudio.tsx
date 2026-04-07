import { AnimatePresence } from 'framer-motion';
import { usePracticeStudio } from '../hooks/usePracticeStudio';
import { proTips } from '../data/practice';

// Components
import PracticeHeader from '../components/practice/PracticeHeader';
import VideoPreview from '../components/practice/VideoPreview';
import PracticeControls from '../components/practice/PracticeControls';
import SuccessMessage from '../components/practice/SuccessMessage';
import ProTipsSidebar from '../components/practice/ProTipsSidebar';

export default function PracticeStudio() {
  const {
    isRecording,
    videoUrl,
    timeElapsed,
    isSent,
    videoRef,
    startRecording,
    stopRecording,
    handleSend,
    handleRetake,
    formatTime
  } = usePracticeStudio();

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20">
      <PracticeHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <VideoPreview 
            videoRef={videoRef}
            videoUrl={videoUrl}
            isRecording={isRecording}
            timeElapsed={timeElapsed}
            formatTime={formatTime}
          />

          <PracticeControls 
            isRecording={isRecording}
            videoUrl={videoUrl}
            isSent={isSent}
            onStartRecording={startRecording}
            onStopRecording={stopRecording}
            onRetake={handleRetake}
            onSend={handleSend}
          />

          <AnimatePresence>
            {isSent && <SuccessMessage />}
          </AnimatePresence>
        </div>

        <div className="space-y-6">
          <ProTipsSidebar tips={proTips} />
        </div>
      </div>
    </div>
  );
}
