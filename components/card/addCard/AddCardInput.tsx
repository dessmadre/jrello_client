import { useState } from 'react';

import { useContent } from 'lib/useContent';
import Cross from 'public/Cross.svg';

export const AddCardInput = ({ listId, shouldShow }) => {
  const [title, setTitle] = useState('');

  const { addCard } = useContent();

  const handleAddCard = async (e) => {
    e.preventDefault();
    addCard(title, listId);
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
      addCard(title, listId);
      setTitle('');
    }
  };

  return (
    <div className='flex flex-col'>
      <textarea
        rows={2}
        className='resize-none w-full rounded-lg p-0.5  px-3 py-2 text-lg flex-1'
        value={title}
        onChange={onTitleChange}
        onKeyPress={handlePressingEnter}
      />
      <div className='flex items-center justify-between w-full p-0.5 mt-3'>
        <div
          className='bg-green-400 hover:bg-green-500 hover:shadow-md px-3 py-3 rounded-lg mt-1 text-sm'
          onClick={handleAddCard}
        >
          <p>Add Card</p>
        </div>
        <div
          className=' flex items-center justify-center hover:bg-gray-100 hover:shadow-md mt-1 p-3 rounded-lg cursor-pointer'
          onClick={handleShow}
        >
          <Cross className='w-5' />
        </div>
      </div>
    </div>
  );
};
