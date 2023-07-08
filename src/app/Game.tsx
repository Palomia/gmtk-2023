'use client';

import BackgroundMap from './BackgroundMap';
import Character from './Character';

import styles from './Game.module.css';

import useGameState from './useGameState';

function Game() {
  const [player, enemy] = useGameState();

  return (
    <div className={styles.root}>
      <BackgroundMap />
      <Character {...enemy} />
      <Character {...player} />
    </div>
  );
}

export default Game;
