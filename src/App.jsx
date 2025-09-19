import React, { useState, useContext } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider, CartContext } from './contexts/CartContext';
import Header from './components/Header';
import AuthPage from './pages/Auth';
import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';
import CheckoutPage from './pages/Checkout';
import OrdersPage from './pages/Orders';

// Main App Component
function AppContent() {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('products');
  const { cart } = useContext(CartContext);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('products');
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'products':
        return <ProductsPage />;
      case 'cart':
        return <CartPage onNavigate={handleNavigate} />;
      case 'checkout':
        return <CheckoutPage onNavigate={handleNavigate} />;
      case 'orders':
        return <OrdersPage />;
      default:
        return <ProductsPage />;
    }
  };

  if (!user) {
    return <AuthPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header 
        user={user} 
        onLogout={handleLogout} 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartCount={cart.reduce((count, item) => count + item.quantity, 0)}
      />
      {renderCurrentPage()}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  );
}