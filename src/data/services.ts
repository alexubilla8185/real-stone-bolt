import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'consultation',
    title: 'Consultation & Selection Assistance',
    description: 'Our experienced team provides personalized guidance to help you select the perfect stone for your project. We consider your design preferences, practical needs, and budget to ensure the best fit.',
    icon: 'search',
    features: [
      'One-on-one consultation with stone experts',
      'Material samples and visualization tools',
      'Detailed information about stone properties and maintenance',
      'Budget-friendly options and alternatives'
    ]
  },
  {
    id: 'fabrication',
    title: 'Fabrication Recommendations',
    description: 'We work with trusted fabricators who can transform our premium stone slabs into finished pieces with precision and craftsmanship. We can connect you with the right professionals for your specific needs.',
    icon: 'scissors',
    features: [
      'Referrals to qualified fabrication partners',
      'Custom edge profile options',
      'Specialized cutting and finishing techniques',
      'Coordination between selection and fabrication'
    ]
  },
  {
    id: 'installation',
    title: 'Installation Guidance',
    description: 'Proper installation is crucial for the beauty and longevity of natural stone. We provide recommendations and technical guidance to ensure your stone is installed correctly by qualified professionals.',
    icon: 'wrench',
    features: [
      'Installation best practices and requirements',
      'Referrals to experienced installers',
      'Technical specifications for contractors',
      'Post-installation inspection recommendations'
    ]
  },
  {
    id: 'delivery',
    title: 'Delivery Options',
    description: 'We offer flexible delivery solutions to transport your selected stone safely to your project location. Our careful handling procedures ensure your stone arrives in perfect condition.',
    icon: 'truck',
    features: [
      'Local and long-distance delivery',
      'Specialized stone transport equipment',
      'Careful handling and packaging',
      'Convenient scheduling options'
    ]
  },
  {
    id: 'custom',
    title: 'Custom Orders & Sourcing',
    description: 'Looking for something specific? Our global network allows us to source rare and specialty stones that aren\'t in our regular inventory. We can help you find that perfect, one-of-a-kind stone.',
    icon: 'globe',
    features: [
      'Access to global stone suppliers',
      'Specialty and exotic stone sourcing',
      'Custom slab dimensions',
      'Rare color and pattern matching'
    ]
  }
];

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};