import Card001 from 'components/common/molecules-and-atoms/Card001';
import Heading001 from 'components/common/molecules-and-atoms/Heading001';
import styles from './index.module.scss';

type Props = {
  count: number;
  increment: () => void;
  reset: () => void;
};

const UseStateSample: React.VFC<Props> = ({ count, increment, reset }) => {
  const buttons = [
    {
      label: 'reset',
      handleClick: reset,
    },
    {
      label: '+1',
      handleClick: increment,
    },
  ];

  return (
    <div className={styles.UseStateSample}>
      <div className={styles.HeadingWrapper}>
        <Heading001 text="カウンター" modifierClassNames={['m_Lv3']} />
      </div>
      <div className={styles.MainContentsWrapper}>
        <Card001 count={count} buttons={buttons} />
      </div>
    </div>
  );
};

export default UseStateSample;
