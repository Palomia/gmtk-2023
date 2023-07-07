import styles from './Action.module.css';
import stringToColour from './stringToColour';

type Props = {
  name: string;
};

function Action({ name }: Props) {
  return (
    <div
      style={{ backgroundColor: stringToColour(name) }}
      className={styles.root}
    >
      {name}
    </div>
  );
}

export default Action;
