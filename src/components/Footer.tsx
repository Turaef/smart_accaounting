import React from 'react';
import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { FaFacebook, FaTelegram, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import SmoothScrollLink from './SmoothScrollLink';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-[#2e2e2e] pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="absolute -left-4 top-0 h-full w-1 bg-[#c9a875]"></span>
              Smart Accounting
            </h3>
            <p className="text-gray-600 mb-6">
              Качественные бухгалтерские услуги на аутсорсинге для вашего бизнеса, которые помогут вам сосредоточиться на главном – развитии своего дела.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#c9a875] transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://t.me/Sardor_Abdumajitov" className="text-gray-600 hover:text-[#c9a875] transition-colors">
                <FaTelegram size={20} />
              </a>
              <a href="https://instagram.com/smart_accounting_and_co" className="text-gray-600 hover:text-[#c9a875] transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#c9a875] transition-colors">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="absolute -left-4 top-0 h-full w-1 bg-[#c9a875]"></span>
              Навигация
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#c9a875] transition-colors flex items-center">
                  <span className="mr-2">→</span> Главная
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-[#c9a875] transition-colors flex items-center">
                  <span className="mr-2">→</span> Услуги
                </Link>
              </li>
              <li>
                <SmoothScrollLink href="/#principles" className="text-gray-600 hover:text-[#c9a875] transition-colors flex items-center">
                  <span className="mr-2">→</span> Наши принципы
                </SmoothScrollLink>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#c9a875] transition-colors flex items-center">
                  <span className="mr-2">→</span> Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="absolute -left-4 top-0 h-full w-1 bg-[#c9a875]"></span>
              Контакты
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="text-[#c9a875] mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-600">7583+43H, Tashkent, Uzbekistan</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="text-[#c9a875] mr-3 flex-shrink-0" />
                <a href="tel:+998977773883" className="text-gray-600 hover:text-[#c9a875] transition-colors">
                  +998 (97) 777-38-83
                </a>
              </li>
              <li className="flex items-center">
                <FiMail className="text-[#c9a875] mr-3 flex-shrink-0" />
                <a href="mailto:info@smartaccounting.ru" className="text-gray-600 hover:text-[#c9a875] transition-colors">
                  info@smartaccounting.ru
                </a>
              </li>
              <li className="flex items-center">
                <FaTelegram className="text-[#c9a875] mr-3 flex-shrink-0" />
                <a href="https://t.me/Sardor_Abdumajitov" className="text-gray-600 hover:text-[#c9a875] transition-colors">
                  @Sardor_Abdumajitov
                </a>
              </li>
              <li className="flex items-start">
                <FiClock className="text-[#c9a875] mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-600">Dushanba-Juma: 9:00 - 18:00</p>
                  <p className="text-gray-600">Shanba-Yakshanba: Выходной</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="absolute -left-4 top-0 h-full w-1 bg-[#c9a875]"></span>
              Наши услуги
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-600">Полное ведение бухгалтерского учета</li>
              <li className="text-gray-600">Ведение первичных документов</li>
              <li className="text-gray-600">Восстановление бухгалтерского учета</li>
              <li className="text-gray-600">Оптимизация налогов</li>
              <li className="text-gray-600">Сдача налоговой отчетности</li>
              <li className="text-gray-600">Кадровый учет</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-300 mb-8"></div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} ООО "Smart Accounting". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 