import React from 'react';
import { ChevronLeft } from 'lucide-react';
import type { Service, ViewType } from '../types';

interface ServiceDetailProps {
  service: Service | null;
  onNavigate: (view: ViewType) => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onNavigate }) => {
  if (!service) return null;
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <button
        onClick={() => onNavigate('services')}
        className="mb-6 text-blue-600 hover:text-blue-700 font-semibold flex items-center"
      >
        <ChevronLeft className="w-5 h-5 mr-1" /> Volver a servicios
      </button>
      
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <img 
          src={service.image} 
          alt={service.name} 
          className="w-full h-96 object-cover" 
        />
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-4xl font-bold text-gray-800">{service.name}</h2>
            {service.onPromotion && (
              <span className="bg-red-500 text-white px-4 py-2 rounded-full text-lg font-semibold">
                En Promoción
              </span>
            )}
          </div>
          
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            {service.description}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-gray-600 mb-1">Precio</div>
              <div className="text-3xl font-bold text-blue-600">
                ${service.price.toLocaleString()}
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-gray-600 mb-1">Disponibilidad</div>
              <div className="text-3xl font-bold text-green-600">
                {service.quantity} unidades
              </div>
            </div>
          </div>
          
          <button className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Solicitar Servicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
