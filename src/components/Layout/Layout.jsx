import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar';
import { asyncGetOwnProfile } from '../../states/authUser/action';
import { JWT_TOKEN_KEY } from '../../utils/constants';
import Loading from '../Loading';

function Layout() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authUser);
  const isLoading = useSelector((state) => state.loading.isLoading);

  useEffect(() => {
    if (pathname !== '/login' && pathname !== '/register') {
      if (localStorage.getItem(JWT_TOKEN_KEY) && !user?.id) {
        dispatch(asyncGetOwnProfile());
      }
    }
  }, [pathname, user?.id]);

  return (
    <div className="h-full min-h-screen box-content">

      <Navbar />
      <div style={{ height: 'calc(100vh - 96px)' }}>
        {isLoading && (
          <div className="h-full grid place-items-center">
            <Loading />
          </div>
        )}
        <Outlet />
      </div>

    </div>
  );
}

export default Layout;
