'use client';

import Sprite from './Sprite';
import useTick from './useTick';

type Props = {
  file: string;
  width: number;
  height: number;
  frames: number;
  line: number;
  start?: number;
  className?: string;
};

function Animation({ frames, start = 0, ...props }: Props) {
  const tick = useTick();
  const frame = (tick - start) % frames;

  return <Sprite {...props} column={frame} />;
}

export default Animation;
