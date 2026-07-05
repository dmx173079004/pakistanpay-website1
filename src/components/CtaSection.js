import Link from 'next/link';
import { getCountry } from '@/lib/utils';

export default function CtaSection({ content, countryCode }) {
  const theme = getCountry(countryCode).theme;

  return (
    <section
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{ background: theme.gradient }}
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          {content.ctaTitle}
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          {content.ctaDescription}
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <Link
            href={`/${countryCode}/contact/`}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg"
            style={{ color: theme.brand }}
          >
            {content.ctaButton}
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href={`/${countryCode}/about/`}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-black/20 text-white font-semibold rounded-xl border border-white/30 hover:bg-black/30 transition-all duration-200"
          >
            了解更多
          </Link>
        </div>
      </div>
    </section>
  );
}
