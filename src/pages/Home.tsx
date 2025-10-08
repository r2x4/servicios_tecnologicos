import React from 'react';
import Slider from '../components/Slider';
import type { ViewType } from '../types';

interface HomeProps {
  onNavigate: (view: ViewType) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div>
      <Slider />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Bienvenido a TechServe Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos líderes en servicios tecnológicos, ofreciendo soluciones innovadoras que impulsan 
            el crecimiento de tu negocio. Con más de una década de experiencia, transformamos desafíos 
            en oportunidades digitales.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-700">Proyectos Completados</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">250+</div>
            <div className="text-gray-700">Clientes Satisfechos</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-700">Soporte Técnico</div>
          </div>
        </div>
        
        <div className="text-center">
          <button
            onClick={() => onNavigate('services')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Explorar Servicios
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
