import React from 'react';
import { Phone } from 'lucide-react';

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
            <p className="text-gray-400">
              Email:{" "}
              <a href="mailto:rrs230780@gmail.com" className="hover:text-white transition">
                rrs230780@gmail.com
              </a>
            </p>
            <div className="flex items-center text-gray-400">
              <Phone className="w-4 h-4 mr-2" />
              <a href="https://wa.me/573195059272" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                +57 3195059272
              </a>
            </div>
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
