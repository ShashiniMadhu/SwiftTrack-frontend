import React, { useState, useContext } from 'react';
import { CheckCircle, ArrowLeft, CreditCard, Truck, Shield, MapPin, Phone, User, Mail, Calendar, Lock } from 'lucide-react';
import { CartContext } from '../contexts/CartContext';

export default function CheckoutPage({ onNavigate }) {
  const { cart, clearCart } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = total * 0.08;
  const shipping = total > 100 ? 0 : 9.99;
  const finalTotal = total + tax + shipping;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      onNavigate('orders');
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50">
        <section className="relative overflow-hidden" style={{ backgroundColor: '#AED8CC' }}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full" style={{ backgroundColor: '#CD6688' }}></div>
            <div className="absolute top-32 right-20 w-16 h-16 rounded-full" style={{ backgroundColor: '#7A316F' }}></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full" style={{ backgroundColor: '#461959' }}></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto px-4 py-24 text-center">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full flex items-center justify-center animate-pulse" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
              <CheckCircle size={64} className="text-green-500" />
            </div>
            
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#461959' }}>
              Order Placed Successfully! 🎉
            </h2>
            
            <p className="text-lg mb-8" style={{ color: '#7A316F', opacity: 0.8 }}>
              Thank you for your purchase. Your order is being processed and you'll receive a confirmation email shortly.
            </p>
            
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border-2 max-w-md mx-auto" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
              <p className="text-sm font-medium mb-2" style={{ color: '#461959' }}>Order Total</p>
              <p className="text-2xl font-bold" style={{ color: '#7A316F' }}>${finalTotal.toFixed(2)}</p>
            </div>
            
            <div className="mt-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: 'rgba(205, 102, 136, 0.2)', color: '#CD6688' }}>
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Redirecting to orders page...
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Checkout Header */}
      <section className="relative overflow-hidden py-16" style={{ backgroundColor: '#AED8CC' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full" style={{ backgroundColor: '#CD6688' }}></div>
          <div className="absolute top-32 right-20 w-16 h-16 rounded-full" style={{ backgroundColor: '#7A316F' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full" style={{ backgroundColor: '#461959' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <button 
                onClick={() => onNavigate('cart')}
                className="flex items-center mb-4 px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:shadow-md"
                style={{ backgroundColor: 'rgba(255,255,255,0.3)', color: '#461959' }}
              >
                <ArrowLeft size={18} className="mr-2" />
                Back to Cart
              </button>
              
              <h1 className="text-4xl font-bold mb-2" style={{ color: '#461959' }}>
                Secure Checkout
              </h1>
              <p className="text-lg" style={{ color: '#7A316F', opacity: 0.8 }}>
                Complete your order securely and safely
              </p>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border-2" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
            <div className="flex items-center justify-between text-sm font-medium" style={{ color: '#461959' }}>
              <span className="flex items-center opacity-50">
                <div className="w-8 h-8 rounded-full mr-2 flex items-center justify-center border-2" style={{ borderColor: '#7A316F', color: '#7A316F' }}>1</div>
                Cart Review
              </span>
              <span className="flex items-center">
                <div className="w-8 h-8 rounded-full mr-2 flex items-center justify-center text-white" style={{ backgroundColor: '#CD6688' }}>2</div>
                Checkout
              </span>
              <span className="flex items-center">
                <div className="w-8 h-8 rounded-full mr-2 flex items-center justify-center text-white" style={{ backgroundColor: '#7A316F' }}>3</div>
                Payment
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h3 className="text-xl font-bold mb-6" style={{ color: '#461959' }}>
                Order Summary
              </h3>
              
              {/* Items */}
              <div className="space-y-4 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-xs font-bold text-white flex items-center justify-center" style={{ backgroundColor: '#CD6688' }}>
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm" style={{ color: '#461959' }}>
                        {item.name}
                      </p>
                      <p className="text-xs" style={{ color: '#7A316F', opacity: 0.7 }}>
                        ${item.price} each
                      </p>
                    </div>
                    <p className="font-semibold" style={{ color: '#461959' }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Totals */}
              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between" style={{ color: '#7A316F' }}>
                  <span>Subtotal</span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between" style={{ color: '#7A316F' }}>
                  <span>Tax (8%)</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between" style={{ color: '#7A316F' }}>
                  <span>Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between text-xl font-bold" style={{ color: '#461959' }}>
                  <span>Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Security Badge */}
              <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: '#AED8CC', opacity: 0.3 }}>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" style={{ color: '#461959' }} />
                  <p className="text-sm font-medium" style={{ color: '#461959' }}>
                    256-bit SSL Secured Checkout
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Forms */}
          <div className="lg:col-span-2 order-1 lg:order-2 space-y-8">
            {/* Delivery Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{ backgroundColor: '#AED8CC' }}>
                  <Truck className="w-6 h-6" style={{ color: '#461959' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: '#461959' }}>
                    Delivery Information
                  </h3>
                  <p className="text-sm" style={{ color: '#7A316F', opacity: 0.7 }}>
                    Where should we send your order?
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#7A316F' }}>
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5" style={{ color: '#7A316F', opacity: 0.5 }} />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none transition-all"
                      onFocus={(e) => e.target.style.borderColor = '#AED8CC'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#7A316F' }}>
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5" style={{ color: '#7A316F', opacity: 0.5 }} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none transition-all"
                      onFocus={(e) => e.target.style.borderColor = '#AED8CC'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#7A316F' }}>
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5" style={{ color: '#7A316F', opacity: 0.5 }} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none transition-all"
                      onFocus={(e) => e.target.style.borderColor = '#AED8CC'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#7A316F' }}>
                    ZIP Code *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5" style={{ color: '#7A316F', opacity: 0.5 }} />
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="12345"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none transition-all"
                      onFocus={(e) => e.target.style.borderColor = '#AED8CC'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2" style={{ color: '#7A316F' }}>
                    Street Address *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5" style={{ color: '#7A316F', opacity: 0.5 }} />
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="123 Main Street, Apt 4B"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none transition-all"
                      onFocus={(e) => e.target.style.borderColor = '#AED8CC'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2" style={{ color: '#7A316F' }}>
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="New York"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none transition-all"
                    onFocus={(e) => e.target.style.borderColor = '#AED8CC'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{ backgroundColor: '#CD6688', opacity: 0.1 }}>
                  <CreditCard className="w-6 h-6" style={{ color: '#CD6688' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: '#461959' }}>
                    Payment Information
                  </h3>
                  <p className="text-sm" style={{ color: '#7A316F', opacity: 0.7 }}>
                    Your payment details are secure and encrypted
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2" style={{ color: '#7A316F' }}>
                    Name on Card *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5" style={{ color: '#7A316F', opacity: 0.5 }} />
                    <input
                      type="text"
                      name="nameOnCard"
                      value={formData.nameOnCard}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none transition-all"
                      onFocus={(e) => e.target.style.borderColor = '#AED8CC'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2" style={{ color: '#7A316F' }}>
                    Card Number *
                  </label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-3 w-5 h-5" style={{ color: '#7A316F', opacity: 0.5 }} />
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none transition-all"
                      onFocus={(e) => e.target.style.borderColor = '#AED8CC'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#7A316F' }}>
                    Expiry Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-5 h-5" style={{ color: '#7A316F', opacity: 0.5 }} />
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none transition-all"
                      onFocus={(e) => e.target.style.borderColor = '#AED8CC'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#7A316F' }}>
                    CVV *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-5 h-5" style={{ color: '#7A316F', opacity: 0.5 }} />
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none transition-all"
                      onFocus={(e) => e.target.style.borderColor = '#AED8CC'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: '#f8fafc' }}>
                <p className="text-sm font-medium mb-3" style={{ color: '#461959' }}>
                  We accept these payment methods:
                </p>
                <div className="flex space-x-3">
                  <div className="w-12 h-8 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                  <div className="w-12 h-8 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                  <div className="w-12 h-8 bg-blue-400 rounded text-white text-xs flex items-center justify-center font-bold">AMEX</div>
                  <div className="w-12 h-8 bg-yellow-400 rounded text-white text-xs flex items-center justify-center font-bold">PP</div>
                </div>
              </div>
            </div>

            {/* Place Order Button */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <button
                onClick={handlePlaceOrder}
                className="w-full text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center justify-center text-lg"
                style={{ backgroundColor: '#CD6688' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#7A316F'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#CD6688'}
              >
                <Lock className="mr-3" size={20} />
                Complete Order - ${finalTotal.toFixed(2)}
              </button>
              
              <p className="text-center text-xs mt-4" style={{ color: '#7A316F', opacity: 0.7 }}>
                By placing your order, you agree to our Terms of Service and Privacy Policy. 
                Your payment information is encrypted and secure.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-6" style={{ color: '#461959' }}>
            Shop with Confidence
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <Shield className="w-12 h-12 mx-auto mb-4" style={{ color: '#461959' }} />
              <h4 className="font-bold mb-2" style={{ color: '#461959' }}>Secure Payments</h4>
              <p className="text-sm" style={{ color: '#7A316F', opacity: 0.7 }}>256-bit SSL encryption protects your data</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <Truck className="w-12 h-12 mx-auto mb-4" style={{ color: '#CD6688' }} />
              <h4 className="font-bold mb-2" style={{ color: '#461959' }}>Fast Delivery</h4>
              <p className="text-sm" style={{ color: '#7A316F', opacity: 0.7 }}>Free shipping on orders over $100</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <CheckCircle className="w-12 h-12 mx-auto mb-4" style={{ color: '#7A316F' }} />
              <h4 className="font-bold mb-2" style={{ color: '#461959' }}>Money Back Guarantee</h4>
              <p className="text-sm" style={{ color: '#7A316F', opacity: 0.7 }}>30-day return policy on all items</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}