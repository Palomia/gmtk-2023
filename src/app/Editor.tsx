'use client';
import ActionBank from './ActionBank';
import ActionSequence from './ActionSequence';
import { ActionType } from './types';

type Props = {
  launchFight: () => void;
  sequence: ActionType[];
  deleteAction: (index: number) => void;
  addAction: (name: string) => void;
};

function Editor({ launchFight, sequence, deleteAction, addAction }: Props) {
  return (
    <>
      <ActionSequence onActionClick={deleteAction} sequence={sequence} />{' '}
      <ActionBank addAction={addAction} />
      <button onClick={launchFight}> Lauch Fight </button>
    </>
  );
}

export default Editor;
