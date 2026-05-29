import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ScrollAnimator from '@/components/ScrollAnimator';
import MailingListCTA from '@/components/MailingListCTA';

export const metadata = {
  title: 'Virtual Coach Training | Transformational Sports',
};

const courses = [
  {
    level: 'Level 1',
    subtitle: 'Building Strong Mixed-Gender Teams',
    backgroundImage:
      '/images/thumb21.jpg',
    href: '/virtual-coach-training',
  },
  {
    level: 'Level 2',
    subtitle: 'Puberty & Teen Relationships on Mixed-Gender Teams',
    backgroundImage:
      '/images/thumb11.png',
    href: '/puberty-teen-relationships',
  },
];

export default function VirtualCoachTrainingChoicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* ============================================
            SECTION 1: Hero
        ============================================ */}
        <Hero title="Virtual Coach Training" colors={['#e8a317', '#ffebb0']} />

        {/* ============================================
            SECTION 2: Two Course Cards
        ============================================ */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {courses.map((course, i) => (
                <ScrollAnimator
                  key={course.level}
                  animation="fade-up"
                  delay={String(i * 150)}
                >
                  <Link
                    href={course.href}
                    className="group relative flex min-h-[380px] flex-col items-start justify-end overflow-hidden rounded-md bg-cover bg-center transition-shadow duration-300 hover:shadow-md"
                    style={{
                      backgroundImage: `url(${course.backgroundImage})`,
                    }}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/75" />

                    {/* Content — bottom-aligned, left-aligned */}
                    <div className="relative z-10 flex flex-col items-start gap-2.5 px-8 pb-10">
                      <span className="text-xs font-medium uppercase tracking-[2px] text-amber">
                        {course.level}
                      </span>
                      <h3 className="text-xl font-light tracking-tight text-white md:text-2xl lg:text-3xl max-w-[90%] leading-snug">
                        {course.subtitle}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-white/80 group-hover:text-white transition-colors duration-200 mt-2">
                        View course <span className="transform transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
                      </span>
                    </div>
                  </Link>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 3: Mailing List
        ============================================ */}
        <MailingListCTA />
      </main>
      <Footer />
    </>
  );
}
