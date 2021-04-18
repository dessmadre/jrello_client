import { useState } from 'react';

import { AddCardButton } from './AddCardButton';
import { AddCardInput } from './AddCardInput';

export const AddCard = ({ listId }) => {
  const [show, shouldShow] = useState(true);

  const handleShow = () => {
    shouldShow((prev) => !prev);
  };

  return (
    <>
      <div className={`${show ? '' : 'hidden'}`} onClick={handleShow}>
        <AddCardButton />
      </div>
      <div className={`${show ? 'hidden' : ''}`}>
        <AddCardInput listId={listId} shouldShow={shouldShow} />
      </div>
    </>
  );
};
