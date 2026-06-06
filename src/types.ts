export interface Service {
  id: string;
  name: string;
  category: 'clinical' | 'emergency' | 'diagnostic' | 'scheme';
  description: string;
  icon: string;
  details: string[];
}

export interface Doctor {
  id: string;
  name: string;
  speciality: string;
  education: string;
  experience: string;
  availability: string;
  status: 'Available Today' | 'On Call' | 'In Surgery' | 'Next Available: Tomorrow';
  avatarSeed: string;
  services?: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  relation: string;
  text: string;
  rating: number;
}
