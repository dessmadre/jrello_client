import Plus from 'public/Plus.svg';

export const AddListButton = () => {
  return (
    <div className='list__btn flex justify-center font-semibold items-start  hover:bg-gray-200 hover:shadow-md rounded-lg h-min w-72 mt-0.5 p-3 cursor-pointer'>
      <div className='self-start -mt-1'>
        <Plus width={35} height={35} />
      </div>
      <div className='flex-1 mt-0.5'>
        <a className=''>Add another list</a>
      </div>
    </div>
  );
};
