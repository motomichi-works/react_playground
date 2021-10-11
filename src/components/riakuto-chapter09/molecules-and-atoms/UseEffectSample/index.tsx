import Card001 from 'components/common/molecules-and-atoms/Card001';
import Heading001 from 'components/common/molecules-and-atoms/Heading001';
import styles from './index.module.scss';

type Props = {
  timeLeft: number;
  reset: () => void;
};

const UseEffectSample: React.VFC<Props> = ({ timeLeft, reset }) => {
  const buttons = [
    {
      label: 'reset',
      handleClick: reset,
    },
  ];

  return (
    <div className={styles.UseEffectSample}>
      <div className={styles.HeadingWrapper}>
        <Heading001 text="タイマー" modifierClassNames={['m_Lv3']} />
      </div>
      <div className={styles.MainContentsWrapper}>
        <Card001 count={timeLeft} buttons={buttons} />
      </div>
    </div>
  );
};

export default UseEffectSample;
