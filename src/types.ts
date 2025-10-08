export type ViewType = 'home' | 'services' | 'serviceDetail' | 'login' | 'admin' | 'cart';

export interface User {
  id: string;
  username: string;
  password?: string;
  isAdmin: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  onPromotion: boolean;
  image: string;
}

export interface Purchase {
  id: string;
  items: Service[];
  total: number;
  date: string;
}