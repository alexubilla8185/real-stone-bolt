import { Stone } from '../types';

export const stones: Stone[] = [
  {
    id: 'white-carrara-marble',
    name: 'White Carrara Marble',
    type: 'marble',
    colors: ['white', 'gray'],
    images: [
      'https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg',
      'https://images.pexels.com/photos/5824901/pexels-photo-5824901.jpeg',
    ],
    description: 'Classic Italian marble with a white background and soft gray veining. Elegant and timeless, perfect for sophisticated interiors.',
    features: [
      'Elegant white background with subtle gray veining',
      'Medium hardness and durability',
      'Classic, timeless appearance',
      'Naturally cool surface'
    ],
    origin: 'Italy',
    finishes: ['Polished', 'Honed', 'Brushed'],
    applications: ['Countertops', 'Vanities', 'Flooring', 'Wall Cladding'],
    dimensions: {
      length: 120,
      width: 70,
      thickness: 2
    },
    inStock: true
  },
  {
    id: 'blue-bahia-granite',
    name: 'Blue Bahia Granite',
    type: 'granite',
    colors: ['blue', 'black', 'gray'],
    images: [
      'https://images.pexels.com/photos/2062262/pexels-photo-2062262.jpeg',
      'https://images.pexels.com/photos/7319316/pexels-photo-7319316.jpeg',
    ],
    description: 'Stunning Brazilian granite with deep blue tones and dramatic movement. This rare stone creates a luxurious statement in any space.',
    features: [
      'Vibrant blue coloration with black and white minerals',
      'Excellent durability and hardness',
      'Resistant to scratches and heat',
      'Unique, exotic appearance'
    ],
    origin: 'Brazil',
    finishes: ['Polished', 'Leathered'],
    applications: ['Countertops', 'Accent Walls', 'Luxury Flooring'],
    dimensions: {
      length: 110,
      width: 65,
      thickness: 3
    },
    inStock: false
  },
  {
    id: 'calacatta-gold-quartzite',
    name: 'Calacatta Gold Quartzite',
    type: 'quartzite',
    colors: ['white', 'gold', 'gray'],
    images: [
      'https://images.pexels.com/photos/3457284/pexels-photo-3457284.jpeg',
      'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg',
    ],
    description: 'Luxurious quartzite with a white background and stunning gold veining. Offers the beauty of marble with enhanced durability.',
    features: [
      'White background with dramatic gold veining',
      'Superior hardness and durability',
      'Resistant to etching and staining',
      'Heat and scratch resistant'
    ],
    origin: 'Brazil',
    finishes: ['Polished', 'Honed'],
    applications: ['Countertops', 'Vanities', 'Kitchen Islands', 'Backsplashes'],
    dimensions: {
      length: 125,
      width: 75,
      thickness: 3
    },
    inStock: true
  },
  {
    id: 'black-galaxy-granite',
    name: 'Black Galaxy Granite',
    type: 'granite',
    colors: ['black', 'gold'],
    images: [
      'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg',
      'https://images.pexels.com/photos/9821672/pexels-photo-9821672.jpeg',
    ],
    description: 'Iconic black granite from India featuring gold flecks that resemble stars in the night sky. Creates a dramatic and elegant look.',
    features: [
      'Deep black background with gold/bronze flecks',
      'Excellent durability and scratch resistance',
      'Heat resistant',
      'Low maintenance'
    ],
    origin: 'India',
    finishes: ['Polished', 'Honed'],
    applications: ['Countertops', 'Flooring', 'Bar Tops', 'Vanities'],
    dimensions: {
      length: 115,
      width: 70,
      thickness: 3
    },
    inStock: true
  },
  {
    id: 'white-quartz',
    name: 'Pure White Quartz',
    type: 'quartz',
    colors: ['white'],
    images: [
      'https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg',
      'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg',
    ],
    description: 'Engineered quartz with a clean, consistent white appearance. Perfect for modern, minimalist spaces requiring durability and low maintenance.',
    features: [
      'Uniform white appearance',
      'Non-porous and stain resistant',
      'No sealing required',
      'Consistent color and pattern',
      'Highly durable'
    ],
    origin: 'Engineered',
    finishes: ['Polished', 'Matte'],
    applications: ['Countertops', 'Vanities', 'Commercial Surfaces'],
    dimensions: {
      length: 120,
      width: 65,
      thickness: 2
    },
    inStock: true
  },
  {
    id: 'silver-travertine',
    name: 'Silver Travertine',
    type: 'travertine',
    colors: ['silver', 'beige', 'gray'],
    images: [
      'https://images.pexels.com/photos/5824553/pexels-photo-5824553.jpeg',
      'https://images.pexels.com/photos/6444266/pexels-photo-6444266.jpeg',
    ],
    description: 'Natural travertine with beautiful silver-gray tones. This porous stone creates a rustic yet elegant look for both indoor and outdoor applications.',
    features: [
      'Natural silver-gray coloration',
      'Porous texture with natural cavities',
      'Cool to the touch',
      'Creates a Mediterranean aesthetic'
    ],
    origin: 'Turkey',
    finishes: ['Honed', 'Tumbled', 'Brushed'],
    applications: ['Flooring', 'Wall Cladding', 'Outdoor Patios', 'Shower Walls'],
    dimensions: {
      length: 100,
      width: 60,
      thickness: 2
    },
    inStock: true
  }
];

export const getStonesByType = (type: string) => {
  return stones.filter(stone => stone.type === type);
};

export const getStoneById = (id: string) => {
  return stones.find(stone => stone.id === id);
};

export const getRelatedStones = (id: string, limit = 3) => {
  const stone = getStoneById(id);
  if (!stone) return [];
  
  return stones
    .filter(s => s.id !== id && s.type === stone.type)
    .slice(0, limit);
};