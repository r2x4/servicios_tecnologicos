import type { Service, User } from '../types';

export const initialServices: Service[] = [
  {
    id: '1',
    name: 'Desarrollo Web',
    description: 'Creación de sitios web modernos y responsivos con las últimas tecnologías',
    price: 2500,
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400',
    quantity: 15,
    onPromotion: true
  },
  {
    id: '2',
    name: 'Aplicaciones Móviles',
    description: 'Desarrollo de apps nativas y multiplataforma para iOS y Android',
    price: 3500,
    image: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=400',
    quantity: 10,
    onPromotion: false
  },
  {
    id: '3',
    name: 'Consultoría IT',
    description: 'Asesoramiento estratégico en tecnología para optimizar tus procesos',
    price: 1500,
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400',
    quantity: 20,
    onPromotion: true
  },
  {
    id: '4',
    name: 'Cloud Computing',
    description: 'Migración y gestión de infraestructura en la nube (AWS, Azure, GCP)',
    price: 2000,
    image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=400',
    quantity: 12,
    onPromotion: false
  },
  {
    id: '5',
    name: 'Ciberseguridad',
    description: 'Protección integral de sistemas, datos y redes empresariales',
    price: 3000,
    image: 'https://images.pexels.com/photos/5380603/pexels-photo-5380603.jpeg?auto=compress&cs=tinysrgb&w=400',
    quantity: 8,
    onPromotion: true
  },
  {
    id: '6',
    name: 'Análisis de Datos',
    description: 'Business Intelligence y análisis predictivo con Machine Learning',
    price: 2800,
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
    quantity: 11,
    onPromotion: false
  },
  {
    id: '7',
    name: 'Marketing Digital',
    description: 'Estrategias SEO, SEM y gestión de redes sociales',
    price: 1800,
    image: 'https://images.pexels.com/photos/64769/pexels-photo-64769.jpeg?auto=compress&cs=tinysrgb&w=400',
    quantity: 18,
    onPromotion: false
  },
  {
    id: '8',
    name: 'Soporte Técnico',
    description: 'Mantenimiento preventivo y correctivo de sistemas informáticos 24/7',
    price: 1200,
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=400',
    quantity: 25,
    onPromotion: true
  },
  {
    id: '9',
    name: 'Diseño UX/UI',
    description: 'Diseño de experiencias de usuario intuitivas y atractivas',
    price: 2200,
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=400',
    quantity: 14,
    onPromotion: false
  },
  {
    id: '10',
    name: 'Automatización',
    description: 'Automatización de procesos empresariales con RPA y AI',
    price: 3200,
    image: 'https://images.pexels.com/photos/7719939/pexels-photo-7719939.jpeg?auto=compress&cs=tinysrgb&w=400',
    quantity: 9,
    onPromotion: true
  }
];

export const initialUsers: User[] = [
  {
    id: '1',
    username: 'admin',
    password: 'admin123',
    isAdmin: true
  }
];
