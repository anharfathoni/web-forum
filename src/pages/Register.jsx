/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { authRegister } from '../services/auth';

function Register() {
  const navigate = useNavigate();
  const [name, onChangeName] = useInput('');
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmit = async () => {
    try {
      await authRegister({ name, email, password });
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="p-8 flex flex-col gap-4 w-full md:w-3/4 lg:w-2/4 mx-auto">
      <p className="font-bold text-lg">Register Page</p>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          className="border-2 w-full mb-4"
          type="text"
          value={name}
          onChange={onChangeName}
        />
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
          onClick={onSubmit}
        >
          Kirim
        </button>
      </div>
      <p>
        Sudah punya akun?
        {' '}
        <Link to="/login" className="text-blue-500 underline">
          Login di sini.
        </Link>
      </p>
    </div>
  );
}

export default Register;
