import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { useState, useEffect } from 'react';

export default function MainChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => setData(data ?? chartsData))
      .catch(() => {
        setData(chartsData);
      });
  }, []);

  return (
    <div className='bg-white px-5 py-8 rounded-lg mt-3'>
      <h2 className='text-lg text-gray-800 font-semibold'>Activities</h2>
      <p className='text-sm text-gray-600'>May-June 2023</p>
      <LineChart width={850} height={300} data={data}>
        <CartesianGrid vertical={false} strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis tickCount={6} domain={[0, 500]} />
        <Tooltip />
        <Legend align='right' verticalAlign='top' margin={{ top: -10 }} />
        <Line
          type='monotone'
          dataKey='user'
          stroke='#8884d8'
          strokeWidth={2}
          dot={false}
        />
        <Line
          type='monotone'
          dataKey='guest'
          stroke='#82ca9d'
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </div>
  );
}

const chartsData = [
  { name: 0, user: 100, guest: 200 },
  { name: 1, user: 450, guest: 400 },
  { name: 2, user: 150, guest: 200 },
  { name: 3, user: 410, guest: 300 },
  { name: 4, user: 180, guest: 210 },
  { name: 5, user: 430, guest: 250 },
];
