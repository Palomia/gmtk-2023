type Direction = 'down' | 'up' | 'left' | 'right';

type Position = {
  x: number;
  y: number;
};

type ActionType = { name: string };

type CharacterType = {
  position: Position;
  direction: Direction;
  action: 'idle' | 'walk' | 'attack';
  health: number;
};

type GameState = [CharacterType, CharacterType];

export type { Direction, Position, ActionType, CharacterType, GameState };
