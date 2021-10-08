import Heading001 from 'components/common/molecules-and-atoms/Heading001';
import styles from './index.module.scss';

type Props = {
  count: number;
  increment: () => void;
  reset: () => void;
};

const Counter: React.VFC<Props> = ({ count, increment, reset }) => (
  <div className={styles.Counter}>
    <div className={styles.HeadingWrapper}>
      <Heading001 text="カウンター" modifierClassNames={['Lv3']} />
    </div>
    <div className={styles.MainContentsWrapper}>
      <div className={styles.NumberBoard}>{count}</div>
      <div className={styles.ButtonRow}>
        <button type="button" className={styles.Button} onClick={reset}>
          Reset
        </button>
        <button type="button" className={styles.Button} onClick={increment}>
          +1
        </button>
      </div>
    </div>
  </div>
);

export default Counter;
