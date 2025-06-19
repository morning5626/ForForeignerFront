import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  location: string;
  image: string;
}

interface HeroProps {
  slides: Slide[];
}

const Hero: React.FC<HeroProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="pt-20 bg-[#fbefef]">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-xl shadow-lg my-8">
          <div className="relative h-[400px] md:h-[500px]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out flex items-center ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="bg-white bg-opacity-90 p-6 md:p-10 m-4 md:m-10 rounded-xl max-w-md">
                  <h2 className="text-xl md:text-2xl font-bold text-[#f5a9a9] mb-2">{slide.title}</h2>
                  <p className="text-lg text-gray-700 mb-4">{slide.subtitle}</p>
                  <div className="text-sm text-gray-600">
                    <p className="mb-1">{slide.date}</p>
                    <p className="mb-1">{slide.time}</p>
                    <p>{slide.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all z-20"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all z-20"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-[#f5a9a9] w-4' : 'bg-gray-300'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;