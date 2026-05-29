'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

function parseCounterString(str) {
  const cleaned = str.replace(/,/g, '');
  const match = cleaned.match(/^(\d+)(.*)/);
  if (!match) return { target: 0, suffix: str };
  return { target: parseInt(match[1], 10), suffix: match[2] || '' };
}

export default function Counter({ number, label, icon }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState('0');
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { target, suffix } = parseCounterString(number);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const startTime = performance.now();

          const step = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            setDisplay(`${current.toLocaleString()}${suffix}`);
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [number]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-4">
      {icon && (
        <div className="mb-5 flex h-14 w-14 items-center justify-center">
          <Image
            src={icon}
            alt=""
            width={56}
            height={56}
            className="h-full w-full object-contain mix-blend-multiply"
          />
        </div>
      )}
      <span className="text-4xl font-light text-brown md:text-5xl leading-none tracking-tight">
        {display}
      </span>
      <span className="mt-3 text-sm text-brown/60 leading-relaxed max-w-[240px]">
        {label}
      </span>
    </div>
  );
}
