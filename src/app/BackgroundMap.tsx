import background from '../mapv0.json';
import Sprite from './Sprite';
import styles from './BackgroundMap.module.css';

import spritesheetTallGrass from '../Sprout Lands - Sprites - premium pack/tilesets/Ground tiles/new tiles/Tall Grass hill tiles v.2.png';
import spritesheetWater from '../Sprout Lands - Sprites - premium pack/tilesets/water frames/Water_2.png';

const spriteSheet = [
  { name: 'Tall Grass hill tiles v.2', source: spritesheetTallGrass.src },
  { name: 'Water_2', source: spritesheetWater.src },
];

const layer1 = background.layers[0].data;
const layer2 = background.layers[1].data;

function BackgroundMap() {
  console.log(background.tilesets);
  return (
    <ul className={styles.root}>
      {layer1.map((id) => {
        const realId = id - 1;
        return (
          <li key={id}>
            <Sprite
              file={id > 48 ? spritesheetWater.src : spritesheetTallGrass.src}
              width={16}
              height={16}
              line={id > 48 ? 1 : Math.floor(realId / 6)}
              column={id > 48 ? 1 : realId % 6}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default BackgroundMap;
