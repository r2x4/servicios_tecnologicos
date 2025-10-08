import React from 'react';
import { Home, Briefcase, User, LogOut, LogIn, ShoppingCart } from 'lucide-react';
import type { ViewType, User as UserType, Service } from '../types';

interface NavbarProps {
  currentUser: UserType | null;
  cartItems?: Service[];
  onNavigate: (view: ViewType) => void;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser, cartItems = [], onNavigate, onLogout }) => {
  const navItems = [
    { view: 'home', label: 'Inicio', icon: Home },
    { view: 'services', label: 'Servicios', icon: Briefcase },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <Briefcase className="w-8 h-8 text-blue-600" />
            <span className="ml-3 text-2xl font-bold text-gray-800">TechSolutions</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(item => (
              <button 
                key={item.view} 
                onClick={() => onNavigate(item.view as ViewType)}
                className="flex items-center text-gray-600 hover:text-blue-600 font-semibold transition"
              >
                <item.icon className="w-5 h-5 mr-2" />
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {currentUser ? (
              <>
                {currentUser.isAdmin && (
                  <button 
                    onClick={() => onNavigate('admin')} 
                    className="flex items-center text-gray-600 hover:text-blue-600 font-semibold mr-6"
                  >
                    <User className="w-5 h-5 mr-2" />
                    Admin
                  </button>
                )}
                <button 
                  onClick={onLogout}
                  className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
                >
                  <LogOut className="w-5 h-5 mr-2" />
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <button 
                onClick={() => onNavigate('login')}
                className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                <LogIn className="w-5 h-5 mr-2" />
                Admin Login
              </button>
            )}
            <button
              onClick={() => onNavigate('cart')}
              className="relative text-gray-600 hover:text-blue-600 transition"
              aria-label={`Carrito con ${cartItems.length} items`}
            >
              <ShoppingCart className="w-7 h-7" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
