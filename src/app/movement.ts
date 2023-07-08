import type { Position } from './types';

function getDirection(movementVector: Position) {
  if (movementVector.x !== 0) return movementVector.x > 0 ? 'right' : 'left';
  if (movementVector.y !== 0) return movementVector.y > 0 ? 'down' : 'up';
  return 'down';
}

function getMovement(
  position: Position,
  enemyPosition: Position,
  property: 'x' | 'y'
) {
  if (position[property] === enemyPosition[property]) return 0;
  return position[property] > enemyPosition[property] ? -1 : 1;
}

function getMovementVector(position: Position, enemyPosition: Position) {
  return {
    x: getMovement(position, enemyPosition, 'x'),
    y: getMovement(position, enemyPosition, 'y'),
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
