import Link from 'next/link';
import { getDefaultCountryCode } from '@/lib/utils';

export default function NotFound() {
  const defaultCountry = getDefaultCountryCode();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-light">
      <div className="text-center px-4">
        <div className="text-8xl font-extrabold text-primary-600 mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">页面未找到</h1>
        <p className="text-gray-500 mb-8">您访问的页面不存在或已被移除</p>
        <Link
          href={`/${defaultCountry}/`}
          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
        >
          返回首页
        </Link>
      </div>
    </div>
  );
}
