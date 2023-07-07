import style from './Character.module.css';

type Props = {
  name: string;
};

function Character({ name }: Props) {
  return <h1 className={style.root}>{name}</h1>;
}

export default Character;
