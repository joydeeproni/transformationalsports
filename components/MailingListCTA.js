'use client';

import { useState } from 'react';
import { MeshGradient } from '@paper-design/shaders-react';

export default function MailingListCTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Shader background — fills entire section */}
      <div className="absolute inset-0">
        <MeshGradient
          width={1280}
          height={720}
          colors={['#ffb700', '#fff8c7']}
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
      <div className="relative z-10 mx-auto max-w-md px-6 text-center">
        <h2 className="text-2xl font-light text-near-black md:text-3xl leading-snug tracking-tight">
          Join our mailing list
        </h2>
        <p className="mt-3 text-sm text-brown/80 md:text-base leading-relaxed">
          Never miss an update from Transformational Sports.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full flex-1 rounded-md border border-brown/20 bg-white/90 backdrop-blur-sm px-4 py-3 text-sm text-near-black placeholder:text-brown/40 focus:border-brown focus:outline-none focus:ring-1 focus:ring-brown/20 transition-all duration-200"
          />
          <button
            type="submit"
            className="btn-primary w-full sm:w-auto whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
