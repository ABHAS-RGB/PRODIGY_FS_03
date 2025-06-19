import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.',
    price: 16599,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Electronics',
    rating: 4.8,
    inStock: true,
    features: ['Noise Cancellation', '30-hour Battery', 'Wireless Charging', 'Premium Sound'],
    reviews: [
      {
        id: '1',
        userName: 'John D.',
        rating: 5,
        comment: 'Amazing sound quality and comfort!',
        date: '2024-01-15'
      },
      {
        id: '2',
        userName: 'Sarah M.',
        rating: 4,
        comment: 'Great headphones, battery lasts all day.',
        date: '2024-01-10'
      }
    ]
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracker with heart rate monitoring, GPS, and smartphone integration. Track your health goals.',
    price: 24899,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Electronics',
    rating: 4.6,
    inStock: true,
    features: ['Heart Rate Monitor', 'GPS Tracking', 'Waterproof', 'Sleep Tracking'],
    reviews: [
      {
        id: '3',
        userName: 'Mike R.',
        rating: 5,
        comment: 'Perfect for my daily workouts!',
        date: '2024-01-12'
      }
    ]
  },
  {
    id: '3',
    name: 'Organic Coffee Beans',
    description: 'Premium organic coffee beans sourced from sustainable farms. Rich, full-bodied flavor for the perfect cup.',
    price: 2079,
    image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Food & Beverage',
    rating: 4.9,
    inStock: true,
    features: ['Organic Certified', 'Fair Trade', 'Medium Roast', 'Freshly Ground'],
    reviews: [
      {
        id: '4',
        userName: 'Emma L.',
        rating: 5,
        comment: 'Best coffee I\'ve ever tasted!',
        date: '2024-01-14'
      }
    ]
  },
  {
    id: '4',
    name: 'Eco-Friendly Water Bottle',
    description: 'Sustainable stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.',
    price: 2909,
    image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Lifestyle',
    rating: 4.7,
    inStock: true,
    features: ['Stainless Steel', 'Insulated', 'BPA Free', 'Leak Proof'],
    reviews: [
      {
        id: '5',
        userName: 'Alex K.',
        rating: 4,
        comment: 'Great bottle, keeps water cold all day.',
        date: '2024-01-11'
      }
    ]
  },
  {
    id: '5',
    name: 'Wireless Phone Charger',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design for home or office.',
    price: 4159,
    image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Electronics',
    rating: 4.5,
    inStock: true,
    features: ['Fast Charging', 'Universal Compatibility', 'LED Indicator', 'Anti-Slip Base'],
    reviews: [
      {
        id: '6',
        userName: 'Lisa P.',
        rating: 4,
        comment: 'Convenient and works well.',
        date: '2024-01-09'
      }
    ]
  },
  {
    id: '6',
    name: 'Artisan Handmade Candles',
    description: 'Hand-poured soy candles with natural essential oils. Creates a warm, relaxing atmosphere in any room.',
    price: 1579,
    image: 'https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Home & Garden',
    rating: 4.8,
    inStock: true,
    features: ['Soy Wax', 'Essential Oils', 'Hand-Poured', '40-Hour Burn Time'],
    reviews: [
      {
        id: '7',
        userName: 'Maria S.',
        rating: 5,
        comment: 'Beautiful scent and long-lasting!',
        date: '2024-01-13'
      }
    ]
  }
];