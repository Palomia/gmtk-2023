import style from './Character.module.css';
import BunnyAnimation from './BunnyAnimation';
import type { Direction } from './types';

type Props = {
  direction?: Direction;
  position: {
    x: number;
    y: number;
  };
  health: number;
  action: 'idle' | 'walk' | 'attack';
};

declare module 'csstype' {
  interface Properties {
    '--health'?: string;
  }
}

function Character({
  position: { x, y },
  direction = 'down',
  health,
  action,
}: Props) {
  return (
    <h1
      className={style.root}
      style={{ left: `${x}px`, top: `${y}px`, '--health': `${health * 100}%` }}
    >
      <BunnyAnimation
        animationType={action === 'attack' ? 'axe' : action}
        direction={direction}
        className={style.animation}
      />
    </h1>
  );
}

export default Character;
