import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ScrollAnimator from '@/components/ScrollAnimator';
import Divider from '@/components/Divider';
import MailingListCTA from '@/components/MailingListCTA';

export const metadata = {
  title: 'Volunteer for India 2.0 | Transformational Sports',
  alternates: { canonical: '/volunteer-for-india-2' },
};

export default function VolunteerForIndia2Page() {
  return (
    <>
      <Header />
      <main>
        {/* ============================================
            SECTION 1: Hero
        ============================================ */}
        <Hero title="Volunteer for India 2.0" colors={['#ffc940', '#fff2d6']} />

        {/* ============================================
            SECTION 2: Content with Background Image (Parallax)
        ============================================ */}
        <section
          className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/2-small-1.jpg)' }} />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <ScrollAnimator animation="fade-up">
              <p className="text-lg md:text-2xl text-white leading-relaxed">
                Volunteer for India (VFI) started as a seed idea back in
                2019-20 when Transformational Sports received a grant from the
                U.S. Consulate General Chennai to create India&apos;s first-ever
                youth volunteer network. Before COVID, back in February 2020, we
                gathered the first VFI cohort for a week-long workshop and used
                sports, gender &amp; inclusion teachings to form the backbone of
                their mission.
              </p>
            </ScrollAnimator>

            <ScrollAnimator animation="fade-up" delay="150">
              <p className="mt-6 text-base md:text-lg text-white/80 max-w-3xl leading-relaxed mx-auto">
                We continued to help VFI grow in 2021, nurturing it into a
                full-fledged organization and launching the first Volship
                program. Volship, a 6 week volunteer program, ran across 9
                cities in India, leading selected participants through the
                ideation and implementation of a community volunteer project.
                Though Volship was initially planned as a six week program, it
                was later extended to nine weeks to accommodate the challenges
                brought about by the second wave of COVID.
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
                    400+
                  </span>
                  <span className="mt-2 text-xs font-medium uppercase tracking-[2px] text-white/60">
                    Beneficiaries
                  </span>
                </div>
              </ScrollAnimator>

              <ScrollAnimator animation="fade-up" delay="200">
                <div className="flex flex-col items-center text-center">
                  <span className="text-5xl font-light text-amber">
                    11
                  </span>
                  <span className="mt-2 text-xs font-medium uppercase tracking-[2px] text-white/60">
                    partner organizations
                  </span>
                </div>
              </ScrollAnimator>

              <ScrollAnimator animation="fade-up" delay="300">
                <div className="flex flex-col items-center text-center">
                  <span className="text-5xl font-light text-amber">
                    22
                  </span>
                  <span className="mt-2 text-xs font-medium uppercase tracking-[2px] text-white/60">
                    events/sessions held
                  </span>
                </div>
              </ScrollAnimator>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 4: Mailing List
        ============================================ */}
        <MailingListCTA />
      </main>
      <Footer />
    </>
  );
}
