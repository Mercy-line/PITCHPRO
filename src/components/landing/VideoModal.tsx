import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  video: string | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: Props) {
  return (
    // <AnimatePresence>
    //   {video && (
    //     <div className="fixed inset-0 z-[110] flex items-center justify-center">
    //       <div className="absolute inset-0 bg-black/90" onClick={onClose} />

    //       <motion.div className="relative w-full max-w-6xl aspect-video">
    //         <button onClick={onClose}><X /></button>

    //         <iframe src={video} className="w-full h-full" />
    //       </motion.div>
    //     </div>
    //   )}
    // </AnimatePresence>

    <AnimatePresence>
        {video && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-12">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose} />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden border border-[var(--border-strong)] shadow-2xl flex items-center justify-center"
            >
              <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-12 h-12 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-md border border-white/10">
                <X className="w-6 h-6" />
              </button>
              <iframe 
                src={video} 
                title="Video Player"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
  );
}