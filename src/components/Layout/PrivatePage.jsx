import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { JWT_TOKEN_KEY } from '../../utils/constants';

function PrivatePage() {
  if (!localStorage.getItem(JWT_TOKEN_KEY)) {
    return <Navigate to="/login" />;
  }

  return (
    <Outlet />
  );
}

export default PrivatePage;
