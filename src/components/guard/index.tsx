// src/components/ProtectedRoute.tsx
import { type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../context/auth';

interface ProtectedRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

const AppGuard = ({ 
  children, 
  redirectTo = '/auth/signin' 
}: ProtectedRouteProps) => {
  const { isAuthenticated, loading } = useAuthContext();
  

  if (loading) {
    return <div>Loading...</div>; // Or your custom loading component
  }

  return isAuthenticated ? children : <Navigate to={redirectTo} replace />;
};

export default AppGuard;