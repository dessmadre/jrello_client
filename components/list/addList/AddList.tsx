import { useState } from 'react';

import { AddListButton } from 'components/list/addList/AddListButton';
import { AddListInput } from 'components/list/addList/AddListInput';

export const AddList = ({ boardId }) => {
  const [show, shouldShow] = useState(true);

  const handleShow = () => {
    shouldShow((prev) => !prev);
  };

  return (
    <>
      <div className={`${show ? '' : 'hidden'}`} onClick={handleShow}>
        <AddListButton />
      </div>
      <div className={`${show ? 'hidden' : ''}`}>
        <AddListInput boardId={boardId} shouldShow={shouldShow} />
      </div>
    </>
  );
};
