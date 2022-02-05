import React, { useState } from 'react';
import Header from '../../../layouts/Header';
import axios from 'axios';

const UploadImage = () => {
  const [selectedImg, setSelectedImg] = useState();
  const [uploadImg, setUploadImg] = useState();

  // to control the image on change
  const onImgSelect = (changeEvent) => {
    const reader = new FileReader();

    reader.onload = (onloadEvent) => {
      setSelectedImg(onloadEvent.target.result);
      setUploadImg(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  };

  // e.preventDefault to prevent the page from loading on submit
  const onUpload = async (e) => {
    e.preventDefault();

    try {
      const form = e.currentTarget;
      const fileInput = Array.from(form.elements).find(
        ({ name }) => name === 'up-image'
      );
      const formData = new FormData();
      for (const file of fileInput.files) {
        formData.append('file', file);
        formData.append('upload_preset', 'testing');
      }
      const res = await axios.post(
        'https://api.cloudinary.com/v1_1/dyqcfzuvg/image/upload',
        formData
      );
      setSelectedImg(res.data.secure_url);
      setUploadImg(res.data);
    } catch (error) {
      return error.response.statusText;
    }
  };

  return (
    <>
      <Header title={'Notification'} />
      <div>
        <form methode='post' onChange={onImgSelect} onSubmit={onUpload}>
          <label
            htmlFor='up-image'
            className='text-2xl flex justify-evenly my-2 items-center'>
            <i className='far fa-image'></i>
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
            <img src={selectedImg} alt='' className='w-1/2' />
            {selectedImg && !uploadImg && <button>Upload</button>}
          </div>
        </form>
      </div>
    </>
  );
};

export default UploadImage;
