import React, { useState } from 'react';
import { Edit, Trash2, Plus, Save, ShoppingBag, Package, Download } from 'lucide-react';
import type { Service, Purchase } from '../types';

interface AdminProps {
  services: Service[];
  purchases: Purchase[];
  onUpdateServices: (services: Service[]) => void;
}

type AdminView = 'services' | 'purchases';

const Admin: React.FC<AdminProps> = ({ services, purchases, onUpdateServices }) => {
  const [activeView, setActiveView] = useState<AdminView>('services');
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState<Omit<Service, 'id'> & { id?: string }>({
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    onPromotion: false,
    image: '',
  });

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setFormData(service);
    setIsCreating(false);
  };

  const handleDelete = (id: string) => {
    onUpdateServices(services.filter(s => s.id !== id));
  };

  const handleCreate = () => {
    setEditingService(null);
    setIsCreating(true);
    setFormData({
      name: '',
      description: '',
      price: 0,
      quantity: 0,
      onPromotion: false,
      image: '',
    });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
        const { checked } = e.target as HTMLInputElement;
        setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
        setFormData(prev => ({
            ...prev,
            [name]: type === 'number' ? parseFloat(value) : value,
        }));
    }
  };

  const handleSave = () => {
    if (isCreating) {
      const newService: Service = { ...formData, id: Date.now().toString() };
      onUpdateServices([...services, newService]);
    } else if (editingService) {
      const updatedServices = services.map(s =>
        s.id === editingService.id ? { ...s, ...formData, id: s.id } : s
      );
      onUpdateServices(updatedServices);
    }
    setEditingService(null);
    setIsCreating(false);
  };

  const downloadJSON = () => {
    const dataStr = JSON.stringify(purchases, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'compras.json');
    linkElement.click();
  };

  const downloadCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "ID Compra,Fecha,Total,ID Producto,Nombre Producto,Cantidad,Precio Unitario\r\n";

    purchases.forEach(purchase => {
      purchase.items.forEach(item => {
        const row = [
          purchase.id,
          new Date(purchase.date).toLocaleString('es-CO'),
          purchase.total,
          item.id,
          `"${item.name}"`,
          item.quantity,
          item.price
        ].join(',');
        csvContent += row + "\r\n";
      });
    });

    const encodedUri = encodeURI(csvContent);
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', encodedUri);
    linkElement.setAttribute('download', 'compras.csv');
    linkElement.click();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Panel de Administración</h2>

      <div className="mb-8 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            onClick={() => setActiveView('services')}
            className={`${
              activeView === 'services'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg flex items-center`}
          >
            <Package className="mr-2" /> Gestionar Servicios
          </button>
          <button
            onClick={() => setActiveView('purchases')}
            className={`${
              activeView === 'purchases'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg flex items-center`}
          >
            <ShoppingBag className="mr-2" /> Ver Compras
          </button>
        </nav>
      </div>

      {activeView === 'services' && (
        <div>
          <div className="flex justify-end items-center mb-8">
            <button
              onClick={handleCreate}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center font-semibold hover:bg-blue-700 transition"
            >
              <Plus className="w-5 h-5 mr-2" /> Crear Servicio
            </button>
          </div>

          {(isCreating || editingService) && (
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">
                {isCreating ? 'Crear Nuevo Servicio' : 'Editar Servicio'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="name" value={formData.name} onChange={handleFormChange} placeholder="Nombre" className="px-4 py-2 border rounded" />
                <input name="price" type="number" value={formData.price} onChange={handleFormChange} placeholder="Precio" className="px-4 py-2 border rounded" />
                <input name="quantity" type="number" value={formData.quantity} onChange={handleFormChange} placeholder="Cantidad" className="px-4 py-2 border rounded" />
                <input name="image" value={formData.image} onChange={handleFormChange} placeholder="URL de Imagen" className="px-4 py-2 border rounded" />
                <textarea name="description" value={formData.description} onChange={handleFormChange} placeholder="Descripción" className="md:col-span-2 px-4 py-2 border rounded" rows={4} />
                <div className="flex items-center">
                  <input id="onPromotion" name="onPromotion" type="checkbox" checked={formData.onPromotion} onChange={handleFormChange} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <label htmlFor="onPromotion" className="ml-2 block text-sm text-gray-900">En Promoción</label>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button onClick={() => { setEditingService(null); setIsCreating(false); }} className="px-4 py-2 rounded mr-2">Cancelar</button>
                <button onClick={handleSave} className="bg-green-600 text-white px-4 py-2 rounded flex items-center hover:bg-green-700"><Save className="w-5 h-5 mr-2" /> Guardar</button>
              </div>
            </div>
          )}

          <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Nombre</th>
                  <th className="p-3 text-left">Precio</th>
                  <th className="p-3 text-left">Cantidad</th>
                  <th className="p-3 text-left">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {services.map(service => (
                  <tr key={service.id} className="border-b">
                    <td className="p-3">{service.name}</td>
                    <td className="p-3">COP ${service.price.toLocaleString('es-CO')}</td>
                    <td className="p-3">{service.quantity}</td>
                    <td className="p-3">
                      <button onClick={() => handleEdit(service)} className="text-blue-600 mr-2" aria-label={`Editar ${service.name}`} title="Editar"><Edit className="w-5 h-5" /></button>
                      <button onClick={() => handleDelete(service.id)} className="text-red-600" aria-label={`Eliminar ${service.name}`} title="Eliminar"><Trash2 className="w-5 h-5" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeView === 'purchases' && (
        <div>
          <div className="flex justify-end items-center mb-8 space-x-4">
            <button
              onClick={downloadJSON}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center font-semibold hover:bg-purple-700 transition"
            >
              <Download className="w-5 h-5 mr-2" /> Descargar JSON
            </button>
            <button
              onClick={downloadCSV}
              className="bg-teal-600 text-white px-4 py-2 rounded-lg flex items-center font-semibold hover:bg-teal-700 transition"
            >
              <Download className="w-5 h-5 mr-2" /> Descargar CSV
            </button>
          </div>

          {purchases.length === 0 ? (
            <p className="text-center text-gray-500 text-xl">No hay compras registradas.</p>
          ) : (
            <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 text-left">ID Compra</th>
                    <th className="p-3 text-left">Fecha</th>
                    <th className="p-3 text-left">Items</th>
                    <th className="p-3 text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {purchases.map(purchase => (
                    <tr key={purchase.id} className="border-b">
                      <td className="p-3 font-mono text-sm">{purchase.id}</td>
                      <td className="p-3">{new Date(purchase.date).toLocaleString('es-CO')}</td>
                      <td className="p-3">
                        <ul>
                          {purchase.items.map(item => (
                            <li key={item.id}>{item.name} (x{item.quantity})</li>
                          ))}
                        </ul>
                      </td>
                      <td className="p-3 text-right font-bold">COP ${purchase.total.toLocaleString('es-CO')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Admin;
