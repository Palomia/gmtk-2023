'use client';
import { useState } from 'react';
import styles from './ActionSequence.module.css';
import Action from './Action';

function ActionSequence() {
  //state
  const [sequence, setSequence] = useState([{ name: 'Move' }]);
  //comportement
  const handleDelete = (name: string) => {
    setSequence((sequence) =>
      sequence.filter((action) => action.name !== name)
    );
  };

  const handleAdd = (name: string) => {
    setSequence((sequence) => [...sequence, { name }]);
  };

  //render
  return (
    <ul className={styles.root}>
      {sequence.map((action) => (
        <li key={action.name}>
          <Action
            onClick={() => handleDelete(action.name)}
            name={action.name}
          />
        </li>
      ))}
      <li key={'New'}>
        <Action name={'New'} />
      </li>
    </ul>
  );
}

export default ActionSequence;
