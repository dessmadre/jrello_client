import Link from 'next/link';

import { useAuth } from 'lib/useAuth';
import SignOut from 'public/SignOut.svg';

export const Header = () => {
  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className='flex items-center justify-evenly pt-5 w-full'>
      <Link href='/boards'>
        <div className='header__background hover:bg-gray-200 hover:shadow-md px-5 justify-self-center self-center py-1 rounded-2xl'>
          <img
            src='/Jrello.svg'
            alt='Logo'
            width='85px'
            className='cursor-pointer'
          />
        </div>
      </Link>
      <div
        className='background absolute right-0 mr-5 p-2 rounded hover:bg-gray-200 hover:shadow-md'
        onClick={handleSignOut}
      >
        <SignOut className='w-7 justify-self-end self-center' />
      </div>
    </div>
  );
};
