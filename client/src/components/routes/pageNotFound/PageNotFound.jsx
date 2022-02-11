import React from 'react';
import Header from '../../layouts/Header';
import shallNotPass from '../../../assets/shallNotPass.png';

const PageNotFound = () => {
  return (
    <div className=''>
      <Header title={'Page not found'} />
      <div className='w-full grid place-content-center mt-20'>
        <div className='mx-auto'>
          <img src={shallNotPass} alt='' className='w-40' />
        </div>

        <div className='text-center text-lg'>Page Not Found 404</div>
      </div>
    </div>
  );
};

export default PageNotFound;
