export interface Stone {
  id: string;
  name: string;
  type: StoneType;
  colors: string[];
  images: string[];
  description: string;
  features: string[];
  origin: string;
  finishes: string[];
  applications: string[];
  dimensions: {
    length: number;
    width: number;
    thickness: number;
  };
  inStock: boolean;
}

export type StoneType = 
  | 'granite'
  | 'marble'
  | 'quartzite'
  | 'quartz'
  | 'travertine'
  | 'limestone'
  | 'onyx'
  | 'slate'
  | 'soapstone'
  | 'exotic';

export interface Project {
  id: string;
  title: string;
  description: string;
  type: ProjectType;
  images: string[];
  stones: Stone[];
  featured: boolean;
}

export type ProjectType = 
  | 'kitchen'
  | 'bathroom'
  | 'flooring'
  | 'outdoor'
  | 'commercial'
  | 'other';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  image?: string;
}