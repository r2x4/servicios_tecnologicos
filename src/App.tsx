import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import { initialServices, initialUsers } from './data/database';
import type { ViewType, User, Service, Purchase } from './types';

// Función para obtener datos del localStorage de forma segura
const loadFromLocalStorage = <T,>(key: string, defaultValue: T): T => {
  try {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
  } catch (error) {
    console.error(`Error al cargar ${key} desde localStorage`, error);
  }
  return defaultValue;
};

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('home');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [services, setServices] = useState<Service[]>(() => loadFromLocalStorage('services', initialServices));
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [cartItems, setCartItems] = useState<Service[]>(() => loadFromLocalStorage('cartItems', []));
  const [purchases, setPurchases] = useState<Purchase[]>(() => loadFromLocalStorage('purchases', []));

  // Efecto para guardar el carrito en localStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Efecto para guardar las compras en localStorage
  useEffect(() => {
    localStorage.setItem('purchases', JSON.stringify(purchases));
  }, [purchases]);

  // Efecto para guardar los servicios (y su stock) en localStorage
  useEffect(() => {
    localStorage.setItem('services', JSON.stringify(services));
  }, [services]);

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
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === service.id);
      if (existingItem) {
        // Si el item ya existe, incrementamos su cantidad
        return prevItems.map(item =>
          item.id === service.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Si es un item nuevo, lo añadimos con cantidad 1
      return [...prevItems, { ...service, quantity: 1 }];
    });
    alert(`${service.name} ha sido añadido al carrito!`);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prevItems => {
      const itemToRemove = prevItems.find(item => item.id === id);
      if (itemToRemove && itemToRemove.quantity > 1) {
        // Si la cantidad es mayor a 1, la decrementamos
        return prevItems.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item);
      }
      // Si la cantidad es 1 o el item no se encuentra, lo eliminamos del carrito
      return prevItems.filter(item => item.id !== id);
    });
  };

  const handleProceedToPayment = () => {
    if (cartItems.length === 0) return;

    // Actualizar el stock de los servicios
    const updatedServices = services.map(service => {
      const cartItem = cartItems.find(item => item.id === service.id);
      if (cartItem) {
        const newQuantity = service.quantity - cartItem.quantity;
        return { ...service, quantity: newQuantity >= 0 ? newQuantity : 0 };
      }
      return service;
    });
    setServices(updatedServices);

    // Crear el registro de la compra
    const newPurchase: Purchase = {
      id: `compra-${Date.now()}`,
      items: [...cartItems],
      total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      date: new Date().toISOString(),
    };

    setPurchases(prev => [...prev, newPurchase]);
    setCartItems([]);
    alert('¡Gracias por tu compra! Tu pago ha sido procesado exitosamente.');
    setView('services');
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
        return <Admin services={services} purchases={purchases} onUpdateServices={handleUpdateServices} />;
      case 'cart':
        return <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} onProceedToPayment={handleProceedToPayment} />;
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
