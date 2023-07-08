'use client';

import styles from './ActionBank.module.css';
import Action from './Action';

const listActions = ['MoveToward', 'Attack', 'Throw'];

type Props = {
  addAction: (name: string) => void;
};

function ActionBank({ addAction }: Props) {
  return (
    <ul className={styles.root}>
      {listActions.map((name) => (
        <li key={name}>
          <Action onClick={() => addAction(name)} name={name} />
        </li>
      ))}
    </ul>
  );
}

export default ActionBank;
