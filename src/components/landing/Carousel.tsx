import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import { carouselItems } from "@/data/CarouselData";

interface Props {
  currentIdx: number;
  setActiveVideo: (video: string) => void;
}

export default function Carousel({ currentIdx, setActiveVideo }: Props) {
  return (
    <div className="w-full lg:w-[50%] flex items-center justify-center lg:justify-end z-10 mt-16 lg:mt-0 relative">
      <div
        className="relative w-full max-w-[350px] h-[400px] md:max-w-[500px] md:h-[550px] lg:max-w-[600px] lg:h-[650px] xl:max-w-[700px] xl:h-[700px] overflow-hidden rounded-[2.5rem] shadow-2xl shadow-lime-500/10 border border-[var(--border-strong)] cursor-pointer group z-20"
        onClick={() => setActiveVideo(carouselItems[currentIdx].video)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIdx}
            src={carouselItems[currentIdx].image}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-lime-500/90 backdrop-blur-md text-zinc-900 px-6 py-4 rounded-full text-sm font-bold tracking-widest uppercase shadow-lg shadow-lime-500/30 flex items-center gap-3 transform group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 fill-current" />
            Play Video
          </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-30">
          {carouselItems.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentIdx ? "w-8 bg-lime-500" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}