import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  video: string | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: Props) {
  return (
    <AnimatePresence>
      {video && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/90" onClick={onClose} />

          <motion.div className="relative w-full max-w-6xl aspect-video">
            <button onClick={onClose}><X /></button>

            <iframe src={video} className="w-full h-full" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}