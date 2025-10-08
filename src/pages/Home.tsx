import React from 'react';
import Slider from '../components/Slider';
import type { ViewType } from '../types';
import PageHeader from '../components/PageHeader';
import StatCard from '../components/StatCard';

interface HomeProps {
  onNavigate: (view: ViewType) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div>
      <Slider />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <PageHeader
          title="Bienvenido a TechServe Solutions"
          subtitle="Somos líderes en servicios tecnológicos, ofreciendo soluciones innovadoras que impulsan el crecimiento de tu negocio. Con más de una década de experiencia, transformamos desafíos en oportunidades digitales."
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <StatCard
            value="500+"
            label="Proyectos Completados"
            className="bg-blue-50 text-blue-600"
          />
          <StatCard
            value="250+"
            label="Clientes Satisfechos"
            className="bg-green-50 text-green-600"
          />
          <StatCard
            value="24/7"
            label="Soporte Técnico"
            className="bg-purple-50 text-purple-600"
          />
        </div>
        
        <div className="text-center">
          <button
            onClick={() => onNavigate('services')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Explorar Servicios
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
