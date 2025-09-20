import React, { useState, useContext } from 'react';
import { Star, Heart, ShoppingBag, Filter, Grid, List, Zap, Truck, Shield, ArrowRight } from 'lucide-react';
import { CartContext } from '../contexts/CartContext';
import { productsData, categories } from '../data/ShoesData';

export default function ProductsPage() {
  const { cart, addToCart } = useContext(CartContext);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [wishlist, setWishlist] = useState([]);
  
  const filteredProducts = selectedCategory === 'all' 
    ? productsData 
    : productsData.filter(product => product.category.toLowerCase() === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'name': return a.name.localeCompare(b.name);
      default: return b.featured - a.featured;
    }
  });

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#AED8CC' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 left-10 w-16 h-16 rounded-full" style={{ backgroundColor: '#CD6688' }}></div>
          <div className="absolute top-16 right-20 w-12 h-12 rounded-full" style={{ backgroundColor: '#7A316F' }}></div>
          <div className="absolute bottom-10 left-1/4 w-8 h-8 rounded-full" style={{ backgroundColor: '#461959' }}></div>
          <div className="absolute bottom-16 right-1/3 w-20 h-20 rounded-full" style={{ backgroundColor: '#CD6688' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Hero Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4"
                style={{ backgroundColor: '#CD6688', color: 'white' }}
              >
                New Collection Available
              </span>
              <h1 className="text-3xl lg:text-5xl font-bold mb-4" style={{ color: '#461959' }}>
                Discover Your
                <span className="block" style={{ color: '#7A316F' }}>Perfect Style</span>
              </h1>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#461959', opacity: 0.8 }}>
                Style Delivered – Clothes, Shoes, Bags & Accessories, All in One Place!
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button 
                  className="px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center justify-center"
                  style={{ backgroundColor: '#CD6688' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#7A316F'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#CD6688'}
                >
                  Shop Collection
                  <ArrowRight className="ml-2" size={18} />
                </button>
                <button className="px-6 py-3 border-2 rounded-xl font-semibold transition-all duration-300 hover:bg-white hover:shadow-md" 
                  style={{ borderColor: '#7A316F', color: '#7A316F' }}>
                  View Lookbook
                </button>
              </div>

              {/* Compact Stats */}
              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="text-xl font-bold" style={{ color: '#461959' }}>50K+</div>
                  <div className="text-xs" style={{ color: '#7A316F', opacity: 0.7 }}>Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold" style={{ color: '#461959' }}>1K+</div>
                  <div className="text-xs" style={{ color: '#7A316F', opacity: 0.7 }}>Products</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold" style={{ color: '#461959' }}>4.9★</div>
                  <div className="text-xs" style={{ color: '#7A316F', opacity: 0.7 }}>Rating</div>
                </div>
              </div>
            </div>

            {/* Interactive Model Image */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Main circular frame */}
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white/50 shadow-2xl relative">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
                    alt="Fashion Model"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  
                  {/* Interactive overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
                  
                  {/* Floating interaction elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-all">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Floating product cards around the circle */}
                <div className="absolute -top-4 left-8 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-white/50 transform -rotate-12 hover:rotate-0 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=32&h=32&fit=crop" alt="Shoe" className="w-8 h-8 object-cover rounded-md" />
                    <div>
                      <p className="text-xs font-semibold" style={{ color: '#461959' }}>Sneakers</p>
                      <p className="text-xs" style={{ color: '#CD6688' }}>$129</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-16 -right-8 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-white/50 transform rotate-12 hover:rotate-0 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=32&h=32&fit=crop" alt="Bag" className="w-8 h-8 object-cover rounded-md" />
                    <div>
                      <p className="text-xs font-semibold" style={{ color: '#461959' }}>Bags</p>
                      <p className="text-xs" style={{ color: '#CD6688' }}>$89</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 -left-6 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-white/50 transform -rotate-6 hover:rotate-0 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=32&h=32&fit=crop" alt="Watch" className="w-8 h-8 object-cover rounded-md" />
                    <div>
                      <p className="text-xs font-semibold" style={{ color: '#461959' }}>Watches</p>
                      <p className="text-xs" style={{ color: '#CD6688' }}>$199</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 right-12 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-white/50 transform rotate-6 hover:rotate-0 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=32&h=32&fit=crop" alt="Sunglasses" className="w-8 h-8 object-cover rounded-md" />
                    <div>
                      <p className="text-xs font-semibold" style={{ color: '#461959' }}>Eyewear</p>
                      <p className="text-xs" style={{ color: '#CD6688' }}>$59</p>
                    </div>
                  </div>
                </div>

                {/* Decorative rings around the circle */}
                <div className="absolute inset-0 w-80 h-80 rounded-full border-2 border-dashed border-white/30 animate-spin" style={{ animation: 'spin 20s linear infinite' }}></div>
                <div className="absolute -inset-4 w-88 h-88 rounded-full border border-white/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#461959' }}>
            Our Premium Collection
          </h2>
          <p className="text-lg" style={{ color: '#7A316F', opacity: 0.8 }}>
            Curated selection of the finest products for every style and occasion
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.id ? 'text-white shadow-lg transform scale-105' : 'hover:shadow-md'
                  }`}
                  style={selectedCategory === category.id 
                    ? { backgroundColor: '#CD6688' }
                    : { backgroundColor: '#f8fafc', color: '#7A316F' }
                  }
                >
                  <span>{category.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category.id ? 'bg-white/30' : ''
                  }`} style={selectedCategory !== category.id ? { backgroundColor: '#AED8CC', color: '#461959' } : {}}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center space-x-4">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-2 transition-all"
                style={{ '--tw-ring-color': '#AED8CC' }}
                onFocus={(e) => e.target.style.borderColor = '#AED8CC'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name A-Z</option>
              </select>

              <div className="flex border-2 border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 transition-all ${viewMode === 'grid' ? 'text-white' : ''}`}
                  style={viewMode === 'grid' ? { backgroundColor: '#CD6688' } : { color: '#7A316F' }}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 transition-all ${viewMode === 'list' ? 'text-white' : ''}`}
                  style={viewMode === 'list' ? { backgroundColor: '#CD6688' } : { color: '#7A316F' }}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {sortedProducts.map(product => (
            <div key={product.id} className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group ${
              viewMode === 'list' ? 'flex' : ''
            }`}>
              <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                    viewMode === 'list' ? 'w-full h-48' : 'w-full h-64'
                  }`}
                />
                
                {/* Product Badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-2">
                  {product.sale && (
                    <span className="px-2 py-1 text-xs font-bold text-white rounded-lg animate-pulse" style={{ backgroundColor: '#CD6688' }}>
                      SALE
                    </span>
                  )}
                  {product.featured && (
                    <span className="px-2 py-1 text-xs font-bold text-white rounded-lg" style={{ backgroundColor: '#461959' }}>
                      FEATURED
                    </span>
                  )}
                </div>

                {/* Stock Indicator */}
                <span className="absolute top-3 right-3 px-2 py-1 text-xs text-white rounded-lg bg-black/50 backdrop-blur-sm">
                  {product.stock} left
                </span>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute bottom-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                    wishlist.includes(product.id) 
                      ? 'text-white shadow-lg' 
                      : 'bg-white/80 hover:bg-white text-gray-600 hover:text-red-500'
                  }`}
                  style={wishlist.includes(product.id) ? { backgroundColor: '#CD6688' } : {}}
                >
                  <Heart 
                    size={18} 
                    className={wishlist.includes(product.id) ? 'fill-current' : ''} 
                  />
                </button>
              </div>
              
              <div className={`p-4 flex-1 ${viewMode === 'list' ? 'flex flex-col justify-between' : ''}`}>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold px-2 py-1 rounded-full" 
                      style={{ backgroundColor: '#AED8CC', color: '#461959' }}>
                      {product.category}
                    </span>
                    {product.subcategory && (
                      <span className="text-xs" style={{ color: '#7A316F', opacity: 0.7 }}>
                        {product.subcategory}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2" style={{ color: '#461959' }}>
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < Math.floor(product.rating) 
                              ? 'fill-current text-yellow-400' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm" style={{ color: '#7A316F', opacity: 0.7 }}>
                      ({product.rating})
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-xl font-bold" style={{ color: '#461959' }}>
                      ${product.price}
                    </span>
                    {product.sale && (
                      <span className="text-sm line-through" style={{ color: '#7A316F', opacity: 0.5 }}>
                        ${product.originalPrice}
                      </span>
                    )}
                    {product.sale && (
                      <span className="text-sm font-semibold px-2 py-1 rounded text-white" style={{ backgroundColor: '#CD6688' }}>
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(product)}
                  className="w-full text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                  style={{ backgroundColor: '#CD6688' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#7A316F'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#CD6688'}
                >
                  <ShoppingBag className="mr-2" size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {sortedProducts.length > 8 && (
          <div className="text-center mt-12">
            <button 
              className="px-8 py-4 border-2 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
              style={{ 
                borderColor: '#CD6688', 
                color: '#CD6688',
                ':hover': { backgroundColor: '#CD6688', color: 'white' }
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#CD6688';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#CD6688';
              }}
            >
              Load More Products
            </button>
          </div>
        )}

        {/* Newsletter Section */}
        <div className="mt-16 text-center p-12 rounded-2xl" style={{ backgroundColor: '#AED8CC' }}>
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#461959' }}>
            Stay Updated with Latest Trends
          </h3>
          <p className="mb-6" style={{ color: '#7A316F', opacity: 0.8 }}>
            Subscribe to our newsletter and get 10% off your first order
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border-2 border-white/50 rounded-xl focus:outline-none focus:border-white bg-white/50 backdrop-blur-sm"
            />
            <button 
              className="px-6 py-3 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: '#CD6688' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#7A316F'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#CD6688'}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}