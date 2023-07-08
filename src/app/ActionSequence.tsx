'use client';
import styles from './ActionSequence.module.css';
import Action from './Action';
import { ActionType } from './types';

type Props = {
  deleteAction: (index: number) => void;
  sequence: ActionType[];
};

function ActionSequence({ deleteAction, sequence }: Props) {
  return (
    <ul className={styles.root}>
      {sequence.map((action, index) => (
        <li key={index}>
          <Action onClick={() => deleteAction(index)} name={action.name} />
        </li>
      ))}
      <li>
        <Action name={'New'} />
      </li>
    </ul>
  );
}

export default ActionSequence;
