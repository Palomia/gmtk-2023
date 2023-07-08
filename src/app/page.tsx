'use client';

import Editor from './Editor';
import GameInterface from './GameInterface';
import { TickContextProvider } from './TickContext';
import useFighting from './useFighting';
import useSequence from './useSequence';
import Music from './Music';

export default function Home() {
  const { fighting, launchFight, endFight } = useFighting();
  const { sequence, deleteAction, addAction } = useSequence();

  //render
  return (
    <TickContextProvider>
      <Music />
      {fighting ? (
        <GameInterface endFight={endFight} sequence={sequence} />
      ) : (
        <Editor
          launchFight={launchFight}
          sequence={sequence}
          deleteAction={deleteAction}
          addAction={addAction}
        />
      )}
    </TickContextProvider>
  );
}
