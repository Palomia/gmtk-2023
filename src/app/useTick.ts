import { useContext } from 'react';
import { TickContext } from './TickContext';

function useTick() {
  return useContext(TickContext);
}

export default useTick;
