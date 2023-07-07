import stringToColour from './stringToColour';

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
  return <ul>{htmlActions}</ul>;
}

export default ActionBank;
