import { RiBankLine, RiBracesFill } from 'react-icons/ri';
import { GrTransaction } from 'react-icons/gr';
import { AiOutlineLike } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';


export default function Cards() {
  return (
    <div className='flex gap-5'>
      {cardsData.map((card) => (
        <div key={card.id} className={`${card.background} w-52 rounded-2xl flex flex-col px-6 py-4 text-gray-700`}>
          <p className='ml-auto w-fit text-xl'>{card.icon}</p>
          <p className='text-sm font-semibold mt-3'>{card.title}</p>
          <p className='text-xl font-bold mt-1'>{card.value}</p>
        </div>
      ))}
    </div>
  );
}

const cardsData = [
  {
    id: 1,
    title: 'Total Revenue',
    value: '$2,129,430',
    icon: <RiBankLine />,
    background: 'bg-green-100',
  },
  {
    id: 2,
    title: 'Total Transactions',
    value: '1,520',
    icon: <GrTransaction />,
    background: 'bg-orange-100',
  },
  {
    id: 3,
    title: 'Total Likes',
    value: '9,721',
    icon: <AiOutlineLike />,
    background: 'bg-red-100',
  },
  {
    id: 4,
    title: 'Total Users',
    value: '892',
    icon: <FiUsers />,
    background: 'bg-indigo-100',
  },
];