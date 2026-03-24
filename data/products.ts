import { Product } from '../context/CartContext';

export const products: Product[] = [
  {
    id: "1",
    name: "Golden Hour Scented Candle",
    price: 3500.00,
    description: "A warm blend of amber, vetiver, and subtle citrus notes. Hand-poured using natural soy wax with a 60-hour burn time.",
    image: "https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?q=80&w=800&auto=format&fit=crop",
    category: "candles",
    featured: true
  },
  {
    id: "2",
    name: "Luxury Bath Soak Set",
    price: 4800.00,
    description: "Rejuvenate your senses with our Himalayan pink salt and essential oil bath blend. Comes in a reusable glass jar.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop",
    category: "bath"
  },
  {
    id: "3",
    name: "Minimalist Ceramic Vase",
    price: 6500.00,
    description: "Handcrafted unglazed ceramic vase perfect for dried florals or acting as a standalone sculptural piece.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    category: "home",
    featured: true
  },
  {
    id: "4",
    name: "Leather Bound Journal",
    price: 3200.00,
    description: "Premium lay-flat notebook featuring sustainable thick paper and an elegant genuine leather cover.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    category: "stationery",
    featured: true
  },
  {
    id: "5",
    name: "Midnight Fig & Jasmine Room Spray",
    price: 2800.00,
    description: "Instantly refresh any room with this sophisticated, moody scent. Leaves no residue.",
    image: "https://images.unsplash.com/photo-1499195333224-3ce974eecb47?q=80&w=800&auto=format&fit=crop",
    category: "home"
  },
  {
    id: "6",
    name: "Artisan Chocolate Truffle Box",
    price: 4500.00,
    description: "Assortment of handmade dark chocolate truffles infused with seasonal flavors.",
    image: "https://picsum.photos/seed/giftshop-choc/800/800",
    category: "food",
    featured: true
  },
  {
    id: "7",
    name: "Linen Apron",
    price: 5400.00,
    description: "100% European flax linen apron with large pockets and cross-back straps for ultimate comfort.",
    image: "https://images.unsplash.com/photo-1581622558667-3419a8dc5f83?q=80&w=800&auto=format&fit=crop",
    category: "home"
  },
  {
    id: "8",
    name: "Rose Quartz Face Roller set",
    price: 4200.00,
    description: "Enhance your skincare routine with genuine rose quartz tools to promote circulation and reduce puffiness.",
    image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=800&auto=format&fit=crop",
    category: "bath",
    featured: true
  },
  {
    id: "9",
    name: "Handcrafted Wooden Tray",
    price: 7500.00,
    description: "Elegant serving tray made from reclaimed teak. Finished with natural oils for a silky touch.",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop",
    category: "home"
  },
  {
    id: "10",
    name: "Marble & Brass Paperweight",
    price: 2200.00,
    description: "A solid block of white Carrara marble with an inlaid solid brass geometric element.",
    image: "https://images.unsplash.com/photo-1589182373726-e4f61f5c6612?q=80&w=800&auto=format&fit=crop",
    category: "stationery"
  },
  {
    id: "11",
    name: "Premium Loose Leaf Tea Set",
    price: 5800.00,
    description: "A curated trio of organic whole-leaf teas: Jasmine Green, Classic Earl Grey, and Kashmiri Kahwa.",
    image: "https://images.unsplash.com/photo-1582733363321-f09c73bd9324?q=80&w=800&auto=format&fit=crop",
    category: "food"
  },
  {
    id: "12",
    name: "Velvet Knot Pillow",
    price: 3800.00,
    description: "Soft velvet knot cushion in dusty rose. Hand-sewn and filled with hypoallergenic material.",
    image: "https://images.unsplash.com/photo-1584144408544-315197828003?q=80&w=800&auto=format&fit=crop",
    category: "home"
  }
];

export const getProducts = () => products;
export const getProductById = (id: string) => products.find(p => p.id === id);
export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductsByCategory = (category: string) => products.filter(p => p.category === category);
export const searchProducts = (query: string) => 
  products.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) || 
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  );
