import React from 'react';

// This component can be used for protecting routes that require authentication
export default function ProtectedRoute({ children, user, fallback }) {
  if (!user) {
    return fallback || null;
  }
  
  return children;
}