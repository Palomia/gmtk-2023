'use client';
import { useState } from 'react';
import styles from './ActionSequence.module.css';
import Action from './Action';

function ActionSequence() {
  //state
  const [sequence, setSequence] = useState([{ name: 'Move' }, { name: 'New' }]);
  //comportement
  const handleDelete = (name: string) => {
    if (name !== 'New') {
      setSequence((sequence) =>
        sequence.filter((action) => action.name !== name)
      );
    }
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
    </ul>
  );
}

export default ActionSequence;
