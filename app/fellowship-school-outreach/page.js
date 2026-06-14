import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ScrollAnimator from '@/components/ScrollAnimator';
import Testimonial from '@/components/Testimonial';
import MailingListCTA from '@/components/MailingListCTA';

export const metadata = {
  title: 'Fellowship & School Outreach Program | Transformational Sports',
  alternates: { canonical: '/fellowship-school-outreach' },
};

const partnerOrgs = [
  { name: 'Kriya/Mahindra United World College India', location: 'Pune' },
  { name: 'Auroville Village Action Group', location: 'Auroville' },
  { name: 'Arunodhaya Centre for Street & Working Children', location: 'Chennai' },
  { name: 'Auroville Ultimate', location: 'Auroville' },
  { name: 'Lavad Primary School', location: 'Ahmedabad' },
  { name: 'Rainbow Home', location: 'Kolkata' },
  { name: 'Surat Ultimate', location: 'Surat' },
  { name: 'Bachapan Banao', location: 'Chattisgarh' },
  { name: 'Teach for India', location: 'Hyderabad' },
];

export default function FellowshipSchoolOutreachPage() {
  return (
    <>
      <Header />
      <main>
        {/* ============================================
            SECTION 1: Hero
        ============================================ */}
        <Hero title="Fellowship & School Outreach Program" colors={['#ffa40d', '#ffeabd']} />

        {/* ============================================
            SECTION 2: Content with Background Image
        ============================================ */}
        <section
          className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/BTG-Day_1-15.jpeg)' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <ScrollAnimator animation="fade-up">
              <p className="text-base md:text-lg leading-relaxed text-white/80">
                In 2017, TS created its first fellowship in partnership with the
                Wind Dancers Trust (India) where we selected 21 fellows from NGOs
                across India working with teen populations and interested in using
                sports for building gender equity. After being trained in an
                immersion-style, dynamic four-session sport and gender module, the
                fellows returned to their home towns to teach a minimum of 100
                school students each a curriculum of Ultimate Frisbee and our
                gender module topics: sex, gender &amp; stereotypes; reproductive
                health; media &amp; gender; and gender-based violence.
              </p>
            </ScrollAnimator>

            <ScrollAnimator animation="fade-up" delay="150">
              <div className="mt-12 flex flex-col items-center">
                <span className="text-5xl font-light text-amber">
                  3,000+
                </span>
                <span className="mt-2 text-xs font-medium uppercase tracking-[2px] text-white/60">
                  youth and young adults impacted
                </span>
              </div>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 3: Partner Organizations Grid
        ============================================ */}
        <section className="bg-gray-50 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-up">
              <h3 className="text-center text-2xl font-light tracking-tight text-near-black md:text-3xl">
                Partner Organizations
              </h3>
            </ScrollAnimator>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {partnerOrgs.map((org, i) => (
                <ScrollAnimator
                  key={org.name}
                  animation="fade-up"
                  delay={String((i % 3) * 100)}
                >
                  <div className="rounded-md border border-black/5 bg-white p-6 flex flex-col justify-between min-h-[120px]">
                    <p className="text-base font-medium text-near-black">
                      {org.name}
                    </p>
                    <p className="mt-2 text-xs font-medium uppercase tracking-[2px] text-brown/70">
                      {org.location}
                    </p>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 4: Follow-up Text
        ============================================ */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6">
            <ScrollAnimator animation="fade-up">
              <p className="text-center text-sm md:text-base leading-relaxed text-brown/80">
                Since then, TS has worked with several schools in rural Tamil
                Nadu and with schools in Chennai, along with our long-time
                collaborator and staff member, Thilaga, based in Kanchipuram,
                Tamil Nadu.
              </p>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 5: Testimonials
        ============================================ */}
        <section className="bg-gray-50 py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex flex-col gap-12">
              <ScrollAnimator animation="fade-up">
                <Testimonial
                  quote="I always knew that women faced a lot of hardship in India and never knew what to do about it. This fellowship has given me strategies not only to change my attitude but also talk to my friends about how to change things."
                  author="B, age 17"
                />
              </ScrollAnimator>

              <ScrollAnimator animation="fade-up" delay="150">
                <Testimonial
                  quote="I learned to be open with everyone. And I learned that boys and girls should be equal. And I should not be shy of my period. And shouldn't be shy to say that I have my period. Because boys should know about us and what is happening in our bodies and we should also know about boys' bodies."
                  author="R, age 13"
                />
              </ScrollAnimator>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 6: Mailing List
        ============================================ */}
        <MailingListCTA />
      </main>
      <Footer />
    </>
  );
}
