'use client';

import { useState } from 'react';

import { addMovement, getDirection, getMovementVector } from './movement';
import useEffectOncePerTick from './useEffectOncePerTick';
import Character from './Character';

import styles from './Game.module.css';

import type { ActionType, Direction } from './types';
import ActionSequence from './ActionSequence';

function usePosition(enemyPosition: { x: number; y: number }) {
  const [position, setPosition] = useState({ x: 0, y: 200 });
  const [direction, setDirection] = useState<Direction>('down');

  useEffectOncePerTick(() => {
    const movementVector = getMovementVector(position, enemyPosition);
    setPosition((position) => addMovement(position, movementVector));
    setDirection(getDirection(movementVector));
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

type Props = {
  endFight: () => void;
  sequence: ActionType[];
};

function Game({ endFight, sequence }: Props) {
  const enemyPosition = useEnemyPosition();
  const { position, direction } = usePosition(enemyPosition);

  return (
    <div className={styles.root}>
      <ActionSequence sequence={sequence} />{' '}
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
      <button onClick={endFight}> End Fight </button>
    </div>
  );
}

export default Game;
