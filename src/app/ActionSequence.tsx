'use client';
import { useState } from 'react';
import styles from './ActionSequence.module.css';
import Action from './Action';

function ActionSequence() {
  //state
  const [sequence, setSequence] = useState([{ name: 'Move' }, { name: 'New' }]);
  //comportement

  //render
  return (
    <ul className={styles.root}>
      {sequence.map((action) => (
        <li key={action.name}>
          <Action name={action.name} />
        </li>
      ))}
    </ul>
  );
}

export default ActionSequence;
