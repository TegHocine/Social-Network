import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../layouts/Header';
import ProfileInfo from './ProfileInfo';

const Profile = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div className='flex-initial h-full mx-auto border-x border-x-gray-300 dark:border-x-gray-700'>
      {/* header */}
      <Header title='Profile' />
      {Object.keys(user).length !== 0 && <ProfileInfo user={user} />}
    </div>
  );
};

export default Profile;
