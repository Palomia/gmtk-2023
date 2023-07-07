import stringToColour from './stringToColour';
import styles from './ActionBank.module.css';

const listActions = [
  'Move',
  'Attack',
  'Defense',
  'Fake Attack',
  'Heavy Attack',
];
const htmlActions = listActions.map((action) => (
  <li key={action} style={{ backgroundColor: stringToColour(action) }}>
    {action}
  </li>
));

function ActionBank() {
  return <ul className={styles.root}>{htmlActions}</ul>;
}

export default ActionBank;
