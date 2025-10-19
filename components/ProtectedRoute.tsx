import React from 'react';
import { Navigate } from 'react-router-dom';

// FIX: Use React.PropsWithChildren for idiomatic typing of components accepting children.
const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const isAuthenticated = sessionStorage.getItem('sarvangini-admin-auth') === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/admin-login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
