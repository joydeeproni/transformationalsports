'use client';
import { MeshGradient } from '@paper-design/shaders-react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimator from '@/components/ScrollAnimator';
import Divider from '@/components/Divider';
import TeamCard from '@/components/TeamCard';
import MailingListCTA from '@/components/MailingListCTA';

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

const modules = [
  {
    title: 'Module 1: Puberty',
    lessons: [
      'Introduction',
      'How our bodies & minds change',
      'Menstruation & puberty',
      'Nightfall & puberty',
      'False stories about puberty',
      'Playing with a pad',
    ],
  },
  {
    title: 'Module 2: Teen Relationships',
    lessons: [
      'Introduction',
      'Attraction & teen relationships',
      'Eve-teasing',
      'Love failure',
      'Consent',
      'Sex',
    ],
  },
  {
    title: 'Module 3: Biological Sex & Gender',
    lessons: ['Biological Sex', 'Gender', 'Inclusion'],
  },
  {
    title: 'Module 4: Talking with Parents',
    lessons: [
      'How to talk to parents about puberty',
      'How to talk to parents about periods & sports',
      'How to talk to parents about teen attraction & relationships',
    ],
  },
];

export default function PubertyTeenRelationshipsPage() {
  return (
    <>
      <Header />
      <main>
        {/* ============================================
            SECTION 1: Hero Banner
        ============================================ */}
        <section className="relative flex min-h-[420px] items-end overflow-hidden pb-16 pt-28 md:min-h-[520px] md:pb-20">
          <div className="absolute inset-0">
            <MeshGradient width={1280} height={720} colors={['#ffa40d', '#ffebb0']} distortion={0} swirl={0.66} grainMixer={0} grainOverlay={0} speed={1} scale={2.72} rotation={176} offsetY={-0.12} style={{ width: '100%', height: '100%' }} />
          </div>

          {/* Content — bottom-aligned, left-aligned */}
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
            <p className="text-xs font-medium uppercase tracking-[2px] text-amber-dark">
              4-Week Virtual Training Course
            </p>
            <h1
              className="mt-3 max-w-3xl font-light tracking-tight text-near-black leading-[1.1]"
              style={{ fontSize: 'clamp(33px, 5vw, 64px)' }}
            >
              Puberty &amp; Teen Relationships on Mixed-Gender Teams
            </h1>
          </div>
        </section>

        {/* ============================================
            SECTION 2: Title Area Intro
        ============================================ */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <ScrollAnimator animation="fade-up">
              <p className="text-lg md:text-xl text-near-black leading-relaxed">
                A step-by-step guide for sports coaches to confidently navigate
                puberty and teen relationships on a mixed-gender team.
              </p>
              <Divider centered />
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 3: Which issues do mixed-gender sports coaches still face?
        ============================================ */}
        <section className="bg-gray-50 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
              {/* Left — Image */}
              <div className="md:col-span-5">
                <ScrollAnimator animation="fade-right">
                  <Image
                    src="/images/BTG-Day_1-191.jpg"
                    alt="Mixed-gender sports coaching session"
                    width={600}
                    height={400}
                    className="w-full rounded-md object-cover border border-black/5"
                  />
                </ScrollAnimator>
              </div>

              {/* Right — Content */}
              <div className="md:col-span-7">
                <ScrollAnimator animation="fade-left">
                  <h3 className="text-2xl font-light tracking-tight text-near-black leading-tight md:text-3xl">
                    Which issues do mixed-gender sports coaches still face?
                  </h3>
                  <Divider />
                  <ul className="mt-8 flex flex-col gap-5 text-sm md:text-base leading-relaxed text-brown">
                    <li className="flex items-start gap-3">
                      <span className="text-amber/80 text-lg leading-none">&#8226;</span>
                      <span>
                        Social stigma on discussing menstruation and puberty in
                        general
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber/80 text-lg leading-none">&#8226;</span>
                      <span>
                        Not being trained in sex-ed and gender sensitivity
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber/80 text-lg leading-none">&#8226;</span>
                      <span>
                        Not understanding how to discuss relationships that
                        develop between players and the impact on the overall
                        team
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber/80 text-lg leading-none">&#8226;</span>
                      <span>
                        Fear of speaking out on topics like this when they have
                        not embodied it in their own lives
                      </span>
                    </li>
                  </ul>
                </ScrollAnimator>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 4: Why take this training? — Three Scenarios
        ============================================ */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-up">
              <h3 className="text-center text-3xl font-light tracking-tight text-near-black leading-tight md:text-4xl">
                Why take this training?
              </h3>
              <Divider centered />
            </ScrollAnimator>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Scenario 1 */}
              <ScrollAnimator animation="fade-up" delay="100" className="h-full">
                <div className="h-full rounded-md border border-black/5 bg-gray-50 p-8">
                  <p className="italic text-sm md:text-base leading-relaxed text-brown">
                    &ldquo;There is a male coach of a mixed-gender team in Chennai who
                    had a 9-year-old girl at practice who got her first periods
                    while on the field. Her shorts had a blood stain on them. She
                    didn&rsquo;t know what periods were because no one had ever
                    told her. The coach never expected a 9-year-old to get her periods so
                    early and doesn&rsquo;t know what to do.&rdquo;
                  </p>
                </div>
              </ScrollAnimator>

              {/* Scenario 2 */}
              <ScrollAnimator animation="fade-up" delay="200" className="h-full">
                <div className="h-full rounded-md border border-black/5 bg-gray-50 p-8">
                  <p className="italic text-sm md:text-base leading-relaxed text-brown">
                    &ldquo;There is a female coach of a teenage mixed-gender team in
                    Bangalore. Two of the players have a love failure. The team
                    starts taking sides and one of the players is being excluded.
                    The coach doesn&rsquo;t know what to do.&rdquo;
                  </p>
                </div>
              </ScrollAnimator>

              {/* Scenario 3 */}
              <ScrollAnimator animation="fade-up" delay="300" className="h-full">
                <div className="h-full rounded-md border border-black/5 bg-gray-50 p-8">
                  <p className="italic text-sm md:text-base leading-relaxed text-brown">
                    &ldquo;There is a male coach of a mixed-gender team in a rural
                    village of 6th, 7th and 8th standard players. One of the boys
                    comes to him and tells him he is worried because all the
                    other boys are growing taller and bigger but he isn&rsquo;t.
                    The coach doesn&rsquo;t know what to say.&rdquo;
                  </p>
                </div>
              </ScrollAnimator>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 5: Training Outcomes
        ============================================ */}
        <section className="bg-cream py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
              {/* Left content — 7/12 */}
              <div className="md:col-span-7">
                <ScrollAnimator animation="fade-right">
                  <h3 className="text-2xl font-light tracking-tight text-near-black leading-tight md:text-3xl">
                    By the end of this training, participants will be able to:
                  </h3>
                  <Divider />
                  <ul className="mt-8 flex flex-col gap-5 text-sm md:text-base text-brown leading-relaxed">
                    <li className="flex items-start gap-3.5">
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
                        Understand puberty and the developmental changes that
                        occur in the body, mind and heart
                      </span>
                    </li>
                    <li className="flex items-start gap-3.5">
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
                        Respond more confidently to questions that youth players
                        ask about puberty and relationships
                      </span>
                    </li>
                    <li className="flex items-start gap-3.5">
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
                        Create a more understanding, open and comfortable
                        environment for those playing while having periods
                      </span>
                    </li>
                    <li className="flex items-start gap-3.5">
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
                        Learn sample dialogues for how to open conversations with
                        players on these topics
                      </span>
                    </li>
                  </ul>
                </ScrollAnimator>
              </div>

              {/* Right — 5/12 image */}
              <div className="md:col-span-5">
                <ScrollAnimator animation="fade-left">
                  <Image
                    src="/images/dfsdds.jpg"
                    alt="Training outcomes"
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
            SECTION 6: Special Features
        ============================================ */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Feature 1 */}
              <ScrollAnimator animation="fade-up" delay="100">
                <div className="rounded-md border border-black/5 bg-white p-6 md:p-8 h-full transition-shadow duration-200 hover:shadow-md">
                  <h4 className="text-lg font-medium text-near-black leading-snug">
                    Customization
                  </h4>
                  <Divider />
                  <p className="mt-4 text-sm leading-relaxed text-brown/80">
                    Work with NGO leaders to understand which lessons are suited;
                    NGOs can select whether lessons on consent or sex be included.
                  </p>
                </div>
              </ScrollAnimator>

              {/* Feature 2 */}
              <ScrollAnimator animation="fade-up" delay="200">
                <div className="rounded-md border border-black/5 bg-white p-6 md:p-8 h-full transition-shadow duration-200 hover:shadow-md">
                  <h4 className="text-lg font-medium text-near-black leading-snug">
                    Shared experience
                  </h4>
                  <Divider />
                  <p className="mt-4 text-sm leading-relaxed text-brown/80">
                    Interviews with veteran coaches and facilitators across India.
                  </p>
                </div>
              </ScrollAnimator>

              {/* Feature 3 */}
              <ScrollAnimator animation="fade-up" delay="300">
                <div className="rounded-md border border-black/5 bg-white p-6 md:p-8 h-full transition-shadow duration-200 hover:shadow-md">
                  <h4 className="text-lg font-medium text-near-black leading-snug">
                    Open-minded, empathetic facilitators
                  </h4>
                  <Divider />
                  <p className="mt-4 text-sm leading-relaxed text-brown/80">
                    Mindset of non-judgment; believe in educating on body
                    development, respect, equality.
                  </p>
                </div>
              </ScrollAnimator>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 7: Course Format
        ============================================ */}
        <section className="bg-gray-50 py-24 md:py-32">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <ScrollAnimator animation="fade-up">
              <h3 className="text-3xl font-light tracking-tight text-near-black">
                Course Format
              </h3>
              <Divider centered />
              <ul className="mt-8 flex flex-col gap-4 text-sm md:text-base text-brown leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-amber/80 text-lg leading-none">&#8226;</span>
                  <span className="text-left">
                    Blended curriculum of pre-recorded videos, assignments and
                    live sessions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber/80 text-lg leading-none">&#8226;</span>
                  <span className="text-left">
                    English and Hindi language options
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber/80 text-lg leading-none">&#8226;</span>
                  <span className="text-left">
                    18 pre-recorded lessons + weekly assignments via Thinkific
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber/80 text-lg leading-none">&#8226;</span>
                  <span className="text-left">
                    Online support forum for coaches
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber/80 text-lg leading-none">&#8226;</span>
                  <span className="text-left">
                    2 hours/week of live sessions
                  </span>
                </li>
              </ul>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 8: Who is this training for?
        ============================================ */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-up">
              <h3 className="text-center text-3xl font-light tracking-tight text-near-black">
                Who is this training for?
              </h3>
              <Divider centered />
            </ScrollAnimator>

            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
              <ScrollAnimator animation="fade-up" delay="100">
                <div className="rounded-md border border-black/5 bg-white p-6 md:p-8 text-center h-full flex items-center justify-center transition-shadow duration-200 hover:shadow-md">
                  <p className="text-sm md:text-base font-medium leading-relaxed text-brown">
                    A sports coach/facilitator not equipped to handle social
                    aspects
                  </p>
                </div>
              </ScrollAnimator>

              <ScrollAnimator animation="fade-up" delay="200">
                <div className="rounded-md border border-black/5 bg-white p-6 md:p-8 text-center h-full flex items-center justify-center transition-shadow duration-200 hover:shadow-md">
                  <p className="text-sm md:text-base font-medium leading-relaxed text-brown">
                    A sports coach/facilitator struggling to make their team more
                    gender-equal &amp; inclusive
                  </p>
                </div>
              </ScrollAnimator>

              <ScrollAnimator animation="fade-up" delay="300">
                <div className="rounded-md border border-black/5 bg-white p-6 md:p-8 text-center h-full flex items-center justify-center transition-shadow duration-200 hover:shadow-md">
                  <p className="text-sm md:text-base font-medium leading-relaxed text-brown">
                    Coaches that have already been certified in Level 1: Building Strong Mixed-Gender Teams
                  </p>
                </div>
              </ScrollAnimator>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 9: Module Overview (Accordion)
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
                      <ul className="flex flex-col gap-2.5 text-sm text-brown/80 font-medium leading-relaxed">
                        {mod.lessons.map((lesson, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="text-amber/80 mt-0.5 leading-none">&#8226;</span>
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 10: Team
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
            SECTION 11: Sign-Up
        ============================================ */}
        <section className="bg-cream py-24 md:py-32">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <ScrollAnimator animation="fade-up">
              <p className="text-base md:text-lg leading-relaxed text-brown">
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
            SECTION 12: Mailing List
        ============================================ */}
        <MailingListCTA />
      </main>
      <Footer />
    </>
  );
}
