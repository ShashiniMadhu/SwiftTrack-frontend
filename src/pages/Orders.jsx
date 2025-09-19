import React, { useState } from 'react';
import { Package, Truck, CheckCircle, Clock, MapPin, Calendar, Star, Eye, RotateCcw } from 'lucide-react';

export default function OrdersPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [orders] = useState([
    {
      id: 'ORD001',
      date: '2024-01-15',
      status: 'delivered',
      total: 259.98,
      estimatedDelivery: '2024-01-20',
      trackingNumber: 'TRK123456789',
      deliveredDate: '2024-01-19',
      items: [
        { 
          name: 'Air Max Pro', 
          quantity: 1, 
          price: 129.99, 
          image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop&crop=center'
        },
        { 
          name: 'Classic Canvas', 
          quantity: 1, 
          price: 129.99, 
          image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=300&h=300&fit=crop&crop=center'
        }
      ]
    },
    {
      id: 'ORD002',
      date: '2024-01-18',
      status: 'on_delivery',
      total: 199.99,
      estimatedDelivery: '2024-01-22',
      trackingNumber: 'TRK987654321',
      items: [
        { 
          name: 'Sport Elite', 
          quantity: 1, 
          price: 199.99, 
          image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=300&h=300&fit=crop&crop=center'
        }
      ]
    },
    {
      id: 'ORD003',
      date: '2024-01-20',
      status: 'accepted',
      total: 89.99,
      estimatedDelivery: '2024-01-25',
      trackingNumber: 'TRK456789123',
      items: [
        { 
          name: 'Casual Comfort', 
          quantity: 1, 
          price: 89.99, 
          image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop&crop=center'
        }
      ]
    },
    {
      id: 'ORD004',
      date: '2024-01-21',
      status: 'pending',
      total: 349.97,
      estimatedDelivery: '2024-01-26',
      items: [
        { 
          name: 'Premium Leather', 
          quantity: 2, 
          price: 174.99, 
          image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=300&h=300&fit=crop&crop=center'
        }
      ]
    }
  ]);

  const statusConfig = {
    pending: {
      label: 'Order Pending',
      color: '#CD6688',
      bgColor: 'rgba(205, 102, 136, 0.1)',
      icon: Clock,
      description: 'We\'re reviewing your order',
      progress: 25
    },
    accepted: {
      label: 'Order Confirmed',
      color: '#7A316F',
      bgColor: 'rgba(122, 49, 111, 0.1)',
      icon: Package,
      description: 'Your order is being prepared',
      progress: 50
    },
    on_delivery: {
      label: 'Out for Delivery',
      color: '#461959',
      bgColor: 'rgba(70, 25, 89, 0.1)',
      icon: Truck,
      description: 'Your package is on the way',
      progress: 75
    },
    delivered: {
      label: 'Delivered',
      color: '#22c55e',
      bgColor: 'rgba(34, 197, 94, 0.1)',
      icon: CheckCircle,
      description: 'Successfully delivered',
      progress: 100
    }
  };

  const getStatusSteps = (currentStatus) => {
    const steps = [
      { key: 'pending', label: 'Pending', icon: Clock },
      { key: 'accepted', label: 'Confirmed', icon: Package },
      { key: 'on_delivery', label: 'Shipping', icon: Truck },
      { key: 'delivered', label: 'Delivered', icon: CheckCircle }
    ];

    const currentIndex = steps.findIndex(step => step.key === currentStatus);
    
    return steps.map((step, index) => ({
      ...step,
      isActive: index <= currentIndex,
      isCurrent: index === currentIndex
    }));
  };

  const filteredOrders = selectedFilter === 'all' 
    ? orders 
    : orders.filter(order => order.status === selectedFilter);

  const filterOptions = [
    { id: 'all', label: 'All Orders', count: orders.length },
    { id: 'pending', label: 'Pending', count: orders.filter(o => o.status === 'pending').length },
    { id: 'accepted', label: 'Confirmed', count: orders.filter(o => o.status === 'accepted').length },
    { id: 'on_delivery', label: 'Shipping', count: orders.filter(o => o.status === 'on_delivery').length },
    { id: 'delivered', label: 'Delivered', count: orders.filter(o => o.status === 'delivered').length }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Orders Header */}
      <section className="relative overflow-hidden py-16" style={{ backgroundColor: '#AED8CC' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full" style={{ backgroundColor: '#CD6688' }}></div>
          <div className="absolute top-32 right-20 w-16 h-16 rounded-full" style={{ backgroundColor: '#7A316F' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full" style={{ backgroundColor: '#461959' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
              <Package size={32} style={{ color: '#461959' }} />
            </div>
            
            <h1 className="text-4xl font-bold mb-4" style={{ color: '#461959' }}>
              My Orders
            </h1>
            <p className="text-lg" style={{ color: '#7A316F', opacity: 0.8 }}>
              Track and manage all your orders in one place
            </p>
          </div>

          {/* Order Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {filterOptions.slice(1).map((filter) => {
              const config = statusConfig[filter.id];
              return (
                <div key={filter.id} className="bg-white/40 backdrop-blur-sm rounded-2xl p-4 border-2" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: config.color }}>
                      <config.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold" style={{ color: '#461959' }}>
                        {filter.count}
                      </div>
                      <div className="text-sm" style={{ color: '#7A316F', opacity: 0.7 }}>
                        {filter.label}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Orders Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Filter Tabs */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <div className="flex flex-wrap gap-2">
            {filterOptions.map(filter => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedFilter === filter.id ? 'text-white shadow-lg transform scale-105' : 'hover:shadow-md'
                }`}
                style={selectedFilter === filter.id 
                  ? { backgroundColor: '#CD6688' }
                  : { backgroundColor: '#f8fafc', color: '#7A316F' }
                }
              >
                <span>{filter.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  selectedFilter === filter.id ? 'bg-white/30' : ''
                }`} style={selectedFilter !== filter.id ? { backgroundColor: '#AED8CC', color: '#461959' } : {}}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {filteredOrders.map(order => {
            const config = statusConfig[order.status];
            const steps = getStatusSteps(order.status);
            
            return (
              <div key={order.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Order Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: config.bgColor }}>
                        <config.icon className="w-6 h-6" style={{ color: config.color }} />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold" style={{ color: '#461959' }}>
                          Order {order.id}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm" style={{ color: '#7A316F', opacity: 0.7 }}>
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(order.date).toLocaleDateString('en-US', { 
                              month: 'long', day: 'numeric', year: 'numeric' 
                            })}
                          </span>
                          {order.trackingNumber && (
                            <span>Tracking: {order.trackingNumber}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold mb-1" style={{ color: '#461959' }}>
                        ${order.total.toFixed(2)}
                      </div>
                      <div className="flex items-center justify-end space-x-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium`} 
                          style={{ backgroundColor: config.bgColor, color: config.color }}>
                          {config.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Progress */}
                <div className="p-6 border-b border-gray-100" style={{ backgroundColor: '#f8fafc' }}>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium" style={{ color: '#7A316F' }}>
                        Order Progress
                      </span>
                      <span className="text-sm" style={{ color: '#7A316F', opacity: 0.7 }}>
                        {config.progress}% Complete
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-500" 
                        style={{ backgroundColor: config.color, width: `${config.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Status Steps */}
                  <div className="grid grid-cols-4 gap-4">
                    {steps.map((step, index) => (
                      <div key={step.key} className="flex flex-col items-center text-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                          step.isActive 
                            ? 'text-white shadow-lg transform scale-110' 
                            : 'bg-gray-200 text-gray-400'
                        }`} style={step.isActive ? { backgroundColor: config.color } : {}}>
                          <step.icon size={16} />
                        </div>
                        <span className={`text-xs font-medium ${
                          step.isActive ? '' : 'opacity-50'
                        }`} style={step.isActive ? { color: '#461959' } : { color: '#7A316F' }}>
                          {step.label}
                        </span>
                        {step.isCurrent && (
                          <div className="mt-1 px-2 py-1 rounded-full text-xs animate-pulse" 
                            style={{ backgroundColor: config.bgColor, color: config.color }}>
                            Current
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Status Description & ETA */}
                  <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: config.color }}></div>
                      <span className="font-medium" style={{ color: '#461959' }}>
                        {config.description}
                      </span>
                    </div>
                    
                    {order.status !== 'delivered' && (
                      <div className="flex items-center space-x-2 text-sm" style={{ color: '#7A316F', opacity: 0.7 }}>
                        <MapPin className="w-4 h-4" />
                        <span>
                          Expected delivery: {new Date(order.estimatedDelivery).toLocaleDateString('en-US', { 
                            month: 'short', day: 'numeric'
                          })}
                        </span>
                      </div>
                    )}
                    
                    {order.status === 'delivered' && order.deliveredDate && (
                      <div className="flex items-center space-x-2 text-sm text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>
                          Delivered on {new Date(order.deliveredDate).toLocaleDateString('en-US', { 
                            month: 'short', day: 'numeric'
                          })}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-6">
                  <h4 className="font-bold mb-4" style={{ color: '#461959' }}>
                    Items ({order.items.reduce((sum, item) => sum + item.quantity, 0)})
                  </h4>
                  
                  <div className="space-y-4">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 rounded-xl border border-gray-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg shadow-sm"
                          onError={(e) => {
                            e.target.src = `data:image/svg+xml,${encodeURIComponent(`
                              <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
                                <rect width="80" height="80" fill="#f3f4f6"/>
                                <text x="40" y="45" text-anchor="middle" fill="#9ca3af" font-size="12">No Image</text>
                              </svg>
                            `)}`;
                          }}
                        />
                        
                        <div className="flex-1">
                          <h5 className="font-semibold" style={{ color: '#461959' }}>
                            {item.name}
                          </h5>
                          <p className="text-sm" style={{ color: '#7A316F', opacity: 0.7 }}>
                            Quantity: {item.quantity}
                          </p>
                        </div>
                        
                        <div className="text-right">
                          <p className="font-bold" style={{ color: '#461959' }}>
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Actions */}
                  <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-gray-100">
                    {order.status === 'delivered' && (
                      <>
                        <button className="px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:shadow-md flex items-center space-x-2" 
                          style={{ backgroundColor: '#AED8CC', color: '#461959' }}>
                          <Star className="w-4 h-4" />
                          <span>Rate & Review</span>
                        </button>
                        <button className="px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:shadow-md flex items-center space-x-2" 
                          style={{ backgroundColor: '#CD6688', color: 'white' }}>
                          <RotateCcw className="w-4 h-4" />
                          <span>Reorder</span>
                        </button>
                      </>
                    )}
                    
                    {order.trackingNumber && order.status !== 'delivered' && (
                      <button className="px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:shadow-md flex items-center space-x-2" 
                        style={{ backgroundColor: '#7A316F', color: 'white' }}>
                        <Eye className="w-4 h-4" />
                        <span>Track Package</span>
                      </button>
                    )}
                    
                    <button className="px-4 py-2 border-2 rounded-xl font-medium transition-all duration-300 hover:shadow-md" 
                      style={{ borderColor: '#CD6688', color: '#CD6688' }}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-16">
            <Package size={64} className="mx-auto mb-4" style={{ color: '#7A316F', opacity: 0.5 }} />
            <h3 className="text-xl font-bold mb-2" style={{ color: '#461959' }}>
              No orders found
            </h3>
            <p className="mb-6" style={{ color: '#7A316F', opacity: 0.7 }}>
              {selectedFilter === 'all' 
                ? "You haven't placed any orders yet." 
                : `No orders with status "${selectedFilter}" found.`}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}