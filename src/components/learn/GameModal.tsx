import { motion } from 'framer-motion';
import { X, RotateCcw, ChevronRight } from 'lucide-react';
import { Game } from '../../types/learn';
import { tongueTwisters } from '../../data/learn';

interface GameModalProps {
  game: Game;
  onClose: () => void;
  timer: number;
  timerActive: boolean;
  onToggleTimer: () => void;
  onResetTimer: () => void;
  formatTime: (seconds: number) => string;
  twisterIndex: number;
  onNextTwister: () => void;
}

export default function GameModal({
  game,
  onClose,
  timer,
  timerActive,
  onToggleTimer,
  onResetTimer,
  formatTime,
  twisterIndex,
  onNextTwister
}: GameModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-lg" onClick={onClose} />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl bg-[var(--bg-card)] rounded-3xl overflow-hidden flex flex-col border border-[var(--border-strong)] shadow-2xl p-8 sm:p-12 text-center"
      >
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 w-10 h-10 bg-[var(--border-subtle)] hover:bg-[var(--border-strong)] rounded-full flex items-center justify-center text-[var(--text-main)] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className={`w-20 h-20 mx-auto rounded-3xl ${game.bg} flex items-center justify-center mb-8 border border-[var(--border-subtle)]`}>
          <game.icon className={`w-10 h-10 ${game.color}`} />
        </div>
        
        <h2 className="text-3xl font-medium text-[var(--text-main)] mb-4">{game.title}</h2>
        <p className="text-[var(--text-muted)] text-lg mb-12">{game.desc}</p>

        {game.id === 1 && (
          <div className="space-y-8">
            <div className="text-7xl font-mono font-light tracking-tighter text-[var(--text-main)]">
              {formatTime(timer)}
            </div>
            <div className="flex justify-center gap-4">
              <button 
                onClick={onToggleTimer}
                className="glass-button-primary px-8 py-4 text-sm"
              >
                {timerActive ? 'PAUSE' : timer === 120 ? 'START TIMER' : 'RESUME'}
              </button>
              <button 
                onClick={onResetTimer}
                className="glass-button px-6 py-4"
                title="Reset"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {game.id === 2 && (
          <div className="space-y-8">
            <div className="p-8 bg-[var(--bg-panel)] rounded-2xl border border-[var(--border-subtle)] min-h-[160px] flex items-center justify-center">
              <p className="text-2xl font-medium text-[var(--text-main)] leading-relaxed">
                "{tongueTwisters[twisterIndex]}"
              </p>
            </div>
            <button 
              onClick={onNextTwister}
              className="glass-button-primary px-8 py-4 text-sm w-full sm:w-auto"
            >
              NEXT PHRASE <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
