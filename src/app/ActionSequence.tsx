'use client';
import { useState } from 'react';
import stringToColour from './stringToColour';

function ActionSequence() {
  //state
  const [sequence, setSequence] = useState([{ name: 'move' }]);
  //comportement

  //render
  return (
    <ul>
      {sequence.map((action) => (
        <li key={action.name}>{action.name} </li>
      ))}
    </ul>
  );
}

export default ActionSequence;
