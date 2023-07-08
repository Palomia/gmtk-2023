'use client';

import Character from './Character';

import styles from './Game.module.css';

import type { ActionType } from './types';
import ActionSequence from './ActionSequence';
import useGameState from './useGameState';

type Props = {
  endFight: () => void;
  sequence: ActionType[];
};

function Game({ endFight, sequence }: Props) {
  const [{ position, direction, action }, { position: enemyPosition }] =
    useGameState();

  return (
    <div className={styles.root}>
      <ActionSequence sequence={sequence} />{' '}
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
      <button onClick={endFight}> End Fight </button>
    </div>
  );
}

export default Game;
