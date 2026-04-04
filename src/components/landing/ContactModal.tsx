import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, MessageCircle, Phone } from "lucide-react";

interface Props {
  show: boolean;
  onClose: () => void;
}

export default function ContactModal({ show, onClose }: Props) {
  return (
    // <AnimatePresence>
    //   {show && (
    //     <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
    //       <div className="absolute inset-0 bg-black/60" onClick={onClose} />

    //       <motion.div className="relative bg-[var(--bg-card)] p-10 rounded-3xl">
    //         <button onClick={onClose}><X /></button>

    //         <a href="mailto:hello@pitchcraft.ai">
    //           <Mail /> Email
    //         </a>

    //         <a href="https://wa.me/1234567890">
    //           <MessageCircle /> WhatsApp
    //         </a>

    //         <a href="tel:+1234567890">
    //           <Phone /> Call
    //         </a>
    //       </motion.div>
    //     </div>
    //   )}
    // </AnimatePresence>

     <AnimatePresence>
        {show && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-[var(--bg-card)] border border-[var(--border-strong)] p-10 rounded-3xl shadow-2xl"
            >
              <button onClick={onClose} className="absolute top-6 right-6 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-medium mb-8 uppercase tracking-widest text-center">Get in Touch</h3>
              <div className="space-y-4">
                <a href="mailto:mokuamercyline08@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--bg-base)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-lime-500/20 flex items-center justify-center group-hover:bg-lime-500/40 transition-colors">
                    <Mail className="w-6 h-6 text-lime-600 dark:text-lime-400" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-1">Email Us</div>
                    <div className="font-medium">mokuamercyline08@gmail.com</div>
                  </div>
                </a>
                <a href="https://wa.me/+254739315021" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--bg-base)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/40 transition-colors">
                    <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-1">WhatsApp</div>
                    <div className="font-medium">+254 739 315 021</div>
                  </div>
                </a>
                <a href="tel:+254739315021" className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--bg-base)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/40 transition-colors">
                    <Phone className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-1">Call Us</div>
                    <div className="font-medium">+254 739 315 021</div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
  );
}