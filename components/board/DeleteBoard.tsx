import { useContent } from 'lib/useContent';

export const DeleteBoard = ({ boardId }) => {
  const { deleteBoard } = useContent();

  const handleDelete = (e) => {
    e.preventDefault();
    deleteBoard(boardId);
  };

  return (
    <div
      className='delete__board--btn hover:shadow-md text-white hover:bg-red-500 w-40 py-2 text-center  rounded-lg cursor-pointer'
      onClick={handleDelete}
    >
      <a className='text-2xl'>Delete Board</a>
    </div>
  );
};
