'use client';
import { useState } from 'react';
import ActionBank from './ActionBank';
import ActionSequence from './ActionSequence';

export default function Home() {
  //state
  const [sequence, setSequence] = useState([{ name: 'Move' }]);
  //comportement
  const deleteAction = (name: string) => {
    setSequence((sequence) =>
      sequence.filter((action) => action.name !== name)
    );
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
