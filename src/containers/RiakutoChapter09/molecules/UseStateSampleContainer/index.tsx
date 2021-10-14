import { useState } from 'react';
import Card001 from 'components/common/molecules/Card001';

const UseEffectSampleContainer: React.VFC = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const reset = () => setCount(0);

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

  return <Card001 count={count} buttons={buttons} />;
};

export default UseEffectSampleContainer;
