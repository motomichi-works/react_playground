import { useState, useEffect } from 'react';
import Card001 from 'components/common/molecules/Card001';

type Props = {
  limit: number;
};

const UseEffectSampleContainer: React.VFC<Props> = ({ limit }) => {
  const [timeLeft, setTimeLeft] = useState(limit);
  const reset = (): void => setTimeLeft(limit);
  const tick = (): void => setTimeLeft((t) => t - 1);

  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, []);

  // Desc: ここは9-4で第二引数に配列を渡すことで修正されるので、9-3時点では一旦このまま
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (timeLeft === 0) setTimeLeft(limit);
  });

  const buttons = [
    {
      label: 'reset',
      handleClick: reset,
    },
  ];

  return <Card001 count={timeLeft} buttons={buttons} />;
};

export default UseEffectSampleContainer;
