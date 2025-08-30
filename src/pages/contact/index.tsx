import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { FaTelegram, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FiCheck, FiUsers, FiShield, FiArrowRight } from 'react-icons/fi';

const Contact: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Контакты - SmartAccounting</title>
        <meta name="description" content="Свяжитесь с нами для получения профессиональных бухгалтерских услуг" />
      </Head>

      <div className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900" data-aos="blur-in">Контакты</h1>

        {/* Двухколоночный макет: ценовая карточка слева, карта справа */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch mb-16">
          {/* Левая колонка - Ценовая карточка */}
          <div className="w-full lg:w-1/2" data-aos="blur-in" data-aos-delay="100">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 lg:p-12 relative overflow-hidden group hover:shadow-3xl transition-all duration-500 h-full">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#c9a875]/5 rounded-full group-hover:bg-[#c9a875]/10 transition-colors duration-500"></div>
              <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-[#c9a875]/5 rounded-full group-hover:bg-[#c9a875]/10 transition-colors duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-center mb-8">

                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">Цена договорная</h3>
                  <p className="text-gray-700 text-lg leading-relaxed max-w-md mx-auto">
                    Стоимость услуг рассчитывается индивидуально в зависимости от объема работы, 
                    специфики бизнеса и выбранного пакета услуг
                  </p>
                </div>
                
                <div className="flex-1 mb-8">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:bg-gray-100 transition-colors duration-300 min-h-[120px] flex flex-col justify-center">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#c9a875]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <FiCheck className="text-[#c9a875] text-xl" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-2 text-lg">Индивидуальный расчет</h4>
                          <p className="text-gray-700 text-sm leading-relaxed">Учитываем специфику вашего бизнеса и особенности деятельности</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:bg-gray-100 transition-colors duration-300 min-h-[120px] flex flex-col justify-center">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#c9a875]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <FiUsers className="text-[#c9a875] text-xl" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-2 text-lg">Гибкие условия</h4>
                          <p className="text-gray-700 text-sm leading-relaxed">Различные варианты сотрудничества и форматы обслуживания</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:bg-gray-100 transition-colors duration-300 min-h-[120px] flex flex-col justify-center">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#c9a875]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <FiShield className="text-[#c9a875] text-xl" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-2 text-lg">Фиксированная стоимость</h4>
                          <p className="text-gray-700 text-sm leading-relaxed">Никаких скрытых платежей и дополнительных комиссий</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <a
                    href="https://t.me/Sardor_Abdumajitov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#c9a875] hover:bg-[#b8956a] text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg group min-w-[280px]"
                  >
                    Узнать стоимость
                    <FiArrowRight className="ml-3 text-xl group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка - Карта */}
          <div className="w-full lg:w-1/2" data-aos="blur-in" data-aos-delay="200">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 lg:p-12 relative overflow-hidden group hover:shadow-3xl transition-all duration-500 h-full">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#c9a875]/5 rounded-full group-hover:bg-[#c9a875]/10 transition-colors duration-500"></div>
              <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-[#c9a875]/5 rounded-full group-hover:bg-[#c9a875]/10 transition-colors duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#c9a875] to-[#b8956a] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FaMapMarkerAlt className="text-white text-3xl" />
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">Наше местоположение</h2>
                  <p className="text-gray-700 text-lg leading-relaxed max-w-md mx-auto">
                    Посетите наш офис для личной консультации и обсуждения всех вопросов по ведению бухгалтерского учета
                  </p>
                </div>
                
                <div className="flex-1 mb-8">
                  <div className="w-full h-[350px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                    <iframe 
                      src="https://maps.google.com/maps?q=41.265321,69.152733&z=17&output=embed"
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Местоположение офиса"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
                
                <div className="text-center bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Адрес офиса</h4>
                  <p className="text-gray-700 leading-relaxed text-base">
                    7583+43H<br />
                    Tashkent, Uzbekistan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Блок с контактной информацией под колонками */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100" data-aos="blur-in" data-aos-delay="300">
          <h2 className="font-bold text-3xl md:text-4xl text-center text-gray-900 mb-12">
            Контактная информация
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
            {/* Адрес + Ish kunlari */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#c9a875]/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <FaMapMarkerAlt className="text-[#c9a875] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Адрес</h3>
              <div className="space-y-3">
                <p className="text-base text-gray-700 leading-relaxed">
                  7583+43H<br />
                  Tashkent, Uzbekistan
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-bold text-gray-900 mb-2">
                    Ish kunlari
                  </p>
                  <p className="text-sm text-gray-700">
                    Dushanba-Juma: 9:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
            
            {/* Телефон */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#c9a875]/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <FaPhone className="text-[#c9a875] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Телефон</h3>
              <a 
                href="tel:+998977773883" 
                className="text-lg text-[#c9a875] hover:text-[#b8956a] transition-colors duration-300 font-semibold"
              >
                +998 (97) 777-38-83
              </a>
            </div>
            
            {/* Email */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#c9a875]/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <FaEnvelope className="text-[#c9a875] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Email</h3>
              <a 
                href="mailto:info@smartaccounting.ru" 
                className="text-lg text-[#c9a875] hover:text-[#b8956a] transition-colors duration-300 font-medium break-all"
              >
                info@smartaccounting.ru
              </a>
            </div>
            
            {/* Telegram */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#c9a875]/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <FaTelegram className="text-[#c9a875] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Telegram</h3>
              <a 
                href="https://t.me/Sardor_Abdumajitov" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-[#c9a875] hover:text-[#b8956a] transition-colors duration-300 font-medium"
              >
                @Sardor_Abdumajitov
              </a>
            </div>
            
            {/* Instagram */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#c9a875]/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <FaInstagram className="text-[#c9a875] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Instagram</h3>
              <a 
                href="https://instagram.com/smart_accounting_and_co" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-[#c9a875] hover:text-[#b8956a] transition-colors duration-300 font-medium"
              >
                @smart_accounting_and_co
              </a>
            </div>
          </div>
          

        </div>
      </div>
    </Layout>
  );
};

export default Contact; 