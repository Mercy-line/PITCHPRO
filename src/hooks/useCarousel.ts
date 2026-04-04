import { useEffect, useState } from "react";
import { carouselItems } from "@/data/CarouselData";

export const useCarousel = (activeVideo: string | null) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (activeVideo) return;

    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % carouselItems.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [activeVideo]);

  return { currentIdx, setCurrentIdx };
};