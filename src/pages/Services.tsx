import React from 'react';
import { PlusCircle } from 'lucide-react';
import type { Service } from '../types';

interface ServicesProps {
  services: Service[];
  onSelectService: (service: Service) => void;
  onAddToCart?: (service: Service) => void;
}

const Services: React.FC<ServicesProps> = ({ services, onSelectService, onAddToCart = () => {} }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Nuestros Servicios
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group"
          >
            <img 
              src={service.image} 
              alt={service.name} 
              className="w-full h-48 object-cover cursor-pointer"
              onClick={() => onSelectService(service)}
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 
                className="text-xl font-bold text-gray-800 mb-2 cursor-pointer"
                onClick={() => onSelectService(service)}
              >
                {service.name}
              </h3>
              <div className="flex-grow"></div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-2xl font-bold text-blue-600">
                  COP ${service.price.toLocaleString('es-CO')}
                </span>
                <button
                  onClick={() => onAddToCart(service)}
                  className="bg-blue-100 text-blue-700 p-2 rounded-full hover:bg-blue-200 transition"
                  aria-label={`Añadir ${service.name} al carrito`}
                >
                  <PlusCircle className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
