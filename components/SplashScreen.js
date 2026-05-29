'use client';

import { useState, useEffect } from 'react';
import MandorlaLogo from './MandorlaLogo';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Check if already shown this session
    if (sessionStorage.getItem('splash-shown')) {
      setVisible(false);
      return;
    }

    // Start fade out after 4.5s, remove after 5s
    const fadeTimer = setTimeout(() => setFading(true), 4500);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('splash-shown', '1');
    }, 5000);

    // Lock body scroll during splash
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-white transition-opacity duration-500 ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <MandorlaLogo size={120} color="#FFB23E" />
    </div>
  );
}
