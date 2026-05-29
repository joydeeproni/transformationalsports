'use client';

import { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    image:
      '/images/slide-1.jpg',
    heading:
      'When we play the game differently, we view the world differently',
    overlay:
      'linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.20))',
  },
  {
    image:
      '/images/slide2.jpg',
    heading:
      'Advancing gender equity through mixed-gender sports',
    overlay:
      'linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.30))',
  },
  {
    image:
      '/images/slide-3.jpg',
    heading:
      'Stepping on to new fields, physically and virtually',
    overlay:
      'linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.20))',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const goTo = useCallback((index) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: current === index ? 1 : 0 }}
          aria-hidden={current !== index}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-[1.05]"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundAttachment: 'fixed',
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: slide.overlay }}
          />
        </div>
      ))}

      {/* Content — bottom-aligned, left-aligned */}
      <div className="relative z-10 flex min-h-screen items-end pb-20 md:pb-28 px-6">
        <div className="mx-auto w-full max-w-7xl">
          <h1
            className={`max-w-[800px] font-light text-white tracking-tight transition-all duration-700 leading-[1.08] ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              fontSize: 'clamp(36px, 5.5vw, 56px)',
            }}
          >
            {slides[current].heading}
          </h1>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-6 md:left-1/2 md:-translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              current === index
                ? 'w-8 bg-white'
                : 'w-1.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
