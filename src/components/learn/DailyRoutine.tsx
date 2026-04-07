import { Activity, CheckCircle2 } from 'lucide-react';
import { Exercise } from '../../types/learn';

interface DailyRoutineProps {
  exercises: Exercise[];
  completedExercises: Set<number>;
  onToggleExercise: (id: number) => void;
}

export default function DailyRoutine({
  exercises,
  completedExercises,
  onToggleExercise
}: DailyRoutineProps) {
  const isAllDone = completedExercises.size === exercises.length;

  return (
    <div className="glass-panel p-8 sticky top-8">
      <h2 className="text-xl font-medium mb-6 uppercase tracking-widest flex items-center gap-3 text-[var(--text-main)]">
        <Activity className="w-5 h-5 text-yellow-600 dark:text-yellow-500" />
        Daily Routine
      </h2>
      
      <div className={`mb-8 p-4 rounded-2xl border ${isAllDone ? 'bg-lime-500/10 border-lime-500/20' : 'bg-yellow-500/10 border-yellow-500/20'}`}>
        <p className={`${isAllDone ? 'text-lime-600 dark:text-lime-500' : 'text-yellow-600 dark:text-yellow-500'} text-sm font-medium uppercase tracking-widest mb-1`}>
          {isAllDone ? 'All Done!' : 'Reminder'}
        </p>
        <p className="text-[var(--text-muted)] text-sm font-light">
          {isAllDone 
            ? "Great job! You've completed all your speaking exercises for today." 
            : "You haven't completed your speaking exercises today. Consistency is key!"}
        </p>
      </div>

      <div className="space-y-4">
        {exercises.map(ex => {
          const isDone = completedExercises.has(ex.id);
          return (
            <div 
              key={ex.id} 
              onClick={() => onToggleExercise(ex.id)}
              className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--bg-base)] hover:bg-[var(--border-subtle)] transition-colors border border-[var(--border-subtle)] cursor-pointer"
            >
              <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-colors ${isDone ? 'bg-lime-500 border-lime-500 text-white' : 'border-[var(--border-strong)] text-transparent'}`}>
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className={`text-sm font-medium transition-colors ${isDone ? 'text-[var(--text-muted)] line-through' : 'text-[var(--text-main)]'}`}>
                {ex.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
