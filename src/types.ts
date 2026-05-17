export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'Cosmetic' | 'General' | 'Restorative' | 'Orthodontic' | 'Emergency';
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  image?: string;
}

export interface TechItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}
