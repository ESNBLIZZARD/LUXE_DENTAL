import { Service, Testimonial, TechItem } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Smile Makeovers',
    description: 'Transform your smile with a personalized combination of treatments designed to achieve your aesthetic goals.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
    category: 'Cosmetic'
  },
  {
    id: '2',
    title: 'Invisalign®',
    description: 'The clear alternative to braces. Discreetly straighten your teeth with custom-made, removable aligners.',
    image: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800',
    category: 'Orthodontic'
  },
  {
    id: '3',
    title: 'Porcelain Veneers',
    description: 'Achieve a flawless, natural-looking smile with ultra-thin porcelain shells custom-bonded to your teeth.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
    category: 'Cosmetic'
  },
  {
    id: '4',
    title: 'Dental Implants',
    description: 'The gold standard for tooth replacement. Permanent, natural-feeling solutions for missing teeth.',
    image: 'https://images.unsplash.com/photo-1513224502586-d1e602410265?auto=format&fit=crop&q=80&w=800',
    category: 'Restorative'
  },
  {
    id: '5',
    title: 'Teeth Whitening',
    description: 'Professional-grade whitening for immediate, dramatic results that store-bought kits cannot match.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
    category: 'Cosmetic'
  },
  {
    id: '6',
    title: 'Emergency Care',
    description: 'Same-day urgent dental care when you need it most. Pain relief and immediate treatment.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    category: 'Emergency'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alexandra Sterling',
    text: 'I\'ve never felt more comfortable in a dental chair. The spa-like environment completely removed my anxiety, and my smile has never looked better.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ff6a96bbe3?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '2',
    name: 'James Harrison',
    text: 'Advanced technology and a team that genuinely cares. My Invisalign journey was seamless and faster than I expected.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    text: 'The most premium dental experience in the city. From the massage chairs to the professional staff, everything is top-tier.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  }
];

export const TECH_ITEMS: TechItem[] = [
  {
    id: '1',
    title: 'AI Diagnostics',
    description: 'Early detection of issues using advanced machine learning algorithms.',
    icon: 'Cpu'
  },
  {
    id: '2',
    title: '3D Digital Scanning',
    description: 'Say goodbye to messy impressions with our precision 3D oral scanners.',
    icon: 'ScanEye'
  },
  {
    id: '3',
    title: 'Laser Dentistry',
    description: 'Minimally invasive, painless treatments for gum health and cavity prep.',
    icon: 'Zap'
  },
  {
    id: '4',
    title: 'Digital Smile Design',
    description: 'See your final results before we even begin with our digital simulation.',
    icon: 'Smile'
  }
];
