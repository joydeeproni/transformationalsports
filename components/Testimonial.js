'use client';

import { useRef, useEffect, useState } from 'react';

export default function Testimonial({ quote, author }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <blockquote
      ref={ref}
      className={`mx-auto max-w-2xl transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <div className="border-l-[2px] border-amber pl-6 md:pl-8">
        <p className="text-md md:text-lg font-light text-near-black leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
        {author && (
          <footer className="mt-4 text-xs font-medium text-brown/50">
            &mdash; {author}
          </footer>
        )}
      </div>
    </blockquote>
  );
}
