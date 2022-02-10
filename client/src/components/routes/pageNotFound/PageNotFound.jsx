import React from 'react';
import Header from '../../layouts/Header';

const PageNotFound = () => {
  return (
    <div>
      <Header title={'Page not found'} />
      <div>
        <h1>Somthing went wrong </h1>
        Page Not Found 404
      </div>
    </div>
  );
};

export default PageNotFound;
