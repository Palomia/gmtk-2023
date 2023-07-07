import Character from './Character';

import styles from './Game.module.css';

function Game() {
  return (
    <div className={styles.root}>
      <Character name="Alice" />
    </div>
  );
}

export default Game;
