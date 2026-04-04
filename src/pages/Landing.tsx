import { useState } from 'react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import ContactModal from '@/components/landing/ContactModal';
import VideoModal from '@/components/landing/VideoModal';
import { useCarousel } from '@/hooks/useCarousel';
import { useTheme } from '@/hooks/useTheme';

export default function Landing() {
  const [showContact, setShowContact] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const { currentIdx } = useCarousel(activeVideo);
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-main)] flex flex-col relative overflow-hidden font-sans selection:bg-lime-500 selection:text-zinc-900 transition-colors duration-300">

      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        onContact={() => setShowContact(true)}
      />

      <Hero currentIdx={currentIdx} setActiveVideo={setActiveVideo} />

      <About />

      <Footer onContact={() => setShowContact(true)} />

      <ContactModal
        show={showContact}
        onClose={() => setShowContact(false)}
      />

      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />

    </div>
  );
}