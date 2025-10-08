import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechServe Solutions</h3>
            <p className="text-gray-400">
              Transformando empresas a través de la tecnología desde 2014
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p className="text-gray-400">Email: contacto@techserve.com</p>
            <p className="text-gray-400">Tel: +57 300 123 4567</p>
            <p className="text-gray-400">Bogotá, Colombia</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Horario</h3>
            <p className="text-gray-400">Lunes - Viernes: 8am - 6pm</p>
            <p className="text-gray-400">Sábados: 9am - 1pm</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 TechServe Solutions. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
