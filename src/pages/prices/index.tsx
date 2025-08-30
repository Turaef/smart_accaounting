import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { FiPlus, FiMinus, FiPhoneCall } from 'react-icons/fi';
import Link from 'next/link';

const Prices: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      name: "Полное ведение бухгалтерского учета",
      description: "Профессиональное ведение бухгалтерского учета полного цикла",
      price: "Договорная",
      delay: 100,
    },
    {
      name: "Ведение первичной документации",
      description: "Полное ведение первичных бухгалтерских документов",
      price: "Договорная",
      delay: 200,
    },
    {
      name: "Восстановление учета",
      description: "Восстановление бухгалтерского учета любой сложности",
      price: "Договорная",
      delay: 300,
    },
    {
      name: "Оптимизация налогов",
      description: "Легальные способы оптимизации налогообложения",
      price: "Договорная",
      delay: 400,
    },
    {
      name: "Сдача отчетности",
      description: "Подготовка и сдача всех налоговых и статистических отчетов",
      price: "Договорная",
      delay: 500,
    },
    {
      name: "Кадровый учет",
      description: "Полное ведение кадрового учета и оформление документации",
      price: "Договорная",
      delay: 600,
    },
  ];

  const faqItems = [
    {
      question: "Что влияет на стоимость бухгалтерских услуг?",
      answer: "Стоимость бухгалтерских услуг зависит от нескольких факторов: типа бизнеса (ИП или ООО), системы налогообложения, количества сотрудников, объема документооборота и количества операций в месяц. Мы предлагаем индивидуальный расчет стоимости для каждого клиента."
    },
    {
      question: "Что входит в бухгалтерское обслуживание?",
      answer: "В услугу бухгалтерского обслуживания входит ведение бухгалтерского и налогового учета, подготовка и сдача отчетности, расчет заработной платы, консультации по финансовым и налоговым вопросам. Конкретный перечень услуг зависит от ваших потребностей и согласовывается индивидуально."
    },
    {
      question: "Как происходит передача документов?",
      answer: "Передача документов может осуществляться несколькими способами: лично в нашем офисе, через курьера, в электронном виде через защищенные каналы связи или через систему электронного документооборота. Мы подберем наиболее удобный для вас способ."
    },
    {
      question: "Возможно ли восстановление бухгалтерского учета?",
      answer: "Да, мы оказываем услуги по восстановлению бухгалтерского учета любой сложности. Наши специалисты восстановят первичную документацию, книги учета, сдадут корректирующую отчетность и нормализуют текущий учет."
    },
    {
      question: "Что такое оптимизация налогов?",
      answer: "Оптимизация налогов — это легальные способы снижения налоговой нагрузки на бизнес через выбор оптимальной системы налогообложения, использование налоговых льгот и преференций, а также грамотное планирование хозяйственной деятельности компании."
    },
    {
      question: "Предоставляете ли вы гарантии на свои услуги?",
      answer: "Да, мы гарантируем качество наших услуг и несем полную материальную ответственность за возможные ошибки и их последствия согласно условиям договора. В случае возникновения штрафов по нашей вине, мы компенсируем их в полном объеме."
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Цены - Smart Accounting</title>
        <meta name="description" content="Стоимость бухгалтерских услуг на аутсорсинге от ООО 'Smart Accounting'" />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#fcfcfc] text-[#2e2e2e] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
              Стоимость бухгалтерских услуг
            </h1>
            <p className="text-xl mb-8 text-gray-600" data-aos="fade-up" data-aos-delay="100">
              В ООО "Smart Accounting" действует договорная система ценообразования. Стоимость услуг зависит от объема работы и особенностей вашего бизнеса.
            </p>
          </div>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Наши услуги</h2>
            <p className="text-gray-600 text-lg">
              Стоимость рассчитывается индивидуально для каждого клиента в зависимости от объема работы и особенностей бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={service.delay}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Стоимость</p>
                      <p className="text-2xl font-bold text-[#c9a875]">{service.price}</p>
                    </div>
                    <Link 
                      href="/contact" 
                      className="text-[#c9a875] hover:text-[#b8956a] font-semibold flex items-center"
                    >
                      Уточнить <FiPhoneCall className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 max-w-3xl mx-auto text-center p-8 bg-gray-50 rounded-2xl shadow-lg" data-aos="fade-up">
            <h3 className="text-2xl font-bold mb-4">Индивидуальный расчет стоимости</h3>
            <p className="text-gray-600 mb-8">
              Для получения точной стоимости услуг именно для вашего бизнеса, пожалуйста, свяжитесь с нами для консультации
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-[#c9a875] hover:bg-[#b8956a] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Связаться с нами
              </Link>
              <Link 
                href="/calculator" 
                className="bg-white border border-[#c9a875] text-[#c9a875] hover:bg-[#c9a875]/5 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Использовать калькулятор
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Factors Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Факторы, влияющие на стоимость</h2>
            <p className="text-gray-600 text-lg">
              Стоимость бухгалтерских услуг зависит от нескольких ключевых факторов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-bold mb-4">Организационно-правовая форма</h3>
              <p className="text-gray-600">
                Для ООО бухгалтерское обслуживание обычно стоит дороже, чем для ИП, из-за более сложной отчетности
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-bold mb-4">Система налогообложения</h3>
              <p className="text-gray-600">
                ОСНО требует больше работы и отчетности, чем УСН, поэтому влияет на стоимость услуг
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl font-bold mb-4">Количество сотрудников</h3>
              <p className="text-gray-600">
                Чем больше сотрудников, тем больше кадровой работы и отчетности в фонды
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-xl font-bold mb-4">Объем документооборота</h3>
              <p className="text-gray-600">
                Количество операций и документов напрямую влияет на объем работы и стоимость услуг
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="500">
              <h3 className="text-xl font-bold mb-4">Дополнительные услуги</h3>
              <p className="text-gray-600">
                Восстановление учета, оптимизация налогов, углубленный анализ и др. влияют на итоговую стоимость
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="600">
              <h3 className="text-xl font-bold mb-4">Срочность работы</h3>
              <p className="text-gray-600">
                Срочные работы, требующие немедленного выполнения, могут стоить дороже стандартных
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">
            Часто задаваемые вопросы
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <span className="text-[#c9a875]">
                    {openFaq === index ? <FiMinus size={20} /> : <FiPlus size={20} />}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="p-6 pt-0 bg-gray-50">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#c9a875] to-[#b8956a] rounded-2xl p-12 text-center text-white relative overflow-hidden" data-aos="fade-up">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Готовы обсудить сотрудничество?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Свяжитесь с нами для получения индивидуального коммерческого предложения с учетом особенностей вашего бизнеса
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-white hover:bg-gray-100 text-[#c9a875] px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Связаться с нами
                </Link>
                <Link 
                  href="/calculator" 
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Рассчитать стоимость
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Prices; 