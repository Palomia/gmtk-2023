'use client';

import { useState } from 'react';

import useInterval from './useInterval';
import Sprite from './Sprite';

type Props = {
  file: string;
  width: number;
  height: number;
  frames: number;
  speed?: number;
  line: number;
  className?: string;
};

function useAnimationFrame(frames: number, speed: number) {
  const [frame, setFrame] = useState(0);

  useInterval(() => setFrame((frame) => (frame + 1) % frames), speed);

  return frame;
}

function Animation({ frames, speed = 100, ...props }: Props) {
  const frame = useAnimationFrame(frames, speed);

  return <Sprite {...props} column={frame} />;
}

export default Animation;
