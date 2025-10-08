export interface Service {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    onPromotion: boolean;
  }
  
  export interface User {
    id: string;
    username: string;
    password: string;
    isAdmin: boolean;
  }
  
  export type ViewType = 'home' | 'services' | 'serviceDetail' | 'login' | 'admin';
  