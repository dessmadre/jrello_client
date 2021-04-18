import { useState } from 'react';

import Cross from 'public/Cross.svg';
import { useContent } from 'lib/useContent';

export const AddListInput = ({ boardId, shouldShow }) => {
  const { addList } = useContent();

  const [title, setTitle] = useState('');

  const handleAddList = async (e) => {
    e.preventDefault();
    addList(title, boardId);
    setTitle('');
  };

  const onTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleShow = () => {
    shouldShow((prev) => !prev);
    setTitle('');
  };

  const handlePressingEnter = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addList(title, boardId);
      setTitle('');
      shouldShow(false);
    }
  };

  return (
    <div
      className={`flex flex-col justify-center items-start bg-gray-200 w-72 p-3 h-min rounded-lg`}
    >
      <textarea
        rows={2}
        className='w-full resize-none rounded-lg px-3 py-2'
        value={title}
        onChange={onTitleChange}
        onKeyPress={handlePressingEnter}
      />
      <div className='flex items-center justify-between w-full mt-3'>
        <div
          className='bg-green-400 hover:bg-green-500 hover:shadow-md px-3 py-3 rounded-lg mt-1'
          onClick={handleAddList}
        >
          <p>Add List</p>
        </div>
        <div
          className=' flex items-center justify-center mt-1 p-3 hover:bg-gray-100 hover:shadow-md rounded-lg cursor-pointer'
          onClick={handleShow}
        >
          <Cross className='w-5' />
        </div>
      </div>
    </div>
  );
};
