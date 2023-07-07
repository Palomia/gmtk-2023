import Character from './Character';

import styles from './Game.module.css';

function Game() {
  return (
    <div className={styles.root}>
      <Character name="Alice" position={{ x: 100, y: 100 }} />
    </div>
  );
}

export default Game;
