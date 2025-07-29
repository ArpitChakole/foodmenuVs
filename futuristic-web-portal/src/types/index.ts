export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface Package {
  id: string;
  name: 'Gold' | 'Silver' | 'Platinum';
  features: string[];
  price: number;
}

export interface CustomizationOptions {
  snacks: string[];
  mainCourses: string[];
  desserts: string[];
}