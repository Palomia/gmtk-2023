import style from './Character.module.css';
import Animation from './Animation';
import spritesheet from '../Sprout Lands - Sprites - premium pack/characters/Premium Charakter Spritesheet.png';

type Props = {
  name: string;
  position: {
    x: number;
    y: number;
  };
};

function Character({ name, position: { x, y } }: Props) {
  return (
    <h1 className={style.root} style={{ left: `${x}px`, top: `${y}px` }}>
      <Animation file={spritesheet.src} width={48} height={48} frames={8} />
    </h1>
  );
}

export default Character;
