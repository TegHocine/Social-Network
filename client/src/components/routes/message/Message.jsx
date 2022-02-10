import React, { useState, useEffect, useRef } from 'react';
import Avatar from '../../layouts/Avatar';
import { useSelector, useDispatch } from 'react-redux';

import { addPostApi } from '../../../features/postsReducer';
const Message = () => {
  const [text, setText] = useState('');
  const [img, setImg] = useState('');

  const postBoxWidth = useRef('');

  const dispatch = useDispatch();

  // Get the user state with useSelector (redux)
  const userData = useSelector((state) => state.user.user);

  // Adding post on Submit using useDispatch (redux)
  // e.preventDefault to prevent the page from loading on submit
  const onSubmit = (e) => {
    e.preventDefault();
    const post = {
      userId: userData.id,
      name: userData.name,
      userName: userData.userName,
      avatar: userData.avatar,
      text: text,
      imgSrc: img,
      verified: false,
      timeStamp: new Date().toLocaleString('en-US'),
      like: 0,
      comments: [],
    };

    dispatch(addPostApi(post));

    setImg('');
    setText('');
  };

  // to control the input text on change
  const onTextChange = (event) => {
    setText(event.target.innerText.toString());
    // console.log(event.target);
  };

  // to control the image on change
  const onImgChange = (event) => {
    setImg(event.target.value);
  };

  return (
    // Here im trying to clone the twitter post box having some probleme with copy pasting
    <div className='mt-40'>
      <form onSubmit={onSubmit}>
        <div className='flex w-full px-4 pt-4 border-b border-b-gray-300 dark:border-b-gray-700'>
          <div>
            <Avatar src={userData.avatar} styleCss={'w-14'} />
          </div>
          <div className=' inline-block w-full p-2'>
            <div className='relative inline-block w-full'>
              {text.length < 2 && (
                <span className='absolute text-gray-600 dark:text-gray-400 text-lg pointer-events-none'>
                  What's happening
                </span>
              )}
              <div
                suppressContentEditableWarning={true}
                contentEditable='true'
                className={`table table-fixed absolute text-transparent  outline-none text-xl w-full  h-fit min-h-[6rem] break-words whitespace-pre-wrap caret-gray-700 dark:caret-gray-400 peer`}
                onInput={onTextChange}
                ref={postBoxWidth}>
                <p className='pointer-events-none'></p>
              </div>
              <div
                className={`table table-fixed bg-inherit text-xl w-full  h-fit min-h-[6rem] break-words whitespace-pre-wrap 
                peer-focus:border-b border-b-gray-300 dark:border-b-gray-700 pointer-events-none`}>
                {text}
              </div>
            </div>
            <div>
              <label
                htmlFor='up-image'
                className='text-2xl flex justify-evenly my-2 items-center'>
                <i className='far fa-image'></i>
                <input
                  type='url'
                  placeholder='Enter image url'
                  name='up-image'
                  id='up-image'
                  className=' bg-inherit w-full ml-3 h-5 text-sm placeholder:text-gray-600 dark:placeholder:text-gray-400'
                  value={img}
                  onChange={onImgChange}
                />
              </label>
            </div>
            <div className='flex justify-between my-2 items-end'>
              <img src={img} alt='' className='w-1/2' />
              <input
                type='submit'
                value='Post'
                className='text-lg bg-teal-600 rounded-3xl w-20 text-white pointer-events-none'
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Message;
