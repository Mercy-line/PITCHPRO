import { BookOpen, Gamepad2 } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { useLearn } from '../hooks/useLearn';
import { books, games, exercises } from '../data/learn';

// Components
import LearnHeader from '../components/learn/LearnHeader';
import BookCard from '../components/learn/BookCard';
import GameCard from '../components/learn/GameCard';
import DailyRoutine from '../components/learn/DailyRoutine';
import BookReaderModal from '../components/learn/BookReaderModal';
import GameModal from '../components/learn/GameModal';

export default function Learn() {
  const {
    selectedBook,
    setSelectedBook,
    selectedGame,
    setSelectedGame,
    bookmarkedBooks,
    toggleBookmark,
    readBooks,
    toggleReadStatus,
    highlightedText,
    isHighlightMode,
    setIsHighlightMode,
    completedExercises,
    toggleExercise,
    timer,
    timerActive,
    setTimerActive,
    resetTimer,
    formatTime,
    twisterIndex,
    nextTwister,
    handleTextSelection,
    downloadPDF
  } = useLearn();

  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-20">
      <LearnHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Books Section */}
          <section>
            <h2 className="text-xl font-medium mb-6 uppercase tracking-widest flex items-center gap-3 text-[var(--text-main)]">
              <BookOpen className="w-5 h-5 text-lime-600 dark:text-lime-400" />
              Recommended Reading
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {books.map(book => (
                <BookCard 
                  key={book.id}
                  book={book}
                  onSelect={setSelectedBook}
                  isBookmarked={bookmarkedBooks.has(book.id)}
                  onToggleBookmark={toggleBookmark}
                  isRead={readBooks.has(book.id)}
                  onToggleRead={toggleReadStatus}
                  onDownload={downloadPDF}
                />
              ))}
            </div>
          </section>

          {/* Games Section */}
          <section>
            <h2 className="text-xl font-medium mb-6 uppercase tracking-widest flex items-center gap-3 text-[var(--text-main)]">
              <Gamepad2 className="w-5 h-5 text-green-600 dark:text-green-400" />
              Interactive Games
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {games.map(game => (
                <GameCard 
                  key={game.id}
                  game={game}
                  onSelect={setSelectedGame}
                />
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <DailyRoutine 
            exercises={exercises}
            completedExercises={completedExercises}
            onToggleExercise={toggleExercise}
          />
        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {selectedBook && (
          <BookReaderModal 
            book={selectedBook}
            onClose={() => { setSelectedBook(null); setIsHighlightMode(false); }}
            isHighlightMode={isHighlightMode}
            onToggleHighlightMode={() => setIsHighlightMode(!isHighlightMode)}
            isBookmarked={bookmarkedBooks.has(selectedBook.id)}
            onToggleBookmark={toggleBookmark}
            onDownload={downloadPDF}
            onTextSelection={handleTextSelection}
            highlightedText={highlightedText[selectedBook.id] || []}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedGame && (
          <GameModal 
            game={selectedGame}
            onClose={() => { setSelectedGame(null); setTimerActive(false); }}
            timer={timer}
            timerActive={timerActive}
            onToggleTimer={() => setTimerActive(!timerActive)}
            onResetTimer={resetTimer}
            formatTime={formatTime}
            twisterIndex={twisterIndex}
            onNextTwister={nextTwister}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
