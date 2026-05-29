'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollRevealText({ questions, highlight }) {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      const scrolled = -sectionTop;
      const totalScrollable = sectionHeight - windowHeight;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      const totalItems = questions.length + (highlight ? 1 : 0);
      const itemProgress = progress * totalItems;
      const currentIndex = Math.min(Math.floor(itemProgress), totalItems - 1);
      const withinItem = itemProgress - currentIndex;

      // Fade in (0→1) in first 30%, hold (1) in middle 40%, fade out (1→0) in last 30%
      let itemOpacity;
      if (withinItem < 0.3) {
        itemOpacity = withinItem / 0.3;
      } else if (withinItem < 0.7) {
        itemOpacity = 1;
      } else {
        itemOpacity = 1 - (withinItem - 0.7) / 0.3;
      }

      setActiveIndex(currentIndex);
      setOpacity(Math.max(0, Math.min(1, itemOpacity)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [questions, highlight]);

  const totalItems = questions.length + (highlight ? 1 : 0);
  const isHighlight = highlight && activeIndex >= questions.length;

  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: `${totalItems * 100}vh` }}
    >
      <div className="sticky top-0 flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto max-w-3xl text-center">
          {!isHighlight ? (
            <p
              className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed tracking-tight text-near-black"
              style={{ opacity }}
            >
              {questions[activeIndex]}
            </p>
          ) : (
            <p
              className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed tracking-tight text-amber-dark"
              style={{ opacity }}
            >
              {highlight}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
