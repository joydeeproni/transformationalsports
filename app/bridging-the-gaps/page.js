import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ScrollAnimator from '@/components/ScrollAnimator';
import Testimonial from '@/components/Testimonial';
import MailingListCTA from '@/components/MailingListCTA';

export const metadata = {
  title: 'Bridging the Gaps (BTG) | Transformational Sports',
};

export default function BridgingTheGapsPage() {
  return (
    <>
      <Header />
      <main>
        {/* ============================================
            SECTION 1: Hero
        ============================================ */}
        <Hero
          title="Bridging the Gaps (BTG)"
          colors={['#e8a317', '#ffe4a3']}
        />

        {/* ============================================
            SECTION 2: About the Program
        ============================================ */}
        <section
          className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/BTG-Day_1-15.jpeg)' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <ScrollAnimator animation="fade-up">
              <p className="text-lg md:text-2xl font-normal text-white/80 leading-relaxed">
                Bridging the Gaps (BTG) is the flagship initiative of Transformational Sports, launched in 2014 with camps in Auroville. We utilize the power of mixed-gender sports and curriculum-based dialogues to empower young leaders to challenge long-standing stereotypes and break gender barriers in their communities.
              </p>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 3: Our Core Pillars
        ============================================ */}
        <section className="bg-gray-50 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-up">
              <h3 className="text-center text-2xl font-light tracking-tight text-near-black md:text-3xl">
                Our Core Pillars
              </h3>
            </ScrollAnimator>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <ScrollAnimator animation="fade-up" delay="100">
                <div className="h-full rounded-md border border-black/5 bg-white p-8 text-center shadow-sm">
                  <h4 className="text-lg font-medium text-near-black">Mixed-Gender Play</h4>
                  <p className="mt-4 text-sm text-brown/80 leading-relaxed">
                    By playing non-contact sports like Ultimate Frisbee together, boys and girls learn mutual respect, communication, and teamwork, directly challenging cultural barriers.
                  </p>
                </div>
              </ScrollAnimator>

              <ScrollAnimator animation="fade-up" delay="200">
                <div className="h-full rounded-md border border-black/5 bg-white p-8 text-center shadow-sm">
                  <h4 className="text-lg font-medium text-near-black">Gender Dialogues</h4>
                  <p className="mt-4 text-sm text-brown/80 leading-relaxed">
                    Facilitated sessions addressing key themes including reproductive health, media stereotyping, gender-based violence, and relationship dynamics.
                  </p>
                </div>
              </ScrollAnimator>

              <ScrollAnimator animation="fade-up" delay="300">
                <div className="h-full rounded-md border border-black/5 bg-white p-8 text-center shadow-sm">
                  <h4 className="text-lg font-medium text-near-black">Youth Leadership</h4>
                  <p className="mt-4 text-sm text-brown/80 leading-relaxed">
                    Empowering senior and junior coaches to become facilitators of social change, carrying these teachings back to their respective schools and neighborhoods.
                  </p>
                </div>
              </ScrollAnimator>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 4: Testimonial
        ============================================ */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-[90%] px-6 md:max-w-[65%]">
            <ScrollAnimator animation="fade-up">
              <Testimonial
                quote="Bridging the Gaps showed me that sports are not just for winning or for boys. It showed us how we can play as equals, support each other, and talk openly about things like puberty and stereotypes that we used to be too shy to mention."
                author="BTG Camp Participant, Auroville"
              />
            </ScrollAnimator>
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
