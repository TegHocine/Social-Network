import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const SiderBarOption = ({ title, icon, link }) => {
  return (
    <Fragment>
      <li className='py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800  my-2 rounded-full w-max cursor-pointer transition-colors '>
        <Link to={link}>
          <i className={icon}></i>
          <span className='pl-4 hidden lg:inline'>{title}</span>
        </Link>
      </li>
    </Fragment>
  );
};

export default SiderBarOption;
