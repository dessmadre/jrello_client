import { useRouter } from 'next/router';

import { Button } from 'components/common/Button';

export default function () {
  const router = useRouter();

  const onSignIn = (e) => {
    e.preventDefault();
    router.push('/auth/signin');
  };

  const onRegister = (e) => {
    e.preventDefault();
    router.push('/auth/register');
  };

  return (
    <div className='flex flex-col md:flex-row justify-evenly items-center mt-12 w-2/3 self-center'>
      <Button
        label='Sign In'
        color={'bg-green-400 hover:bg-green-500'}
        mt='5'
        onClick={onSignIn}
        h='10'
        fontsize='2xl'
        rounded='2xl'
      />
      <Button
        label='Register'
        color={'bg-blue-400 hover:bg-blue-500'}
        mt='5'
        onClick={onRegister}
        h='10'
        fontsize='2xl'
        rounded='2xl'
      />
    </div>
  );
}
