export const categories = [
  { name: 'Construction', icon: '🏗️', workers: 1234, color: 'from-orange-400 to-red-500' },
  { name: 'Plumbing', icon: '🔧', workers: 856, color: 'from-blue-400 to-blue-600' },
  { name: 'Electrical', icon: '⚡', workers: 692, color: 'from-yellow-400 to-orange-500' },
  { name: 'Carpentry', icon: '🪚', workers: 543, color: 'from-green-400 to-green-600' },
  { name: 'Painting', icon: '🎨', workers: 421, color: 'from-purple-400 to-purple-600' },
  { name: 'Cleaning', icon: '🧽', workers: 387, color: 'from-pink-400 to-pink-600' },
  { name: 'Gardening', icon: '🌱', workers: 298, color: 'from-emerald-400 to-teal-500' },
  { name: 'Moving', icon: '📦', workers: 234, color: 'from-indigo-400 to-purple-500' }
];

export const workers = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    category: 'Construction Specialist',
    rating: 4.9,
    reviews: 127,
    price: 800,
    image: '/images/Rectangle.png',
    available: true,
    experience: '8+ years',
    skills: ['Residential', 'Commercial', 'Renovation']
  },
  {
    id: 2,
    name: 'Amit Sharma',
    category: 'Master Electrician',
    rating: 4.8,
    reviews: 94,
    price: 1200,
    image: '/images/Rectangle.png',
    available: true,
    experience: '12+ years',
    skills: ['Home Automation', 'Solar', 'Wiring']
  },
  {
    id: 3,
    name: 'Priya Singh',
    category: 'Interior Painter',
    rating: 4.9,
    reviews: 156,
    price: 600,
    image: '/images/Rectangle.png',
    available: false,
    experience: '6+ years',
    skills: ['Decorative', 'Textures', 'Wall Art']
  },
  {
    id: 4,
    name: 'Mohammed Ali',
    category: 'Plumbing Expert',
    rating: 4.7,
    reviews: 89,
    price: 900,
    image: '/images/Rectangle.png',
    available: true,
    experience: '10+ years',
    skills: ['Pipe Fitting', 'Drainage', 'Repairs']
  }
];

export const locations = [
  { value: 'mumbai', label: 'Mumbai' },
  { value: 'delhi', label: 'Delhi' },
  { value: 'bangalore', label: 'Bangalore' },
  { value: 'chennai', label: 'Chennai' },
  { value: 'kolkata', label: 'Kolkata' },
  { value: 'pune', label: 'Pune' },
  { value: 'hyderabad', label: 'Hyderabad' },
  { value: 'ahmedabad', label: 'Ahmedabad' }
];