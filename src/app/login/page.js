'use client';

import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className='bg-gray-100'>
      <div className='max-w-7xl mx-auto grid grid-cols-5 min-h-screen text-gray-700'>
        <div className='left col-span-2 bg-black text-white text-6xl leading-6 font-semibold flex items-center justify-center'>
          Board.
        </div>
        <div className='right col-span-3 flex justify-center mx-auto w-96 flex-col gap-4'>
          <div className=''>
            <p className='text-2xl font-bold text-gray-800'>Sign In</p>
            <p className='text-gray-600'>Sing in to your account</p>
          </div>
          <div className='flex gap-3'>
            <div
              className='flex bg-white items-center gap-1 px-6 py-3 rounded-md text-sm cursor-pointer text-gray-700'
              onClick={() => router.push('/')}
            >
              <FcGoogle /> Sign in with google
            </div>
            <div className='flex bg-white items-center gap-1 px-6 py-3 rounded-md text-sm cursor-pointer text-gray-700'>
              <FaApple /> Sign in with apple
            </div>
          </div>
          <form className='bg-white py-6 px-6 rounded'>
            <div className='flex flex-col gap-5'>
              <label
                htmlFor='email'
                className='flex flex-col gap-2 text-gray-700'
              >
                Email Address
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='outline-none bg-gray-100 rounded py-2 px-3 text-sm'
                />
              </label>
              <label
                htmlFor='password'
                className='flex flex-col gap-2 text-gray-700'
              >
                Password
                <input
                  type='password'
                  name='password'
                  id='password'
                  className='outline-none bg-gray-100 rounded py-2 px-3 text-sm'
                />
              </label>
            </div>
            <p className='text-sm text-blue-400 mt-4'>Forget password?</p>
            <button
              type='button'
              className='bg-black w-full text-white rounded-md mt-6 py-2'
              onClick={() => router.push('/')}
            >
              Sign In
            </button>
          </form>
          <div className='flex text-sm text-gray-600 gap-1 mx-auto'>
            <p>Don&apos;t have an account?</p>
            <p className='text-blue-400'>Register Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}
