export const BoardContainer = ({ children }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center auto-rows-fr gap-x-2 gap-y-6 px-3'>
      {children}
    </div>
  );
};
