import Heading001 from 'components/common/molecules-and-atoms/Heading001';
import styles from './index.module.scss';

type Props = {
  timeLeft: number;
  reset: () => void;
};

const UseEffectSample: React.VFC<Props> = ({ timeLeft, reset }) => (
  <div className={styles.UseEffectSample}>
    <div className={styles.HeadingWrapper}>
      <Heading001 text="タイマー" modifierClassNames={['m_Lv3']} />
    </div>
    <div className={styles.MainContentsWrapper}>
      <div className={styles.NumberBoard}>{timeLeft}</div>
      <div className={styles.ButtonRow}>
        <button type="button" className={styles.Button} onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  </div>
);

export default UseEffectSample;
