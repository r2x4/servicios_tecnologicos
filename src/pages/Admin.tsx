import React, { useState } from 'react';
import { Edit, Trash2, Plus, Save } from 'lucide-react';
import type { Service } from '../types';

interface AdminProps {
  services: Service[];
  onUpdateServices: (services: Service[]) => void;
}

const Admin: React.FC<AdminProps> = ({ services, onUpdateServices }) => {
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

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">Gestionar Servicios</h2>
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
            <input
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              placeholder="Nombre"
              className="px-4 py-2 border rounded"
            />
            <input
              name="price"
              type="number"
              value={formData.price}
              onChange={handleFormChange}
              placeholder="Precio"
              className="px-4 py-2 border rounded"
            />
            <input
              name="quantity"
              type="number"
              value={formData.quantity}
              onChange={handleFormChange}
              placeholder="Cantidad"
              className="px-4 py-2 border rounded"
            />
            <input
              name="image"
              value={formData.image}
              onChange={handleFormChange}
              placeholder="URL de Imagen"
              className="px-4 py-2 border rounded"
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleFormChange}
              placeholder="Descripción"
              className="md:col-span-2 px-4 py-2 border rounded"
              rows={4}
            />
            <div className="flex items-center">
              <input
                id="onPromotion"
                name="onPromotion"
                type="checkbox"
                checked={formData.onPromotion}
                onChange={handleFormChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="onPromotion" className="ml-2 block text-sm text-gray-900">
                En Promoción
              </label>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={() => {
                setEditingService(null);
                setIsCreating(false);
              }}
              className="px-4 py-2 rounded mr-2"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-2 rounded flex items-center hover:bg-green-700"
            >
              <Save className="w-5 h-5 mr-2" /> Guardar
            </button>
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
                  <button
                    onClick={() => handleEdit(service)}
                    className="text-blue-600 mr-2"
                    aria-label={`Editar ${service.name}`}
                    title="Editar"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="text-red-600"
                    aria-label={`Eliminar ${service.name}`}
                    title="Eliminar"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
