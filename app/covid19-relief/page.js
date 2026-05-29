import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ScrollAnimator from '@/components/ScrollAnimator';
import MailingListCTA from '@/components/MailingListCTA';

export const metadata = {
  title: 'COVID-19 Relief | Transformational Sports',
};

const featureBoxes = [
  'Distribution of rations & supplies to the hardest-hit families',
  'Delivery of 10 oxygen cylinders to Cheyyar Hospital',
  'Vaccination awareness campaign in Ranipet and Tiruvannamalai',
  'The program spread correct information about COVID-19 & vaccines',
];

export default function Covid19ReliefPage() {
  return (
    <>
      <Header />
      <main>
        {/* ============================================
            SECTION 1: Hero
        ============================================ */}
        <Hero title="COVID-19 Relief" colors={['#ffba60', '#ffe8c2']} />

        {/* ============================================
            SECTION 2: Content with Background Image
        ============================================ */}
        <section
          className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/Photo-from-Liz-3-1.jpg)' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <ScrollAnimator animation="fade-up">
              <p className="text-lg md:text-2xl font-normal text-white/80 leading-relaxed">
                In 2020 and 2021, TS raised over $27,000 USD in donations for
                the many Indian families severely affected by COVID-19 in rural
                Tamil Nadu and North Chennai.
              </p>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 3: Four Feature Boxes
        ============================================ */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {featureBoxes.map((text, i) => (
                <ScrollAnimator
                  key={i}
                  animation="fade-up"
                  delay={String(i * 100)}
                >
                  <div className="rounded-md border border-black/5 bg-white p-8 text-center shadow-sm min-h-[160px] flex items-center justify-center">
                    <p className="text-sm md:text-base leading-relaxed text-brown">
                      {text}
                    </p>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 4: Partnership Text
        ============================================ */}
        <section className="bg-gray-50 py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6">
            <ScrollAnimator animation="fade-up">
              <p className="text-center text-base md:text-lg text-brown/80 leading-relaxed">
                In partnership with{' '}
                <strong className="font-medium text-near-black">Katradi</strong> and{' '}
                <strong className="font-medium text-near-black">Arunodhaya Centre for Street and Working Children</strong>
              </p>
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
