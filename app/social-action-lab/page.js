import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ScrollAnimator from '@/components/ScrollAnimator';
import Divider from '@/components/Divider';
import Testimonial from '@/components/Testimonial';
import MailingListCTA from '@/components/MailingListCTA';

export const metadata = {
  title: 'Social Action Lab | Transformational Sports',
  alternates: { canonical: '/social-action-lab' },
};

const featureCards = [
  {
    text: 'Six projects on the themes of gender equity, reproductive health and gender-based violence were selected',
  },
  {
    text: 'Project leaders were paired with mentors from NGOs across the Kolkata Consular Region',
  },
  {
    text: 'Projects were implemented in Delhi, Bihar, Jharkhand, West Bengal, Assam and Meghalaya, in both rural and urban areas',
  },
  {
    text: 'In July 2019, the 6 project leaders presented at our culminating Lessons Learned event where over 100+ Kolkata school students attended',
  },
];

export default function SocialActionLabPage() {
  return (
    <>
      <Header />
      <main>
        {/* ============================================
            SECTION 1: Hero
        ============================================ */}
        <Hero title="Social Action Lab" colors={['#D58816', '#ffd48a']} />

        {/* ============================================
            SECTION 2: Content with Background Image
        ============================================ */}
        <section
          className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/Social-ActionLabInterior.jpeg)' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <ScrollAnimator animation="fade-up">
              <p className="text-lg md:text-2xl text-white leading-relaxed tracking-tight">
                Our first U.S. Consulate grant with the American Center,
                Kolkata, began with a five-day workshop in February 2019
                focusing on gender equity, leadership and team-building sessions
                with 28 young change-makers from across North and East India.
                TS, in partnership with Wind Dancers Trust (India), used sport
                and art in unorthodox ways to build gender dialogues.
              </p>
            </ScrollAnimator>

            <ScrollAnimator animation="fade-up" delay="150">
              <div className="mt-12 flex flex-col items-center">
                <span className="text-5xl font-light text-amber">
                  700+
                </span>
                <span className="mt-2 text-xs font-medium uppercase tracking-[2px] text-white/60">
                  youth and adults impacted
                </span>
              </div>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 3: Feature Cards Grid
        ============================================ */}
        <section className="bg-cream py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {featureCards.map((card, i) => (
                <ScrollAnimator
                  key={i}
                  animation="fade-up"
                  delay={String(i * 100)}
                >
                  <div className="flex items-center justify-center rounded-md border border-black/5 bg-white p-8 md:p-12 text-center shadow-sm transition-all duration-300 hover:shadow-md min-h-[160px]">
                    <p className="text-sm md:text-base leading-relaxed text-brown">
                      {card.text}
                    </p>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
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
                  quote="I never thought I would be capable of leading such a project since I don't speak English and I'm not highly educated. Everything was such a challenge for me. But it has been my passion for a long time to go back to the red-light area from where I come and work with the women who are still there."
                  author="S, age 31"
                />
              </ScrollAnimator>

              <ScrollAnimator animation="fade-up" delay="150">
                <Testimonial
                  quote="They all feel there should be no discrimination; they all feel there is discrimination; they all want to be a part of a change."
                  author="A, age 20"
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
