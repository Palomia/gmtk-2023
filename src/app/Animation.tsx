'use client';

import { useState } from 'react';

import useInterval from './useInterval';

type Props = {
  file: string;
  width: number;
  height: number;
  frames: number;
  speed?: number;
  line?: number;
};

function useAnimationFrame(frames: number, speed: number) {
  const [frame, setFrame] = useState(0);

  useInterval(() => setFrame((frame) => (frame + 1) % frames), speed);

  return frame;
}

function Animation({
  file,
  width,
  height,
  frames,
  speed = 100,
  line = 0,
}: Props) {
  const frame = useAnimationFrame(frames, speed);

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url("${file}")`,
        backgroundPositionX: `${frame * width}px`,
        backgroundPositionY: `${-line * height}px`,
      }}
    />
  );
}

export default Animation;
