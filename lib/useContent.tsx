import { useState, useContext, createContext } from 'react';
import { useApolloClient } from '@apollo/client';
import { useRouter } from 'next/router';

import { AllBoardsDocument } from 'lib/graphql/allBoards.graphql';
import { AllListsDocument } from 'lib/graphql/allLists.graphql';
import { AllCardsDocument } from 'lib/graphql/allCards.graphql';
import {
  AddBoardMutation,
  useAddBoardMutation,
} from 'lib/graphql/addBoard.graphql';
import {
  EditBoardMutation,
  useEditBoardMutation,
} from 'lib/graphql/editBoard.graphql';
import {
  DeleteBoardMutation,
  useDeleteBoardMutation,
} from 'lib/graphql/deleteBoard.graphql';
import {
  AddListMutation,
  useAddListMutation,
} from 'lib/graphql/addList.graphql';
import {
  EditListMutation,
  useEditListMutation,
} from 'lib/graphql/editList.graphql';
import {
  DeleteListMutation,
  useDeleteListMutation,
} from 'lib/graphql/deleteList.graphql';
import {
  AddCardMutation,
  useAddCardMutation,
} from 'lib/graphql/addCard.graphql';
import {
  EditCardMutation,
  useEditCardMutation,
} from 'lib/graphql/editCard.graphql';
import {
  EditListIdMutation,
  useEditListIdMutation,
} from 'lib/graphql/editListId.graphql';
import {
  DeleteCardMutation,
  useDeleteCardMutation,
} from 'lib/graphql/deleteCard.graphql';
import { Router } from 'next/router';

type ContentProps = {
  error: any;
  addBoard: (title: string, bgColor: string) => Promise<AddBoardMutation>;
  editBoard: (title: string, id: string) => Promise<EditBoardMutation>;
  deleteBoard: (id: string) => Promise<DeleteBoardMutation>;
  addList: (title: string, parentId: string) => Promise<AddListMutation>;
  editList: (title: string, id: string) => Promise<EditListMutation>;
  deleteList: (id: string, parentId: string) => Promise<DeleteListMutation>;
  addCard: (title: string, parentId: string) => Promise<AddCardMutation>;
  editCard: (id: string, title: string) => Promise<EditCardMutation>;
  editCardParentId: (
    id: string,
    parentId: string
  ) => Promise<EditListIdMutation>;
  deleteCard: (id: string, parentId: string) => Promise<DeleteCardMutation>;
};

const ContentContext = createContext<Partial<ContentProps>>({});

export function ContentProvider({ children }) {
  const content = useProvideContent();
  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
}

export const useContent = () => {
  return useContext(ContentContext);
};

function useProvideContent() {
  const router = useRouter();
  const client = useApolloClient();
  const [error, setError] = useState('');

  // Mutations
  const [addBoardMutation] = useAddBoardMutation();
  const [editBoardMutation] = useEditBoardMutation();
  const [deleteBoardMutation] = useDeleteBoardMutation();
  const [addListMutation] = useAddListMutation();
  const [editListMutation] = useEditListMutation();
  const [deleteListMutation] = useDeleteListMutation();
  const [addCardMutation] = useAddCardMutation();
  const [editCardMutation] = useEditCardMutation();
  const [editListIdMutation] = useEditListIdMutation();
  const [deleteCardMutation] = useDeleteCardMutation();

  // Add Board
  const addBoard = async (title, bgColor) => {
    try {
      const { data } = await addBoardMutation({
        variables: { input: { bgColor, title } },
        refetchQueries: [{ query: AllBoardsDocument }],
      });
      return data;
    } catch (err) {
      setError(err);
    }
  };

  // Edit Board
  const editBoard = async (title, id) => {
    try {
      const { data } = await editBoardMutation({
        variables: { input: { title, id } },
      });

      return data;
    } catch (err) {
      setError(err);
    }
  };

  // Delete Board
  const deleteBoard = async (id) => {
    try {
      const { data } = await deleteBoardMutation({
        variables: { id },
      });
      router.push('/boards');
      return data;
    } catch (err) {
      setError(err);
    }
  };

  // Add List
  const addList = async (title, parentId) => {
    try {
      const { data } = await addListMutation({
        variables: { input: { parentId, title } },
        refetchQueries: [
          { query: AllListsDocument, variables: { id: parentId } },
        ],
      });

      return data;
    } catch (err) {
      setError(err);
    }
  };

  // Edit List
  const editList = async (title, id) => {
    try {
      const { data } = await editListMutation({
        variables: { input: { id, title } },
      });

      return data;
    } catch (err) {
      setError(err);
    }
  };

  // Delete List
  const deleteList = async (id, parentId) => {
    try {
      const { data } = await deleteListMutation({
        variables: { id },
        refetchQueries: [
          { query: AllListsDocument, variables: { id: parentId } },
        ],
      });

      return data;
    } catch (err) {
      setError(err);
    }
  };

  // Add Card
  const addCard = async (title, parentId) => {
    try {
      const { data } = await addCardMutation({
        variables: { input: { parentId, title } },
        refetchQueries: [
          { query: AllCardsDocument, variables: { id: parentId } },
        ],
      });

      return data;
    } catch (err) {
      setError(err);
    }
  };

  // Edit Card
  const editCard = async (id, title) => {
    try {
      const { data } = await editCardMutation({
        variables: { input: { id, title } },
      });

      return data;
    } catch (err) {
      setError(err);
    }
  };

  // Edit Card Parent Id
  const editCardParentId = async (id, parentId) => {
    client.resetStore();
    try {
      const { data } = await editListIdMutation({
        variables: { input: { id, parentId } },
      });

      return data;
    } catch (err) {
      setError(err);
    }
  };

  // Delete Card
  const deleteCard = async (id, parentId) => {
    try {
      const { data } = await deleteCardMutation({
        variables: { id },
        refetchQueries: [
          { query: AllCardsDocument, variables: { id: parentId } },
        ],
      });

      return data;
    } catch (err) {
      setError(err);
    }
  };

  return {
    error,
    addBoard,
    editBoard,
    deleteBoard,
    addList,
    editList,
    deleteList,
    addCard,
    editCard,
    editCardParentId,
    deleteCard,
  };
}
