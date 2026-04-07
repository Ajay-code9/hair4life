export interface Service {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  imageUrl: string;
}
