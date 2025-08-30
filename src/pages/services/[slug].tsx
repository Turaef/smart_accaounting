import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { services } from '../../components/ServicesSection';
import Link from 'next/link';
import { FiArrowLeft, FiCheckCircle, FiPhone } from 'react-icons/fi';

const ServiceDetail: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  
  // Find the service with the matching slug
  const service = services.find((s) => s.slug === slug || s.url === router.asPath);
  
  // If slug is undefined (loading) or service not found
  if (!service) {
    return (
      <Layout>
        <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            {!router.isReady ? (
              <div className="animate-pulse">
                <div className="h-8 w-64 bg-gray-200 rounded mb-4 mx-auto"></div>
                <div className="h-4 w-40 bg-gray-200 rounded mx-auto"></div>
              </div>
            ) : (
              <>
                <h1 className="text-3xl font-bold mb-4">Услуга не найдена</h1>
                <p className="text-gray-600 mb-8">К сожалению, запрашиваемая услуга не существует</p>
                <Link 
                  href="/services" 
                  className="bg-[#c9a875] hover:bg-[#b8956a] text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  <FiArrowLeft className="mr-2" />
                  Вернуться к списку услуг
                </Link>
              </>
            )}
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <Head>
                  <title>{service.title} - Smart Accounting</title>
        <meta name="description" content={service.description} />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#fcfcfc] text-[#2e2e2e] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center text-gray-600 mb-6" data-aos="blur-in">
            <Link href="/services" className="hover:text-[#c9a875] transition-colors flex items-center">
              <FiArrowLeft className="mr-2" />
              <span>Все услуги</span>
            </Link>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="blur-in" data-aos-delay="100">
              {service.title}
            </h1>
            <p className="text-xl mb-8 text-gray-600" data-aos="blur-in" data-aos-delay="200">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3" data-aos="blur-in" data-aos-delay="300">
              <div className="bg-white p-10 rounded-2xl shadow-lg mb-10">
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: service.fullDescription }}></div>
              </div>
            </div>
            
            <div className="lg:w-1/3" data-aos="blur-in" data-aos-delay="400">
              <div className="sticky top-24">
                <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
                  <h3 className="text-xl font-semibold mb-6">Почему выбирают нас?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <FiCheckCircle className="text-[#c9a875] mt-1 mr-3 flex-shrink-0" />
                      <span>Профессиональная команда специалистов</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-[#c9a875] mt-1 mr-3 flex-shrink-0" />
                      <span>Индивидуальный подход к каждому клиенту</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-[#c9a875] mt-1 mr-3 flex-shrink-0" />
                      <span>Доступные цены и гибкие условия оплаты</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-[#c9a875] mt-1 mr-3 flex-shrink-0" />
                      <span>Строгое соблюдение сроков</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-[#c9a875] mt-1 mr-3 flex-shrink-0" />
                      <span>Конфиденциальность информации</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-[#c9a875]/5 p-8 rounded-2xl border border-[#c9a875]/10">
                  <h3 className="text-xl font-semibold mb-4">Нужна консультация?</h3>
                  <p className="text-gray-600 mb-6">
                    Свяжитесь с нами для получения подробной информации об услуге "{service.title}"
                  </p>
                  <Link 
                    href="/contact" 
                    className="bg-[#c9a875] hover:bg-[#b8956a] text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center w-full justify-center"
                  >
                    <FiPhone className="mr-2" />
                    Связаться с нами
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#c9a875] to-[#b8956a] rounded-2xl p-12 text-white relative overflow-hidden" data-aos="blur-in">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Готовы начать сотрудничество?</h2>
                <p className="text-white/90 text-lg">
                  Свяжитесь с нами для получения бесплатной консультации по вашему бизнесу
                </p>
              </div>
              <div>
                <Link 
                  href="/contact" 
                  className="bg-white text-[#c9a875] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
                >
                  Получить консультацию
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail; 