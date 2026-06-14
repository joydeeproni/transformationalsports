import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ScrollAnimator from '@/components/ScrollAnimator';
import Divider from '@/components/Divider';
import Testimonial from '@/components/Testimonial';
import MailingListCTA from '@/components/MailingListCTA';

export const metadata = {
  title: 'Volunteer for India | Transformational Sports',
  alternates: { canonical: '/volunteer-for-india' },
};

const infoBoxes = [
  'Thirty-three young adults from across India',
  'Understanding gender and inclusivity',
  'Bringing life-skills through sport',
];

export default function VolunteerForIndiaPage() {
  return (
    <>
      <Header />
      <main>
        {/* ============================================
            SECTION 1: Hero
        ============================================ */}
        <Hero title="Volunteer for India" colors={['#ffb700', '#ffe4a3']} />

        {/* ============================================
            SECTION 2: Content with Background Image & Info Boxes
        ============================================ */}
        <section
          className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/VFIINTERIOR.jpeg)' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-up">
              <p className="mx-auto text-center text-lg md:text-xl text-white leading-relaxed max-w-4xl tracking-tight">
                TS was awarded a second U.S. Consulate grant, this time in
                Chennai, to help lay the foundation for India&apos;s first
                national youth volunteer network. The 9-month program kicked off
                with a four-day immersive workshop in Chennai in February 2020,
                designed along with Wind Dancers Trust (India).
              </p>
            </ScrollAnimator>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {infoBoxes.map((text, i) => (
                <ScrollAnimator
                  key={i}
                  animation="fade-up"
                  delay={String(i * 100)}
                >
                  <div className="rounded-md border border-white/10 bg-white/10 backdrop-blur-sm text-center text-white p-8 md:p-12 min-h-[160px] flex items-center justify-center">
                    <p className="text-base md:text-lg leading-relaxed">{text}</p>
                  </div>
                </ScrollAnimator>
              ))}
            </div>

            <ScrollAnimator animation="fade-up" delay="150">
              <p className="mx-auto mt-16 text-center text-base md:text-lg text-white/80 leading-relaxed max-w-4xl">
                By playing a mixed-gender, non-contact sport like Ultimate
                Frisbee, participants came face-to-face with several long-held
                prejudices and cultural practices that defined their lives, and
                have now found ways to work around it through sport. These
                learnings have become the foundations of the Volunteer for India
                initiative.
              </p>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 3: Impact
        ============================================ */}
        <section className="bg-brown py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-up">
              <h3 className="text-center text-3xl font-light tracking-tight text-white md:text-4xl">
                Impact
              </h3>
              <Divider color="#FFB23E" centered />
            </ScrollAnimator>

            <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-3">
              <ScrollAnimator animation="fade-up" delay="100">
                <div className="flex flex-col items-center text-center">
                  <span className="text-5xl font-light text-amber">
                    1,650+
                  </span>
                  <span className="mt-2 text-xs font-medium uppercase tracking-[2px] text-white/60">
                    people reached
                  </span>
                </div>
              </ScrollAnimator>

              <ScrollAnimator animation="fade-up" delay="200">
                <div className="flex flex-col items-center text-center">
                  <span className="text-5xl font-light text-amber">
                    24
                  </span>
                  <span className="mt-2 text-xs font-medium uppercase tracking-[2px] text-white/60">
                    states
                  </span>
                </div>
              </ScrollAnimator>

              <ScrollAnimator animation="fade-up" delay="300">
                <div className="flex flex-col items-center text-center">
                  <span className="text-5xl font-light text-amber">
                    4
                  </span>
                  <span className="mt-2 text-xs font-medium uppercase tracking-[2px] text-white/60">
                    union territories
                  </span>
                </div>
              </ScrollAnimator>
            </div>

            <ScrollAnimator animation="fade-up" delay="150">
              <p className="mx-auto mt-16 text-center text-sm md:text-base text-white/80 max-w-2xl leading-relaxed">
                Post grant, TS selected two directors to take Volunteer for
                India forward.
              </p>
              <div className="mt-6 text-center">
                <a
                  href="http://www.volunteerforindia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-amber hover:text-amber-light font-medium transition-all"
                >
                  Visit volunteerforindia.com
                  <span className="text-base">&rarr;</span>
                </a>
              </div>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 4: Testimonials
        ============================================ */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-6">
            <Divider centered />

            <div className="mt-12 flex flex-col gap-12">
              <ScrollAnimator animation="fade-up">
                <Testimonial
                  quote="What was the most useful session at the workshop? Ultimate Frisbee. The game taught me inclusiveness, gender neutrality and the importance of caring for each other."
                  author="K, age 21"
                />
              </ScrollAnimator>

              <ScrollAnimator animation="fade-up" delay="150">
                <Testimonial
                  quote="Inclusion now comes to me more naturally; I'm more conscious about it. I think I've also learnt to be more flexible and leave a few things undone for the rest to take ownership. I now have a broader mindset, am more compassionate, more loving, and more accepting."
                  author="S, age 21"
                />
              </ScrollAnimator>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 5: Mailing List
        ============================================ */}
        <MailingListCTA />
      </main>
      <Footer />
    </>
  );
}
