import React from 'react';
import Avatar from '../Avatar';

const FollowingWidget = ({ foData: { name, userName, avatar } }) => {
  return (
    <div className='w-full flex items-center text-base my-4 '>
      <div>
        <Avatar src={avatar} width={'w-12'} />
      </div>
      <div className='ml-2'>
        <p className='font-semibold'>{name}</p>
        <p className='text-gray-600 dark:text-gray-400'>{userName}</p>
      </div>
    </div>
  );
};

export default FollowingWidget;
