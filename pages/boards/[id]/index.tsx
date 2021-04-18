import { useEffect } from 'react';

import { useSingleBoardQuery } from 'lib/graphql/singleBoard.graphql';
import { useAllListsQuery } from 'lib/graphql/allLists.graphql';
import { List } from 'components/list/List';
import { ListContainer } from 'components/list/ListContainer';
import { AddList } from 'components/list/addList/AddList';
import { SectionSeperator } from 'components/common/SectionSeperator';
import { Header } from 'components/common/Header';
import { BoardHeader } from 'components/board/BoardHeader';

export default function CurrentBoard({ id }) {
  const { data: board, refetch: boardRefetch } = useSingleBoardQuery({
    errorPolicy: 'none',
    variables: { id },
  });

  const { data: list, refetch: listRefetch } = useAllListsQuery({
    errorPolicy: 'none',
    variables: { id },
  });

  useEffect(() => {
    boardRefetch();
    listRefetch();
  }, []);

  const lists = list?.allLists.map((l) => {
    return <List parentId={id} key={l._id} listId={l._id} title={l.title} />;
  });

  return (
    <div
      className='min-h-screen px-10'
      style={{
        backgroundColor: board?.singleBoard.bgColor,
      }}
    >
      <Header />
      <SectionSeperator />
      <BoardHeader
        boardId={board?.singleBoard._id}
        boardTitle={board?.singleBoard.title}
      />

      <SectionSeperator />
      <ListContainer>
        {lists}
        <AddList boardId={board?.singleBoard._id} />
      </ListContainer>
      <SectionSeperator />
    </div>
  );
}

CurrentBoard.getInitialProps = ({ query: { id } }) => {
  return { id };
};
