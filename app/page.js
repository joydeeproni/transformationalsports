import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';
import ScrollAnimator from '@/components/ScrollAnimator';
import SectionLabel from '@/components/SectionLabel';
import Divider from '@/components/Divider';
import Counter from '@/components/Counter';
import MailingListCTA from '@/components/MailingListCTA';
import ScrollRevealText from '@/components/ScrollRevealText';

export const metadata = {
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* ============================================
            SECTION 1: Hero Slider
        ============================================ */}
        <HeroSlider />

        {/* ============================================
            SECTION 2: Quote — Scroll Reveal Word by Word
        ============================================ */}
        <ScrollRevealText
          questions={[
            'What if you played a mixed-gender sport for the first time?',
            'What if your coach was well-versed in the challenges of mixed-gender teams and could create an environment where all players could thrive?',
            'What if you could learn from that coach?',
            'What if entire communities participated in mixed-gender programs that taught not just the sport but the tenets of equality, sensitivity, respect and empathy?',
            'What if you could develop a new set of skills that allowed you to view gender, and the relationships between genders, differently?',
            'What if a new generation of coaches and players took these skills and created a new norm?',
          ]}
          highlight="When we play the game differently, we view the world differently."
        />

        {/* ============================================
            SECTION 3: About Us / Who Are We
        ============================================ */}
        <section className="bg-gray-50 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              {/* Left column */}
              <ScrollAnimator animation="fade-right">
                <SectionLabel text="About us" centered={false} />
                <h2 className="mt-4 text-3xl font-light tracking-tight text-near-black md:text-4xl leading-tight">
                  Who are we?
                </h2>
                <Divider />
                <p className="mt-6 text-brown text-sm md:text-base leading-relaxed">
                  Transformational Sports is a female-led, inclusive, non-profit
                  organization committed to working with people who want to bring
                  about a change in the mindset, perspective and reality of
                  gender through mixed-gender sports. We primarily work in India
                  where stark gender inequities exist and women are traditionally
                  not encouraged to play sports.
                </p>
                <div className="mt-8">
                  <Link
                    href="/about"
                    className="text-link inline-flex items-center gap-1.5 text-sm"
                  >
                    Read about our journey here
                    <span className="text-base">&rarr;</span>
                  </Link>
                </div>
              </ScrollAnimator>

              {/* Right column */}
              <ScrollAnimator animation="fade-left">
                <Image
                  src="/images/so-5-1-1536x1017-1.jpg"
                  alt="Transformational Sports team in action"
                  width={700}
                  height={464}
                  className="w-full rounded-md object-cover shadow-sm border border-black/5"
                />
              </ScrollAnimator>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 4: Programs / What Do We Do
        ============================================ */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-up">
              <div className="text-center max-w-4xl mx-auto">
                <SectionLabel text="Programs" centered />
                <h2 className="mt-4 text-3xl font-light tracking-tight text-near-black md:text-4xl leading-tight">
                  What do we do?
                </h2>
                <Divider centered />
                <p className="mt-6 text-brown text-base md:text-lg leading-relaxed">
                  We create programs, conduct workshops and offer online
                  certifications to train a new generation of coaches,
                  facilitators and teams in mixed-gender play and gender equity.
                  We also incubate sports-for-development projects that focus on
                  improving gender inequities in marginalized communities. We can
                  take any sport and modify it to teach the fundamentals of
                  equality and inclusion, and to care about these fundamentals
                  more than winning.
                </p>
                <div className="mt-8">
                  <Link
                    href="/programs"
                    className="text-link inline-flex items-center gap-1.5 text-sm"
                  >
                    These are the programs we offer
                    <span className="text-base">&rarr;</span>
                  </Link>
                </div>
              </div>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 5: Mission (Dark Hero)
        ============================================ */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url(/images/screenshot_2020_12_2_Fo1wv.jpg)',
            }}
          />
          {/* Gradient overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-right" className="max-w-xl">
              <SectionLabel text="Mission" light centered={false} />
              <h2 className="mt-4 text-3xl font-light tracking-tight text-white md:text-4xl leading-tight">
                Why do we do this?
              </h2>
              <Divider color="#FFB23E" />
              <p className="mt-6 text-white/80 text-sm md:text-base leading-relaxed">
                Across the world today, we are faced with staggering problems
                related to gender, be it at home or at work. We believe that
                sports, if taught with the intention of equality and
                inclusivity, can transform our society into one that nurtures a
                deep respect for all people, regardless of gender.
              </p>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 6: Who Is This For?
        ============================================ */}
        <section className="bg-gray-50 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <ScrollAnimator animation="fade-up">
              <h2 className="text-3xl font-light tracking-tight text-near-black md:text-4xl leading-tight">
                Who is this for?
              </h2>
              <Divider centered />
              <p className="mx-auto mt-6 max-w-[700px] text-brown text-base md:text-lg leading-relaxed">
                Any individual, non-profit organization or team that would like
                to learn about or use sports-based programs to bridge the gaps of
                gender.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="text-link inline-flex items-center gap-1.5 text-sm"
                >
                  Join our community
                  <span className="text-base">&rarr;</span>
                </Link>
              </div>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 7: Our Impact (Gold Banner)
        ============================================ */}
        <section className="bg-cream py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-center text-3xl font-light tracking-tight text-near-black md:text-4xl leading-tight">
              Our Impact
            </h2>
            <Divider centered />
            <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-3">
              <ScrollAnimator animation="fade-up" delay="100">
                <Counter
                  number="400+"
                  label="Coaches & Facilitators Trained in Gender & Sports"
                  icon="/images/ic3-1.png"
                />
              </ScrollAnimator>
              <ScrollAnimator animation="fade-up" delay="200">
                <Counter
                  number="6000+"
                  label="Youth & Young Adults Impacted"
                  icon="/images/ic2-1.png"
                />
              </ScrollAnimator>
              <ScrollAnimator animation="fade-up" delay="300">
                <Counter
                  number="70+"
                  label="Organizations Impacted"
                  icon="/images/ic1-1.png"
                />
              </ScrollAnimator>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 8: Our Partners
        ============================================ */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-up">
              <h2 className="text-center text-2xl font-light tracking-tight text-near-black md:text-3xl leading-tight">
                Our Partners
              </h2>
              <Divider centered />
              <div className="mt-12 grid grid-cols-1 items-center gap-12 sm:grid-cols-3">
                <a
                  href="https://ariadiscs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center"
                >
                  <img
                    src="/logos/aria-discs.png"
                    alt="Aria Discs"
                    className="h-16 w-auto object-contain opacity-40 transition-all duration-300 hover:opacity-100"
                  />
                </a>
                <a
                  href="https://volunteerforindia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center"
                >
                  <img
                    src="/logos/volunteer-for-india.png"
                    alt="Volunteer for India"
                    className="h-16 w-auto object-contain opacity-40 transition-all duration-300 hover:opacity-100"
                  />
                </a>
                <a
                  href="https://katradi.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center"
                >
                  <img
                    src="/logos/katradi.png"
                    alt="Katradi"
                    className="h-16 w-auto object-contain opacity-40 transition-all duration-300 hover:opacity-100"
                  />
                </a>
              </div>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 9: Mailing List
        ============================================ */}
        <MailingListCTA />
      </main>
      <Footer />
    </>
  );
}
