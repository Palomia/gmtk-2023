'use client';

import Editor from './Editor';
import Game from './Game';
import useFighting from './useFighting';
import useSequence from './useSequence';

export default function Home() {
  const { fighting, launchFight, endFight } = useFighting();
  const { sequence, deleteAction, addAction } = useSequence();

  //render
  return (
    <>
      {fighting ? (
        <Game endFight={endFight} sequence={sequence} />
      ) : (
        <Editor
          launchFight={launchFight}
          sequence={sequence}
          deleteAction={deleteAction}
          addAction={addAction}
        />
      )}
    </>
  );
}
