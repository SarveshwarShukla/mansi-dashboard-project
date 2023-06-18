import { LuLayoutDashboard } from 'react-icons/lu';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineSetting, AiOutlineSchedule } from 'react-icons/ai';
import { BsTag } from 'react-icons/bs';

export default function Sidebar() {
  return (
    <div className='bg-black h-full text-white flex flex-col items-center'>
      <div className='w-52 mt-12 text-4xl font-bold'>Board.</div>
      <div className='w-52 mt-16 flex flex-col gap-8'>
        {sidebarMenu.map((menuItem, index) => (
          <div
            key={menuItem.id}
            className={`flex gap-3 items-center text-lg hover:text-white cursor-pointer transition ${
              index === 0 ? 'text-white' : 'text-gray-400'
            }`}
          >
            <p> {menuItem.icon}</p>
            <p>{menuItem.title}</p>
          </div>
        ))}
      </div>
      <div className='w-52 mt-auto mb-8 text-gray-400 flex flex-col gap-1'>
        <p>Help</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
}

const sidebarMenu = [
  {
    id: 1,
    icon: <LuLayoutDashboard />,
    title: 'Dashboard',
  },
  {
    id: 2,
    icon: <BsTag />,
    title: 'Transactions',
  },
  {
    id: 3,
    icon: <AiOutlineSchedule />,
    title: 'Schedules',
  },
  {
    id: 4,
    icon: <FiUsers />,
    title: 'Users',
  },
  {
    id: 5,
    icon: <AiOutlineSetting />,
    title: 'Settings',
  },
];
