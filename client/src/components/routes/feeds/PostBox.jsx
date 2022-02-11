import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';

import Avatar from '../../layouts/Avatar';
import ProgressBar from './progressBar/ProgressBar';
import Spinner from '../../layouts/spinner/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';

const PostBox = () => {
  const dispatch = useDispatch();
  // Get the user state with useSelector (redux)

  const userState = useSelector((state) => state.user);
  const { user } = userState;

  //post test related state
  //get the text the user type
  const [text, setText] = useState('');
  // using textarea so tracking the scrollHeigth to make the textarea expend
  const [areaH, setareaH] = useState('auto');
  // this state is for the circle progress bar since 250 char is the max added a progress to see how many char's left
  const [textProgress, setTextProgress] = useState({
    textLength: 0,
    remain: 250,
  });

  //state to manage the image
  const [selectedImg, setSelectedImg] = useState('');
  const [loading, setLoading] = useState(false);

  // to control the textarea, height, textlength, progressbar
  const onTextChange = (event) => {
    setText(event.target.value);
    setareaH('auto');
    setareaH(`${event.target.scrollHeight}px`);
    const textLength = event.target.textLength;
    textLength < 1 && setareaH('95px');

    setTextProgress({
      textLength,
      remain: `${250 - textLength}`,
    });
  };

  // to control the image on select and show the image
  const onImgSelect = (changeEvent) => {
    const reader = new FileReader();

    reader.onload = (onloadEvent) => {
      setSelectedImg(onloadEvent.target.result);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  };

  // Adding post on click using useDispatch (redux) before that we upload the image to cloudinary if the user selected one
  const onPost = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (selectedImg !== '') {
        const form = e.currentTarget;
        const fileInput = Array.from(form.elements).find(
          ({ name }) => name === 'up-image'
        );
        const formData = new FormData();
        formData.append('file', fileInput.files[0]);
        formData.append('upload_preset', 'testing');

        const res = await axios.post(
          'https://api.cloudinary.com/v1_1/dyqcfzuvg/image/upload',
          formData
        );
        setSelectedImg(res.data.secure_url);
        console.log(res.data);
      }

      const post = {
        userId: user.id,
        name: user.name,
        userName: user.userName,
        avatar: user.avatar,
        text: text,
        imgSrc: selectedImg,
        verified: false,
        timeStamp: new Date().toLocaleString('en-US'),
        like: 0,
        comments: [],
      };
      //add post
      // dispatch(addPostApi(post));

      // reseting the state
      setLoading(false);
      setSelectedImg('');
      setText('');
      setareaH('95');
      setTextProgress({
        textLength: 0,
        remain: 250,
      });
    } catch (error) {
      return error.response.statusText;
    }
  };

  return (
    <div>
      <div>
        <div className='flex w-full px-4 pt-4 border-b border-b-gray-300 dark:border-b-gray-700'>
          <div>
            <Avatar src={user.avatar} styleCss={'w-14'} />
          </div>
          <form className='w-full p-2' method='post' onSubmit={onPost}>
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
            </div>
            <div className='flex justify-between'>
              <div>
                <label
                  htmlFor='up-image'
                  className='text-xl flex my-2 items-center cursor-pointer'
                  aria-label='add photo'>
                  <FontAwesomeIcon icon={faImage} />
                  <span className='text-sm ml-2'>Click to add photo</span>
                  <input
                    type='file'
                    placeholder='Enter image url'
                    name='up-image'
                    id='up-image'
                    className='hidden'
                    onChange={onImgSelect}
                  />
                </label>
                <div>
                  {selectedImg !== '' && (
                    <img
                      src={selectedImg}
                      alt=''
                      className='w-1/2 rounded-xl border border-gray-300 dark:border-gray-700'
                    />
                  )}
                </div>
              </div>
              {/* // char remain and the progress bar  */}
              <div className='my-1'>
                {textProgress.textLength > 0 && (
                  <div className='relative flex justify-center items-center'>
                    <ProgressBar
                      textLen={textProgress.textLength}
                      color={textProgress.color}
                    />
                    <span className='absolute text-sm'>
                      {textProgress.remain}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className='flex justify-end my-2 items-end'>
              {loading ? (
                <div className='px-2'>
                  <Spinner />
                </div>
              ) : (
                <input
                  type='submit'
                  value='Post'
                  className='text-lg bg-teal-600 rounded-3xl w-20 text-white cursor-pointer'
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostBox;
