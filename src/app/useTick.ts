import { useState } from 'react';
import useInterval from './useInterval';

function useTick() {
  const [tick, setTick] = useState(0);

  useInterval(() => setTick((tick) => tick + 1), 100);

  return tick;
}

export default useTick;
