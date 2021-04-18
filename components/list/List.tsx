import { useEffect } from 'react';
import { motion } from 'framer-motion';

import { useContent } from 'lib/useContent';
import { useAllCardsQuery } from 'lib/graphql/allCards.graphql';
import { ListTitle } from './ListTitle';
import { Card } from 'components/card/Card';
import { AddCard } from 'components/card/addCard/AddCard';
import { CardContainer } from 'components/card/CardContainer';
import { DeleteList } from './DeleteList';

export const List = ({ title, listId, parentId }) => {
  const { editCardParentId } = useContent();
  const { data, refetch } = useAllCardsQuery({
    variables: { id: listId },
    errorPolicy: 'none',
  });

  useEffect(() => {
    refetch();
  }, []);

  const drop = async (e) => {
    e.preventDefault();
    const cId = e.dataTransfer.getData('card_id');

    console.log('Dropping', cId);
    editCardParentId(cId, listId);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const cards = data?.allCards.map((card) => {
    return <Card key={card._id} id={card._id} label={card.title} />;
  });

  return (
    <>
      <motion.div
        id={listId}
        onDrop={drop}
        onDragOver={dragOver}
        className='mr-3 grid auto-cols-auto grid-rows-1 gap-4 justify-center items-start bg-gray-200 rounded-lg overflow-hidden overflow-y-scroll w-72 h-min p-3 z-50'
      >
        <ListTitle listTitle={title} listId={listId} parentId={parentId} />
        <CardContainer>{cards}</CardContainer>
        <AddCard listId={listId} />
      </motion.div>
    </>
  );
};
