import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
  { name: 'Basic T-Shirts', value: 52 },
  { name: 'Custom Short Pants', value: 21 },
  { name: 'Super Hoodies', value: 27 },
];

const COLORS = ['#66BB6A', '#FF8A80', '#FFB74D'];

export default function PieChartExample() {
  return (
    <div className='bg-white px-8 pt-6 text-gray-700 rounded-lg'>
      <div className='flex justify-between items-center'>
        <h2 className='text-lg font-semibold mb-2'>Top Products</h2>
        <p className='text-sm text-gray-500'>May-June 2023</p>
      </div>

      <div className='flex'>
        <div className='flex-1'>
          <PieChart width={380} height={200}>
            <Pie
              data={data}
              cx='50%'
              cy='50%'
              innerRadius={0}
              outerRadius={70}
              fill='#8884d8'
              dataKey='value'
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend
              verticalAlign='middle'
              align='right'
              layout='vertical'
              iconType='circle'
            />
          </PieChart>
        </div>
      </div>
    </div>
  );
}
