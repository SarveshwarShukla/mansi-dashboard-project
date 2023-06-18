import { IoNotificationsOutline } from 'react-icons/io5';
import Image from 'next/image';

export default function Header() {
  return (
    <div className='flex justify-between mt-6'>
      <p className='text-xl font-semibold text-gray-700'>Dashboard</p>
      <div className='flex items-center gap-4'>
        <input
          type='text'
          className='rounded-lg px-4 outline-none text-sm py-2'
          placeholder='Search'
        />
        <IoNotificationsOutline className='text-lg' />
        <div className='rounded-full'>
          <Image src='/next.svg' alt='profile image' width={40} height={40} />
        </div>
      </div>
    </div>
  );
}
