'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { countries, getNavbar } from '@/data/content';
import { getCountry } from '@/lib/utils';

export default function Navbar({ countryCode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  const currentCountry = getCountry(countryCode);
  const nav = getNavbar(countryCode);

  // 点击外部关闭下拉
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCountryOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 切换页面后关闭移动端菜单
  useEffect(() => {
    setMobileOpen(false);
    setCountryOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    // 处理首页高亮
    if (href === `/${countryCode}/` && pathname === `/${countryCode}/`) return true;
    if (href !== `/${countryCode}/` && pathname.startsWith(href.replace(/\/$/, ''))) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link
            href={`/${countryCode}/`}
            className="flex items-center space-x-2 group"
          >
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-base leading-tight group-hover:text-primary-600 transition-colors">
                {nav.logo}
              </span>
              <span className="text-[10px] text-gray-500 leading-tight hidden sm:block">
                {nav.slogan}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: Country Switcher + Contact */}
          <div className="flex items-center space-x-2 sm:space-x-3">

            {/* Country Switcher */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setCountryOpen(!countryOpen)}
                className="flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
              >
                <span className="text-base">{currentCountry.flag}</span>
                <span className="hidden sm:inline text-gray-700 font-medium">
                  {currentCountry.name}
                </span>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    countryOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown */}
              {countryOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 animate-fade-in-up">
                  <div className="px-3 py-1.5 text-xs text-gray-400 font-medium uppercase tracking-wider">
                    {nav.countryLabel}
                  </div>
                  {countries.map((c) => (
                    <Link
                      key={c.code}
                      href={`/${c.code}/`}
                      onClick={() => setCountryOpen(false)}
                      className={`flex items-center space-x-3 px-3 py-2.5 mx-1 rounded-lg text-sm transition-colors ${
                        c.code === countryCode
                          ? 'bg-primary-50 text-primary-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-lg">{c.flag}</span>
                      <span>{c.name}</span>
                      {c.code === countryCode && (
                        <svg className="w-4 h-4 ml-auto text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Button - Desktop */}
            <Link
              href={`/${countryCode}/contact/`}
              className="hidden sm:inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {nav.contactBtn}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white animate-fade-in-up">
          <div className="px-4 py-4 space-y-1">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`/${countryCode}/contact/`}
              className="block px-4 py-3 mt-2 bg-primary-600 text-white text-center text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              {nav.contactBtn}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
