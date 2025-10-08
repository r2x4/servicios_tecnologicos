import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import { initialServices, initialUsers } from './data/database';
import type { ViewType, User, Service } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('home');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [services, setServices] = useState<Service[]>(initialServices);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [cartItems, setCartItems] = useState<Service[]>([]);

  const handleNavigate = (newView: ViewType) => {
    if (newView === 'admin' && (!currentUser || !currentUser.isAdmin)) {
      setView('login');
    } else {
      setView(newView);
    }
  };

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    if (user.isAdmin) {
      setView('admin');
    } else {
      setView('home');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setView('home');
  };

  const handleSelectService = (service: Service) => {
    setSelectedService(service);
    setView('serviceDetail');
  };

  const handleUpdateServices = (updatedServices: Service[]) => {
    setServices(updatedServices);
  };
  
  const handleAddToCart = (service: Service) => {
    setCartItems(prevItems => [...prevItems, service]);
    alert(`${service.name} ha sido añadido al carrito!`);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const renderView = () => {
    switch (view) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'services':
        return <Services services={services} onSelectService={handleSelectService} onAddToCart={handleAddToCart} />;
      case 'serviceDetail':
        return <ServiceDetail service={selectedService} onNavigate={handleNavigate} onAddToCart={handleAddToCart} />;
      case 'login':
        return <Login users={initialUsers} onLogin={handleLogin} />;
      case 'admin':
        return <Admin services={services} onUpdateServices={handleUpdateServices} />;
      case 'cart':
        return <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar
        currentUser={currentUser}
        cartItems={cartItems}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
      />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
