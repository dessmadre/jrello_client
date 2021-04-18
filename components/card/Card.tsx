import { useRef, useState } from 'react';

import { useContent } from 'lib/useContent';

export const Card = ({ label, id }) => {
  const [title, setTitle] = useState(label);

  const cardRef = useRef(null);

  const { editCard } = useContent();

  const handlePressingEnter = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      editCard(id, title);
    }
  };

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const dragStart = (e) => {
    e.dataTransfer.setData('card_id', cardRef.current.id);
    console.log('Dragging', cardRef.current.id);
    setTimeout(() => {}, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      id={id}
      draggable='true'
      onDragStart={dragStart}
      onDragEnd={dragOver}
      onDoubleClick={() => {
        console.log(cardRef.current);
      }}
      className={` group
       bg-white hover:bg-gray-300 w-full h-auto py-3 px-3  shadow-sm rounded-lg flex justify-start items-center cursor-pointer`}
      ref={cardRef}
    >
      <textarea
        className='resize-none w-full group-hover:bg-gray-300 py-1 px-2 cursor-pointer'
        value={title || ''}
        rows={1}
        ref={cardRef}
        onChange={handleTitleChange}
        onKeyPress={handlePressingEnter}
      ></textarea>
    </div>
  );
};
