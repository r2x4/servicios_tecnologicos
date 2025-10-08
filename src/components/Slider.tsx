import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Slider: React.FC = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const slides = [
    {
      title: 'Innovación Tecnológica',
      subtitle: 'Transformamos tu negocio con soluciones digitales',
      bg: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Experiencia y Calidad',
      subtitle: 'Más de 10 años liderando el mercado tecnológico',
      bg: 'from-green-500 to-teal-600'
    },
    {
      title: 'Soporte 24/7',
      subtitle: 'Estamos contigo en cada paso del camino',
      bg: 'from-orange-500 to-red-600'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-96 overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === sliderIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`h-full w-full bg-gradient-to-r ${slide.bg} flex items-center justify-center text-white`}>
            <div className="text-center px-4">
              <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={() => setSliderIndex((sliderIndex - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 transition"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={() => setSliderIndex((sliderIndex + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 transition"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSliderIndex(idx)}
            className={`w-3 h-3 rounded-full transition ${
              idx === sliderIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
