import HeroText from "./HeroText";
import Carousel from "./Carousel";

interface Props {
  currentIdx: number;
  setActiveVideo: (video: string) => void;
}

export default function Hero({ currentIdx, setActiveVideo }: Props) {
  return (
    <main className="flex-1 flex flex-col justify-center relative z-10 px-6 md:px-12 py-20 md:py-32 min-h-[85vh]">
      <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between h-full gap-12">
        <HeroText setActiveVideo={setActiveVideo} />
        <Carousel currentIdx={currentIdx} setActiveVideo={setActiveVideo} />
      </div>
    </main>
  );
}