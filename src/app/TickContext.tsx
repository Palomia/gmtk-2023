import { createContext, useState } from 'react';

import useInterval from './useInterval';

const TickContext = createContext(-1);

function TickContextProvider({ children }: { children: React.ReactNode }) {
  const [tick, setTick] = useState(0);

  useInterval(() => setTick((tick) => tick + 1), 30);

  return <TickContext.Provider value={tick}>{children}</TickContext.Provider>;
}

export { TickContextProvider, TickContext };
