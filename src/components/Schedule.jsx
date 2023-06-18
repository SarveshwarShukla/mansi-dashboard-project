export default function Schedule() {
  return (
    <div className='bg-white px-8 pt-6 text-gray-700 rounded-lg flex-1'>
      <div className='flex justify-between items-center'>
        <h2 className='text-lg font-semibold mb-2'>Today&apos;s Schedule</h2>
        <p className='text-sm text-gray-500'>See All</p>
      </div>
      <div className='mt-4 flex flex-col gap-1'>
        {meetings.map((meeting) => (
          <div key={meeting.id} className='flex gap-2.5 items-center mb-3'>
            <div
              className={`w-1 h-16 rounded-full ${meeting.color}`}
            />
            <div className="flex flex-col gap-0.5">
              <p className='font-semibold text-gray-700 text-sm'>{meeting.name}</p>
              <p className='text-gray-500 text-sm'>{meeting.time}</p>
              <p className='text-gray-500 text-sm'>{meeting.venue}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const meetings = [
  {
    id: 1,
    color: 'bg-green-400',
    name: 'Meeting 1',
    time: '10:00 AM',
    venue: 'Conference Room 1',
  },
  {
    id: 2,
    color: 'bg-blue-400',
    name: 'Meeting 2',
    time: '2:00 PM',
    venue: 'Conference Room 2',
  },
];
