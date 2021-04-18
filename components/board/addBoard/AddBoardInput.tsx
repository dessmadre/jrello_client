import { useState } from 'react';
import { GithubPicker } from 'react-color';

import Cross from 'public/Cross.svg';
import { useContent } from 'lib/useContent';

export const CreateBoardModal = ({ handleShow, title, setTitle }) => {
  const { addBoard } = useContent();
  const [colorState, setColorState] = useState({
    background: '#3B82F6',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    addBoard(title, colorState.background);
    setTitle('');
  };

  const handleChangeComplete = (color) => {
    setColorState({ background: color.hex });
  };

  return (
    <div className='flex flex-col justify-center items-center w-60'>
      <textarea
        rows={2}
        className='p-1 w-5/6 focus:outline-none bg-gray-200 border-2 border-transparent focus:border-gray-200 focus:bg-white rounded-md mb-2 resize-none'
        placeholder='New Board Title'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <GithubPicker
        className='mb-2'
        width={'190px'}
        triangle='hide'
        colors={[
          '#EF4444',
          '#FCD34D',
          '#34D399',
          '#3B82F6',
          '#6366F1',
          '#A78BFA',
          '#F472B6',
        ]}
        color={colorState.background}
        onChangeComplete={handleChangeComplete}
        onChange={(color) => {
          console.log(colorState.background);

          setColorState({ background: color.hex });
        }}
      />
      <div className='w-full'>
        <div className='flex items-center justify-between w-full px-6'>
          <div
            className='bg-green-400 hover:bg-green-500 hover:shadow-md px-3 py-3 rounded-lg mt-1 text-sm'
            onClick={handleSubmit}
          >
            <p>Add Board</p>
          </div>
          <div
            className='flex items-center justify-center mt-1 p-2.5 hover:bg-gray-200 hover:shadow-md rounded-lg cursor-pointer'
            onClick={handleShow}
          >
            <Cross className='w-5' />
          </div>
        </div>
      </div>
    </div>
  );
};
