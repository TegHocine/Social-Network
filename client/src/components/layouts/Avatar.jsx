import React, { Fragment } from 'react';

const Avatar = ({ src, styleCss }) => {
  return (
    <div>
      <img
        className={`${styleCss ? styleCss : 'w-10'} rounded-full lg:mr-1`}
        src={src}
        alt='avatar'
      />
    </div>
  );
};

export default Avatar;
