import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { JWT_TOKEN_KEY } from '../utils/constants';
import { asyncUnsetAuthUser } from '../states/authUser/action';

function Navbar() {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };

  return (
    <div className="bg-blue-900 flex justify-between items-center py-4 px-3 sm:px-8 h-24">
      <div className="flex items-center gap-4 sm:gap-8">
        <h1 className="hidden lg:block text-white text-2xl font-extrabold">Forum Berkicau</h1>
        <Link to="/">
          <p className="text-white">Threads</p>
        </Link>
        <Link to="/leaderboards">
          <p className="text-white">Leaderboards</p>
        </Link>
      </div>
      {(localStorage.getItem(JWT_TOKEN_KEY)) ? (
        <button
          type="button"
          className="py-1 px-4 text-sm rounded-sm text-red-950 bg-red-200"
          onClick={onLogout}
        >
          Logout
        </button>
      )
        : (
          <Link to="/login">
            <button
              type="button"
              className="py-1 px-4 text-sm rounded-sm text-blue-950 bg-blue-200"
            >
              Login
            </button>
          </Link>
        )}
    </div>
  );
}

export default Navbar;
