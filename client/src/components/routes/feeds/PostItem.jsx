import React from 'react'
import Avatar from '../../layouts/Avatar'
import TimeStamp from '../../layouts/timestamp/TimeStamp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck, faRetweet } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'

const PostItem = ({ posts }) => {
  return (
    <div className='px-4 pt-4 flex w-full border-b border-b-gray-300 dark:border-b-gray-700 cursor-pointer'>
      <div>
        <Avatar src={posts.avatar} styleCss={'w-14'} />
      </div>
      <div className='w-full px-2'>
        <div>
          <span className='font-semibold pr-1'>
            {posts.name}
            {posts.verified && (
              <span className='px-1'>
                <FontAwesomeIcon icon={faUserCheck} />
              </span>
            )}
          </span>
          <span className='text-gray-600 dark:text-gray-400 pl-1'>
            {posts.userName}
          </span>
          <TimeStamp timeStamp={posts.date} />
        </div>
        <div className='font-normal font-sans break-all'>{posts.text}</div>
        <div>
          {posts.image && (
            <img
              src={posts.image}
              alt='Post pictures'
              className='my-2 rounded-3xl border border-gray-300 dark:border-gray-700'
            />
          )}
        </div>
        <div className='w-full flex justify-between items-center'>
          <div className='hover:text-red-400 flex items-center'>
            <FontAwesomeIcon
              icon={faHeart}
              className='p-2 hover:shadow-inner hover:bg-red-400/[.15] rounded-full text-lg'
            />
            <span className='py-2 ml-1'> {posts.likes.length} </span>
          </div>
          <div className='hover:text-teal-400 flex items-center'>
            <FontAwesomeIcon
              icon={faComment}
              className='p-2 hover:shadow-inner hover:bg-teal-400/[.15] rounded-full text-lg'
            />
            <span className='py-2 ml-1'> {posts.comments.length} </span>
          </div>
          <div className='hover:text-blue-400 items-center'>
            <FontAwesomeIcon
              icon={faRetweet}
              className='p-2 hover:shadow-inner hover:bg-blue-400/[.15] rounded-full text-lg'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostItem
