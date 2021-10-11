import Card001 from 'components/common/molecules-and-atoms/Card001';
import Frame001 from 'components/common/molecules-and-atoms/Frame001';

type Props = {
  timeLeft: number;
  reset: () => void;
  primes: number[];
};

const MemoizeSample: React.VFC<Props> = ({ timeLeft, reset, primes }) => {
  const buttons = [
    {
      label: 'reset',
      handleClick: reset,
    },
  ];

  const modifierClassNames: 'm_EmpasisColor'[] = primes.includes(timeLeft)
    ? ['m_EmpasisColor']
    : [];

  return (
    <Frame001 headingText="タイマー">
      <Card001
        count={timeLeft}
        buttons={buttons}
        modifierClassNames={modifierClassNames}
      />
    </Frame001>
  );
};

export default MemoizeSample;
