import React from 'react';
import DarkMode from './DarkMode';

const Header = ({ title }) => {
  return (
    <div className='p-3 text-2xl flex justify-between items-center top-0 bg-white dark:bg-gray-900 z-50 sticky'>
      <h1>{title}</h1>
      <DarkMode />
    </div>
  );
};

export default Header;
