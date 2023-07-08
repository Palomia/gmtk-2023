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

function directionNumber(direction: Direction) {
  switch (direction) {
    case 'down':
      return 0;
    case 'up':
      return 1;
    case 'left':
      return 2;
    case 'right':
      return 3;
  }
}

type Props = {
  direction: Direction;
  animationType: AnimationType;
  className?: string;
};

export default function BunnyAnimation({
  animationType,
  direction,
  className,
}: Props) {
  return (
    <Animation
      file={spritesheet.src}
      width={48}
      height={48}
      frames={8}
      line={animationNumber(animationType) * 4 + directionNumber(direction)}
      className={className}
    />
  );
}
