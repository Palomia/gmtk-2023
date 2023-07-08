'use client';
import ActionBank from './ActionBank';
import ActionSequence from './ActionSequence';
import useSequence from './useSequence';

function Editor() {
  const { sequence, deleteAction, addAction } = useSequence();

  return (
    <div>
      <ActionSequence deleteAction={deleteAction} sequence={sequence} />{' '}
      <ActionBank addAction={addAction} />
    </div>
  );
}

export default Editor;
