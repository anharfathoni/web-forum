/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { asyncLoginAuthUser } from '../states/authUser/action';

function Login() {
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onLogin = () => {
    dispatch(asyncLoginAuthUser({ email, password }));
  };

  return (
    <div className="p-8 flex flex-col gap-4 w-full md:w-3/4 lg:w-2/4 mx-auto">
      <p className="font-bold text-lg">Login Page</p>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="border-2 w-full mb-4"
          type="text"
          value={email}
          onChange={onChangeEmail}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className="border-2 w-full mb-4"
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        <button
          type="submit"
          className="border rounded-md bg-blue-900 text-white text-sm font-bold px-4 py-1 w-full"
          onClick={onLogin}
        >
          Kirim
        </button>
      </div>
      <p>
        Belum punya akun?
        {' '}
        <Link to="/register" className="text-blue-500 underline">Daftar di sini.</Link>
      </p>
    </div>
  );
}

export default Login;
