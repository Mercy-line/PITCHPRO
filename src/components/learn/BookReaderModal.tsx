import { motion } from 'framer-motion';
import { X, Bookmark, Download, Highlighter } from 'lucide-react';
import { Book } from '../../types/learn';

interface BookReaderModalProps {
  book: Book;
  onClose: () => void;
  isHighlightMode: boolean;
  onToggleHighlightMode: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (e: React.MouseEvent, id: number) => void;
  onDownload: (e: React.MouseEvent, book: Book) => void;
  onTextSelection: () => void;
  highlightedText: string[];
}

export default function BookReaderModal({
  book,
  onClose,
  isHighlightMode,
  onToggleHighlightMode,
  isBookmarked,
  onToggleBookmark,
  onDownload,
  onTextSelection,
  highlightedText
}: BookReaderModalProps) {
  
  const renderContentWithHighlights = (text: string) => {
    if (!highlightedText || highlightedText.length === 0) return text;

    let result = text;
    highlightedText.forEach(highlight => {
      if (result.includes(highlight)) {
        const parts = result.split(highlight);
        result = parts.join(`<mark class="bg-lime-200 dark:bg-lime-900/50 text-inherit rounded px-1">${highlight}</mark>`);
      }
    });

    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-lg" onClick={onClose} />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl h-[80vh] bg-[var(--bg-card)] rounded-3xl overflow-hidden flex flex-col border border-[var(--border-strong)] shadow-2xl"
      >
        <div className="flex items-center justify-between p-6 border-b border-[var(--border-strong)] bg-[var(--bg-panel)]">
          <div className="flex items-center gap-4">
            <div className="w-10 h-14 rounded overflow-hidden shrink-0">
              <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-medium text-[var(--text-main)]">{book.title}</h3>
              <p className="text-[var(--text-muted)] text-xs uppercase tracking-widest">{book.author}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={(e) => { e.stopPropagation(); onToggleHighlightMode(); }}
              className={`p-2 rounded-full transition-colors ${isHighlightMode ? 'text-lime-500 bg-lime-500/10' : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)]'}`} 
              title={isHighlightMode ? "Highlighting Active" : "Enable Highlighting"}
            >
              <Highlighter className="w-5 h-5" />
            </button>
            <button 
              onClick={(e) => onToggleBookmark(e, book.id)}
              className={`p-2 rounded-full transition-colors ${isBookmarked ? 'text-lime-500 bg-lime-500/10' : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)]'}`} 
              title="Bookmark"
            >
              <Bookmark className="w-5 h-5" fill={isBookmarked ? "currentColor" : "none"} />
            </button>
            <button 
              onClick={(e) => onDownload(e, book)}
              className="p-2 text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] rounded-full transition-colors" 
              title="Download PDF"
            >
              <Download className="w-5 h-5" />
            </button>
            <button onClick={onClose} className="w-10 h-10 bg-[var(--border-subtle)] hover:bg-[var(--border-strong)] rounded-full flex items-center justify-center text-[var(--text-main)] transition-colors ml-2 sm:ml-4">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div 
          className={`flex-1 overflow-y-auto p-8 sm:p-16 ${isHighlightMode ? 'cursor-text selection:bg-lime-200/50 dark:selection:bg-lime-500/30' : ''}`}
          onMouseUp={onTextSelection}
        >
          <div className="max-w-2xl mx-auto prose prose-p:font-serif prose-p:text-lg prose-p:leading-relaxed prose-p:text-[var(--text-main)]">
            <h1 className="text-3xl font-serif mb-8 text-[var(--text-main)]">{book.title}</h1>
            
            {book.content.map((paragraph: string, index: number) => {
              if (paragraph.startsWith('**')) {
                return (
                  <p key={index} className="font-medium text-lime-600 dark:text-lime-400 mt-8">
                    {renderContentWithHighlights(paragraph.replace(/\*\*/g, ''))}
                  </p>
                );
              }
              return <p key={index}>{renderContentWithHighlights(paragraph)}</p>;
            })}

            <div className="my-12 p-6 border-l-2 border-lime-500 bg-lime-500/5 rounded-r-2xl">
              <p className="italic text-[var(--text-muted)] m-0">"{book.quote}"</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
