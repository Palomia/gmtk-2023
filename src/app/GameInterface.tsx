import ActionSequence from './ActionSequence';
import Game from './Game';
import { ActionType } from './types';

type Props = {
  endFight: () => void;
  sequence: ActionType[];
};

function GameInterface({ endFight, sequence }: Props) {
  return (
    <>
      <ActionSequence sequence={sequence} />
      <Game />
      <button onClick={endFight}> End Fight </button>
    </>
  );
}

export default GameInterface;
