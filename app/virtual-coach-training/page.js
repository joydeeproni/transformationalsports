'use client';
import { MeshGradient } from '@paper-design/shaders-react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimator from '@/components/ScrollAnimator';
import Divider from '@/components/Divider';
import TeamCard from '@/components/TeamCard';
import MailingListCTA from '@/components/MailingListCTA';

const courseTestimonials = [
  {
    quote:
      "Easy to understand, and they talk about real life solutions. It's not just based on theory.",
    author: 'Coach Siddharth',
  },
  {
    quote:
      'The best course in regards to the knowledge of mixed-gender training.',
    author: 'Coach Bonnke',
  },
  {
    quote:
      'I got so many thoughts, ideas and solutions from this course...thank you so much once again.',
    author: 'Coach Sohail',
  },
  {
    quote:
      'This is an amazing course...a great opportunity to get to know yourself.',
    author: 'Coach Selvi',
  },
];

const trainingOutcomes = [
  {
    text: 'Retain and onboard players, ',
    bold: 'especially girls',
  },
  {
    text: 'Implement their new ',
    bold: 'toolkit of strategies for socially aware coaching',
  },
  {
    text: 'Increase player ',
    bold: 'communication to help overcome shyness amongst genders',
  },
];

const modules = [
  { title: 'Module 1: Mixed-Gender Basics', lessons: '4 lessons' },
  { title: 'Module 2: The Transformational Sports Method', lessons: '4 lessons' },
  { title: 'Module 3: Gender', lessons: '6 lessons' },
  { title: 'Module 4: Communication', lessons: '4 lessons' },
  { title: 'Module 5: Inclusion', lessons: '3 lessons' },
];

const teamMembers = [
  {
    name: 'Liz Haynes',
    role: 'Director & Facilitator',
    imageUrl:
      '/images/LH-Headshot-Copy-1.jpg',
    bio: 'Liz, raised in the U.S., has lived, played and coached in India since 2013. She has a passion for developing sports and gender curriculum for young people.',
  },
  {
    name: 'Benoy Stephen',
    role: 'Program Manager & Facilitator',
    imageUrl:
      '/images/s-4-1.jpg',
    bio: 'Benoy joined TS in 2017 as a Bridging the Gaps fellow and became passionate about breaking gender barriers. He co-founded Y-Ultimate, a young not-for-profit that uses ultimate frisbee to build life skills in children.',
  },
  {
    name: 'Rakesh Anandan',
    role: 'Facilitator',
    imageUrl:
      '/images/Rakesh-Anandan.jpg',
    bio: 'Rakesh is a volleyball player and fitness trainer who has facilitated thousands of classes of mixed-gender adults and young people. Since 2018, Rakesh has worked with Transformational Sports as a facilitator and curriculum builder.',
  },
  {
    name: 'Nimisha Vasava',
    role: 'Facilitator',
    imageUrl:
      '/images/Nimisha-Vasava.jpg',
    bio: 'Nimisha is an ultimate frisbee player and has represented India internationally six times as both a player and a coach. She began her journey with Transformational Sports in 2014.',
  },
];

export default function VirtualCoachTrainingPage() {
  return (
    <>
      <Header />
      <main>
        {/* ============================================
            SECTION 1: Hero Banner
        ============================================ */}
        <section className="relative flex min-h-[420px] items-end overflow-hidden pb-16 pt-28 md:min-h-[520px] md:pb-20">
          <div className="absolute inset-0">
            <MeshGradient width={1280} height={720} colors={['#ffba60', '#fff4e0']} distortion={0} swirl={0.66} grainMixer={0} grainOverlay={0} speed={1} scale={2.72} rotation={176} offsetY={-0.12} style={{ width: '100%', height: '100%' }} />
          </div>

          {/* Content — bottom-aligned, left-aligned */}
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
            <p className="text-xs font-medium uppercase tracking-[2px] text-amber-dark">
              Five-Week Virtual Training Course
            </p>
            <h1
              className="mt-3 max-w-3xl font-light tracking-tight text-near-black leading-[1.1]"
              style={{ fontSize: 'clamp(33px, 5vw, 64px)' }}
            >
              Building Strong Mixed-Gender Teams
            </h1>
          </div>
        </section>

        {/* ============================================
            SECTION 2: Course Intro Description
        ============================================ */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <ScrollAnimator animation="fade-up">
              <p className="text-lg md:text-xl text-near-black leading-relaxed">
                A step-by-step guide for sports coaches and youth facilitators to bridge the gaps of gender on their teams.
              </p>
              <Divider centered />
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 3: What do mixed-gender sports NGOs struggle with?
        ============================================ */}
        <section className="bg-gray-50 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-up">
              <div className="mx-auto max-w-2xl rounded-md border border-black/5 bg-white p-8 md:p-10">
                <h3 className="text-2xl font-light tracking-tight text-near-black leading-tight md:text-3xl">
                  What do mixed-gender sports NGOs struggle with?
                </h3>
                <Divider />
                <ul className="mt-8 flex flex-col gap-5 text-sm md:text-base leading-relaxed text-brown">
                  <li className="flex items-start gap-3">
                    <span className="text-amber/80 text-lg leading-none">&#8226;</span>
                    <span>Onboarding &amp; retention of girl players</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber/80 text-lg leading-none">&#8226;</span>
                    <span>
                      Training coaches to be as socially proficient as they are
                      technically proficient
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber/80 text-lg leading-none">&#8226;</span>
                    <span>
                      Creating an environment where boys and girls overcome
                      their shyness and become true teammates
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 4: Course Testimonials
        ============================================ */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
              {/* Left column — 7/12 */}
              <div className="md:col-span-7">
                <ScrollAnimator animation="fade-right">
                  <h3 className="text-3xl font-light tracking-tight text-near-black md:text-4xl leading-tight">
                    Course Testimonials
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-brown/80">
                    Participant coaches rated the course 9 out of 10!
                  </p>
                  <Divider />
                </ScrollAnimator>

                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  {courseTestimonials.map((item, i) => (
                    <ScrollAnimator
                      key={i}
                      animation="fade-up"
                      delay={String(i * 100)}
                    >
                      <blockquote className="h-full p-5 rounded-md border border-black/5 bg-white flex flex-col justify-between">
                        <p className="italic text-sm text-brown leading-relaxed">
                          &ldquo;{item.quote}&rdquo;
                        </p>
                        <footer className="mt-4 font-medium text-xs text-brown/80">
                          &mdash; {item.author}
                        </footer>
                      </blockquote>
                    </ScrollAnimator>
                  ))}
                </div>
              </div>

              {/* Right column — 5/12 */}
              <div className="md:col-span-5">
                <ScrollAnimator animation="fade-left">
                  <Image
                    src="/images/IMG_5803_1-1.jpg"
                    alt="Coach training session"
                    width={600}
                    height={400}
                    className="w-full rounded-md object-cover border border-black/5"
                  />
                </ScrollAnimator>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 5: Training Outcomes
        ============================================ */}
        <section className="bg-cream py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-up">
              <div className="mx-auto max-w-2xl rounded-md border border-black/5 bg-white p-8 md:p-10">
                <h3 className="text-2xl font-light tracking-tight text-near-black leading-tight md:text-3xl">
                  By the end of this training, participants will be able to:
                </h3>
                <Divider />
                <ul className="mt-8 flex flex-col gap-6">
                  {trainingOutcomes.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3.5 text-sm md:text-base text-brown leading-relaxed"
                    >
                      <svg
                        className="mt-1 flex-shrink-0"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#D58816"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>
                        {item.text}
                        <strong className="font-medium text-near-black">{item.bold}</strong>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 6: Course Format
        ============================================ */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-up">
              <div className="mx-auto max-w-2xl rounded-md border border-black/5 bg-gray-50 p-8 md:p-10">
                <h3 className="text-2xl font-light tracking-tight text-near-black leading-tight md:text-3xl">
                  Course Format
                </h3>
                <Divider />
                <ul className="mt-8 flex flex-col gap-5 text-sm md:text-base text-brown leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-amber/80 text-lg leading-none">&#8226;</span>
                    <span>
                      A 5-week blended training program available in Hindi,
                      Tamil, Kannada &amp; English
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber/80 text-lg leading-none">&#8226;</span>
                    <span>
                      Participation by senior &amp; junior coaches
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber/80 text-lg leading-none">&#8226;</span>
                    <span>
                      Blended training includes: 21 pre-recorded lessons, online
                      support forum, 1 hour/week 1:1 sessions
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 7: Module Overview (Accordion)
        ============================================ */}
        <section className="bg-gray-50 py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6">
            <ScrollAnimator animation="fade-up">
              <h3 className="text-center text-3xl font-light tracking-tight text-near-black leading-tight md:text-4xl">
                Module Overview
              </h3>
              <Divider centered />
            </ScrollAnimator>

            <div className="mt-12 flex flex-col gap-3">
              {modules.map((mod, i) => (
                <ScrollAnimator
                  key={i}
                  animation="fade-up"
                  delay={String(i * 100)}
                >
                  <details className="group rounded-md border border-black/5 bg-white overflow-hidden">
                    <summary className="flex cursor-pointer items-center justify-between p-5 font-medium text-near-black transition-colors duration-200 hover:text-near-black">
                      <span className="text-base md:text-lg">{mod.title}</span>
                      <svg
                        className="h-5 w-5 flex-shrink-0 transition-transform duration-200 group-open:rotate-180 text-brown/70"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="border-t border-black/5 bg-gray-50 p-5">
                      <p className="text-sm text-brown/80 font-medium leading-relaxed">
                        {mod.lessons}
                      </p>
                    </div>
                  </details>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 8: Team
        ============================================ */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-up">
              <h3 className="text-center text-3xl font-light tracking-tight text-near-black md:text-4xl leading-tight">
                Our Team
              </h3>
              <Divider centered />
            </ScrollAnimator>

            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
              {teamMembers.map((member, i) => (
                <ScrollAnimator
                  key={member.name}
                  animation="fade-up"
                  delay={String((i + 1) * 150)}
                  className="h-full"
                >
                  <TeamCard
                    name={member.name}
                    role={member.role}
                    imageUrl={member.imageUrl}
                    bio={member.bio}
                  />
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 9: Sign-Up
        ============================================ */}
        <section className="bg-cream py-24 md:py-32">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <ScrollAnimator animation="fade-up">
              <h3 className="text-3xl font-light tracking-tight text-near-black">
                Sign-Up Details
              </h3>
              <Divider centered />
              <p className="mt-8 text-base md:text-lg leading-relaxed text-brown">
                Email{' '}
                <a
                  href="mailto:team@transformationalsports.org"
                  className="text-link"
                >
                  team@transformationalsports.org
                </a>{' '}
                to be part of our next cohort!
              </p>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 10: Mailing List
        ============================================ */}
        <MailingListCTA />
      </main>
      <Footer />
    </>
  );
}
