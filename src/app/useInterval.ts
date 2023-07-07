import { useEffect } from 'react';

function useInterval(callback: () => void, delay: number) {
  useEffect(() => {
    const intervalId = setInterval(callback, delay);

    return () => clearInterval(intervalId);
  }, [callback, delay]);
}

export default useInterval;
