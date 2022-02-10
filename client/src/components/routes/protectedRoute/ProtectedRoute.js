import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loadUser } from '../../../features/userReducer';

import Spinner from '../../layouts/spinner/Spinner';
const PrivateRoute = ({ component: Component }) => {
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.user);

  const { token, status, isAuthenticated } = userState;
  useEffect(() => {
    dispatch(loadUser(token));
    //eslint-disable-next-line
  }, []);

  if (status === 'loading') return <Spinner />;
  if (isAuthenticated) {
    return <Component />;
  } else {
    return <Navigate to='/auth' />;
  }
};

export default PrivateRoute;
