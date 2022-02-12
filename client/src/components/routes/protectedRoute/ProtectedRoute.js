import React from 'react'
import { Navigate } from 'react-router-dom'
import Spinner from '../../layouts/spinner/Spinner'

const PrivateRoute = ({ component: Component, status, iAuth }) => {
  if (status === 'loading') return <Spinner />

  if (iAuth) return <Component />

  return <Navigate to='/auth' />
}

export default PrivateRoute
