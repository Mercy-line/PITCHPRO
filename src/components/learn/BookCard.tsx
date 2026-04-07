import { CheckCircle2, ChevronRight, Bookmark, Download } from 'lucide-react';
import { Book } from '../../types/learn';

interface BookCardProps {
  book: Book;
  onSelect: (book: Book) => void;
  isBookmarked: boolean;
  onToggleBookmark: (e: React.MouseEvent, id: number) => void;
  isRead: boolean;
  onToggleRead: (e: React.MouseEvent, id: number) => void;
  onDownload: (e: React.MouseEvent, book: Book) => void;
}

export default function BookCard({
  book,
  onSelect,
  isBookmarked,
  onToggleBookmark,
  isRead,
  onToggleRead,
  onDownload
}: BookCardProps) {
  return (
    <div 
      onClick={() => onSelect(book)}
      className="glass-card p-6 flex gap-6 cursor-pointer group"
    >
      <div className="w-24 h-32 rounded-xl overflow-hidden shrink-0 shadow-lg border border-[var(--border-strong)]">
        <img src={book.cover} alt={book.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="flex flex-col justify-center flex-1">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-medium text-[var(--text-main)] leading-tight">{book.title}</h3>
          <button 
            onClick={(e) => onToggleBookmark(e, book.id)}
            className={`p-1.5 rounded-full transition-colors ${isBookmarked ? 'text-lime-500 bg-lime-500/10' : 'text-[var(--text-muted)] hover:bg-[var(--border-subtle)]'}`}
          >
            <Bookmark className="w-4 h-4" fill={isBookmarked ? "currentColor" : "none"} />
          </button>
        </div>
        <p className="text-[var(--text-muted)] text-sm font-light mb-4">{book.author}</p>
        <div className="flex items-center justify-between mt-auto">
          <button 
            onClick={(e) => onToggleRead(e, book.id)}
            className={`inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest transition-colors ${isRead ? 'text-teal-600 dark:text-teal-400' : 'text-lime-600 dark:text-lime-400 hover:text-lime-700 dark:hover:text-lime-300'}`}
          >
            {isRead ? (
              <><CheckCircle2 className="w-4 h-4" /> Read</>
            ) : (
              <>Start Reading <ChevronRight className="w-4 h-4" /></>
            )}
          </button>
          <button 
            onClick={(e) => onDownload(e, book)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] uppercase tracking-widest transition-colors"
            title="Download PDF"
          >
            <Download className="w-4 h-4" /> PDF
          </button>
        </div>
      </div>
    </div>
  );
}
