import { useState } from 'react';

import {
  addMovement,
  distance,
  getDirection,
  getMovementVector,
} from './movement';
import useEffectOncePerTick from './useEffectOncePerTick';

import type { Direction, Position } from './types';

const initialPlayerState = {
  position: { x: 0, y: 200 },
  direction: 'down',
  action: 'idle',
} as const;

const initialEnemyState = {
  position: { x: 100, y: 100 },
  direction: 'down',
  action: 'idle',
} as const;

type CharacterType = {
  position: Position;
  direction: Direction;
  action: 'idle' | 'walk' | 'attack';
};
type GameState = [CharacterType, CharacterType];

function playerTurn(gameState: GameState): GameState {
  const [playerState, enemyState] = gameState;
  const { position } = playerState;
  const { position: enemyPosition } = enemyState;

  if (distance(position, enemyPosition) < 10)
    return [{ ...playerState, action: 'attack' }, enemyState];

  const movementVector = getMovementVector(position, enemyPosition);
  const action = 'walk';
  const newPosition = addMovement(position, movementVector);
  const direction = getDirection(movementVector);

  return [
    { ...playerState, position: newPosition, direction, action },
    enemyState,
  ];
}

function enemyTurn(gameState: GameState): GameState {
  const [playerState, enemyState] = gameState;
  const { position } = enemyState;

  return [
    playerState,
    {
      ...enemyState,
      position: {
        ...position,
        x: position.x + 1,
      },
    },
  ];
}

function updateGameState(gameState: GameState): GameState {
  const gameState2 = playerTurn(gameState);
  const gameState3 = enemyTurn(gameState2);
  return gameState3;
}

function useGameState() {
  const [gameState, setGameState] = useState<GameState>([
    initialPlayerState,
    initialEnemyState,
  ]);

  useEffectOncePerTick(() => setGameState(updateGameState), []);

  return gameState;
}

export default useGameState;
