'use client';

import Character from './Character';

import styles from './Game.module.css';

import useGameState from './useGameState';

function Game() {
  const [player, enemy] = useGameState();

  return (
    <div className={styles.root}>
      <Character {...enemy} />
      <Character {...player} />
    </div>
  );
}

export default Game;
