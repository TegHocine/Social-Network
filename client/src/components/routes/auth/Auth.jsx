import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { authUser, loadUser } from '../../../features/userReducer';
import { useDispatch, useSelector } from 'react-redux';

import LogoTeal from '../../../assets/neuron.svg';
import Register from './Register';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const Auth = () => {
  const [alert, setAlert] = useState('');
  const [auth, setAuth] = useState({ email: '', password: '' });
  const { email, password } = auth;
  const dispatch = useDispatch();

  const theme = localStorage.theme;
  useLayoutEffect(() => {
    document.documentElement.classList.add(theme);
    //eslint-disable-next-line
  }, []);

  const user = useSelector((state) => state.user);
  const { isAuthenticated, errors, token } = user;
  useEffect(() => {
    dispatch(loadUser(token));
    //eslint-disable-next-line
  }, []);
  if (isAuthenticated) return <Navigate to='/' />;

  const onChange = (e) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please enter all fields');
    } else {
      dispatch(authUser(auth));
    }
  };

  return (
    <div className='h-screen max-w-lg flex justify-center items-center text-inherit container mx-auto'>
      <form onSubmit={onSubmit} method='post'>
        <div className='flex justify-center'>
          <img src={LogoTeal} alt='logo' className='w-14' />
        </div>
        {errors !== null && (
          <div className='px-3 mb-1'>
            {errors.map((error) => (
              <div
                key={error.length + 1}
                className='bg-red-900 text-sm text-gray-300 p-2'>
                <span className='pr-1'>
                  <FontAwesomeIcon icon={faCircleExclamation} />
                </span>
                {error.msg}
              </div>
            ))}
          </div>
        )}
        <div className='flex justify-center items-center'>
          <div className='p-6'>
            <div className='border-b border-b-gray-300 dark:border-b-gray-700 pb-4'>
              <label htmlFor='email'>
                <input
                  type='email'
                  value={email}
                  name='email'
                  placeholder='E-mail'
                  className='w-full h-12 bg-inherit rounded-full outline-none border  border-gray-700 focus:border-teal-400 px-10 placeholder:text-gray-600 dark:placeholder:text-gray-400'
                  onChange={onChange}
                  required
                />
              </label>
              <label htmlFor='password'>
                <input
                  type='password'
                  value={password}
                  name='password'
                  placeholder='Password'
                  className='w-full h-12 bg-inherit rounded-full outline-none border  border-gray-700 focus:border-teal-400 px-10 placeholder:text-gray-600 dark:placeholder:text-gray-400 mt-4'
                  onChange={onChange}
                  required
                />
              </label>
              <div className='mt-6'>
                <button
                  type='submit'
                  className='w-full h-12 rounded-full bg-teal-600 text-white hover:bg-teal-700'>
                  Login
                </button>
              </div>
            </div>
            <div className='mt-6 flex justify-center'>
              <Register />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Auth;
