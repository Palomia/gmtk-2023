import type { Position } from './types';

function getDirection(movementVector: Position) {
  if (Math.abs(movementVector.x) > Math.abs(movementVector.y))
    return movementVector.x > 0 ? 'right' : 'left';
  return movementVector.y < 0 ? 'up' : 'down';
}

function getMovementVector(position: Position, enemyPosition: Position) {
  const dist = distance(position, enemyPosition);
  return {
    x: (enemyPosition.x - position.x) / dist,
    y: (enemyPosition.y - position.y) / dist,
  };
}

function addMovement(position: Position, movement: Position) {
  return {
    x: position.x + movement.x,
    y: position.y + movement.y,
  };
}

function distance(position: Position, enemyPosition: Position) {
  return Math.sqrt(
    Math.pow(position.x - enemyPosition.x, 2) +
      Math.pow(position.y - enemyPosition.y, 2)
  );
}

export { getDirection, getMovementVector, addMovement, distance };
