import React, { useState, useEffect } from 'react';
import Avatar from '../../layouts/Avatar';
import ProgressBar from './progressBar/ProgressBar';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../../../features/userReducer';
import { addPostApi } from '../../../features/postsReducer';

const PostBox = () => {
  const [text, setText] = useState('');
  const [img, setImg] = useState('');
  const [areaH, setareaH] = useState('auto');
  const [textLen, setTextLen] = useState({ textLength: '', remain: '' });

  const dispatch = useDispatch();

  // init the user state with user()
  useEffect(() => {
    dispatch(fetchUser());
    //eslint-disable-next-line
  }, []);

  // Get the user state with useSelector (redux)
  const userData = useSelector((state) => state.user.value);

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
    setareaH('95');
  };

  // to control the input textarea + the svg circle
  const onTextChange = (event) => {
    setText(event.target.value);
    setareaH('auto');
    setareaH(`${event.target.scrollHeight}px`);
    const textLength = event.target.textLength;
    textLength < 1 && setareaH('95px');
    setTextLen({
      textLength,
      remain: `${249 - textLength}`,
    });
  };

  // to control the image on change
  const onImgChange = (event) => {
    setImg(event.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='flex w-full px-4 pt-4 border-b border-b-gray-300 dark:border-b-gray-700'>
          <div>
            <Avatar src={userData.avatar} styleCss={'w-14'} />
          </div>
          <div className='w-full p-2'>
            <div className='relative'>
              <textarea
                name='text'
                type='text'
                maxLength='250'
                placeholder="What's happening"
                className='resize-none overflow-hidden bg-inherit focus:border-b focus:border-b-gray-300 dark:border-b-gray-700 outline-none text-xl w-full h-fit min-h-[6rem] py-2'
                style={{ height: `${areaH}` }}
                value={text}
                onChange={onTextChange}
              />
              <div className=''>
                <ProgressBar textLen={textLen.textLength} />
                <span></span>
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
                className='text-lg bg-teal-600 rounded-3xl w-20 text-white'
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostBox;
