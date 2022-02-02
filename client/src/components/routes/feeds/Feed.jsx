import React from 'react';
import PostBox from './PostBox';
import Post from './Post';
import Header from '../../layouts/Header';

const Feed = () => {
  return (
    <div className='flex-initial h-full mx-auto border-x border-x-gray-300 dark:border-x-gray-700'>
      {/* header */}
      <Header title={'Home'} />
      <div>
        <PostBox />
        <Post />
      </div>
      {/* <div className='w-full fixed bottom-0 bg-gray-900 sm:hidden'>
        <SideBar />
      </div> */}
    </div>
  );
};

export default Feed;
