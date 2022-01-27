import React from 'react';
import Avatar from '../../layouts/Avatar';
import ProfileModal from './ProfileModal';
import TimeStamp from '../../layouts/timestamp/TimeStamp';

const ProfileInfo = ({ user }) => {
  const { cover, name, userName, timeStamp, avatar } = user;
  return (
    <div className='border-b border-gray-300 dark:border-gray-700 pb-4'>
      <div className=''>
        <img
          src={cover}
          alt='cover'
          className='object-cover object-center w-full h-48'
        />
      </div>

      <div className='w-full h-16 flex justify-between items-center px-5 relative'>
        <Avatar
          src={avatar}
          styleCss={
            'w-32 border-4 border-white dark:border-gray-900 absolute bottom-1'
          }
        />
        <ProfileModal user={user} />
      </div>

      <div className='w-full  px-5 flex flex-col gap-2'>
        <div>
          <div className='font-semibold text-2xl'> {name} </div>
          <div className='text-base text-gray-600 dark:text-gray-400'>
            {userName}
          </div>
        </div>
        <div className='text-base text-gray-600 dark:text-gray-400'>
          <i className='far fa-calendar-alt'></i> <span>Joined</span>
          <TimeStamp timeStamp={timeStamp} />
        </div>
        <div className='flex gap-2'>
          <div>
            12{' '}
            <span className='text-gray-600 dark:text-gray-400'>Following</span>
          </div>
          <div>
            1 <span className='text-gray-600 dark:text-gray-400'>Follower</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
