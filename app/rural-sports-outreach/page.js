import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ScrollAnimator from '@/components/ScrollAnimator';
import Divider from '@/components/Divider';
import Testimonial from '@/components/Testimonial';
import MailingListCTA from '@/components/MailingListCTA';

export const metadata = {
  title: 'Rural Sports Outreach | Transformational Sports',
  alternates: { canonical: '/rural-sports-outreach' },
};

export default function RuralSportsOutreachPage() {
  return (
    <>
      <Header />
      <main>
        {/* ============================================
            SECTION 1: Hero
        ============================================ */}
        <Hero title="Rural Sports Outreach" colors={['#FFD89F', '#fff8eb']} />

        {/* ============================================
            SECTION 2: Content with Background Image
        ============================================ */}
        <section
          className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/Rural-Sports-Outreach-1-1.jpg)' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <ScrollAnimator animation="fade-up">
              <p className="text-lg md:text-2xl text-white leading-relaxed tracking-tight">
                Rural Sports Outreach kicked off in 2021 with a mixed-gender
                sports program for youth in Kalavai Kootroad Village in rural
                Tamil Nadu. The multi-sport program uses a mix of Ultimate
                Frisbee, fitness training and traditional games such as kabaddi
                &amp; weekly gender sessions.
              </p>
            </ScrollAnimator>

            <ScrollAnimator animation="fade-up" delay="150">
              <p className="mx-auto mt-8 text-base md:text-lg text-white/80 max-w-3xl leading-relaxed">
                A regular group of 25 youth, from primary schoolers to teens,
                attend. Additionally, weekend workshops with guest coaches bring
                youth from nearby villages attending as well, totaling 60
                participants.
              </p>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 3: Testimonial
        ============================================ */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto px-6 max-w-4xl">
            <ScrollAnimator animation="fade-up">
              <Testimonial
                quote="When we play normally boys are not giving chance to girls. But when you conduct the session, the boys care about the girls and give the opportunity to them because we are a team."
                author="S, female player, age 13"
              />
            </ScrollAnimator>

            <ScrollAnimator animation="fade-up" delay="150">
              <div className="mt-10 text-center">
                <Divider centered />
                <p className="text-xs font-medium uppercase tracking-[2px] text-brown/70 leading-relaxed max-w-md mx-auto">
                  Thilaga Palani, Rural Sport Outreach Program Manager
                </p>
              </div>
            </ScrollAnimator>
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
