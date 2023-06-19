'use client';

import { useEffect, useState } from 'react';

import Cards from '@/components/Card';
import Header from '@/components/Header';
import MainChart from '@/components/MainChart';
import PieChartComponent from '@/components/PieChartComponent';
import Schedule from '@/components/Schedule';

export default function Dashboard() {
  return (
    <div className='flex flex-col gap-6 mx-2 sm:mx-4'>
      <Header />
      <Cards />
      <MainChart />
      <div className='flex lg:flex-row flex-col justify-between gap-6 mt-3'>
        <PieChartComponent />
        <Schedule />
      </div>
    </div>
  );
}
