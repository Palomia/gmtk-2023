import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import volume2 from '@/assets/feather/volume-2.svg';
import volumeX from '@/assets/feather/volume-x.svg';

import styles from './Music.module.css';

function Music() {
  const ref = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState<boolean>();

  useEffect(() => {
    const audio = ref.current;
    if (!audio) return;
    playing ? audio.play() : audio.pause();
  }, [playing]);

  return (
    <>
      <button
        className={styles.root}
        onClick={() => setPlaying((playing) => !playing)}
      >
        <Image
          src={playing ? volume2 : volumeX}
          alt="Play"
          width={24}
          height={24}
        />
      </button>
      <audio onPlay={() => setPlaying(true)} ref={ref} src="editor.mp3" loop />
    </>
  );
}

export default Music;
