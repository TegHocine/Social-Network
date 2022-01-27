import React, { useEffect } from 'react';
import Header from '../../layouts/Header';
import ProfileInfo from './ProfileInfo';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../../../features/userReducer';

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    //eslint-disable-next-line
  }, []);
  const userInfo = useSelector((state) => state.user.value);

  return (
    <div className='flex-initial h-full mx-auto border-x border-x-gray-300 dark:border-x-gray-700'>
      {/* header */}
      <Header title='Profile' />
      {Object.keys(userInfo).length !== 0 && <ProfileInfo user={userInfo} />}
    </div>
  );
};

export default Profile;
