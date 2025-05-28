import { Project } from '../types';
import { getStoneById } from './stones';

export const projects: Project[] = [
  {
    id: 'modern-white-kitchen',
    title: 'Modern White Kitchen',
    description: 'A stunning modern kitchen featuring elegant white quartzite countertops and a waterfall island. The natural stone creates a focal point in this bright, contemporary space.',
    type: 'kitchen',
    images: [
      'https://images.pexels.com/photos/6969824/pexels-photo-6969824.jpeg',
      'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg',
    ],
    stones: [getStoneById('calacatta-gold-quartzite')!],
    featured: true,
  },
  {
    id: 'luxury-master-bathroom',
    title: 'Luxury Master Bathroom',
    description: 'This opulent master bathroom showcases the timeless beauty of White Carrara Marble. The stone is used for the vanity countertops, shower walls, and flooring to create a cohesive, spa-like retreat.',
    type: 'bathroom',
    images: [
      'https://images.pexels.com/photos/6587905/pexels-photo-6587905.jpeg',
      'https://images.pexels.com/photos/6585602/pexels-photo-6585602.jpeg',
    ],
    stones: [getStoneById('white-carrara-marble')!],
    featured: true,
  },
  {
    id: 'contemporary-office-lobby',
    title: 'Contemporary Office Lobby',
    description: 'A sleek and sophisticated commercial lobby featuring dramatic Black Galaxy Granite flooring and accent walls. The stone\'s natural sparkle creates visual interest in this corporate space.',
    type: 'commercial',
    images: [
      'https://images.pexels.com/photos/261152/pexels-photo-261152.jpeg',
      'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg',
    ],
    stones: [getStoneById('black-galaxy-granite')!],
    featured: false,
  },
  {
    id: 'outdoor-pool-deck',
    title: 'Elegant Pool Deck',
    description: 'This luxurious outdoor space features Silver Travertine pavers that stay cool underfoot even in direct sunlight. The natural stone creates a beautiful transition from the pool to the landscaped areas.',
    type: 'outdoor',
    images: [
      'https://images.pexels.com/photos/261173/pexels-photo-261173.jpeg',
      'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg',
    ],
    stones: [getStoneById('silver-travertine')!],
    featured: true,
  }
];

export const getProjectsByType = (type: string) => {
  return projects.filter(project => project.type === type);
};

export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id);
};

export const getFeaturedProjects = (limit = 3) => {
  return projects
    .filter(project => project.featured)
    .slice(0, limit);
};