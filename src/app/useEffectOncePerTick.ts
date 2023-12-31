import { useEffect, useRef } from 'react';
import useTick from './useTick';

/**
 * @param deps **WARNING**: Cannot be checked automatically
 */
function useEffectOncePerTick(effect: (tick: number) => void, deps: unknown[]) {
  const tick = useTick();
  const lastHandledTick = useRef(-1);

  useEffect(() => {
    if (lastHandledTick.current === tick) return;
    lastHandledTick.current = tick;
    effect(tick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [effect, tick, ...deps]);
}

export default useEffectOncePerTick;
