import React from 'react';
import { Trash2, ShoppingCart } from 'lucide-react';
import type { Service } from '../types';

interface CartProps {
  cartItems?: Service[];
  onRemoveFromCart?: (id: string) => void;
  onProceedToPayment?: () => void;
}

const Cart: React.FC<CartProps> = ({ cartItems = [], onRemoveFromCart = () => {}, onProceedToPayment = () => {} }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        <ShoppingCart className="inline-block w-10 h-10 mr-4" />
        Tu Carrito de Compras
      </h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-xl">Tu carrito está vacío.</p>
      ) : (
        <div className="bg-white rounded-lg shadow-lg">
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-500">
                      Cantidad: <span className="font-bold text-gray-700">{item.quantity}</span>
                    </p>
                    <p className="text-blue-600 font-bold">COP ${item.price.toLocaleString('es-CO')} c/u</p>
                  </div>
                </div>
                <button
                  onClick={() => onRemoveFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                  aria-label={`Eliminar ${item.name}`}
                >
                  <Trash2 className="w-6 h-6" />
                </button>
              </li>
            ))}
          </ul>
          <div className="p-4 border-t border-gray-200">
            <div className="flex justify-between items-center text-2xl font-bold">
              <span>Total:</span>
              <span>COP ${total.toLocaleString('es-CO')}</span>
            </div>
            <button
              onClick={onProceedToPayment}
              className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition text-lg"
            >
              Proceder al Pago
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;