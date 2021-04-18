import { useState } from 'react';
import { BoardTitle } from './BoardTitle';
import { DeleteBoard } from './DeleteBoard';
import Elipse from 'public/Elipse.svg';
import Cross from 'public/Cross.svg';

export const BoardHeader = ({ boardId, boardTitle }) => {
  const [show, shouldShow] = useState(true);

  const handleShow = () => {
    shouldShow((prev) => !prev);
  };

  return (
    <div className='flex justify-between items-center'>
      <BoardTitle boardId={boardId} boardTitle={boardTitle} />
      <div
        onClick={handleShow}
        className={`${
          show ? '' : 'hidden'
        } background p-1 rounded-lg hover:bg-gray-200 hover:shadow-md
        `}
      >
        <Elipse width='35px' />
      </div>
      <div
        className={`${show ? 'hidden' : ''} flex justify-evenly items-center`}
      >
        <DeleteBoard boardId={boardId} />
        <div
          onClick={handleShow}
          className='background ml-1 hover:bg-gray-200 rounded-lg p-2 '
        >
          <Cross className=' w-7' />
        </div>
      </div>
    </div>
  );
};
