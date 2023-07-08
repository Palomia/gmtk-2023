import style from './Character.module.css';
import Animation from './Animation';
import spritesheet from '../Sprout Lands - Sprites - premium pack/characters/Premium Charakter Spritesheet.png';

type Props = {
  name: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  position: {
    x: number;
    y: number;
  };
};

function getAnimationLine(direction: Props['direction']) {
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

function Character({ name, position: { x, y }, direction = 'down' }: Props) {
  return (
    <h1 className={style.root} style={{ left: `${x}px`, top: `${y}px` }}>
      <Animation
        file={spritesheet.src}
        width={48}
        height={48}
        frames={8}
        line={getAnimationLine(direction)}
      />
    </h1>
  );
}

export default Character;
