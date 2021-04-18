import Plus from 'public/Plus.svg';

export const AddBoardButton = () => {
  return (
    <div className='border-gray-300 border-4 hover:bg-gray-300 rounded-2xl w-60 max-h-52 flex justify-center items-center  cursor-pointer'>
      <Plus width={200} height={200} />
    </div>
  );
};
