import { getAllCountryCodes } from '@/lib/utils';
import { getContactContent } from '@/data/content';
import ContactForm from '@/components/ContactForm';

export async function generateStaticParams() {
  return getAllCountryCodes().map((code) => ({ country: code }));
}

export async function generateMetadata({ params }) {
  const { getSeoMeta } = await import('@/data/content');
  return getSeoMeta(params.country, 'contact');
}

export default function ContactPage({ params }) {
  const { country } = params;
  const content = getContactContent(country);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            {content.title}
          </h1>
          <p className="text-xl text-primary-600 font-semibold">
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left: Contact Info */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  联系方式
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">公司</p>
                      <p className="text-gray-900 font-medium">{content.info.company}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">地址</p>
                      <p className="text-gray-900 font-medium">{content.info.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">电话</p>
                      <p className="text-gray-900 font-medium">{content.info.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">邮箱</p>
                      <p className="text-gray-900 font-medium">{content.info.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Telegram</p>
                      <p className="text-gray-900 font-medium">{content.info.telegram}</p>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-2">工作时间</p>
                  <p className="text-gray-900 font-medium">{content.info.workingHours}</p>
                </div>

                {/* Social / Channels */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">
                    {content.socialTitle}
                  </h4>
                  <div className="space-y-3">
                    {content.channels.map((channel) => (
                      <div
                        key={channel.name}
                        className="flex items-center justify-between bg-white rounded-lg p-3 border border-gray-100"
                      >
                        <span className="text-sm text-gray-600">{channel.name}</span>
                        <span className="text-sm text-primary-600 font-medium">{channel.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <div className="bg-white border border-gray-100 rounded-2xl p-8 lg:p-10 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {content.formTitle}
                </h3>
                <ContactForm content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
