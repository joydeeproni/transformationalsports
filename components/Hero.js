'use client';

import { MeshGradient } from '@paper-design/shaders-react';

export default function Hero({
  title,
  subtitle,
  colors = ['#ffb700', '#fff8c7'],
}) {
  return (
    <section className="relative flex min-h-[420px] items-end overflow-hidden pb-16 pt-28 md:min-h-[520px] md:pb-20">
      {/* Shader background */}
      <div className="absolute inset-0">
        <MeshGradient
          width={1280}
          height={720}
          colors={colors}
          distortion={0}
          swirl={0.66}
          grainMixer={0}
          grainOverlay={0}
          speed={1}
          scale={2.72}
          rotation={176}
          offsetY={-0.12}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <h1
          className="max-w-3xl font-light tracking-tight text-near-black leading-[1.08]"
          style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-xl text-base text-brown/70 md:text-md leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
