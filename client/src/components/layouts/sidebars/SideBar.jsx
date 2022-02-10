import React, { Fragment } from 'react';
import SidebarLogoutBtn from './SidebarLogoutBtn';
import SiderBarOption from './SiderBarOption';
import LogoBlue from '../../../assets/neuron.svg';
import {
  faBell,
  faHome,
  faEnvelope,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
  return (
    <Fragment>
      <div className='flex sm:flex-col h-full fixed'>
        <ul className='flex justify-evenly w-full sm:flex-col text-2xl mx-auto pointer-events-auto'>
          <li className='py-2 px-2 hover:bg-gray-200 dark:hover:bg-gray-800 my-2 rounded-full w-max justify-center hidden sm:flex'>
            <img className='w-10' src={LogoBlue} alt='logo' />
          </li>

          <SiderBarOption title='Home' icon={faHome} link='/' />
          <SiderBarOption
            title='Notifications'
            icon={faBell}
            link='/notifications'
          />
          <SiderBarOption title='Messages' icon={faEnvelope} link='/messages' />
          <SiderBarOption title='Profile' icon={faUser} link='/Profile' />

          <SidebarLogoutBtn />
        </ul>
      </div>
    </Fragment>
  );
};

export default SideBar;
