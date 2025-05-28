import { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jennifer Roberts',
    role: 'Homeowner',
    content: 'The team at Real Stone & Granite provided exceptional service from start to finish. They helped me select the perfect quartzite for my kitchen and the installation was flawless. I couldn\'t be happier with the results!',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Interior Designer',
    company: 'Chen Design Associates',
    content: 'As an interior designer, I rely on quality materials and reliable suppliers. Real Stone & Granite has been my go-to source for years. Their selection is unmatched, and their knowledge of stone is impressive.',
    rating: 5
  },
  {
    id: '3',
    name: 'Robert Williams',
    role: 'Contractor',
    company: 'Williams Construction',
    content: 'We\'ve completed numerous projects with Real Stone & Granite, and they consistently deliver high-quality products on time. Their team is professional and accommodating, making them our preferred stone supplier.',
    rating: 4
  },
  {
    id: '4',
    name: 'Sarah Johnson',
    role: 'Architect',
    company: 'Johnson & Partners Architecture',
    content: 'Real Stone & Granite has been instrumental in helping us realize our design visions. Their vast selection of natural stones allows us to find exactly what our clients need, no matter how specific the requirements.',
    rating: 5
  }
];

export const getFeaturedTestimonials = (limit = 3) => {
  return testimonials.slice(0, limit);
};