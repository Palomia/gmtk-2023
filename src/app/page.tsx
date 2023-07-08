import Image from 'next/image';
import styles from './page.module.css';
import Title from './Title';
import ActionBank from './ActionBank';
import ActionSequence from './ActionSequence';

export default function Home() {
  return (
    <div>
      <ActionSequence /> <ActionBank />
    </div>
  );
}
