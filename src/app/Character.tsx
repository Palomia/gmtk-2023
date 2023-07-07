import style from './Character.module.css';

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
      {name}
    </h1>
  );
}

export default Character;
