'use client';

import { useState } from 'react';

import useEffectOncePerTick from './useEffectOncePerTick';
import Character from './Character';

import styles from './Game.module.css';

function usePosition(enemyPosition: { x: number; y: number }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffectOncePerTick(() => {
    setPosition((position) => ({
      x: position.x > enemyPosition.x ? position.x - 1 : position.x + 1,
      y: position.y > enemyPosition.y ? position.y - 1 : position.y + 1,
    }));
    // Careful: This dependency array cannot be checked automatically
  }, [enemyPosition]);

  return position;
}

function useEnemyPosition() {
  const [enemyPosition, setEnemyPosition] = useState({ x: 100, y: 100 });

  useEffectOncePerTick(
    () => setEnemyPosition((position) => ({ ...position, x: position.x + 1 })),
    []
  );

  return enemyPosition;
}

function Game() {
  const enemyPosition = useEnemyPosition();
  const position = usePosition(enemyPosition);

  return (
    <div className={styles.root}>
      <Character name="Alice" position={enemyPosition} direction="left" />
      <Character name="Bob" position={position} />
    </div>
  );
}

export default Game;
