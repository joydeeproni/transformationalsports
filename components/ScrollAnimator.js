'use client';

import { useEffect, useRef } from 'react';

export default function ScrollAnimator({
  children,
  animation = 'fade-up',
  delay = '0',
  threshold = 0.1,
  className = '',
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      data-animate={animation}
      data-delay={delay !== '0' ? delay : undefined}
      className={className}
    >
      {children}
    </div>
  );
}
