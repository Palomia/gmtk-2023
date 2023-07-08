'use client';

import Editor from './Editor';
import Game from './Game';
import useFighting from './useFighting';

export default function Home() {
  const { fighting, launchFight, endFight } = useFighting();

  //render
  return <>{fighting ? <Game /> : <Editor launchFight={launchFight} />}</>;
}
