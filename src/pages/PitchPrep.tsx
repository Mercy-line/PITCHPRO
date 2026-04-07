import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePitchGenerator } from '../hooks/usePitchGenerator';
import { useTheme } from '../hooks/useTheme';
import Header from '../components/PitchPrep/Header';
import PitchForm from '../components/PitchPrep/PitchForm';
import PitchResult from '../components/PitchPrep/PitchResult';
import Navbar from '@/components/landing/Navbar';
import ContactModal from '@/components/landing/ContactModal';

export default function PitchPrep() {
  const [showContact, setShowContact] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const {
    docs,
    setDocs,
    audience,
    setAudience,
    loading,
    result,
    handleGenerate,
    reset
  } = usePitchGenerator();

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-main)] flex flex-col relative overflow-hidden font-sans selection:bg-lime-500 selection:text-zinc-900 transition-colors duration-300">
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        onContact={() => setShowContact(true)}
      />

      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Header />

          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div 
                key="form"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <PitchForm 
                  audience={audience}
                  setAudience={setAudience}
                  docs={docs}
                  setDocs={setDocs}
                  loading={loading}
                  handleGenerate={handleGenerate}
                />
              </motion.div>
            ) : (
              <motion.div 
                key="result"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-8"
              >
                <PitchResult 
                  result={result}
                  onReset={reset}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <ContactModal
        show={showContact}
        onClose={() => setShowContact(false)}
      />
    </div>
  );
}

