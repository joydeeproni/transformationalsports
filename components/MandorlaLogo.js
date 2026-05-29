'use client';

export default function MandorlaLogo({ size = 32, color = '#FFB23E', slow = false, className = '' }) {
  return (
    <svg
      className={`${slow ? 'mandorla-slow' : 'mandorla'} ${className}`}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Transformational Sports logo"
      width={size}
      height={size}
      style={{ color }}
    >
      <g className="m-rot">
        <circle className="m-c m-c-1" cx="100" cy="60" r="40" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="1" vectorEffect="non-scaling-stroke" />
        <circle className="m-c m-c-2" cx="134.64" cy="80" r="40" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="1" vectorEffect="non-scaling-stroke" />
        <circle className="m-c m-c-3" cx="134.64" cy="120" r="40" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="1" vectorEffect="non-scaling-stroke" />
        <circle className="m-c m-c-4" cx="100" cy="140" r="40" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="1" vectorEffect="non-scaling-stroke" />
        <circle className="m-c m-c-5" cx="65.36" cy="120" r="40" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="1" vectorEffect="non-scaling-stroke" />
        <circle className="m-c m-c-6" cx="65.36" cy="80" r="40" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="1" vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  );
}
