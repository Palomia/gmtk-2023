'use client';
import ActionBank from './ActionBank';
import ActionSequence from './ActionSequence';
import useSequence from './useSequence';

type Props = {
  launchFight: () => void;
  sequence: { name: string }[];
  deleteAction: (index: number) => void;
  addAction: (name: string) => void;
};

function Editor({ launchFight, sequence, deleteAction, addAction }: Props) {
  return (
    <>
      <ActionSequence deleteAction={deleteAction} sequence={sequence} />{' '}
      <ActionBank addAction={addAction} />
      <button onClick={launchFight}> Lauch Fight </button>
    </>
  );
}

export default Editor;
