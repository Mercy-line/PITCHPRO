import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X } from 'lucide-react';

interface Props {
  showUpload: boolean;
  closeUpload: () => void;
  handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UploadModal({ showUpload, closeUpload, handleUpload }: Props) {
  return (
    <AnimatePresence>
      {showUpload && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-lg" onClick={closeUpload} />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-[var(--bg-card)] p-10 rounded-3xl border border-[var(--border-strong)] shadow-2xl text-center"
          >
            <button onClick={closeUpload} className="absolute top-6 right-6 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">
              <X className="w-6 h-6" />
            </button>
            
            <div className="w-20 h-20 rounded-full bg-lime-500/10 flex items-center justify-center mx-auto mb-6 border border-lime-500/20">
              <Upload className="w-8 h-8 text-lime-600 dark:text-lime-400" />
            </div>
            
            <h3 className="text-2xl font-medium mb-4 uppercase tracking-widest text-[var(--text-main)]">Upload Video</h3>
            <p className="text-[var(--text-muted)] text-sm font-light mb-8">
              Share your practice session with the community to get constructive feedback.
            </p>
            
            <label className="glass-button-primary w-full cursor-pointer">
              <input type="file" accept="video/*" className="hidden" onChange={handleUpload} />
              SELECT VIDEO FILE
            </label>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}