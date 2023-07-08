import Animation from './Animation';
import spritesheet from '../Sprout Lands - Sprites - premium pack/characters/Premium Charakter Spritesheet.png';
import type { Direction } from './types';

type AnimationType =
  | 'idle'
  | 'walk'
  | 'run'
  | 'shovel'
  | 'axe'
  | 'watering can';

function animationNumber(animationType: AnimationType) {
  switch (animationType) {
    case 'idle':
      return 0;
    case 'walk':
      return 1;
    case 'run':
      return 2;
    case 'shovel':
      return 3;
    case 'axe':
      return 4;
    case 'watering can':
      return 5;
  }
}

function invertedAnimation(animationType: AnimationType) {
  switch (animationType) {
    case 'walk':
    case 'run':
      return true;
    default:
      return false;
  }
}

function directionNumber(animationType: AnimationType, direction: Direction) {
  switch (direction) {
    case 'down':
      return 0;
    case 'up':
      return 1;
    case 'left':
      return invertedAnimation(animationType) ? 3 : 2;
    case 'right':
      return invertedAnimation(animationType) ? 2 : 3;
  }
}

type Props = {
  direction: Direction;
  animationType: AnimationType;
  className?: string;
  start?: number;
};

export default function BunnyAnimation({
  animationType,
  direction,
  start,
  className,
}: Props) {
  return (
    <Animation
      file={spritesheet.src}
      width={48}
      height={48}
      frames={8}
      line={
        animationNumber(animationType) * 4 +
        directionNumber(animationType, direction)
      }
      start={start}
      className={className}
    />
  );
}
