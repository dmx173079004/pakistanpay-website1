'use client';

import Link from 'next/link';
import { getCountry } from '@/lib/utils';

export default function HeroSection({ content, countryCode }) {
  const country = getCountry(countryCode);
  const theme = country.theme;

  return (
    <section
      className="relative min-h-[85vh] flex items-center overflow-hidden"
      style={{ backgroundColor: theme.bgLight }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl"
          style={{ backgroundColor: theme.lightBgDeco }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl"
          style={{ backgroundColor: theme.lightBgDeco }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full"
          style={{ backgroundColor: theme.brand, opacity: 0.2 }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full"
          style={{ backgroundColor: theme.brand, opacity: 0.15 }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full"
          style={{ backgroundColor: theme.accent, opacity: 0.2 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div className="space-y-6 animate-fade-in-up">
            <div
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{ backgroundColor: `${theme.brand}15`, color: theme.brandDark }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: theme.brand }}
              />
              <span>24小时稳定运营</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              {content.hero.title}
            </h1>

            <p className="text-xl sm:text-2xl font-semibold" style={{ color: theme.brand }}>
              {content.hero.subtitle}
            </p>

            <p className="text-lg text-gray-500">
              {content.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <Link
                href={content.hero.ctaLink}
                className="inline-flex items-center justify-center px-8 py-3.5 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 animate-pulse-glow"
                style={{ backgroundColor: theme.brand }}
              >
                {content.hero.ctaText}
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href={`/${countryCode}/services/`}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white font-semibold rounded-xl border-2 transition-all duration-200"
                style={{ borderColor: `${theme.brand}40`, color: theme.brand }}
              >
                了解更多
              </Link>
            </div>
          </div>

          {/* Right: Country Flag Visual */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in-up">
            <div className="relative">
              {/* Large decorative block with flag colors */}
              <div
                className="w-80 h-80 rounded-3xl rotate-6"
                style={{
                  background: theme.gradient,
                  opacity: 0.12,
                }}
              />
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  {/* Flag circle - main visual */}
                  <div
                    className="w-28 h-28 mx-auto rounded-full flex items-center justify-center text-6xl shadow-xl border-4"
                    style={{
                      backgroundColor: theme.bgLight,
                      borderColor: theme.brand,
                    }}
                  >
                    {country.flag}
                  </div>
                  {/* Country name */}
                  <div className="mt-5">
                    <span
                      className="text-lg font-bold px-4 py-1.5 rounded-full"
                      style={{
                        backgroundColor: `${theme.brand}12`,
                        color: theme.brandDark,
                      }}
                    >
                      {country.name}
                    </span>
                  </div>
                  <p
                    className="text-sm mt-3"
                    style={{ color: theme.brand, opacity: 0.6 }}
                  >
                    Trusted by 850+ merchants
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
