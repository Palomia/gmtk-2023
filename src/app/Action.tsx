import styles from './Action.module.css';
import stringToColour from './stringToColour';

type Props = {
  name: string;
  onClick: () => void;
};

function Action({ name, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: stringToColour(name) }}
      className={styles.root}
    >
      {name}
    </div>
  );
}

export default Action;
