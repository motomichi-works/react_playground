import Card001 from 'components/common/molecules-and-atoms/Card001';
import Frame001 from 'components/common/molecules-and-atoms/Frame001';

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
    <Frame001 headingText="カウンター">
      <Card001 count={count} buttons={buttons} />
    </Frame001>
  );
};

export default UseStateSample;
