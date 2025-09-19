import React, { useState } from 'react';
import { User, LogOut, Search, ShoppingBag, Heart, Menu, X } from 'lucide-react';

export default function Header({ user, onLogout, cartCount, currentPage, onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-lg mr-3 flex items-center justify-center" style={{ backgroundColor: '#461959' }}>
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <h1 
              className="text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity"
              style={{ color: '#461959' }}
              onClick={() => onNavigate('products')}
            >
              UrbanLoom
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('products')}
              className={`font-medium transition-colors duration-200 ${
                currentPage === 'products' ? 'border-b-2 pb-1' : 'hover:opacity-70'
              }`}
              style={{ 
                color: currentPage === 'products' ? '#CD6688' : '#7A316F',
                borderColor: currentPage === 'products' ? '#CD6688' : 'transparent'
              }}
            >
              Products
            </button>
            <button 
              onClick={() => onNavigate('cart')}
              className={`font-medium transition-colors duration-200 ${
                currentPage === 'cart' ? 'border-b-2 pb-1' : 'hover:opacity-70'
              }`}
              style={{ 
                color: currentPage === 'cart' ? '#CD6688' : '#7A316F',
                borderColor: currentPage === 'cart' ? '#CD6688' : 'transparent'
              }}
            >
              Cart
            </button>
            <button 
              onClick={() => onNavigate('orders')}
              className={`font-medium transition-colors duration-200 ${
                currentPage === 'orders' ? 'border-b-2 pb-1' : 'hover:opacity-70'
              }`}
              style={{ 
                color: currentPage === 'orders' ? '#CD6688' : '#7A316F',
                borderColor: currentPage === 'orders' ? '#CD6688' : 'transparent'
              }}
            >
              Orders
            </button>
          </nav>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8 hidden lg:block">
            <div className="relative">
              <Search className="absolute left-4 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-2 transition-all duration-300 bg-gray-50 focus:bg-white"
                style={{ '--tw-ring-color': '#AED8CC' }}
                onFocus={(e) => e.target.style.borderColor = '#AED8CC'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Wishlist */}
            <button 
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
              style={{ color: '#7A316F' }}
            >
              <Heart size={22} />
              <span className="absolute -top-1 -right-1 w-4 h-4 text-xs rounded-full flex items-center justify-center text-white" style={{ backgroundColor: '#CD6688' }}>
                3
              </span>
            </button>

            {/* Cart */}
            <button 
              onClick={() => onNavigate('cart')}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
              style={{ color: '#7A316F' }}
            >
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 text-xs rounded-full flex items-center justify-center text-white animate-pulse" style={{ backgroundColor: '#CD6688' }}>
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Profile */}
            <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#AED8CC' }}>
                  <User size={18} style={{ color: '#461959' }} />
                </div>
                <div className="hidden lg:block">
                  <span className="text-sm font-medium" style={{ color: '#461959' }}>
                    {user?.name || 'User'}
                  </span>
                </div>
              </div>
              <button
                onClick={onLogout}
                className="p-2 rounded-lg hover:bg-red-50 transition-colors"
                style={{ color: '#CD6688' }}
              >
                <LogOut size={18} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg"
            style={{ color: '#461959' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search className="absolute left-4 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-2 transition-all bg-gray-50 focus:bg-white"
                style={{ '--tw-ring-color': '#AED8CC' }}
                onFocus={(e) => e.target.style.borderColor = '#AED8CC'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            {/* Mobile Navigation */}
            <div className="space-y-2">
              <button 
                onClick={() => {
                  onNavigate('products');
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  currentPage === 'products' ? 'text-white' : 'hover:bg-gray-100'
                }`}
                style={currentPage === 'products' ? { backgroundColor: '#CD6688' } : { color: '#7A316F' }}
              >
                Products
              </button>
              <button 
                onClick={() => {
                  onNavigate('cart');
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-between ${
                  currentPage === 'cart' ? 'text-white' : 'hover:bg-gray-100'
                }`}
                style={currentPage === 'cart' ? { backgroundColor: '#CD6688' } : { color: '#7A316F' }}
              >
                Cart
                {cartCount > 0 && (
                  <span className="w-5 h-5 text-xs rounded-full flex items-center justify-center text-white" style={{ backgroundColor: '#461959' }}>
                    {cartCount}
                  </span>
                )}
              </button>
              <button 
                onClick={() => {
                  onNavigate('orders');
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  currentPage === 'orders' ? 'text-white' : 'hover:bg-gray-100'
                }`}
                style={currentPage === 'orders' ? { backgroundColor: '#CD6688' } : { color: '#7A316F' }}
              >
                Orders
              </button>
            </div>

            {/* Mobile User Section */}
            <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#AED8CC' }}>
                  <User size={18} style={{ color: '#461959' }} />
                </div>
                <span className="font-medium" style={{ color: '#461959' }}>
                  {user?.name || 'User'}
                </span>
              </div>
              <button
                onClick={onLogout}
                className="p-2 rounded-lg hover:bg-red-50 transition-colors"
                style={{ color: '#CD6688' }}
              >
                <LogOut size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}