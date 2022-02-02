import React from 'react';
import Avatar from '../Avatar';

const SidebarLogoutBtn = () => {
  return (
    <div className='mb-4 hidden sm:block cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full w-max justify-center hidden sm:flex absolute bottom-0'>
      <div className='w-full flex items-center text-base lg:mr-2'>
        <div>
          <Avatar
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthHVYX7uaGAQbJifvkv4GskIjvp14b9KIAQ&usqp=CAU'
            styleCss={'w-10'}
          />
        </div>
        <div className='ml-2  hidden lg:block '>
          <p className='font-semibold'>NoName N</p>
          <p className='text-gray-400'>@arcou</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarLogoutBtn;
