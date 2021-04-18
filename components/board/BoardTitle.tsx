import { useState } from 'react';

import { useContent } from 'lib/useContent';

export const BoardTitle = ({ boardTitle, boardId }) => {
  const [title, setTitle] = useState(boardTitle);

  const { editBoard } = useContent();

  const handlePressingEnter = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log('Pressed Enter Key');
      editBoard(title, boardId);
    }
  };

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  return (
    <div className='background pt-2 pb-1 px-2  focus:bg-white w-min rounded-lg'>
      <textarea
        className={`text-2xl px-5 font-semibold w-min  resize-none bg-transparent focus:bg-gray-100 p-0.5 `}
        rows={1}
        value={title}
        defaultValue={boardTitle || ''}
        onChange={handleTitleChange}
        onKeyPress={handlePressingEnter}
      />
    </div>
  );
};
