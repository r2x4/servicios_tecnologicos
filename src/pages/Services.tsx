import React from 'react';
import type { Service } from '../types';

interface ServicesProps {
  services: Service[];
  onSelectService: (service: Service) => void;
}

const Services: React.FC<ServicesProps> = ({ services, onSelectService }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Nuestros Servicios
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <div
            key={service.id}
            onClick={() => onSelectService(service)}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <img 
              src={service.image} 
              alt={service.name} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {service.name}
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">
                  ${service.price.toLocaleString()}
                </span>
                {service.onPromotion && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Promoción
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
