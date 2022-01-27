import React, { useRef } from 'react';

const SearchBar = () => {
  const text = useRef('');
  const onChange = (e) => {
    console.log(text.current.value);
  };
  return (
    <form className='rounded-full  h-10 flex items-center relative'>
      <input
        id='search'
        type='search'
        placeholder='Search ...'
        ref={text}
        onChange={onChange}
        className='bg-gray-100 dark:bg-gray-800 w-full  h-full rounded-full outline-none focus:border focus:border-teal-400 peer indent-10 placeholder:text-gray-600 dark:placeholder:text-gray-400'
      />
      <i className='fas fa-search peer-focus:text-teal-400 absolute pl-4'></i>
    </form>
  );
};

export default SearchBar;
