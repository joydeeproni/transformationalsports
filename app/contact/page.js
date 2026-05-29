import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ScrollAnimator from '@/components/ScrollAnimator';

export const metadata = {
  title: 'Contact Us | Transformational Sports',
};

/* ── Icons ──────────────────────────────────────────────────────────────── */
const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </svg>
);

const ChatIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
);

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" />
    <path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
);

const HandIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8V6a2 2 0 00-2-2H4a2 2 0 00-2 2v7a2 2 0 002 2h8" />
    <path d="M15 11h2a2 2 0 012 2v2a2 2 0 01-2 2h-2" />
    <path d="M12 15v4a2 2 0 002 2h4a2 2 0 002-2v-4" />
  </svg>
);

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ────────────────────────────────────────────────────── */}
        <Hero title="Contact us" colors={['#ffd89f', '#fff4e0']} />

        {/* ── Contact Cards ───────────────────────────────────────────── */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-6">
            {/* Primary card — Support Us */}
            <ScrollAnimator animation="fade-up">
              <div className="rounded-md border border-black/5 bg-gray-50 p-8 md:p-10">
                <div className="text-amber-dark">
                  <HeartIcon />
                </div>
                <h2 className="mt-5 text-2xl font-light text-near-black md:text-3xl tracking-tight">
                  Support us
                </h2>
                <p className="mt-2 text-base text-brown/60 leading-relaxed">
                  Help fund our programs and advance gender equity through sport.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <a
                    href="mailto:team@transformationalsports.org?subject=Donation%20Inquiry"
                    className="btn-primary text-sm"
                  >
                    Donate now
                  </a>
                  <span className="text-xs text-brown/40">Every contribution makes a difference</span>
                </div>
              </div>
            </ScrollAnimator>

            {/* Three secondary cards */}
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Talk To Us */}
              <ScrollAnimator animation="fade-up" delay="100">
                <div className="h-full rounded-md border border-black/5 bg-gray-50 p-6 flex flex-col">
                  <div className="text-amber-dark">
                    <ChatIcon />
                  </div>
                  <h3 className="mt-4 text-base font-medium text-near-black">
                    Talk to us
                  </h3>
                  <p className="mt-1.5 text-sm text-brown/60 leading-relaxed flex-1">
                    Reach out on social media.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <a
                      href="https://www.linkedin.com/company/transformational-sports/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-xs py-2 px-3"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://www.instagram.com/transformationalsports/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-xs py-2 px-3"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </ScrollAnimator>

              {/* Email Us */}
              <ScrollAnimator animation="fade-up" delay="200">
                <div className="h-full rounded-md border border-black/5 bg-gray-50 p-6 flex flex-col">
                  <div className="text-amber-dark">
                    <MailIcon />
                  </div>
                  <h3 className="mt-4 text-base font-medium text-near-black">
                    Email us
                  </h3>
                  <p className="mt-1.5 text-sm text-brown/60 leading-relaxed flex-1">
                    We respond within 48 hours.
                  </p>
                  <div className="mt-5">
                    <a
                      href="mailto:team@transformationalsports.org"
                      className="btn-outline text-xs py-2 px-3"
                    >
                      Send email
                    </a>
                  </div>
                </div>
              </ScrollAnimator>

              {/* Volunteer For Us */}
              <ScrollAnimator animation="fade-up" delay="300">
                <div className="h-full rounded-md border border-black/5 bg-gray-50 p-6 flex flex-col">
                  <div className="text-amber-dark">
                    <UsersIcon />
                  </div>
                  <h3 className="mt-4 text-base font-medium text-near-black">
                    Volunteer for us
                  </h3>
                  <p className="mt-1.5 text-sm text-brown/60 leading-relaxed flex-1">
                    Join our team and make impact.
                  </p>
                  <div className="mt-5">
                    <a
                      href="mailto:team@transformationalsports.org?subject=Volunteer%20Inquiry"
                      className="btn-outline text-xs py-2 px-3"
                    >
                      Get involved
                    </a>
                  </div>
                </div>
              </ScrollAnimator>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
