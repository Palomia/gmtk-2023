import background from '../mapv0.json';
import LayerMap from './LayerMap';

const layer1 = background.layers[0].data;
const layer2 = background.layers[1].data;

function BackgroundMap() {
  return (
    <>
      <LayerMap layer={layer1} />
      <LayerMap layer={layer2} />
    </>
  );
}

export default BackgroundMap;
