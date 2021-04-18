import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useAuth } from 'lib/useAuth';
import Logo from 'public/Jrello.svg';
import { Button } from './Button';

export const AuthForm = ({
  email,
  handleEmail,
  password,
  handlePassword,
  onClick,
}) => {
  const reg = useRouter().pathname;
  const { error } = useAuth();

  return (
    <div className='min-h-screen w-screen bg-blue-100 flex justify-center items-center'>
      <div className='flex flex-col bg-white  shadow-md rounded-3xl w-5/6 md:w-3/5 items-center justify-center py-10'>
        <div className='self-start px-10 mb-5'>
          <Link href='/'>
            <a className='border-b-2 border-transparent hover:border-blue-200'>
              {' '}
              &larr; Return Home
            </a>
          </Link>
        </div>
        {error && <p>{error}</p>}
        <div className='flex justify-center items-center'>
          <Logo width='200px' className='mb-5' />
        </div>
        <p className='px-10 homeText text-lg font-sans md:block hidden text-center  '>
          {reg === '/auth/register'
            ? 'Welcome to Jrello sign up and start organizing your projects.'
            : 'Welcome back, sign in and pick up where you left off.'}{' '}
        </p>
        <form className='mt-5 w-full flex flex-col justify-center items-center'>
          <div className='flex flex-col w-5/6 lg:w-4/5 mb-5'>
            <label
              className='uppercase font-sans font-semibold text-gray-500 mb-2 px-1'
              htmlFor='email'
            >
              email
            </label>
            <input
              id='email'
              value={email}
              className='py-1 px-2 bg-gray-200 border-transparent border-2 focus:bg-white focus:outline-none focus:border-blue-100 rounded-xl'
              onChange={handleEmail}
            />
          </div>
          <div className='flex flex-col w-5/6 lg:w-4/5 '>
            <label
              className='uppercase font-sans font-semibold text-gray-500 mb-2 px-1'
              htmlFor='password'
            >
              password
            </label>
            <input
              id='password'
              value={password}
              className='py-1 px-2 bg-gray-200 border-transparent border-2 focus:bg-white focus:outline-none focus:border-blue-100 rounded-xl'
              onChange={handlePassword}
            />
          </div>
          <div>
            <Button
              label={reg === '/auth/register' ? 'Register' : 'Sign In'}
              color='bg-blue-400 hover-bg-blue-500'
              mt='10'
              fontsize='lg'
              h='8'
              rounded='2xl'
              onClick={onClick}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
