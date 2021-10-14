import useTimer from 'hooks/use-timer';
import Card001 from 'components/common/molecules/Card001';

type Props = {
  limit: number;
};

const CustomHookSampleContainer: React.VFC<Props> = ({ limit }) => {
  const [timeLeft, isPrime, reset] = useTimer(limit);

  const buttons = [
    {
      label: 'reset',
      handleClick: reset,
    },
  ];

  const modifierClassNames: 'm_EmpasisColor'[] = isPrime
    ? ['m_EmpasisColor']
    : [];

  return (
    <Card001
      count={timeLeft}
      buttons={buttons}
      modifierClassNames={modifierClassNames}
    />
  );
};

export default CustomHookSampleContainer;
