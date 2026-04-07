import { Mic, Square, RefreshCw, Send } from 'lucide-react';

interface PracticeControlsProps {
  isRecording: boolean;
  videoUrl: string | null;
  isSent: boolean;
  onStartRecording: () => void;
  onStopRecording: () => void;
  onRetake: () => void;
  onSend: () => void;
}

export default function PracticeControls({
  isRecording,
  videoUrl,
  isSent,
  onStartRecording,
  onStopRecording,
  onRetake,
  onSend
}: PracticeControlsProps) {
  return (
    <div className="flex justify-center gap-4">
      {!isRecording && !videoUrl && (
        <button 
          onClick={onStartRecording}
          className="glass-button-primary !bg-gradient-to-r !from-red-500 !to-rose-600 !text-white !shadow-red-500/25"
        >
          <Mic className="w-5 h-5" />
          START RECORDING
        </button>
      )}

      {isRecording && (
        <button 
          onClick={onStopRecording}
          className="glass-button hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/30"
        >
          <Square className="w-5 h-5" />
          STOP RECORDING
        </button>
      )}

      {videoUrl && !isSent && (
        <>
          <button 
            onClick={onRetake}
            className="glass-button"
          >
            <RefreshCw className="w-5 h-5" />
            RETAKE
          </button>
          <button 
            onClick={onSend}
            className="glass-button-primary"
          >
            <Send className="w-5 h-5" />
            SEND PITCH
          </button>
        </>
      )}
    </div>
  );
}
