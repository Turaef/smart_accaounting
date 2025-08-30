import React, { useEffect, useState } from 'react';
import Head from 'next/head';
// import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FiCheck, FiArrowRight, FiStar, FiUsers, FiBarChart2, FiCalendar, FiFileText, FiShield, FiX } from 'react-icons/fi';
import { FaTelegram } from 'react-icons/fa';
import Layout from '../components/Layout';
import PartnersMarquee from '../components/PartnersMarquee';
import PrinciplesSection from '../components/PrinciplesSection';
import HeroSection from '../components/HeroSection';
import { handleHashScroll } from '../utils/scrollUtils';
// import SmoothScrollLink from '../components/SmoothScrollLink';

const Home: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    handleHashScroll();
  }, []);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <Layout>
      <Head>
        <title>Smart Accounting - Профессиональные бухгалтерские услуги на аутсорсинге</title>
        <meta name="description" content="Профессиональные бухгалтерские услуги на аутсорсинге для вашего бизнеса" />
      </Head>

      {/* Hero Section */}
      <HeroSection />

      {/* Partners Marquee Section */}
      <PartnersMarquee />

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="blur-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Наши преимущества</h2>
            <p className="text-gray-600 text-lg">
              ООО "Smart Accounting" стремится предоставить максимально качественные услуги, которые помогут вашему бизнесу расти и развиваться
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<FiFileText />} 
              title="Полный учет" 
              description="Ведем полный бухгалтерский учет и первичную документацию в соответствии с законодательством"
              delay={100}
            />
            <FeatureCard 
              icon={<FiBarChart2 />} 
              title="Оптимизация налогов" 
              description="Помогаем законно минимизировать налоговую нагрузку и избежать штрафов"
              delay={200}
            />
            <FeatureCard 
              icon={<FiCalendar />} 
              title="Сдача отчетности" 
              description="Подготовка и сдача всех необходимых налоговых и статистических отчетов"
              delay={300}
            />
            <FeatureCard 
              icon={<FiUsers />} 
              title="Кадровый учет" 
              description="Полное ведение кадрового учета и оформление документации по сотрудникам"
              delay={400}
            />
            <FeatureCard 
              icon={<FiShield />} 
              title="Восстановление учета" 
              description="Качественное восстановление бухгалтерского учета"
              delay={500}
            />
            <FeatureCard 
              icon={<FiShield />} 
              title="Экономия средств" 
              description="Снижение затрат на содержание штатного бухгалтера и организацию рабочего места"
              delay={600}
            />
          </div>
        </div>
      </section>



      {/* Principles Section */}
      <PrinciplesSection id="principles" className="bg-white" onGetConsultation={openContactModal} />

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard 
              value={10} 
              suffix="+" 
              label="Лет опыта" 
              inView={statsInView}
              delay={100}
            />
            <StatCard 
              value={100} 
              suffix="+" 
              label="Довольных клиентов" 
              inView={statsInView}
              delay={200}
            />
            <StatCard 
              value={1000} 
              suffix="+" 
              label="Сданных отчетов" 
              inView={statsInView}
              delay={300}
            />
            <StatCard 
              value={98} 
              suffix="%" 
              label="Клиентов рекомендуют нас" 
              inView={statsInView}
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2" data-aos="fade-right">
              <div className="relative">
                <div className="bg-gray-100 rounded-lg p-12 relative z-10">
                  <div className="bg-white rounded-lg shadow-xl p-6 relative z-20">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">О нашей компании</h3>
                    <p className="text-gray-600 mb-6">
                      ООО "Smart Accounting" - это команда профессиональных бухгалтеров, предлагающая качественные бухгалтерские услуги на аутсорсинге для бизнеса любого масштаба.
                    </p>
                    <p className="text-gray-600 mb-6">
                      Наша миссия - освободить вас от бухгалтерских забот, чтобы вы могли сосредоточиться на развитии своего бизнеса.
                    </p>
                    <Link href="/contact" className="text-[#c9a875] hover:text-[#b8956a] font-semibold flex items-center">
                      Связаться с нами <FiArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
                <div className="absolute top-6 left-6 right-6 bottom-6 border-2 border-[#c9a875] rounded-lg"></div>
              </div>
            </div>
            <div className="lg:w-1/2" data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-8" data-aos="blur-in">
                Почему клиенты <span className="text-[#c9a875]">выбирают нас</span> 
              </h2>
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-[#c9a875]/10 rounded-lg flex items-center justify-center text-[#c9a875] flex-shrink-0">
                    <FiCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Профессионализм</h3>
                    <p className="text-gray-600">Все наши сотрудники имеют профильное образование и регулярно повышают квалификацию</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-[#c9a875]/10 rounded-lg flex items-center justify-center text-[#c9a875] flex-shrink-0">
                    <FiCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ответственность</h3>
                    <p className="text-gray-600">Мы несем полную ответственность за качество и своевременность выполнения всех работ</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-[#c9a875]/10 rounded-lg flex items-center justify-center text-[#c9a875] flex-shrink-0">
                    <FiCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Индивидуальный подход</h3>
                    <p className="text-gray-600">Для каждого клиента мы разрабатываем индивидуальное решение, учитывая особенности его бизнеса</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
              data-aos="blur-in"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Стоимость наших услуг</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Мы предлагаем индивидуальный подход к ценообразованию для каждого клиента
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-12 relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#c9a875]/5 rounded-full group-hover:bg-[#c9a875]/10 transition-colors duration-500"></div>
                <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-[#c9a875]/5 rounded-full group-hover:bg-[#c9a875]/10 transition-colors duration-500"></div>
                
                <div className="relative z-10">

                  
                  <h3 className="text-4xl font-bold text-gray-800 mb-4">Цена договорная</h3>
                  <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                    Стоимость услуг рассчитывается индивидуально в зависимости от объема работы, 
                    специфики бизнеса и выбранного пакета услуг
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="text-center p-4 rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                      <div className="w-12 h-12 bg-[#c9a875]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FiCheck className="text-[#c9a875] text-xl" />
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">Индивидуальный расчет</h4>
                      <p className="text-gray-600 text-sm">Учитываем специфику вашего бизнеса</p>
                    </div>
                    
                    <div className="text-center p-4 rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                      <div className="w-12 h-12 bg-[#c9a875]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FiUsers className="text-[#c9a875] text-xl" />
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">Гибкие условия</h4>
                      <p className="text-gray-600 text-sm">Различные варианты сотрудничества</p>
                    </div>
                    
                    <div className="text-center p-4 rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                      <div className="w-12 h-12 bg-[#c9a875]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FiShield className="text-[#c9a875] text-xl" />
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">Фиксированная стоимость</h4>
                      <p className="text-gray-600 text-sm">Никаких скрытых платежей</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={openContactModal}
                    className="bg-[#c9a875] hover:bg-[#b8956a] text-white px-12 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center mx-auto group"
                  >
                    Узнать стоимость
                    <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
          >
            <button
              onClick={closeContactModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FiX size={24} />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#c9a875] to-[#b8956a] rounded-full flex items-center justify-center mx-auto mb-6">
                <FaTelegram className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Свяжитесь с нами</h3>
              <p className="text-gray-600 mb-8">
                Напишите нам в Telegram для быстрого расчета стоимости услуг
              </p>
              
              <div className="space-y-4">
                <a
                  href="https://t.me/Sardor_Abdumajitov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#c9a875] hover:bg-[#b8956a] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  <FaTelegram className="mr-3 text-xl" />
                  Написать в Telegram
                  <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                
                <div className="text-center text-gray-500 text-sm">
                  <p>или позвоните нам:</p>
                  <a href="tel:+998977773883" className="text-[#c9a875] font-semibold hover:text-[#b8956a] transition-colors">
                    +998 (97) 777-38-83
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="blur-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Отзывы наших клиентов</h2>
            <p className="text-gray-600 text-lg">
              Узнайте, что говорят о нас те, кто уже воспользовался нашими услугами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
            <TestimonialCard
              text="Мы доверяем Smart Accounting ведение нашей бухгалтерии и довольны их профессионализмом и оперативностью. Рекомендуем их как надежного партнера."
              author="ООО «BEST-PERFUMERY»"
              position="Клиент"
            />
            <TestimonialCard
              text="Благодаря Smart Accounting мы смогли значительно улучшить наши финансовые процессы. Их команда всегда готова помочь и предоставить квалифицированную консультацию."
              author="Consensus-Trade ООО"
              position="Клиент"
            />
            <TestimonialCard
              text="Smart Accounting — это надежный партнер, который помогает нам справляться с любыми бухгалтерскими задачами. Мы ценим их за ответственность и высокое качество услуг."
              author="ООО СП TRUCK SERVICE"
              position="Клиент"
            />
            <TestimonialCard
              text="Сотрудничество со Smart Accounting позволило нам сосредоточиться на развитии бизнеса, поручив финансовые вопросы профессионалам."
              author="ООО ICE LENGER SUPER"
              position="Клиент"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#c9a875] to-[#b8956a] rounded-2xl p-12 relative overflow-hidden" data-aos="fade-up">
            <div className="absolute inset-0 bg-pattern opacity-10"></div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full"></div>
            <div className="absolute right-20 bottom-20 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-2/3 mb-8 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" data-aos="blur-in">
                  Готовы начать сотрудничество?
                </h2>
                <p className="text-white/90 text-lg max-w-2xl" data-aos="blur-in" data-aos-delay="100">
                  Оставьте заявку или позвоните нам, и мы предложим решение, идеально подходящее для вашего бизнеса
                </p>
              </div>
              <div>
                <Link href="/contact" className="bg-white hover:bg-gray-100 text-[#c9a875] px-8 py-4 rounded-lg font-semibold transition-colors inline-block">
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

// Feature Card Component
const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, description: string, delay: number }> = ({ 
  icon, title, description, delay 
}) => {
  return (
    <div 
      className="p-8 rounded-xl border border-gray-100 hover:border-[#c9a875]/20 hover:shadow-lg transition-all duration-300"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="w-16 h-16 bg-[#c9a875]/10 rounded-full flex items-center justify-center text-[#c9a875] text-2xl mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Statistic Card Component
const StatCard: React.FC<{ value: number, suffix: string, label: string, inView: boolean, delay: number }> = ({ 
  value, suffix, label, inView, delay 
}) => {
  return (
    <div 
      className="text-center p-8 rounded-xl bg-white shadow-lg"
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <div className="text-4xl sm:text-5xl font-bold text-[#c9a875] mb-3">
        {inView ? (
          <CountUp end={value} duration={2.5} />
        ) : (
          0
        )}
        {suffix}
      </div>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard: React.FC<{ text: string, author: string, position: string }> = ({ 
  text, author, position 
}) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center text-[#c9a875] mb-6">
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
      </div>
      <p className="text-gray-600 mb-8">{text}</p>
      <div>
        <p className="font-semibold text-gray-800">{author}</p>
        <p className="text-gray-500 text-sm">{position}</p>
      </div>
    </div>
  );
};

export default Home; 