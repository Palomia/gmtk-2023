'use client';
import ActionBank from './ActionBank';
import ActionSequence from './ActionSequence';
import useSequence from './useSequence';

type Props = {
  launchFight: () => void;
};

function Editor({ launchFight }: Props) {
  const { sequence, deleteAction, addAction } = useSequence();

  return (
    <>
      <ActionSequence deleteAction={deleteAction} sequence={sequence} />{' '}
      <ActionBank addAction={addAction} />
      <button onClick={launchFight}> Lauch Fight </button>
    </>
  );
}

export default Editor;
