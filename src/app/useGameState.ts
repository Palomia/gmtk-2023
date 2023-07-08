import { useState } from 'react';

import useEffectOncePerTick from './useEffectOncePerTick';
import updateGameState from './updateGameState';

import type { GameState } from './types';

const initialPlayerState = {
  position: { x: 0, y: 200 },
  direction: 'down',
  action: 'idle',
  health: 1,
} as const;

const initialEnemyState = {
  position: { x: 100, y: 100 },
  direction: 'down',
  action: 'idle',
  health: 1,
} as const;

function useGameState() {
  const [gameState, setGameState] = useState<GameState>([
    initialPlayerState,
    initialEnemyState,
  ]);

  useEffectOncePerTick(() => setGameState(updateGameState), []);

  return gameState;
}

export default useGameState;
