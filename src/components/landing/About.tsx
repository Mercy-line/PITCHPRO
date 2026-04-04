import { motion } from "framer-motion";
import { Sparkles, Target, Users } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 px-6 md:px-12 py-24 bg-[var(--bg-panel)] rounded-t-[3rem] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-[var(--border-strong)] shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop"
              alt="Speaker pitching"
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-panel)] via-[var(--bg-panel)]/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
              <div className="bg-[var(--bg-card)]/90 backdrop-blur-xl border border-[var(--border-strong)] p-6 md:p-8 rounded-3xl shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-lime-500/20 flex items-center justify-center border border-lime-500/30">
                    <Sparkles className="w-6 h-6 text-lime-600 dark:text-lime-400" />
                  </div>
                  <div>
                    <h4 className="font-medium uppercase tracking-widest text-sm">
                      AI Analysis
                    </h4>
                    <p className="text-xs mt-1">Real-time delivery feedback</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-xs mb-2 font-medium uppercase tracking-wider">
                      <span className="text-[var(--text-muted)]">Clarity</span>
                      <span className="text-lime-600 dark:text-lime-400">
                        98%
                      </span>
                    </div>
                   <div className="w-full bg-[var(--border-subtle)] rounded-full h-2 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '98%' }}
                          transition={{ duration: 1.5, delay: 0.2 }}
                          className="bg-gradient-to-r from-lime-400 to-green-500 h-full rounded-full" 
                        />
                      </div>
                  </div>

                  <div>
                     <div className="flex justify-between text-xs mb-2 font-medium uppercase tracking-wider">
                        <span className="text-[var(--text-muted)]">Pacing</span>
                        <span className="text-lime-600 dark:text-lime-400">Perfect</span>
                      </div>
                   <div className="w-full bg-[var(--border-subtle)] rounded-full h-2 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '85%' }}
                          transition={{ duration: 1.5, delay: 0.4 }}
                          className="bg-gradient-to-r from-lime-400 to-green-500 h-full rounded-full" 
                        />
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
             <h2 className="text-3xl md:text-5xl font-medium mb-8 uppercase tracking-tight">
                Master the art of <span className="italic-serif text-lime-600 dark:text-lime-400">persuasion</span>.
              </h2>

            <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8 font-light">
                PitchCraft is your ultimate AI-powered companion for public speaking and project pitching. We bridge the gap between complex technical documentation and a compelling, audience-tailored narrative.
              </p>
              <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8 font-light">
                Whether you're facing a room of investors, non-technical executives, or the general public, our platform equips you with the exact words, timing, and confidence you need to win the room.
              </p>

            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-lime-600 dark:text-lime-400">
                  <Sparkles className="w-5 h-5" /> AI Strategy
                </div>
             <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-green-600 dark:text-green-400">
                  <Target className="w-5 h-5" /> Practice Studio
                </div>
             <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-teal-600 dark:text-teal-400">
                  <Users className="w-5 h-5" /> Community
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
