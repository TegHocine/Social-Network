import React, { useEffect } from 'react'
import SideBar from './components/layouts/sidebars/SideBar'
import Widgets from './components/layouts/widgets/Widgets'
import {
  Feed,
  Message,
  Notification,
  Profile,
  Auth,
  ProtectedRoute,
  PageNotFound
} from './components/routes/index'

import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from './features/userReducer'
import './style/App.css'

const App = () => {
  const dispatch = useDispatch()

  const userState = useSelector((state) => state.user)
  const { status, isAuthenticated } = userState

  const token = localStorage.getItem('token')

  useEffect(() => {
    const theme = localStorage.theme
    document.documentElement.classList.add(theme)
    dispatch(loadUser(token))
    //eslint-disable-next-line
  }, [token])

  const location = useLocation()
  return (
    <div className='bg-white text-gray-900 dark:text-white dark:bg-gray-900 w-full'>
      {location.pathname === '/auth' ? (
        <Auth />
      ) : (
        <div className='flex container mx-auto bg-inherit'>
          <div className='hidden  sm:flex w-16 lg:flex-0/2 hidden hover:scroll-smooth h-screen'>
            <SideBar />
          </div>
          <div className='flex-1 lg:flex-0/5'>
            <Routes>
              <Route
                path='/'
                element={
                  <ProtectedRoute
                    component={Feed}
                    iAuth={isAuthenticated}
                    status={status}
                  />
                }
              />
              <Route
                path='notifications'
                element={
                  <ProtectedRoute
                    component={Notification}
                    iAuth={isAuthenticated}
                    status={status}
                  />
                }
              />
              <Route
                path='messages'
                element={
                  <ProtectedRoute
                    component={Message}
                    iAuth={isAuthenticated}
                    status={status}
                  />
                }
              />
              <Route
                path='profile'
                element={
                  <ProtectedRoute
                    component={Profile}
                    iAuth={isAuthenticated}
                    status={status}
                  />
                }
              />
              <Route path='*' element={<Navigate to='/pagenotfound' />} />
              <Route
                path='/pagenotfound'
                element={
                  <ProtectedRoute
                    component={PageNotFound}
                    iAuth={isAuthenticated}
                    status={status}
                  />
                }
              />
            </Routes>
          </div>

          <div className='flex-none md:flex-0/3'>
            <Widgets />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
