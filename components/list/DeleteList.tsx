import { useContent } from 'lib/useContent';

export const DeleteList = ({ listId, parentId }) => {
  const { deleteList } = useContent();

  const handleDelete = () => {
    deleteList(listId, parentId);
  };

  return (
    <div className='bg-red-400 hover:bg-red-500 w-24 px-1 py-1 text-center rounded text-white '>
      {' '}
      <a className='cursor-pointer' onClick={handleDelete}>
        Delete List
      </a>
    </div>
  );
};
