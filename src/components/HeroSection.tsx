import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  // Static array of images
  const images = [
    '/slider/girl.webp',
    '/slider/laptop.webp',
    '/slider/uzbek.webp',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="min-h-screen hero-full-bleed relative flex items-center justify-center text-center overflow-hidden">
      {/* Background Image Slider */}
      {
        images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src={src}
              alt={`Background Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))
      }
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 w-full container mx-auto px-4 text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4 sm:mb-6" data-aos="blur-in">
            Ваш бизнес — наша бухгалтерия
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 font-light" data-aos="blur-in" data-aos-delay="200">
            Профессиональные бухгалтерские услуги для вашего бизнеса.
            Мы берем на себя все вопросы учета, чтобы вы могли сосредоточиться
            на развитии своего дела.
          </p>
          <Link href="/contact">
            <button className="bg-[#c9a875] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#b8956a] transition-colors duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base" data-aos="blur-in" data-aos-delay="400">
              Получить консультацию
            </button>
          </Link>
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
              index === currentImage ? 'bg-white shadow-lg' : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;