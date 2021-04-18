export const CardContainer = ({ children }) => {
  return (
    <div className='grid grid-flow-row auto-rows-min gap-y-5 overflow-y-scroll'>
      {children}
    </div>
  );
};
