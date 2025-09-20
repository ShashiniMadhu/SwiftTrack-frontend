// Mock data for products
export const productsData = [
  // Shoes
  {
    id: 1,
    name: "Air Max Pro",
    category: "Shoes",
    subcategory: "Running",
    price: 129.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    stock: 15,
    rating: 4.5,
    sale: true,
    featured: true
  },
  {
    id: 2,
    name: "Classic Canvas",
    category: "Shoes",
    subcategory: "Casual",
    price: 79.99,
    originalPrice: 89.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    stock: 8,
    rating: 4.2,
    sale: true,
    featured: false
  },
  {
    id: 3,
    name: "Sport Elite",
    category: "Shoes",
    subcategory: "Sports",
    price: 199.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    stock: 12,
    rating: 4.8,
    sale: false,
    featured: true
  },
  {
    id: 4,
    name: "Urban Walker",
    category: "Shoes",
    subcategory: "Casual",
    price: 89.99,
    originalPrice: 109.99,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
    stock: 6,
    rating: 4.3,
    sale: true,
    featured: false
  },
  {
    id: 5,
    name: "Elegant Oxfords",
    category: "Shoes",
    subcategory: "Formal",
    price: 149.99,
    originalPrice: 179.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    stock: 10,
    rating: 4.6,
    sale: true,
    featured: true
  },
  // Clothing
  {
    id: 6,
    name: "Premium Hoodie",
    category: "Clothing",
    subcategory: "Hoodies",
    price: 59.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    stock: 20,
    rating: 4.4,
    sale: true,
    featured: true
  },
  {
    id: 7,
    name: "Designer T-Shirt",
    category: "Clothing",
    subcategory: "T-Shirts",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    stock: 25,
    rating: 4.1,
    sale: true,
    featured: false
  },
  {
    id: 8,
    name: "Casual Jeans",
    category: "Clothing",
    subcategory: "Jeans",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
    stock: 18,
    rating: 4.3,
    sale: true,
    featured: false
  },
  {
    id: 9,
    name: "Summer Dress",
    category: "Clothing",
    subcategory: "Dresses",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
    stock: 12,
    rating: 4.7,
    sale: true,
    featured: true
  },
  // Accessories
  {
    id: 10,
    name: "Luxury Watch",
    category: "Accessories",
    subcategory: "Watches",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    stock: 5,
    rating: 4.9,
    sale: true,
    featured: true
  },
  {
    id: 11,
    name: "Designer Sunglasses",
    category: "Accessories",
    subcategory: "Sunglasses",
    price: 159.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
    stock: 15,
    rating: 4.5,
    sale: true,
    featured: true
  },
  {
    id: 12,
    name: "Leather Wallet",
    category: "Accessories",
    subcategory: "Wallets",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    stock: 30,
    rating: 4.2,
    sale: true,
    featured: false
  },
  {
    id: 13,
    name: "Canvas Backpack",
    category: "Accessories",
    subcategory: "Bags",
    price: 69.99,
    originalPrice: 89.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    stock: 22,
    rating: 4.4,
    sale: true,
    featured: false
  },
  // Electronics
  {
    id: 14,
    name: "Wireless Earbuds",
    category: "Electronics",
    subcategory: "Audio",
    price: 99.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    stock: 8,
    rating: 4.6,
    sale: true,
    featured: true
  },
  {
    id: 15,
    name: "Smart Fitness Tracker",
    category: "Electronics",
    subcategory: "Wearables",
    price: 179.99,
    originalPrice: 219.99,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop",
    stock: 12,
    rating: 4.7,
    sale: true,
    featured: true
  },
  {
    id: 16,
    name: "Portable Speaker",
    category: "Electronics",
    subcategory: "Audio",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    stock: 15,
    rating: 4.3,
    sale: true,
    featured: false
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: productsData.length },
  { id: 'shoes', name: 'Shoes', count: productsData.filter(p => p.category === 'Shoes').length },
  { id: 'clothing', name: 'Clothing', count: productsData.filter(p => p.category === 'Clothing').length },
  { id: 'accessories', name: 'Accessories', count: productsData.filter(p => p.category === 'Accessories').length },
  { id: 'electronics', name: 'Electronics', count: productsData.filter(p => p.category === 'Electronics').length }
];