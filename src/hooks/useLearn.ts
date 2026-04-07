import { useState, useEffect, useCallback } from 'react';
import { jsPDF } from 'jspdf';
import { Book, Exercise, Game } from '../types/learn';
import { books, exercises, tongueTwisters } from '../data/learn';

export const useLearn = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  
  // Book States
  const [bookmarkedBooks, setBookmarkedBooks] = useState<Set<number>>(new Set());
  const [readBooks, setReadBooks] = useState<Set<number>>(new Set(books.filter(b => b.read).map(b => b.id)));
  const [highlightedText, setHighlightedText] = useState<{ [bookId: number]: string[] }>({});
  const [isHighlightMode, setIsHighlightMode] = useState(false);

  // Exercise States
  const [completedExercises, setCompletedExercises] = useState<Set<number>>(new Set(exercises.filter(e => e.done).map(e => e.id)));

  // Game States
  const [timer, setTimer] = useState(120);
  const [timerActive, setTimerActive] = useState(false);
  const [twisterIndex, setTwisterIndex] = useState(0);

  useEffect(() => {
    let interval: any = null;
    if (timerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer(timer => timer - 1);
      }, 1000);
    } else if (timer === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, timer]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const resetTimer = useCallback(() => {
    setTimerActive(false);
    setTimer(120);
  }, []);

  const nextTwister = useCallback(() => {
    setTwisterIndex((prev) => (prev + 1) % tongueTwisters.length);
  }, []);

  const toggleBookmark = useCallback((e: React.MouseEvent, bookId: number) => {
    e.stopPropagation();
    setBookmarkedBooks(prev => {
      const next = new Set(prev);
      if (next.has(bookId)) next.delete(bookId);
      else next.add(bookId);
      return next;
    });
  }, []);

  const toggleReadStatus = useCallback((e: React.MouseEvent, bookId: number) => {
    e.stopPropagation();
    setReadBooks(prev => {
      const next = new Set(prev);
      if (next.has(bookId)) next.delete(bookId);
      else next.add(bookId);
      return next;
    });
  }, []);

  const toggleExercise = useCallback((id: number) => {
    setCompletedExercises(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const handleTextSelection = useCallback(() => {
    if (!isHighlightMode || !selectedBook) return;
    
    const selection = window.getSelection();
    const text = selection?.toString().trim();
    
    if (text) {
      setHighlightedText(prev => ({
        ...prev,
        [selectedBook.id]: [...(prev[selectedBook.id] || []), text]
      }));
      selection?.removeAllRanges();
    }
  }, [isHighlightMode, selectedBook]);

  const downloadPDF = useCallback((e: React.MouseEvent, book: Book) => {
    e.stopPropagation();
    const doc = new jsPDF();
    
    doc.setFontSize(22);
    doc.text(book.title, 20, 20);
    
    doc.setFontSize(14);
    doc.text(`By ${book.author}`, 20, 30);
    
    doc.setFontSize(12);
    let yPos = 50;
    
    book.content.forEach((paragraph: string) => {
      const text = paragraph.replace(/\*\*/g, '');
      const lines = doc.splitTextToSize(text, 170);
      
      if (yPos + (lines.length * 7) > 280) {
        doc.addPage();
        yPos = 20;
      }
      
      doc.text(lines, 20, yPos);
      yPos += (lines.length * 7) + 5;
    });
    
    doc.save(`${book.title.replace(/\s+/g, '_')}.pdf`);
  }, []);

  return {
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
  };
};
