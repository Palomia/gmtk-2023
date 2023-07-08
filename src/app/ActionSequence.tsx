'use client';
import styles from './ActionSequence.module.css';
import Action from './Action';

type ActionType = { name: string };

type Props = {
  deleteAction: (name: string) => void;
  sequence: ActionType[];
};

function ActionSequence({ deleteAction, sequence }: Props) {
  return (
    <ul className={styles.root}>
      {sequence.map((action) => (
        <li key={action.name}>
          <Action
            onClick={() => deleteAction(action.name)}
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
