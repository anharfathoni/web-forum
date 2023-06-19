import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { JWT_TOKEN_KEY } from '../../utils/constants';

function AuthPage() {
  const user = useSelector((state) => state.authUser);

  if (localStorage.getItem(JWT_TOKEN_KEY) && user?.id) {
    return <Navigate to="/" />;
  }

  return (
    <Outlet />
  );
}

export default AuthPage;
