import React from 'react';
import SideBar from './components/layouts/sidebars/SideBar';
import Widgets from './components/layouts/widgets/Widgets';
import {
  Feed,
  Message,
  Notification,
  Profile,
} from './components/routes/index';
import { Routes, Route } from 'react-router-dom';
import './style/App.css';

const App = () => {
  return (
    <div className='bg-white text-gray-900 dark:text-white dark:bg-gray-900   w-full'>
      <div className='flex container mx-auto'>
        <div className='hidden  sm:flex w-16 lg:flex-0/2 hidden hover:scroll-smooth h-screen'>
          <SideBar />
        </div>
        <div className='flex-1 lg:flex-0/5'>
          <Routes>
            <Route path='/' element={<Feed />} />
            <Route path='/notifications' element={<Notification />} />
            <Route path='/messages' element={<Message />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </div>

        <div className='flex-none md:flex-0/3'>
          <Widgets />
        </div>
      </div>
    </div>
  );
};

export default App;