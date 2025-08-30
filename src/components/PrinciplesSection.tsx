import React from 'react';
import Link from 'next/link';
import { FiCheck, FiTarget, FiStar, FiShield, FiUsers, FiBarChart2 } from 'react-icons/fi';

interface PrinciplesSectionProps {
  className?: string;
  id?: string;
  onGetConsultation?: () => void;
}

const PrinciplesSection: React.FC<PrinciplesSectionProps> = ({ className = '', id, onGetConsultation }) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Наши принципы</h2>
          <p className="text-gray-600 text-lg">
            В основе работы ООО "Smart Accounting" лежат ключевые принципы, которые обеспечивают высокое качество услуг и доверие клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PrincipleCard 
            icon={<FiTarget />}
            title="Точность и внимательность" 
            description="Мы тщательно проверяем каждый документ и отчет, чтобы исключить ошибки и неточности в вашей бухгалтерии"
            delay={100}
          />
          <PrincipleCard 
            icon={<FiShield />}
            title="Конфиденциальность" 
            description="Гарантируем полную конфиденциальность всех данных. Работаем по договору с NDA и соблюдаем требования закона о персональных данных"
            delay={200}
          />
          <PrincipleCard 
            icon={<FiStar />}
            title="Профессионализм" 
            description="Наши специалисты имеют профильное образование и регулярно повышают квалификацию, следят за изменениями законодательства"
            delay={300}
          />
          <PrincipleCard 
            icon={<FiUsers />}
            title="Клиентоориентированность" 
            description="Мы выстраиваем долгосрочные отношения с клиентами, основанные на понимании потребностей и особенностей каждого бизнеса"
            delay={400}
          />
          <PrincipleCard 
            icon={<FiBarChart2 />}
            title="Системный подход" 
            description="Создаем эффективные системы учета, оптимизируем бизнес-процессы и налоговые стратегии вашей компании"
            delay={500}
          />
          <PrincipleCard 
            icon={<FiCheck />}
            title="Прозрачность и честность" 
            description="Работаем на результат, предоставляем понятную отчетность и всегда придерживаемся прозрачных условий сотрудничества"
            delay={600}
          />
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#c9a875] to-[#b8956a] rounded-xl p-8 sm:p-10 shadow-lg" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Доверьте нам свою бухгалтерию</h3>
              <p className="text-white/90">
                Мы поможем вам сосредоточиться на развитии бизнеса, 
                пока наши специалисты обеспечивают безупречный учет и отчетность.
              </p>
            </div>
            {onGetConsultation ? (
              <button
                onClick={onGetConsultation}
                className="bg-white hover:bg-gray-50 text-[#c9a875] px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer flex-shrink-0"
              >
                Получить консультацию
              </button>
            ) : (
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-50 text-[#c9a875] px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-block flex-shrink-0"
              >
                Получить консультацию
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Principle Card Component
const PrincipleCard: React.FC<{ 
  icon: React.ReactNode, 
  title: string, 
  description: string, 
  delay: number 
}> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#c9a875]/20 transition-all duration-300 h-full flex flex-col"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="w-16 h-16 bg-[#c9a875]/10 rounded-full flex items-center justify-center mb-6 text-[#c9a875] text-2xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default PrinciplesSection; 