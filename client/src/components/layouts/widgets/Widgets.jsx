import React from 'react';
import SearchBar from './SearchBar';
import FollowingWidget from './FollowingWidget';

const foDatas = [
  {
    userId: 1,
    name: 'domingo',
    userName: '@domingo',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthHVYX7uaGAQbJifvkv4GskIjvp14b9KIAQ&usqp=CAU',
  },
  {
    userId: 2,
    name: 'chuck',
    userName: '@chuck',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthHVYX7uaGAQbJifvkv4GskIjvp14b9KIAQ&usqp=CAU',
  },
  {
    userId: 3,
    name: 'will',
    userName: '@willsm',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthHVYX7uaGAQbJifvkv4GskIjvp14b9KIAQ&usqp=CAU',
  },
];

const Widgets = () => {
  return (
    <div className='flex-initial h-64 hidden md:block w-full py-2 px-4'>
      <div className='w-full'>
        <SearchBar />
      </div>
      <div className='w-full bg-gray-100 dark:bg-gray-800  rounded-3xl my-6 px-6 py-4'>
        <h2 className='font-semibold text-2xl mb-4'>Following</h2>
        {foDatas &&
          foDatas.map((foData) => (
            <FollowingWidget key={foData.userId} foData={foData} />
          ))}
      </div>
      <div></div>
    </div>
  );
};

export default Widgets;
