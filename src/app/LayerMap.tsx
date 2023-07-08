import Sprite from './Sprite';
import styles from './LayerMap.module.css';

import spritesheetTallGrass from '../Sprout Lands - Sprites - premium pack/tilesets/Ground tiles/new tiles/Tall Grass hill tiles v.2.png';
import spritesheetWater from '../Sprout Lands - Sprites - premium pack/tilesets/water frames/Water_2.png';

type TileProps = {
  id: number;
};

function Tile({ id }: TileProps) {
  return (
    <Sprite
      file={id > 48 ? spritesheetWater.src : spritesheetTallGrass.src}
      width={16}
      height={16}
      line={id > 48 ? 1 : Math.floor((id - 1) / 6)}
      column={id > 48 ? 1 : (id - 1) % 6}
    />
  );
}

type Props = {
  layer: number[];
};
function LayerMap({ layer }: Props) {
  return (
    <ul className={styles.root}>
      {layer.map((id, index) => (
        <li key={index}>
          <Tile id={id} />
        </li>
      ))}
    </ul>
  );
}

export default LayerMap;
