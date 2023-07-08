'use client';
import { useState } from 'react';
import ActionBank from './ActionBank';
import ActionSequence from './ActionSequence';

export default function Home() {
  //state
  const [sequence, setSequence] = useState([{ name: 'Move' }]);
  //comportement
  const deleteAction = (index: number) => {
    // @ts-expect-error Typing is not up to date
    setSequence((sequence) => sequence.toSpliced(index, 1));
  };

  const addAction = (name: string) => {
    setSequence((sequence) => [...sequence, { name }]);
  };

  //render
  return (
    <div>
      <ActionSequence deleteAction={deleteAction} sequence={sequence} />{' '}
      <ActionBank addAction={addAction} />
    </div>
  );
}
