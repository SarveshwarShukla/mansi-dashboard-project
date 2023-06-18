'use client';

import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';

export default function Home() {
  return (
    <main className='max-w-7xl mx-auto grid grid-cols-4 min-h-screen bg-gray-100'>
      <div className='col-span-1'>
        <Sidebar />
      </div>
      <div className='col-span-3 mx-auto pb-10'>
        <Dashboard />
      </div>
    </main>
  );
}
