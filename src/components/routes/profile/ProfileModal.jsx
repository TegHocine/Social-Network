import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Avatar from '../../layouts/Avatar';

export default function MyModal({ user }) {
  let [isOpen, setIsOpen] = useState(false);
  const { cover, name, userName, timeStamp, avatar } = user;

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
          className='fixed inset-0 z-10 overflow-y-auto'
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
              <div className='inline-block w-full max-w-md overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-900 shadow-xl rounded-2xl px-4'>
                <div className='flex py-2 items-center '>
                  <div className='pr-2'>
                    <button
                      type='button'
                      className='flex justify-center items-center px-3 py-1 text-lg font-medium rounded-full hover:bg-gray-700'
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
                <div className=''>
                  <div className=''>
                    <img
                      src={cover}
                      alt='cover'
                      className='object-cover object-center w-full h-48'
                    />
                  </div>

                  <div className='w-full h-16 flex justify-between items-center px-5 relative'>
                    <Avatar
                      src={avatar}
                      styleCss={
                        'w-32 border-4 border-white dark:border-gray-900 absolute bottom-1'
                      }
                    />
                  </div>
                </div>

                <div className='mt-4'>
                  <button
                    type='button'
                    className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                    onClick={closeModal}>
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
