import { useState } from 'react';

function useSequence() {
  const [sequence, setSequence] = useState([]);

  const deleteAction = (index: number) => {
    // @ts-expect-error Typing is not up to date
    setSequence((sequence) => sequence.toSpliced(index, 1));
  };

  const addAction = (name: string) => {
    setSequence((sequence) => [...sequence, { name }]);
  };

  return { sequence, deleteAction, addAction };
}

export default useSequence;
