import React from 'react';

const Spinner = () => {
  return (
    <div className='flex items-center justify-center w-full'>
      <div className='w-8 h-8 rounded-full border-4 border-teal-600/[.2] relative flex items-center justify-center  '>
        <div className='w-8 h-8  border-4 border-transparent border-t-teal-600 rounded-full absolute animate-spin'></div>
      </div>
    </div>
  );
};

export default Spinner;
