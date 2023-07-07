import stringToColour from './stringToColour';
import styles from './ActionBank.module.css';
import Action from './Action';

const listActions = [
  'Move',
  'Attack',
  'Defense',
  'Fake Attack',
  'Heavy Attack',
];
const htmlActions = listActions.map((name) => (
  <li key={name} style={{ backgroundColor: stringToColour(name) }}>
    <Action name={name} />
  </li>
));

function ActionBank() {
  return <ul className={styles.root}>{htmlActions}</ul>;
}

export default ActionBank;
