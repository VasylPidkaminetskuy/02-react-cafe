import type { VoteType } from '../../types/votes';
import css from './VoteOptions.module.css';

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
    onReset: () => void;
    canreset: () => boolean;

}

export default function VoteOptions({ onVote, onReset, canreset }: VoteOptionsProps) {
  return (
    <div className={css.container}>
          <button onClick={() => {onVote('good')}} className={css.button}>
        Good
      </button>
      <button onClick={() => {onVote('neutral')}} className={css.button}>
        Neutral
      </button>
      <button onClick={() => {onVote('bad')}} className={css.button}>
        Bad
      </button>
          {canreset() && (<button onClick={onReset} className={`${css.button} ${css.reset}`}>
              Reset
          </button>)}
    </div>
  );
}
