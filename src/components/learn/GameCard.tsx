import { Game } from '../../types/learn';

interface GameCardProps {
  game: Game;
  onSelect: (game: Game) => void;
}

export default function GameCard({ game, onSelect }: GameCardProps) {
  return (
    <div 
      onClick={() => onSelect(game)}
      className="glass-card p-8 group cursor-pointer"
    >
      <div className={`w-12 h-12 rounded-2xl ${game.bg} flex items-center justify-center mb-6 border border-[var(--border-subtle)]`}>
        <game.icon className={`w-6 h-6 ${game.color}`} />
      </div>
      <h3 className="font-medium text-[var(--text-main)] mb-2 uppercase tracking-widest text-sm">{game.title}</h3>
      <p className="text-[var(--text-muted)] text-sm font-light leading-relaxed">{game.desc}</p>
    </div>
  );
}
