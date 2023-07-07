import styles from './Action.module.css';

type Props = {
  name: string;
};

function Action({ name }: Props) {
  return <div className={styles.root}>{name}</div>;
}

export default Action;
