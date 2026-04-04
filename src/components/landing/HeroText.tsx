import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, ArrowRight } from "lucide-react";

interface Props {
  setActiveVideo: (video: string) => void;
}

export default function HeroText({ setActiveVideo }: Props) {
  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  return (
    <div className="w-full lg:w-[50%] z-20 flex flex-col justify-center pt-10 lg:pt-0">
     <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[100px] leading-[0.9] font-medium tracking-tight flex flex-col relative pointer-events-none">
              <div className="flex flex-wrap gap-3 md:gap-4">
                {["TURN", "ANY", "PROJECT"].map((word, i) => (
                  <motion.span custom={i} initial="hidden" animate="visible" variants={wordVariants} key={i}>{word}</motion.span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3 md:gap-6 mt-2 md:mt-4">
                <motion.span custom={3} initial="hidden" animate="visible" variants={wordVariants}>INTO A</motion.span>
                <motion.span custom={4} initial="hidden" animate="visible" variants={wordVariants} className="italic-serif text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-green-500">WINNING PITCH</motion.span>
              </div>
              <motion.div custom={5} initial="hidden" animate="visible" variants={wordVariants} className="mt-2 md:mt-4 md:ml-12">IN MINUTES.</motion.div>
            </h1>

      <motion.p
        custom={6}
        initial="hidden"
        animate="visible"
        variants={wordVariants}
        className="mt-8 text-xl md:text-2xl text-[var(--text-muted)] font-light tracking-wide relative z-20 max-w-2xl"
      >
        Understand fast. Speak smart. Win funding.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="flex flex-col sm:flex-row gap-6 mt-12 relative z-20"
      >
        <Link to="/app/dashboard" className="glass-button-primary">
          GET STARTED <ArrowRight className="w-4 h-4" />
        </Link>
        <button
          onClick={() =>
            setActiveVideo(
              "https://www.youtube.com/embed/u4ZoJKF_VuA?autoplay=1",
            )
          }
          className="glass-button group"
        >
          <Play className="w-4 h-4 text-lime-600 dark:text-lime-400 group-hover:text-lime-700 dark:group-hover:text-lime-300 transition-colors" />{" "}
          PLAY SHOWREEL
        </button>
      </motion.div>
    </div>
  );
}
