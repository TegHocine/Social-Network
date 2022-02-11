import React from 'react';
import { Navigate } from 'react-router-dom';
import Spinner from '../../layouts/spinner/Spinner';

const PrivateRoute = ({ component: Component, ...props }) => {
  if (props.status === 'loading') return <Spinner />;
  if (props.auth) {
    return <Component />;
  } else {
    return <Navigate to='/auth' />;
  }
};

export default PrivateRoute;
