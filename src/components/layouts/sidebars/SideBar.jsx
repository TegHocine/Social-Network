import React, { Fragment } from 'react';
import SidebarLogoutBtn from './SidebarLogoutBtn';
import SiderBarOption from './SiderBarOption';
import LogoBlue from '../../../assets/neuron-teal.svg';

const SideBar = () => {
  return (
    <Fragment>
      <div className='flex sm:flex-col h-full fixed'>
        <ul className='flex justify-evenly w-full sm:flex-col text-2xl mx-auto pointer-events-auto'>
          <li className='py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 my-2 rounded-3xl w-max justify-center hidden sm:flex'>
            <img className='w-8' src={LogoBlue} alt='logo' />
          </li>

          <SiderBarOption title='Home' icon='fas fa-home' link='/' />
          <SiderBarOption
            title='Notifications'
            icon='fas fa-bell'
            link='/notifications'
          />
          <SiderBarOption
            title='Messages'
            icon='fas fa-envelope'
            link='/messages'
          />
          <SiderBarOption title='Profile' icon='fas fa-user' link='/Profile' />

          <SidebarLogoutBtn />
        </ul>
      </div>
    </Fragment>
  );
};

export default SideBar;
