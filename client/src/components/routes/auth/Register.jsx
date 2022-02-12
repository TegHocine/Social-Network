import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../features/userReducer';
import { Navigate } from 'react-router';

import defaultProfile from '../../../assets/default-profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

export default function Register() {
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const dispatch = useDispatch();

  // get user info from the userReducer
  const user = useSelector((state) => state.user);
  const { isAuthenticated, errors } = user;

  const [alert, setAlert] = useState('');
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
    userName: '',
    cover: '',
    bio: '',
    avatar: `${defaultProfile}`,
  });
  const { name, email, password, passwordConf, userName } = userInfo;

  const onChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const onRegister = (e) => {
    e.preventDefault();
    if (
      name === '' ||
      email === '' ||
      userName === '' ||
      password === '' ||
      passwordConf === ''
    ) {
      setAlert('Please enter all fields');
    } else if (password !== passwordConf) {
      setAlert('Password dont match');
    } else dispatch(addUser(userInfo));
  };
  if (isAuthenticated) return <Navigate to='/' />;
  return (
    <>
      <div className='w-full flex items-center justify-center'>
        <button
          type='button'
          onClick={openModal}
          className='w-1/2 h-12 rounded-full border border-teal-600 hover:bg-teal-600 hover:text-white'>
          Register
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
                <div className='py-4'>
                  <div className='border-b border-b-300 dark:border-b-700'>
                    {/* title of the modal and close button */}
                    <div className='px-4 flex justify-between'>
                      <div>
                        <h1 className='text-3xl font-bold'>Register</h1>
                        <p className=' text-gray-600 dark:text-gray-400 pb-2 pt-1'>
                          Simple {'&'} easy
                        </p>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='flex justify-center items-center px-3 py-1 text-lg font-medium rounded-full hover:bg-gray-200 dark:hover:bg-gray-700'
                          onClick={closeModal}>
                          X
                        </button>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
                {/* notify the user in case of password not matching  */}
                {alert !== '' && (
                  <div className='px-3 mb-1'>
                    <div className='bg-red-900 text-sm text-gray-300 p-2'>
                      <span className='pr-1'>
                        <FontAwesomeIcon icon={faCircleExclamation} />
                      </span>
                      {alert}
                    </div>
                  </div>
                )}
                {/* Show  errors send by the server */}
                {errors !== null && (
                  <div className='px-3 mb-1'>
                    {errors.map((error) => (
                      <div
                        key={error.length + 1}
                        className='bg-red-900 text-sm text-gray-300 p-2'>
                        <span className='pr-1'>
                          <FontAwesomeIcon icon={faCircleExclamation} />
                        </span>
                        {error.msg}
                      </div>
                    ))}
                  </div>
                )}
                {/* Register form */}
                <form onSubmit={onRegister} method='post'>
                  <div className='my-4 px-3'>
                    <div>
                      {/* name */}
                      <div className='grid relative h-14 mb-4'>
                        <input
                          className='h-full w-full bg-inherit  indent-2 outline-none border border-gray-300 dark:border-gray-700 rounded-lg dark:focus:border-teal-500 focus:border-teal-500 peer'
                          type='text'
                          name='name'
                          value={name}
                          onChange={onChange}
                          required
                        />
                        <label
                          htmlFor='name'
                          className='absolute top-0 text-gray-700 dark:text-gray-300 px-2 text-sm peer-focus:text-teal-500 pointer-events-none'>
                          Name
                        </label>
                      </div>

                      {/* userName */}
                      <div className='grid relative h-14 mb-4'>
                        <input
                          className='h-full w-full bg-inherit  indent-2 outline-none border border-gray-300 dark:border-gray-700 rounded-lg dark:focus:border-teal-500 focus:border-teal-500 peer'
                          type='text'
                          name='userName'
                          value={userName}
                          onChange={onChange}
                          required
                        />
                        <label
                          htmlFor='userName'
                          className='absolute top-0 text-gray-700 dark:text-gray-300 px-2 text-sm peer-focus:text-teal-500 pointer-events-none'>
                          UserName
                        </label>
                      </div>

                      {/* user e-mail */}
                      <div className='grid relative h-14 mb-4'>
                        <input
                          className='h-full w-full bg-inherit  indent-2 outline-none border border-gray-300 dark:border-gray-700 rounded-lg dark:focus:border-teal-500 focus:border-teal-500 peer'
                          type='email'
                          name='email'
                          value={email}
                          onChange={onChange}
                          required
                        />
                        <label
                          htmlFor='email'
                          className='absolute top-0 text-gray-700 dark:text-gray-300 px-2 text-sm peer-focus:text-teal-500 pointer-events-none'>
                          E-mail
                        </label>
                      </div>

                      {/* user Password */}
                      <div className='grid relative h-14 mb-4'>
                        <input
                          className='h-full w-full bg-inherit  indent-2 outline-none border border-gray-300 dark:border-gray-700 rounded-lg dark:focus:border-teal-500 focus:border-teal-500 peer'
                          type='password'
                          name='password'
                          value={password}
                          onChange={onChange}
                          required
                        />
                        <label
                          htmlFor='password'
                          className='absolute top-0 text-gray-700 dark:text-gray-300 px-2 text-sm peer-focus:text-teal-500 pointer-events-none'>
                          Password
                        </label>
                      </div>

                      {/* user Password confirmation */}
                      <div className='grid relative h-14 mb-4'>
                        <input
                          className='h-full w-full bg-inherit  indent-2 outline-none border border-gray-300 dark:border-gray-700 rounded-lg dark:focus:border-teal-500 focus:border-teal-500 peer'
                          type='password'
                          name='passwordConf'
                          value={passwordConf}
                          onChange={onChange}
                          required
                        />
                        <label
                          htmlFor='passwordConf'
                          className='absolute top-0 text-gray-700 dark:text-gray-300 px-2 text-sm peer-focus:text-teal-500 pointer-events-none'>
                          Confirme password
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* submit button */}
                  <div className='m-4 flex justify-center'>
                    <button
                      type='submit'
                      className='h-12 min-w-min px-6 rounded-full bg-teal-600  hover:text-white'>
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
