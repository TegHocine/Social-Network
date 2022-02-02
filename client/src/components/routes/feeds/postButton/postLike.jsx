import React from 'react';

const postLike = () => {
  return (
    <div className='hover:text-red-400 transition-colors'>
      <i className='far fa-heart p-2 hover:shadow-inner hover:bg-red-400/[.15] rounded-full'></i>{' '}
      <span> {postData.like} </span>
    </div>
  );
};

export default postLike;
