import React from 'react';
import Avatar from '../../layouts/Avatar';
import TimeStamp from '../../layouts/timestamp/TimeStamp';

const PostItem = ({ postData }) => {
  return (
    <div className='px-4 p-4 flex w-full border-b border-b-gray-300 dark:border-b-gray-700 cursor-pointer'>
      <div>
        <Avatar src={postData.avatar} styleCss={'w-14'} />
      </div>
      <div className='w-full px-2'>
        <div>
          <span className='font-semibold pr-1'>
            {postData.name}
            {postData.verified && (
              <span className='px-1'>
                <i className='fas fa-user-check'></i>
              </span>
            )}
          </span>
          <span className='text-gray-600 dark:text-gray-400 pl-1'>
            {postData.userName}
          </span>
          <TimeStamp timeStamp={postData.timeStamp} />
        </div>
        <div className='font-normal font-sans break-all'>{postData.text}</div>
        <div>
          {postData.imgSrc && (
            <img
              src={postData.imgSrc}
              alt='Post pictures'
              className='my-2 rounded-3xl border border-gray-300 dark:border-gray-700'
            />
          )}
        </div>
        <div className='w-full flex justify-between '>
          <div className='hover:text-red-400 transition-colors'>
            <i className='far fa-heart p-2 hover:shadow-inner hover:bg-red-400/[.15] rounded-full'></i>{' '}
            <span> {postData.like} </span>
          </div>
          <div className='hover:text-teal-400'>
            <i className='far fa-comment p-2 hover:shadow-inner hover:bg-teal-400/[.15] rounded-full'></i>
            <span> {postData.comments.length} </span>
          </div>
          <div className='hover:text-blue-400'>
            <i className='fas fa-retweet p-2 hover:shadow-inner hover:bg-blue-400/[.15] rounded-full'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
