import Link from 'next/link';
import { getAllCountryCodes, getCountry } from '@/lib/utils';
import { getServicesContent } from '@/data/content';

export async function generateStaticParams() {
  return getAllCountryCodes().map((code) => ({ country: code }));
}

export async function generateMetadata({ params }) {
  const { getSeoMeta } = await import('@/data/content');
  return getSeoMeta(params.country, 'services');
}

export default function ServicesPage({ params }) {
  const { country } = params;
  const content = getServicesContent(country);
  const theme = getCountry(country).theme;

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            {content.title}
          </h1>
          <p className="text-xl text-primary-600 font-semibold mb-6">
            {content.subtitle}
          </p>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
            {content.description}
          </p>
          <div className="mt-8">
            <Link
              href={`/${country}/faq/`}
              className="inline-flex items-center px-6 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-xl hover:bg-primary-700 transition-colors"
            >
              FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {content.features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-primary-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-2xl mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 lg:py-20 relative overflow-hidden"
        style={{ background: theme.gradient }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {content.ctaTitle}
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            {content.ctaDescription}
          </p>
          <Link
            href={`/${country}/contact/`}
            className="inline-flex items-center px-8 py-3.5 bg-white font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg"
            style={{ color: theme.brand }}
          >
            {content.ctaButton}
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
