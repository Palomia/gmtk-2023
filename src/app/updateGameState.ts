import {
  addMovement,
  distance,
  getDirection,
  getMovementVector,
} from './movement';

import type { GameState } from './types';

function playerTurn(gameState: GameState): GameState {
  const [playerState, enemyState] = gameState;
  const { position } = playerState;
  const { position: enemyPosition } = enemyState;

  if (distance(position, enemyPosition) < 10)
    return [
      { ...playerState, action: 'attack' },
      {
        ...enemyState,
        health: Math.max(enemyState.health - 0.1, 0),
      },
    ];

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
        x: position.x + 0,
      },
    },
  ];
}
function updateGameState(gameState: GameState): GameState {
  const gameState2 = playerTurn(gameState);
  const gameState3 = enemyTurn(gameState2);
  return gameState3;
}

export default updateGameState;
