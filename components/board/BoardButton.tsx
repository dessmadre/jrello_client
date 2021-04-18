export const BoardButton = ({ boardName, bgColor = '', onClick = null }) => {
  return (
    <div
      onClick={onClick}
      className='group border-gray-300 border-4 rounded-2xl w-60 flex justify-between overflow-hidden cursor-pointer'
      style={{
        backgroundColor: `${bgColor}`,
      }}
    >
      <div className='opacity-0 group-hover:opacity-100 transition-all bg-gray-200 self-start p-1 px-2 rounded-br-lg'>
        <p className='ml-1'>{boardName}</p>
      </div>
    </div>
  );
};
