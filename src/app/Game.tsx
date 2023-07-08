'use client';

import { useState } from 'react';

import useEffectOncePerTick from './useEffectOncePerTick';
import Character from './Character';

import styles from './Game.module.css';

import type { Direction } from './types';

function usePosition(enemyPosition: { x: number; y: number }) {
  const [position, setPosition] = useState({ x: 0, y: 200 });
  const [direction, setDirection] = useState<Direction>('down');

  useEffectOncePerTick(() => {
    const down = position.y > enemyPosition.y;
    const right = position.x > enemyPosition.x;
    setPosition((position) => ({
      x: right ? position.x - 1 : position.x + 1,
      y: down ? position.y - 1 : position.y + 1,
    }));
    setDirection(down ? 'up' : 'down');
    // Careful: This dependency array cannot be checked automatically
  }, [enemyPosition]);

  return { position, direction };
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
  const { position, direction } = usePosition(enemyPosition);

  return (
    <div className={styles.root}>
      <Character
        name="Alice"
        position={enemyPosition}
        direction="left"
        health={0.7}
      />
      <Character
        name="Bob"
        position={position}
        direction={direction}
        health={0.4}
      />
    </div>
  );
}

export default Game;
