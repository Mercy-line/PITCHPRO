import { Camera } from 'lucide-react';

interface VideoPreviewProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  videoUrl: string | null;
  isRecording: boolean;
  timeElapsed: number;
  formatTime: (seconds: number) => string;
}

export default function VideoPreview({
  videoRef,
  videoUrl,
  isRecording,
  timeElapsed,
  formatTime
}: VideoPreviewProps) {
  return (
    <div className="glass-panel p-4 aspect-video relative overflow-hidden flex items-center justify-center">
      {!videoUrl && (
        <video 
          ref={videoRef} 
          autoPlay 
          muted 
          playsInline 
          className={`w-full h-full object-cover rounded-2xl ${!isRecording ? 'hidden' : ''}`}
        />
      )}
      
      {!isRecording && !videoUrl && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--text-muted)] bg-[var(--bg-base)]">
          <Camera className="w-16 h-16 mb-4 opacity-50" />
          <p className="uppercase tracking-widest text-sm font-medium">Camera is off</p>
          <p className="text-xs mt-2 opacity-50">Click "Start Recording" to turn on</p>
        </div>
      )}

      {videoUrl && (
        <video 
          src={videoUrl} 
          controls 
          className="w-full h-full object-cover rounded-2xl"
        />
      )}

      {isRecording && (
        <div className="absolute top-8 right-8 flex items-center gap-3 bg-red-500/10 text-red-500 px-4 py-2 rounded-full backdrop-blur-md border border-red-500/20">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
          <span className="font-mono text-sm tracking-widest">{formatTime(timeElapsed)}</span>
        </div>
      )}
    </div>
  );
}
