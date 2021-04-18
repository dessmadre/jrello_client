import { useState, useRef } from 'react';

import { ListOptions } from './ListOptions';
import { useContent } from 'lib/useContent';
import { DeleteList } from './DeleteList';

export const ListTitle = ({ listTitle, listId, parentId }) => {
  const [title, setTitle] = useState(listTitle);
  const [show, setShow] = useState(false);

  const { editList } = useContent();

  const handlePressingEnter = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      editList(title, listId);
    }
  };

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  const handleClick = (e) => {
    if (e.target.classList.contains('justify-center')) {
      setShow(false);
    }
  };

  return (
    <div className='flex justify-center items-center' onClick={handleClick}>
      <div>
        <textarea
          className='resize-none w-full px-3 py-2 bg-gray-200 focus:bg-white font-semibold rounded-lg'
          rows={1}
          value={title || ''}
          onChange={handleTitleChange}
          onKeyPress={handlePressingEnter}
        />
      </div>
      <div>
        <div className={`${show ? 'hidden' : ''}`} onClick={handleShow}>
          <ListOptions />
        </div>
        <div className={`${show ? '' : 'hidden'}`} onClick={handleShow}>
          <DeleteList listId={listId} parentId={parentId} />
        </div>
      </div>
    </div>
  );
};
