import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, CheckCircle, AlertCircle, Sparkles, Shield, Truck } from 'lucide-react';

export default function AuthPage({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!isLogin) {
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      onLogin({ 
        name: formData.name || formData.email.split('@')[0], 
        email: formData.email 
      });
      setIsLoading(false);
    }, 1500);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Welcome Section */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden" style={{ backgroundColor: '#AED8CC' }}>
        <div className="relative z-10 flex flex-col justify-center px-16 w-full">
          {/* Brand Section */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl mr-4 flex items-center justify-center" style={{ backgroundColor: '#461959' }}>
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl font-bold" style={{ color: '#461959' }}>UrbanLoom</h1>
            </div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#7A316F' }}>
              Step Into Premium Style
            </h2>
            <p className="text-xl leading-relaxed" style={{ color: '#461959', opacity: 0.8 }}>
              Discover the world's finest footwear collection. From premium sneakers to elegant formal shoes.
            </p>
          </div>
          
          {/* Features */}
          <div className="space-y-6 mb-12">
            <div className="flex items-center space-x-4 p-4 bg-white/30 backdrop-blur-sm rounded-xl">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#CD6688' }}>
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#461959' }}>Premium Quality</h3>
                <p className="text-sm" style={{ color: '#7A316F', opacity: 0.7 }}>Handpicked premium products</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-white/30 backdrop-blur-sm rounded-xl">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#7A316F' }}>
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#461959' }}>Fast Delivery</h3>
                <p className="text-sm" style={{ color: '#7A316F', opacity: 0.7 }}>Free shipping worldwide</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-white/30 backdrop-blur-sm rounded-xl">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#461959' }}>
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#461959' }}>Secure Shopping</h3>
                <p className="text-sm" style={{ color: '#7A316F', opacity: 0.7 }}>30-day return guarantee</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white/20 backdrop-blur-sm rounded-xl">
              <div className="text-2xl font-bold" style={{ color: '#461959' }}>50K+</div>
              <div className="text-sm" style={{ color: '#7A316F', opacity: 0.7 }}>Happy Customers</div>
            </div>
            <div className="text-center p-4 bg-white/20 backdrop-blur-sm rounded-xl">
              <div className="text-2xl font-bold" style={{ color: '#461959' }}>1000+</div>
              <div className="text-sm" style={{ color: '#7A316F', opacity: 0.7 }}>Products</div>
            </div>
            <div className="text-center p-4 bg-white/20 backdrop-blur-sm rounded-xl">
              <div className="text-2xl font-bold" style={{ color: '#461959' }}>4.9★</div>
              <div className="text-sm" style={{ color: '#7A316F', opacity: 0.7 }}>Rating</div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full opacity-20" style={{ backgroundColor: '#CD6688' }}></div>
        <div className="absolute bottom-32 right-32 w-20 h-20 rounded-full opacity-20" style={{ backgroundColor: '#7A316F' }}></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 rounded-full opacity-15" style={{ backgroundColor: '#461959' }}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full opacity-15" style={{ backgroundColor: '#CD6688' }}></div>
      </div>

      {/* Right Side - Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Logo for mobile */}
          <div className="text-center lg:hidden mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 rounded-lg mr-3 flex items-center justify-center" style={{ backgroundColor: '#461959' }}>
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold" style={{ color: '#461959' }}>ShoeMarket</h1>
            </div>
          </div>

          {/* Form Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2" style={{ color: '#461959' }}>
              {isLogin ? 'Welcome Back!' : 'Join ShoeMarket'}
            </h2>
            <p style={{ color: '#7A316F', opacity: 0.7 }}>
              {isLogin 
                ? 'Sign in to access your account and continue shopping' 
                : 'Create your account and start your style journey'
              }
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex rounded-2xl p-1 mb-8" style={{ backgroundColor: '#AED8CC', opacity: 0.3 }}>
            <button
              onClick={() => {
                setIsLogin(true);
                setErrors({});
                setFormData({ email: '', password: '', name: '', confirmPassword: '' });
              }}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                isLogin 
                  ? 'bg-white text-white shadow-lg transform scale-[1.02]' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              style={isLogin ? { backgroundColor: '#CD6688', color: 'white' } : {}}
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setIsLogin(false);
                setErrors({});
                setFormData({ email: '', password: '', name: '', confirmPassword: '' });
              }}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                !isLogin 
                  ? 'bg-white text-white shadow-lg transform scale-[1.02]' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              style={!isLogin ? { backgroundColor: '#CD6688', color: 'white' } : {}}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field (Sign Up only) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#461959' }}>
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-4 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      errors.name 
                        ? 'border-red-300 bg-red-50 focus:ring-red-200' 
                        : 'border-gray-200 bg-white focus:ring-2'
                    }`}
                    style={!errors.name ? { focusRingColor: '#AED8CC' } : {}}
                  />
                  {errors.name && (
                    <div className="flex items-center mt-2 text-red-600">
                      <AlertCircle size={16} className="mr-2" />
                      <span className="text-sm">{errors.name}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#461959' }}>
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-4 text-gray-400" size={18} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 ${
                    errors.email 
                      ? 'border-red-300 bg-red-50 focus:ring-red-200' 
                      : 'border-gray-200 bg-white focus:ring-2'
                  }`}
                  style={!errors.email ? { '&:focus': { ringColor: '#AED8CC' } } : {}}
                />
                {errors.email && (
                  <div className="flex items-center mt-2 text-red-600">
                    <AlertCircle size={16} className="mr-2" />
                    <span className="text-sm">{errors.email}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#461959' }}>
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-4 text-gray-400" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className={`w-full pl-12 pr-12 py-4 border-2 rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 ${
                    errors.password 
                      ? 'border-red-300 bg-red-50 focus:ring-red-200' 
                      : 'border-gray-200 bg-white focus:ring-2'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                {errors.password && (
                  <div className="flex items-center mt-2 text-red-600">
                    <AlertCircle size={16} className="mr-2" />
                    <span className="text-sm">{errors.password}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Confirm Password Field (Sign Up only) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#461959' }}>
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-4 text-gray-400" size={18} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      errors.confirmPassword 
                        ? 'border-red-300 bg-red-50 focus:ring-red-200' 
                        : 'border-gray-200 bg-white focus:ring-2'
                    }`}
                  />
                  {errors.confirmPassword && (
                    <div className="flex items-center mt-2 text-red-600">
                      <AlertCircle size={16} className="mr-2" />
                      <span className="text-sm">{errors.confirmPassword}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Remember Me & Forgot Password */}
            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 rounded focus:ring-2"
                    style={{ 
                      accentColor: '#CD6688',
                      '--tw-ring-color': '#AED8CC'
                    }}
                  />
                  <span className="ml-2 text-sm" style={{ color: '#7A316F' }}>Remember me</span>
                </label>
                <button 
                  type="button" 
                  className="text-sm font-medium hover:underline transition-all duration-200"
                  style={{ color: '#CD6688' }}
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 shadow-lg hover:shadow-xl flex items-center justify-center"
              style={{ 
                backgroundColor: isLoading ? '#94a3b8' : '#CD6688',
                ':hover': { backgroundColor: '#7A316F' }
              }}
              onMouseEnter={(e) => !isLoading && (e.target.style.backgroundColor = '#7A316F')}
              onMouseLeave={(e) => !isLoading && (e.target.style.backgroundColor = '#CD6688')}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Processing...
                </div>
              ) : (
                <div className="flex items-center">
                  {isLogin ? 'Sign In to Account' : 'Create My Account'}
                  <ArrowRight className="ml-2" size={18} />
                </div>
              )}
            </button>
          </form>

          {/* Terms & Conditions (Sign Up only) */}
          {!isLogin && (
            <p className="text-center text-xs mt-6" style={{ color: '#7A316F', opacity: 0.7 }}>
              By creating an account, you agree to our{' '}
              <button className="font-medium hover:underline" style={{ color: '#CD6688' }}>Terms of Service</button>
              {' '}and{' '}
              <button className="font-medium hover:underline" style={{ color: '#CD6688' }}>Privacy Policy</button>
            </p>
          )}

          {/* Social Login */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gray-50" style={{ color: '#7A316F', opacity: 0.7 }}>Or continue with</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all duration-200 bg-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="ml-2 text-sm font-medium" style={{ color: '#461959' }}>Google</span>
              </button>
              
              <button className="flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all duration-200 bg-white">
                <svg className="w-5 h-5" fill="#1877f2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="ml-2 text-sm font-medium" style={{ color: '#461959' }}>Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}