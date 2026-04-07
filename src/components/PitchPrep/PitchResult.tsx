import { CheckCircle2, ArrowLeft } from 'lucide-react';
import Markdown from 'react-markdown';

interface PitchResultProps {
  result: string;
  onReset: () => void;
}

export default function PitchResult({ result, onReset }: PitchResultProps) {
  return (
    <div className="space-y-8">
      <div className="glass-panel p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-xl font-medium text-[var(--text-main)] flex items-center gap-3 uppercase tracking-widest">
          <CheckCircle2 className="w-6 h-6 text-teal-600 dark:text-teal-400" />
          YOUR PITCH STRATEGY
        </h2>
        <button 
          onClick={onReset}
          className="glass-button py-3 px-6 text-[10px]"
        >
          <ArrowLeft className="w-4 h-4" />
          START NEW PITCH
        </button>
      </div>

      <div className="glass-panel p-8 md:p-12">
        <div className="markdown-body">
          <Markdown>{result}</Markdown>
        </div>
      </div>
    </div>
  );
}
