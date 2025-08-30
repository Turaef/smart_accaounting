import React from 'react';
import Link from 'next/link';
import { FiFileText, FiDollarSign, FiUsers, FiClipboard, FiRefreshCcw } from 'react-icons/fi';

// Services data with slugs for routing
export const services = [
  {
    title: 'Полное ведение бухгалтерского учета',
    description: 'Профессиональное ведение бухгалтерского учета полного цикла в соответствии с законодательством РФ',
    icon: <FiFileText className="text-[#c9a875] text-3xl" />,
    slug: 'bukhgalterskiy-uchet',
    url: '/services/new-vedenie-buhgalterskogo-ucheta',
    fullDescription: `
              <p>ООО "Smart Accounting" предлагает услуги полного ведения бухгалтерского учета для вашего бизнеса.</p>
      <p>Наши специалисты берут на себя весь цикл бухгалтерских операций, включая:</p>
      <ul>
        <li>Формирование и сдачу бухгалтерской отчетности</li>
        <li>Ведение всех регистров бухгалтерского учета</li>
        <li>Расчет налогов и взносов</li>
        <li>Подготовку и сдачу налоговых деклараций</li>
        <li>Взаимодействие с налоговыми органами и внебюджетными фондами</li>
        <li>Формирование первичной документации</li>
      </ul>
      <p>Доверив нам бухгалтерию, вы получаете квалифицированного специалиста по стоимости ниже, чем содержание штатного бухгалтера.</p>
    `
  },
  {
    title: 'Ведение первичной документации',
    description: 'Полное ведение первичных бухгалтерских документов, организация документооборота',
    icon: <FiClipboard className="text-[#c9a875] text-3xl" />,
    slug: 'pervichnaya-dokumentaciya',
    url: '/services/vedenie-pervichnoj-dokumentacii',
    fullDescription: `
      <p>Первичная документация - основа правильного бухгалтерского учета. Мы предлагаем:</p>
      <ul>
        <li>Оформление и проверку счетов, счетов-фактур, накладных, актов</li>
        <li>Подготовку договоров и дополнительных соглашений</li>
        <li>Разработку и внедрение системы документооборота</li>
        <li>Организацию и контроль за движением документов</li>
        <li>Формирование кассовых и банковских документов</li>
        <li>Учет товарно-материальных ценностей</li>
      </ul>
      <p>Мы обеспечим порядок в ваших документах и правильное оформление всех хозяйственных операций.</p>
    `
  },
  {
    title: 'Восстановление бухгалтерского учета',
    description: 'Восстановление бухгалтерского учета при отсутствии или некорректном ведении',
    icon: <FiRefreshCcw className="text-[#c9a875] text-3xl" />,
    slug: 'vosstanovlenie-ucheta',
    fullDescription: `
      <p>Если ваш бухгалтерский учет не велся или велся с ошибками, мы поможем исправить ситуацию:</p>
      <ul>
        <li>Анализ текущего состояния бухгалтерского учета</li>
        <li>Восстановление недостающих документов</li>
        <li>Исправление ошибок в учете и отчетности</li>
        <li>Восстановление налогового и бухгалтерского учета за прошлые периоды</li>
        <li>Подготовка и сдача корректирующих отчетов</li>
        <li>Минимизация штрафных санкций</li>
      </ul>
      <p>Доверьте восстановление учета профессионалам, и мы наведем порядок в вашей бухгалтерии.</p>
    `
  },
  {
    title: 'Оптимизация налогов',
    description: 'Легальные способы оптимизации налогообложения для снижения налоговой нагрузки',
    icon: <FiDollarSign className="text-[#c9a875] text-3xl" />,
    slug: 'optimizaciya-nalogov',
    fullDescription: `
      <p>Мы предлагаем услуги по законной минимизации налоговой нагрузки на ваш бизнес:</p>
      <ul>
        <li>Анализ текущей системы налогообложения</li>
        <li>Выбор оптимального налогового режима</li>
        <li>Разработка стратегии налоговой оптимизации</li>
        <li>Законные способы снижения налоговой базы</li>
        <li>Использование налоговых льгот и преференций</li>
        <li>Планирование налоговых платежей</li>
      </ul>
      <p>Мы поможем вам сократить расходы на налоги, используя только законные методы оптимизации.</p>
    `
  },
  {
    title: 'Сдача отчетности',
    description: 'Своевременная подготовка и сдача всех налоговых и статистических отчетов',
    icon: <FiFileText className="text-[#c9a875] text-3xl" />,
    slug: 'sdacha-otchetnosti',
    fullDescription: `
      <p>Мы берем на себя подготовку и сдачу всех типов отчетности:</p>
      <ul>
        <li>Бухгалтерская отчетность (баланс, отчет о финансовых результатах)</li>
        <li>Налоговые декларации (НДС, прибыль, имущество, УСН, ЕНВД и др.)</li>
        <li>Отчетность в фонды (ФСС, ПФР)</li>
        <li>Статистическая отчетность</li>
        <li>Отчеты по среднесписочной численности</li>
        <li>Подготовка и сдача декларации 3-НДФЛ</li>
      </ul>
      <p>Наши специалисты обеспечат своевременную и безошибочную сдачу отчетности в соответствующие органы.</p>
    `
  },
  {
    title: 'Кадровый учет',
    description: 'Полное ведение кадрового учета и оформление документации по сотрудникам',
    icon: <FiUsers className="text-[#c9a875] text-3xl" />,
    slug: 'kadrovyy-uchet',
    fullDescription: `
      <p>Мы предлагаем комплексное ведение кадрового делопроизводства:</p>
      <ul>
        <li>Оформление приема, перевода и увольнения сотрудников</li>
        <li>Ведение личных дел и трудовых книжек</li>
        <li>Подготовка трудовых договоров и дополнительных соглашений</li>
        <li>Разработка локальных нормативных актов</li>
        <li>Расчет заработной платы, отпускных, больничных</li>
        <li>Подготовка кадровой отчетности</li>
      </ul>
      <p>Правильный кадровый учет позволит избежать проблем при проверках и конфликтных ситуациях с сотрудниками.</p>
    `
  }
];

interface ServicesSectionProps {
  className?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ className = '' }) => {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="blur-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Наши услуги</h2>
          <p className="text-gray-600 text-lg">
            ООО "Smart Accounting" предлагает комплексное обслуживание, которое позволит вам сосредоточиться на развитии бизнеса
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              href={service.url || `/services/${service.slug}`} 
              key={index}
              className="group block"
            >
              <div 
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#c9a875]/20 transition-all duration-300 h-full flex flex-col"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-[#c9a875]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#c9a875]/20 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-[#c9a875] transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                                      <span className="text-[#c9a875] font-medium inline-flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Подробнее 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 