import { useState } from 'react';

function useFighting() {
  const [fighting, setFighting] = useState(false);

  const launchFight = () => {
    setFighting(true);
  };

  const endFight = () => {
    setFighting(false);
  };

  return { fighting, launchFight, endFight };
}

export default useFighting;
