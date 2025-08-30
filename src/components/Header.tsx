import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import SmoothScrollLink from './SmoothScrollLink';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="transition-colors duration-300">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <img src="https://dnzzhkywsdpcakrczrte.supabase.co/storage/v1/object/public/smart/logo.png" alt="Logo" className="h-[60px] sm:h-[80px] md:h-[100px] w-auto" />
              <span className={`ml-2 text-lg sm:text-xl font-bold ${scrolled ? 'text-neutral-800' : 'text-white'}`}>Smart Accounting</span>
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" label="Главная" scrolled={scrolled} />
            <NavLink href="/services" label="Услуги" scrolled={scrolled} />
            <NavLink href="/#principles" label="Наши принципы" scrolled={scrolled} />
            <NavLink href="/contact" label="Контакты" scrolled={scrolled} />
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className={`md:hidden focus:outline-none transition-colors duration-300 ${scrolled ? 'text-[#2e2e2e]' : 'text-white'} hover:text-[#c9a875]`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden py-4 mt-4 rounded-lg ${scrolled ? 'bg-white' : 'bg-black/20 backdrop-blur-sm'}`}
          >
            <div className="flex flex-col space-y-4 px-4">
              <MobileNavLink href="/" label="Главная" onClick={() => setIsOpen(false)} scrolled={scrolled} />
              <MobileNavLink href="/services" label="Услуги" onClick={() => setIsOpen(false)} scrolled={scrolled} />
              <MobileNavLink href="/#principles" label="Наши принципы" onClick={() => setIsOpen(false)} scrolled={scrolled} />
              <MobileNavLink href="/contact" label="Контакты" onClick={() => setIsOpen(false)} scrolled={scrolled} />
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

// Desktop navigation link component
const NavLink: React.FC<{ href: string; label: string; scrolled: boolean }> = ({ href, label, scrolled }) => {
  const isHashLink = href.includes('#');
  const textClass = scrolled ? 'text-[#2e2e2e]' : 'text-white';
  
  if (isHashLink) {
    return (
      <SmoothScrollLink 
        href={href} 
        className={`${textClass} hover:text-[#c9a875] relative group transition-colors duration-300`}
      >
        {label}
        <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${scrolled ? 'bg-[#c9a875]' : 'bg-[#c9a875]'}`}></span>
      </SmoothScrollLink>
    );
  }

  return (
    <Link 
      href={href} 
      className={`${textClass} hover:text-[#c9a875] relative group transition-colors duration-300`}
    >
      {label}
      <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${scrolled ? 'bg-[#c9a875]' : 'bg-[#c9a875]'}`}></span>
    </Link>
  );
};

// Mobile navigation link component
const MobileNavLink: React.FC<{ href: string; label: string; onClick: () => void; scrolled: boolean }> = ({ href, label, onClick, scrolled }) => {
  const isHashLink = href.includes('#');
  
  if (isHashLink) {
    return (
      <SmoothScrollLink 
        href={href} 
        className={`py-2 block transition-colors duration-300 ${scrolled ? 'text-[#2e2e2e]' : 'text-white'} hover:text-[#c9a875]`}
        onClick={onClick}
      >
        {label}
      </SmoothScrollLink>
    );
  }

  return (
    <Link 
      href={href} 
      className={`py-2 block transition-colors duration-300 ${scrolled ? 'text-[#2e2e2e]' : 'text-white'} hover:text-[#c9a875]`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Header; 