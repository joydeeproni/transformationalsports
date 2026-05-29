'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MandorlaLogo from './MandorlaLogo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Programs', href: '/programs', isMega: true },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const programsList = [
  {
    label: 'Virtual coach training',
    href: '/virtual-coach-training-choices',
    image: '/images/Virtual-Coach-Training-1.jpg',
    description: 'Blended training for mixed-gender coaches',
  },
  {
    label: 'Rural sports outreach',
    href: '/rural-sports-outreach',
    image: '/images/Rural-Sports-Outreach.jpg',
    description: 'Mixed-gender programs in rural Tamil Nadu',
  },
  {
    label: 'Social action lab',
    href: '/social-action-lab',
    image: '/images/Social-Action-Lab.jpg',
    description: 'Youth-led gender equity projects across India',
  },
  {
    label: 'Fellowship & school outreach',
    href: '/fellowship-school-outreach',
    image: '/images/Fellowship-School-Outreach.jpg',
    description: 'Training fellows and schools in gender equity',
  },
  {
    label: 'Volunteer for India',
    href: '/volunteer-for-india',
    image: '/images/Volunteer-for-India.jpg',
    description: 'India\'s first youth volunteer network',
  },
  {
    label: 'Volunteer for India 2.0',
    href: '/volunteer-for-india-2',
    image: '/images/2-small-1.jpg',
    description: 'Expanding the Volship program nationwide',
  },
  {
    label: 'Bridging the Gaps',
    href: '/bridging-the-gaps',
    image: '/images/BTGInterior1.jpeg',
    description: 'Flagship camps empowering young leaders',
  },
  {
    label: 'COVID-19 relief',
    href: '/covid19-relief',
    image: '/images/Photo-from-Liz-3-Copy-1.jpg',
    description: 'Emergency aid for rural Tamil Nadu families',
  },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMegaOpen(false);
    }, 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm border-b border-black/5' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
          <MandorlaLogo size={30} color={scrolled ? '#FFB23E' : '#FFFFFF'} slow />
          <span className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
            scrolled ? 'text-near-black' : 'text-white'
          }`}>
            Transformational Sports
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ label, href, isMega }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

            if (isMega) {
              return (
                <div
                  key={href}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={href}
                    className={`flex items-center gap-1 px-4 py-2 text-sm transition-colors duration-200 ${
                      scrolled
                        ? isActive ? 'font-medium text-near-black' : 'text-brown/70 hover:text-near-black'
                        : isActive ? 'font-medium text-white' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {label}
                    <svg
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-amber" />
                  )}
                </div>
              );
            }

            return (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-2 text-sm transition-colors duration-200 ${
                  scrolled
                    ? isActive ? 'font-medium text-near-black' : 'text-brown/70 hover:text-near-black'
                    : isActive ? 'font-medium text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-amber" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Hamburger button */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`block h-[1.5px] w-5 transition-all duration-300 ${
              scrolled || menuOpen ? 'bg-near-black' : 'bg-white'
            } ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`}
          />
          <span
            className={`block h-[1.5px] w-5 transition-all duration-300 ${
              scrolled || menuOpen ? 'bg-near-black' : 'bg-white'
            } ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-[1.5px] w-5 transition-all duration-300 ${
              scrolled || menuOpen ? 'bg-near-black' : 'bg-white'
            } ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* ── Mega Menu Dropdown (Full Width) ─────────────────────────────── */}
      <div
        className={`absolute left-0 right-0 top-full z-40 border-t border-black/5 bg-white shadow-lg transition-all duration-300 ease-out hidden md:block ${
          megaOpen
            ? 'visible opacity-100 translate-y-0'
            : 'invisible opacity-0 -translate-y-2 pointer-events-none'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {programsList.map((prog) => {
              const isProgActive = pathname === prog.href;
              return (
                <Link
                  key={prog.href}
                  href={prog.href}
                  onClick={() => setMegaOpen(false)}
                  className={`group flex items-start gap-3.5 rounded-md p-3 transition-colors duration-150 ${
                    isProgActive
                      ? 'bg-cream'
                      : 'hover:bg-cream/50'
                  }`}
                >
                  <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded bg-gray-100">
                    <Image
                      src={prog.image}
                      alt=""
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <span className={`block text-[13px] leading-snug ${
                      isProgActive ? 'font-medium text-near-black' : 'text-brown/80 group-hover:text-near-black'
                    }`}>
                      {prog.label}
                    </span>
                    <span className="mt-1 block text-[11px] leading-snug text-brown/40 group-hover:text-brown/60 line-clamp-2">
                      {prog.description}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-6 border-t border-black/5 pt-4">
            <Link
              href="/programs"
              onClick={() => setMegaOpen(false)}
              className="text-xs font-medium text-brown/50 hover:text-brown transition-colors inline-flex items-center gap-1"
            >
              View all programs
              <span className="text-sm">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Mobile Overlay ──────────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 top-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ── Mobile Drawer ───────────────────────────────────────────────── */}
      <nav
        className={`fixed right-0 top-0 z-40 h-full w-80 bg-white px-6 pt-20 shadow-2xl transition-transform duration-300 ease-out md:hidden overflow-y-auto ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-1">
          {navLinks.map(({ label, href, isMega }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

            if (isMega) {
              return (
                <li key={href}>
                  <div className="flex items-center justify-between py-3 border-b border-black/5">
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className={`text-sm ${
                        isActive ? 'font-medium text-near-black' : 'text-brown/70'
                      }`}
                    >
                      {label}
                    </Link>
                    <button
                      onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                      className="p-1.5 text-brown/50 hover:text-near-black transition-colors"
                      aria-label="Toggle programs menu"
                    >
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${mobileProgramsOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileProgramsOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="py-3 flex flex-col gap-1">
                      {programsList.map((prog) => {
                        const isProgActive = pathname === prog.href;
                        return (
                          <Link
                            key={prog.href}
                            href={prog.href}
                            onClick={() => setMenuOpen(false)}
                            className={`flex items-center gap-3 rounded-md p-2.5 transition-colors ${
                              isProgActive
                                ? 'bg-cream font-medium text-near-black'
                                : 'text-brown/60 hover:bg-cream/40 hover:text-near-black'
                            }`}
                          >
                            <div className="h-9 w-9 flex-shrink-0 overflow-hidden rounded bg-gray-100">
                              <Image
                                src={prog.image}
                                alt=""
                                width={36}
                                height={36}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <span className="text-[13px] leading-snug">{prog.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </li>
              );
            }

            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-3 border-b border-black/5 text-sm ${
                    isActive ? 'font-medium text-near-black' : 'text-brown/70'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
