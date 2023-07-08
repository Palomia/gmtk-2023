// This file is business logic only. No React Code.

import {
  addMovement,
  distance,
  getDirection,
  getMovementVector,
} from './movement';

import type { GameState } from './types';

function attack(gameState: GameState, tick: number): GameState {
  const [playerState, enemyState] = gameState;

  // Start Attacking
  if (playerState.startAttack === undefined)
    return [
      { ...playerState, action: 'attack', startAttack: tick },
      enemyState,
    ];

  // Inflict Damage
  if (tick - playerState.startAttack === 4)
    return [
      playerState,
      { ...enemyState, health: Math.max(0, enemyState.health - 0.1) },
    ];

  // End of recovery
  if (tick - playerState.startAttack === 8)
    return [
      { ...playerState, action: 'idle', startAttack: undefined },
      enemyState,
    ];

  // Waiting
  return gameState;
}

function move(gameState: GameState): GameState {
  const [playerState, enemyState] = gameState;
  const { position } = playerState;
  const { position: enemyPosition } = enemyState;

  const movementVector = getMovementVector(position, enemyPosition);
  const action = 'walk';
  const newPosition = addMovement(position, movementVector);
  const direction = getDirection(movementVector);

  return [
    { ...playerState, position: newPosition, direction, action },
    enemyState,
  ];
}

function playerTurn(gameState: GameState, tick: number): GameState {
  const [playerState, enemyState] = gameState;
  const { position } = playerState;
  const { position: enemyPosition } = enemyState;

  return distance(position, enemyPosition) < 10
    ? attack(gameState, tick)
    : move(gameState);
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
        x: position.x + 0,
      },
    },
  ];
}
function updateGameState(gameState: GameState, tick: number): GameState {
  const gameState2 = playerTurn(gameState, tick);
  const gameState3 = enemyTurn(gameState2);
  return gameState3;
}

export default updateGameState;
