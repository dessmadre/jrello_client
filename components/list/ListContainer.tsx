export const ListContainer = ({ children }) => {
  return (
    <div className='grid grid-flow-col auto-cols-min overflow-x-scroll'>
      {children}
    </div>
  );
};
