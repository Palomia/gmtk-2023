'use client';

import Character from './Character';

import styles from './Game.module.css';

import useGameState from './useGameState';

function Game() {
  const [{ position, direction, action }, { position: enemyPosition }] =
    useGameState();

  return (
    <div className={styles.root}>
      <Character
        name="Alice"
        position={enemyPosition}
        direction="left"
        health={0.7}
        action="idle"
      />
      <Character
        name="Bob"
        position={position}
        direction={direction}
        action={action}
        health={0.4}
      />
    </div>
  );
}

export default Game;
