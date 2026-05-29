'use client';
import { MeshGradient } from '@paper-design/shaders-react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimator from '@/components/ScrollAnimator';
import Divider from '@/components/Divider';
import TeamCard from '@/components/TeamCard';
import MailingListCTA from '@/components/MailingListCTA';

/* ── SVG icons for the TS Method section ─────────────────────────────────── */
const BalanceIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#534B38"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3v18" />
    <path d="M2 7h4l6-4 6 4h4" />
    <path d="M5 7l-3 9h6L5 7z" />
    <path d="M19 7l-3 9h6l-3-9z" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#534B38"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const PeopleIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#534B38"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="7" r="3" />
    <circle cx="17" cy="7" r="3" />
    <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
    <path d="M17 11a4 4 0 014 4v2" />
  </svg>
);

const ChartIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#534B38"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

/* ── Method blurb data ───────────────────────────────────────────────────── */
const methodBlurbs = [
  {
    icon: <BalanceIcon />,
    title: 'Make it balanced',
    body: 'Youth sports faces drop-outs when practices either become too competitive or lack focus. We teach coaches how to strike the right balance between fun and competition in each practice session.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Make it safe',
    body: "We train coaches on how to ensure sports practice sessions are a safe space for all players. Plus, we believe practice isn't over until every player reaches home safely.",
  },
  {
    icon: <PeopleIcon />,
    title: "Make it 'truly' mixed-gender",
    body: 'We train coaches on how to make small incremental changes to their practice sessions so that players across genders can work together better and move past the everyday realities of shyness, gender stereotypes, and norms.',
  },
  {
    icon: <ChartIcon />,
    title: 'Make it better each time',
    body: 'We encourage coaches to reflect after each of their sports sessions to improve the players experience for the next time regarding balance, safety and equality.',
  },
];

/* ── Team data ───────────────────────────────────────────────────────────── */
const teamRow1 = [
  {
    name: 'Liz Haynes',
    role: 'Director & Facilitator',
    imageUrl:
      '/images/LH-Headshot-Copy-1.jpg',
    bio: 'Liz, raised in the U.S., has lived, played and coached in India since 2013. She has a passion for developing sports and gender curriculum for young people. She has created sports & gender immersion camps, coach trainings, fellowships, social action labs and rural sports outreach programs all with the sole focus of advancing gender equity through mixed-gender sports programs.',
  },
  {
    name: 'Benoy Stephen',
    role: 'Program Manager & Facilitator',
    imageUrl:
      '/images/s-4-1.jpg',
    bio: 'Benoy joined TS in 2017 as a Bridging the Gaps fellow and became passionate about breaking gender barriers. He completed the Teach for India fellowship in 2018 and co-founded Y-Ultimate, a young not-for-profit that uses the sport of ultimate frisbee to build life skills in children, especially those from marginalised backgrounds.',
  },
  {
    name: 'Suprabha Hosamane',
    role: 'Strategy Officer & Curriculum Developer',
    imageUrl:
      '/images/Soups_Alishan-11.jpg',
    bio: "Suprabha is an entrepreneur from Chennai who began her journey with sports only in high school, after a childhood where she wasn't encouraged to take an interest in sports. She has now competed in tournaments, captained teams and also been a coach for youth teams.",
  },
];

const teamRow2 = [
  {
    name: 'Nimisha Vasava',
    role: 'Facilitator',
    imageUrl:
      '/images/Nimisha-Vasava.jpg',
    bio: 'Nimisha is an ultimate frisbee player and has represented India internationally six times as both a player and a coach. She began her journey with Transformational Sports in 2014 serving as a coach at Bridging the Gaps camps in Auroville.',
  },
  {
    name: 'Rakesh Anandan',
    role: 'Facilitator',
    imageUrl:
      '/images/Rakesh-Anandan.jpg',
    bio: 'Rakesh is a volleyball player and fitness trainer who has facilitated thousands of classes of mixed-gender adults and young people. Since 2018, Rakesh has worked with Transformational Sports as a facilitator and curriculum builder.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        {/* ── SECTION 1: Hero ──────────────────────────────────────────── */}
        <section className="relative flex min-h-[420px] items-end overflow-hidden pt-24 pb-16 md:min-h-[520px] md:pb-20">
          <div className="absolute inset-0">
            <MeshGradient width={1280} height={720} colors={['#D58816', '#ffe0a0']} distortion={0} swirl={0.66} grainMixer={0} grainOverlay={0} speed={1} scale={2.72} rotation={176} offsetY={-0.12} style={{ width: '100%', height: '100%' }} />
          </div>

          {/* Content — bottom-aligned, left-aligned editorial */}
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
            <h1
              className="max-w-3xl font-light tracking-tight text-near-black leading-tight"
              style={{ fontSize: 'clamp(33px, 5vw, 64px)' }}
            >
              10+ years of experience
            </h1>
            <p className="mt-4 max-w-2xl text-base text-brown/70 md:text-lg leading-relaxed">
              training players, coaches and Indian non-profit organizations in the
              soft skills of building mixed-gender teams
            </p>
          </div>
        </section>

        {/* ── SECTION 2: Since 2014 ────────────────────────────────────── */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
              {/* Left column — 5/12 */}
              <ScrollAnimator animation="fade-right" className="md:col-span-5">
                <h2 className="text-3xl font-light tracking-tight text-near-black md:text-4xl leading-tight">
                  Since 2014
                </h2>
                <Divider />
                <p className="mt-6 text-sm md:text-base leading-relaxed text-brown">
                  Transformational Sports (TS) was formally registered in 2016
                  as a non-profit organization in the United States, but
                  unofficially, TS had already seen its beginnings through
                  sports and gender-based camps in India since 2014. The need
                  to leverage its potential with a formal organizational
                  structure and active funding was a result of the success seen
                  in those early camps, where sports became a powerful tool to
                  talk to both young women and men about gender roles and
                  gender equity, especially in societies where women are
                  traditionally not encouraged to play sports, or where sports
                  is considered a predominantly male endeavor.
                </p>
              </ScrollAnimator>

              {/* Right column — 7/12 */}
              <ScrollAnimator
                animation="fade-left"
                delay="200"
                className="md:col-span-7"
              >
                <Image
                  src="/images/pic-1.jpg"
                  alt="Transformational Sports in action"
                  width={800}
                  height={530}
                  className="w-full rounded-md shadow-md border border-black/5"
                />
              </ScrollAnimator>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: Our Mission ───────────────────────────────────── */}
        <section className="relative overflow-hidden bg-cream py-24 md:py-32">
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <ScrollAnimator animation="fade-up">
              <h2 className="text-2xl font-light tracking-tight text-near-black md:text-4xl leading-snug">
                Our mission is to advance gender equity through mixed-gender
                sports
              </h2>
              <Divider centered />
            </ScrollAnimator>
          </div>
        </section>

        {/* ── SECTION 4: The TS Method ─────────────────────────────────── */}
        <section className="bg-gray-50 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-up">
              <h2 className="text-center text-3xl font-light tracking-tight text-near-black md:text-4xl leading-tight">
                The Transformational Sports Method
              </h2>
              <p className="mx-auto mt-4 text-center text-sm md:text-base text-brown/70 max-w-2xl leading-relaxed">
                We mentor coaches and facilitators to adapt the Transformational
                Sports method for their sports sessions:
              </p>
              <Divider centered />
            </ScrollAnimator>

            {/* Method grid */}
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
              {methodBlurbs.map((blurb, i) => (
                <ScrollAnimator
                  key={blurb.title}
                  animation="fade-up"
                  delay={String((i + 1) * 100)}
                >
                  <div className="flex flex-col items-center text-center p-6 rounded-md border border-black/5 bg-white h-full">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cream border border-amber/20">
                      {blurb.icon}
                    </div>
                    <h3 className="text-lg font-medium text-near-black">
                      {blurb.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-brown max-w-md">
                      {blurb.body}
                    </p>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: Why Mixed-Gender ──────────────────────────────── */}
        <ScrollAnimator animation="fade-up">
          <section>
            <div className="grid grid-cols-1 items-stretch md:grid-cols-2">
              {/* Left — Image */}
              <div className="relative min-h-[350px] md:min-h-auto">
                <Image
                  src="/images/slide2.jpg"
                  alt="Mixed-gender sports session"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right — Content */}
              <div className="flex flex-col justify-center bg-cream px-6 py-16 md:p-20">
                <h2 className="text-3xl font-light tracking-tight text-near-black leading-tight">
                  Why Mixed-Gender (Co-Ed) Sports?
                </h2>
                <Divider />
                <p className="mt-6 text-sm md:text-base leading-relaxed text-brown">
                  We are asked this question many times, especially in India,
                  since our programs are designed as &lsquo;mixed-gender&rsquo;
                  programs amidst a vast sea of single-gender programs. Gender
                  stereotypes and inequities persist across the world and we
                  believe that gender-based programs these days have become
                  synonymous with empowerment of girls and women, rather than all
                  genders. In order to change deeply-set mindsets in society, we
                  need youth to play together, to take up the same space, and to
                  learn from each other, rather than separately. Mixed-gender
                  sports, if facilitated well, teach us how to interact
                  respectfully, sensitively and empathetically with those
                  different from us. It means we can move society forward,
                  together, rather than separately.
                </p>
              </div>
            </div>
          </section>
        </ScrollAnimator>

        {/* ── SECTION 6: Our Team ──────────────────────────────────────── */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-up">
              <h2 className="text-center text-3xl font-light tracking-tight text-near-black md:text-4xl leading-tight">
                Our Team
              </h2>
              <p className="mx-auto mt-4 text-center text-sm md:text-base text-brown/80 max-w-3xl leading-relaxed">
                We work with a talented and passionate project-based staff,
                along with equally passionate and committed volunteers who take
                part in our programs as sports coaches, facilitators, and
                organizers.
              </p>
              <Divider centered />
            </ScrollAnimator>

            {/* Row 1 — 3 cards */}
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {teamRow1.map((member, i) => (
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

            {/* Row 2 — 2 cards, centered */}
            <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
              {teamRow2.map((member, i) => (
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

        {/* ── SECTION 7: Mailing List ──────────────────────────────────── */}
        <MailingListCTA />
      </main>

      <Footer />
    </>
  );
}
