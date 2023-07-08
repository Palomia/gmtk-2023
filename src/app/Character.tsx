import style from './Character.module.css';
import BunnyAnimation from './BunnyAnimation';
import type { Direction } from './types';

type Props = {
  name: string;
  direction?: Direction;
  position: {
    x: number;
    y: number;
  };
};

function Character({ name, position: { x, y }, direction = 'down' }: Props) {
  return (
    <h1 className={style.root} style={{ left: `${x}px`, top: `${y}px` }}>
      <BunnyAnimation
        animationType="watering can"
        direction={direction}
        className={style.animation}
      />
    </h1>
  );
}

export default Character;
