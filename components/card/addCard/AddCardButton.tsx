import Plus from 'public/Plus.svg';

export const AddCardButton = () => {
  return (
    <div className=' hover:bg-gray-300 hover:shadow-md w-full h-auto py-3 rounded-xl flex justify-start items-center'>
      <Plus className='ml-3' width='35px' />
      <p className=''>Add another card</p>
    </div>
  );
};
