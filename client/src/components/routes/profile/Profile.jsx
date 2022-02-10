import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from '../../../features/userReducer';

import Header from '../../layouts/Header';
import ProfileInfo from './ProfileInfo';

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
    //eslint-disable-next-line
  }, []);
  const userInfo = useSelector((state) => state.user.user);

  return (
    <div className='flex-initial h-full mx-auto border-x border-x-gray-300 dark:border-x-gray-700'>
      {/* header */}
      <Header title='Profile' />
      {Object.keys(userInfo).length !== 0 && <ProfileInfo user={userInfo} />}
    </div>
  );
};

export default Profile;
