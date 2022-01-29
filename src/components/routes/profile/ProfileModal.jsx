import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Avatar from '../../layouts/Avatar';

export default function MyModal({ user }) {
  let [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.bio);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className='flex items-center'>
        <button
          type='button'
          onClick={openModal}
          className='px-4 py-2 text-base font-semibold rounded-full border border-gray-200 dark:border-gray-700 text-center flex items-center
          hover:bg-gray-200 dark:hover:bg-gray-800'>
          Edit profile
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto dark:bg-white/[.05] bg-gray-900/[.2]'
          onClose={closeModal}>
          <div className='min-h-screen px-4 text-center text-gray-900 dark:text-white'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Dialog.Overlay className='fixed inset-0' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='inline-block h-screen align-middle'
              aria-hidden='true'>
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'>
              <div className='inline-block w-full max-w-lg overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-900 shadow-xl rounded-2xl px-1'>
                {/* title save button and close button */}
                <div className='flex py-2 items-center px-3'>
                  <div className='pr-2'>
                    <button
                      type='button'
                      className='flex justify-center items-center px-3 py-1 text-lg font-medium rounded-full hover:bg-gray-200 dark:hover:bg-gray-700'
                      onClick={closeModal}>
                      X
                    </button>
                  </div>
                  <div className=' w-full flex justify-between items-center'>
                    <div className='text-lg font-semibold'> Edit profile </div>
                    <div className='px-4 py-1 dark:bg-white bg-gray-900 dark:text-gray-900 text-white rounded-full '>
                      Save
                    </div>
                  </div>
                </div>

                {/* cover and avatar */}
                <div>
                  <div>
                    <img
                      src={user.cover}
                      alt='cover'
                      className='object-cover object-center w-full h-48'
                    />
                  </div>
                  <div className='w-full h-16 flex justify-between items-center px-5 relative'>
                    <Avatar
                      src={user.avatar}
                      styleCss={
                        'w-32 border-4 border-white dark:border-gray-900 absolute bottom-1'
                      }
                    />
                  </div>
                </div>

                {/* user info to updating   */}
                <div className='my-4 px-3'>
                  <div className=''>
                    {/* user name */}
                    <div className='grid relative h-14 mb-4'>
                      <input
                        className='h-full w-full bg-inherit  indent-2 outline-none border border-gray-300 dark:border-gray-700 rounded-lg dark:focus:border-teal-500 focus:border-teal-500 peer'
                        type='text'
                        name='name'
                        value={name}
                      />
                      <label
                        htmlFor='name'
                        className='absolute top-0 text-gray-700 dark:text-gray-300 px-2 text-sm peer-focus:text-teal-500'>
                        Name
                      </label>
                    </div>

                    {/* user e-mail */}
                    <div className='grid relative h-14 mb-4'>
                      <input
                        className='h-full w-full bg-inherit  indent-2 outline-none border border-gray-300 dark:border-gray-700 rounded-lg dark:focus:border-teal-500 focus:border-teal-500 peer'
                        type='email'
                        name='email'
                        value={email}
                      />
                      <label
                        htmlFor='email'
                        className='absolute top-0 text-gray-700 dark:text-gray-300 px-2 text-sm peer-focus:text-teal-500'>
                        E-mail
                      </label>
                    </div>

                    {/* user bio */}
                    <div className='grid relative h-24 mb-4'>
                      <textarea
                        className=' resize-none h-full w-full bg-inherit  outline-none border border-gray-300 dark:border-gray-700 rounded dark:focus:border-teal-500 focus:border-teal-500 peer pt-4 px-2'
                        type='text'
                        name='bio'
                        value={bio}
                      />
                      <label
                        htmlFor='bio'
                        className='absolute top-0 text-gray-700 dark:text-gray-300 px-2 text-sm peer-focus:text-teal-500'>
                        Bio
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
