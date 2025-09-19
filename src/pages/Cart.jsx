import React, { useContext } from 'react';
import { ShoppingCart, Minus, Plus, Trash2, ArrowLeft, Gift, Shield, Truck, CreditCard } from 'lucide-react';
import { CartContext } from '../contexts/CartContext';

export default function CartPage({ onNavigate }) {
  const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + tax + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Empty Cart Hero */}
        <section className="relative overflow-hidden" style={{ backgroundColor: '#AED8CC' }}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full" style={{ backgroundColor: '#CD6688' }}></div>
            <div className="absolute top-32 right-20 w-16 h-16 rounded-full" style={{ backgroundColor: '#7A316F' }}></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full" style={{ backgroundColor: '#461959' }}></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto px-4 py-24 text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
              <ShoppingCart size={48} style={{ color: '#461959' }} />
            </div>
            
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#461959' }}>
              Your Cart is Empty
            </h2>
            
            <p className="text-lg mb-8" style={{ color: '#7A316F', opacity: 0.8 }}>
              Discover amazing products and start building your perfect collection
            </p>
            
            <button 
              onClick={() => onNavigate('products')}
              className="px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center mx-auto"
              style={{ backgroundColor: '#CD6688' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#7A316F'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#CD6688'}
            >
              <ArrowLeft className="mr-2" size={20} />
              Continue Shopping
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cart Header */}
      <section className="relative overflow-hidden py-16" style={{ backgroundColor: '#AED8CC' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full" style={{ backgroundColor: '#CD6688' }}></div>
          <div className="absolute top-32 right-20 w-16 h-16 rounded-full" style={{ backgroundColor: '#7A316F' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full" style={{ backgroundColor: '#461959' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2" style={{ color: '#461959' }}>
                Shopping Cart
              </h1>
              <p className="text-lg" style={{ color: '#7A316F', opacity: 0.8 }}>
                {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>
            
            <button 
              onClick={() => onNavigate('products')}
              className="px-6 py-3 border-2 rounded-xl font-semibold transition-all duration-300 hover:bg-white hover:shadow-md flex items-center"
              style={{ borderColor: '#7A316F', color: '#7A316F' }}
            >
              <ArrowLeft className="mr-2" size={18} />
              Continue Shopping
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border-2" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
            <div className="flex items-center justify-between text-sm font-medium" style={{ color: '#461959' }}>
              <span className="flex items-center">
                <div className="w-8 h-8 rounded-full mr-2 flex items-center justify-center text-white" style={{ backgroundColor: '#CD6688' }}>1</div>
                Cart Review
              </span>
              <span className="flex items-center opacity-50">
                <div className="w-8 h-8 rounded-full mr-2 flex items-center justify-center border-2" style={{ borderColor: '#7A316F', color: '#7A316F' }}>2</div>
                Checkout
              </span>
              <span className="flex items-center opacity-50">
                <div className="w-8 h-8 rounded-full mr-2 flex items-center justify-center border-2" style={{ borderColor: '#7A316F', color: '#7A316F' }}>3</div>
                Payment
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold" style={{ color: '#461959' }}>
                  Items in Cart
                </h3>
                {cart.length > 1 && (
                  <button
                    onClick={clearCart}
                    className="text-sm font-medium px-4 py-2 rounded-xl transition-all duration-300 hover:shadow-md"
                    style={{ backgroundColor: '#f8fafc', color: '#7A316F' }}
                  >
                    Clear All
                  </button>
                )}
              </div>
              
              <div className="space-y-6">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 rounded-2xl border-2 border-gray-100 hover:border-opacity-50 transition-all duration-300" style={{ '--tw-border-opacity': 0.3 }}>
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-xl"
                      />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold text-white flex items-center justify-center" style={{ backgroundColor: '#CD6688' }}>
                        {item.quantity}
                      </span>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-1" style={{ color: '#461959' }}>
                        {item.name}
                      </h4>
                      <p className="text-sm mb-2 px-2 py-1 rounded-full inline-block" style={{ backgroundColor: '#AED8CC', color: '#461959' }}>
                        {item.category}
                      </p>
                      <p className="text-sm" style={{ color: '#7A316F', opacity: 0.7 }}>
                        {item.stock} items available
                      </p>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-2">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-md"
                        style={{ backgroundColor: '#AED8CC', color: '#461959' }}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-semibold w-8 text-center" style={{ color: '#461959' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-md"
                        style={{ backgroundColor: '#CD6688', color: 'white' }}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-xl font-bold mb-2" style={{ color: '#461959' }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 rounded-lg transition-all duration-300 hover:shadow-md"
                        style={{ backgroundColor: '#f8fafc', color: '#CD6688' }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#CD6688';
                          e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = '#f8fafc';
                          e.target.style.color = '#CD6688';
                        }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4" style={{ color: '#461959' }}>
                Why Shop With Us?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 p-3 rounded-xl" style={{ backgroundColor: '#AED8CC', opacity: 0.3 }}>
                  <Shield className="w-8 h-8" style={{ color: '#461959' }} />
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#461959' }}>Secure Checkout</p>
                    <p className="text-xs" style={{ color: '#7A316F', opacity: 0.7 }}>SSL Protected</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-xl" style={{ backgroundColor: '#CD6688', opacity: 0.1 }}>
                  <Truck className="w-8 h-8" style={{ color: '#CD6688' }} />
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#461959' }}>Fast Delivery</p>
                    <p className="text-xs" style={{ color: '#7A316F', opacity: 0.7 }}>2-3 Days</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-xl" style={{ backgroundColor: '#7A316F', opacity: 0.1 }}>
                  <Gift className="w-8 h-8" style={{ color: '#7A316F' }} />
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#461959' }}>Gift Wrapping</p>
                    <p className="text-xs" style={{ color: '#7A316F', opacity: 0.7 }}>Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-6">
            <h3 className="text-xl font-bold mb-6" style={{ color: '#461959' }}>
              Order Summary
            </h3>
            
            {/* Promo Code */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" style={{ color: '#7A316F' }}>
                Promo Code
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none transition-all"
                  style={{ focusBorderColor: '#AED8CC' }}
                  onFocus={(e) => e.target.style.borderColor = '#AED8CC'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
                <button className="px-4 py-3 rounded-xl font-medium transition-all duration-300" style={{ backgroundColor: '#AED8CC', color: '#461959' }}>
                  Apply
                </button>
              </div>
            </div>
            
            {/* Order Details */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between" style={{ color: '#7A316F' }}>
                <span>Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between" style={{ color: '#7A316F' }}>
                <span>Tax</span>
                <span className="font-semibold">${tax.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between" style={{ color: '#7A316F' }}>
                <span>Shipping</span>
                <span className="font-semibold">
                  {shipping === 0 ? (
                    <span className="text-green-600 font-bold">Free</span>
                  ) : (
                    `$${shipping.toFixed(2)}`
                  )}
                </span>
              </div>
              
              {subtotal < 100 && shipping > 0 && (
                <div className="p-3 rounded-xl" style={{ backgroundColor: '#AED8CC', opacity: 0.3 }}>
                  <p className="text-sm font-medium" style={{ color: '#461959' }}>
                    Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                  </p>
                </div>
              )}
              
              <hr className="border-gray-200" />
              
              <div className="flex justify-between text-xl font-bold" style={{ color: '#461959' }}>
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            
            {/* Checkout Button */}
            <button 
              onClick={() => onNavigate('checkout')}
              className="w-full text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-105 mb-4 flex items-center justify-center"
              style={{ backgroundColor: '#CD6688' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#7A316F'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#CD6688'}
            >
              <CreditCard className="mr-2" size={18} />
              Proceed to Checkout
            </button>
            
            {/* Payment Methods */}
            <div className="text-center">
              <p className="text-xs mb-2" style={{ color: '#7A316F', opacity: 0.7 }}>
                We accept
              </p>
              <div className="flex justify-center space-x-2">
                <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">V</div>
                <div className="w-8 h-5 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">M</div>
                <div className="w-8 h-5 bg-blue-400 rounded text-white text-xs flex items-center justify-center font-bold">A</div>
                <div className="w-8 h-5 bg-yellow-400 rounded text-white text-xs flex items-center justify-center font-bold">P</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-16 text-center p-12 rounded-2xl" style={{ backgroundColor: '#AED8CC' }}>
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#461959' }}>
            Complete Your Look
          </h3>
          <p className="mb-6" style={{ color: '#7A316F', opacity: 0.8 }}>
            Discover products that pair perfectly with your cart items
          </p>
          <button 
            onClick={() => onNavigate('products')}
            className="px-8 py-3 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg"
            style={{ backgroundColor: '#CD6688' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#7A316F'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#CD6688'}
          >
            View Recommendations
          </button>
        </div>
      </section>
    </div>
  );
}